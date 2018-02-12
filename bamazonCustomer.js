var Table = require('cli-table');
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "bamazon"
});
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    tableCreate();
});
/*
    inquirer
        .prompt({
            name: "postOrBid",
            type: "rawlist",
            message: "Would you like to [POST] an auction or [BID] on an auction?",
            choices: ["POST", "BID"]
        })
        .then(function(answer) {
            if (answer.postOrBid.toUpperCase() === "POST") {
                return;
            } else {
                tableCreate();
                return;
            }
        });
}*/

function tableCreate() {
    connection.query("SELECT * FROM products", function(err, results) {
        var table = new Table({
            head: ['Item ID', 'Item Name', 'Department', 'Price USD', 'Current Inventory'],

        });
        for (i = 0; i < results.length; i++) {
            table.push([results[i].item_id, results[i].product_name, results[i].department_name, results[i].price, results[i].stock_quantity]);
        }
        console.log(table.toString());
        inquirer
            .prompt([{
                name: "buy",
                type: "input",
                message: "What is the item ID of the item you would like to buy?"
            }, {
                name: "quanity",
                type: "input",
                message: "How many would you like to buy?"
            }])
            .then(function(answer) {
                console.log(answer);
                var itemQuanity = answer.quanity;
                var itemID = answer.buy;
                // Query db to confirm that the given item ID exists in the desired quantity
                var queryStr = 'SELECT * FROM products WHERE ?';

                connection.query(queryStr, { item_id: itemID }, function(err, data) {
                    if (err) throw err;

                    // If the user has selected an invalid item ID, data attay will be empty
                    // console.log('data = ' + JSON.stringify(data));

                    if (data.length === 0) {
                        console.log('ERROR: Invalid Item ID. Please select a valid Item ID.');
                        inquirer
                            .prompt({
                                name: "notEnough",
                                type: "confirm",
                                message: "Would you like to see the current inventory again?"
                            }).then(function(answer) {
                                if (answer.notEnough === true) {
                                    tableCreate();
                                }
                            });

                    } else {
                        var productData = data[0];

                        if (itemQuanity <= productData.stock_quantity) {
                            console.log('Congratulations, the product you requested is in stock! Placing order!');

                            // Construct the updating query string
                            var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - itemQuanity) + ' WHERE item_id = ' + itemID;

                            // Update the inventory
                            connection.query(updateQueryStr, function(err, data) {
                                if (err) throw err;

                                console.log('Your oder has been placed! Your total is $' + productData.price * itemQuanity);
                                console.log('Thank you for shopping with us!');
                                console.log("\n---------------------------------------------------------------------\n");

                                // End the database connection
                                connection.end();
                            })
                        } else {
                            console.log('Sorry, there is not enough product in stock, your order can not be placed as is.');
                            console.log('Please modify your order.');
                            console.log("\n---------------------------------------------------------------------\n");
                            inquirer
                                .prompt({
                                    name: "notEnough",
                                    type: "confirm",
                                    message: "Would you like to see the current inventory again?"
                                }).then(function(answer) {
                                    if (answer.notEnough === true) {
                                        tableCreate();
                                    }
                                });
                        }
                    }
                });
            });

    });
}
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
    tableCreate();
});

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
                var itemQuanity = answer.quanity;
                var itemID = answer.buy;
                var queryStr = 'SELECT * FROM products WHERE ?';

                connection.query(queryStr, { item_id: itemID }, function(err, data) {
                    if (err) throw err;

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
                                } {
                                    console.log("Thank you for looking at our store! We hope to help you in the future.");
                                }
                            });

                    } else {
                        var productData = data[0];

                        if (itemQuanity <= productData.stock_quantity) {
                            console.log('Congratulations, the product you requested is in stock! Placing order!');

                            var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - itemQuanity) + ' WHERE item_id = ' + itemID;

                            connection.query(updateQueryStr, function(err, data) {
                                if (err) throw err;

                                console.log('Your oder has been placed! Your total is $' + productData.price * itemQuanity);
                                console.log('Thank you for shopping with us!');
                                console.log("\n---------------------------------------------------------------------\n");

                                connection.end();
                            });
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
                                    } {
                                        console.log("Thank you for looking at our store! We hope to help you in the future.");
                                        process.exit();
                                        connection.end();
                                    }
                                });
                        }
                    }
                });
            });

    });
}
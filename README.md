### Bamazon

****

#### An interactive shopping node app where MySQL and Node.JS are used to allow users to purchase items as a customer.

****

The Bamazon Customer Portal allows users to view the current items available for purchase. The user will be prompted to enter the Item ID# and how many items they wish to purchase. If the item is in stock, the order will be completed and the user will see the total amount of their purchase. If it is not in stock, the app will promt the user if they want to see the current inventory again.

the basic starting commands are:

```
npm install
node bamazonCustomer.js
```

Loads the current inventory and displays it into a table format.
![Screenshot1](https://github.com/jdloude/bamazon/blob/master/Images/mainScreen.png)

The customer is asked how many items they would like to buy of the slected Item ID.
![Screenshot2](https://github.com/jdloude/bamazon/blob/master/Images/enterQty.png)

If everything goes well you should see a completed outpout and the total cost to thew customer
![Screenshot3](https://github.com/jdloude/bamazon/blob/master/Images/Completeorder.png)

If there is not enough inventory of the selected item you will get an error message with a inquirer confirm statement.
![Screenshot4](https://github.com/jdloude/bamazon/blob/master/Images/PromtafterFailed.png)

If no Item ID is entered you will get another error message with a inquirer confirm statement.
![Screenshot5](https://github.com/jdloude/bamazon/blob/master/Images/ErrorNoID.png)

****

**Technologies Used**:

* Javascript
* MySQL
* nodeJS
* npm packages:
    * mysql
    * inquirer
    * cli-table
**Bamazon**

****

An interactive shopping node app where MySQL and Node.JS are used to allow users to purchase items as a customer.

****

The Bamazon Customer Portal allows users to view the current items available for purchase. The user will be prompted to enter the Item ID# and how many items they wish to purchase. If the item is in stock, the order will be completed and the user will see the total amount of their purchase. If it is not in stock, the app will promt the user if they want to see the current inventory again.

the basic starting commands are:

```
npm install
node bamazonCustomer.js
```

Loads the current inventory and displays it into a table format.
![Screenshot1]()

The customer is asked to pick a unique Item ID.
![Screenshot2]()

The customer is asked how many items they would like to buy of the slected Item ID.
![Screenshot3]()

****

**Technologies Used**:

* Javascript
* MySQL
* nodeJS
* npm packages:
    * mysql
    * inquirer
    * cli-table
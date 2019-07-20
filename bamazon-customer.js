var mysql = require("mysql");
var columnify = require('columnify');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: 'root',

    // Your password
    password: '',
    database: 'bamazon'
});

connection.connect(function (err) {
    if (err) throw err;
    launchPrompts1();
});

function afterConnection0() {
    connection.query("select * from products", function (err, res) {
        if (err) throw err;
        console.log(columnify(res));
        launchPrompts2();
    });
}

function launchPrompts1() {
    inquirer.prompt(
        [
            {
                type: "list",
                name: "choice",
                choices: ["buy something", "quit"]
            }
        ]).then(function (user) {
            if (user.choice === "buy something") {
                afterConnection0();

            }
            else {
                console.log("bye!");
                connection.end();
            }
        })
}

function launchPrompts2() {
    inquirer.prompt(
        [
            {
                type: "input",
                name: "item_id",
                message: "What is the ID of the product you want to buy?"
            },
            {
                type: "input",
                name: "numOfProducts",
                message: "How many of it do you want to buy?"
            },

        ]
    ).then(function (user) {
        var stock_quantity = 0;
        var price = 0;
        var item_id = parseInt(user.item_id);
        connection.query("select stock_quantity from products where item_id = " + item_id, function (err, res) {
            if (err) throw err;
            stock_quantity = res[0].stock_quantity;
            if (user.numOfProducts > stock_quantity) {
                console.log("Can't do it! We only have " + stock_quantity + " items left for that product.");
            }
            else {
                connection.query("select price from products where item_id = " + item_id, function (err, res) {
                    if (err) throw err;
                    price = parseInt(res[0].price);
                    console.log(price);
                    connection.query("update products set stock_quantity = stock_quantity - " + user.numOfProducts + " where item_id = " + item_id, function (err, res) {
                        if (err) throw err;
                        console.log("The total cost of your purchase was: " + user.numOfProducts * price);
                        // connection.query("select * from products", function (err, res) {
                        //     if (err) throw err;
                        //     console.log(columnify(res));

                        // });
                        launchPrompts1();
                    });
                });
            };
        });
        // connection.query("select price from products where item_id = " + item_id, function (err, res) {
        //     if (err) throw err;
        //     price = parseInt(res[0].price);
        //     console.log(price);
        // });
        // if (user.numOfProducts > stock_quantity) {
        //     console.log(stock_quantity);
        //     console.log("Can't do it! We only have " + stock_quantity + " items left for that product.");
        // }
        // else {
        //     connection.query("update products set stock_quantity = stock_quantity - " + user.numOfProducts + " where item_id = " + item_id, function (err, res) {
        //         if (err) throw err;
        //         console.log("The total cost of your purchase was: " + user.numOfProducts * price);
        //     });
        // };
    });
}

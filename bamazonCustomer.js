var inquirer = require('inquirer');
var mysql = require('mysql');

var amountOwed;
var currentDepartment;
var updateSales;

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'Priyapatel18*',
	database: 'bamazon_db'
});

connection.connect(function(err){
	if (err) throw err;
	console.log('connected as id: ' + connection.threadId)
});


function listProducts(){
	connection.query('SELECT * FROM products', function(err, res){
		if (err) throw err;
		console.log("******** Welcome to Bamazon! *********" + " \n-------------------------------------------------------------------");

		for(i=0;i<res.length;i++){
			console.log("Item ID:" + res[i].id + "Product Name:" + res[i].ProductName + " Price: " + "$" + res[i].Price + "Quantity in Stock: " + res[i].StockQuantity)
		}
		console.log("----------------------------------------------------------------");
		Start();
		})
}

function Start(){
	inquirer.prompt([{
		name: "selectId",
		message: "What the ID of the product you wish to buy ?",
		
	},{
		name:"selectQuantity",
		message: "How many units would you like to buy?",
		
	}]).then(function(answer){
	connection.query('SELECT * FROM products WHERE id = ?', [answer.selectId], function(err, res){
		if(answer.selectQuantity > res[0].StockQuantity){

      
			console.log("Sorry! Insufficient Quantity." + "\nPlease try again later.");
			AnotherOrder();
		}
		else{
			amountOwed = res[0].Price * answer.selectQuantity;
			currentDepartment = res[0].DepartmentName;
			console.log("Thank you for your order!" + "\n Total amount due: $" + amountOwed);
      
    //   update Quantity
			connection.query("UPDATE products SET ? Where ?", [{
				StockQuantity: res[0].StockQuantity - answer.selectQuantity
			},{
				id: answer.selectId
			}], function(err, res){});
      AnotherOrder();
		
		}
	})

}, function(err, res){})
};

function AnotherOrder(){
	inquirer.prompt([{
		type: 'confirm',
		name: 'choice',
		message: "Would you like to place another order?"
	}]).then(function(answer){
		if(answer.choice){
			Start();
		}
		else{
			console.log("Thank you for shopping at Bamazon!");
			connection.end();
			
		}
	})
};
listProducts();

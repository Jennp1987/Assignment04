/*eslint-env browser*/

//GLOBAL VARIABLES

var inventory = [];

//Found OUT localStorage ONLY SUPPORTS STRINGS. TRIED TO USE JSON TO HANDLE ARRAYS AND OBJECTS.

function displayMenu() {
    "use strict";
    window.console.log("Welcome to the Inventory Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all products");
    window.console.log("update - Update stock");
    window.console.log("exit - Exit the application");
    window.console.log("");
}


function viewProducts(arr) {
    "use strict";
    arr.forEach(function (product) {
        window.console.log(product[0] + " " + product[1] + " (" + product[2] + ") $" + product[3]);
    });
    window.console.log("");
}
var i, quantity;
function updateStock(inventory) {
    "use strict";
    var num = parseInt(window.prompt("Enter the product SKU number"), 10);
  
    if (num === null) {
        window.console.log("Please enter in SKU number");
    } else {
        for (i = 0; i < inventory.length; i += 1) {
            if (inventory[i][0] === num) {
                quantity = parseInt(window.prompt("Enter the product quantity"), 10);
                if (quantity === null) {
                    window.console.log("Invalid quantity number");
                } else {
                    inventory[i][2] = quantity; 
                }              
                //EDIT THE INVENTORY DATA.
                localStorage.setItem("inventoryData", JSON.stringify(inventory));
            }
        }
        window.console.log("Invalid SKU");
    }
}

function main() {
    "use strict";
    var command;
    displayMenu();

    
//NESTED ARRAY
    
    inventory = [
        [1111, "mp3 album", 0, 3.99],
        [2222, "CD", 0, 12.95],
        [3333, "8 track player", 0, 11.95],
        [4444, "vinyl record", 0, 14.95],
        [5555, "video tape", 0, 8.95]
    ];
    
    
//CHECK TO SEE IF DATA IS ALREADY STORED.
if (localStorage.getItem("inventoryData") === null) {
//IF IT DOES NOT EXIST CREATE IT.
    localStorage.setItem("inventoryData", JSON.stringify(inventory));
} else {
//IF IT DOES EXIST LOAD IT.
    inventory = JSON.parse(localStorage.getItem("inventoryData"));
}
    
//show something repeatedly use while loop.
    while (true) {
        command = window.prompt("Enter Command");
        if (command !== null) {
            if (command === "view") {
                viewProducts(inventory);  
            } else if (command === "update") {
                updateStock(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.console.log("this is not a valid command"); 
            }
        } else {
            break;
        } 
        
    } 
    window.console.log("program terminated");   
}
main();








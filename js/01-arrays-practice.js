/*eslint-env browser*/
//STEP 1
/*
var myFavoriteMovies = ["Fifth Element", " A Scanner Darkly", "Kill Bill 1", "Office Space", "National Lampoons Christmas Vacation" ];
window.console.log(myFavoriteMovies[1]);
*/

//STEP 2
/*var movies = new Array (5);
movies[0] = "Fifth Element";
movies[1] = "A Scanner Darkly";
movies[2] = "Kill Bill 1";
movies[3] = "Office Space";
movies[4] = "National Lampoons Christmas Vacation";
window.console.log(movies[0]);*/


//STEP 3
/*
var movies = new Array (5);
movies[0] = "Fifth Element";
movies[1] = "A Scanner Darkly";
movies[2] = "Kill Bill 1";
movies[3] = "Office Space";
movies[4] = "National Lampoons Christmas Vacation";
movies[movies.length] = "Casino";
window.console.log(movies.length);
*/

//STEP 4
/*
var jennsMovies = ["Fifth Element", "A Scanner Darkly", "Kill Bill 1", "Office Space", "Office Space", "Casino" ];
delete jennsMovies[0];
window.console.log(jennsMovies);
*/

//STEP 5
/*
var i;
var jennsMovies = ["Fifth Element", "A Scanner Darkly", "Kill Bill 1", "Office Space", "Casino", "National Lampoons Christmas Vacation", "Pan's Labyrinth" ];
for (i = 0; i < jennsMovies.length; i += 1) {
    window.console.log(jennsMovies[i]);
}*/


//STEP 6

/*
var i;
var jennsMovies = ["Fifth Element", "A Scanner Darkly", "Kill Bill 1", "Office Space", "Casino", "National Lampoons Christmas Vacation", "Pan's Labyrinth" ];
for (i in jennsMovies) {
    window.console.log(jennsMovies[i]);
}
*/

//STEP 7 

/*
var jennsMovies = ["Fifth Element", "A Scanner Darkly", "Kill Bill 1", "Office Space", "Casino", "National Lampoons Christmas Vacation", "Pan's Labyrinth" ];
var sorted = jennsMovies;
sorted.sort();
for (var i in sorted) {
    window.console.log(sorted[i]);
}
*/

//STEP 8 

/*var i;
var jennsMovies = ["Fifth Element", "A Scanner Darkly", "Kill Bill 1", "Office Space", "Casino", "National Lampoons Christmas Vacation", "Pan's Labyrinth" ];
for (i = 0; i < jennsMovies.length; i += 1) {
    window.console.log("Movies I like:\n " + jennsMovies[i]);
}
var leastFavMovies = [];
leastFavMovies[0] = "Bullock in Space";
leastFavMovies[1] = "Matrix Reloaded";
leastFavMovies[2] = "Leprechaun";
for (i = 0; i < leastFavMovies.length; i += 1) {
    window.console.log("Movies I regret watching:\n " + leastFavMovies[i]);
}*/


//STEP 9 

/*var jennsMovies = ["Fifth Element", "A Scanner Darkly", "Kill Bill 1", "Office Space", "Casino", "National Lampoons Christmas Vacation", "Pan's Labyrinth" ];

var leastFavMovies = [];
leastFavMovies[0] = "Bullock in Space";
leastFavMovies[1] = "Matrix Reloaded";
leastFavMovies[2] = "Leprechaun";

var movies = jennsMovies.concat(leastFavMovies);
window.console.log(movies.reverse());*/


//STEP 10

/*var jennsMovies = ["Fifth Element", "A Scanner Darkly", "Kill Bill 1", "Office Space", "Casino", "National Lampoons Christmas Vacation", "Pan's Labyrinth" ];

var leastFavMovies = [];
leastFavMovies[0] = "Bullock in Space";
leastFavMovies[1] = "Matrix Reloaded";
leastFavMovies[2] = "Leprechaun";

var movies = jennsMovies.concat(leastFavMovies);
window.console.log(movies.pop());*/


//STEP 11 -

/*
var jennsMovies = ["Fifth Element", "A Scanner Darkly", "Kill Bill 1", "Office Space", "Casino", "National Lampoons Christmas Vacation", "Pan's Labyrinth" ];

var leastFavMovies = [];
leastFavMovies[0] = "Bullock in Space";
leastFavMovies[1] = "Matrix Reloaded";
leastFavMovies[2] = "Leprechaun";

var movies = jennsMovies.concat(leastFavMovies);
window.console.log(movies.splice(0, 1));
*/


//STEP 12

/*
var jennsMovies = ["Fifth Element", "A Scanner Darkly", "Kill Bill 1", "Office Space", "Casino", "National Lampoons Christmas Vacation", "Pan's Labyrinth" ];

var leastFavMovies = [];
leastFavMovies[0] = "Bullock in Space";
leastFavMovies[1] = "Matrix Reloaded";
leastFavMovies[2] = "Leprechaun";

var movies = jennsMovies.concat(leastFavMovies);
window.console.log(movies.splice(7, 3));
movies.splice(7, 3, "Goodfellas", "Pulp Fiction", "Empire Strikes Back");
window.console.log(movies);
*/

//STEP 13 

/*
var emp1 = {id: 37, name: "Carey Shanks", title: "Knife Maker", department: "fabrication", isCurrent: true};
var emp2 = {id: 34, name: "Giles Newman", title: "Lead Sales", department: "Customer Service", isCurrent: true};


var employees = [];

employees.push(emp1);
employees.push(emp2);
window.console.log(employees);

window.console.log(employees[1] ["name"]);
*/


//STEP 14

/*var emp1 = {id: 37, name: "Carey Shanks", title: "Knife Maker", department: "fabrication", isCurrent: true};
var emp2 = {id: 34, name: "Giles Newman", title: "Lead Sales", department: "Customer Service", isCurrent: true};
var employees = [];

employees.push(emp1);
employees.push(emp2);
var i;
for (i in employees) {
    if (employees.hasOwnProperty(i)) {
          window.console.log(employees[0]["name"] + ", " + employees[1]["name"] );
    }
}*/

//STEP 15

/*
var emp1 = {id: 37, name: "Carey Shanks", title: "Knife Maker", department: "fabrication", isCurrent: true};
var emp2 = {id: 34, name: "Giles Newman", title: "Lead Sales", department: "Customer Service", isCurrent: true};
var emp3 = {id: 35, name: "Tori C.", title: "Product Demonstrator", department: "Marketing", isCurrent: false};

var employees = [];

employees.push(emp1);
employees.push(emp2);
employees.push(emp3);
*/

//CHECKING TO SEE IF THEY POPULATED
//window.console.log(employees);

/*
var currentEmployee = function (employee) {
    "use strict";
    return employee.isCurrent;
};
var currentEmployees = employees.filter(currentEmployee);

window.console.log(currentEmployees);
*/


//STEP 16 

/*var movies = [
    ["Fifth Element", 1],
    ["Pan\'s Labyrinth", 2],
    ["Office Space", 3],
    ["Office Space", 4],
    ["Kill Bill", 5]
];
 

function checkString(item){
    "use strict";
    return typeof item === 'string';
}


var i;
for (i = 0; i < movies.length; i++) {
    window.console.log(movies[i].filter(checkString))
}*/


//STEP 17 - 

/*var employees = [];
employees[0] = "Zak";
employees[1] = "Jessica";
employees[2] = "Mark";
employees[3] = "Fred";
employees[4] = "Sally";

var showEmployee = function (names) {
    'use strict';
    showEmployee = employees;
    return names;
};

showEmployee(employees);
window.console.log(showEmployee.join("\n"));*/




//STEP 18
/*var arr = [false, null, 0, "", 1, "string", true];
function isItFalseNullBlank(elem) {
    if ((elem == null)||(elem == false)||(elem == 0)||(elem == "")) {
        window.console.log(elem);*/
        //HELPS DEBUG
        /*window.console.log("isItFalseNullBlank (rejected): "+elem);*/
    /*    return false;
    }
    else 
        return true;
}
function filterValues(arr) {
    return arr.filter(isItFalseNullBlank);
} 
window.console.log(filterValues(arr));*/

//STEP 19

/*
var myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function randFunc(num) {
    "use strict;
    return num[Math.floor(Math.random()*myNum.length)];
}
window.console.log(randFunc(myNum));
*/


//STEP 20
/*var largestNumb = [36, 77, 45, 60];
window.console.log(Math.max.apply(Math, largestNumb));*/















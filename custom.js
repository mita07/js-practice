
/**
 * Created by Mita on 8/22/2016.
 */
document.write("Hello World </span></br>"); // How to print something
document.write("My name is Mita Yesmin </br>");

var myVariable;
myVariable = 20; // assignment operator
document.write("My value is: ");
document.write(myVariable);


// Different data types
var userAge = 21; // integer value
document.write("</br>World Age is: ");
document.write(userAge);

var bookPrice = 39.68; // float value
document.write("</br>Book Price is: ");
document.write(bookPrice);

var status = "</br>Today is rainy day. Mamma says \" do not go to outside\"</br>"; // String value
// To put string into a string then it's need Escape (\) char before quotation marks;
document.write(status);
// Boolean (True/False), will learn later about this.


// String Concatenation
var sentence1 = "My name is Mita"; // method 1
var sentence2 = " and I'm a website developer </br>";
document.write(sentence1 + sentence2);

var sentence3 = "I love to design website"; // method 2
var sentence4 = " and want to learn new things. </br>";
var combined_sentences = sentence3 + sentence4;
document.write(combined_sentences);


// String Concatenation with numbers
var age = 25;
var name_me1 = "I am";
var name_me2 = "years old";
document.getElementById("my_age").innerHTML = "<br/>I am <span style='color: red;font-weight: 600;'> " + age + "</span> years old";



// different Operators
var apples = 10;
var mango = 8;
var appango = apples + mango; // Summation
appango ++; // increment
document.write("</br> Number of fruits: ");
document.write(appango);
document.write("<br>");

function my_value(){

}
my_value();

var value_1 = 1;
var value_2 = 2;
var total_value = value_1 + value_2;
document.write(total_value);
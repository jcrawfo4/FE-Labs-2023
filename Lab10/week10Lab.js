
/* 
   Copyright (c) 2023 Promineo Tech
   Author:  Promineo Tech Academic Team
   Subject:  JavaScript and DOM Manipulation 
   FE Lab Week 10
*/

/* ----------------------------------------------------- */
// Key Term List:
// DOM (Document Object Model)
// Element/node
// CSS Selector (class/id/node)
// Event Listener
//.createElement
//.getElementBy___
//.querySelector
//.append
//.prepend
// element.style.____ = ''
// .innerHTML = 'Hello World'
//

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/*------------------------ Creating a website with only JS ------------------------*/
console.log(`-------------------------- 
Part 1: Create a form with only JavaScript`)

/** 
 *
 * Step 1: Uncomment out the 'console.log(myForm)' at the bottom of the section.
 * Step 2: Using let, make a new variable called 'myForm'.
 * Step 3: Set it to be equal to document.createElement('form') // check the result in the console.
 * Step 4: Repeat steps 2 and 3, but with: myLabel, myInput . This input will be used to enter a name.
 * Step 5: Set the .innerHTML of myLabel to be equal to 'Name'
 * Step 6: Append myLabel to myForm, then append myInput to myForm
 * Step 7: Append myForm to document.body
           You should now have a label and a input on your website.
           Do the same steps, appending a label/input for Email, and a submit button to your form.
 * ↓ YOUR CODE HERE ↓ */


let myForm = document.createElement('form');
let myLabel = document.createElement('label');
let myInput = document.createElement('input');
myLabel.innerHTML = 'Name';
myForm.append(myLabel);
myForm.append(myInput);
document.body.append(myForm);
console.log(myForm);
//Question: Besides changing the innerHTML, what other HTML things can we change using JavaScript?
//Answer:Changing attribute values: You can change the values of HTML attributes using JavaScript. For example, you can change the src attribute of an img tag to change the displayed image.

// Adding or removing classes: You can add or remove CSS classes to/from HTML elements. This can be used to dynamically change the style of an element.

// Adding or removing elements: You can add new elements to the DOM or remove existing ones. This can be used to dynamically change the content of a webpage.

// Modifying the CSS styles: You can directly modify the CSS styles of an element using the style property.

// Handling events: You can add event listeners to HTML elements to make the webpage interactive. For example, you can add a click event listener to a button to perform an action when the button is clicked.

// Changing the text content: You can change the text content of an element using the textContent property.

// Manipulating form inputs: You can get or set the value of form inputs, check if a checkbox is checked, etc.

// Changing the document structure: You can move elements around in the DOM, creating complex changes to the document structure.

/*------------------------ Styling a form with only JavaScript------------------------*/
console.log(`-------------------------- 
Part 2: Styling our form with only JavaScript`);

/**
 *  Hint: element.style.cssProperty = ''
 *
 *  Step 1: Change the background color of your form to your favorite color.
 *         (you can use an accepted string, hex (ex: #DBF9FC) or rgb, (ex: rgb(255,122,89)))
 *  Step 2: Change the font color so it's readable over your background color
 *  Step 3: Give your form a display of flex, a flex-direction of column, and a max-width of 250px
 *
 * ↓ YOUR CODE HERE ↓ */
myForm.style.backgroundColor = 'hotpink';
myForm.style.fontColor = 'black';
myForm.style.display = 'flex';
myForm.style.flexDirection = 'column';

//Question: Do you prefer styling with JavaScript or CSS?
//Answer:
console.log("I prefer to style with JS");
/*------------------------ Creating a table with only JavaScript ------------------------*/
console.log(`-------------------------- 
Part 3: Creating a table with only JavaScript`)

/*
 * Note: Most of these steps are similar to Part 1.

 * Step 1: Uncomment out the console.log(myTable) below.       
 * Step 2: Create 4 new table elements: <table>, <tr>, <td>, <td>. Store them in variables using let
 
 * Step 3: One of your TD elements innerHTML should be 'Name', the other should be 'Email'.
 * Step 4: Append them in the same way that we create a table with HTML.
 * Step 5: Append the finished <table> to your <body>. It should now be on your website. 
          As an added challenge, try to create a complete table with 2 rows, name/email and append it to the body.

 * Final Step: Style your table using JavaScript starting with a border. You may need to target more element/nodes than we did with myTable.
 * ↓ YOUR CODE HERE ↓ */


let myTable = document.createElement('table')
let myRow = document.createElement('tr')
let Name = document.createElement('td')
let Email = document.createElement('td')
Name.innerHTML = 'Name'
Email.innerHTML = 'Email'
myRow.append(Name)
myRow.append(Email)
myTable.append(myRow)
document.body.append(myTable)
myTable.style.border = '9px solid black'
console.log(myTable)

//Question: While this is clearly a more round-about way of making a table, how can using JavaScript in this way
//          more beneficial than HTML?
//Answer:
// While this is clearly a more round-about way of making a table, how can using JavaScript in this way more beneficial than HTML?

// GitHub Copilot
// Using JavaScript to create HTML elements like a table can be more beneficial than static HTML in several ways:

// Dynamic Content: JavaScript allows you to create dynamic content. For example, you can create a table based on data fetched from an API, and update the table whenever the data changes.

// User Interaction: JavaScript can create and modify elements in response to user actions. For example, you could add a row to a table when a user submits a form.

// Conditional Rendering: With JavaScript, you can conditionally create and add elements to the DOM based on certain conditions or logic. This is not possible with static HTML.

// Code Reusability: If you need to create similar tables in multiple places, you can write a JavaScript function to create a table, and reuse that function wherever you need a table.

// Integration with Frameworks/Libraries: Modern JavaScript frameworks and libraries (like React, Angular, Vue.js) use JavaScript to create and manage DOM elements, allowing for more complex applications with state management and component-based architecture.

// Remember, while JavaScript provides these powerful capabilities, it's also important to consider performance and accessibility. Over-reliance on JavaScript for tasks that could be done with static HTML can lead to slower page load times and can make your site less accessible to users with disabilities or users on slow internet connections.

/*------------------------ Changing our body background on click ------------------------*/
console.log(`-------------------------- 
Part 4: Changing our background on click`)
/**
 * Documentation: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
 *
 * Step 1: In our HTML, uncomment out the <button> element.
 * Step 2: Read through the documentation up through the first block of code.
 *         We're going to use rgb (ex: rgb(0,125,255) ) to change the color of our body's background when we click the button
 * Step 3: Create a variable called myButton that uses getElementById() to target the button in step 1.
 * Step 4: Use the 'addEventListener' method on myButton.
 *         addEventListener is a method takes in two arguments: an event listener type, and a function.
 * Step 5: For the first argument, add 'click'. For the second argument, add a function body... (ex: function (){})
 * Step 6: Inside of the function body, change the backgroundColor of our body element.
 *         Let's use rgb(0,125,255) to change the color, and Math.random() to change the values inside rgb().
 * Step 7: Click the button in your index.html and see the background change!
 *
 * ↓ YOUR CODE HERE ↓ */

document.addEventListener('DOMContentLoaded', function() {
   let myButton = document.getElementById('myButton');
   if (myButton) {
       console.log('Button found:', myButton); // Debugging log
       myButton.addEventListener('click', function() {
           console.log('Button clicked'); // Debugging log
           myButton.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
       });
   } else {
       console.error('Button not found');
   }
});


//Question: What other event listeners are there?
//             Try them out by replacing 'click' in your function above!
//Answer:

console.log(`-----------Finished------------`)

/**
 * Extra Project Ideas:
 *
 * 1: Create a button that changes the innerHTML of a div back and forth from 'Hello' to 'World'
 * 2: Create an image that disappears when you hover over it, and reappears when you hover off.
 * 3: When you click your form button, get the input values of your name/email input,
 *    and append a new <tr> containing those values to your tBody element.
 *    Look into event.preventDefault(). Buttons inside of forms have a default setting to refresh the page.
 */
let divButton = document.createElement('button')
divButton.innerHTML = 'Hello'
document.body.append(divButton)
divButton.addEventListener('click', function() {
   if (divButton.innerHTML === 'Hello') {
       divButton.innerHTML = 'World'
   } else {
       divButton.innerHTML = 'Hello'
   }
}) 
console.log(myForm)

window.onload = function() {
    myImage.addEventListener('mouseout', function() {
        myImage.style.visibility = 'visible';
    });
   myImage.addEventListener('mouseover', function() {
       myImage.style.visibility = 'hidden';
   });
}
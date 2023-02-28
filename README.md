# js-course-repo

This in an repository for my projects of a Java Script course that i'm doing...

The course's language is English, so i'll try to take all my notes in English also, taking the opportunity to improve my English.

# First Project - Task List

The first project of the course is a Task List and we did this page from scratch, so we started with the HTML, wich was a kind of easy, because of Materialize CSS and Font Awesome.

**The page layout:**

- A card with a field where you can put the task you want to add;
- A button to add the task in the list;
- A filter field, where you can filter the tasks to find the wanted one;
- A list of all tasks saved;
- And last but not least, we have a Clear Task button, witch function is clear all tasks.

## What we've used to build this

The main concept we were tryng to learn was DOM manipulation, so the project turn around this:

- We've used querySelector to get elements from HTML to JS;
- We also had use EventListners to run an event after certain action from the user;
- We've used functions to atribute to the Event Listners;
- We did element creation in JS, adding classes and other elements inside;
- And, to save all the tasks, even if the browser was closed, we used Local Storage.

## What I thought about this project

Well, this is a easy project, we don't used advanced things, but we've used the basic with all his potencial, manipulating every element that we needed, without feeling that's something missing or we need more to complete the project.

# Second Project - Loan Calculator

There is the second project of the course, and it's a basic Loan Calculator, instead of using Materialize like in the first project, in this we have used Bootstrap, that i've liked it so much.

**The page layout:**

- A main card with all needed informations;
- A amount field;
- A interest field;
- And a years to payment field;
- A button to calculate the loan;
- And last, it have a result card, wich contains the monthly payment, the total payment and then the total interest.

## What we've used to build this

Well, similar to the first project, we've used DOM manipulation to creat new things, like:

- The main use was the math and its application in programming;
- A custom error alert if the insert values are wrong or missing;
- Also the method style.display = 'none' or 'block' to make things appear and disappear from the UI;
- A loading GIF to make the UI feels better to the user;
- Functions like setTimeout() to the elements, like the error message appear just for two seconds.

## What I thought about this project

I cannot say that project was hard to complete, but i cannot say it was nothing too. Took the elements value from HTML, pass to JS, then work this values with math, make the entire result card apper before the calculation was done was really good to improve my skills and my logic and i'm loving how it was hard in past, but it's becoming a normal thing right now.

# Third Project - Number Guesser

The third project of the course, and it's a number guesses, wanna have some fun? Different of the projects above, we have used Skeleton to build the UI.

**The page layout:**

- A big heading with the name 'Number Guesser';
- A paragraph wich contains the min and max number that can be generated;
- A config button to change this values;
- A input field to put your guess;
- A submit button to send your guess;
- The button above become a play again button if you win or you lose;
- And if we press config button, a new div appers, with inputs to change the min and max values;
- And, to save that values, we hava a save button.

## What we've used to build this

This secction of the course is all about DOM manipulation, so this project can't be different, but, i've used:

- Query Selector to take elements from the HTML to JS;
- Event listners to the user can really use the page;
- Functions for repetitive processes and Arrow Function;
- Math lib to generate aleatory numbers;
- A config div wich appears and desappears.

## What I thought about this project

The project was not hard to complete, i've really seen a evolution in my thoughts while i'm progamming. In the course project we don't have the config part, so it was a thing a wanted to do by myself, because i saw this necessity in the project, so, more one project done and more learned things to my mind.

# Starting a new content in the course

Well, after seeing the DOM manipulation in the first section of the course, we've been started to look at Oriented Object Programming, also known as OOP. I've big expectations of what we'll learn from now and i can even imagine what i'll be able to make, big projects in mind!

# Fourth Project - OOP Book List

This is the first project that we've been using Oriented Object Programming, so was a new thing to me, but i really liked how i can use OOP in my projects and how cool is use it. Just to keep the standard, i shall say that we've used skeleton CSS to complement the UI.

**The page layout:**

- A heading of 'Add book';
- Three inputs, first one for the Title of the book, second one for the Author of the book, and the last one for the ISBN (A number of the book registration), whitin a form;
- At last, we've a table to show all added books, with the information of the inputs above.

## What we've used to build this

Taking into account that is the first project with OOP, we've used a bunch of new things. The new things are: Three classes, one was the Book class, other one was the UI class and last one was the Store class.
### Book class:
- This was the simplest class, just taken the book title, author and ISBN within its parameters;

### UI class:
- This class is associated with the UI manipulation, so we have four methods for it, wich was:
  - AddBookToList: This method is called when we get all the three inputs of the book class and then need to show the book on the list;
  - CreateAlert: This method is called when is needed to show a alert to the user, wich can be an error or a succes alert;
  - ClearFields: This method is used to clear all the fields in the form, to make a better using for the user;
  - RemoveFromList: This method does the opposite of the AddBookToList, removing the book from the list;

### Store class:
- This class is associated with the browser local storage, wich contains three static methods:
  - GetBooks: This method receives a key, and then return the value of this key in the local storage, its used to check the books that was add;
  - AddBookToLS: This method is simple, just take the added book and add this to the local storage too;
  - RemoveBookFromLS: This method does the opposite of the AddBookToLS, removing the book from the local storage, working together with the RemoveFromList from UI class.

## What I thought about this project

I really enjoyed that project, was a bit different from the others, and it came with a whole new idea, but keeping the "old" ideas. I guess for now I will be able to make others bigger projects, I'm sure.
 

# js-course-repo

This is a repository for my projects in a Java Script course that I'm doing...

The course's language is English, so I'll try to take all my notes in English also, taking the opportunity to improve my English.

# First Project - Task List

The first project of the course is a Task List and we did this page from scratch, so we started with HTML, which was kind of easy, because of Materialize CSS and Font Awesome.

**The page layout:**

- A card with a field where you can put the task you want to add;
- A button to add the task to the list;
- A filter field, where you can filter the tasks to find the wanted one;
- A list of all tasks saved;
- And last but not least, we have a Clear Task button, which functions clear all tasks.

## What we've used to build this

The main concept we were trying to learn was DOM manipulation, so the project turn around this:

- We've used querySelector to get elements from HTML to JS;
- We also use EventListners to run an event after certain action from the user;
- We've used functions to attribute to the Event Listeners;
- We did element creation in JS, adding classes and other elements inside;
- And, to save all the tasks, even if the browser was closed, we used Local Storage.

## What I thought about this project

Well, this is an easy project, we don't use advanced things, but we used the basics with all their potential, manipulating every element that we needed, without feeling that's something missing or we need more to complete the project.

# Second Project - Loan Calculator

There is the second project of the course, and it's a basic Loan Calculator, instead of using Materialize like in the first project, in this, we used Bootstrap, which I liked so much.

**The page layout:**

- A main card with all needed information;
- A amount field;
- A interesting field;
- And years to payment field;
- A button to calculate the loan;
- And last, it has a result card, which contains the monthly payment, the total payment, and then the total interest.

## What we've used to build this

Well, similar to the first project, we've used DOM manipulation to create new things, like:

- The main use was math and its application in programming;
- A custom error alert if the insert values are wrong or missing;
- Also the method style.display = 'none' or 'block' to make things appear and disappear from the UI;
- A loading GIF to make the UI feels better to the user;
- Functions like setTimeout() to the elements, like the error message appear just for two seconds.

## What I thought about this project

I cannot say that project was hard to complete, but I cannot say it was nothing too. Took the element's value from HTML, pass to JS, then work these values with math, and making the entire result card appear before the calculation was done was good to improve my skills and my logic and I'm loving how it was hard in past, but it's becoming a normal thing right now.

# Third Project - Number Guesser

The third project of the course, and it's a number guess, wanna have some fun? Different from the projects above, we have used Skeleton to build the UI.

**The page layout:**

- A big heading with the name 'Number Guesser';
- A paragraph that contains the min and max number that can be generated;
- A config button to change these values;
- A input field to put your guess;
- A submit button to send your guess;
- The button above become a play again button if you win or you lose;
- And if we press the config button, a new div appears, with inputs to change the min and max values;
- And, to save that values, we have a save button.

## What we've used to build this

This section of the course is all about DOM manipulation, so this project can't be different, but, I've used:

- Query Selector to take elements from the HTML to JS;
- Event listeners to the user can use the page;
- Functions for repetitive processes and Arrow Function;
- Math lib to generate aleatory numbers;
- A config div that appears and disappears.

## What I thought about this project

The project was not hard to complete, and I've seen an evolution in my thoughts while I'm programming. In the course project we don't have the config part, so it was a thing a wanted to do by myself because I saw this necessity in the project, so, more projects were done and more learned things to my mind.

# Starting new content in the course

Well, after seeing the DOM manipulation in the first section of the course, we've started to look at Oriented Object Programming, also known as OOP. I've big expectations of what we'll learn from now and I can even imagine what I'll be able to make, big projects in mind!

# Fourth Project - OOP Book List

This is the first project that we've been using Oriented Object Programming, so was a new thing to me, but I liked how I can use OOP in my projects and how cool is to use it. Just to keep the standard, I shall say that we've used skeleton CSS to complement the UI.

**The page layout:**

- A heading of 'Add book';
- Three inputs, the first one for the Title of the book, the second one for the Author of the book, and the last one for the ISBN (The number of the book registration), within a form;
- Finally, we've got a table to show all added books, with the information of the inputs above.

## What we've used to build this

Taking into account that this is the first project with OOP, we've used a bunch of new things. The new things are Three classes, one was the Book class, the other one was the UI class and the last one was the Store class.

### Book class:

- This was the simplest class, just taking the book title, author, and ISBN within its parameters;

### UI class:

- This class is associated with UI manipulation, so we have four methods for it, which was:
  - AddBookToList: This method is called when we get all three inputs of the book class and then need to show the book on the list;
  - CreateAlert: This method is called when is needed to show an alert to the user, which can be an error or a success alert;
  - ClearFields: This method is used to clear all the fields in the form, to make a better use for the user;
  - RemoveFromList: This method does the opposite of the AddBookToList, removing the book from the list;

### Store class:

- This class is associated with the browser's local storage, which contains three static methods:
  - GetBooks: This method receives a key, and then returns the value of this key in the local storage, it is used to check the books that were added;
  - AddBookToLS: This method is simple, just take the added book and add this to the local storage too;
  - RemoveBookFromLS: This method does the opposite of the AddBookToLS, removing the book from the local storage, and working together with the RemoveFromList from the UI class.

## What I thought about this project

I enjoyed that project, was a bit different from the others, and it came with a whole new idea but kept the "old" ideas. I guess for now I will be able to make others bigger projects, I'm sure.

# Fifth Project - Chuck Norris Jokes

This project was built to start working with APIs. In this project, we use the Chuck Norris Jokes API, which generates Chuck Norris Jokes with some categories we define. Like we've been using above, we've used Skeleton CSS again, just to make things more beautiful.

**The page layout:**

- A select field, which we can select the joke's category wanted;
- A submit button, that generates the joke;
- Finally, the UI has a Clear Jokes button, that clears all jokes on the screen

## What we've used to build this

We have used all the things we've learned before, and the new one is API. There is not much to write about this project, because it was straightforward. The first request was made to put the categories options in the UI, and the second one was used to get the joke from that category.

## What I thought about this project

Even though it's a simple project, I liked it, because I made it with my own hands. The project in the course was using an API that doesn't exist anymore, so I needed to adapt to what I have to use now. 

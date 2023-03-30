
# gptHooked - Part 2 - Build me a Resume

#### ...by zshmeta


// after getting into playing around with the api and since it was at a time we needed a resume i decided to make this

1. What is it

2. Why i made it

3. What is the use

4. Coding process

5. Conclusion





## What Is It?


This Project is made of a self written expressjs server that communicates with our front using axios and the {BrowserRoute, Route, Routes} to GET

The Front is made using React and CSS.
Finally an api is set to make requests to gpt-davinci-3 model and generate text.


## Why I Made it


I was working with API's in general and had to look at my resume and so i have decided to be a dev until the end and just like dev's do, i decided to build this


## What is the use


Well for me it helped get more acquainted with building a light and safe back end to be able to use the API key that has to be secured

Beside that as is, it is probably not suited for production.

## Coding process


This project pre development was layed out in 3 major steps which then turned to 4 

here is the breakdown:


1. Create the Front End and turn questions into a Form

Biggest challenge was to figure out the elements needing to be split (text) to be able to communicate with the ai using the users input


2. Write a code that would 'jsonify' the users input and send a prompt with the user's input as variables to simulate a chat like question. Work on the prompt.


3. Work on the second page that would display the result and implement the print action.


4. This step was not necessary but turned out to be an efficient way of doing things when we have the need of a back end. Set up a server with express and work with Route for efficient server capabilities.


5. Overall a nice way of reassuring my sills and an introduction to expressjs and it's capabilities


...By zshmeta
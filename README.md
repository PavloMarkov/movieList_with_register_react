# React TypeScript

[DEMO PAGE](https://pavlomarkov.github.io/movieList_with_register_react/)

# the films gallery.

1. Welcome screen have three buttons: SIGN UP, SIGN IN, BROWSE for unauthorized users.
2. Dynamic button: resume signup will appear if signup process is interrupted so that user has filled all sign up field but has not submitted yet, so on home page sign up button should be 'resume sign up'.

# CAROUSEL:

1. carousel of 3 views with text from a CONSTANTS FILE and when swiped left or right change accordingly, images are behind the text

- text is centered and responsive, should not be longer than 50 characters

# Click logic

- tapping on Sign in button leads to sign in view
- tapping to Sign up button leads to sign up view
- tapping on browse button leads to home view

# LOGIN:

- has two inputs with validation errors on email + password ( 6 characters (one big one number onespecial))
- valid login : intvw / aa@AA1

# SIGN UP:

- has three inputs with validation errors on email, name, password ( 6 characters (one big one number one special))
- login button leads to Home screen

# HOME SCREEN:

- no screen title
- if user is browsing => Show link to sign in and sign up
- if user is logged in => Header welcome NAME in right corner

# JSON:

1. Parse the json file and create a list with an initial number of 20 shows, when user scrolls down add another 20 until all the titles are populated
2. The cards are in two columns and take the data from the json object
3. Please show the following information for each card:

- On the image itself please print the title of the movie. (make the text white, don't bother if the image and text color collide)
- Underneath the image: year.
- Add an information icon which opens a popup with the following data in this order: Actors, IMDB rating.

# Logic by screens :

1. Cards logic: If a title has a lower rating than 7 please add a down thumb icon
2. Browse Logic: If a user is not logged in they can browse to home but cannot see the data underneath the card
3. Welcome Logic: if a user does not finish the signup process on app launch user should be shown resume signup button

to start:
`npm install` + `npm start`

# the server with data of movies has limit of 100 response per day!
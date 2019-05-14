## Welcome to the Superhero App!

Created with love by Sophie Helf.

### What is this?

The Superhero App is an app that lets you compare the stats of superheroes and villains. Type in the name of a superhero or a villain to see their stats. 

This project was coded in React.js. It was styled with Sass and Flexbox, and uses several Google fonts.

### How to run it

Navigate to the project folder (superheroes), then run `npm start`. 
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Please be sure to install the CORS plugin on Chrome. Otherwise, the Superheroes API will be blocked. You will see this error in the console.

### How it works

This project was bootstrapped with create-react-app.

The app has two search bars, one for heroes and one for villains. Type in a name to see a hero or villain's stats.

Once a name is submitted, the app makes a call via `fetch` to the Superheroes API, pulling in the hero's name, stats, and whether they're "good" or "bad". This is done via `setState`, which subsequently passes the data down to a stateless UI component.

The stats are then showed in the stateless compoment that double-checks to see if the character is a hero or villain, returning the name of the hero or villain, "Not a Hero/Villain" if the character is in the database but on the opposite side, or "Not In Database" if the character's name cannot be found.

### What could be different?

The Superheroes API, though useful, was missing a couple of features that would have made the project's structure a little less complex. The data structure of the API did not include an array of all the characters, which would have made it easier to separate heroes from villains; I initially considered creating a drop-down list instead of a search function for the characters but it was difficult to extract the data in the way I would have needed to.

I considered using Redux but as there was very little data flow in the app it felt unnecessary. 

### What would I do if I had more time?

I would certainly purchase a nice font. I love fonts.

I am curious about how the app could be optimized for mobile. The app would need to have a different layout for a phone's vertical view, but this could open up some complications – how much space would be needed between the two search bars for there to be room for results? Would a drop-down list for the search function work better (were it even possible to implement)?

I would have liked to have the text to fade in once it shows up on the screen but did not have time to implement `react-fade` (which seemed like the best choice for fading in text as CSS is fussy with that sort of thing). 

## Thank you for reading and enjoy!

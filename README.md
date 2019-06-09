![Logo](/public/images/logo.png)
# Welcome to Aunt Jemima's Apocalypse Diner

This project was built using React for IDM364 taught by Phil Sinatra. You can find a link to the project description here: [Project Requirements](https://github.com/philsinatra/IDM364/blob/master/docs/final-project.md).

The live site can be found here, hosted by Netlify: [https://hungry-yalow-c52c01.netlify.com/#/](https://hungry-yalow-c52c01.netlify.com/#/).

## Commands

`npm run start` : Sets up project for development mode
`npm run build`: Builds project
`npm run test`: React-scripts test
`npm run eject`: React-scripts eject

## What I'd do differently 

- Implement CSS modules for easier styling
- Breakout a more generic `<Display />` component for easier styling and maintainability
	- This will allow for easy, consistently styled page headers, consistent spacing and layout, etc. Realize I had to write the same CSS like 3 times by the end

## What I'd do again
- Breaking out the reusable `money` module
- Storing money values as floats, then converting them to strings at the last moment before display (by using mentioned `money` module
- Appending an `item-index` property to interactive item elements made it easy to manipulate the state of that specific item
- Use :heart: React router :heart: again
	- Seriously this would've made past projects much easier
- Having a singular `adjustTotalPrice` function that looped through the cart items and added all the values up
	- This was called after cart state was changed
	- While not the most performant, it kept things straightforward as I didn't have to fumble with passing add/subtract params or anything
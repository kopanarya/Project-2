# Project 2 - London Daily

## Timeframe

2 days

## Tech Used

- React
- HTML5
- SCSS/CSS/Bulma
- Webpack
- API implementation
- Deployed through gh-pages

## Installation
1. Clone repository in terminal
2. Command npm init, followed by npm run serve

## Our Application
link to hosted version ----> https://alikurtulush.dev/Project-2/#/

### Application Overview

*Homepage*
<img width="1114" alt="Screenshot 2019-06-18 at 16 27 22" src="https://user-images.githubusercontent.com/45519121/59700457-38ee6380-91eb-11e9-85ac-cc9d284b20a0.png">

Pair coding challenge. This project was set up like a Hackathon where we had to build a website in React using third party APIs. As we're both daily commuters in London, we chose a few of TFL's APIs : Tube Status, and Dark Sky Weather API to build a web application - in React - that could be used by your average commuter in London. The idea behind it being that A commuter could check the weather, bike points, tube status and air pollution and based on the results of all these, they could decide whether it would be better to take the tube or ride a bike.


### Process
- Explored the APIs that we had chosen to use.
- Filtered through the APIs using InSomnia and Json View to drill down into the API and target the specific information we wanted to display on our site.
- built the seperate page components of our site, one by one which each drew upon a different APIs.
- Linked the components back to the hompage and the navbar so that the user could have access from both options.
- added basic styling through the use of bulma.
- Tested out application for bugs.

*Live Tube Status Updates*
<img width="784" alt="Screenshot 2019-06-18 at 16 33 08" src="https://user-images.githubusercontent.com/45519121/59700318-004e8a00-91eb-11e9-91aa-b442c42add4b.png">

*Live Weather Staus Update*
<img width="491" alt="Screenshot 2019-06-18 at 16 32 38" src="https://user-images.githubusercontent.com/45519121/59700352-10ff0000-91eb-11e9-8f0a-4f58b8602ae8.png">


### Challenges
- finding an API that we really liked and was relatively easy to use.
- making some of the pages (ie. the weather page) look right on desktop as there was such a small amount of information on this page, it ended up looking quite sparse.
- making the website fully responsive

### Wins
- there were no weather images with the Dark Sky API that we used, this was a challenge but we managed to get our own images and create conditional to show the correct image based on the weather status.
- managed to make a presentable looking site that works in a short space of time.
- the way that we built the app means that overtime, it can be easily built upon by adding different components and using more APIs.
- using the users current location to find out where they are and then display the bike points within a 500m radius from themself. Seen below.

*Geolocation to find bikes near you*
<img width="1216" alt="Screenshot 2019-06-18 at 16 28 09" src="https://user-images.githubusercontent.com/45519121/59700420-2b38de00-91eb-11e9-85a6-413da0f2685b.png">

### Future Features
- make the applicaiton fully responsive
- add additional components such as national rail updates / delays, bus routes etc.

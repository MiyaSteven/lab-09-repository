'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const superagent = require('superagent');

//modules
const client = require('./lib/client');
const getLocation = require('./lib/location/City');
// const getWeather = require('./js/weather');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

//routes
app.get('/location', getLocation);
// app.get('/weather', getWeather);
// app.get('/yelp', getYelp);
// app.get('/events', getEvents);
// app.get('/trails', getTrails);

//404 all unwanted extentions
app.get('*', (request, response) => {
  response.status(404);
});

// function getEvents (request, response) {
//   let locationObj = request.query.data;
//   getEventsData(locationObj, response);
// }

// function getEventsData(object, response){
//   const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.GEOCODE_API}&q=${city}&format=json`;

//   superagent.get(url)
//     .then(results => {
//       let locationArr = JSON.parse(results.text).events.event;
//       //first check if locations HAS data then if it does, map over it
//       const finalLocationArr = locationArr.map(location => new Location(location));

//       response.send(finalLocationArr);
//     })
//     .catch(err => console.error(err));
// }

// function Event(eventData) {
//   this.search_query = eventData.url;
//   this.formatted_query = eventData.display_name;
//   this.latitude = eventData.lat;
//   this.longitude = eventData.lon;
// }



client.connect()
  .then( () => {
    app.listen(PORT, () => console.log(`APP is on port ${PORT}`));
  })
  .catch ( err => console.error(err));

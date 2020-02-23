'use strict';

const superagent = require('superagent');
const City = require('./City');
const insertIntoDataBase = require('./insertIntoDataBase');

function getAPIResults(response, location){
  const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.GEOCODE_API}&q=${location}&format=json`;

  return superagent.get(url)
    // .set()
    .then(results => {
      const city = new City(location, results.body);

      insertIntoDataBase(city);

      response.send(city);

    })
    .catch(error => {
      response.send(error).status(500);
    });
}

module.exports = getAPIResults;

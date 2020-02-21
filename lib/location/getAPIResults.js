'use strict';

const superagent = require('superagent');
const City = require('./City');
const insertIntoDataBase = require('./insertIntoDataBase');

function getLocationData(city, response){
  const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.GEOCODE_API}&q=${city}&format=json`;

  return superagent.get(url)
    .then(results => {
      const city = new City(location, results.body);

      insertIntoDataBase(city);

      response.send(city);

    })
    .catch(err => {
      console.error(err);
      response.send(err).status(500);
    });
}

module.export = getLocationData;

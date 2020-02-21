'use strict';

function City(city, response) {
  this.search_query = city;
  this.formatted_query = response.display_name;
  this.latitude = response.lat;
  this.longitude = response.lon;
}

module.export = City;

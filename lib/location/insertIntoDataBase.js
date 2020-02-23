'use strict';

const client = require('../client');

function insertIntoDataBase(city, data){
  const sql = 'INSERT INTO locations (search_query, formatted_query, latitude, longitude) VALUES ($1, $2, $3, $4)';
  const safeValues = [city, data.formatted_query, data.latitude, data.longitude];

  client.query(sql, safeValues);
}

module.exports = insertIntoDataBase;

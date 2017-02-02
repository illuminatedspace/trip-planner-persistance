var Sequelize = require('sequelize');
var db = require('./_db');
var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant =require('./restaurant');
var Activity =require('./activity');

var Day = db.define('day', {
  number: Sequelize.INTEGER
}, {
  hooks: {
    afterDestroy: function() {
      return this.findAll()
        .then(function(days) {
          var counter = 1;
          var promiseArr = days.map(function(day) {
            day.number = counter++;
            return day.save();
          });
          return Promise.all(promiseArr);
        })
    }
  }
});

// Day.hasOne(Hotel);
Day.belongsToMany(Restaurant, { through: 'day_restaurant' });
Day.belongsToMany(Activity, { through: 'day_activity' });

module.exports = Day;

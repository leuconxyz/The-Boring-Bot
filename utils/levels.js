const profileModel = require("../models/profileSchema");

const plvl = [
  { name: '1', xp: 1 },
  { name: '2', xp: 200 },
  { name: '3', xp: 300 },
  { name: '4', xp: 400 },
  { name: '5', xp: 500 },
  { name: '6', xp: 600 },
  { name: '7', xp: 700 },
  { name: '8', xp: 800 },
  { name: '9', xp: 900 },
  { name: '10', xp: 1000 },
  { name: '11', xp: 1250 },
  { name: '12', xp: 1500 },
  { name: '13', xp: 1750 },
  { name: '14', xp: 2000 },
  { name: '15', xp: 2250 },
  { name: '16', xp: 2500 },
  { name: '17', xp: 2750 },
  { name: '18', xp: 3000 },
  { name: '19', xp: 3250 },
  { name: '20', xp: 3500 },
  { name: '21', xp: 4500 },
  { name: '22', xp: 5500 },
  { name: '23', xp: 6500 },
  { name: '24', xp: 7000 },
  { name: '25', xp: 7500 },
  { name: '26', xp: 8000 },
  { name: '27', xp: 8500 },
  { name: '28', xp: 9000 },
  { name: '29', xp: 9500 },
  { name: '30', xp: 10000 },
  { name: '31', xp: 11000 },
  { name: '32', xp: 12000 },
  { name: '33', xp: 13000 },
  { name: '34', xp: 14000 },
  { name: '35', xp: 15000 },
  { name: '36', xp: 16000 },
  { name: '37', xp: 17000 },
  { name: '38', xp: 18000 },
  { name: '39', xp: 19000 },
  { name: '40', xp: 20000 },
  { name: '41', xp: 22500 },
  { name: '42', xp: 25000 },
  { name: '43', xp: 27500 },
  { name: '44', xp: 30000 },
  { name: '45', xp: 32500 },
  { name: '46', xp: 35000 },
  { name: '47', xp: 37500 },
  { name: '48', xp: 40000 },
  { name: '49', xp: 45000 },
  { name: '50', xp: 50000 },
  { name: '51', xp: 60000 },
  { name: '52', xp: 70000 },
  { name: '53', xp: 80000 },
  { name: '54', xp: 90000 },
  { name: '55', xp: 100000 },
  { name: '56', xp: 110000 },
  { name: '57', xp: 120000 },
  { name: '58', xp: 130000 },
  { name: '59', xp: 140000 },
  { name: '60', xp: 150000 },
  { name: '61', xp: 150000 },
  { name: '62', xp: 155000 },
  { name: '63', xp: 160000 },
  { name: '64', xp: 165000 },
  { name: '65', xp: 170000 },
  { name: '66', xp: 175000 },
  { name: '67', xp: 180000 },
  { name: '68', xp: 185000 },
  { name: '69', xp: 190000 },
  { name: '70', xp: 200000 },
];


module.exports = {
  levelup: function levelup(xp) {
    for (const element of plvl) {
      if (xp < element.xp) {
        return Number(element.name) - 1
      } else if (xp > 200000) {
        return 70;
      }
    }
  }
}
const Dinosaur = require('../models/dinosaur.js');

const Park = function (name, ticketPrice) {
    this.name = name
    this.ticketPrice = ticketPrice
    this.collectionOfDinosaurs = []
    this.attractiveLevel = []
}

Park.prototype.numberOfDinosaurs = function () {
    return this.collectionOfDinosaurs.length;
}

Park.prototype.addDinosaur = function(dinosaur) {
    this.collectionOfDinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaurByName = function (dinosaur) {
    const indexOfDinosaur = this.collectionOfDinosaurs.indexOf(dinosaur);
    this.collectionOfDinosaurs.splice(indexOfDinosaur, 1);
}

Park.prototype.findAttractiveDinosaur = function (dinosaur) {
    for (let i = 0; i < this.collectionOfDinosaurs.length; i++){
        this.attractiveLevel.push(dinosaur)
    }
    for (let i = 0; i < this.attractiveLevel.length; i++){
    }
    return this.attractiveLevel;
}

// Park.prototype.findSpecies = function () {
//     pass
// }

// Park.prototype.visitorsPerDay = function () {

// }





module.exports = Park;
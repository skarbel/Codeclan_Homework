const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journeys) => {
    return journeys.startLocation
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journeys) => {
    return journeys.endLocation
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return sameTransport = this.journeys.filter((journey) =>{
    return journey.transport === transport
  })
  return sameTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter( journey => journey.distance >= minDistance);
  return result
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  },0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.map((journeys)=> {
    return journeys.transport
  })
  .filter((transport, index, array) =>{
    return array.indexOf(transport) == index;
  })
};




module.exports = Traveller;

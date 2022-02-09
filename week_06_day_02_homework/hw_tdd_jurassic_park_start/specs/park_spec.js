const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Isla Nublar', 30, 0)
    dino1 = new Dinosaur('Velociraptor', 'carnivore', 20)
    dino2 = new Dinosaur('Deinonychus', 'carnivore', 27)
    dino3 = new Dinosaur('Ichthyosaur', 'carnivore', 25)

  });

  it('should have a name', function(){
    const actual = park.name;
    assert.equal(actual, 'Isla Nublar')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.deepEqual(actual, 30)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dino1);
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function(){
      park.addDinosaur(dino2);
      park.addDinosaur(dino3);
      park.removeDinosaurByName(dino3);
      const expected = [dino2];
      const actual = park.collectionOfDinosaurs;
      assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
      park.addDinosaur(dino2);
      park.addDinosaur(dino3);
      const expected = [dino2];
      const actual = park.findAttractiveDinosaur;
      assert.equal ( actual, expected)
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});

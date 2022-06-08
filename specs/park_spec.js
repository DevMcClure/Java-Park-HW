const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function(){

  let park;

  beforeEach(function(){
      park = new Park('Java Park',25)
  });


  it('should have a name', function(){
        
    const actual = park.name;        
    assert.strictEqual(actual, 'Java Park'); 
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 25)
  });

  it('should have a collection of dinosaurs', function(){
    
    it('should start with one dinosaur', function(){
      const actual = park.dinosaurs;
      assert.strictEqual(actual, ['t-rex'])
    })
  });



  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur('Velociraptor');
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 1)
  });


  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur ('t-rex');
    park.addDinosaur ('velociraptor');
    park.removeDinosaurByName('velociraptor')
    const expected = (['t-rex']);
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});

/* Subclasses with ES6 */
class Tree {
  constructor(size = '10', leaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null}) {
    this.size = size;
    this.leaves = leaves;
    this.leafColor = null;
  }

  changeSeason(season) {
    this.leafColor = this.leaves[season];
    if (season === 'spring') {
      this.size += 1;
    }
    console.log('changeSeason in class Tree');
  }
}

class Maple extends Tree {
  constructor(syrupQty = 15, size, leaves) {
    // super must be called before this
    super(size, leaves);
    this.syrupQty = syrupQty;
  }

  changeSeason(season) {
    console.log('changeSeason in class Maple1');
    super.changeSeason(season);
    if (season === 'spring') {
      this.syrupQty += 1;
    }
    console.log('changeSeason in class Maple2');
  }

  gatherSyrup() {
    this.syrupQty -= 3;
  }
}

const myMaple = new Maple(15, 5);
myMaple.changeSeason('fall');
myMaple.gatherSyrup();
myMaple.changeSeason('spring');

console.log(myMaple);

// changeSeason in class Maple1
// changeSeason in class Tree
// changeSeason in class Maple2

/* Compared to ES5 subclasses */
function Tree() {
  this.size = size || 10;
  this.leaves = leaves || {spring: 'green', summer: 'green', fall: 'orange', winter: null};
  this.leafColor;
}

Tree.prototype.changeSeason = function(season) {
  this.leafColor = this.leaves[season];
  if (season === 'spring') {
    this.size += 1;
  }
}

function Maple (syrupQty, size, leaves) {
  Tree.call(this, size, leaves);
  this.syrupQty = syrupQty || 15;
}

Maple.prototype = Object.create(Tree.prototype);
Maple.prototype.constructor = Maple;

Maple.prototype.changeSeason = function(season) {
  Tree.prototype.changeSeason.call(this, season);
  if (season === 'spring') {
    this.syrupQty += 1;
  }
}

Maple.prototype.gatherSyrup = function() {
  this.syrupQty -= 3;
}

const myMaple = new Maple(15, 5);
myMaple.changeSeason('fall');
myMaple.gatherSyrup();
myMaple.changeSeason('spring');

/* Instance */
class Toy {}
class Dragon extends Toy {}
const dragon1 = new Dragon();

console.log(dragon1 instanceof Toy); //true

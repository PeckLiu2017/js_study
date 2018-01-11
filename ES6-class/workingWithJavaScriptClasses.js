// class Plane {
//   constructor(numEngines) {
//     this.numEngines = numEngines;
//     this.enginesActive = false;
//   }
//
//   startEngines() {
//     console.log('starting engines…');
//     this.enginesActive = true;
//   }
// }
//
// typeof Plane; // function
//
// class Animal {
//   constructor(name = 'Sprinkles', energy = 100) {
//     this.name = name;
//     this.energy = energy;
//   }
//
//   eat(food) {
//     this.energy += food / 3;
//   }
// }
//
// typeof Animal === 'function'; // true

/* Static methods */
class Plane {
  constructor(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }

  static badWeather(planes) {
    for (const plane of planes) {
      plane.enginesActive = false;
      console.log(plane.enginesActive);
    }
  }

  startEngines() {
    console.log('starting engines…');
    this.enginesActive = true;
  }
}

const plane1 = new Plane(1);
const plane2 = new Plane(1);
const plane3 = new Plane(1);

Plane.badWeather([plane1, plane2, plane3]);

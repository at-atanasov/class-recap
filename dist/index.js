"use strict";

class Player {
  static description = "Player In Our Game"; // static means that this property exist only on the class and not the individual instances.
  #score = 0; // private field. Private fields can be called only inside the class.
  #numLives = 10;
  constructor(first, last) {
    this.first = first;
    this.last = last;
    console.log("I am constructor");
    this.#secret();
  }

  get fullName() {
    return `${this.first} ${this.last}`; //getter
  }

  set fullName(newName) {
    const [first, last] = newName.split(" ");
    this.first = first;
    this.last = last;
  }

  get score() {
    return this.#score;
  }

  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score must be possitive!");
    }
    this.#score = newScore;
  }

  updateScore(newScore) {
    this.#score = newScore;
  }
  #secret() {
    console.log("Seeecret!!");
  }

  taunt() {
    console.log("BOOOYAH!!!");
  }

  looseLife() {
    this.#numLives -= 1;
  }
}

class AdminPlayer extends Player {
  //the new class everything from Player.
  constructor(first, last, powers) {
    super(first, last); // When the child class has his own constructor we need to call the constructor of the parent class as well. We do this with the "super" keyword.
    this.powers = powers;
  }

  isAdmin = true; // This is only for the AdminPlayer
}
const admin = new AdminPlayer("Admin", "McAdmin", ["delete", "save the world"]);

const player1 = new Player("Charlie", "Brown");
console.log(player1);
player1.taunt();

const player2 = new Player("Blue", "Steele");
console.log(player2);
player2.taunt();
player2.looseLife();
player2.updateScore(15);
console.log(player2.score);
player2.score = 98;
console.log(player1.fullName); //We treat the getter as property. We do not use () to call it.
player1.fullName = "Emy Adams";
console.log(player1.fullName);
console.log(admin);

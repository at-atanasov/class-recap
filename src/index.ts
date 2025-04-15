// class Player {
//   public readonly first: string;
//   public readonly last: string;
//   private score: number = 0;

//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//   }

//   private secretMethod(): void {
//     console.log("SECRET METHOD!!");
//   }
// }

// Shorter way to write the class from above

class Player {
  // public readonly first: string;
  // public readonly last: string;
  //private _score: number = 0; // this property csnnot be accessed outside this class
  protected _score: number = 0; // this property cannot be accessed outside this class except for child classes

  constructor(public first: string, public last: string) {}

  private secretMethod(): void {
    console.log("SECRET METHOD!!");
  }

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative");
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 99999;
  }
}

const elton = new Player("Elton", "Steele");

elton.fullName;
elton.score;
elton.score = 23;

interface Colouful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colouful {
  constructor(public color: string) {}
}

class Jacket implements Colouful, Printable {
  constructor(public brand: string, public color: string) {}
  print() {
    console.log(`${this.color} ${this.brand} jacket`);
  }
}

const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "black");

abstract class Employee {
  // We cannot create a instance of abstract class. We set what the child classes must implement;
  constructor(public first: string, public last: string) {}
  abstract getPay(): number; // we use abstract keyword to mark methods as required which means that they must be implemented in the child classes
  greet() {
    console.log("Hello!");
  }
}

class FullTimeEmployess extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployess extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.hoursWorked * this.hourlyRate;
  }
}

"use strict";
// class Player {
//   public readonly first: string;
//   public readonly last: string;
//   private score: number = 0;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//   }
//   private secretMethod(): void {
//     console.log("SECRET METHOD!!");
//   }
// }
// Shorter way to write the class from above
var Player = /** @class */ (function () {
    function Player(first, last) {
        this.first = first;
        this.last = last;
        // public readonly first: string;
        // public readonly last: string;
        //private _score: number = 0; // this property csnnot be accessed outside this class
        this._score = 0; // this property cannot be accessed outside this class except for child classes
    }
    Player.prototype.secretMethod = function () {
        console.log("SECRET METHOD!!");
    };
    Object.defineProperty(Player.prototype, "fullName", {
        get: function () {
            return "".concat(this.first, " ").concat(this.last);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (newScore) {
            if (newScore < 0) {
                throw new Error("Score cannot be negative");
            }
            this._score = newScore;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
var SuperPlayer = /** @class */ (function (_super) {
    __extends(SuperPlayer, _super);
    function SuperPlayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAdmin = true;
        return _this;
    }
    SuperPlayer.prototype.maxScore = function () {
        this._score = 99999;
    };
    return SuperPlayer;
}(Player));
var elton = new Player("Elton", "Steele");
elton.fullName;
elton.score;
elton.score = 23;
var Bike = /** @class */ (function () {
    function Bike(color) {
        this.color = color;
    }
    return Bike;
}());
var Jacket = /** @class */ (function () {
    function Jacket(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    Jacket.prototype.print = function () {
        console.log("".concat(this.color, " ").concat(this.brand, " jacket"));
    };
    return Jacket;
}());
var bike1 = new Bike("red");
var jacket1 = new Jacket("Prada", "black");
var Employee = /** @class */ (function () {
    // We cannot create a instance of abstract class. We set what the child classes must implement;
    function Employee(first, last) {
        this.first = first;
        this.last = last;
    }
    Employee.prototype.greet = function () {
        console.log("Hello!");
    };
    return Employee;
}());
var FullTimeEmployess = /** @class */ (function (_super) {
    __extends(FullTimeEmployess, _super);
    function FullTimeEmployess(first, last, salary) {
        var _this = _super.call(this, first, last) || this;
        _this.salary = salary;
        return _this;
    }
    FullTimeEmployess.prototype.getPay = function () {
        return this.salary;
    };
    return FullTimeEmployess;
}(Employee));
var PartTimeEmployess = /** @class */ (function (_super) {
    __extends(PartTimeEmployess, _super);
    function PartTimeEmployess(first, last, hourlyRate, hoursWorked) {
        var _this = _super.call(this, first, last) || this;
        _this.hourlyRate = hourlyRate;
        _this.hoursWorked = hoursWorked;
        return _this;
    }
    PartTimeEmployess.prototype.getPay = function () {
        return this.hoursWorked * this.hourlyRate;
    };
    return PartTimeEmployess;
}(Employee));

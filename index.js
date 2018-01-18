// console.log(`
// Programowanie obiektowe

// ▪ sposób projektowania oprogramowania poprzez
// zbiór obiektów i interakcji między nimi

// ▪ tworzymy modele oparte na rzeczywistym świecie

// ▪ każdy obiekt jest małym światem pełniącym odrębną 
// role i mającym inna odpowiedzialność
// `);

// console.log(`
// Zalety
// + przejrzystość, łatwy do zrozumienia,

// + łatwa modyfikacja kodu,

// + możliwość pracy przez wielu programistów,

// + łatwa rozbudowa, elastyczność

// `)

// console.log(`
// Zarzuty

// - dużo nadmiarowego kodu,
// - przed modyfikacją - potrzebna analiza kodu
// `)

// Example code using OOP approach

// function Person(name) {
//     this.name = name;
//     this.greeting = function () {
//         console.log('Hi! I\'m ' + this.name + '.');
//     }
// }

// let me = new Person('Paweł');
// me.greeting();

// console.log(`
// Programowanie funkcjonalne

// - unikasz współdzielnoego stanu i jego zmiany pomiędzy funkcjami

// - używasz tylko funkcji które nie wpływają na stan aplikacji

// - W JS programowanie funkcjonalne przychodzi łatwo ponieważ funkcje są 'first class citizens' i posiadają właściwości i i metody jak każde inne obiekty

// `);

// //Example code using FP approach

// function createPerson(name) {
//     const obj = {};

//     obj.name = name;
//     obj.greetings = function () {
//         console.log('Hi! I\'m ' + obj.name + '.')
//     }

//     return obj;
// }

// let me = createPerson('Paweł');
// me.greetings();


// // Here comes the magic

// log('_this_ in JS'); 

// log(`
// *this* (po polsku "*to*") nie znaczy nic bez kontektu. 

// W programowaniu obiektowym kontekt jest narzucony - to zawsze jest nasz obiekt. Obiekt w ramach którego korzystamy z *this*
// `);

// 1st rule - this is not bound to function placement but to function call context and form of calling

// console.log(this);
// function funkcja() {
//     console.log(this);
// }
// funkcja();

// exception

// function funkcja() {
//     'use strict';

//     console.log(this);
// };
// funkcja();

// Example

// OOP
// let dog = {  // object literal
//     sound: "hał hau", // property
//     talk: function() { // method
//         console.log(this.sound);
//     }
// }
// dog.talk(); //call method 

// // FP feature
// let talkFunction = dog.talk;
// talkFunction(); // WTF?
// talkFunction is no longer method of dog. 
// it's just reference to function (without context - dog).


// Remember that in import/export and class context, strict is enabled by default.

// log('_bind_ in JS'); 

// let dog = {
//     sound: "hał hau",
//     talk: function() {
//         console.log(this.sound);
//     }
// }
// dog.talk(); //hał hau

// let talkFunction = dog.talk;
// let boundFunction = talkFunction.bind(dog);
// boundFunction(); // hał hau

// little more explanation

// let dog = {
//     sound: "hał hau",
//     talk: function() {
//         console.log(this.sound, this);
//     }
// }

// let button = document.getElementById('nasz-button');
// button.addEventListener(
//     'click', 
//     dog.talk
// )
// button.click();

// more bind

// function talk() {
//     console.log(this.sound);
// }
// talk(); // yep - undefined 
// // window object doesn't have `sound` property.

// let boromir = {
//     sound: 'One does not simply walk into mordor!'
// }
// let talkBoundToBoromir = talk.bind(boromir);
// talkBoundToBoromir();
// talk(); //still undefined


// let talk = function() {
//     console.log(this.sound);
// }

// let boromir = {
//     speak: talk, // reference of talk function is assign to property.
//     sound: 'One does not simply walk into mordor!'
// }
// boromir.speak(); // this is boromir
// talk(); // this is global window object

// boromir.speak = talk.bind(boromir);

// let faramir = {
//     speak: talk, // talk is clean - bind don't change it
//     sound: 'But fear no more! I would not take this thing!'
// }
// faramir.speak();
// faramir.speak = talk.bind(boromir);
// faramir.speak();

// // bind creates and returns copy of function with this set to bound object

// // // exception
// faramir.speak.bind(faramir);
// faramir.speak(); // you can't bind already binded function


// // .call and .apply
// console.log(`Thanks to them you can set context and pass arguments on function execution.

// bind - just sets context
// call, apply - sets context and arguments, and executes
// `);

// const o = {
//     a: "o object",
//     method: function(a, b, c) {
//         console.log(this, a, b, c);
//     }
// };

// const x = {
//     a: "x object"
// };

// o.method(1, 2); // this === o, [1, 2]
// o.method.call(x, 1, 2, 3); // this === x, [1, 2, 3]
// o.method.apply(x, [1, 2, 3]); // this === x, [1, 2, 3]

// log('object literal'); 

// var o = {};
// var o = {a: 'foo', b: 42, c: {}};
// console.log(o);

// var a = 'foo', b = 42, c = {};
// var o = {a: a, b: b, c: c};
// console.log(o);

// var o = {a, b, c}; //Shorthand property names
// console.log(o);

// var o = {
//     property([parameters]) {} // shorthand method names
// };
// console.log(o);

// log('object.create()');

// // .create create a new object with the prototype set
// // to a certain object

// // simple object with one method
// const cat = {
//     makeSound: function() {
//         console.log(this.sound);
//     }
// }

// secondCat = cat;
// console.log(cat === secondCat);

// const dachowiec = Object.create(cat);
// console.log(cat === dachowiec); // it's not a reference and no copy
// // // dachowiec is new object with propotypes set from cat
// dachowiec.sound = 'miałłł';
// dachowiec.makeSound();

// console.log(dachowiec.drinkMilk()); // error
// cat.drinkMilk = function(){
//     console.log('yamii...');
// }
// console.log(dachowiec.drinkMilk());

// console.log(cat.isPrototypeOf(dachowiec)); // true

// const perski = Object.create(cat);
// perski.sound = 'miaałdajwhiskasmiał';
// perski.makeSound();
  

// // why object.create()?  
// log(`
// Douglas Crockford wrote object.create() and pushed it to a standard.
// It's very good optimized! Much faster than using setPrototypeOf
// `);

// // lets re-create object.create

// const cat = {
//     makeSound: function() {
//         console.log(this.sound);
//     }
// }

// function objectCreate(proto) {
//     const obj = {};
//     Object.setPrototypeOf(obj, proto);
//     return obj;
// }

// const dachowiec = objectCreate(cat);
// dachowiec.sound = 'miałłł';
// dachowiec.makeSound();

// const perski = objectCreate(cat);
// perski.sound = 'miaałdajwhiskasmiał';
// perski.makeSound();


// log('object.assign()');

// // .create create a new object with the prototype set
// // to a certain object


// // Object.assign(target, ...sources)

// log(`
// Object.assign() copies the values (of all enumerable own properties) 
// from one or more source objects to a target object.
// The target object is the first parameter and is also 
// used as the return value. Object.assign() is useful 
// for merging objects or cloning them shallowly.
// `);

// // Example 


// // Merge an object
// let first = {name: 'Tony'};
// let last = {lastName: 'Stark'};
// let person = Object.assign(first, last);
// console.log(person);
// // {name: 'Tony', lastName: 'Stark'}
// console.log(first);
// // first = {name: 'Tony', lastName: 'Stark'} as the target also changed

// // Merge multiple sources
// let a = Object.assign({foo: 0}, {bar: 1}, {baz: 2});
// console.log(a);
// // {foo: 0, bar: 1, baz: 2}

// // Merge and overwrite equal keys
// let b = Object.assign({foo: 0}, {foo: 1}, {foo: 2});
// console.log(b);
// // {foo: 2}

// // Clone an object
// let obj = {person: 'Thor Odinson'};
// let clone = Object.assign({}, obj);
// console.log(clone);
// // {person: 'Thor Odinson'}


// log('Constructor function');

// log (`
// All objects will have a _constructor_ property.  
// Objects created without the explicit use of a constructor 
// function (i.e. the object and array literals) will have 
// a constructor property that points to the Fundamental 
// Object constructor type for that object.
// `)

// console.log({}.constructor);
// var o = {};
// console.log(o.constructor === Object);
// var o = new Object;
// console.log(o.constructor === Object);
// var a = [];
// console.log(a.constructor === Array);
// var a = new Array;
// console.log(a.constructor === Array);
// var n = new Number(3);
// console.log(n.constructor === Number);

// function Tree(name) {
//     this.name = name;
// }
// var theTree = new Tree('Redwood');
// console.log(theTree.constructor);

// log(`
// When new Tree() is called, JavaScript does four things:

// It creates a new object.
// It sets the constructor property of the object to Tree.
// It sets up the object to delegate to Tree.prototype.
// It calls Tree() in the context of the new object.
// The result of new Tree() is this new object.
// `);

// let nextTree = new theTree.constructor('Blackwood');
// // constructor is not text - it's reference to function
// console.log(nextTree, nextTree.constructor); 

// log('PROTOTYPES');

// log(`
// In Javascript we achieve inheritance using Prototypes.

// Prototypes are some kind of 'delegates'.
// `)

// function talk() {
//     console.log(this.sound);
// }

// let animal = {
//     talk
// }
// animal.talk();

// let cat = {
//     sound: 'miałłł'
// }
// //cat.talk();
// Object.setPrototypeOf(cat, animal);
// cat.talk();

// // What happened here?
// // Interpreter looked for methid talk in cat 
// // He see thet there is no talk in cat so it check prototype
// // He tries to call talk in cat prototype (animal) - works!

// let dog = {
//     sound: 'hał hau'
// }
// Object.setPrototypeOf(dog, animal);
// dog.talk()

// let prarieDog = {
//     howl: function() {
//         console.log(this.sound.toUpperCase());
//     }
// }
// Object.setPrototypeOf(prarieDog, dog);
// prarieDog.howl();

// animal.talk = function() {
//     console.log('what does the fox say?')
// }
// dog.talk();

// EXTRA

// console.log(`__proto vs prototype`);
// let cat = { breed: 'munchkin'};
// let myCat = { name: 'Fluffykins'}
// Object.setPrototypeOf(myCat, cat);
// console.log(myCat.breed); // prototype is set
// console.log(myCat.__proto__); // proto is reference to prototype object
// console.log(myCat.__proto__ === cat)
// cat.tailLength = 15;
// console.log(myCat.tailLength);
// console.log(myCat); // to tailLength in myCat

// log('new keyword');


// function Person(saying) {
//     this.saying = saying;
// }

// Person.prototype.talk = function () {
//     console.log('I say:', this.saying)
// }

// let crockford = new Person('SEMICOLANS!!!1one1!!');
// crockford.talk();

// // What new does?

// function createNew(constructor) {
//     let obj = {};
//     Object.setPrototypeOf(obj, constructor.prototype);
//     let argsArray = Array.from(arguments); //convert args to array
//     argsArray = argsArray.slice(1) // get rid of first argument
//     constructor.apply(obj, argsArray);

//     return obj;
// }

// crockford = createNew(Person, 'SEMICOLANS!!!1one1!!');
// crockford.talk();


// // THIS PICKING RULES 

// // Is the function called with new (new binding)? If so, this is the newly constructed object.
// // var bar = new foo()

// // Is the function called with call or apply (explicit binding), even hidden inside a bind hard binding? If so, this is the explicitly specified object.
// // var bar = foo.call( obj2 )

// // Is the function called with a context (implicit binding), otherwise known as an owning or containing object? If so, this is that context object.
// // var bar = obj1.foo()

// // Otherwise, default the this (default binding). If in strict mode, pick undefined, otherwise pick the global object.
// // var bar = foo()
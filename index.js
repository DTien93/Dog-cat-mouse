var Dog = require('./Dog');
var Cat = require('./cat');
var Mouse = require('./mouse');

//var dog = new Dog('Mary');
var cat = new Cat();
var mouse = new Mouse('Mickey');
//cat.eat(mouse);
var dog = new Dog();
try {
    cat.eat(dog);
} catch (error) {
    console.log('Error while cat eating a dog ');
}
console.log(cat);
//dog.sayHi()
//var tom = new Cat();
//dog.eat(tom);
//console.log(dog);
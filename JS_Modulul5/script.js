
var person = {
    name: ['Bob', 'Smith'],
    name1: {
      firstname : 'Mihai',
      lastname: 'Georgescu'
    },
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
      alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old.' 
            + 'He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.'
            );
    },
    greeting: function() {
      alert('Hi! I\'m ' + this.name[0] + '.');
    },
    getOlder: function() {return ++this.age},//() => ++this.age,//nage => ++this.age,
  };


function Person(name) {
    this.name = name;
    this.greeting = function() {
      alert('Hi! I\'m ' + this.name + '.');
    };
  }

document.getElementById("submit").addEventListener("click",(event)=> {
    event.preventDefault();
    var myDataName = document.getElementById("nameInput").value; // ex. "companie"
    var myDataValue = document.getElementById("nameValue").value; // ex. "Step IT Academy"
    person[myDataName] = myDataValue;
})

function start() {
  alert('Vasya ROCKS !!!');
}

function MyObj() {

}

MyObj.prototype.set = function(data) {
  this.data = data;
};
MyObj.prototype.say = function() {
  console.log(this.data);

  var self = this;

  window.setTimeout(  function() { console.log(self.data) }, 1000);
};

// ---

// var obj1 = makeObj();
var obj1 = new MyObj();
obj1.set('DATA-1');
obj1.say();

// var obj2 = makeObj();
var obj2 = new MyObj();
obj2.set('DATA-2');
obj2.say();

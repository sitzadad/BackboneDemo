//examplar model
var MyModel = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/ADS',
  idAttribute: "_id",
  defaults: {
    photo: 'http://www.fillmurray.com/500/500'
  },
  initialize: function () {
    console.log("myModal initialized");
  }
});

var myModel1 = new MyModel({photo:'http://www.placecage.com/300/300'});
myModel1.save();

var myModel2 = new MyModel({photo:'http://www.placecage.com/200/400'});
myModel2.save();

myModel1.set({title: 'update 1!'});
myModel1.save();

myModel2.set({title: 'update 2!'});
myModel2.save();

//collections
var MyModels = Backbone.Collection.extend({
  url: 'http://tiy-fee-rest.herokuapp.com/collections/ADS',
  model: MyModel
});

console.log(MyModels);

MyModels.fetch();

console.log(MyModels);

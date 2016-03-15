Template.spelllists.helpers({
  'spelllists': function(){
    return Spelllists.find({}, {sort: {name: 1}});
  }
});

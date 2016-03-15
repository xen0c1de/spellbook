Template.spells.helpers({
  index: function () {
      return SpellsIndex;
  },
  spells: function () {
      return Spells.find({}, { sort: { name: 1 } });
  }
});

Template.spells.events({
  'click .delete-spell': function(event){
      event.preventDefault();
      var confirm = window.confirm("Delete this spell?");
      if(confirm){
          Spells.remove({ _id: this._id });
      }
  }
});

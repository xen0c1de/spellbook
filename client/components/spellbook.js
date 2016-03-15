Template.spellbookPage.events({

  'click .prepare-spell': function(event){
    event.preventDefault();
  },

  'click .remove-known': function(event){
    event.preventDefault();
    console.log(this._id);
    //Spellbooks.update({ _id: this._id }, { $pull: { spellsKnown: { _id: this._id } } });
  }

});

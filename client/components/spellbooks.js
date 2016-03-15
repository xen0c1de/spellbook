Template.spellbooks.helpers({
    'spellbooks': function(){
        return Spellbooks.find({}, {sort: {name: 1}})
    }
});

Template.spellbooks.events({
  'click .delete-spellbook': function(event){
      event.preventDefault();
      var confirm = window.confirm("Delete this spellbook?");
      if(confirm){
        Spellbooks.remove({ _id: this._id });
      }
  },

  'change .activeSpellbook': function(event){
    event.preventDefault();

    //find old active
    var oldActiveSpellbook = Spellbooks.findOne({activeSpellbook: true});
    
    //and set to false
    Spellbooks.update({_id: oldActiveSpellbook._id}, {$set: {activeSpellbook: false}});

    //set selected spellbook to active
    Spellbooks.update({_id: this._id}, {$set: {activeSpellbook: true}});
  }
});

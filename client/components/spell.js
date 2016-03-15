Template.spell.events({

  // handle the button click
  'click .btn': function(event) {

    // stop the event from propagating
    event.preventDefault();

    //find spellbook that is active
    var activeSpellbook = Spellbooks.findOne({activeSpellbook: true});

    // add to spells known of active spellbook
    Spellbooks.update({_id: activeSpellbook._id}, {$push: {spellsKnown: this}});
  }
});

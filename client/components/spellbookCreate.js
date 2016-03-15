Template.spellbookCreate.events({
    'submit form': function(event){
      event.preventDefault();
      var spellbookName = event.target.spellbookName.value;
      if(Spellbooks.find().count() == 0){
        Spellbooks.insert({
            name: spellbookName,
            spellsKnown: [],
            spellsPrepared: [],
            activeSpellbook: true
        });
      }
      else{
        Spellbooks.insert({
            name: spellbookName,
            spellsKnown: [],
            spellsPrepared: [],
            activeSpellbook: false
        });
      }

      event.target.spellbookName.value = "";
    }
});

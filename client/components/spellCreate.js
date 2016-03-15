Template.spellCreate.events({

  // handle the form submission
  'submit form': function(event) {

    // stop the form from submitting
    event.preventDefault();

    // get the data we need from the form
    var newSpell = {
      name: event.target.spellname.value,
      school: event.target.school.value,
      subschool: event.target.subschool.value,
      descriptor: event.target.descriptor.value,
      level: event.target.level.value,
      components: event.target.spellcomponents.value,
      castingTime: event.target.castingtime.value,
      range: event.target.range.value,
      effect: event.target.effect.value,
      duration: event.target.duration.value,
      savingThrow: event.target.savingthrow.value,
      spellResistance: event.target.spellresistance.value,
      description: event.target.spelldescription.value,
      materialComponent: event.target.materialcomponents.value,
      focus: event.target.focus.value
    };

    // create the new spell
    Spells.insert(newSpell, function(error, document){
      Router.go('home');
    });
  }

});

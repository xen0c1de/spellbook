// run this when the meteor app is started
Meteor.startup(function() {

  // if there are no spells available create SRD data
  if (Spells.find().count() === 0) {

    var spells = [
      { name: 'Acid Arrow',
      school: 'Conjuration',
      subschool: 'Creation',
      descriptor: 'Acid',
      level: [
        { name: 'Sorcerer', level: 2 },
        { name: 'Wizard', level: 2 }
      ],
      components: 'V, S, M, F',
      castingTime: '1 standard action',
      range: 'Long (400 ft. + 40 ft./level)',
      effect: 'One arrow of acid',
      duration: '1 round + 1 round per three levels',
      savingThrow: 'None',
      spellResistance: 'No',
      description: 'A magical arrow of acid springs from your hand and speeds to its target. You must succeed on a ranged touch attack to hit your target. The arrow deals 2d4 points of acid damage with no splash damage. For every three caster levels (to a maximum of 18th), the acid, unless somehow neutralized, lasts for another round, dealing another 2d4 points of damage in that round.',
      materialComponent: 'Powdered rhubarb leaf and an adder’s stomach.',
      focus: 'A dart.'
      },
      { name: 'Acid Fog',
      school: 'Conjuration',
      subschool: 'Creation',
      descriptor: 'Acid',
      level: [
        { name: 'Sorcerer', level: 6 },
        { name: 'Wizard', level: 6 }
      ],
      domain: [
        { name: 'Water', level: 7 }
      ]
      components: 'V, S, M/DF',
      castingTime: '1 standard action',
      range: 'Medium (100 ft. + 10 ft./level)',
      effect: 'Fog spreads in 20-ft. radius, 20 ft. high',
      duration: '1 round/level',
      savingThrow: 'None',
      spellResistance: 'No',
      description: 'Acid fog creates a billowing mass of misty vapors similar to that produced by a solid fog spell. In addition to slowing creatures down and obscuring sight, this spell’s vapors are highly acidic. Each round on your turn, starting when you cast the spell, the fog deals 2d6 points of acid damage to each creature and object within it.',
      materialComponent: 'A pinch of dried, powdered peas combined with powdered animal hoof.'
      },
      { name: 'Aid',
      school: 'Enchantment',
      subschool: 'Compulsion',
      descriptor: 'Mind-Affecting',
      level: [
        { name: 'Cleric', level: 2 }
      ],
      domain: [
        { name: 'Luck', level: 2 },
        { name: 'Good', level: 2 }
      ],
      components: 'V, S, DF',
      castingTime: '1 standard action',
      range: 'Touch',
      effect: 'Living creature touched',
      duration: '1 min./level',
      savingThrow: 'None',
      spellResistance: 'Yes (harmless)',
      description: 'Aid grants the target a +1 morale bonus on attack rolls and saves against fear effects, plus temporary hit points equal to 1d8 + caster level (to a maximum of 1d8+10 temporary hit points at caster level 10th).',
      materialComponent: ''
      }

      /***************************************
      COMPLETE DIVINE ADDON
      ***************************************/
      /*
      { name: 'Wrack',
      school: 'Necromancy',
      subschool: '',
      descriptor: 'Evil',
      level: [
        { name: 'Sorcerer', level: 4 },
        { name: 'Wizard', level: 4 },
        { name: 'Cleric', level: 3 }
      ],
      domain: [],
      components: 'V, S',
      castingTime: '1 standard action',
      range: 'Close (25 ft. + 5 ft./2 levels)',
      effect: 'One humanoid',
      duration: '1 round/level',
      savingThrow: 'Fortitude negates',
      spellResistance: 'Yes',
      description: 'A humanoid subject of the spellcaster\'s choosing is wracked with such pain that he doubles over and collapses. His face and hands blister and drip fluid, and the eyes cloud with blood, rendering him blind. For the duration of the spell, the subject is considered helpless and cannot take actions. \n\nEven when the spell ends, the subject is still visibly shaken and suffers a -2 penalty on attack rolls, saves, and checks for 3d10 minutes. The subject\'s sight returns at the end of the spell\'s duration.',
      materialComponent: ''
      }
      */
    ];

    // loop over each spell and insert into database
    _.each(spells, function(spell) {
      Spells.insert(spell);

      //loop over each spell lists (list of spells per caster type)
      _.each(spell.level, function(list) {
        //grab list
        var spelllist = Spelllists.findOne({name: list.name});

        //check if spelllist exists
        if (typeof spelllist == 'undefined') {
          //create list
          Spelllists.insert({
            name: list.name,
            spells: [spell]
          });
        }
        else {
          //if spell does not already exists in list
          if (spelllist.spells.indexOf(spell) === -1) {
            //insert spell in list and sort by level of spell
            Spelllists.update(
              {name: list.name},
              {
                $push: {
                  spells: {
                    $each: [spell],
                    $sort: { level: 1 }
                  }
                }
              }
            );
          }
        }
      });

      //loop over each domain and create domain lists
      _.each(spell.domain, function(list) {
        //grab list
        var domainlist = Domainlists.findOne({name: list.name});

        //check if spelllist exists
        if (typeof domainlist == 'undefined') {
          //create list
          Domainlists.insert({
            name: list.name,
            spells: [spell]
          });
        }
        else {
          //if spell does not already exists in list
          if (domainlist.spells.indexOf(spell) === -1) {
            //insert spell in list and sort by level of spell
            Domainlists.update(
              {name: list.name},
              {
                $push: {
                  spells: {
                    $each: [spell],
                    $sort: { level: 1 }
                  }
                }
              }
            );
          }
        }
      })
    });
  }

});

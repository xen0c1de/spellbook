Router.configure({
    layoutTemplate: 'main'
});

Router.route('/', function(){
    this.render('home');
}, {
    name: 'home'
});

Router.route('/createspell', function(){
    this.render('spellCreate');
});

Router.route('/updatespell/:_id', function(){
    this.render('spellUpdate', {
        data: function(){
            var currentSpell = this.params._id;
            return Spells.findOne({ _id: currentSpell })
        }
    });
});

Router.route('/spells', function(){
    this.render('spells');
});

Router.route('/spell/:_id', function(){
    this.render('spell', {
        data: function(){
            var currentSpell = this.params._id;
            return Spells.findOne({ _id: currentSpell })
        }
    });
}, {
      name: 'spell'
});

Router.route('/spellbooks', function(){
    this.render('spellbooks');
});

Router.route('/spellbook/:_id', function(){
    this.render('spellbookPage', {
        data: function(){
            var currentSpellbook = this.params._id;
            return Spellbooks.findOne({ _id: currentSpellbook })
        }
    });
});

Router.route('/spelllists', function(){
    this.render('spelllists');
});

Router.route('/domainlists', function(){
    this.render('domainlists');
});

Router.route('/spelllist/:_id', function(){
    this.render('spelllist', {
        data: function(){
            var currentSpelllist = this.params._id;
            return Spelllists.findOne({ _id: currentSpelllist })
        }
    });
}, {
      name: 'spelllist'
});

Router.route('/domainlist/:_id', function(){
    this.render('domainlist', {
        data: function(){
            var currentDomainlist = this.params._id;
            return Domainlists.findOne({ _id: currentDomainlist })
        }
    });
}, {
      name: 'domainlist'
});

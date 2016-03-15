Spells = new Mongo.Collection("spells");

SpellsIndex = new EasySearch.Index({
  collection: Spells,
  fields: ['name'],
  engine: new EasySearch.MongoDB()
});

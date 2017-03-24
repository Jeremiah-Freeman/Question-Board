import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  answer: DS.attr(),
  board: DS.belongsTo('board', { async: true })
});

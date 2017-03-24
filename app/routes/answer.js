import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('answer', params.answer_id);
  },
  saveAnswer3(params) {
    var newAnswer = this.store.createRecord('board', params);
    newAnswer.save();
    this.transitionTo('answer');
  }
});

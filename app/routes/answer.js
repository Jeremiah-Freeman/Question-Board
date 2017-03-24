import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('board', params.answer_id);
  },
  actions: {
    update(answer, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          answer.set(key,params[key]);
        }
      });
      answer.save();
      this.transitionTo('answer');
    },
    saveAnswer3(params) {
      var newAnswer = this.store.createRecord('board', params);
      newAnswer.save();
      this.transitionTo('answer');
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var board = params.board;
      board.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return board.save();
      });
      this.transitionTo('answer', board);
    }
  }
});

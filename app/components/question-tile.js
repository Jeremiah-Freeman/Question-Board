import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    update(board, params) {
      this.sendAction('update', board, params);
    }

  }
});

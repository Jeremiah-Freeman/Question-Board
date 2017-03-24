import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    update(board, params) {
      console.log('update middle');
      console.log((params));
      this.sendAction('update', board, params);
    }

  }
});

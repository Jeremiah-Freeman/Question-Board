import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion1() {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
      };
      this.sendAction('saveQuestion2', params);
    },
    function myFunction() {
      document.getElementById("resetinput").reset();
  },
    update(board, params) {
      this.sendAction('update', board, params);
    }
  }
});

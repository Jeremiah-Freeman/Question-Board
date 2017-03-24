import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer1() {
      var params = {
        answer: this.get('answer')
      };
      this.sendAction('saveAnswer2', params);
    },
    saveAnswer() {
      var params = {
        name: this.get('name'),
        answer: this.get('theAnswer'),
        board: this.get('board')
      };
      this.sendAction('saveAnswer', params);
    }
  }
});

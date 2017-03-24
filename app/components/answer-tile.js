import Ember from 'ember';

export default Ember.Component.extend({  actions: {
    saveAnswer1() {
      var params = {
        answer: this.get('answer')
      };
      this.sendAction('saveAnswer2', params);
    }
  }
});

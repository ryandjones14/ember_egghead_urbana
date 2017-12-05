import Controller from '@ember/controller';

export default Controller.extend({
  name: 'World',
  showName: true,
  numClicks: 0,

  actions: {
    toggleName() {
      this.toggleProperty('showName');
    },
    incrementClicks() {
      this.set('numClicks', ( this.get('numClicks') + 1 ));
    }
  }
});

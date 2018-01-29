import Em from 'ember';
import Controller from '@ember/controller';

const {
  get, set
} = Em;

export default Controller.extend({
  name: 'World',
  showName: true,
  numClicks: 0,
  wishList: Array('potato'),

  actions: {
    toggleName() {
      this.toggleProperty('showName');
    },
    incrementClicks() {
      this.set('numClicks', ( this.get('numClicks') + 1 ));
    },
    addToWishList(location) {
      let wishList = get(this, 'wishList');

      if (wishList.includes(location)) {
        return;
      } else {
        wishList.push(location);
        set(this, 'wishList', wishList);
      }
    },
  }
});

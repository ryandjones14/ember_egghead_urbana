import Component from '@ember/component';

export default Component.extend({
  isInWishList: false,
  buttonText: 'Add to Wish List',
  // buttonText: Ember.computed('isInWishList', function() {
  //   return this.get('isInWishList') ? 'Remove from Wish List' : 'Add to Wish List';
  // }),

  actions: {
    // toggleWishList: function() {
    //   this.toggleProperty('isInWishList');
    // }
  }
});

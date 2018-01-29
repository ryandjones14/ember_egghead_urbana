import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {id: '1', name: 'Atlanta', isInWishList: false},
      {id: '2', name: 'OKC', isInWishList: false},
      {id: '3', name: 'Austin', isInWishList: false},
    ];
  }
});

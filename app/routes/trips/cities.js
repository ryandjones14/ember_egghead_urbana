import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {id: '1', name: 'Atlanta'},
      {id: '2', name: 'OKC'},
      {id: '3', name: 'Austin'},
    ];
  }
});

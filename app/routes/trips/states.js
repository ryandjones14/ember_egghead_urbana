import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {id: '1', name: 'Texas', capital: 'Austin', isTheBest: true},
      {id: '2', name: 'Oklahoma', capital: 'Oklahoma City', isTheBest: false},
    ];
  }
});

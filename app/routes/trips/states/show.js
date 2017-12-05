import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    if (params.id === '1') {
      return {id: '1', capital: 'Austin', isTheBest: true};
    } else if (params.id === '2') {
      return {id: '2', capital: 'Oklahoma City', isTheBest: false};
    }
  }
});

import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('trips', function() {
    this.route('states', function() {
      // this.route('show', {path: '/:id'});
    });
  });
  this.route('trips.states', {path: 'trips/states'}, () => {
    this.route('trips.states.show', {path: '/:id'});
  });
  this.route('trips.cities',{path: 'trips/cities'});
});

export default Router;

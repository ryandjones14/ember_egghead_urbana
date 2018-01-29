import Em from 'ember';
import { alias } from "@ember/object/computed"
import Component from '@ember/component';

const {
  get
} = Em;

export default Component.extend({
  title: 'My Wish List',
  wishList: null,
  // init() {
  //   this._super(...get(this, 'wishList'));
  //   this.errors = [];
  // },
  // didUpdateAttrs() {
  //   this._super(...get(this, 'wishList'));
  //   this.set('errors', []);
  // },
  actions: {
    
  }
});

import Em from 'ember';
import { alias } from "@ember/object/computed"
import Controller from '@ember/controller';
import application from '../application';

const {
    get
} = Em;


export default Controller.extend({
    application: Em.inject.controller(),
    wishList: alias('application.wishList'),

    actions: {
        doAlert() {
            window.alert('I was clicked!');
        },
        addToWishList(location) {
            // let wishList = get(this, 'wishList');

            // if(wishList.includes(location)){
            //     return;
            // } else {
            //     wishList.push(location);
            // }
            get(this, 'application').send('addToWishList', location);
        },
    }
});

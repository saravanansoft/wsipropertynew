import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PropertyService} from '../../providers/property-service-mock';
import {PropertyDetailPage} from '../property-detail/property-detail';

@Component({
    selector: 'page-favorite-list',
    templateUrl: 'favorite-list.html'
})
export class FavoriteListPage {

    favorites: Array<any> = [];

    constructor(public navCtrl: NavController, public service: PropertyService) {
        console.log(this.favorites);
    }

    itemTapped(favorite) {
        this.navCtrl.push(PropertyDetailPage, favorite.property);
    }


}
import {Component} from '@angular/core';
import {ActionSheetController, NavController, NavParams, ToastController} from 'ionic-angular';
import {PropertyService} from '../../providers/property-service-mock';

@Component({
    selector: 'page-property-detail',
    templateUrl: 'property-detail.html'
})
export class PropertyDetailPage {

    propertyId: any;
    public propertyShowing;
    constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public propertyService: PropertyService, public toastCtrl: ToastController) {
        this.propertyId = this.navParams.data;
        propertyService.findById(this.propertyId)
        .then(
            data => {this.propertyShowing = data;
            }
        );
    }
}
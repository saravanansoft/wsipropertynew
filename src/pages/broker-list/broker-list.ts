import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PropertyService} from '../../providers/property-service-mock';

@Component({
    selector: 'page-broker-list',
    templateUrl: 'broker-list.html'
})
export class BrokerListPage {

    propertyShowing: Array<any>;

    constructor(public navCtrl: NavController, public service: PropertyService) {
        this.findPropertyShowings();
    }

    findPropertyShowings() {
        this.service.findPropertyShowings()
            .then(data => this.propertyShowing = data)
            .catch(error => alert(error));
    }
}

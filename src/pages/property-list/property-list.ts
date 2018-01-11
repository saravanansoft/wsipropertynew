import {Component} from '@angular/core';
import {Config, NavController, NavParams, ModalController} from 'ionic-angular';
import {PropertyService} from '../../providers/property-service-mock';
import {PropertyFilterPage} from '../property-filter/property-filter';
import {PropertyDetailPage} from '../property-detail/property-detail';


@Component({
    selector: 'page-property-list',
    templateUrl: 'property-list.html'
})
export class PropertyListPage {

    properties: Array<any>;
    searchKey: string = "";
    viewMode: string = "list";
    proptype: string;
    //from: string;

    constructor(public navCtrl: NavController, 
        public navParams: NavParams, 
        public service: PropertyService, 
        public modalCtrl: ModalController, 
        public config: Config) {
        this.findAll();
        this.proptype = this.navParams.get('proptype') || "";
        //this.from = this.navParams.get('from') || "";
         //console.log(this.proptype);
    }

    openFilterModal() {
      let modal = this.modalCtrl.create(PropertyFilterPage);
      modal.present();
    }

    openPropertyDetail(propertyId: any) {
      this.navCtrl.push(PropertyDetailPage, propertyId);
    }

    onInput(event) {
        this.service.findByName(this.searchKey)
            .then(data => {
                this.properties = data;
            })
            .catch(error => alert(JSON.stringify(error)));
    }

    onCancel(event) {
        this.findAll();
    }

    findAll() {
        this.service.findAll()
            .then(data => this.properties = data)
            .catch(error => alert(error));
    }
}

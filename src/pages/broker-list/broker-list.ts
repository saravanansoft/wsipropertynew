import {Component} from '@angular/core';
import {NavController, AlertController, ModalController} from 'ionic-angular';
import {PropertyService} from '../../providers/property-service-mock';

@Component({
    selector: 'page-broker-list',
    templateUrl: 'broker-list.html'
})
export class BrokerListPage {

    public propertyShowing: Array<any>;
    public sortByValue:string;
    public isPropertyName:boolean;
    public isPostedDate:boolean;

    constructor(public navCtrl: NavController, 
        public atrCtrl: AlertController, 
        public service: PropertyService, 
        public modalCtrl: ModalController ) {
        this.findPropertyShowings(this.sortByValue);
    }

    ionViewDidLoad()
    {
        this.isPostedDate = true;
        this.sortByValue="VisitDate";
    }

    findPropertyShowings(sortByValue:any) {
        this.service.findPropertyShowings(sortByValue)
            .then(data => this.propertyShowing = data)
            .catch(error => alert(error));
    }

    openFilterModal() {
        let alert = this.atrCtrl.create();
        alert.setTitle('Sort by');
        
        alert.addInput({
          type: 'radio',
          label: 'Property Name',
          value: 'PropertyName',
          checked: this.isPropertyName
        });
         alert.addInput({
          type: 'radio',
          label: 'Recent Visit Date',
          value: 'VisitDate',
          checked: this.isPostedDate
        });
    
        alert.addButton('Cancel');
        alert.addButton({
          text: 'Apply',
          handler: data => {
            this.sortByValue = data;
            this.isPropertyName = false;
            this.isPostedDate = false;
            if(data == "PropertyName")
            {
              this.isPropertyName = true;
            }
            else
            {
              this.isPostedDate = true;
            }
            this.service.findPropertyShowings(this.sortByValue)
            .then(data => {
                this.propertyShowing = data
            });
          }
        });
        alert.present();
      }
}

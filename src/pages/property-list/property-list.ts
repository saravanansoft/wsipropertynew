import {Component} from '@angular/core';
import {Config, NavController, NavParams, ModalController, AlertController} from 'ionic-angular';
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
    public sortByValue:string;
    public isPropertyName:boolean;
    public isPostedDate:boolean;
   

    constructor(public navCtrl: NavController, 
        public navParams: NavParams,
        public atrCtrl: AlertController, 
        public service: PropertyService, 
        public modalCtrl: ModalController, 
        public config: Config) {
            
        this.findAll(this.sortByValue);
        
        this.proptype = this.navParams.get('proptype') || "";
    }

    ionViewDidLoad()
    {
        this.isPostedDate = true;
        this.sortByValue="PostedDate";
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
        label: 'Recent Posted Date',
        value: 'PostedDate',
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
          this.service.findAll(this.sortByValue)
          .then(data => {
              this.properties = data
          });
        }
      });
      alert.present();
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
        this.findAll(this.sortByValue);
    }

    findAll(sortByValue:any) {
        this.service.findAll(sortByValue)
            .then(data => {
                this.properties = data
            })
            .catch(error => alert(error));
    }
}

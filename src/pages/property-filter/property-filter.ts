import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {PropertyService} from '../../providers/property-service-mock';
import { PropertyListPage } from '../property-list/property-list';

@Component({
  selector: 'page-property-filter',
  templateUrl: 'property-filter.html',
})

export class PropertyFilterPage {
	propertyName:any;
	postedDate:any;
	properties: Array<any>;
	sortedProperties:Array<any>;
	sortByValue:any;

	constructor(public navCtrl: NavController,
		public navParams: NavParams, 
		public service: PropertyService, ) {
			//this.sortByValue = this.navParams.get('sortByValue');
			alert(this.service.sortByValue)
			if (this.service.sortByValue != undefined){
				alert(this.service.sortByValue)
				if (this.service.sortByValue == "postedDate"){
					this.postedDate = "postedDate";
				}
				else{
					this.propertyName = "propertyName"
				}
			}else {
				this.postedDate = "postedDate";
			}
			
  }

	applySort() {
		if(this.propertyName == undefined){
					this.sortByValue = this.postedDate;
					this.service.sortByValue = this.postedDate;
				}
		else{
			this.sortByValue = this.propertyName;
			this.service.sortByValue = this.propertyName;
		}
		
	// this.service.sortProperties(this.sortByValue)
	// 	.then(data =>{ 
	// 				this.properties = data;
	// 				this.navCtrl.push(PropertyListPage,{previousPage:'PropertySortPage' ,sortedProperties:this.properties});
	// 			}).catch(error => alert(error));
	}

	onSelectionChangePropertyName() {
		this.postedDate = undefined;
	}

	onSelectionChangePostedDate() {
	this.propertyName = undefined;
	}

  closeModal() {
    this.navCtrl.pop();
  }

}

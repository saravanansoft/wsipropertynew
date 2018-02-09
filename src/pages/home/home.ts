import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';

import {SettingsPage} from '../settings/settings';
import {PropertyListPage} from '../property-list/property-list';
import {PropertyService} from '../../providers/property-service-mock';
import {PropertyDetailPage} from '../property-detail/property-detail';
import {NotificationsPage} from '../notifications/notifications';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  properties: Array<any>;
	searchKey: string = "";
	sortByValue:string;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public service: PropertyService) {
		this.sortByValue="PostedDate";
		this.findAll(this.sortByValue);
  }

  openPropertyListPage(proptype) {
  	// console.log(proptype);
  	this.navCtrl.push(PropertyListPage, proptype);
  }

	openPropertyDetail(property: any) {
	    this.navCtrl.push(PropertyDetailPage, property);
	}

  openSettingsPage() {
  	this.navCtrl.push(SettingsPage);
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
	        .then(data => this.properties = data)
	        .catch(error => alert(error));
	}

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }

  ionViewWillEnter() {
      this.navCtrl.canSwipeBack();
  }

}

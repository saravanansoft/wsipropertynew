import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavController, LoadingController, ToastController } from 'ionic-angular';

import {HomePage} from "../home/home";

@Component({
    selector: 'page-pre-approved',
    templateUrl: 'pre-approved.html'
})
export class PreApprovedPage implements OnInit {

  public onApprovedForm: FormGroup;

  constructor(private _fb: FormBuilder, public navCtrl: NavController, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {

  }

  ngOnInit() {
    this.onApprovedForm = this._fb.group({
      profiledata: [true, Validators.compose([
        Validators.required
      ])],
      propertyid: ['', Validators.compose([
        Validators.required
      ])],
      docnumber: ['', Validators.compose([
        Validators.required
      ])],
      annualincome: ['', Validators.compose([
        Validators.required
      ])],
      loan: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  // process send button
  sendData() {
    // send booking info
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    // show message
    let toast = this.toastCtrl.create({
      showCloseButton: true,
      cssClass: 'profiles-bg',
      message: 'Pre-Approved Data Sent!',
      duration: 3000,
      position: 'bottom'
    });

    loader.present();

    setTimeout(() => {
      loader.dismiss();
      toast.present();
      // back to home page
      this.navCtrl.setRoot(HomePage);
    }, 3000)
  }

}

import {Component, OnInit} from "@angular/core";
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";


//import {HomePage} from "../home/home";
import {PropertyListPage} from '../property-list/property-list';
// import {RegisterPage} from "../register/register";

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html'
})

export class AuthPage implements OnInit {
  public onLoginForm: FormGroup;
  public onRegisterForm: FormGroup;
  auth: string = "login";
  email: string ;
  password: string ;

  private headers = new Headers({'Content-Type': 'application/json',
  'charset': 'UTF-8'
  });

  constructor(private _fb: FormBuilder, 
    public nav: NavController, 
    public forgotCtrl: AlertController, 
    public menu: MenuController, 
    public toastCtrl: ToastController,
    public http: Http) {
    this.menu.swipeEnable(false);
  }

  ngOnInit() {
    this.onLoginForm = this._fb.group({
      email: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });

    this.onRegisterForm = this._fb.group({
      fullName: ['', Validators.compose([
        Validators.required
      ])],      
      email: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  // go to register page
  // register() {
  //   this.nav.setRoot(RegisterPage);
  // }

  // login and go to home page
  // login() {
  //   this.nav.setRoot(HomePage);
  // }

  Login(){
    this.nav.setRoot(PropertyListPage);
    // this.LoginService().subscribe(
    //   data =>{
    //     if (data.stateCode == 1) {
    //      // console.log(data);
    //       localStorage.setItem('token', data.accessToken);
    //       localStorage.setItem('email', data.email);
    //       this.nav.setRoot(PropertyListPage);
    //     }
    //     else{
    //     this.presentAlert();
    //     }
    // });
  }

  // LoginService():Observable<any> {
  //   this.email = this.onLoginForm.controls['email'].value;
  //   this.password = this.onLoginForm.controls['password'].value;
  //   let RequestOpts = new RequestOptions({ headers: this.headers });  
  //   let user = {
  //     Email: this.email,
  //     PasswordHash : this.password      
  //   }
  //   return this.http.post('https://wsitapp.azurewebsites.net/api/Users/GetToken', user, RequestOpts
  //       ).timeoutWith(2000, Observable.throw((err) => err))
  //                     .map((res :Response)  => res.json());
  // }

  // presentAlert() {
  //   let alert = this.forgotCtrl.create({
  //     title: 'Invalid user',
  //     subTitle: 'Enter correct email & password',
  //     buttons: ['Ok']
  //   });
  //   alert.present();
  // }

  // forgotPass() {
  //   let forgot = this.forgotCtrl.create({
  //     title: 'Forgot Password?',
  //     message: "Enter you email address to send a reset link password.",
  //     inputs: [
  //       {
  //         name: 'email',
  //         placeholder: 'Email',
  //         type: 'email'
  //       },
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         handler: data => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Send',
  //         handler: data => {
  //           console.log('Send clicked');
  //           let toast = this.toastCtrl.create({
  //             message: 'Email was sended successfully',
  //             duration: 3000,
  //             position: 'top',
  //             cssClass: 'dark-trans',
  //             closeButtonText: 'OK',
  //             showCloseButton: true
  //           });
  //           toast.present();
  //         }
  //       }
  //     ]
  //   });
  //   forgot.present();
  // }

}

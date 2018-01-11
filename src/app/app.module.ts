import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import {AuthPage} from '../pages/auth/auth';
import {InitialPage} from '../pages/initial/initial';
import {HomePage} from '../pages/home/home';
import {MyAccountPage} from '../pages/my-account/my-account';
import {SettingsPage} from '../pages/settings/settings';
import {PropertyListPage} from '../pages/property-list/property-list';
import {PropertyFilterPage} from '../pages/property-filter/property-filter';
import {PropertyDetailPage} from '../pages/property-detail/property-detail';
import {BrokerListPage} from '../pages/broker-list/broker-list';
import {BrokerDetailPage} from '../pages/broker-detail/broker-detail';
import {PreApprovedPage} from '../pages/pre-approved/pre-approved';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {AboutPage} from '../pages/about/about';
import {SupportPage} from '../pages/support/support';
import {NotificationsPage} from '../pages/notifications/notifications';
import {MessageListPage} from '../pages/message-list/message-list';
import {MessageDetailPage} from '../pages/message-detail/message-detail';
import {YourPropertyPage} from '../pages/your-property/your-property';

import { PipesModule } from '../pipes/pipes.module';

import {MessageService} from "../providers/message-service-mock";
import {PropertyService} from "../providers/property-service-mock";
import {BrokerService} from "../providers/broker-service-mock";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

@NgModule({
  declarations: [
    MyApp,
    AuthPage,
    InitialPage,
    HomePage,
    MyAccountPage,
    SettingsPage,
    AboutPage,
    SupportPage,
    PropertyListPage,
    PropertyFilterPage,
    PropertyDetailPage,
    FavoriteListPage,
    BrokerListPage,
    BrokerDetailPage,
    PreApprovedPage,
    NotificationsPage,
    MessageListPage,
    MessageDetailPage,
    YourPropertyPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      // mode: 'md', --> uncomment in case you'll do an Web App (PWA) build.
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AuthPage,
    InitialPage,
    HomePage,
    MyAccountPage,
    SettingsPage,
    AboutPage,
    SupportPage,
    PropertyListPage,
    PropertyFilterPage,
    PropertyDetailPage,
    FavoriteListPage,
    BrokerListPage,
    BrokerDetailPage,
    PreApprovedPage,
    NotificationsPage,
    MessageListPage,
    MessageDetailPage,
    YourPropertyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    PropertyService,
    BrokerService,
    MessageService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

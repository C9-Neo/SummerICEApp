import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { AccountsPage } from '../pages/accounts/accounts';
import { InfoPage } from '../pages/info/info';
import { InfoAddressPage } from '../pages/InfoAddress/InfoAddress';
import { InfoAmountPage } from '../pages/InfoAmount/InfoAmount';
import { ReviewPage } from '../pages/review/review';
import { ProfilePage } from '../pages/profile/profile';
import { TransactionHistoryPage } from '../pages/transactionhistory/transactionhistory';
import { TransactionHistoryDetailPage } from '../pages/transactionhistorydetail/transactionhistorydetail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ThankyouPage } from '../pages/thankyou/thankyou';
import { PopoverComponent } from '../components/popover/popover';
import { InternationalPhoneModule } from 'ng4-intl-phone';
import { IonicStorageModule } from '@ionic/storage';
//import { NgxPhoneMaskModule } from 'ngx-phone-mask';
import { TextMaskModule } from 'angular2-text-mask';
import { AppMaskerModule } from 'brmasker-ionic';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AccountsPage,
    InfoPage,
    InfoAddressPage,
    InfoAmountPage,
    ReviewPage,
    ProfilePage,
    TransactionHistoryPage,
    TransactionHistoryDetailPage,
    ListPage,
    ThankyouPage,
    PopoverComponent
  ],
  imports: [
    BrowserModule,
    InternationalPhoneModule,
    //NgxPhoneMaskModule,
    TextMaskModule,
    AppMaskerModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AccountsPage,
    InfoPage,
    InfoAddressPage,
    InfoAmountPage,
    ReviewPage,
    ProfilePage,
    TransactionHistoryPage,
    TransactionHistoryDetailPage,
    ListPage,
    ThankyouPage,
    PopoverComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

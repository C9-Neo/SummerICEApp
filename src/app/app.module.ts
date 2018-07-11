import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { AccountsPage } from '../pages/accounts/accounts';
import { InfoPage } from '../pages/info/info';
import { ReviewPage } from '../pages/review/review';
import { ProfilePage } from '../pages/profile/profile';
import { TransactionHistoryPage } from '../pages/transactionhistory/transactionhistory';
import { TransactionHistoryDetailPage } from '../pages/transactionhistorydetail/transactionhistorydetail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ThankyouPage } from '../pages/thankyou/thankyou';
import { PopoverComponent } from '../components/popover/popover';
import { InternationalPhoneModule } from 'ng4-intl-phone';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AccountsPage,
    InfoPage,
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
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AccountsPage,
    InfoPage,
    ReviewPage,
    ProfilePage,
    TransactionHistoryPage,
    TransactionHistoryDetailPage,
    ListPage,
    ThankyouPage,
    PopoverComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
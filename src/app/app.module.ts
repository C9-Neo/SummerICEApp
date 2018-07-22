import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular-lite';
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
import { TransactionServices } from '../services/transaction.services';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IntroductionPage } from '../pages/introduction/introduction';
import { ThankyouPage } from '../pages/thankyou/thankyou';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { ContactPage } from '../pages/contact/contact';
import { FilterPage } from '../pages/filter/filter';
import { CallNumber} from '@ionic-native/call-number';
import { AccountsactivityPage } from '../pages/accountsactivity/accountsactivity';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PopoverComponent } from '../components/popover/popover';
import { InternationalPhoneModule } from 'ng4-intl-phone';
import { IonicStorageModule } from '@ionic/storage';
import { NgxMaskModule } from 'ngx-mask'
import { InputMaskModule } from 'ionic-input-mask';
import { SenderInfoService } from '../services/senderInfo';
import { AssistantPage } from '../pages/assistant/assistant';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { ChartsModule } from 'ng2-charts';

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
    IntroductionPage,
    EditProfilePage,
    PopoverComponent,
    ContactPage,
    FilterPage,
    AccountsactivityPage,
    AssistantPage
  ], 
  imports: [ 
    FormsModule, 
    MbscModule,
    HttpModule,
    ChartsModule,
    BrowserAnimationsModule,
    BrowserModule,
    InternationalPhoneModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: LoginPage, name: 'Login', segment: 'login' },
        { component: IntroductionPage, name: 'Introduction', segment: 'introduction' },
        { component: ListPage, name: 'List', segment: 'list' },
        { component: AccountsPage, name: 'Accounts', segment: 'accounts' },
        { component: InfoPage, name: 'RecipientInfo', segment: 'recipientinfo' },
        { component: InfoAddressPage, name: 'RecipientAddress', segment: 'recipientaddress' },
        { component: InfoAmountPage, name: 'RecipientAmount', segment: 'recipientamount' },
        { component: ReviewPage, name: 'ReviewTransaction', segment: 'recipienttransaction' },
        { component: ProfilePage, name: 'Profile', segment: 'profile' },
        { component: TransactionHistoryPage, name: 'TransactionHistory', segment: 'transactionhistory' },
        { component: TransactionHistoryDetailPage, name: 'TransactionHistoryDetails', segment: 'transactiondetails' },
        { component: ThankyouPage, name: 'Confirm', segment: 'confirm' },
        { component: EditProfilePage, name: 'EditProfile', segment: 'editprofile' },
        { component: ContactPage, name: 'contact', segment: 'contact' },
        { component: FilterPage, name: 'Filter', segment: 'filter' },
        { component: AccountsactivityPage, name: 'AccountActivty', segment: 'AccountActivty' },
      ]
    }),
    NgxMaskModule.forRoot(),
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
    IntroductionPage,
    ListPage,
    ThankyouPage,
    EditProfilePage,
    PopoverComponent, 
    ContactPage,
    FilterPage,
    AccountsactivityPage,
    AssistantPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    TransactionServices,
    SenderInfoService,
    NativePageTransitions,
    CallNumber,
    Storage, 
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

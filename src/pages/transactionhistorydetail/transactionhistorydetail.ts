import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-transactionhistorydetail',
  templateUrl: 'transactionhistorydetail.html'
})
export class TransactionHistoryDetailPage {

  public transactionNumber;
  public amount = 80;
  public account_transfer_from = "House Savings";
  public recipient_name:String;

  public refernce_id;
  public transaction_date;
  public transaction_status;
  public transaction_amount;
  public recipient_address;
  public recipient_city;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // come back to this this.transactionNumber = navParams.get('item');
    this.refernce_id = navParams.get('ref_id');
    this.transaction_date = navParams.get('date');
    this.transaction_status = navParams.get('status');
    this.transaction_amount = navParams.get('amount');
    this.recipient_address = navParams.get('recipient_address');
    this.recipient_city = navParams.get('recipient_city');

  }


  
}

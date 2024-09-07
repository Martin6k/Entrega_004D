import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-res-password',
  templateUrl: './res-password.page.html',
  styleUrls: ['./res-password.page.scss'],
})
export class ResPasswordPage implements OnInit {

  constructor(private navCtrl: NavController) {
   }
   navigateToLogin() {
    this.navCtrl.navigateForward('/home', {
    });
  }

  ngOnInit() {
    
  }

}

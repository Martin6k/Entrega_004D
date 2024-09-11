import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss'],
})
export class InicioPage implements OnInit {
  nombre: string = '';

  constructor(private route: ActivatedRoute,private navCtrl: NavController) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.nombre = params['nombre'] || '';
    });
  }
  navigateToLogin() {
    this.navCtrl.navigateForward('/main', {
      queryParams: { nombre: this.nombre }
    });
  }
}

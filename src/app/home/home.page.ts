import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public nombre: string = '';
  public password: string = "";
  public edad: string = "";
  public email: string = "";
  public telefono:  string = "";
  public pais: string = "";
  public contador: number =0;
  public contador2: number =0;
  public contador3: number =0;
  public intervalo: any

  constructor(private navCtrl: NavController) {}

  navigateToInicio() {
    this.navCtrl.navigateForward('/inicio', {
      queryParams: { nombre: this.nombre }
    });
  }}
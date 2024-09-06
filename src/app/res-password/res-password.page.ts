import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-res-password',
  templateUrl: './res-password.page.html',
  styleUrls: ['./res-password.page.scss'],
})
export class ResPasswordPage implements OnInit {
public password : string= '';
public nombre : string ='';
  constructor() { }

  ngOnInit() {
  }

}

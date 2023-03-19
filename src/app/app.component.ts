import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'body',
  template: '<div style="overflow: hidden"> <router-outlet></router-outlet> </div>'
})
export class AppComponent implements OnInit {
  title = '789-freelance';
  constructor(
    private router: Router
  ) {

  }
  ngOnInit() {

  }
  toRegister(){
    this.router.navigateByUrl('/1');
  }
}

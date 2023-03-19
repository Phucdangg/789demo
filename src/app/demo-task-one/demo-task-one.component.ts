import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo-task-one',
  templateUrl: './demo-task-one.component.html',
  styleUrls: ['./demo-task-one.component.scss']
})
export class DemoTaskOneComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  toRegister(){
    this.router.navigateByUrl('/1');
  }
}

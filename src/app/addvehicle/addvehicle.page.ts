import { Component, OnInit } from '@angular/core';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addvehicle',
  templateUrl: './addvehicle.page.html',
  styleUrls: ['./addvehicle.page.scss'],
})
export class AddvehiclePage implements OnInit {
  public loc: any;
  public type: any;
  car: number;
  bike: any;
  value: number;

  constructor(    private router: Router,
    ) { }

  ngOnInit() {
  }
  dash(){
    this.router.navigateByUrl('/tabs');
  }

  onChange(loc) {
    if (this.loc != '4') {
      this.value = 0;
    } else this.value = 1;

  }

  onChange1(type) {
    console.log(this.type);
    if (this.type == "Car") {

      this.car = 1;
      this.bike = 0;
    } else {
      this.bike = 1;
      this.car = 0;
    }

   

  }

}

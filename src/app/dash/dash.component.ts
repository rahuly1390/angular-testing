import { Component, OnInit } from '@angular/core';

import { Observable ,of} from 'rxjs';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
title = 'Dashboard Section!';

 constructor() {}
ngOnInit() {

}


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      let title = document.querySelector('h2')
      if(title?.classList.contains('slideOff')){
        title.classList.toggle('slideOn')
      }
    }, 200);
  }

}

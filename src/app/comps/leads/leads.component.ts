import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {

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

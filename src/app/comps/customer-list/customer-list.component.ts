import { Component, OnInit } from '@angular/core';
import { DbFbService } from '../../services/db-fb.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
_ar:any[] = [];
  constructor(private dbFb:DbFbService) { }

  ngOnInit(): void {
    setTimeout(() => {
      let title = document.querySelector('h2')
      if(title?.classList.contains('slideOff')){
        title.classList.toggle('slideOn')
      }
    }, 200);
    this._ar = this.dbFb.getCustomersArrayData()

}

delCustomer(_id:any): void {
  if(confirm('Are you sure you want to delete?')){
    this.dbFb.delCustomer(_id)
  }
}
// filtering/search by input funcs
searchByFirstName(ev:any): void {
  this.dbFb.filterArrayBy(ev.target.value,"first")
}
searchByLastName(ev:any): void {
  this.dbFb.filterArrayBy(ev.target.value,"last")
}
searchByPhone(ev:any): void {
  this.dbFb.filterArrayBy(ev.target.value,"phone")
}

// todo 2 more funcs for filter last name and phone

}
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DbFbService } from '../../services/db-fb.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  @ViewChild("f") myForm:any;
  constructor(private dbFb:DbFbService,private router:Router) { }

  ngOnInit(): void {
  }

  onSub():any {
    if(this.myForm.form.status == "VALID"){
      let bodyForm = this.myForm.form.value 
      console.log(bodyForm)
      // adding prop id for the id of the user
      bodyForm.user_id = localStorage["fb_user"];
      // using my custom func in services to capitalize
      //  first letter of noth f,l name
      bodyForm.first = this.dbFb.capitalizeFirstLetter(bodyForm.first)
      bodyForm.last = this.dbFb.capitalizeFirstLetter(bodyForm.last)
      this.dbFb.addCustomer(bodyForm);
      alert("success")
this.router.navigate(['/admin'])
    }
  }

}
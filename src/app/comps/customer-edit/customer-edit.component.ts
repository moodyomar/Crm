import { Component, OnInit,ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';
import { DbFbService } from '../../services/db-fb.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  @ViewChild("f") myForm:any;
  user:any = {}
  constructor(private afs:AngularFireDatabase, private route:ActivatedRoute,private dbFb:DbFbService,private router:Router) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  onSub(){
    let id = this.route.snapshot.paramMap.get('id');
    console.log(this.myForm.form);
    if(this.myForm.form.status == "VALID"){
      // console.log(this.myForm.form.value)
      let bodyForm = this.myForm.form.value ;
      // adding the ID property of the user
      bodyForm.user_id = localStorage["fb_user"];
      bodyForm.first = this.dbFb.capitalizeFirstLetter(bodyForm.first)
      bodyForm.last = this.dbFb.capitalizeFirstLetter(bodyForm.last)

      this.dbFb.editCustomer(id, bodyForm);
      alert("Customer updated!");
      this.router.navigate(["/admin"])
    }
  }

  getUserInfoObser():any {
    let id = this.route.snapshot.paramMap.get('id');
    return this.afs.list("customers/"+id).snapshotChanges();
  }

  getUserInfo():void {
    this.getUserInfoObser().subscribe((ref:any) => {
      console.log(ref);
      ref.map((item:any) => {
        // item.key -> include the key/property name
        //  item.payload.val() -> include the value
        this.user[item.key] = item.payload.val();
      })
      console.log(this.user)
    })
  }

}

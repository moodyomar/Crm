import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DbFbService {
customers_ar:any[] = [];
// copy of customers ar for search filter
realCustomers_ar:any[] = [];
showSidebar:boolean = true;

  constructor(private afs:AngularFireDatabase) { 
    this.getCustomers();
   }

getCustomersArrayData():any{
return this.customers_ar
}
addUser(_body:any){
  _body.password = "*****"
  this.afs.list("users").push(_body)
}

  addCustomer(_body:any):void{
    this.afs.list("customers").push(_body)
  }

  delCustomer(_id:any): void {
this.afs.list("customers/"+_id).remove();
  }

  editCustomer(_id:any,_body:any): void {
    this.afs.object("customers/"+_id).update(_body)
      }

getObserCustomer():any{
// return the customers of the user , second parameter to list
let userId = localStorage["fb_user" || ""]
  return this.afs.list("customers",(ref => ref.orderByChild("user_id").equalTo(userId))).snapshotChanges();
}

getCustomers():void{
  this.getObserCustomer().subscribe((res:any) => {
    this.customers_ar.splice(0,this.customers_ar.length);
    res.map((item:any) => {
let newItem = item.payload.val();
newItem.id = item.payload.key;
this.customers_ar.push(newItem);
    })
    this.realCustomers_ar = [...this.customers_ar]
    console.log(this.customers_ar)
  })
}

filterArrayBy(_filterSearch:any,_key:any):void{
  let temp_ar = this.realCustomers_ar.filter((item) => {
    return item[_key].includes(this.capitalizeFirstLetter(_filterSearch));
  })
  this.customers_ar.splice(0,this.customers_ar.length,...temp_ar)
}
// capitalizing the first letter of the word(key)
capitalizeFirstLetter(string:any) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

}

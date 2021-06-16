import { Component, OnInit, ViewChild } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";

@Component({
  selector: 'app-prods',
  templateUrl: './prods.component.html',
  styleUrls: ['./prods.component.css']
})
export class ProdsComponent implements OnInit {
  prods_ar:any[] = [];
  @ViewChild("f") myForm:any; 
  constructor(private afs:AngularFireDatabase) { }

  ngOnInit(): void {
    this.getRealFoods();
  }

  addProd():void{
    // console.log(this.myForm.form)
    if(this.myForm.form.status == "VALID"){
      let newProd = this.myForm.form.value;
      this.afs.list("testdb").push(newProd);
    }
  }

  delProd(_idDel:any):void{
if(confirm("Are you sure")){
  this.afs.list("testdb/" + _idDel).remove();
}
  }

  getObserProds():any{
    return this.afs.list("testdb").snapshotChanges()
  }


  getRealFoods():void {
    this.getObserProds().subscribe((res:any) => {
      // console.log(res);
      this.prods_ar.splice(0,this.prods_ar.length);
      res.map((item:any) => {
        let newItem = item.payload.val();
        newItem.id = item.payload.key;
        this.prods_ar.push(newItem);
      
      })
      console.log(this.prods_ar);
    })
  }

}

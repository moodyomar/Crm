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
      // אוסף כאובייקט את המוצר החדש לפי השמות של האינפוטים בטופס
      // כמאפיינים
      let newProd = this.myForm.form.value;
      // מוסיף למסד נתונים את המידע החדש
      this.afs.list("testdb").push(newProd);
    }
  }

  delProd(_idDel:any):void{
if(confirm("Are you sure")){
  this.afs.list("testdb/" + _idDel).remove();
}
  }

  getObserProds():any{
    // מחזיר את כל המידע מהמסד נתונים מהקולקשיין טסט די בי באובסירבלב
    // וגם מאזין ברגע שנניח מוסיפים ל מסד נתונים מידע חדש הוא גם מתעדכן אוטומטית
    return this.afs.list("testdb").snapshotChanges()
  }

  // אוסף את המידע מהמסד נתונים של הפייר בייס ריל טיים
  getRealFoods():void {
    this.getObserProds().subscribe((res:any) => {
      // console.log(res);
      this.prods_ar.splice(0,this.prods_ar.length);
      res.map((item:any) => {
        let newItem = item.payload.val();
        // חשוב לדעת מה האיי די בשביל מחיקה ועריכה בהמשך
        // האיי די יתבסס על הקיי של הרשומה
        newItem.id = item.payload.key;
        this.prods_ar.push(newItem);
      
      })
      console.log(this.prods_ar);
    })
  }

}

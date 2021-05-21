import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
_ar:any[] = [];
  constructor(private afs:AngularFireDatabase) { }

  ngOnInit(): void {
    setTimeout(() => {
      let title = document.querySelector('h2')
      if(title?.classList.contains('slideOff')){
        title.classList.toggle('slideOn')
      }
    }, 200);
    this.getListContactUser()
  }

getObserContactsUser():any{
return this.afs.list("users").snapshotChanges();
}

getListContactUser():any{
  this.getObserContactsUser().subscribe((ref:any) => {
    this._ar.splice(0,this._ar.length)
    ref.map((item:any) => {
      let newItem = item.payload.val();
      this._ar.push(newItem)
    })
  })
}

}

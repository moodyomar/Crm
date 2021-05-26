import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  user:any = {}
  constructor(private afs:AngularFireDatabase, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfoObser():any {
    let id = this.route.snapshot.paramMap.get('id');
    return this.afs.list("customers/"+id).snapshotChanges();
  }

  getUserInfo():void {
    this.getUserInfoObser().subscribe((ref:any) => {
      console.log(ref);
      // ill need a loop todo 2 things
      // takes they key and and its value payload.val()
      // from the firebase objects with has keys and values 
      ref.map((item:any) => {
        // item.key -> key name
        //  item.payload.val() -> the value
        this.user[item.key] = item.payload.val();
        // console.log(item.payload.val())
      })
      console.log(this.user)
    })
  }

}

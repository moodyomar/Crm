import { Component, OnInit } from '@angular/core';
import { DbFbService } from 'src/app/services/db-fb.service';
import { AuthFbService } from '../../services/auth-fb.service';

@Component({
  selector: 'app-app-admin',
  templateUrl: './app-admin.component.html',
  styleUrls: ['./app-admin.component.css']
})
export class AppAdminComponent implements OnInit {
showSideNavbar:boolean = false;
  constructor(private authSer:AuthFbService,private dbFb:DbFbService) { }

  ngOnInit(): void {
    this.authSer.checkUserAuth();
    this.showSideNavbar = this.dbFb.showSidebar;
  }



}

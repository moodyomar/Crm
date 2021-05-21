import { Component, OnInit } from '@angular/core';
import { AuthFbService } from '../../services/auth-fb.service';
import { SideNavAdminComponent } from '../side-nav-admin/side-nav-admin.component';
import {DbFbService} from '../../services/db-fb.service'


@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {
user:any = {}
  constructor(private authSer:AuthFbService,private dbFb:DbFbService) { }

  toggleNavOnMobile(){
    this.dbFb.showSidebar = !this.dbFb.showSidebar;
    console.log(this.dbFb.showSidebar)

  }

  ngOnInit(): void {
    this.user = this.authSer.getUserData();
   
  }

  logout(){
    this.authSer.logOut();
  }


}

import { Component, OnInit } from '@angular/core';
import { DbFbService } from 'src/app/services/db-fb.service';

@Component({
  selector: 'app-side-nav-admin',
  templateUrl: './side-nav-admin.component.html',
  styleUrls: ['./side-nav-admin.component.css']
})
export class SideNavAdminComponent implements OnInit {
  showSideNavbar:boolean = false;

  constructor(private dbFb:DbFbService) { }


  ngOnInit(): void {
    this.showSideNavbar = this.dbFb.showSidebar;
  }

}

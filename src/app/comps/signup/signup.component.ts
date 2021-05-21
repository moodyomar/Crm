import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DbFbService } from '../../services/db-fb.service';
import { AuthFbService } from '../../services/auth-fb.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild("f") myForm:any
  constructor(private authFb:AuthFbService,private router:Router,private dbFire:DbFbService) { }

  ngOnInit(): void {
  }

  async onSub() {
    console.log(this.myForm.form.value);
    let user = this.myForm.form.value
    let result = await this.authFb.signUpNewUser(user);
    console.log(result);
    if(result.user) {
      // Todo add new record
      alert('Sign up succesful')
      this.dbFire.addUser(user);
      this.router.navigate(["/"])
      setTimeout(() => {
        window.location.reload();
      },400)
    }
    if(result.code){
      alert(result.message)
    }
    // result.user -> success
    // result.code -> problem
    return result;
    //TODO: also add new record in db of firebase
  }

}

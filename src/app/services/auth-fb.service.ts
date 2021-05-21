import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthFbService {
  user:any = {}

  constructor(private afAuth: AngularFireAuth,private router:Router) { }

  async logInFb(_email:string,_pass:string){
    let user = await this.afAuth.signInWithEmailAndPassword(_email,_pass); 
    return user;
  }

  async signUpNewUser(_user:any){
    try{
        let result = await this.afAuth.createUserWithEmailAndPassword(_user.email,_user.password)
        return result;
    } catch(err) {
        console.log(err);
        return err;
    }
    
  }

  getUserData():any {
    return this.user
  }

  // checking if the user is logged in
  checkUserAuth(){
    this.afAuth.authState.subscribe((user:any) => {
      if(!user){
        // לא מזהה יוזר
        alert("You must login first to see the admin panel");
        this.router.navigate(["/"]);
      }
      else{
        for(let key in user){
          this.user[key] = user[key];
        }
      }
      console.log(user);
    })
  }

async logOut(){
  await this.afAuth.signOut();
  localStorage.removeItem("fb_user")
  // back to login
  this.router.navigate(["/"]);
  setTimeout(() => {
    window.location.reload();
  },400)
}

}

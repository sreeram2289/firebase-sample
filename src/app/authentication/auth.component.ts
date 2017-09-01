import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component ({
    selector:'login',
    templateUrl:'auth.component.html',
    styles: ['bg-primary {}']
})

export class AuthComponent{
    email:string;
    passwrd: string;
    user: Observable<firebase.User>;
    constructor(public fbAuth: AngularFireAuth){
        this.user = fbAuth.authState;
    }

    createUser(): void {
        this.fbAuth.auth
        .createUserWithEmailAndPassword(this.email, this.passwrd)
        .catch(this.handleError)
    }

    login(){
        this.fbAuth.auth.signInWithEmailAndPassword(this.email, this.passwrd)
        .catch(this.handleError);
    }

    loginWithGoogle() {
        this.fbAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      }
    
    logout() {
    this.fbAuth.auth.signOut();
    }

    handleError(error: any): void {
        console.error(error.message, error);
    }
}
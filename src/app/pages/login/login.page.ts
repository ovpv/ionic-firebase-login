import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import * as firebase from "firebase";
import "firebase/auth";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  email: string;
  password: string;

  constructor(public navCtrl: NavController) {}

  ngOnInit() {}

  onLogin(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(data => {
        this.navCtrl.navigateRoot("/home");
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  }
}

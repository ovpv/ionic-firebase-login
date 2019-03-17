import { ToastService } from './../../services/toast.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/auth';
import { NavController } from '@ionic/angular';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
	email: string;
	password: string;

	constructor(public navCtrl: NavController, public toast: ToastService) {}

	ngOnInit() {}

	onLogin(email, password) {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(data => {
				this.navCtrl.navigateRoot('home');
			})
			.catch(error => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				this.toast.present(errorMessage);
				// ...
			});
	}
}

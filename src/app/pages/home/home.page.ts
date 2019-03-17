import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/auth';
import { NavController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
	constructor(private navCtrl: NavController, public toast: ToastService) {}

	ngOnInit() {}

	onLogout() {
		firebase
			.auth()
			.signOut()
			.then(() => {
				// Sign-out successful.
				this.navCtrl.navigateRoot('login');
			})
			.catch(error => {
				this.toast.present(error.message);
			});
	}
}

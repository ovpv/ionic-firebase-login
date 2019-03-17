import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGaurd } from './guards/auth.guard';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
	{
		path: 'home',
		loadChildren: './pages/home/home.module#HomePageModule',
		canActivate: [AuthGaurd]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}

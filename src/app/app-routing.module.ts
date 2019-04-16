import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpotifyCallbackComponent } from './spotify-login/spotify-callback.component';
import { SpotifyLoginComponent } from './spotify-login/spotify-login.component';

const routes: Routes = [
  {path: 'callback', component: SpotifyCallbackComponent},
  {path: 'login', component: SpotifyLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

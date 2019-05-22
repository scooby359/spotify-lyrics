import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { SpotifyService } from '../services/spotify.service';
import { Profile } from '../interfaces/profile';

@Component({
  selector: 'app-spotify-panel',
  templateUrl: './spotify-panel.component.html',
  styleUrls: ['./spotify-panel.component.scss']
})
export class SpotifyPanelComponent implements OnInit {

  profile: Profile = undefined;

  constructor(
    private oauthService: OAuthService,
    private spotifyService: SpotifyService
  ) { }

  ngOnInit() {
    this.getName();
  }

  public login() {
    this.oauthService.initImplicitFlow();
  }

  public logoff() {
    this.oauthService.logOut();
  }

  isLoggedIn() {
    return this.oauthService.hasValidAccessToken();
  }

  getName() {
    this.spotifyService.getProfile()
    .subscribe(
      (res: Profile) => {
        console.log('Profile returned', res);
        this.profile = res;
      }, err => {
        console.log('Error getting profile', err);
      });
  }

}

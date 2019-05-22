import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NowPlaying } from '../interfaces/nowPlaying';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  baseUrl = 'https://api.spotify.com/v1';

  constructor(
    private http: HttpClient,
    private oauthService: OAuthService
  ) {
  }

  private setHeaders() {
    const headers = new HttpHeaders({authorization: `Bearer ${this.oauthService.getAccessToken()}`});
    console.log('headers:', headers);
    return headers;
  }

  public getProfile() {
    const url = `${this.baseUrl}/me`;
    return this.http.get(url, {headers: this.setHeaders()});
  }

  public getNowPlaying() {
    const url = `${this.baseUrl}/me/player`;
    return this.http.get(url, {headers: this.setHeaders()});
  }
}

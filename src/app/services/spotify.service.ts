import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  BASE_URL = 'https://api.spotify.com';
  AUTHORIZATION_URL = 'https://accounts.spotify.com';
  CLIENT_ID = '6a38ce340f4c4b49bc4d23c7a38495b6';
  SCOPE = ['user-read-currently-playing'];
  constructor() {}

  getAuthorizeUrl(): string {
    const url = `${this.AUTHORIZATION_URL}/authorize?`
      + `client_id=${this.CLIENT_ID}`
      + `&response_type=token`
      + `&scope=${this.SCOPE.join(' ')}`
      + `&redirect_uri=http://localhost:4200/callback`;

    return url;
  }
}

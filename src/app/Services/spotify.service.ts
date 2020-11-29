import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NowPlayingResponse } from '../interfaces/nowPlayingResponse';
import { Observable, Subject, of } from 'rxjs';
import { tap, map} from 'rxjs/operators';
import { Profile } from '../interfaces/profile';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  private nowPlaying = new Subject<NowPlayingResponse>();
  public nowPlaying$ = this.nowPlaying.asObservable();

  baseUrl = 'https://api.spotify.com/v1';

  constructor(
    private http: HttpClient,
    private oauthService: OAuthService
  ) {
    this.refreshNowPlaying();
  }

  private setHeaders(): HttpHeaders {
    const headers = new HttpHeaders({authorization: `Bearer ${this.oauthService.getAccessToken()}`});
    return headers;
  }

  public getProfile(): Observable<Profile> {
    const url = `${this.baseUrl}/me`;
    return this.http.get<Profile>(url, {headers: this.setHeaders()});
  }

  private getNowPlaying(): Observable<void> {
    console.log('getNowPlaying');
    const url = `${this.baseUrl}/me/player`;
    return this.http.get<NowPlayingResponse>(url, {headers: this.setHeaders()})
    .pipe(
      tap(x => console.log(x)),
      map(x => this.nowPlaying.next(x))
    );
  }

  public refreshNowPlaying(): void {
    this.getNowPlaying()
    .subscribe();
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { SpotifyService } from '../services/spotify.service';
import { Profile } from '../interfaces/profile';
import { NowPlayingResponse } from '../interfaces/nowPlayingResponse';
import { Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-spotify-panel',
  templateUrl: './spotify-panel.component.html',
  styleUrls: ['./spotify-panel.component.scss']
})
export class SpotifyPanelComponent implements OnInit, OnDestroy {

  profile: Profile;
  nowPlaying: NowPlayingResponse;
  loading = false;

  unsubscribe$ = new Subject<any>();

  constructor(
    private oauthService: OAuthService,
    private spotifyService: SpotifyService
  ) { }

  ngOnInit() {
    this.spotifyService.nowPlaying$
    .pipe(
      tap(x => {
        this.nowPlaying = x;
        this.loading = false;
      }),
      takeUntil(this.unsubscribe$)
    )
    .subscribe();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public login() {
    this.oauthService.initImplicitFlow();
  }

  public logoff() {
    this.oauthService.logOut();
  }

  get isLoggedIn() {
    return this.oauthService.hasValidAccessToken();
  }

  get nowPlayingImage() {
    return this.nowPlaying.item.album.images[0].url;
  }

  get nowPlayingTitle() {
    return this.nowPlaying.item.name;
  }

  get nowPlayingArtist() {
    return this.nowPlaying.item.artists.map(x => x.name).join(', ');
  }

  refreshNowPlaying() {
    if (!this.loading) {
      this.loading = true;
      this.spotifyService.refreshNowPlaying();
    }
  }

}

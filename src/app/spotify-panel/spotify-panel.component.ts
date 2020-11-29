import { Component, OnDestroy, OnInit } from '@angular/core';
import { Profile } from '../Interfaces/profile';
import { NowPlayingResponse } from '../Interfaces/nowPlayingResponse';
import { Subject } from 'rxjs';
import { SpotifyService } from '../Services/spotify.service';
import { takeUntil, tap } from 'rxjs/operators';
import { OAuthService } from 'angular-oauth2-oidc';


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

  ngOnInit(): void {
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

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public login(): void {
    this.oauthService.initImplicitFlow();
  }

  public logoff(): void {
    this.oauthService.logOut();
  }

  get isLoggedIn(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  get nowPlayingImage(): string {
    return this.nowPlaying.item.album.images[0].url;
  }

  get nowPlayingTitle(): string {
    return this.nowPlaying.item.name;
  }

  get nowPlayingArtist(): string {
    return this.nowPlaying.item.artists.map(x => x.name).join(', ');
  }

  refreshNowPlaying(): void {
    if (!this.loading) {
      this.loading = true;
      this.spotifyService.refreshNowPlaying();
    }
  }
}

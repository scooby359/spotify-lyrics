import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spotify-callback',
  templateUrl: './spotify-callback.component.html',
  styleUrls: ['./spotify-callback.component.scss']
})
export class SpotifyCallbackComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe( params => {
      const accessToken = params.get('access_token');
      const tokenType = params.get('token_type');
      const expiresIn = params.get('expires_in');
      const state = params.get('state');

      console.log(accessToken);
      console.log(tokenType);
      console.log(expiresIn);
      console.log(state);
    });

    this.route.fragment.subscribe((fragment: string) => {
      console.log('My hash fragment is here => ', fragment);
  })
  }

}

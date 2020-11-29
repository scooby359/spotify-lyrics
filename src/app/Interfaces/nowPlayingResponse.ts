export interface NowPlayingResponse {
  device: Device;
  shuffle_state: boolean;
  repeat_state: 'off'|'track'|'context';
  timestamp: number;
  context: Context;
  progress_ms: number;
  item: Item;
  currently_playing_type: 'track'|'episode'|'ad'|'unknown';
  actions: Actions;
  is_playing: boolean;
}

export interface Actions {
  disallows: Disallows;
}

export interface Disallows {
  resuming: boolean;
  skipping_prev: boolean;
}

export interface Item {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: Externalids;
  external_urls: Externalurls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface Externalids {
  isrc: string;
}

export interface Album {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: Externalurls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: 'album'|'single'|'compilation';
  uri: string;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface Artist {
  external_urls: Externalurls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface Context {
  external_urls: Externalurls;
  href: string;
  type: string;
  uri: string;
}

export interface Externalurls {
  spotify: string;
}

export interface Device {
  id: string;
  is_active: boolean;
  is_private_session: boolean;
  is_restricted: boolean;
  name: string;
  type: string;
  volume_percent: number;
}

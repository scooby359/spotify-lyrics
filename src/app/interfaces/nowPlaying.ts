export interface NowPlaying {
  progress_ms: number;
  is_playing: boolean;
  currently_playing_type: 'track'|'episode'|'ad'|'unknown';
  item: Track;
  shuffle_state: boolean;
  repeat_state: 'off'|'track'|'context';
}

export interface Track {
    album: Album;
    artists: Artist[];
    duration_ms: number;
    id: string;
    name: string;
}

export interface Album {
    album_type: 'album'|'single'|'compilation';
    artists: Artist[];
    id: string;
    images: Image[];
    name: string;
    release_date: string;
}

export interface Artist {
    id: string;
    name: string;
}

export interface Image {
    height: number;
    url: string;
    width: number;
}

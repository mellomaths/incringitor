import SpotifyWebApi from 'spotify-web-api-node';

export class SpotifyService {

  private readonly spotify = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  });

  async searchAnArtist(artistName: string): Promise<SpotifyApi.ArtistObjectFull | null>  {
    const response = await this.spotify.searchArtists(artistName, { limit: 1 });
    if (response.statusCode !== 200) {
      return null;
    }

    if (!response.body.artists || response.body.artists.items.length === 0) {
      return null;
    }

    const artist = response.body.artists.items[0];
    return artist;
  }

  async getMostListenedTracksFromArtist(artistName: string): Promise<SpotifyApi.TrackObjectFull[]> {
    const artist = await this.searchAnArtist(artistName);
    const response = await this.spotify.getArtistTopTracks(artist.id, 'US');
    if (response.statusCode !== 200) {
      return [];
    }

    if (!response.body.tracks || response.body.tracks.length === 0) {
      return [];
    }

    const tracks = response.body.tracks;
    return tracks;
  }
  

}
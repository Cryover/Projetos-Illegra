const SpotifyWrapper = require("spotify-wrapper");

class Spotify {
  constructor(token) {
    this.token = token || "";
    this.spotifyWrapper = new SpotifyWrapper({
      token: token,
    });
  }

  searchArtists(artists) {
    return this.spotifyWrapper.search.artists(artists).then((data) => data);
  }

  getAlbum(album) {
    return this.spotifyWrapper.album.getAlbum(album).then((data) => data);
  }

  searchAlbums(albums) {
    return this.spotifyWrapper.search.albums(albums).then((data) => data);
  }

  searchTracks(tracks) {
    return this.spotifyWrapper.search.tracks(tracks).then((data) => data);
  }

  searchPlaylists(playlists) {
    return this.spotifyWrapper.search.playlists(playlists).then((data) => data);
  }

  getAlbums(album) {
    return this.spotifyWrapper.album
      .getAlbums([album, album])
      .then((data) => data);
  }

  getTracks(tracks) {
    return this.spotifyWrapper.album.getTracks(tracks).then((data) => data);
  }
}
module.exports = Spotify;

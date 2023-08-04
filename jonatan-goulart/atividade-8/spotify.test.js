const Spotify = require("./spotifyApi.js");
const token =
  "BQANUVy7BeBeTLnmEj-KQzyFmB0DPpLovJw3F5mU1SD3ikFk3ybSleKvE-HlV-N1RJwVpntGHXhSCJiBfazmxSDRpUQTrF2ywQtaPvOmvWnDRA-uXQGQGxmP9-Pdr4ggjwyXnfyi4oYU10MosfFBC7ADs78Q6241gDL4aO4";

const mocks = {
  albumData: require("./Tests/Mocks/albums.json"),
  artistData: require("./Tests/Mocks/artists.json"),
  trackData: require("./Tests/Mocks/tracks.json"),
  playlistData: require("./Tests/Mocks/playlists.json"),
};

jest.mock("spotify-wrapper", () => {
  return jest.fn().mockImplementation(() => {
    return {
      token,
      search: {
        artists: jest.fn().mockResolvedValue(mocks.artistData),
        tracks: jest.fn().mockResolvedValue(mocks.trackData),
        albums: jest.fn().mockResolvedValue(mocks.albumData),
        playlists: jest.fn().mockResolvedValue(mocks.playlistData),
      },
      album: {
        getAlbum: jest.fn().mockResolvedValue(mocks.albumData),
        getAlbums: jest.fn().mockResolvedValue(mocks.albumData),
        getTracks: jest.fn().mockResolvedValue(mocks.trackData),
      },
    };
  });
});

describe("test spotify wrapper", () => {
  const spotifyWrapper = new Spotify(mocks.token);

  it("if searchArtists is returning", async () => {
    const response = await spotifyWrapper.searchArtists("Trace Adkins");
    expect(response).toEqual(mocks.artistData);
  });
  it("if getAlbum is returning", async () => {
    const response = await spotifyWrapper.getAlbum("The Way I Wanna Go");
    expect(response).toEqual(mocks.albumData);
  });
  it("if searchAlbums is returning", async () => {
    const response = await spotifyWrapper.searchAlbums("The Way I Wanna Go");
    expect(response).toEqual(mocks.albumData);
  });
  it("if searchTracks is returning", async () => {
    const response = await spotifyWrapper.searchTracks("Cadillac'n");
    expect(response).toEqual(mocks.trackData);
  });
  it("if searchPlaylists is returning", async () => {
    const response = await spotifyWrapper.searchPlaylists(
      "This Is Trace Adkins"
    );
    expect(response).toEqual(mocks.playlistData);
  });
  it("if getAlbums is returning", async () => {
    const response = await spotifyWrapper.getAlbums("The Way I Wanna Go");
    console.log(response);
    expect(response).toEqual(mocks.albumData);
  });
  it("if getTracks is returning", async () => {
    const response = await spotifyWrapper.getTracks("Cadillac'n");
    expect(response).toEqual(mocks.trackData);
  });
});

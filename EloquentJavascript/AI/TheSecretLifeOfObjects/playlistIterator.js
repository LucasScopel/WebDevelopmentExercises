class Playlist {
  constructor(songs) {
    this.songs = songs;
  }

  [Symbol.iterator]() {
    let currentValue = 0;

    return {
      next: () => {
        if (currentValue >= this.songs.length) {
          return { value: undefined, done: true };
        }

        return { value: this.songs[currentValue++], done: false };
      },
    };
  }
}

class PlaylistIterator {
  constructor(playlist) {
    this.playlist = playlist;
  }

  currentValue = 0;

  next() {
    if (this.currentValue >= this.playlist.songs.length) {
      return { value: undefined, done: true };
    }

    return { value: this.playlist.songs[this.currentValue++], done: false };
  }
}

const playlist = new Playlist([
  "Bohemian Rhapsody",
  "Hotel California",
  "Imagine",
  "Stairway to Heaven",
]);

for (let song of playlist) {
  console.log(song);
}

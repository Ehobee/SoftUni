function songs(arr) {

    let n = arr.shift();
    let toPlay = arr.pop();

    let songs = [];

    class Song {
        constructor(playlist, name, time) {
            this.playlist = playlist;
            this.name = name;
            this.time = time;
        }

    }

    for (let i = 0; i < n; i++) {
        let [playlist, name, time] = arr[i].split('_');
        let currentSong = new Song(playlist, name, time)
        songs.push(currentSong);
    }

    for (let eachSong of songs) {
        if (eachSong.playlist === toPlay) {
            console.log(eachSong.name)
        } else if (toPlay === 'all') {
            console.log(eachSong.name)
        }
    }
}
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']


)
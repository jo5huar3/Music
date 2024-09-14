import React, { useState, useEffect } from 'react';

const Song = () => {
    const [song, setSong] = useState([]);

    useEffect(() => {
        fetch("/Song/")
        .then((results) => {
            return results.json();
        })
        .then(data => {
            setSong(data);
        })
    }, [])

    return(
        <main>
            {
                (song != null) ? song.map((song) => <h3> {song.id} : {song.name} </h3>) : <div>Loading...</div>
            }
        </main>
    )
}
export { Song };
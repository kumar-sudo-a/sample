const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => { // loop through each sound
    const btn = document.createElement('button') // Variable btn to create button
    btn.classList.add('btn') // Adding a class btn for styling 

    btn.innerText = sound // Setting inner test to sound itself 

    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play() // With html5 we have JS API for audio element, we have a method ".play"
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause() // With html5 we have JS API for audio elements, we have a method ".pause"
        song.currentTime = 0; // To stop use ans set the property currentTime to 0.
    })
}
const albumDetails = {
    useYourIllusion1: {
        title: "Use Your Illusion I",
        description: "Detta album innehåller hits som 'November Rain' och 'Don't Cry'.",
        spotify: "https://open.spotify.com/album/0CxPbTRARqKUYighiEY9Sz",
        youtube: "https://www.youtube.com/watch?v=Zqo7j2yFoFs&list=PL4J5vKEAoxN01Z3E7gztv6CNvSLALN_cA",
    },
    gnrLies: {
        title: "GN' R Lies",
        description: "Ett album med både akustiska och elektriska låtar.",
        spotify: "https://open.spotify.com/album/6z5LStxyQzrUTrVxjiOXVU",
        youtube: "https://www.youtube.com/watch?v=G4CfGsBz9aY&list=PL4J5vKEAoxN1JYfU1b76ApIOiQMXUIH4W",
    },
    useYourIllusion2: {
        title: "Use Your Illusion II",
        description: "Kända låtar inkluderar 'Civil War' och 'Knockin' on Heaven's Door'.",
        spotify: "https://open.spotify.com/album/3R5UKfbGpobsD4KHNbYReV",
        youtube: "https://www.youtube.com/watch?v=isCh4kCeNYU&list=PL4J5vKEAoxN14WAHr_kIcpVBcsn24oa3m",
    },
    appetiteForDestruction: {
        title: "Appetite for Destruction",
        description: "Debutalbumet som innehåller 'Sweet Child O' Mine', 'Nighttrain' och 'Welcome to the Jungle'.",
        spotify: "https://open.spotify.com/album/28yHV3Gdg30AiB8h8em1eW",
        youtube: "https://www.youtube.com/watch?v=0CNPR2qNzxk&list=PL6ogdCG3tAWiPhX1-iTHcvnsO2ek1nlJl",
    },
    spaghettiIncident: {
        title: "The Spaghetti Incident?",
        description: "Ett album fyllt med covers av klassiska rocklåtar.",
        spotify: "https://open.spotify.com/album/4ieR19hRkKeE81CalJPQNu",
        youtube: "https://www.youtube.com/watch?v=mmB0URLdwpE&list=PLVMgMdYqIEkY42B3shInBQuEiesEzl4_-",
    },
    chineseDemocracy: {
        title: "Chinese Democracy",
        description: "Detta album är ett av bandets mest omtalade och tog över ett decennium att släppa.",
        spotify: "https://open.spotify.com/album/0suNLpB9xraAv1FcdlITjQ",
        youtube: "https://www.youtube.com/watch?v=FfIZr38DLSg&list=PLVMgMdYqIEkbiG4IX-bbhz8-ANoKN5qK0",
    },
};

function showAlbumInfo(albumKey) {
    const album = albumDetails[albumKey];
    const popup = document.getElementById("album-popup");
    const infoContainer = document.getElementById("album-info");

    infoContainer.innerHTML = `
        <img src="${albumKey}.png" alt="${album.title}">
        <h2>${album.title}</h2>
        <p>${album.description}</p>
        <p><a href="${album.spotify}" target="_blank">Lyssna på Spotify</a></p>
        <p><a href="${album.youtube}" target="_blank">Se på YouTube</a></p>
    `;

    popup.classList.remove("hidden");
}
function closeAlbumInfo() {
    const popup = document.getElementById("album-popup");
    popup.classList.add("hidden");
}

function updateCountdown() {
    const eventDate = new Date("2025-06-15T20:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        document.getElementById("timer").innerHTML = "Konserten har börjat!";
    }
}
setInterval(updateCountdown, 1000);
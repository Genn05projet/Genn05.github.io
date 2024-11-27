// Exemple de tableau de données pour les planètes
const planetsData = {
    "Mercure": {
        description: "Mercure est la planète la plus proche du Soleil.",
        distance: "57.91 millions de km",
        image: "mercure.jpg"
    },
    "Vénus": {
        description: "Vénus est souvent appelée la sœur de la Terre en raison de sa taille similaire.",
        distance: "108.2 millions de km",
        image: "venus.jpg"
    },
    "Terre": {
        description: "La Terre est la planète où la vie est présente.",
        distance: "149.6 millions de km",
        image: "terre.jpg"
    },
    "Mars": {
        description: "Mars est connue comme la planète rouge en raison de sa couleur caractéristique.",
        distance: "227.9 millions de km",
        image: "mars.jpg"
    },
    "Jupiter": {
        description: "Jupiter est la plus grande planète du système solaire.",
        distance: "778.3 millions de km",
        image: "jupiter.jpg"
    },
    "Saturne": {
        description: "Saturne est célèbre pour ses anneaux spectaculaires.",
        distance: "1.429 milliards de km",
        image: "saturne.jpg"
    },
    "Uranus": {
        description: "Uranus est une planète géante gazeuse avec une teinte bleue due au méthane.",
        distance: "2.87 milliards de km",
        image: "uranus.jpg"
    },
    "Neptune": {
        description: "Neptune est la planète la plus éloignée du Soleil et possède des vents incroyablement puissants.",
        distance: "4.5 milliards de km",
        image: "neptune.jpg"
    },
    "Pluton": {
        description: "Pluton était autrefois considérée comme la neuvième planète du système solaire.",
        distance: "5.9 milliards de km",
        image: "pluton.jpg"
    }
};

// Code pour afficher les informations de la planète
function showPlanetDetails(planetName) {
    const planetInfo = planetsData[planetName];
    document.getElementById('planet-description').innerText = planetInfo.description;
    document.getElementById('planet-distance').innerText = planetInfo.distance;
    document.getElementById('planet-image').src = planetInfo.image;
}

// Appeler la fonction pour afficher les informations
const urlParams = new URLSearchParams(window.location.search);
const planetName = urlParams.get('planet');
if (planetName) {
    showPlanetDetails(planetName);
}

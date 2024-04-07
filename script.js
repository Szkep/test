window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
})

function myInstagram() {
    window.open('https://www.instagram.com/tavern_tales_miniatures/', '_blank');
}

function myFacebook() {
    window.open('https://www.facebook.com/profile.php?id=61557773774925', '_blank');
}

function Luftmensch_Studio_URL() {
    window.open('https://www.patreon.com/luftmenschstudio', '_blank');
}

function TitanCraft_URL() {
    window.open('https://titancraft.com', '_blank');
}

function myPinterest() {
    window.open('https://www.pinterest.de/taverntalesminiatures/', '_blank');
}
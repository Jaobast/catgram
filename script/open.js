/* BILD  BILD  BILD  BILD */

function openPic(clickedPic) {
    const div = document.getElementById("pop");
    div.classList.remove("hidden");
    
    document.body.classList.add("fix");

    const picSrc = clickedPic.src;
    const profile = profiles.find(function(profile) {
        return profile.pics.includes(picSrc);
    });

    if (profile) {
        const popImg = document.querySelector(".pop_img");
        popImg.src = picSrc;

        const popText = document.querySelector(".pop_text");
        popText.innerHTML = profile.text[profile.pics.indexOf(picSrc)];
    }
}

function closePic(){
        const div = document.getElementById("pop");
        div.classList.add("hidden");

        document.body.classList.remove("fix");
}

/* GEFOLF  GEFOLF  GEFOLF  GEFOLF */

function openGefolgt(){
    const div = document.getElementById("gefolgt");
    div.classList.remove("hidden");
    document.body.classList.add("fix");
}

function closeGefolgt(){
    const div = document.getElementById("gefolgt");
    div.classList.add("hidden");

    document.body.classList.remove("fix");
}
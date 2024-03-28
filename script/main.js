function displayProfile(profile) {
    const profilePic = document.querySelector('.profil_pic');
    profilePic.src = profile.pic_profil; 

    const profilePic2 = document.querySelector('.profil_pic2');
    profilePic2.src = profile.pic_profil; 

    const nameProfiles = document.querySelectorAll('.name');
    nameProfiles.forEach(function(element) {
        element.textContent = profile.name;
    });

    const nameProfil = document.querySelectorAll('.name_profil');
    nameProfil.forEach(function(element) {
        element.textContent = profile.name_profil;
    });

    const picsElement = document.getElementById('pics');
    picsElement.innerHTML = '';

    profile.pics.forEach(function(pic) {
        const img = document.createElement('img');
        img.src = pic;
        img.setAttribute('onclick', 'openPic(this)');
        picsElement.appendChild(img);
    });
}

window.addEventListener('load', function() {
    const profileCatBlack = profiles.find(function(profile) {
        return profile.name_profil === '@cat_black';
    });
    if (profileCatBlack) {
        displayProfile(profileCatBlack);
    }
});

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

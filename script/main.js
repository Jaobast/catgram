function displayProfile(profile) {
    const profilePic = document.querySelector('.profil_pic');
    profilePic.src = profile.pics[0]; 

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

    document.querySelector(".pop_img").src = clickedPic.src;
}

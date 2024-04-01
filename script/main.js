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
        return profile.name_profil === '@lebran_andi';
    });
    if (profileCatBlack) {
        displayProfile(profileCatBlack);
    }
})
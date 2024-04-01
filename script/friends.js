

function fillNames() {
    const profileName = document.querySelectorAll('.name_gefolgt');
    const profileAccount = document.querySelectorAll('.name_profil_gefolgt');
    const profilePic = document.querySelectorAll('.profile img');

    for (let i = 0; i < profileName.length; i++) {
        if (profiles[i]) {
            profileName[i].textContent = profiles[i].name;
            profileAccount[i].textContent = profiles[i].name_profil;
            profilePic[i].src = profiles[i].pic_profil;
        }
    }
}

fillNames();

function openProfileGefolgt() {
    const profileDivs = document.querySelectorAll('.profile');

    function callProfile(event) {
        const clickedProfileName = event.target.closest('.profile').querySelector('.name_gefolgt').textContent;
        
        const display = profiles.find(function(profile) {
            return profile.name === clickedProfileName;
        });

        if (display) {
            displayProfile(display);
        }
    }

    profileDivs.forEach(function(profileDiv) {
        profileDiv.addEventListener('click', callProfile);
        profileDiv.querySelector('img').addEventListener('click', callProfile); // Adiciona o ouvinte de evento de clique para as imagens
    });
}

openProfileGefolgt();


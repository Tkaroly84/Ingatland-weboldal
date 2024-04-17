    //Video, utána átirányít az index oldalra

var video = document.getElementById("video");
video.addEventListener('ended', function() {
    window.location.href = "fooldal.html";
});

//Bejelentkezés/jelszavak
function bejelentkezes() {
    //$('#myModal').modal('show');
    window.location.href ="http://igazinfo.ddns.net";
  }

function jelszokuld(){
    window.location.href ="http://igazinfo.ddns.net/jelszokuld.php";
}

function jelszocsere(){
    window.location.href ="http://igazinfo.ddns.net/jelszocsere.php";
}
  
function belepes() {
    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;
    console.log("Név:", name);
    console.log("E-mail:", email);
    $('#myModal').modal('hide');
  }

    //évszaknak megfelelő háttérkép

var overlay = document.getElementById('ketto');
var month = new Date().getMonth(); // Aktuális hónap (0-11)
var imagePath = '';

switch (month) {
    case 0: // Január
    case 1: // Február
        imagePath = 'Képek_videók/téli_kép.jpeg';
        break;
    case 2: // Március
    case 3: // Április
    case 4: // Május
        imagePath = 'Képek_videók/tavaszi_kép.JPG';
        break;
    case 5: // Június
    case 6: // Július
    case 7: // Augusztus
        imagePath = 'Képek_videók/nyári_kép.jpeg';
        break;
    case 8: // Szeptember
    case 9: // Október
        imagePath = 'Képek_videók/őszi_kép.jpeg';
        break;
    case 10: // November
        imagePath = 'Képek_videók/téli_kép.jpeg';
        break;
    case 11: // December
        imagePath = 'Képek_videók/decemberi_kép.jpg';
        break;
    default:
        imagePath = "Képek_videók/JÁNOS.png";
        break;
}
overlay.src = imagePath;

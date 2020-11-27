$('#logoa').animate({
    marginLeft: '500px'
}, 1000)

$('#logoa').animate({
    marginLeft: '-250px'
}, 800)

$('#logoa').animate({
    marginLeft: '0px'
}, 500)



$('#titrea').animate({
    marginLeft: '-465px'
}, 1000)

$('#titrea').animate({
    marginLeft: '285px'
}, 800)

$('#titrea').animate({
    marginLeft: '35px'
}, 500)


$('#dropback').click(function() {
    $('.navbar').toggleClass('couleur');
})







function cache() {
    if (document.getElementById('changer').innerHTML == 'vidéo') {
        document.getElementById('changer').innerHTML = 'texte';
        document.getElementById('intro').style.display = 'none';
    } else {
        document.getElementById('changer').innerHTML = 'vidéo'
        document.getElementById('intro').style.display = 'block'
    }
}

function affiche() {
    if (document.getElementById('montrer').innerHTML == 'montrer') {
        document.getElementById('montrer').innerHTML = 'cacher';
        document.getElementById('article1').style.display = 'block';
    } else {
        document.getElementById('montrer').innerHTML = 'montrer'
        document.getElementById('article1').style.display = 'none'
    }
}

function affiche2() {
    if (document.getElementById('montrer2').innerHTML == 'montrer') {
        document.getElementById('montrer2').innerHTML = 'cacher';
        document.getElementById('article2').style.display = 'block';
    } else {
        document.getElementById('montrer2').innerHTML = 'montrer'
        document.getElementById('article2').style.display = 'none'
    }
}


function intro() {
    if (window.innerWidth < 1024 && window.innerWidth > 690) {
        document.getElementById('intro').style.display = 'block'
    }
}
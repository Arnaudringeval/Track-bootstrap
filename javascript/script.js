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

function footer() {
    if (window.innerheight > document.body.clientHeight) {
        document.getElementsById('footeraccueril').style.position = 'fixed'
    } else {
        document.getElementsById('footeraccueil').style.position = 'absolute'
    }
}

function menu() {
    if (document.getElementsByName('aria-expanded').innerHTML === 'true') {
        document.getElementById('navbar-toggler-icon').style.background = 'url(images/menuf.png)'
    } else {
        document.getElementById('navbar-toggler-icon').style.background = 'url(images/menu.png)'
    }

}
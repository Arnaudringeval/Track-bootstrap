$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $("#top").addClass("fixed");
        $("#top").css('display', 'block');
        $("#top").removeClass("invisible");
    } else {
        $("#top").removeClass("fixed");
        $("#top").css('diplay', 'none');
        $("#top").addClass("invisible");
    }
})



if (window.innerWidth < 690) {
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
        marginLeft: '-500px'
    }, 1000)

    $('#titrea').animate({
        marginLeft: '250px'
    }, 800)

    $('#titrea').animate({
        marginLeft: '0px'
    }, 500)
}


if (window.innerWidth < 992 && window.innerWidth > 690) {
    $('#logoa').fadeOut(1000)

    $('#logoa').fadeIn(250)

    $('#titrea').animate({
        fontSize: '67px'
    }, 800)

    $('#titrea').animate({
        fontSize: '83px'
    }, 600)

    $('#titrea').animate({
        fontSize: '67px'
    }, 400)

    $('#titrea').animate({
        fontSize: '75px'
    }, 200)

    $('.namea').animate({
        fontSize: '30px'
    }, 800)

    $('.namea').animate({
        fontSize: '39px'
    }, 600)

    $('.namea').animate({
        fontSize: '30px'
    }, 400)

    $('.namea').animate({
        fontSize: '35px'
    }, 200)

}

if (window.innerWidth > 992) {
    $('#logoa').fadeOut(1000)

    $('#logoa').fadeIn(250)

    $('#titrea').animate({
        fontSize: '52px'
    }, 800)

    $('#titrea').animate({
        fontSize: '83px'
    }, 600)

    $('#titrea').animate({
        fontSize: '67px'
    }, 400)

    $('#titrea').animate({
        fontSize: '75px'
    }, 200)

    $('.namea').animate({
        fontSize: '24px'
    }, 800)

    $('.namea').animate({
        fontSize: '39px'
    }, 600)

    $('.namea').animate({
        fontSize: '30px'
    }, 400)

    $('.namea').animate({
        fontSize: '35px'
    }, 200)

}




$('#dropback').click(function() {
    $('.navbar').toggleClass('couleur');
})


$(document).ready(function() {

    var $pseudo = $('#pseudo'),
        $mdp = $('#sujet'),
        $mail = $('#mail'),
        $envoi = $('#envoi'),
        $message = $('#message'),
        $erreur = $('#erreur'),
        $champ = $('.champ');

    $champ.keyup(function() {
        if ($pseudo.val().length < 2) { // si la chaîne de caractères est inférieure à 5
            $pseudo.css({ // on rend le champ rouge
                backgroundColor: 'red',
                color: 'black'
            });
        } else {
            $pseudo.css({ // si tout est bon, on le rend vert
                backgroundColor: 'white',
                color: 'green'
            });
        }
    });



    $champ.keyup(function() {
        if ($mdp.val().length < 2) { // si la chaîne de caractères est inférieure à 5
            $mdp.css({ // on rend le champ rouge
                backgroundColor: 'red',
                color: 'black'
            });
        } else {
            $mdp.css({ // si tout est bon, on le rend vert
                backgroundColor: 'white',
                color: 'green'
            });
        }
    });


    $champ.keyup(function() {
        if ($mail.val().length < 2) { // si la chaîne de caractères est inférieure à 5
            $mail.css({ // on rend le champ rouge
                backgroundColor: 'red',
                color: 'black'
            });
        } else {
            $mail.css({ // si tout est bon, on le rend vert
                backgroundColor: 'white',
                color: 'green'
            });
        }
    });

    $champ.keyup(function() {
        if ($message.val().length < 2) { // si la chaîne de caractères est inférieure à 5
            $message.css({ // on rend le champ rouge
                backgroundColor: 'red',
                color: 'black'
            });
        } else {
            $message.css({ // si tout est bon, on le rend vert
                backgroundColor: 'white',
                color: 'green'
            });
        }
    });


    $envoi.click(function(e) {
        e.preventDefault(); // on annule la fonction par défaut du bouton d'envoi

        // puis on lance la fonction de vérification sur tous les champs :
        verifier($pseudo);
        verifier($mdp);
        verifier($message);
        verifier($mail);
    });



    function verifier(champ) {
        if (champ.val().length < 2) { // si le champ est vide
            $erreur.css('display', 'block'); // on affiche le message d'erreur
            champ.css({ // on rend le champ rouge
                backgroundColor: 'red',
                color: 'red'
            });
        }
    }

});









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
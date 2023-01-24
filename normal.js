
var help = document.querySelector('.card__face--back')
//var socket = io();
var envers = 1;
const array = [
    'https://genshin.honeyhunterworld.com/img/i_n330000_gcg_high_resolution.webp',
    'https://genshin.honeyhunterworld.com/img/i_n330001_gcg_high_resolution.webp',
    'https://genshin.honeyhunterworld.com/img/i_n330002_gcg_high_resolution.webp',
    'https://genshin.honeyhunterworld.com/img/i_n330003_gcg_high_resolution.webp',
    'https://genshin.honeyhunterworld.com/img/i_n330004_gcg_high_resolution.webp',
    'https://genshin.honeyhunterworld.com/img/i_n330005_gcg_high_resolution.webp',
    'https://genshin.honeyhunterworld.com/img/i_n330006_gcg_high_resolution.webp',
    'https://genshin.honeyhunterworld.com/img/i_n330007_gcg_high_resolution.webp',
    'https://genshin.honeyhunterworld.com/img/i_n330008_gcg_high_resolution.webp',
    'https://genshin.honeyhunterworld.com/img/i_n330010_gcg_high_resolution.webp',
    'https://genshin.honeyhunterworld.com/img/i_n330011_gcg_high_resolution.webp',
    'https://genshin.honeyhunterworld.com/img/i_n330012_gcg_high_resolution.webp',
    'https://genshin.honeyhunterworld.com/img/i_n330013_gcg_high_resolution.webp',
    'https://genshin.honeyhunterworld.com/img/i_n330014_gcg_high_resolution.webp',
    'https://genshin.honeyhunterworld.com/img/i_n330000_gcg_high_resolution.webp',
    'https://genshin.honeyhunterworld.com/img/i_n330001_gcg_high_resolution.webp',
    'https://genshin.honeyhunterworld.com/img/i_n330002_gcg_high_resolution.webp',
    'https://genshin.honeyhunterworld.com/img/i_n330003_gcg_high_resolution.webp',
    'https://genshin.honeyhunterworld.com/img/i_n330004_gcg_high_resolution.webp',
    'https://genshin.honeyhunterworld.com/img/i_n330005_gcg_high_resolution.webp',
    'https://genshin.honeyhunterworld.com/img/i_n330006_gcg_high_resolution.webp',
    'https://genshin.honeyhunterworld.com/img/i_n330007_gcg_high_resolution.webp',
    'https://genshin.honeyhunterworld.com/img/i_n330008_gcg_high_resolution.webp',
    'https://genshin.honeyhunterworld.com/img/i_n330010_gcg_high_resolution.webp',
    'https://genshin.honeyhunterworld.com/img/i_n330011_gcg_high_resolution.webp',
    'https://genshin.honeyhunterworld.com/img/i_n330012_gcg_high_resolution.webp',
    'https://genshin.honeyhunterworld.com/img/i_n330013_gcg_high_resolution.webp',
    'https://genshin.honeyhunterworld.com/img/i_n330014_gcg_high_resolution.webp'

];
window.addEventListener("load", (event) => {
    // Mélange les éléments de l'array de manière aléatoire
    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            // Choisir un index aléatoire
            const j = Math.floor(Math.random() * (i + 1));
            // Echanger les valeurs de l'élément courant et l'élément aléatoire
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    shuffle(array);

    // Récupère les éléments avec la classe "truc"
    const images = document.getElementsByClassName("truc");

    // Boucle sur les éléments récupérés
    for (let i = 0; i < images.length; i++) {
        // Affecte l'url mélangée à la propriété src de chaque élément
        images[i].src = array[i];
    }
    console.log("page is fully loaded");
})

function myFunction() {
    alert("Hello World!");
}

var stop = 1;
var compte = 2;
var ok = 1;
window.addEventListener("load", (event) => {

    function comptes(np) {
        if (ok == 1) {
            ok = 2;
            if (compte == 1) {
                var fini = document.getElementsByClassName("degend");
                fini = fini.length;


                let temps = 1
                const timerElement = document.getElementById("timer")
                setInterval(() => {
                    if (fini < 28) {
                        fini = document.getElementsByClassName("degend");
                        fini = fini.length;
                        let minutes = parseInt(temps / 60, 10)
                        let secondes = parseInt(temps % 60, 10)

                        minutes = minutes < 10 ? "0" + minutes : minutes
                        secondes = secondes < 10 ? "0" + secondes : secondes

                        timerElement.innerText = `${minutes}:${secondes}`
                        temps = temps < 0 ? 0 : temps + 1
                    }
                }, 1000)


            }
        }

    }

    var two = 1;
    // setInterval(() => {

    document.querySelector(".scene").addEventListener("click", e => {

        if (stop == 1) {

            stop = 2;
            compte = 1;
            comptes();
            //if (e.target.localName !== "img") return;

            var closest = e.target.closest(".card");
            var egal = e.target.closest(".card");

            //var jsp = document.getElementsByClassName("degoff");
            // if (jsp > 0) { }
            if (closest !== null && closest !== undefined) {
                closest.classList.remove("degoff");
                closest.classList.add("deg");
                if (two == 2) {

                    envers = 1;

                    const rep = document.getElementsByClassName("card deg");

                    if (rep[1] !== null && rep[1] !== undefined) {
                        dab();
                        setTimeout(() => {

                            var rep1 = rep[0];
                            var rep2 = rep[1];
                            var egal = rep1.querySelector(".truc");
                            var egal2 = rep2.querySelector(".truc");

                            if (egal.src == egal2.src) {

                                rep1.classList.remove("deg");
                                rep1.classList.add("degend");
                                rep2.classList.remove("deg");
                                rep2.classList.add("degend");
                            } else {
                                // Boucle sur les éléments récupérés
                                for (let i = 0; i < rep.length; i++) {
                                    // Affecte l'url mélangée à la propriété src de chaque élément
                                    rep[i].classList.remove("deg");
                                    rep[i].classList.add("degoff");

                                }

                            }

                        }, 950);
                        two = 1;
                    }


                    console.log("true" + two);
                } else {
                    dab();
                    two++;
                    console.log("two plus 1");
                    //console.log(two);
                }
            }


            var choix = document.getElementsByClassName("card deg");
            choix = choix.length;
            if (choix == 1) {
                envers = 1;
            }

            var bug = document.querySelector(".card.deg.degoff");
            if (bug !== null) {
                bug.classList.remove("deg");
            }
            console.log(envers);
            setTimeout(() => {
                stop = 1;
            }, 900);
        }


    }, { passive: true })
    //}, 2000);
    function isMobile() { return ('ontouchstart' in document.documentElement); }
    function dab() {
        var points = document.querySelector(".point");
        var pts = +points.textContent;
        if (pts >= 9) {
            if (isMobile()) {
                points.style.left = "844px"
            } else {
                points.style.left = "170px"
            }
        }
        points.textContent = ++pts;
    }



    document.querySelector(".scene2").addEventListener("click", e => {
        if (stop == 1) {
            stop = 2;
            compte = 1;
            comptes();

            //if (e.target.localName !== "img") return;

            var closest = e.target.closest(".card");

            var choix = document.getElementsByClassName("card deg");
            choix = choix.length;
            if (choix == 1) {
                envers = 1;
            }
            if (closest !== null && closest !== undefined) {
                closest.classList.remove("degoff");
                closest.classList.add("deg");
                if (two == 2) {

                    envers = 1;
                    const rep = document.getElementsByClassName("card deg");

                    if (rep[1] !== null && rep[1] !== undefined) {
                        dab();
                        setTimeout(() => {

                            var rep1 = rep[0];
                            var rep2 = rep[1];
                            var egal = rep1.querySelector(".truc");
                            var egal2 = rep2.querySelector(".truc");

                            if (egal.src == egal2.src) {

                                rep1.classList.remove("deg");
                                rep1.classList.add("degend");
                                rep2.classList.remove("deg");
                                rep2.classList.add("degend");
                            } else {
                                // Boucle sur les éléments récupérés
                                for (let i = 0; i < rep.length; i++) {
                                    // Affecte l'url mélangée à la propriété src de chaque élément
                                    rep[i].classList.remove("deg");
                                    rep[i].classList.add("degoff");

                                }

                            }

                        }, 950);
                        two = 1;
                    }

                    console.log("true" + two);
                } else {
                    dab();
                    two++;
                    console.log("two plus 1");
                    //console.log(two);
                }
            }
            var bug = document.querySelector(".card.deg.degoff");
            if (bug !== null) {
                bug.classList.remove("deg");
                bug.classList.remove("degoff");
            }
            setTimeout(() => {
                stop = 1;
            }, 900);
        }

    }, { passive: true })

    document.querySelector(".scene3").addEventListener("click", e => {
        //if (e.target.localName !== "img") return;
        if (stop == 1) {
            stop = 2;
            compte = 1;
            comptes();
            var closest = e.target.closest(".card");

            var choix = document.getElementsByClassName("card deg");
            choix = choix.length;
            if (choix == 1) {
                envers = 1;
            }
            if (closest !== null && closest !== undefined) {
                closest.classList.remove("degoff");
                closest.classList.add("deg");
                if (two == 2) {

                    envers = 1;
                    const rep = document.getElementsByClassName("card deg");

                    if (rep[1] !== null && rep[1] !== undefined) {
                        dab();
                        setTimeout(() => {

                            var rep1 = rep[0];
                            var rep2 = rep[1];
                            var egal = rep1.querySelector(".truc");
                            var egal2 = rep2.querySelector(".truc");

                            if (egal.src == egal2.src) {

                                rep1.classList.remove("deg");
                                rep1.classList.add("degend");
                                rep2.classList.remove("deg");
                                rep2.classList.add("degend");
                            } else {
                                // Boucle sur les éléments récupérés
                                for (let i = 0; i < rep.length; i++) {
                                    // Affecte l'url mélangée à la propriété src de chaque élément
                                    rep[i].classList.remove("deg");
                                    rep[i].classList.add("degoff");

                                }

                            }

                        }, 950);
                        two = 1;
                    }

                    console.log("true" + two);
                } else {
                    dab();
                    two++;
                    console.log("two plus 1");
                    //console.log(two);
                }
            }

            var bug = document.querySelector(".card.deg.degoff");
            if (bug !== null) {
                bug.classList.remove("deg");
            }
            setTimeout(() => {
                stop = 1;
            }, 900);
        }
    }, { passive: true })
    document.querySelector(".scene4").addEventListener("click", e => {
        //if (e.target.localName !== "img") return;
        if (stop == 1) {
            stop = 2;
            compte = 1;
            comptes();
            var closest = e.target.closest(".card");

            var choix = document.getElementsByClassName("card deg");
            choix = choix.length;
            if (choix == 1) {
                envers = 1;
            }
            if (closest !== null && closest !== undefined) {
                closest.classList.remove("degoff");
                closest.classList.add("deg");
                if (two == 2) {

                    envers = 1;
                    const rep = document.getElementsByClassName("card deg");

                    if (rep[1] !== null && rep[1] !== undefined) {
                        dab();
                        setTimeout(() => {

                            var rep1 = rep[0];
                            var rep2 = rep[1];
                            var egal = rep1.querySelector(".truc");
                            var egal2 = rep2.querySelector(".truc");

                            if (egal.src == egal2.src) {

                                rep1.classList.remove("deg");
                                rep1.classList.add("degend");
                                rep2.classList.remove("deg");
                                rep2.classList.add("degend");
                            } else {
                                // Boucle sur les éléments récupérés
                                for (let i = 0; i < rep.length; i++) {
                                    // Affecte l'url mélangée à la propriété src de chaque élément
                                    rep[i].classList.remove("deg");
                                    rep[i].classList.add("degoff");

                                }

                            }

                        }, 950);
                        two = 1;
                    }

                    console.log("true" + two);
                } else {
                    dab();
                    two++;
                    console.log("two plus 1");
                    //console.log(two);
                }
            }
            var bug = document.querySelector(".card.deg.degoff");
            if (bug !== null) {
                bug.classList.remove("deg");
            }
            setTimeout(() => {
                stop = 1;
            }, 900);
        }
    }, { passive: true })

})
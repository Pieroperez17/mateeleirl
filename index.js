
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navLink = document.querySelectorAll(".nav-link");
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("nav-menu_visible");
        if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
        } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
        }
    });
    navLink.forEach((link) => {
        link.addEventListener("click", () => {
        navMenu.classList.remove("nav-menu_visible");
        });
    })

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si el elemento es visible, reproduce el video
                document.getElementById('video').play();
            } else {
                // Si el elemento ya no es visible, pausa el video
                document.getElementById('video').pause();
            }
        });
    }
    function handleIntersection2(entriesw, observer2) {
        entriesw.forEach(entry => {
            if (entry.isIntersecting) {
                // Si el elemento es visible, reproduce el video
                document.getElementById('video2').play();
            } else {
                // Si el elemento ya no es visible, pausa el video
                document.getElementById('video2').pause();
            }
        });
    }


    // Configuración del Intersection Observer
    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Puedes ajustar este valor según tus necesidades
    };

    // Crea el Intersection Observer con la función de manejo
    var observer = new IntersectionObserver(handleIntersection, options);
    var observer2 = new IntersectionObserver(handleIntersection2, options);


    // Observa el elemento de video
    observer.observe(document.getElementById('video'));
    observer2.observe(document.getElementById('video2'));


    function accionAlRecargar() {
        console.log('Recargando página');
        document.getElementById('video').play();
        document.getElementById('video2').play();
    }
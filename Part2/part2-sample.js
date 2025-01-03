
(function() {
    // Function to load a script and return a Promise
    function loadScript(src) {
        return new Promise(function(resolve, reject) {
            var script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    // Function to load a stylesheet
    function loadStylesheet(href) {
        return new Promise(function(resolve, reject) {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            link.onload = resolve;
            link.onerror = reject;
            document.head.appendChild(link);
        });
    }

    // Function to inject custom CSS styles
    function injectCustomStyles() {
        var customStyles = `
            /* Set fixed width and height for the carousel */
            .my-carousel-container {
                width: 530px;
                margin: 0 auto;
                text-align: center;
                position: relative;
                overflow: visible; /* Allow arrows to be visible */
            }
            .my-carousel {
                width: 100%;
                height: 400px;
                margin: 0 auto;
                display: block;
                position: relative;
                box-sizing: border-box;
                overflow: hidden;
            }
            /* Ensure carousel images fill the container and maintain aspect ratio */
            .my-carousel img {
                width: 100%;
                height: 350px; /* Fixed height */
                object-fit: cover;
                display: block;
            }
            /* Ensure each slide occupies full width and height */
            .my-carousel .slick-slide {
                width: 100%;
                height: 100% !important;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            /* Adjust the height of the carousel */
            .my-carousel .slick-list {
                height: 100% !important;
            }
            /* Fix for Slick dots positioning */
            .slick-dots {
                bottom: 10px;
            }
            /* Style for the header */
            .carousel-header {
                font-size: 24px;
                margin-bottom: 20px;
            }
            /* Style for the description */
            .carousel-description {
                font-size: 16px;
                margin-top: 20px;
                width: 530px;
                margin: 20px auto 0 auto;
                text-align: center;
            }
            /* Style for the arrows */
            .my-carousel-container .slick-prev,
            .my-carousel-container .slick-next {
                width: 40px;
                height: 40px;
                z-index: 1;
                top: 50%;
                transform: translateY(-50%);
                position: absolute;
            }
            .my-carousel-container .slick-prev:before,
            .my-carousel-container .slick-next:before {
                font-size: 40px;
                color: #add8e6; /* Light shade of blue */
            }
            /* Position the arrows outside the carousel */
            .my-carousel-container .slick-prev {
                left: -50px;
            }
            .my-carousel-container .slick-next {
                right: -50px;
            }
        `;
        var style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(customStyles));
        document.head.appendChild(style);
    }

    // Function to initialize the carousel
    function initCarousel() {
        // Carousel HTML structure with art images
        var carouselHTML = `
            <div class="my-carousel-container">
                <h2 class="carousel-header">Welcome to Our Art Gallery</h2>
                <div class="my-carousel">
                    <div><img src="https://i112624.tryeden.com/img/dna_animation/1.jpg" alt="Image 1"></div>
                    <div><img src="https://i112624.tryeden.com/img/dna_animation/2.jpg" alt="Image 2"></div>
                    <div><img src="https://i112624.tryeden.com/img/dna_animation/3.jpg" alt="Image 3"></div>
                </div>
            </div>
            <p class="carousel-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit amet at lacus. Quisque euismod, purus eget tempor venenatis, nunc ex consectetur urna, ac tempus nisi sem vel lacus. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.
            </p>
        `;

        // Inject the carousel into the existing 'script-container' element
        var container = document.getElementById('script-container');
        if (container) {
            container.innerHTML = carouselHTML;

            // Inject custom styles
            injectCustomStyles();

            // Initialize the Slick Carousel
            $('.my-carousel').slick({
                dots: true,            // Show navigation dots
                infinite: true,        // Infinite loop scrolling
                speed: 500,            // Transition speed
                slidesToShow: 1,       // Number of slides to show
                autoplay: true,        // Enable autoplay
                autoplaySpeed: 2000,   // Autoplay speed in milliseconds
                arrows: true,          // Enable arrows
                appendArrows: '.my-carousel-container'
            });
        } else {
            console.error('Element with ID "script-container" not found.');
        }
    }

    // Main function to load dependencies and initialize the carousel
    (function loadDependenciesAndInit() {
        var promises = [];

        // Load jQuery if not already loaded
        if (typeof jQuery === 'undefined') {
            promises.push(loadScript('https://code.jquery.com/jquery-3.6.0.min.js'));
        }

        // After jQuery is loaded, load Slick Carousel CSS and JS
        Promise.all(promises).then(function() {
            // Load Slick Carousel CSS and JS
            return Promise.all([
                loadStylesheet('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css'),
                loadStylesheet('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css'),
                loadScript('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js')
            ]);
        }).then(function() {
            // Initialize the carousel
            initCarousel();
        }).catch(function(error) {
            console.error('Error loading scripts or initializing carousel:', error);
        });
    })();
})();
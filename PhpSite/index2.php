<html>
  <head>
    <title>Pangaea Festival</title>
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet"/>
    <link rel="stylesheet" type="text/css" href="assets/stylesheets/style.css">
    <script src="assets/javascripts/game.js"></script>
    <meta name="author" content="Izz Abudaka" />
    
    <!-- Data capture snippet -->
    <script>
      (function() {
      var _fbq = window._fbq || (window._fbq = []);
      if (!_fbq.loaded) {
      var fbds = document.createElement('script');
      fbds.async = true;
      fbds.src = '//connect.facebook.net/en_US/fbds.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(fbds, s);
      _fbq.loaded = true;
      }
      _fbq.push(['addPixelId', '1642302612670604']);
      })();
      window._fbq = window._fbq || [];
      window._fbq.push(['track', 'PixelInitialized', {}]);
    </script>
    <noscript>
      <img height="1" width="1" alt="" style="display:none" src="https://www.facebook.com/tr?id=1642302612670604&amp;ev=PixelInitialized" />
    </noscript>
    <!-- End of Data capture snippet -->

  </head>
  <body>
    <div class="header">
      <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#example-navbar-collapse">
          <span class="sr-only">Toggle navigation</span>
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
          </button>
           <a class="navbar-brand" data-scroll href="#about"><img src="assets/images/logo.png" alt="space invaders"></a>
        </div>
        <div class="collapse navbar-collapse" id="example-navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
          <li><a data-scroll href="#about">ABOUT</a></li>
          <li><a data-scroll href="#news">NEWS</a></li>
          <li><a data-scroll href="#artists">ARTISTS</a></li>
          <li><a data-scroll href="#tickets">TICKETS</a></li>
          <li><a data-scroll href="#map">MAP</a></li>
          <li><a data-scroll href="#sponsors">SPONSORS</a></li>
          <li><a data-scroll href="contact.php">CONTACT</a></li>
          </ul>
        </div>
      </nav>
    </div>

    <div class="container">
      <div class="section">
        <img id="lineup" src="http://mancunion.com/wp-content/uploads/2015/09/Millie-Pangaea-4-Copy-500x331.jpg" style="display:none;"></img>
        <canvas id="thecanvas" onkeydown="keypresseddown(event)" onkeyup="keypressedup(event)"></canvas>
        </div>
      </div>
      <img src="assets/images/pacman-divider.gif" alt="pacman-gif">
      <div class="section" id="about">
        <div class="section-title">
          ABOUT PANGAEA LEVEL 10
        </div>
        <div class="section-body">
          <div class="sec-body-part">
            Pangaea Festival returns this September with a voyage of immortality, reverie and childlike escapism. From beneath the stars of the Milky Way to the earliest dawn of sunrise, we invite all you Lost Boys and Girls to join us on an adventure in the island of your imagination, in the Students Union atop the trees.
          </div>
          <div class="sec-body-part">
            Whether you join us in the youth or are approaching the precious final days of childhood, prepare to be awed by a myriad of make-believe installations and fabled decor, recalling the essence of Tiger Lily and Tinker Bell, of the mermaids and Mr Smee.
          </div>
          <div class="sec-body-part">
            We are here to take you on a journey through the boundless climes of Neverland. So get lost on an awfully big adventure, and remember; the moment you doubt whether you can fly, you cease forever to be able to do it.
          </div>
          <div class="sec-body-part">
            September festival rises from the ashes of June Disco Apocalypse, where another sold out event hosted the likes of Sister Sledge, Simian Mobile Disco, Erol Alkan, Levon Vincent, Boddika, Leon Vynehall, Floating Points, Late Nite Tuff Guy, The Mouse Outfit, Riot Jazz and many more.
          </div>
          <div class="section-subtitle">
            Find Us
          </div>
          <div class="sec-body-part">
              <div class="social">
                <a href="https://www.facebook.com/PangaeaFestival/">
                  <img id="facebook" src="assets/images/facebook.png">
                </a>
              </div>
              <div class="social">
                <a href="https://twitter.com/pangaeafestival">
                  <img id="twitter" src="assets/images/twitter.png">
                </a>
              </div>
              <div class="social">
                <a href="https://soundcloud.com/pangaea-festival">
                  <img id="soundcloud" src="assets/images/soundcloud.png">
                </a>
              </div>
            </div>
        </div>
      </div>
      <img src="assets/images/pacman-divider.gif" alt="pacman-gif">
      <div class="section" id="news">
        <div class="section-title">
            NEWS
        </div>
        <div class="section-body" id="center-button">
          <div class="sec-body-part">
            <button class="coming-soon">
              COMING SOON
            </button>
          </div>
        </div>
      </div>
      <img src="assets/images/pacman-divider.gif" alt="pacman-gif">
      <div class="section" id="artists">
        <div class="section-title">
            ARTISTS
          </div>
          <div class="section-body">
            <img  class="artist-loading" src="assets/images/loadingexe.gif" alt="pacman-gif">
          </div>
          <div class="section-subtitle">
            ESTIMATED TIME LEFT: 15 DAYS
          </div>
        </div>
      </div>
      <img src="assets/images/pacman-divider.gif" alt="pacman-gif">
      <div class="tickets" id="tickets">
        <div class="section-title">
            TICKETS
        </div>
        <div class="tickets-bg">
          <img src="assets/images/tickets.png" alt="tickets">
        </div>
        <div class="section-body" id="center-button">
          <div class="sec-body-part">
            <button class="coming-soon">
              COMING SOON
            </button>
          </div>
        </div>
      </div>
      <img src="assets/images/pacman-divider.gif" alt="pacman-gif">
      <div class="section" id="map">
        <div class="section-title">
            INTERACTIVE MAP
        </div>
        <img class="side-ticket" src="assets/images/ticket.png" alt="side ticket">
        <div class="section-body" id="center-button">
          <div class="sec-body-part" id="sponsors">
            <button class="coming-soon">
              COMING SOON
            </button>
          </div>
        </div>
      </div>
      <img src="assets/images/pacman-divider.gif" alt="pacman-gif">
      <div class="section">
        <div class="section-title">
            SPONSORS
        </div>
        <img class="invaders" src="assets/images/invaders.png" alt="space invaders">
        <div class="section-body">
          <div class="sec-body-part" id="sponsors">
            <button class="coming-soon">
              COMING SOON
            </button>
          </div>
        </div>
      </div>
      <footer>
        <div class="footer">
          <p>Created with
          <span class="glyphicon glyphicon-heart" aria-hidden="true"></span>
           by <a href="https://uk.linkedin.com/in/izzabudaka" target="_blank">Izz Abudaka</a> & <a href="http://plopstock.ro/portfolio" target="_blank">Tamas Kolcsey</a><br/>
           2016 Pangaea Festival<span class="glyphicon glyphicon-copyright-mark" aria-hidden="true"></span>. All Rights Reserved.
          </p>
        </div>
      </footer>
  </body>
</html>

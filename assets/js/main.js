var PartnersCarousel = {
  partners: [
    { title: 'Nestle', url: 'assets/img/partners/nestle.png' },
    { title: 'Unilever', url: 'assets/img/partners/unilever.png' },
    { title: 'Intelligent', url: 'assets/img/partners/intelligent.png' },
    { title: 'Monde', url: 'assets/img/partners/monde.png' },
    { title: 'Acer', url: 'assets/img/partners/acer.png' },
    { title: 'Canon', url: 'assets/img/partners/canon.png' },
    { title: 'Bountry Fresh', url: 'assets/img/partners/bounty-fresh.png' },
    { title: 'Chooks To Go', url: 'assets/img/partners/chooks-to-go.png' }
  ],
  generateMarkup: function() {
    var owlCarouselItems = '';
    $.each(this.partners, function(i, partner) {
      owlCarouselItems += '<div class="item"><div class="image-container"><div><img src="' + partner.url + '" alt="' + partner.title + '" /></div></div></div>';
    });
    return owlCarouselItems;
  },
  init: function() {
    $('.owl-carousel').append(this.generateMarkup());
    $('.owl-carousel').owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      responsive: {
        0: { items: 1 },
        500: { items: 2 },
        700: { items: 3 },
        1000: { items: 4 }
      },
      navContainer: '#partners-carousel-controls',
      navText: ['<div class="prev-arrow">Prev</div>', '<div class="next-arrow">Next</div>']
    });
  }
};

var Capabilities = {
  init: function() {
    $.getJSON('../assets/data/capabilities.json', function(data) {
      var capabilities = '';
      $.each(data, function(i, capability) {
        capabilities += '<div id="' + capability.id + '" class="column capability"><img src="assets/img/' + capability.url + '" /><h3 class="title small-title is-block">' + capability.title + '</h3></div>'
      });
      $('#capabilities').append(capabilities);
      $('.capability').on('click', function(e) {
        var capability = data.find(function(value) {
          return value.id === 'cp-strategy';
        });
        $('#capability-img').empty().append('<img src="assets/img/' + capability.url + '" class="image" />');
        $('#capability-desc').empty().append('<h4 class="title small-title">' + capability.title + '</h4><p>' + capability.description + '</p>');
        $('#capability-details').addClass('active');
        $('#capabilities').addClass('hide');
      });
      $('#close-capability').on('click', function() {
        $('#capability-details').removeClass('active');
        $('#capabilities').removeClass('hide');
      });
    });
  }
};

(function($){
  PartnersCarousel.init();
  Capabilities.init();
})(jQuery);
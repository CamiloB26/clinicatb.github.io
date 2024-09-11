window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel__indicadores',
        arrows: {
        prev: '.carousel__anterior',
        next: '.carousel__siguiente'
  },
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 600,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 2,
        slidesToScroll: 2,
        itemWidth: 150,
        duration: 0.25
      }
    },{
      // screens greater than >= 1024px
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        itemWidth: 150,
        duration: 0.25
      }
    }
  ]
    });
});


// CAROUSEL 2

window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista-2'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel__indicadores-2',
        arrows: {
        prev: '.carousel__anterior-2',
        next: '.carousel__siguiente-2'
  },
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 600,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 2,
        slidesToScroll: 2,
        itemWidth: 150,
        duration: 0.25
      }
    },{
      // screens greater than >= 1024px
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        itemWidth: 150,
        duration: 0.25
      }
    }
  ]
    });
});


// INICIO CAROUSEL 3

window.addEventListener('load', function(){
  new Glider(document.querySelector('.carousel__lista-3'), {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      dots: '.carousel__indicadores-3',
      arrows: {
      prev: '.carousel__anterior-3',
      next: '.carousel__siguiente-3'
},
responsive: [
  {
    // screens greater than >= 775px
    breakpoint: 600,
    settings: {
      // Set to `auto` and provide item width to adjust to viewport
      slidesToShow: 2,
      slidesToScroll: 2,
      itemWidth: 150,
      duration: 0.25
    }
  },{
    // screens greater than >= 1024px
    breakpoint: 900,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      itemWidth: 150,
      duration: 0.25
    }
  }
]
  });
});


// INICIO CAROUSEL 4

window.addEventListener('load', function(){
  new Glider(document.querySelector('.carousel__lista-4'), {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      dots: '.carousel__indicadores-4',
      arrows: {
      prev: '.carousel__anterior-4',
      next: '.carousel__siguiente-4'
},
responsive: [
  {
    // screens greater than >= 775px
    breakpoint: 600,
    settings: {
      // Set to `auto` and provide item width to adjust to viewport
      slidesToShow: 2,
      slidesToScroll: 2,
      itemWidth: 150,
      duration: 0.25
    }
  },{
    // screens greater than >= 1024px
    breakpoint: 900,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      itemWidth: 150,
      duration: 0.25
    }
  }
]
  });
});

// INICIO CAROUSEL 5

window.addEventListener('load', function(){
  new Glider(document.querySelector('.carousel__lista-5'), {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      dots: '.carousel__indicadores-5',
      arrows: {
      prev: '.carousel__anterior-5',
      next: '.carousel__siguiente-5'
},
responsive: [
  {
    // screens greater than >= 775px
    breakpoint: 600,
    settings: {
      // Set to `auto` and provide item width to adjust to viewport
      slidesToShow: 2,
      slidesToScroll: 2,
      itemWidth: 150,
      duration: 0.25
    }
  },{
    // screens greater than >= 1024px
    breakpoint: 900,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      itemWidth: 150,
      duration: 0.25
    }
  }
]
  });
});


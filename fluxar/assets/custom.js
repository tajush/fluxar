// All Sliders
$(document).ready(function(){
  $('.my-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    draggable: false,
    speed: 300,
    infinite: true,
    responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
    }
  }
]
  });

  $('.brand-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    centerMode: true,
    draggable: true,
    speed: 300,
    infinite: true,
    responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: false
    }
  }
]
  });

   $('.review-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    draggable: true,
    speed: 300,
    infinite: true,
    responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }
]
    });

    $('.top-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      draggable: false,
      speed: 500,
      infinite: true,
      responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      }
    }
  ]
    });

    $('.hero-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      speed: 1000,
      vertical: true,
      verticalSwiping: true,
      responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
      }
    }
  ]
    });

    $('.feedback-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      draggable: true,
      speed: 1000,
      infinite: true,
      responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      }
    }
  ]
      });

      

        $('.support-slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          draggable: true,
          speed: 300,
          infinite: true,
          responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
          });

          $('.product-review-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            draggable: true,
            speed: 300,
            infinite: true,
            responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
            });

            $('.home-slider').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: true,
              draggable: true,
              speed: 2000,
              infinite: true,
              responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
              });

});

// Select 2 footer dropdown
function custom_template(obj){
  var data = $(obj.element).data();
  var text = $(obj.element).text();
  if(data && data['img_src']){
      img_src = data['img_src'];
      template = $("<div style=\"display:flex;align-items: center\"><img src=\"" + img_src + "\" style=\"width:20px;height:20px;\"/><p style=\"font-weight: 400;font-size:14px;text-align:center;margin:0 10px;color: #6D7175\">" + text + "</p></div>");
      return template;
  }
}
var options = {
'templateSelection': custom_template,
'templateResult': custom_template,
}
$('#id_select2_example').select2(options);
$('.select2-container--default .select2-selection--single').css({'height': '30px'});

// Faq
const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const toggleButton = item.querySelector('.cursor-pointer');
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.rotate-icon');
            const cancelIcon = item.querySelector('.rotate-cancel');

            toggleButton.addEventListener('click', () => {
                item.classList.toggle('faq-open');
                if (item.classList.contains('faq-open')) {
                    answer.style.maxHeight = answer.scrollHeight + "px";
                } else {
                    answer.style.maxHeight = "0";
                }
                icon.classList.toggle('faq-open');
            });
        });

        // Account tab features
        function showTab(tabIndex) {
          const tabContents = document.querySelectorAll('.tab-content');
          const tabButtons = document.querySelectorAll('.tab-button');
      
          // Remove the 'active' class from all tab contents and buttons
          tabContents.forEach(tab => tab.classList.remove('active'));
          tabButtons.forEach(button => button.classList.remove('active'));
      
          // Add the 'active' class to the selected tab content and button
          tabContents[tabIndex].classList.add('active');
          tabButtons[tabIndex].classList.add('active');
      }


      // Account dropdown 
      const dropdownButton = document.getElementById('dropdown-button');
      const dropdownMenu = document.getElementById('dropdown-menu');
      
      if (dropdownButton && dropdownMenu) {
        dropdownButton.addEventListener('click', () => {
          dropdownMenu.classList.toggle('hidden');
        });
      
        document.addEventListener('click', (event) => {
          if (!dropdownButton.contains(event.target)) {
            dropdownMenu.classList.add('hidden');
          }
        });
      }
      


       // Range slider desktop
       if (typeof noUiSlider !== 'undefined') {
        var slider = document.getElementById('slider');
        noUiSlider.create(slider, {
            start: [20, 80],
            tooltips: true,
            connect: false,
            range: {
                'min': 0,
                'max': 100
            }
        });
       }

              // Range slider mobile
              if (typeof noUiSlider !== 'undefined') {
                var slider = document.getElementById('sliderMobile');
                noUiSlider.create(slider, {
                    start: [20, 80],
                    tooltips: true,
                    connect: false,
                    range: {
                        'min': 0,
                        'max': 100
                    }
                });
               }


         // Product details tab features
         function productTab(tabIndex) {
          const productTabcontents = document.querySelectorAll('.tab-content');
          const tabButtons = document.querySelectorAll('.product-tab-button');
      
          // Remove the 'active' class from all tab contents and buttons
          productTabcontents.forEach(tab => tab.classList.remove('active'));
          tabButtons.forEach(button => button.classList.remove('active'));
      
          // Add the 'active' class to the selected tab content and button
          productTabcontents[tabIndex].classList.add('active');
          tabButtons[tabIndex].classList.add('active');
      }

      // Desktop popup
      document.addEventListener("DOMContentLoaded", function () {
        const closeModalButton = document.getElementById("desktop-closeModal");
        const modal = document.getElementById("subscribeModal");
      
        if (closeModalButton && modal) {
          modal.classList.remove("hidden");
      
          closeModalButton.addEventListener("click", function () {
            modal.classList.add("hidden");
          });
        } 
      });

       // Mobile popup
       document.addEventListener("DOMContentLoaded", function () {
        const closeModalButton = document.getElementById("mobile-closeModal");
        const modal = document.getElementById("subscribeModal");
      
        if (closeModalButton && modal) {
          modal.classList.remove("hidden");
      
          closeModalButton.addEventListener("click", function () {
            modal.classList.add("hidden");
          });
        } 
      });


  // Function to open the modal
  function openModal() {
    document.getElementById('myModal').style.display = 'flex';
    $('.quickView-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      draggable: true,
      speed: 300,
      infinite: true,
      responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
      });
  }

  // Function to close the modal
  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
    $('.quickView-slider').slick('unslick');
  }

// Function to open the size modal
function openSizeModal() {
  document.getElementById('sizeModal').style.display = 'flex';
}

// Function to close the size modal
function closeSizeModal() {
  document.getElementById('sizeModal').style.display = 'none';
}

  // Search engine show and hide
  document.addEventListener('DOMContentLoaded', function() {
    var searchToggle = document.getElementById('searchToggle');
    var searchElement = document.getElementById('searchElement');
    var otherElement = document.getElementById('otherElement');
    var closeBtnDesktop = document.getElementById('closeBtnDesktop');
    var closeBtnMobile = document.getElementById('closeBtnMobile');
  
    if (searchToggle && searchElement && otherElement) {
      searchToggle.addEventListener('click', function() {
        // Toggle the display property
        if (searchElement.style.display === 'none' || searchElement.style.display === '') {
          searchElement.style.display = 'block';
          otherElement.style.display = 'none'; // Hide otherElement when searchElement is shown
        } else {
          searchElement.style.display = 'none';
          otherElement.style.display = 'block'; // Show otherElement when searchElement is hidden
        }
      });
    }
  
    // Search engine close desktop
    if (closeBtnDesktop && searchElement && otherElement) {
      closeBtnDesktop.addEventListener('click', function() {
        // Hide the element and show otherElement
        searchElement.style.display = 'none';
        otherElement.style.display = 'block';
      });
    }

    // Search engine close mobile
    if(closeBtnMobile && searchElement && otherElement) {
      closeBtnMobile.addEventListener('click', function() {
        // Hide the element and show otherElement
        searchElement.style.display = 'none';
        otherElement.style.display = 'block';
      });
    }
  });


  // Function to open address modal
  function openAddressModal(){
    document.getElementById('addressModal').style.display = 'flex';
    // document.getElementById('address-infoBody').style.position = 'fixed';
  }

  // Function to close address modal
  function closeAddressModal(){
    document.getElementById('addressModal').style.display = 'none';
    // document.getElementById('address-infoBody').style.position = 'static';
  }

  
// Mobile menu show
document.addEventListener('DOMContentLoaded', function () {
  const showButton = document.getElementById('showButton');
  const navList = document.getElementById('navList');
  const closeButton = document.getElementById('closeButton');

  if (showButton && navList) {
    showButton.addEventListener('click', function () {
      navList.style.display = 'block';
      setTimeout(() => {
          navList.style.transform = 'translate(-50%, -50%) scale(1)';
          navList.style.opacity = '1';
      }, 10); // Delay for a smooth transition
    });
  }

  if (closeButton && navList) {
  closeButton.addEventListener('click', function () {
      navList.style.transform = 'translate(-50%, -50%) scale(0)';
      navList.style.opacity = '0';
      setTimeout(() => {
          navList.style.display = 'none';
      }, 500); // Delay to match the transition duration
  });
}
});

// Mobile nav list toggle
function summerToggle() {
  var myDiv = document.getElementById('summer');
  myDiv.style.display = (myDiv.style.display === 'none') ? 'block' : 'none';
}

function bikiniToggle() {
  var myDiv = document.getElementById('bikini');
  myDiv.style.display = (myDiv.style.display === 'none') ? 'block' : 'none';
}

function topsToggle() {
  var myDiv = document.getElementById('tops');
  myDiv.style.display = (myDiv.style.display === 'none') ? 'block' : 'none';
}

function shoeToggle() {
  var myDiv = document.getElementById('shoe');
  myDiv.style.display = (myDiv.style.display === 'none') ? 'block' : 'none';
}

// Product details filter sidebar
function openSidebar(){
  document.getElementById('nav').classList.add("active");
}

function closeSidebar(){
  document.getElementById('nav').classList.remove("active");
}

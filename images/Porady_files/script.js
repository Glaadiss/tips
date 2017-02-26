$(document).ready(function(){

   var gender='';
   var email='';
   var name ='';
   var age=[];


   window.fbAsyncInit = function() {
     FB.init({
       appId      : '855169464614612',
       xfbml      : true,
       version    : 'v2.7'

     });
     FB.Canvas.setAutoGrow();

     function onLogin(response) {
       if (response.status == 'connected') {
         FB.api('/me?fields=id,name,first_name,birthday,gender,age_range,email', function(data) {
           console.log(data);
           gender = data.gender;
           age= data.age_range;
           name= data.first_name;
           email = data.email
           $('#facebook_name').html(''+name+'');
           $('#nam').val(''+name+'');
           $('#emai').val(''+email+'')
         });
       }
     }

     FB.getLoginStatus(function(response) {
       // Check login status on load, and if the user is
       // already logged in, go directly to the welcome message.
       if (response.status == 'connected') {
         onLogin(response);
       } else {
         // Otherwise, show Login dialog first.
         FB.login(function(response) {
           onLogin(response);
         }, {scope: 'user_friends, email'});
       }
     });
   };

   (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));



  $('#page_1').slideDown();

  $('.next').on('click',function(){
    $('#page_1').fadeOut().after(function(){
      $('#page_4').slideDown('slow');
    })
  });

  $('.next2').on('click',function(){
      $('#page_4').fadeOut().after(function(){
          $('#page_2').slideDown('slow');
      })
  });

  $('.dieta').on('click',function(){
    $('.btn-s').css("background-color", "white");
    $('.dieta').css("background-color", "yellow");
    $('.page').fadeOut().after(function(){
      $('.tab').fadeOut();
      setTimeout(function(){
        $('#page_2').slideDown('').after(function(){
          $('#dieta').slideDown('slow');
        })
      },500)

    })
  });

  $('.trening').on('click',function(){
    console.log('dsadas');
    $('.btn-s').css("background-color", "white");
    $('.trening').css("background-color", "yellow");
    $('.page').fadeOut().after(function(){
      $('.tab').fadeOut();
      setTimeout(function(){
        $('#page_2').slideDown('').after(function(){
          $('#trening').slideDown('slow');
        })
      },500)

    })
  });
  $('.supl').on('click',function(){
    $('.btn-s').css("background-color", "white");
    $('.supl').css("background-color", "yellow");
    $('.page').fadeOut().after(function(){
      $('.tab').fadeOut();
      setTimeout(function(){
        $('#page_2').slideDown('').after(function(){
          $('#supl').slideDown('slow');
        })
      },500)
    })
  });

  $('.pyt').on('click', function(){
    var askIndex = $('.pyt').index(this);
    $('.pyt').css('color', 'white');
    $(this).css('color','yellow');

    if($($('.odp').get(askIndex)).css('display') == 'none' ){
      $('.odp').fadeOut().after(function(){
        setTimeout(function(){
            $($('.odp').get(askIndex)).slideDown('slow');
        },500)
      });
    }
    else{
      $('.odp').slideUp()
    }
  });

  $('.form_btn').on('click', function(){
    $('.page').fadeOut().after(function(){
      setTimeout(function(){
        $('#page_3').slideDown('slow');
      },500);
    })
  });

  $('#sendEmail').on('click', function(){
    $.ajax({
      url: "https://formspree.io/bartekgladys@gmail.com",
      method: "POST",
      data: {pytanie: $('#pytanie').val(), imie: $('#nam').val(), email: $('#emai').val() },
      dataType: "json"
    }).success(function(){
      $('#pytanie').val('');
    })
  })

});

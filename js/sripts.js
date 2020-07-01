$(document).ready(function(){
  $('.scroll-top-btn').on('click', function(event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('html, body').animate({scrollTop: top}, 800);
		setTimeout(function() {
			window.location = id;
		}, 700);
});



    $("input#name1, input#namee").on("keypress", function(e) {
  
        let char = /["a-zA-Z]/;
        let val = String.fromCharCode(e.which);
        let test = char.test(val);
        
        if(!test) return false
      })
    $("input#lastname1, input#lastnamee").on("keypress", function(e) {
  
        let char = /["a-zA-Z]/;
        let val = String.fromCharCode(e.which);
        let test = char.test(val);
        
        if(!test) return false
      });

      $("input.telephone").on("keypress", function(e) {
  
        let char = /["0-9]/;
        let val = String.fromCharCode(e.which);
        let test = char.test(val);
        
        if(!test) return false
      });

      $("input.telephone").on("blur", function(e) {
  
        let l = $(this).val().length;
        if(l<11){
          $(this).addClass('error');
          $(this).next().addClass('active')
        } else if(l>=11 || l==0){
          $(this).next().removeClass('active')
          $(this).removeClass('error');
        } else if (l>16){
          $this.val($this.val().substr(0, 16));		
        }
      });
      $("input.telephone").on("keyup", function(e) {
        var $this = $(this);
        if($this.val().length > 16)
          $this.val($this.val().substr(0, 16));			
      });

      $("input.password").on("blur", function(e) {
  
        let l = $(this).val().length;
        if(l<6){
          $(this).addClass('error');
          $(this).next().addClass('active')
        } else if(l>=11 || l==0){
          $(this).next().removeClass('active')
          $(this).removeClass('error');
        } else if (l>16){
          $this.val($this.val().substr(0, 16));		
        }
      });
      $("input.password").on("keyup", function(e) {
        var $this = $(this);
        if($this.val().length > 16)
          $this.val($this.val().substr(0, 16));			
      });
      $("input.telephone").on("keyup", function(e) {
        var $this = $(this);
        if($this.val().length > 16)
          $this.val($this.val().substr(0, 16));			
      });

      
    // Устанавливаем обработчик потери фокуса для всех полей ввода текста
    $('input#name, input#email, textarea#message').unbind().blur( function(){

       // Для удобства записываем обращения к атрибуту и значению каждого поля в переменные
        var id = $(this).attr('id');
        var val = $(this).val();

      // После того, как поле потеряло фокус, перебираем значения id, совпадающие с id данного поля
      switch(id)
      {
            // Проверка поля "Имя"
            case 'name':
               var rv_name = /^[a-zA-Zа-яА-Я]+$/; // используем регулярное выражение

               // Eсли длина имени больше 2 символов, оно не пустое и удовлетворяет рег. выражению,
               // то добавляем этому полю класс .not_error,
               // и ниже в контейнер для ошибок выводим слово " Принято", т.е. валидация для этого поля пройдена успешно

               if(val.length > 2 && val != '' && rv_name.test(val))
               {
                  $(this).addClass('not_error');
                  $(this).next('.error-box').text('Принято')
                                            .css('color','green')
                                            .animate({'paddingLeft':'10px'},400)
                                            .animate({'paddingLeft':'5px'},400);
               }

             // Иначе, мы удаляем класс not-error и заменяем его на класс error, говоря о том что поле содержит ошибку валидации,
             // и ниже в наш контейнер выводим сообщение об ошибке и параметры для верной валидации

               else
               {
                  $(this).removeClass('not_error').addClass('error');
                  $(this).next('.error-box').html('поле "Имя" обязательно для заполнения<br>, длина имени должна составлять не менее 2 символов<br>, поле должно содержать только русские или латинские буквы')
                                             .css('color','red')
                                             .animate({'paddingLeft':'10px'},400)
                                             .animate({'paddingLeft':'5px'},400);
               }
           break;
            case 'lastname':
               var rv_name = /^[a-zA-Zа-яА-Я]+$/; // используем регулярное выражение

               // Eсли длина имени больше 2 символов, оно не пустое и удовлетворяет рег. выражению,
               // то добавляем этому полю класс .not_error,
               // и ниже в контейнер для ошибок выводим слово " Принято", т.е. валидация для этого поля пройдена успешно

               if(val.length > 2 && val != '' && rv_name.test(val))
               {
                  $(this).addClass('not_error');
                  $(this).next('.error-box').text('Принято')
                                            .css('color','green')
                                            .animate({'paddingLeft':'10px'},400)
                                            .animate({'paddingLeft':'5px'},400);
               }

             // Иначе, мы удаляем класс not-error и заменяем его на класс error, говоря о том что поле содержит ошибку валидации,
             // и ниже в наш контейнер выводим сообщение об ошибке и параметры для верной валидации

               else
               {
                  $(this).removeClass('not_error').addClass('error');
                  $(this).next('.error-box').html('поле "Имя" обязательно для заполнения<br>, длина имени должна составлять не менее 2 символов<br>, поле должно содержать только русские или латинские буквы')
                                             .css('color','red')
                                             .animate({'paddingLeft':'10px'},400)
                                             .animate({'paddingLeft':'5px'},400);
               }
           break;

          // Проверка email
          case 'email':
              var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
              if(val != '' && rv_email.test(val))
              {
                $(this).removeClass('error');
                 $(this).addClass('not_error');
                //  $(this).next('.error-box').text('Принято')
                //                            .css('color','green')
                //                            .animate({'paddingLeft':'10px'},400)
                //                            .animate({'paddingLeft':'5px'},400);
              }
              else
              {
                 $(this).removeClass('not_error').addClass('error');
                //  $(this).next('.error-box').html('поле "Email" обязательно для заполнения<br>, поле должно содержать правильный email-адрес<br>')
                                            // .css('color','red')
                                            // .animate({'paddingLeft':'10px'},400)
                                            // .animate({'paddingLeft':'5px'},400);
              }
          break;


         // Проверка поля "Сообщение"
         case 'message':
             if(val != '' && val.length < 5000)
             {
                $(this).addClass('not_error');
                $(this).next('.error-box').text('Принято')
                                          .css('color','green')
                                          .animate({'paddingLeft':'10px'},400)
                                          .animate({'paddingLeft':'5px'},400);
             }
             else
             {
                $(this).removeClass('not_error').addClass('error');
                $(this).next('.error-box').html('поле "Текст письма" обязательно для заполнения')
                                          .css('color','red')
                                          .animate({'paddingLeft':'10px'},400)
                                          .animate({'paddingLeft':'5px'},400);
             }
         break;

      } // end switch(...)

    }); // end blur()

    // Теперь отправим наше письмо с помощью AJAX
    $('form#feedback-form').submit(function(e){

        // Запрещаем стандартное поведение для кнопки submit
        e.preventDefault();

        // После того, как мы нажали кнопку "Отправить", делаем проверку,
        // если кол-во полей с классом .not_error равно 3 (так как у нас всего 3 поля), то есть все поля заполнены верно,
        // выполняем наш Ajax сценарий и отправляем письмо адресату

        if($('.not_error').length == 3)
        {
           // Eще одним моментом является то, что в качестве указания данных для передачи обработчику send.php, мы обращаемся $(this) к нашей форме,
           // и вызываем метод .serialize().
           // Это очень удобно, т.к. он сразу возвращает сгенерированную строку с именами и значениями выбранных элементов формы.

            $.ajax({
                   url: 'send.php',
                   type: 'post',
                   data: $(this).serialize(),

                   beforeSend: function(xhr, textStatus){ 
                        $('form#feedback-form :input').attr('disabled','disabled');
                   },

                  success: function(response){
                       $('form#feedback-form :input').removeAttr('disabled');
                       $('form#feedback-form :text, textarea').val('').removeClass().next('.error-box').text('');
                       alert(response);
                  }
           }); // end ajax({...})
       }

       // Иначе, если количество полей с данным классом не равно значению 3, мы возвращаем false,
       // останавливая отправку сообщения в невалидной форме
      else
      {
         return false;
      }

  }); // end submit()
  






 }); // end script































// var currentTab = 0; 
// showTab(currentTab); 

// function showTab(n) {
//   // This function will display the specified tab of the form...
//   var x = document.getElementsByClassName("tab");
//   x[n].style.display = "block";
//   //... and fix the Previous/Next buttons:
// //   if (n == 0) {
//     // document.getElementById("prevBtn").style.display = "none";
// //   } else {
// //     document.getElementById("prevBtn").style.display = "inline";
// //   }
//   if (n == (x.length - 1)) {
//     document.getElementById("nextBtn").innerHTML = "Submit";
//   } else {
//     document.getElementById("nextBtn").innerHTML = "Next";
//   }

//   //... and run a function that will display the correct step indicator:
//   fixStepIndicator(n)
// }

// function nextPrev(n) {
//   // This function will figure out which tab to display
//   var x = document.getElementsByClassName("tab");
//   // Exit the function if any field in the current tab is invalid:
//   if (n == 1 && !validateForm()) return false;
//   // Hide the current tab:
//   x[currentTab].style.display = "none";
//   // Increase or decrease the current tab by 1:
//   currentTab = currentTab + n;
//   // if you have reached the end of the form...
//   if (currentTab >= x.length) {
//     // ... the form gets submitted:
//     document.getElementById("regForm").submit();
//     document.getElementById("regFormm").submit();
//     return false;
//   }
//   // Otherwise, display the correct tab:
//   showTab(currentTab);
// }

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}


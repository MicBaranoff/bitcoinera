var appPage = new Vue({
    el: '.apppage',
    data: {
        firstName: "",
        lastName: "",
        email: "",
        agreeCollectEmail: false,
        agreeTerms: false,
        password: "",
        phoneCountryCode: "",
        hiddenClickId: "",
        phoneNumber: "",
        
        currentStep: 0,
        stepsCount: 3,

        showSuccessPopup: false,
        brokerLogoUrl: "",
        brokerLink: "",
        brokerAutoredirect: false,
        
        showErrorPopup: false,
        submitErrorMessage: "",
        
        mouseY: 10000,
        showPopup:false,
        allowShowPopup:true,

        showVideoPlayer:false,

        countdownInterval: null,
        timerValue: "",
        placesLeftValue: 15,

        sourceId: "",
        pixelUrl: "#",

        phoneNumberIsValid: false
    },
    mounted: function() {
        this.sourceId = $('#sourceId').val();
        this.phoneCountryCode = $('#userCountryCode').val();
        this.hiddenClickId = $('#clickId').val();
        this.currentStep = 0;
        this.startCountdown();
        var context = this;
        window.addEventListener("mousemove",function(e){
            context.mouseY = e.clientY;
        });
    },
    beforeDestroy: function () {
        
    },
    updated: function() {

    },
    methods: {
        phoneInputChanged: function() {
            $('.invalid_phone_number').css('display', 'none');
        },
        userMouseLeave: function() {
            if(this.allowShowPopup === true && this.mouseY < 50) {
                this.showPopup = true;
            }
        },
        closePopup: function() {
            this.allowShowPopup = false;
            this.showPopup = false;
        },
        showVideo: function() {
            this.allowShowPopup = false;
            this.showVideoPlayer = true;

            var video = document.getElementById("videoPlayerPl");
            video.play();
        },
        nextStep: function(index, formIndex){
            var form = document.querySelector('.form' + formIndex);
            if (!form.checkValidity()) {
                // Create the temporary button, click and remove it
                var tmpSubmit = document.createElement('button');
                form.appendChild(tmpSubmit);
                tmpSubmit.click();
                form.removeChild(tmpSubmit);
            } else {
                // Form is valid, let the user proceed or do whatever we need to
                this.allowShowPopup = false;
                this.currentStep = index;
            }


            //POST to API
            if (this.currentStep === this.stepsCount) {
                this.allowShowPopup = false;
                this.showPopup = false;
                this.submitToApi();
            }
        },
        isShowStep: function (index) {
            if(this.currentStep === index)
            {
                return true;
            }
            return false;
        },
        isFieldRequired: function (fieldFromStep) {
            if(this.currentStep === fieldFromStep)
            {
                return true;
            }
            return false;
        },
        isStepCompleted: function (index) {
            if(this.currentStep > index)
            {
                return true;
            }
            return false;
        },
        submitToApi: function () {
            if(this.isSubmitButtonDisabled === true){
                return;
            }

            this.closePopup();

            var phoneIsValid = false;
            var phoneNumber = libphonenumber.parsePhoneNumberFromString(this.phoneNumber, this.phoneCountryCode);
            if (phoneNumber) {
                phoneIsValid = phoneNumber.isValid();
            }

            this.phoneNumberIsValid = phoneIsValid;

            if(phoneIsValid) {
                var cleanPhoneNumber = phoneNumber.nationalNumber;

                this.closePopup();
                var lead = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    agreeCollectEmail: this.agreeCollectEmail,
                    agreeTerms: this.agreeTerms,
                    password: this.password,
                    phoneCountryCode: this.phoneCountryCode,
                    phoneNumber: cleanPhoneNumber,
                    hiddenClickId: this.hiddenClickId
                };


                this.isSubmitButtonDisabled = true;
                var context = this;
                general.post('/api/savelead', lead, function (response) {
                    var data = response.data.payload;
                    context.brokerLogoUrl = data.brokerLogoUrl;
                    context.brokerLink = data.brokerLink;
                    context.brokerAutoredirect = data.autoredirect;

                    context.isSubmitButtonDisabled = false;

                    context.showSuccessPopup = true;
                    // context.pixelUrl = "/pixel?id=" + context.sourceId;

                    fbq('track', 'CompleteRegistration');
                    fbq('track', 'Lead');

                    if(context.brokerAutoredirect){
                        window.location.href = context.brokerLink;
                    }
                });
            } else {
                this.phoneNumber = "";
                $('.invalid_phone_number').css('display', 'block');
            }
        },
        startCountdown: function () {
            var placesLeft = readCookie("placesCount");
            if(!placesLeft || placesLeft < 2){
                placesLeft = 15;
            }
            else if(placesLeft > 3) {
                placesLeft -= 1;
            }
            writeCookie("placesCount", placesLeft, 24);
            this.placesLeftValue = placesLeft;
            
            var context = this;
            var diff = 15;//minutes
            var countDownTime = new Date(new Date().getTime() + diff*60000);
            context.countdownInterval = setInterval(function() {
                var now = new Date().getTime();
                var distance = countDownTime - now;
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                context.timerValue = "";
                if(days > 0){
                    context.timerValue += days + "d ";
                }
                if(hours > 0){
                    context.timerValue += hours + "h ";
                }
                context.timerValue += ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
                
                if (distance < 0) {
                    clearInterval(context.countdownInterval);
                    context.timerValue = "EXPIRED";
                }
            }, 1000);
        }
    },
});




var ResultTypeEnum = Object.freeze({ "info": 0, "success": 1, "warning": 2, "error": 3 });

general = {
    get: function(url, callback) {
        $('#loadingIndicator').show();
        axios.get(url).then((response) => {
            $('#loadingIndicator').hide();
            if (response !== null && callback) {
                callback(response);
            }
        }).catch(error => {
            $('#loadingIndicator').hide();
            // general.showNotification(ResultTypeEnum.error, error);
            console.log(error);
        });
    },
    post: function(url, data, callback) {
        $('#loadingIndicator').show();
        axios.post(url, data).then(function(response) {
            $('#loadingIndicator').hide();
            if (response !== null && callback) {
                callback(response);
            }
        }).catch(function(error) {
            $('#loadingIndicator').hide();
            // general.showNotification(ResultTypeEnum.error, error);
            console.log(error);
        });
    }
};

function writeCookie(key, value, hours) {
    var expires = "";
    if (hours) {
        var date = new Date();
        date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    var temp = location.host.split(".").reverse();
    var rootDomain = "";
    if (temp[1] && temp[0]){
        rootDomain = "." + temp[1] + "." + temp[0];
    }
    if (rootDomain) {
        document.cookie = key + "=" + value + expires + "; domain=" + rootDomain + "; path=/";
    } else {
        document.cookie = key + "=" + value + expires + "; path=/";
    }
}
function readCookie(key) {
    var result;
    return (result = new RegExp("(?:^|; )" + encodeURIComponent(key) + "=([^;]*)").exec(document.cookie)) ? (result[1]) : null;
}




// $(document).ready(function () {
//
//     function viewport() {
//         var e = window,
//             a = 'inner';
//         if (!('innerWidth' in window)) {
//             a = 'client';
//             e = document.documentElement || document.body;
//         }
//         return {
//             width: e[a + 'Width'],
//             height: e[a + 'Height']
//         };
//     }
//
//     // Get the correct window sizes with these declarations
//     var windowHeight = viewport().height;
//     var windowWidth = viewport().width;
//
//     $(window).on("resize", function () {
//         windowHeight = viewport().height;
//         windowWidth = viewport().width;
//     });
//
//     // DESKTOP SLIDING BAR
//     $(window).scroll(function () {
//         var hT = $('#register').offset().top,
//             hH = $('#register').outerHeight(),
//             wH = $(window).height(),
//             wS = $(this).scrollTop();
//         if (wS > (hH + hT)) {
//             $('.navBarSlider').addClass('slided');
//         } else {
//             $('.navBarSlider').removeClass('slided');
//         }
//     });
// });

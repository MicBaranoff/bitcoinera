(function () {
	'use strict';

	angular
		.module("app")
		.controller("SubscribeController", SubscribeController);

	SubscribeController.$inject = ["$rootScope", "$scope", "$http"];

	function SubscribeController($rootScope, $scope, $http) {
		var vm = this;
		vm.showLoading = false;

		var waitIntgrtn = setInterval(function () {
			if (!window.intgrtn) {
				return false;
			}
			clearInterval(waitIntgrtn);

			window.intgrtn.getCurrentLocation(function (response) {
				if (response.data && response.data.countryIsoCode && response.data.country) {
					var currentIso = window.intgrtn.lookup('language', false, response.data.countryIsoCode.toLowerCase());

					switch (currentIso) {
						case "mx":
						case "cl":
						case "co":
						case "ar":
						case "uy":
						case "cr":
						case "ec":
						case "pa":
						case "pe":
						case "ve":
							currentIso = "es";
							break;
						case "br":
							currentIso = "pt";
							break;
					}
					vm.isoCode = currentIso;
					vm.subtitles = 'media/' + vm.isoCode + '.vtt';
					$('.video video').append($('<track kind="subtitles" srclang="' + vm.isoCode + '" src="' + vm.subtitles + '" default>'));
					translateToCurrentLanguage(vm.isoCode);
					translatePasswordBullets(vm.isoCode);
					document.dispatchEvent(new CustomEvent("visitorLocated", {
						detail: response.data
					}));
				}
			}, function () {
				translateToCurrentLanguage();
			});

			window.intgrtn.events.on('form.signup.success', function (form, response) {
				$scope.$applyAsync();
				vm.brokersName = response.data.broker.name;
				vm.brokersImageUrl = response.data.broker.logo;
				$('.btn-progress-bar').css("width", '100%');
				$('.register-form-button .fa-refresh').hide();
				$('.register-form-button .fa-check')
					.css('display', 'inline-block')
					.css('transform', 'scale(1.3)');
				$('.modal-signup').modal({
					backdrop: 'static',
					keyboard: false
				});
			});

		}, 10);

		/////////////////////////////////////////

		function translateToCurrentLanguage(langIso) {
			langIso = typeof langIso !== 'undefined' ? langIso : 'default';
			$http({
				url: 'i18n/' + langIso + '.json',
				method: 'GET'
			}).then(function (response) {
				var translations = response.data;
				applyTranslations(translations);
			}).finally(function () {
				$("body").removeClass("hidden");
			});
		}

		function translatePasswordBullets(langIso) { //If needed to add a new translation - https://translatr.varunmalhotra.xyz/
			langIso = typeof langIso !== 'undefined' ? langIso : 'default';
			$http({
				url: 'i18n/password-translation.json',
				method: 'GET'
			}).then(function (response) {
				var translations = response.data;
				var resultObject = translations.find(function (item) {
					return item.locale == langIso;
				});

				if (typeof resultObject !== 'undefined') {
					var passwordTranslationsArray = resultObject.string.split('. ');
					var passwordTranslation = {
						'Password should be {{passwordMinLength}}-{{passwordMaxLength}} characters long.': passwordTranslationsArray[0],
						'Password should contain at least 1 number.': passwordTranslationsArray[1],
						'Password should contain at least 1 letter.': passwordTranslationsArray[2],
						'Only alphanumeric characters are allowed.': passwordTranslationsArray[3],
						'Password and confirm password does not match.': passwordTranslationsArray[4],
						'New!': passwordTranslationsArray[4],
					};
					applyTranslationsPasswordBullets(passwordTranslation);
				}
			});
		}

		function applyTranslationsPasswordBullets(currentTranslation) {
			window.intgrtn.setOptions({
				forms: {
					signup: {
						fields: {
							password: {
								verboseErrors: {
									enabled: true,
									messages: [
										{
											id: 'passwordRegExpNoSpecialChars',
											text: currentTranslation.hasOwnProperty('Only alphanumeric characters are allowed.') ? currentTranslation['Only alphanumeric characters are allowed.'] : "Only alphanumeric characters are allowed.",
										},
										{
											id: 'password6To12Chars',
											text: currentTranslation.hasOwnProperty('Password should be {{passwordMinLength}}-{{passwordMaxLength}} characters long.') ? currentTranslation['Password should be {{passwordMinLength}}-{{passwordMaxLength}} characters long.'] : "Password should be {{passwordMinLength}}-{{passwordMaxLength}} characters long.",
										},
										{
											id: 'passwordRegExpNumber',
											text: currentTranslation.hasOwnProperty('Password should contain at least 1 number.') ? currentTranslation['Password should contain at least 1 number.'] : "Password should contain at least 1 number.",
										},
										{
											id: 'passwordRegExpLetter',
											text: currentTranslation.hasOwnProperty('Password should contain at least 1 letter.') ? currentTranslation['Password should contain at least 1 letter.'] : "Password should contain at least 1 letter.",
										},
									],
								},
							},
						},
					},
				}
			}, true);
		}

		function applyTranslations(currentTranslation) {
			$("[data-i18n]").each(function() {
				var t = $(this).attr("data-i18n");
				switch ($(this).prop("tagName")) {
					case "INPUT":
						t || (t = $(this).attr("placeholder"));
						$(this).attr("placeholder", currentTranslation[t]);
						break;
					default:
						t || (t = $(this).text()), $(this).text(currentTranslation[t])
				}
			});
			window.intgrtn.setOptions({
				forms: {
					signup: {
						placeholders: {
							firstName: currentTranslation.hasOwnProperty('First Name') ? currentTranslation['First Name'] : "Enter your First Name",
							lastName: currentTranslation.hasOwnProperty('Last Name') ? currentTranslation['Last Name'] : "Enter your Last Name",
							email: currentTranslation.hasOwnProperty('Email') ? currentTranslation['Email'] : "Enter your Email Address",
							areaCode: currentTranslation.hasOwnProperty('Area-Code') ? currentTranslation['Area-Code'] : "Area Code"
						},
						buttons: {
							goToStep2: {
								text: currentTranslation.hasOwnProperty('NEXT') ? currentTranslation['NEXT'] : "NEXT"
							},
							goToStep3: {
								text: currentTranslation.hasOwnProperty('NEXT') ? currentTranslation['NEXT'] : "NEXT"
							},
							submit: {
								text: currentTranslation.hasOwnProperty('GET STARTED NOW') ? currentTranslation['GET STARTED NOW'] : "Get started now"
							},
							generatePassword: {
								show: true,
								text: "Generate",
							},
						},
						fields: {
							firstName: {
								errors: {
									minLength: currentTranslation.hasOwnProperty('first-name-validation-error') ? currentTranslation['first-name-validation-error'] : "First name should be at least 2 characters",
								}
							},
							lastName: {
								errors: {
									minLength: currentTranslation.hasOwnProperty('last-name-validation-error') ? currentTranslation['last-name-validation-error'] : "Last name should be at least 2 characters",
								}
							},
							email: {
								errors: {
									pattern: currentTranslation.hasOwnProperty('email-validation-error') ? currentTranslation['email-validation-error'] : "Email is invalid",
								}
							},
							phone: {
								errors: {
									onlyDigits: currentTranslation.hasOwnProperty('phone-validation-error') ? currentTranslation['phone-validation-error'] : "Phone number should contain only digits",
								}
							},
							passwordConfirm: {
								required: false,
							},
						}
					},
				}
			}, true);
		}

		vm.goToBroker = function () {
			if (window.intgrtn.lookup("signupRequestID", true)) {
				vm.showLoading = true;
				window.intgrtn.goToBrokerLoginUrlBySignupRequestID(window.intgrtn.lookup("signupRequestID", true));
			}
		};
	}
}());
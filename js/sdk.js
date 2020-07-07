(function (window, document, console) {
    if (typeof window.intgrtn !== "undefined") {
        window.intgrtn.sendErrorMessage("Intgrtn script already included.");
        return;
    }

    var projectDetails = null;
    var contactRequestMessages = null;
    var events = [];
    var scriptUrlParser = null;
    if (document.currentScript) {
        scriptUrlParser = document.createElement('a');
        scriptUrlParser.href = document.currentScript.src;
    }
    window.intgrtn = {};
    window.intgrtn.options = {
        server: {
            host: scriptUrlParser ? scriptUrlParser.hostname : "server.getlinked.io",
            endpoint: scriptUrlParser ? "//" + scriptUrlParser.hostname : "//server.getlinked.io",
            ignoreProjectEndpoint: false,
        },
        cookies: {
            path: "/",
        },
        forms: {
            signup: {
                placeholders: {
                    firstName: "First Name",
                    lastName: "Last Name",
                    email: "Email",
                    password: "Password",
                    passwordConfirm: "Confirm Password",
                    phone: "Phone number",
                    areaCode: "Area Code"
                },
                buttons: {
                    goToStep2: {
                        text: "Next"
                    },
                    goToStep3: {
                        text: "Next"
                    },
                    submit: {
                        text: "Register"
                    },
                    generatePassword: {
                        show: false,
                        text: "Generate",
                    },
                },
                onSuccess: {
                    redirectUrl: null,
                    autoRedirect: true,
                    redirectTop: false,
                },
                fields: {
                    firstName: {
                        required: true,
                        minLength: 2,
                        errors: {
                            required: "First name is required.",
                            onlyLetters: "Only letters are allowed.",
                            minLength: "First name should be at least {{firstNameMinLength}} characters.",
                        },
                    },
                    lastName: {
                        required: true,
                        minLength: 2,
                        errors: {
                            required: "Last name is required.",
                            onlyLetters: "Only letters are allowed.",
                            minLength: "Last name should be at least {{lastNameMinLength}} characters.",
                        },
                    },
                    email: {
                        required: true,
                        errors: {
                            required: "Email is required.",
                            pattern: "Email is invalid.",
                        },
                    },
                    areaCode: {
                        required: true,
                        errors: {
                            required: "Area Code is required.",
                            onlyDigits: "Area code should contain only digits.",
                        },
                    },
                    phone: {
                        required: true,
                        errors: {
                            required: "Phone is required.",
                            onlyDigits: "Phone number should contain only digits",
                        },
                    },
                    checkboxAgreeTerms: {
                        show: false,
                        required: true,
                        errors: {
                            required: "The field is required.",
                        },
                    },
                    password: {
                        required: true,
                        errors: {
                            required: "Password is required.",
                            minLength: "Password should be at least {{passwordMinLength}} characters.",
                            maxLength: "Password should be at most {{passwordMaxLength}} characters.",
                            pattern: "Password should contain at least 1 lowercase, 1 uppercase and 1 number without special characters. (Example: 123Asd).",
                        },
                        tooltip: "Password should contain at least 1 lowercase, 1 uppercase and 1 number without special characters. <strong>Example: 123Abc</strong>",
                        minLength: 6,
                        maxLength: 12,
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*[-!$%^&*@#()_+|~=`{}\[\]:";'<>?,.\/\\]).+$/,
                        patternLowercaseLetter: /^.*[a-z]+.*$/,
                        patternUppercaseLetter: /^.*[A-Z]+.*$/,
                        patternNoSpecialChars: /^(?!.*[-!$%^&*@#()_+|~=`{}\[\]:";'<>?,.\/\\]).+$/,
                        patternNumber: /^.*\d+.*$/,
                        patternLetter: /^.*[a-z]|[A-Z]+.*$/,
                        verboseErrors: {
                            enabled: false,
                            messages: [{
                                id: 'password6To12Chars',
                                text: 'Password should be {{passwordMinLength}}-{{passwordMaxLength}} characters long.',
                            },
                            {
                                id: 'passwordRegExp1Lowercase',
                                text: 'Password should contain at least 1 lowercase.',
                            },
                            {
                                id: 'passwordRegExp1Uppercase',
                                text: 'Password should contain at least 1 uppercase.',
                            },
                            {
                                id: 'passwordRegExpNoSpecialChars',
                                text: 'Password should not contain special chars.',
                            },
                            {
                                id: 'passwordRegExpNumber',
                                text: 'Password should contain at least 1 number.',
                            },
                            {
                                id: 'passwordRegExpLetter',
                                text: 'Password should contain at least 1 letter.',
                            },
                            {
                                id: 'passwordConfirmMatch',
                                text: 'Password and confirm password does not match.',
                            }
                            ],
                        },
                    },
                    passwordConfirm: {
                        show: true,
                        required: true,
                        errors: {
                            required: "Confirm password is required.",
                            match: "Password and confirm password does not match.",
                        },
                    },
                    customField: {
                        errors: {
                            required: "{{fieldName}} field is required.",
                        },
                    },
                },
                labels: {
                    checkboxAgreeTerms: "I agree with the terms and conditions",
                },
                steps: {
                    show: true,
                },
                additionalParams: {},
                validateEvents: {
                    eventNameSuffix: "",
                }
            },
            optin: {
                placeholders: {
                    name: "Full Name",
                    firstName: "First Name",
                    lastName: "Last Name",
                    email: "Email",
                    areaCode: "Area Code",
                    phone: "Phone number",
                },
                buttons: {
                    submit: {
                        text: "Register"
                    }
                },
                onSuccess: {
                    redirectUrl: null
                },
                fields: {
                    name: {
                        show: false,
                        required: true,
                        minLength: 2,
                        errors: {
                            required: "Name is required.",
                            minLength: "Name should be at least {{nameMinLength}} characters.",
                        },
                    },
                    customField: {
                        errors: {
                            required: "{{fieldName}} field is required.",
                        },
                    },
                    firstName: {
                        show: true,
                        required: true,
                        minLength: 2,
                        errors: {
                            required: "First name is required.",
                            pattern: "Only letters are allowed.",
                            minLength: "First name should be at least {{firstNameMinLength}} characters.",
                        },
                    },
                    lastName: {
                        show: true,
                        required: true,
                        minLength: 2,
                        errors: {
                            required: "Last name is required.",
                            pattern: "Only letters are allowed.",
                            minLength: "Last name should be at least {{lastNameMinLength}} characters.",
                        },
                    },
                    email: {
                        required: true,
                        errors: {
                            required: "Email is required.",
                            pattern: "Email is invalid.",
                        },
                    },
                    phone: {
                        show: false,
                        required: true,
                        errors: {
                            required: "Phone is required.",
                            onlyDigits: "Phone number should contain only digits.",
                        },
                    },
                },
                validateEvents: {
                    eventNameSuffix: "",
                }
            },
            contactUs: {
                mode: "contact", //contact, abuse
                placeholders: {
                    firstName: "First Name",
                    lastName: "Last Name",
                    email: "Email",
                    type: "Type",
                    subject: "Subject",
                    message: "Message",
                },
                buttons: {
                    submit: {
                        text: "Send"
                    }
                },
                fields: {
                    type: {
                        value: null
                    }
                }
            },
        },
        tables: {
            brokers: {
                columns: {
                    advertiserLogo: {
                        title: "Advertiser",
                        property: "advertiserLogo"
                    },
                    custom1: {
                        title: "Custom1",
                        property: "custom1"
                    },
                    custom2: {
                        title: "Custom2",
                        property: "custom2"
                    },
                    custom3: {
                        title: "Custom3",
                        property: "custom3"
                    },
                    custom4: {
                        title: "Custom4",
                        property: "custom4"
                    },
                    custom5: {
                        title: "Custom5",
                        property: "custom5"
                    },
                    link: {
                        title: "Link",
                        property: "link"
                    }
                }
            }
        },
        agreements: {
            type: null
        },
        contactRequestMessagesLayout: {
            placeholders: {
                newMessage: "Write Message ..."
            },
            buttons: {
                submit: {
                    text: "REPLY"
                }
            },
        },
        exitPopup: {
            modal: null,
            url: null,
            html: null,
            showLimit: null,
            delayInterval: null,
            disableUntilScroll: null,
            preloadUrl: null,
            disableClose: false,
            disabled: null,
        },
        cookiePopup: {
            text: "This website uses cookies to ensure you get the best experience on our website. ",
            buttons: {
                learnMore: {
                    text: "Learn More",
                },
                accept: {
                    text: "Got It!",
                },
            },
        },
        initializedEvent: {
            name: "intgrtn-initialized",
        },
    };

    window.intgrtn.getVersion = function () {
        return "2.52.2";
    };
    window.intgrtn.setOptions = function (options, reGenerateDataTags) {
        if (!options) {
            options = {};
        }
        if (typeof reGenerateDataTags === "undefined") {
            reGenerateDataTags = true;
        }
        window.intgrtn.options = window.intgrtn.merge(window.intgrtn.options, options);
        if (reGenerateDataTags) {
            window.intgrtn.destroyDataTags();
            window.intgrtn.parseDataTags();
        }

        window.intgrtn.events.trigger("set.options.success", options, reGenerateDataTags);
    };
    window.intgrtn.sendErrorMessage = function (message) {
        console.error("Intgrtn: " + message);

        return window.intgrtn;
    };
    window.intgrtn.getSelectValues = function (dropdown) {
        let result = [];
        let options = dropdown && dropdown.options;

        for (var i = 0, iLen = options.length; i < iLen; i++) {
            let opt = options[i];

            if (opt.selected) {
                result.push(opt.value || opt.text);
            }
        }
        return result;
    };
    window.intgrtn.loadjscssfile = function (filename, filetype) {
        var fileref = null;
        if (filetype === "js") {
            fileref = document.createElement('script');
            fileref.setAttribute("class", "intgrtn-asset");
            fileref.setAttribute("type", "text/javascript");
            fileref.setAttribute("src", filename);
        } else if (filetype === "css") {
            fileref = document.createElement("link");
            fileref.setAttribute("class", "intgrtn-asset");
            fileref.setAttribute("rel", "stylesheet");
            fileref.setAttribute("type", "text/css");
            fileref.setAttribute("href", filename);
        }
        if (fileref !== null) {
            document.getElementsByTagName("head")[0].appendChild(fileref);
        }
    };

    /* verbosePasswordRequirementsMessages */
    window.intgrtn.getFormSignupPasswordVerboseErrorMessageById = function (id) {
        var result;
        for (var i = 0; i < window.intgrtn.options.forms.signup.fields.password.verboseErrors.messages.length; i++) {
            if (window.intgrtn.options.forms.signup.fields.password.verboseErrors.messages[i].id == id) {
                result = window.intgrtn.options.forms.signup.fields.password.verboseErrors.messages[i];
            }
        }
        return result;
    };


    /* Cookies  */
    window.intgrtn.cookies = {};
    window.intgrtn.cookies.set = function (name, value, days, path) {
        var expires = "";
        if (typeof path === "undefined") {
            path = window.intgrtn.options.cookies.path;
        }
        if (typeof value === "undefined" || value === null) {
            value = "";
        }
        if (typeof value !== "string" && typeof value.toString === "function") {
            value = value.toString();
        }
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=" + path;

        return window.intgrtn;
    };
    window.intgrtn.cookies.get = function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    };
    window.intgrtn.cookies.getAll = function (name) {
        var pairs = document.cookie.split(";");
        var cookies = [];
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split("=");
            var item = {};
            item.name = (pair[0] + '').trim();
            item.value = unescape(pair.slice(1).join('='));
            cookies.push(item);
        }
        return cookies;
    };
    window.intgrtn.cookies.delete = function (name) {
        document.cookie = name + '=; Max-Age=-99999999;';

        return window.intgrtn;
    };
    /* END Cookies  */

    /* Events  */
    window.intgrtn.events = {};
    window.intgrtn.events.on = function (name, callback) {
        if (!name) {
            window.intgrtn.sendErrorMessage("Enter event name.");
        }
        if (typeof callback !== "function") {
            window.intgrtn.sendErrorMessage("Enter callback must be function.");
        }

        events.push({
            "name": name,
            "callback": callback
        });
    };
    window.intgrtn.events.trigger = function (name) {
        if (!name) {
            window.intgrtn.sendErrorMessage("Enter event name.");
        }
        var args = Array.prototype.slice.call(arguments);
        args = [].slice.call(arguments);
        args.shift();

        events.forEach(function (event) {
            if (event.name === name) {
                event.callback.apply(null, args);
            }
        });
    };
    /* END Events  */

    window.intgrtn.elements = {};
    window.intgrtn.elements.find = function (selector, element) {
        if (typeof element === "undefined") {
            element = document;
        }
        if (typeof selector === "string") {
            return Array.prototype.slice.call(element.querySelectorAll(selector));
        } else if (typeof selector instanceof Array) {
            return selector;
        } else if (typeof selector === "object") {
            return [selector];
        }
        return [];
    };
    window.intgrtn.elements.findFirst = function (selector, element) {
        if (typeof element === "undefined") {
            element = document;
        }
        if (typeof selector === "string") {
            return element.querySelector(selector);
        } else if (typeof selector instanceof Array && selector[0]) {
            return selector[0];
        } else if (typeof selector === "object") {
            return selector;
        }
        return null;
    };
    window.intgrtn.elements.addClass = function (selector, classString) {
        if (classString) {
            window.intgrtn.elements.find(selector).forEach(function (element) {
                element.classList.add(classString);
            });
        }
        return window.intgrtn;
    };
    window.intgrtn.elements.removeClass = function (selector, classString) {
        if (classString) {
            window.intgrtn.elements.find(selector).forEach(function (element) {
                element.classList.remove(classString);
            });
        }
        return window.intgrtn;
    };
    window.intgrtn.elements.hasClass = function (selector, classString) {
        if (classString) {
            var element = window.intgrtn.elements.findFirst(selector);
            if (element.classList.contains(classString)) {
                return true;
            }
        }
        return false;
    };
    window.intgrtn.elements.setAttribute = function (selector, name, value) {
        if (!value) {
            value = "";
        }
        if (name) {
            window.intgrtn.elements.find(selector).forEach(function (element) {
                element.setAttribute(name, value);
            });
        }
        return window.intgrtn;
    };
    window.intgrtn.elements.removeAttribute = function (selector, name) {
        window.intgrtn.elements.find(selector).forEach(function (element) {
            element.removeAttribute(name);
        });
        return window.intgrtn;
    };
    window.intgrtn.elements.getHtml = function (selector) {
        var html = null;
        if (window.intgrtn.elements.findFirst(selector)) {
            html = window.intgrtn.elements.findFirst(selector).innerHTML;
        }
        return html;
    };
    window.intgrtn.elements.setHtml = function (selector, html) {
        if (!html) {
            html = "";
        }
        window.intgrtn.elements.find(selector).forEach(function (element) {
            element.innerHTML = "";
            window.intgrtn.elements.appendChild(element, html);
        });
        return window.intgrtn;
    };
    window.intgrtn.elements.appendChild = function (selector, html) {
        if (!html) {
            html = "";
        }
        window.intgrtn.elements.find(selector).forEach(function (element) {
            if (typeof html === "string") {
                element.innerHTML = element.innerHTML + html;
            } else if (typeof html === "object") {
                element.appendChild(html);
            }
        });
        return window.intgrtn;
    };
    window.intgrtn.elements.prepend = function (selector, html) {
        if (!html) {
            html = "";
        }
        window.intgrtn.elements.find(selector).forEach(function (element) {
            if (typeof html === "string") {
                element.innerHTML = html + element.innerHTML;
            } else if (typeof html === "object") {
                element.prepend(html);
            }
        });
        return window.intgrtn;
    };
    window.intgrtn.elements.remove = function (selector) {
        window.intgrtn.elements.find(selector).forEach(function (element) {
            element.parentNode.removeChild(element);
        });
        return window.intgrtn;
    };
    window.intgrtn.elements.create = function (tag, content, attributes) {
        if (typeof content === "undefined") {
            content = "";
        }
        if (typeof attributes === "undefined") {
            attributes = [];
        }
        var newElement = document.createElement(tag);
        newElement.innerHTML = content;

        Object.keys(attributes).forEach(function (key) {
            window.intgrtn.elements.setAttribute(newElement, key, attributes[key]);
        });

        return newElement;
    };
    window.intgrtn.elements.trigger = function (element, eventName) {
        var event = new Event(eventName, {
            'bubbles': true,
            'cancelable': true
        });

        element.dispatchEvent(event);
        return window.intgrtn;
    };
    window.intgrtn.elements.on = function (selector, event, callback) {
        if (typeof callback === "undefined") {
            callback = function () { };
        }
        window.intgrtn.elements.find(selector).forEach(function (element) {
            element.addEventListener(event, callback);
        });
        return window.intgrtn;
    };
    window.intgrtn.elements.off = function (selector, event, callback) {
        if (typeof callback === "undefined") {
            callback = function () { };
        }
        window.intgrtn.elements.find(selector).forEach(function (element) {
            element.removeEventListener(event, callback);
        });
        return window.intgrtn;
    };

    window.intgrtn.mapCustomFieldsInputsToCustomFieldParams = function (customFieldsInputs) {
        let customFieldParams = [];
        customFieldsInputs.forEach(function (customInput) {
            let value = null;
            if (customInput.getAttribute("data-field-type") == 4) {
                value = window.intgrtn.getSelectValues(customInput);
            } else {
                value = customInput.value.trim();
            }
            let newCustomObject = {
                "value": value,
                "fieldType": customInput.getAttribute("data-field-type"),
                "userCustomFieldID": customInput.getAttribute("data-user-custom-field-id"),
            };
            customFieldParams.push(newCustomObject);
        });
        return customFieldParams;
    };

    /**
     * Generate Custom Fields
     * @param customFields
     */
    window.intgrtn.generateCustomFields = function (customFields) {
        var elements = [];
        // iterate , generate and add
        customFields.forEach(function (custom) {
            // building holder div
            var customFieldHolder = window.intgrtn.elements.create("div", "", {
                "class": "intgrtn-input-holder intgrtn-input-holder-custom-field intgrtn-input-holder-" + custom.userCustomFieldID,
            });
            // building input
            switch (custom.fieldType) {
                case 1:
                    // Text
                    var customFieldInput = window.intgrtn.elements.create("input", "", {
                        "class": "intgrtn-input",
                        "type": "text",
                        "name": custom.name,
                        "placeholder": custom.name,
                        "value": custom.defaultValue,
                        "data-field-type": custom.fieldType,
                        "data-user-custom-field-id": custom.userCustomFieldID
                    });
                    if (custom.isRequired === 1) {
                        customFieldInput.setAttribute("required", "");
                    }
                    break;
                case 2:
                    // Number
                    var customFieldInput = window.intgrtn.elements.create("input", "", {
                        "class": "intgrtn-input",
                        "type": "number",
                        "name": custom.name,
                        "placeholder": custom.name,
                        "value": custom.defaultValue,
                        "data-field-type": custom.fieldType,
                        "data-user-custom-field-id": custom.userCustomFieldID
                    });
                    if (custom.isRequired === 1) {
                        customFieldInput.setAttribute("required", "");
                    }
                    break;
                case 3:
                    // Dropdown
                    var customFieldInput = window.intgrtn.elements.create("select", "", {
                        "class": "intgrtn-select",
                        "name": custom.name,
                        "placeholder": custom.name,
                        "value": custom.defaultValue,
                        "data-field-type": custom.fieldType,
                        "data-user-custom-field-id": custom.userCustomFieldID
                    });

                    custom.dropdown.forEach(function (dropdownOption) {
                        // build option attributes
                        var dropdownOptionOptions = {
                            "value": dropdownOption.value,
                        };
                        // check and mark as defalt value
                        if (dropdownOption.isDefault === 1) {
                            dropdownOptionOptions.selected = "selected";
                        }
                        // create new select option
                        var option = window.intgrtn.elements.create("option", dropdownOption.name, dropdownOptionOptions);
                        // insert new option in select
                        window.intgrtn.elements.appendChild(customFieldInput, option);
                    });

                    if (custom.isRequired === 1) {
                        customFieldInput.setAttribute("required", "");
                    }
                    break;
                case 4:
                    // Dropdown Multiselect
                    var customFieldInput = window.intgrtn.elements.create("select", "", {
                        "class": "intgrtn-select",
                        "name": custom.name,
                        "placeholder": custom.name,
                        "value": custom.defaultValue,
                        "multiple": "true",
                        "data-field-type": custom.fieldType,
                        "data-user-custom-field-id": custom.userCustomFieldID
                    });

                    custom.dropdown.forEach(function (dropdownOption) {
                        // build option attributes
                        var dropdownOptionOptions = {
                            "value": dropdownOption.value,
                        };
                        // check and mark as defalt value
                        if (dropdownOption.isDefault === 1) {
                            dropdownOptionOptions.selected = "selected";
                        }
                        // create new select option
                        var option = window.intgrtn.elements.create("option", dropdownOption.name, dropdownOptionOptions);
                        // insert new option in select
                        window.intgrtn.elements.appendChild(customFieldInput, option);
                    });

                    if (custom.isRequired === 1) {
                        customFieldInput.setAttribute("required", "");
                    }
                    break;
                case 5:
                    // Text Area
                    var customFieldInput = window.intgrtn.elements.create("textarea", custom.defaultValue, {
                        "class": "intgrtn-textarea",
                        "name": custom.name,
                        "placeholder": custom.name,
                        "data-field-type": custom.fieldType,
                        "data-user-custom-field-id": custom.userCustomFieldID
                    });
                    if (custom.isRequired === 1) {
                        customFieldInput.setAttribute("required", "");
                    }
                    break;
            }
            // insert into form
            window.intgrtn.elements.appendChild(customFieldHolder, customFieldInput);
            elements.push(customFieldHolder);
        });

        return elements;
    };

    /**
     *
     * @param string html
     * @returns Array
     */
    window.intgrtn.elements.parseHTML = function (html) {
        var container = document.createElement("div");
        container.innerHTML = html;
        var scripts = window.intgrtn.elements.find("script", container);

        scripts.forEach(function (script) {
            var newScript = document.createElement("script");
            if (script.src) {
                newScript.src = script.src;
            }
            if (script.innerHTML) {
                newScript.innerHTML = script.innerHTML;
            }
            script.parentNode.replaceChild(newScript, script);
        });
        return Array.prototype.slice.call(container.childNodes);
    };
    window.intgrtn.elements.getOffset = function (selector) {
        var element = window.intgrtn.elements.findFirst(selector);
        if (!element) {
            return null;
        }

        var bodyRect = document.body.getBoundingClientRect();
        var elemRect = element.getBoundingClientRect();
        var y = elemRect.top - bodyRect.top;
        var x = elemRect.left - bodyRect.left;

        return {
            top: y,
            left: x
        };
    };
    window.intgrtn.getQueryParameters = function () {
        var query = window.location.search.substring(1);
        var parameters = query.split('&');
        var result = {};
        parameters.forEach(function (parameter) {
            var pair = parameter.split('=');
            if (pair[0].indexOf("[") === -1 || pair[0].indexOf("[]") !== -1) {
                pair[0] = pair[0].replace("[").replace("]");
                if (typeof result[pair[0]] == "undefined") {
                    result[pair[0]] = decodeURIComponent(pair[1]);
                } else {
                    if (typeof result[pair[0]] != 'array') {
                        result[pair[0]] = [result[pair[0]]];
                    }
                    result[pair[0]].push(decodeURIComponent(pair[1]));
                }
            } else {
                var regex = /(.*)\[(.*?)\]/mg
                var regexResult = regex.exec(pair[0]);
                if (typeof result[regexResult[1]] == "undefined") {
                    result[regexResult[1]] = {};
                }
                if (regexResult[2]) {
                    result[regexResult[1]][regexResult[2]] = decodeURIComponent(pair[1]);
                }
            }
        });

        return result;
    };
    window.intgrtn.getParameter = function (name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
    window.intgrtn.store = function (name, value, days) {
        if (!name) {
            throw new Error("Store name can't be empty.");
        }
        if (!days) {
            days = 365;
        }
        if (typeof value == "undefined") {
            throw new Error("Store value can't be undefined.");
        }

        window.intgrtn.cookies.set("intgrtn_" + name, value, days);

        return window.intgrtn;
    };

    window.intgrtn.lookup = function (name, checkCookie, defaultValue, prefix) {
        if (!name) {
            throw new Error("Lookup name can't be empty.");
        }
        if (typeof defaultValue === "undefined") {
            defaultValue = null;
        }
        if (typeof checkCookie === "undefined") {
            checkCookie = true;
        }
        if (typeof prefix === "undefined") {
            prefix = "intgrtn_";
        }

        if (window.intgrtn.getParameter(prefix + name)) {
            if (checkCookie) {
                window.intgrtn.store(name, window.intgrtn.getParameter(prefix + name));
            }
            return window.intgrtn.getParameter(prefix + name);
        }

        if (checkCookie && window.intgrtn.cookies.get(prefix + name)) {
            return window.intgrtn.cookies.get(prefix + name);
        }

        return defaultValue;
    };
    window.intgrtn.ajax = function (options) {
        if (typeof options === "undefined") {
            options = {};
        }
        if (!options.url) {
            options.url = null;
        }
        if (!options.method) {
            options.method = "GET";
        }
        if (!options.data) {
            options.data = {};
        }
        if (!options.onSuccess) {
            options.onSuccess = function () { };
        }
        if (!options.onError) {
            options.onError = function () { };
        }

        if (options.method == "GET") {
            if (options.url.indexOf("?") === -1) {
                options.url += "?";
            }
            for (var key in options.data) {
                var item = options.data[key];
                options.url += "&" + key + "=" + encodeURIComponent(item);
            }
        }

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === XMLHttpRequest.DONE) { // XMLHttpRequest.DONE == 4
                var response = xmlhttp.responseText;
                if (xmlhttp.getResponseHeader("Content-Type") === "application/json") {
                    response = JSON.parse(xmlhttp.responseText);
                }
                if ([200, 201].indexOf(xmlhttp.status) !== -1) {
                    options.onSuccess(response, xmlhttp.status);
                } else {
                    options.onError(response, xmlhttp.status);
                }
            }
        };
        xmlhttp.open(options.method, options.url, true);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify(options.data));
    };
    window.intgrtn.copy = function (data) {
        return Object.assign({}, data);
    };
    window.intgrtn.merge = function (obj1, obj2) {
        var obj1 = window.intgrtn.copy(obj1);
        var obj2 = window.intgrtn.copy(obj2);
        for (var p in obj2) {
            try {
                if (obj2[p].constructor == Object) {
                    obj1[p] = window.intgrtn.merge(obj1[p], obj2[p]);
                } else {
                    obj1[p] = obj2[p];
                }
            } catch (e) {
                obj1[p] = obj2[p];
            }
        }
        return obj1;
    };
    window.intgrtn.parseQuery = function (queryString) {
        var query = {};
        if (!queryString) {
            return query;
        }
        var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split('=');
            if (!decodeURIComponent(pair[0])) {
                continue;
            }
            query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        }
        return query;
    }

    window.intgrtn.getBrokerLoginDetails = function (data, onSuccess, onError) {
        if (typeof onSuccess === "undefined") {
            onSuccess = function () { };
        }
        if (typeof onError === "undefined") {
            onError = function () { };
        }
        if (!data.signupID && window.intgrtn.lookup("signupRequestID", true)) {
            data.signupID = window.intgrtn.lookup("signupRequestID", true);
        }
        window.intgrtn.ajax({
            url: window.intgrtn.options.server.endpoint + "/api/v1/brokers/login/details.php",
            method: "GET",
            data: data,
            onSuccess: onSuccess,
            onError: onError,
        });
    };
    window.intgrtn.sendSignupRequest = function (data, onSuccess, onError, options) {
        if (typeof onSuccess === "undefined") {
            onSuccess = function () { };
        }
        if (typeof onError === "undefined") {
            onError = function () { };
        }
        if (typeof options === "undefined") {
            options = {};
        }
        var defaultOptions = {
            eventNameSuffix: window.intgrtn.options.forms.signup.validateEvents.eventNameSuffix,
        };
        var exitPopupDisabled = window.intgrtn.options.exitPopup.disabled;
        window.intgrtn.options.exitPopup.disabled = true;

        options = window.intgrtn.merge(defaultOptions, options);

        window.intgrtn.events.trigger("send.signup.request", data);

        window.intgrtn.ajax({
            url: window.intgrtn.options.server.endpoint + "/api/v1/signups/add.php",
            method: "POST",
            data: data,
            onSuccess: function () {
                var $this = this;
                var $arguments = arguments;
                window.intgrtn.fireEvent({
                    name: "intgrtn-form-signup-success" + options.eventNameSuffix,
                }, function () {
                    onSuccess.apply($this, $arguments);
                    window.intgrtn.events.trigger("send.signup.request.success", data);
                }, function () {
                    onSuccess.apply($this, $arguments);
                    window.intgrtn.events.trigger("send.signup.request.success", data);
                });
            },
            onError: function () {
                window.intgrtn.options.exitPopup.disabled = exitPopupDisabled;
                onError.apply(this, arguments);
                window.intgrtn.events.trigger("send.signup.request.error", data);
            },
        });
    };
    window.intgrtn.sendContactUsRequest = function (data, onSuccess, onError) {
        if (typeof onSuccess === "undefined") {
            onSuccess = function () { };
        }
        if (typeof onError === "undefined") {
            onError = function () { };
        }
        window.intgrtn.ajax({
            url: window.intgrtn.options.server.endpoint + "/api/v1/contacts/requests/add.php",
            method: "POST",
            data: data,
            onSuccess: onSuccess,
            onError: onError,
        });
    };

    window.intgrtn.sendContactRequestMessageRequest = function (data, onSuccess, onError) {
        if (typeof onSuccess === "undefined") {
            onSuccess = function () { };
        }
        if (typeof onError === "undefined") {
            onError = function () { };
        }

        window.intgrtn.ajax({
            url: window.intgrtn.options.server.endpoint + "/api/v1/contacts/requests/messages/add.php",
            method: "POST",
            data: data,
            onSuccess: onSuccess,
            onError: onError,
        });

    };

    window.intgrtn.sendOptinRequest = function (data, onSuccess, onError) {
        if (typeof onSuccess === "undefined") {
            onSuccess = function () { };
        }
        if (typeof onError === "undefined") {
            onError = function () { };
        }
        if (!data.firstName && window.intgrtn.lookup("firstName", true)) {
            data.firstName = window.intgrtn.lookup("firstName", true);
        }
        if (!data.lastName && window.intgrtn.lookup("lastName", true)) {
            data.lastName = window.intgrtn.lookup("lastName", true);
        }
        if (!data.email && window.intgrtn.lookup("email", true)) {
            data.email = window.intgrtn.lookup("email", true);
        }
        if (!data.areaCode && window.intgrtn.lookup("areaCode", true)) {
            data.areaCode = window.intgrtn.lookup("areaCode", true);
        }
        if (!data.phone && window.intgrtn.lookup("phone", true)) {
            data.phone = window.intgrtn.lookup("phone", true);
        }
        if (!data.clickID && window.intgrtn.lookup("clickID", true)) {
            data.clickID = window.intgrtn.lookup("clickID", true);
        }
        if (!data.ip && window.intgrtn.lookup("ip", true)) {
            data.ip = window.intgrtn.lookup("ip", true);
        }
        if (!data.custom && window.intgrtn.lookup("custom", true)) {
            data.custom = window.intgrtn.lookup("custom", true);
        }
        if (!data.custom1 && window.intgrtn.lookup("custom1", true)) {
            data.custom1 = window.intgrtn.lookup("custom1", true);
        }
        if (!data.custom2 && window.intgrtn.lookup("custom2", true)) {
            data.custom2 = window.intgrtn.lookup("custom2", true);
        }
        if (!data.custom3 && window.intgrtn.lookup("custom3", true)) {
            data.custom3 = window.intgrtn.lookup("custom3", true);
        }
        if (!data.custom4 && window.intgrtn.lookup("custom4", true)) {
            data.custom4 = window.intgrtn.lookup("custom4", true);
        }
        if (!data.custom5 && window.intgrtn.lookup("custom5", true)) {
            data.custom5 = window.intgrtn.lookup("custom5", true);
        }
        if (!data.isTest && window.intgrtn.lookup("isTest", true)) {
            data.isTest = window.intgrtn.lookup("isTest", true);
        }

        window.intgrtn.events.trigger("send.optin.request", data);

        window.intgrtn.ajax({
            url: window.intgrtn.options.server.endpoint + "/api/v1/optins/add.php",
            method: "POST",
            data: data,
            onSuccess: function () {
                onSuccess.apply(this, arguments);
                window.intgrtn.events.trigger("send.optin.request.success", data);
            },
            onError: function () {
                onError.apply(this, arguments);
                window.intgrtn.events.trigger("send.optin.request.error", data);
            },
        });
    };
    window.intgrtn.sendAddClickRequest = function (data, onSuccess, onError) {
        if (typeof onSuccess === "undefined") {
            onSuccess = function () { };
        }
        if (typeof onError === "undefined") {
            onError = function () { };
        }
        if (!data.ip && window.intgrtn.lookup("ip", true)) {
            data.ip = window.intgrtn.lookup("ip", true);
        }
        if (!data.custom && window.intgrtn.lookup("custom", true)) {
            data.custom = window.intgrtn.lookup("custom", true);
        }
        if (!data.custom1 && window.intgrtn.lookup("custom1", true)) {
            data.custom1 = window.intgrtn.lookup("custom1", true);
        }
        if (!data.custom2 && window.intgrtn.lookup("custom2", true)) {
            data.custom2 = window.intgrtn.lookup("custom2", true);
        }
        if (!data.custom3 && window.intgrtn.lookup("custom3", true)) {
            data.custom3 = window.intgrtn.lookup("custom3", true);
        }
        if (!data.custom4 && window.intgrtn.lookup("custom4", true)) {
            data.custom4 = window.intgrtn.lookup("custom4", true);
        }
        if (!data.custom5 && window.intgrtn.lookup("custom5", true)) {
            data.custom5 = window.intgrtn.lookup("custom5", true);
        }
        if (!data.isTest && window.intgrtn.lookup("isTest", true)) {
            data.isTest = window.intgrtn.lookup("isTest", true);
        }
        if (!data.testEnvironmentToken && window.intgrtn.lookup("testEnvironmentToken", true)) {
            data.testEnvironmentToken = window.intgrtn.lookup("testEnvironmentToken", true);
        }
        window.intgrtn.ajax({
            url: window.intgrtn.options.server.endpoint + "/api/v1/clicks/add.php",
            method: "POST",
            data: data,
            onSuccess: onSuccess,
            onError: onError,
        });
    };
    window.intgrtn.getAgreement = function (data, onSuccess, onError) {
        if (typeof data === "undefined") {
            data = {};
        }
        if (typeof onSuccess === "undefined") {
            onSuccess = function () { };
        }
        if (typeof onError === "undefined") {
            onError = function () { };
        }

        var clickID = "";
        if (window.intgrtn.lookup("clickID", true)) {
            clickID = "&clickID=" + window.intgrtn.lookup("clickID", true);
        }

        window.intgrtn.ajax({
            url: window.intgrtn.options.server.endpoint + "/api/v1/projects/agreements.php?type=" + data.type + clickID,
            method: "GET",
            onSuccess: onSuccess,
            onError: onError
        });
    };
    window.intgrtn.getBrokers = function (data, onSuccess, onError) {
        if (typeof onSuccess === "undefined") {
            onSuccess = function () { };
        }
        if (typeof onError === "undefined") {
            onError = function () { };
        }

        var clickID = "";
        if (window.intgrtn.lookup("clickID", true)) {
            clickID = "&clickID=" + window.intgrtn.lookup("clickID", true);
        }
        var ip = "";
        if (window.intgrtn.lookup("ip", true)) {
            ip = "&ip=" + window.intgrtn.lookup("ip", true);
        }

        window.intgrtn.ajax({
            url: window.intgrtn.options.server.endpoint + "/api/v1/brokers/locations/current.php?" + clickID + ip,
            method: "GET",
            onSuccess: onSuccess,
            onError: onError
        });
    };
    window.intgrtn.getProjectDetails = function (onSuccess, onError) {
        if (typeof onSuccess === "undefined") {
            onSuccess = function () { };
        }
        if (typeof onError === "undefined") {
            onError = function () { };
        }

        var ip = "";
        if (window.intgrtn.lookup("ip", true)) {
            ip = "&ip=" + window.intgrtn.lookup("ip", true);
        }
        var clickID = "";
        if (window.intgrtn.lookup("clickID", true)) {
            clickID = "&clickID=" + window.intgrtn.lookup("clickID", true);
        }
        var custom = "";
        if (window.intgrtn.lookup("custom", true)) {
            custom = "&custom=" + encodeURIComponent(window.intgrtn.lookup("custom", true));
        }
        var custom1 = "";
        if (window.intgrtn.lookup("custom1", true)) {
            custom1 = "&custom1=" + encodeURIComponent(window.intgrtn.lookup("custom1", true));
        }
        var custom2 = "";
        if (window.intgrtn.lookup("custom2", true)) {
            custom2 = "&custom2=" + encodeURIComponent(window.intgrtn.lookup("custom2", true));
        }
        var custom3 = "";
        if (window.intgrtn.lookup("custom3", true)) {
            custom3 = "&custom3=" + encodeURIComponent(window.intgrtn.lookup("custom3", true));
        }
        var custom4 = "";
        if (window.intgrtn.lookup("custom4", true)) {
            custom4 = "&custom4=" + encodeURIComponent(window.intgrtn.lookup("custom4", true));
        }
        var custom5 = "";
        if (window.intgrtn.lookup("custom5", true)) {
            custom5 = "&custom5=" + encodeURIComponent(window.intgrtn.lookup("custom5", true));
        }

        var url = "&url=" + encodeURIComponent(window.location.href);

        if (projectDetails !== null) {
            onSuccess(projectDetails);
        } else {
            window.intgrtn.ajax({
                url: window.intgrtn.options.server.endpoint + "/api/v1/projects/details.php?" +
                    ip +
                    clickID +
                    custom +
                    custom1 +
                    custom2 +
                    custom3 +
                    custom4 +
                    custom5 +
                    url,
                method: "GET",
                onSuccess: function (response) {
                    projectDetails = response;
                    onSuccess(response);
                },
                onError: onError
            });
        }
    };

    window.intgrtn.getContactRequestMessages = function (data, onSuccess, onError) {
        if (typeof onSuccess === "undefined") {
            data = {};
        }
        if (typeof onSuccess === "undefined") {
            onSuccess = function () { };
        }
        if (typeof onError === "undefined") {
            onError = function () { };
        }

        var contactRequestHash = "";
        if (data.contactRequestHash) {
            contactRequestHash = "&contactRequestHash=" + encodeURIComponent(data.contactRequestHash);
        }

        if (contactRequestMessages !== null) {
            onSuccess(contactRequestMessages);
        } else {
            window.intgrtn.ajax({
                url: window.intgrtn.options.server.endpoint + "/api/v1/contacts/requests/messages.php?" + contactRequestHash,
                method: "GET",
                onSuccess: function (response) {
                    contactRequestMessages = response;
                    onSuccess(response);
                },
                onError: onError
            });
        }
    };

    window.intgrtn.getCurrentLocation = function (onSuccess, onError) {
        if (typeof onSuccess === "undefined") {
            onSuccess = function () { };
        }
        if (typeof onError === "undefined") {
            onError = function () { };
        }

        var ip = "";
        if (window.intgrtn.lookup("ip", true)) {
            ip = "&ip=" + window.intgrtn.lookup("ip", true);
        }
        var clickID = "";
        if (window.intgrtn.lookup("clickID", true)) {
            clickID = "&clickID=" + window.intgrtn.lookup("clickID", true);
        }

        window.intgrtn.ajax({
            url: window.intgrtn.options.server.endpoint + "/api/v1/locations/current.php?" + ip + clickID,
            method: "GET",
            onSuccess: onSuccess,
            onError: onError
        });
    };
    window.intgrtn.getCountryRestrictions = function (onSuccess, onError) {
        if (typeof onSuccess === "undefined") {
            onSuccess = function () { };
        }
        if (typeof onError === "undefined") {
            onError = function () { };
        }

        var clickID = "";
        if (window.intgrtn.lookup("clickID", true)) {
            clickID = "&clickID=" + window.intgrtn.lookup("clickID", true);
        }

        window.intgrtn.ajax({
            url: window.intgrtn.options.server.endpoint + "/api/v1/projects/countries/restrictions.php?" + clickID,
            method: "GET",
            onSuccess: onSuccess,
            onError: onError
        });
    };
    window.intgrtn.getPostbacks = function (data, onSuccess, onError) {
        if (typeof data === "undefined") {
            data = {};
        }
        if (typeof onSuccess === "undefined") {
            onSuccess = function () { };
        }
        if (typeof onError === "undefined") {
            onError = function () { };
        }
        if (!data.type) {
            data.type = "";
        }
        if (!data.signupRequestID) {
            data.signupRequestID = window.intgrtn.lookup("signupRequestID", true, "");
        }

        var clickID = "";
        if (window.intgrtn.lookup("clickID", true)) {
            clickID = "&clickID=" + window.intgrtn.lookup("clickID", true);
        }
        var ip = "";
        if (window.intgrtn.lookup("ip", true)) {
            ip = "&ip=" + window.intgrtn.lookup("ip", true);
        }

        window.intgrtn.ajax({
            url: window.intgrtn.options.server.endpoint + "/api/v1/projects/postbacks.php?signupRequestID=" + data.signupRequestID + "&type=" + data.type + clickID + ip,
            method: "GET",
            onSuccess: onSuccess,
            onError: onError
        });
    };
    window.intgrtn.firePostbacks = function (data, onSuccess, onError) {
        if (typeof data === "undefined") {
            data = {};
        }
        if (!data.type) {
            data.type = "";
        }
        if (!data.signupRequestID) {
            data.signupRequestID = window.intgrtn.lookup("signupRequestID", true, "");
        }
        if (typeof onSuccess === "undefined") {
            onSuccess = function () { };
        }
        if (typeof onError === "undefined") {
            onError = function () { };
        }
        var postbacks = window.intgrtn.getPostbacks({
            type: data.type,
            signupRequestID: data.signupRequestID,
        }, function (response) {
            response.data.items.forEach(function (postback) {
                window.intgrtn.elements.parseHTML(postback.url).forEach(function (node) {
                    window.intgrtn.elements.appendChild("body", node);
                });
            });
            setTimeout(function () {
                onSuccess(response);
            }, 5000);
        }, onError);
    };
    window.intgrtn.firePostbacksBySignupRequestResponse = function (response, onSuccess, onError) {
        if (typeof onSuccess === "undefined") {
            onSuccess = function () { };
        }
        if (typeof onError === "undefined") {
            onError = function () { };
        }
        if (response.data && response.data.postbacks && response.data.postbacks.length > 0) {
            response.data.postbacks.forEach(function (postback) {
                window.intgrtn.elements.parseHTML(postback.url).forEach(function (node) {
                    window.intgrtn.elements.appendChild("body", node);
                });
            });
            setTimeout(function () {
                onSuccess();
            }, 5000);
        } else {
            onSuccess();
        }
    };
    window.intgrtn.fireOptinCliendSidePostbacksByOptinResponse = function (response, onSuccess, onError) {
        if (typeof onSuccess === "undefined") {
            onSuccess = function () { };
        }
        if (typeof onError === "undefined") {
            onError = function () { };
        }
        if (response.data && response.data.postbacks && response.data.postbacks.length > 0) {
            response.data.postbacks.forEach(function (postback) {
                window.intgrtn.elements.parseHTML(postback.url).forEach(function (node) {
                    window.intgrtn.elements.appendChild("body", node);
                });
            });
            setTimeout(function () {
                onSuccess();
            }, 5000);
        } else {
            onSuccess();
        }
    };
    window.intgrtn.fireEvent = function (data, onSuccess, onError) {
        if (typeof data === "undefined") {
            data = {};
        }
        if (!data.name) {
            throw new Error("Enter event name.");
        }
        if (!data.clickID && window.intgrtn.lookup("clickID", true)) {
            data.clickID = window.intgrtn.lookup("clickID", true);
        }
        if (!data.ip && window.intgrtn.lookup("ip", true)) {
            data.ip = window.intgrtn.lookup("ip", true);
        }
        if (typeof onSuccess === "undefined") {
            onSuccess = function () { };
        }
        if (typeof onError === "undefined") {
            onError = function () { };
        }
        window.intgrtn.ajax({
            url: window.intgrtn.options.server.endpoint + "/api/v1/events/add.php",
            method: "POST",
            data: data,
            onSuccess: onSuccess,
            onError: onError,
        });
    };
    window.intgrtn.validate = {
        signupForm: {},
        optinForm: {},
    };
    window.intgrtn.validate.email = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    window.intgrtn.validate.signupForm.clearValidation = function (form) {
        window.intgrtn.elements.removeClass(form, "intgrtn-form-valid");
        window.intgrtn.elements.removeClass(form, "intgrtn-form-invalid");
        window.intgrtn.elements.removeClass(form, "intgrtn-form-has-error");
        window.intgrtn.elements.find(".intgrtn-input-message-error", form).forEach(function (element) {
            window.intgrtn.elements.remove(element);
        });
        window.intgrtn.elements.find(".intgrtn-invalid", form).forEach(function (element) {
            window.intgrtn.elements.removeClass(element, "intgrtn-invalid");
        });
    };
    window.intgrtn.validate.signupForm.firstName = function (firstName, validateOptions) {
        var valid = true;
        var messages = [];
        var form = firstName.closest("form");
        var inputErrorHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-message-error"
        });
        var inputHolder = firstName.closest(".intgrtn-input-holder");
        var options = window.intgrtn.options.forms.signup;
        if (form.intgrtn) {
            options = form.intgrtn.options;
        }

        var defaultValidateOptions = {
            addClasses: true,
            addErrorMessages: true,
            fireEvents: true,
            eventNameSuffix: window.intgrtn.options.forms.signup.validateEvents.eventNameSuffix,
        };
        if (typeof validateOptions == "undefined") {
            validateOptions = window.intgrtn.merge({}, defaultValidateOptions);
        }
        validateOptions = window.intgrtn.merge(defaultValidateOptions, validateOptions);

        if (validateOptions.addErrorMessages == true) {
            window.intgrtn.elements.find(".intgrtn-input-message-error", inputHolder).forEach(function (element) {
                window.intgrtn.elements.remove(element);
            });
        }
        if (validateOptions.addClasses == true) {
            window.intgrtn.elements.find(".intgrtn-invalid", inputHolder).forEach(function (element) {
                window.intgrtn.elements.removeClass(element, "intgrtn-invalid");
            });
        }

        if (firstName.hasAttribute("required")) {
            if (!firstName.value.trim()) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.firstName.errors.required;
                messages.push(error.innerHTML);
                if (validateOptions.addErrorMessages == true) {
                    window.intgrtn.elements.appendChild(inputHolder, error);
                }
            }
            if (firstName.value.trim() && !window.intgrtn.checkContainsOnlyLetters(firstName.value)) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.firstName.errors.onlyLetters;
                messages.push(error.innerHTML);
                if (validateOptions.addErrorMessages == true) {
                    window.intgrtn.elements.appendChild(inputHolder, error);
                }
            }
            if (firstName.value.trim() && firstName.value.length < options.fields.firstName.minLength) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.firstName.errors.minLength.replace(/{{firstNameMinLength}}/g, options.fields.firstName.minLength);
                messages.push(error.innerHTML);
                if (validateOptions.addErrorMessages == true) {
                    window.intgrtn.elements.appendChild(inputHolder, error);
                }
            }
        }

        if (valid == false) {
            if (validateOptions.addClasses == true) {
                window.intgrtn.elements.addClass(inputHolder, "intgrtn-invalid");
                window.intgrtn.elements.addClass(firstName, "intgrtn-invalid");
            }
            if (validateOptions.fireEvents == true) {
                window.intgrtn.fireEvent({
                    name: "intgrtn-form-signup-invalid-first-name" + validateOptions.eventNameSuffix,
                    value: firstName.value + " - " + messages.join(" | "),
                });
            }
        }

        return {
            valid: valid,
            messages: messages
        };
    };
    window.intgrtn.validate.signupForm.lastName = function (lastName, validateOptions) {
        var valid = true;
        var messages = [];
        var form = lastName.closest("form");
        var inputErrorHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-message-error"
        });
        var inputHolder = lastName.closest(".intgrtn-input-holder");
        var options = window.intgrtn.options.forms.signup;
        if (form.intgrtn) {
            options = form.intgrtn.options;
        }

        var defaultValidateOptions = {
            addClasses: true,
            addErrorMessages: true,
            fireEvents: true,
            eventNameSuffix: window.intgrtn.options.forms.signup.validateEvents.eventNameSuffix,
        };
        if (typeof validateOptions == "undefined") {
            validateOptions = window.intgrtn.merge({}, defaultValidateOptions);
        }
        validateOptions = window.intgrtn.merge(defaultValidateOptions, validateOptions);

        if (validateOptions.addErrorMessages == true) {
            window.intgrtn.elements.find(".intgrtn-input-message-error", inputHolder).forEach(function (element) {
                window.intgrtn.elements.remove(element);
            });
        }
        if (validateOptions.addClasses == true) {
            window.intgrtn.elements.find(".intgrtn-invalid", inputHolder).forEach(function (element) {
                window.intgrtn.elements.removeClass(element, "intgrtn-invalid");
            });
        }

        if (lastName.hasAttribute("required")) {
            if (!lastName.value.trim()) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.lastName.errors.required;
                messages.push(error.innerHTML);
                if (validateOptions.addErrorMessages == true) {
                    window.intgrtn.elements.appendChild(inputHolder, error);
                }
            }
            if (lastName.value.trim() && !window.intgrtn.checkContainsOnlyLetters(lastName.value)) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.lastName.errors.onlyLetters;
                messages.push(error.innerHTML);
                if (validateOptions.addErrorMessages == true) {
                    window.intgrtn.elements.appendChild(inputHolder, error);
                }
            }
            if (lastName.value.trim() && lastName.value.length < options.fields.lastName.minLength) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.lastName.errors.minLength.replace(/{{lastNameMinLength}}/g, options.fields.lastName.minLength);
                messages.push(error.innerHTML);
                if (validateOptions.addErrorMessages == true) {
                    window.intgrtn.elements.appendChild(inputHolder, error);
                }
            }
        }

        if (valid == false) {
            if (validateOptions.addClasses == true) {
                window.intgrtn.elements.addClass(inputHolder, "intgrtn-invalid");
                window.intgrtn.elements.addClass(lastName, "intgrtn-invalid");
            }
            if (validateOptions.fireEvents == true) {
                window.intgrtn.fireEvent({
                    name: "intgrtn-form-signup-invalid-last-name" + validateOptions.eventNameSuffix,
                    value: lastName.value + " - " + messages.join(" | "),
                });
            }
        }

        return {
            valid: valid,
            messages: messages
        };
    };
    window.intgrtn.validate.signupForm.email = function (email, validateOptions) {
        var valid = true;
        var messages = [];
        var form = email.closest("form");
        var inputErrorHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-message-error"
        });
        var inputHolder = email.closest(".intgrtn-input-holder");
        var options = window.intgrtn.options.forms.signup;
        if (form.intgrtn) {
            options = form.intgrtn.options;
        }

        var defaultValidateOptions = {
            addClasses: true,
            addErrorMessages: true,
            fireEvents: true,
            eventNameSuffix: window.intgrtn.options.forms.signup.validateEvents.eventNameSuffix,
        };
        if (typeof validateOptions == "undefined") {
            validateOptions = window.intgrtn.merge({}, defaultValidateOptions);
        }
        validateOptions = window.intgrtn.merge(defaultValidateOptions, validateOptions);

        if (validateOptions.addErrorMessages == true) {
            window.intgrtn.elements.find(".intgrtn-input-message-error", inputHolder).forEach(function (element) {
                window.intgrtn.elements.remove(element);
            });
        }
        if (validateOptions.addClasses == true) {
            window.intgrtn.elements.find(".intgrtn-invalid", inputHolder).forEach(function (element) {
                window.intgrtn.elements.removeClass(element, "intgrtn-invalid");
            });
        }

        if (email.hasAttribute("required")) {
            if (!email.value) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.email.errors.required;
                messages.push(error.innerHTML);
                if (validateOptions.addErrorMessages == true) {
                    window.intgrtn.elements.appendChild(inputHolder, error);
                }
            }
            if (!window.intgrtn.validate.email(email.value)) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.email.errors.pattern;
                messages.push(error.innerHTML);
                if (validateOptions.addErrorMessages == true) {
                    window.intgrtn.elements.appendChild(inputHolder, error);
                }
            }
        }

        if (valid == false) {
            if (validateOptions.addClasses == true) {
                window.intgrtn.elements.addClass(inputHolder, "intgrtn-invalid");
                window.intgrtn.elements.addClass(email, "intgrtn-invalid");
            }
            if (validateOptions.fireEvents == true) {
                window.intgrtn.fireEvent({
                    name: "intgrtn-form-signup-invalid-email" + validateOptions.eventNameSuffix,
                    value: email.value + " - " + messages.join(" | "),
                });
            }
        }

        return {
            valid: valid,
            messages: messages
        };
    };
    window.intgrtn.validate.signupForm.password = function (password, validateOptions) {
        var valid = true;
        var messages = [];
        var form = password.closest("form");
        var inputErrorHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-message-error"
        });
        var inputHolder = password.closest(".intgrtn-input-holder");
        var options = window.intgrtn.options.forms.signup;
        if (form.intgrtn) {
            options = form.intgrtn.options;
        }

        var defaultValidateOptions = {
            addClasses: true,
            addErrorMessages: true,
            fireEvents: true,
            eventNameSuffix: window.intgrtn.options.forms.signup.validateEvents.eventNameSuffix,
        };
        if (typeof validateOptions == "undefined") {
            validateOptions = window.intgrtn.merge({}, defaultValidateOptions);
        }
        validateOptions = window.intgrtn.merge(defaultValidateOptions, validateOptions);

        if (validateOptions.addErrorMessages == true) {
            window.intgrtn.elements.find(".intgrtn-input-message-error", inputHolder).forEach(function (element) {
                window.intgrtn.elements.remove(element);
            });
        }
        if (validateOptions.addClasses == true) {
            window.intgrtn.elements.find(".intgrtn-invalid", inputHolder).forEach(function (element) {
                window.intgrtn.elements.removeClass(element, "intgrtn-invalid");
            });
        }

        if (password.hasAttribute("required")) {
            if (!password.value) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.password.errors.required;
                messages.push(error.innerHTML);
                if (validateOptions.addErrorMessages == true) {
                    if (!window.intgrtn.elements.findFirst(".intgrtn-input-message-error-verbose", form)) {
                        window.intgrtn.elements.appendChild(inputHolder, error);
                    }
                }
            }
            if (password.value && password.value.length < options.fields.password.minLength) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.password.errors.minLength.replace(/{{passwordMinLength}}/g, options.fields.password.minLength);
                messages.push(error.innerHTML);
                if (validateOptions.addErrorMessages == true) {
                    if (!window.intgrtn.elements.findFirst(".intgrtn-input-message-error-verbose", form)) {
                        window.intgrtn.elements.appendChild(inputHolder, error);
                    }
                }
            }
            if (password.value && password.value.length > options.fields.password.maxLength) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.password.errors.maxLength.replace(/{{passwordMaxLength}}/g, options.fields.password.maxLength);
                messages.push(error.innerHTML);
                if (validateOptions.addErrorMessages == true) {
                    if (!window.intgrtn.elements.findFirst(".intgrtn-input-message-error-verbose", form)) {
                        window.intgrtn.elements.appendChild(inputHolder, error);
                    }
                }
            }
            if (password.value && password.value.length >= options.fields.password.minLength && !password.value.match(options.fields.password.pattern)) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.password.errors.pattern;
                messages.push(error.innerHTML);
                if (validateOptions.addErrorMessages == true) {
                    if (!window.intgrtn.elements.findFirst(".intgrtn-input-message-error-verbose", form)) {
                        window.intgrtn.elements.appendChild(inputHolder, error);
                    }
                }
            }

            if (window.intgrtn.elements.findFirst(".intgrtn-input-message-error-verbose", form)) {
                window.intgrtn.validateSignupFormVerboseMessages(form);
            }
        }

        if (valid == false) {
            if (validateOptions.addClasses == true) {
                window.intgrtn.elements.addClass(inputHolder, "intgrtn-invalid");
                window.intgrtn.elements.addClass(password, "intgrtn-invalid");
            }
            if (validateOptions.fireEvents == true) {
                window.intgrtn.fireEvent({
                    name: "intgrtn-form-signup-invalid-password" + validateOptions.eventNameSuffix,
                    value: password.value + " - " + messages.join(" | "),
                });
            }
        }

        return {
            valid: valid,
            messages: messages
        };
    };
    window.intgrtn.validate.signupForm.passwordConfirm = function (password, passwordConfirm, validateOptions) {
        var valid = true;
        var messages = [];
        var form = passwordConfirm.closest("form");
        var inputErrorHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-message-error"
        });
        var inputHolder = passwordConfirm.closest(".intgrtn-input-holder");
        var options = window.intgrtn.options.forms.signup;
        if (form.intgrtn) {
            options = form.intgrtn.options;
        }

        var defaultValidateOptions = {
            addClasses: true,
            addErrorMessages: true,
            fireEvents: true,
            eventNameSuffix: window.intgrtn.options.forms.signup.validateEvents.eventNameSuffix,
        };
        if (typeof validateOptions == "undefined") {
            validateOptions = window.intgrtn.merge({}, defaultValidateOptions);
        }
        validateOptions = window.intgrtn.merge(defaultValidateOptions, validateOptions);

        if (validateOptions.addErrorMessages == true) {
            window.intgrtn.elements.find(".intgrtn-input-message-error", inputHolder).forEach(function (element) {
                window.intgrtn.elements.remove(element);
            });
        }
        if (validateOptions.addClasses == true) {
            window.intgrtn.elements.find(".intgrtn-invalid", inputHolder).forEach(function (element) {
                window.intgrtn.elements.removeClass(element, "intgrtn-invalid");
            });
        }

        if (passwordConfirm.hasAttribute("required")) {
            if (!passwordConfirm.value) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.passwordConfirm.errors.required;
                messages.push(error.innerHTML);
                if (validateOptions.addErrorMessages == true) {
                    if (!window.intgrtn.elements.findFirst(".intgrtn-input-message-error-verbose", form)) {
                        window.intgrtn.elements.appendChild(inputHolder, error);
                    }
                }
            }
            if (password.value != passwordConfirm.value) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.passwordConfirm.errors.match;
                messages.push(error.innerHTML);
                if (validateOptions.addErrorMessages == true) {
                    if (!window.intgrtn.elements.findFirst(".intgrtn-input-message-error-verbose", form)) {
                        window.intgrtn.elements.appendChild(inputHolder, error);
                    }
                }
            }

            if (window.intgrtn.elements.findFirst(".intgrtn-input-message-error-verbose", form)) {
                window.intgrtn.validateSignupFormVerboseMessages(form);
            }
        }

        if (valid == false) {
            if (validateOptions.addClasses == true) {
                window.intgrtn.elements.addClass(inputHolder, "intgrtn-invalid");
                window.intgrtn.elements.addClass(passwordConfirm, "intgrtn-invalid");
            }
            if (validateOptions.fireEvents == true) {
                window.intgrtn.fireEvent({
                    name: "intgrtn-form-signup-invalid-password-confirm" + validateOptions.eventNameSuffix,
                    value: passwordConfirm.value + " - " + messages.join(" | "),
                });
            }
        }

        return {
            valid: valid,
            messages: messages
        };
    };
    window.intgrtn.validate.signupForm.areaCode = function (areaCode, validateOptions) {
        var valid = true;
        var messages = [];
        var form = areaCode.closest("form");
        var inputErrorHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-message-error"
        });
        var inputHolder = areaCode.closest(".intgrtn-input-holder");
        var options = window.intgrtn.options.forms.signup;
        if (form.intgrtn) {
            options = form.intgrtn.options;
        }

        var defaultValidateOptions = {
            addClasses: true,
            addErrorMessages: true,
            fireEvents: true,
            eventNameSuffix: window.intgrtn.options.forms.signup.validateEvents.eventNameSuffix,
        };
        if (typeof validateOptions == "undefined") {
            validateOptions = window.intgrtn.merge({}, defaultValidateOptions);
        }
        validateOptions = window.intgrtn.merge(defaultValidateOptions, validateOptions);

        if (validateOptions.addErrorMessages == true) {
            window.intgrtn.elements.find(".intgrtn-input-message-error", inputHolder).forEach(function (element) {
                window.intgrtn.elements.remove(element);
            });
        }
        if (validateOptions.addClasses == true) {
            window.intgrtn.elements.find(".intgrtn-invalid", inputHolder).forEach(function (element) {
                window.intgrtn.elements.removeClass(element, "intgrtn-invalid");
            });
        }

        if (areaCode.hasAttribute("required")) {
            if (!areaCode.value) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.areaCode.errors.required;
                messages.push(error.innerHTML);
                if (validateOptions.addErrorMessages == true) {
                    window.intgrtn.elements.appendChild(inputHolder, error);
                }
            }
            if (areaCode.value && !areaCode.value.match(/^\d+$/)) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.areaCode.errors.onlyDigits;
                messages.push(error.innerHTML);
                if (validateOptions.addErrorMessages == true) {
                    window.intgrtn.elements.appendChild(inputHolder, error);
                }
            }
        }

        if (valid == false) {
            if (validateOptions.addClasses == true) {
                window.intgrtn.elements.addClass(inputHolder, "intgrtn-invalid");
                window.intgrtn.elements.addClass(areaCode, "intgrtn-invalid");
            }
            if (validateOptions.fireEvents == true) {
                window.intgrtn.fireEvent({
                    name: "intgrtn-form-signup-invalid-area-code" + validateOptions.eventNameSuffix,
                    value: areaCode.value + " - " + messages.join(" | "),
                });
            }
        }

        return {
            valid: valid,
            messages: messages
        };
    };
    window.intgrtn.validate.signupForm.phone = function (phone, validateOptions) {
        var valid = true;
        var messages = [];
        var form = phone.closest("form");
        var inputErrorHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-message-error"
        });
        var inputHolder = phone.closest(".intgrtn-input-holder");
        var options = window.intgrtn.options.forms.signup;
        if (form.intgrtn) {
            options = form.intgrtn.options;
        }

        var defaultValidateOptions = {
            addClasses: true,
            addErrorMessages: true,
            fireEvents: true,
            eventNameSuffix: window.intgrtn.options.forms.signup.validateEvents.eventNameSuffix,
        };
        if (typeof validateOptions == "undefined") {
            validateOptions = window.intgrtn.merge({}, defaultValidateOptions);
        }
        validateOptions = window.intgrtn.merge(defaultValidateOptions, validateOptions);

        if (validateOptions.addErrorMessages == true) {
            window.intgrtn.elements.find(".intgrtn-input-message-error", inputHolder).forEach(function (element) {
                window.intgrtn.elements.remove(element);
            });
        }
        if (validateOptions.addClasses == true) {
            window.intgrtn.elements.removeClass(inputHolder, "intgrtn-invalid");
            window.intgrtn.elements.find(".intgrtn-invalid", inputHolder).forEach(function (element) {
                window.intgrtn.elements.removeClass(element, "intgrtn-invalid");
            });
        }

        if (phone.hasAttribute("required")) {
            if (!phone.value) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.phone.errors.required;
                messages.push(error.innerHTML);
                if (validateOptions.addErrorMessages == true) {
                    window.intgrtn.elements.appendChild(inputHolder, error);
                }
            }
            if (phone.value && !phone.value.match(/^\d+$/)) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.phone.errors.onlyDigits;
                messages.push(error.innerHTML);
                if (validateOptions.addErrorMessages == true) {
                    window.intgrtn.elements.appendChild(inputHolder, error);
                }
            }
        }

        if (valid == false) {
            if (validateOptions.addClasses == true) {
                window.intgrtn.elements.addClass(inputHolder, "intgrtn-invalid");
                window.intgrtn.elements.addClass(phone, "intgrtn-invalid");
            }
            if (validateOptions.fireEvents == true) {
                window.intgrtn.fireEvent({
                    name: "intgrtn-form-signup-invalid-phone" + validateOptions.eventNameSuffix,
                    value: phone.value + " - " + messages.join(" | "),
                });
            }
        }

        return {
            valid: valid,
            messages: messages
        };
    };
    window.intgrtn.validate.signupForm.checkboxAgreeTerms = function (checkboxAgreeTerms, validateOptions) {
        var valid = true;
        var messages = [];

        if (!checkboxAgreeTerms) {
            return {
                valid: valid,
                messages: messages
            };
        }

        var form = checkboxAgreeTerms.closest("form");
        var inputErrorHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-message-error"
        });
        var inputHolder = checkboxAgreeTerms.closest(".intgrtn-input-holder");
        var options = window.intgrtn.options.forms.signup;
        if (form.intgrtn) {
            options = form.intgrtn.options;
        }

        var defaultValidateOptions = {
            addClasses: true,
            addErrorMessages: true,
            fireEvents: true,
            eventNameSuffix: window.intgrtn.options.forms.signup.validateEvents.eventNameSuffix,
        };
        if (typeof validateOptions == "undefined") {
            validateOptions = window.intgrtn.merge({}, defaultValidateOptions);
        }
        validateOptions = window.intgrtn.merge(defaultValidateOptions, validateOptions);

        if (validateOptions.addErrorMessages == true) {
            window.intgrtn.elements.find(".intgrtn-input-message-error", inputHolder).forEach(function (element) {
                window.intgrtn.elements.remove(element);
            });
        }
        if (validateOptions.addClasses == true) {
            window.intgrtn.elements.find(".intgrtn-invalid", inputHolder).forEach(function (element) {
                window.intgrtn.elements.removeClass(element, "intgrtn-invalid");
            });
        }

        if (checkboxAgreeTerms.hasAttribute("required") && !checkboxAgreeTerms.checked) {
            valid = false;
            var error = inputErrorHolder.cloneNode();
            error.innerHTML = options.fields.checkboxAgreeTerms.errors.required;
            messages.push(error.innerHTML);
            if (validateOptions.addErrorMessages == true) {
                window.intgrtn.elements.appendChild(inputHolder, error);
            }
        }

        if (valid == false) {
            if (validateOptions.addClasses == true) {
                window.intgrtn.elements.addClass(inputHolder, "intgrtn-invalid");
                window.intgrtn.elements.addClass(checkboxAgreeTerms, "intgrtn-invalid");
            }
            if (validateOptions.fireEvents == true) {
                window.intgrtn.fireEvent({
                    name: "intgrtn-form-signup-invalid-checkbox-agree-terms" + validateOptions.eventNameSuffix,
                    value: checkboxAgreeTerms.value + " - " + messages.join(" | "),
                });
            }
        }

        return {
            valid: valid,
            messages: messages
        };
    };

    window.intgrtn.validate.signupForm.customField = function (custom, validateOptions) {
        var valid = true;
        var messages = [];
        var form = custom.closest("form");
        var inputErrorHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-message-error"
        });
        var inputHolder = custom.closest(".intgrtn-input-holder");
        var options = window.intgrtn.options.forms.signup;
        if (form.intgrtn) {
            options = form.intgrtn.options;
        }

        var defaultValidateOptions = {
            addClasses: true,
            addErrorMessages: true,
            fireEvents: true,
            eventNameSuffix: window.intgrtn.options.forms.signup.validateEvents.eventNameSuffix,
        };
        if (typeof validateOptions == "undefined") {
            validateOptions = window.intgrtn.merge({}, defaultValidateOptions);
        }
        validateOptions = window.intgrtn.merge(defaultValidateOptions, validateOptions);

        if (validateOptions.addErrorMessages == true) {
            window.intgrtn.elements.find(".intgrtn-input-message-error", inputHolder).forEach(function (element) {
                window.intgrtn.elements.remove(element);
            });
        }
        if (validateOptions.addClasses == true) {
            window.intgrtn.elements.find(".intgrtn-invalid", inputHolder).forEach(function (element) {
                window.intgrtn.elements.removeClass(element, "intgrtn-invalid");
            });
        }

        if (custom.hasAttribute("required")) {
            if (!custom.value.trim()) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.customField.errors.required.replace(/{{fieldName}}/g, custom.name);
                messages.push(error.innerHTML);
                if (validateOptions.addErrorMessages == true) {
                    window.intgrtn.elements.appendChild(inputHolder, error);
                }
            }
        }

        if (valid == false) {
            if (validateOptions.addClasses == true) {
                window.intgrtn.elements.addClass(inputHolder, "intgrtn-invalid");
                window.intgrtn.elements.addClass(custom, "intgrtn-invalid");
            }
            if (validateOptions.fireEvents == true) {
                window.intgrtn.fireEvent({
                    name: "intgrtn-form-signup-invalid-custom-field" + validateOptions.eventNameSuffix,
                    value: custom.value + " - " + messages.join(" | "),
                });
            }
        }

        return {
            valid: valid,
            messages: messages
        };
    };

    window.intgrtn.validate.optinForm.name = function (name, validateOptions) {
        var valid = true;
        var messages = [];

        if (!name) {
            return {
                valid: true,
                messages: messages
            };
        }

        var form = name.closest("form");
        var inputErrorHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-message-error"
        });
        var options = window.intgrtn.options.forms.optin;
        if (form.intgrtn) {
            options = form.intgrtn.options;
        }

        var defaultValidateOptions = {
            addClasses: true,
            addErrorMessages: true,
            fireEvents: true,
            eventNameSuffix: window.intgrtn.options.forms.optin.validateEvents.eventNameSuffix,
        };
        if (typeof validateOptions == "undefined") {
            validateOptions = window.intgrtn.merge({}, defaultValidateOptions);
        }
        validateOptions = window.intgrtn.merge(defaultValidateOptions, validateOptions);

        if (name.hasAttribute("required")) {
            if (!name.value) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.name.errors.required;
                messages.push(error.innerHTML);
                if (validateOptions.addClasses == true) {
                    window.intgrtn.elements.addClass(name.parentElement, "intgrtn-invalid");
                }
                if (validateOptions.addErrorMessages == true) {
                    window.intgrtn.elements.appendChild(name.parentElement, error);
                }
            }
            if (name.value.trim() && name.value.length < options.fields.name.minLength) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.name.errors.minLength.replace(/{{nameMinLength}}/g, options.fields.name.minLength);
                messages.push(error.innerHTML);
                if (validateOptions.addClasses == true) {
                    window.intgrtn.elements.addClass(name.parentElement, "intgrtn-invalid");
                }
                if (validateOptions.addErrorMessages == true) {
                    window.intgrtn.elements.appendChild(name.parentElement, error);
                }
            }
        }

        if (valid == false && validateOptions.fireEvents == true) {
            window.intgrtn.fireEvent({
                name: "intgrtn-form-optin-invalid-name" + validateOptions.eventNameSuffix,
                value: name.value + " - " + messages.join(" | "),
            });
        }

        return {
            valid: valid,
            messages: messages
        };
    };
    window.intgrtn.validate.optinForm.firstName = function (firstName, validateOptions) {
        var valid = true;
        var messages = [];

        if (!firstName) {
            return {
                valid: true,
                messages: messages
            };
        }

        var form = firstName.closest("form");
        var inputErrorHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-message-error"
        });
        var options = window.intgrtn.options.forms.optin;
        if (form.intgrtn) {
            options = form.intgrtn.options;
        }

        var defaultValidateOptions = {
            addClasses: true,
            addErrorMessages: true,
            fireEvents: true,
            eventNameSuffix: window.intgrtn.options.forms.optin.validateEvents.eventNameSuffix,
        };
        if (typeof validateOptions == "undefined") {
            validateOptions = window.intgrtn.merge({}, defaultValidateOptions);
        }
        validateOptions = window.intgrtn.merge(defaultValidateOptions, validateOptions);

        if (firstName.hasAttribute("required")) {
            if (!firstName.value.trim()) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.firstName.errors.required;
                messages.push(error.innerHTML);
                if (validateOptions.addClasses == true) {
                    window.intgrtn.elements.addClass(firstName.parentElement, "intgrtn-invalid");
                }
                if (validateOptions.addErrorMessages == true) {
                    window.intgrtn.elements.appendChild(firstName.parentElement, error);
                }
            }
            if (firstName.value.trim() && !window.intgrtn.checkContainsOnlyLetters(firstName.value)) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.firstName.errors.pattern;
                messages.push(error.innerHTML);
                if (validateOptions.addClasses == true) {
                    window.intgrtn.elements.addClass(firstName.parentElement, "intgrtn-invalid");
                }
                if (validateOptions.addErrorMessages == true) {
                    window.intgrtn.elements.appendChild(firstName.parentElement, error);
                }
            }
            if (firstName.value.trim() && firstName.value.length < options.fields.firstName.minLength) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.firstName.errors.minLength.replace(/{{firstNameMinLength}}/g, options.fields.firstName.minLength);
                messages.push(error.innerHTML);
                if (validateOptions.addClasses == true) {
                    window.intgrtn.elements.addClass(firstName.parentElement, "intgrtn-invalid");
                }
                if (validateOptions.addErrorMessages == true) {
                    window.intgrtn.elements.appendChild(firstName.parentElement, error);
                }
            }
        }

        if (valid == false && validateOptions.fireEvents == true) {
            window.intgrtn.fireEvent({
                name: "intgrtn-form-optin-invalid-first-name" + validateOptions.eventNameSuffix,
                value: firstName.value + " - " + messages.join(" | "),
            });
        }

        return {
            valid: valid,
            messages: messages
        };
    };
    window.intgrtn.validate.optinForm.lastName = function (lastName, validateOptions) {
        var valid = true;
        var messages = [];

        if (!lastName) {
            return {
                valid: true,
                messages: messages
            };
        }

        var form = lastName.closest("form");
        var inputErrorHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-message-error"
        });
        var options = window.intgrtn.options.forms.optin;
        if (form.intgrtn) {
            options = form.intgrtn.options;
        }

        var defaultValidateOptions = {
            addClasses: true,
            addErrorMessages: true,
            fireEvents: true,
            eventNameSuffix: window.intgrtn.options.forms.optin.validateEvents.eventNameSuffix,
        };
        if (typeof validateOptions == "undefined") {
            validateOptions = window.intgrtn.merge({}, defaultValidateOptions);
        }
        validateOptions = window.intgrtn.merge(defaultValidateOptions, validateOptions);

        if (lastName.hasAttribute("required")) {
            if (!lastName.value.trim()) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.lastName.errors.required;
                messages.push(error.innerHTML);
                if (validateOptions.addClasses == true) {
                    window.intgrtn.elements.addClass(lastName.parentElement, "intgrtn-invalid");
                }
                if (validateOptions.addErrorMessages == true) {
                    window.intgrtn.elements.appendChild(lastName.parentElement, error);
                }
            }
            if (lastName.value.trim() && !window.intgrtn.checkContainsOnlyLetters(lastName.value)) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.lastName.errors.pattern;
                messages.push(error.innerHTML);
                if (validateOptions.addClasses == true) {
                    window.intgrtn.elements.addClass(lastName.parentElement, "intgrtn-invalid");
                }
                if (validateOptions.addErrorMessages == true) {
                    window.intgrtn.elements.appendChild(lastName.parentElement, error);
                }
            }
            if (lastName.value.trim() && lastName.value.length < options.fields.lastName.minLength) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.lastName.errors.minLength.replace(/{{lastNameMinLength}}/g, options.fields.lastName.minLength);
                messages.push(error.innerHTML);
                if (validateOptions.addClasses == true) {
                    window.intgrtn.elements.addClass(lastName.parentElement, "intgrtn-invalid");
                }
                if (validateOptions.addErrorMessages == true) {
                    window.intgrtn.elements.appendChild(lastName.parentElement, error);
                }
            }
        }

        if (valid == false && validateOptions.fireEvents == true) {
            window.intgrtn.fireEvent({
                name: "intgrtn-form-optin-invalid-last-name" + validateOptions.eventNameSuffix,
                value: lastName.value + " - " + messages.join(" | "),
            });
        }

        return {
            valid: valid,
            messages: messages
        };
    };
    window.intgrtn.validate.optinForm.email = function (email, validateOptions) {
        var valid = true;
        var messages = [];
        var form = email.closest("form");
        var inputErrorHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-message-error"
        });
        var options = window.intgrtn.options.forms.optin;
        if (form.intgrtn) {
            options = form.intgrtn.options;
        }

        var defaultValidateOptions = {
            addClasses: true,
            addErrorMessages: true,
            fireEvents: true,
            eventNameSuffix: window.intgrtn.options.forms.optin.validateEvents.eventNameSuffix,
        };
        if (typeof validateOptions == "undefined") {
            validateOptions = window.intgrtn.merge({}, defaultValidateOptions);
        }
        validateOptions = window.intgrtn.merge(defaultValidateOptions, validateOptions);

        if (email.hasAttribute("required")) {
            if (email && !email.value) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.email.errors.required;
                messages.push(error.innerHTML);
                if (validateOptions.addClasses == true) {
                    window.intgrtn.elements.addClass(email.parentElement, "intgrtn-invalid");
                }
                if (validateOptions.addErrorMessages == true) {
                    window.intgrtn.elements.appendChild(email.parentElement, error);
                }
            }
            if (email && email.value && !window.intgrtn.validate.email(email.value)) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.email.errors.pattern;
                messages.push(error.innerHTML);
                if (validateOptions.addClasses == true) {
                    window.intgrtn.elements.addClass(email.parentElement, "intgrtn-invalid");
                }
                if (validateOptions.addErrorMessages == true) {
                    window.intgrtn.elements.appendChild(email.parentElement, error);
                }
            }
        }

        if (valid == false && validateOptions.fireEvents == true) {
            window.intgrtn.fireEvent({
                name: "intgrtn-form-optin-invalid-email" + validateOptions.eventNameSuffix,
                value: email.value + " - " + messages.join(" | "),
            });
        }

        return {
            valid: valid,
            messages: messages
        };
    };
    window.intgrtn.validate.optinForm.areaCode = function (areaCode, validateOptions) {
        var valid = true;
        var messages = [];

        if (!areaCode) {
            return {
                valid: true,
                messages: messages
            };
        }

        var form = areaCode.closest("form");
        var inputErrorHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-message-error"
        });
        var inputHolder = areaCode.closest(".intgrtn-input-holder");
        var options = window.intgrtn.options.forms.signup;
        if (form.intgrtn) {
            options = form.intgrtn.options;
        }

        var defaultValidateOptions = {
            addClasses: true,
            addErrorMessages: true,
            fireEvents: true,
            eventNameSuffix: window.intgrtn.options.forms.optin.validateEvents.eventNameSuffix,
        };
        if (typeof validateOptions == "undefined") {
            validateOptions = window.intgrtn.merge({}, defaultValidateOptions);
        }
        validateOptions = window.intgrtn.merge(defaultValidateOptions, validateOptions);

        if (validateOptions.addErrorMessages == true) {
            window.intgrtn.elements.find(".intgrtn-input-message-error", inputHolder).forEach(function (element) {
                window.intgrtn.elements.remove(element);
            });
        }
        if (validateOptions.addClasses == true) {
            window.intgrtn.elements.find(".intgrtn-invalid", inputHolder).forEach(function (element) {
                window.intgrtn.elements.removeClass(element, "intgrtn-invalid");
            });
        }

        if (areaCode.hasAttribute("required")) {
            if (!areaCode.value) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.areaCode.errors.required;
                messages.push(error.innerHTML);
                if (validateOptions.addErrorMessages == true) {
                    window.intgrtn.elements.appendChild(inputHolder, error);
                }
            }
            if (areaCode.value && !areaCode.value.match(/^\d+$/)) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.areaCode.errors.onlyDigits;
                messages.push(error.innerHTML);
                if (validateOptions.addErrorMessages == true) {
                    window.intgrtn.elements.appendChild(inputHolder, error);
                }
            }
        }

        if (valid == false) {
            if (validateOptions.addClasses == true) {
                window.intgrtn.elements.addClass(inputHolder, "intgrtn-invalid");
                window.intgrtn.elements.addClass(areaCode, "intgrtn-invalid");
            }
            if (validateOptions.fireEvents == true) {
                window.intgrtn.fireEvent({
                    name: "intgrtn-form-optin-invalid-area-code" + validateOptions.eventNameSuffix,
                    value: areaCode.value + " - " + messages.join(" | "),
                });
            }
        }

        return {
            valid: valid,
            messages: messages
        };
    };
    window.intgrtn.validate.optinForm.phone = function (phone, validateOptions) {
        var valid = true;
        var messages = [];

        if (!phone) {
            return {
                valid: true,
                messages: messages
            };
        }

        var form = phone.closest("form");
        var inputErrorHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-message-error"
        });
        var inputHolder = phone.closest(".intgrtn-input-holder");
        var options = window.intgrtn.options.forms.signup;
        if (form.intgrtn) {
            options = form.intgrtn.options;
        }

        var defaultValidateOptions = {
            addClasses: true,
            addErrorMessages: true,
            fireEvents: true,
            eventNameSuffix: window.intgrtn.options.forms.optin.validateEvents.eventNameSuffix,
        };
        if (typeof validateOptions == "undefined") {
            validateOptions = window.intgrtn.merge({}, defaultValidateOptions);
        }
        validateOptions = window.intgrtn.merge(defaultValidateOptions, validateOptions);

        if (validateOptions.addErrorMessages == true) {
            window.intgrtn.elements.find(".intgrtn-input-message-error", inputHolder).forEach(function (element) {
                window.intgrtn.elements.remove(element);
            });
        }
        if (validateOptions.addClasses == true) {
            window.intgrtn.elements.removeClass(inputHolder, "intgrtn-invalid");
            window.intgrtn.elements.find(".intgrtn-invalid", inputHolder).forEach(function (element) {
                window.intgrtn.elements.removeClass(element, "intgrtn-invalid");
            });
        }

        if (phone.hasAttribute("required")) {
            if (!phone.value) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.phone.errors.required;
                messages.push(error.innerHTML);
                if (validateOptions.addErrorMessages == true) {
                    window.intgrtn.elements.appendChild(inputHolder, error);
                }
            }
            if (phone.value && !phone.value.match(/^\d+$/)) {
                valid = false;
                var error = inputErrorHolder.cloneNode();
                error.innerHTML = options.fields.phone.errors.onlyDigits;
                messages.push(error.innerHTML);
                if (validateOptions.addErrorMessages == true) {
                    window.intgrtn.elements.appendChild(inputHolder, error);
                }
            }
        }

        if (valid == false) {
            if (validateOptions.addClasses == true) {
                window.intgrtn.elements.addClass(inputHolder, "intgrtn-invalid");
                window.intgrtn.elements.addClass(phone, "intgrtn-invalid");
            }
            if (validateOptions.fireEvents == true) {
                window.intgrtn.fireEvent({
                    name: "intgrtn-form-optin-invalid-phone" + validateOptions.eventNameSuffix,
                    value: phone.value + " - " + messages.join(" | "),
                });
            }
        }

        return {
            valid: valid,
            messages: messages
        };
    };
    /**
     * @deprecated
     * Do not use. Use: window.intgrtn.validate.signupForm.password()
     */
    window.intgrtn.validateSignupFormPassword = function (password, passwordMinLength, passwordMaxLength) {
        if (typeof passwordMinLength == "undefined") {
            passwordMinLength = window.intgrtn.options.forms.signup.fields.password.minLength;
        }
        if (typeof passwordMaxLength == "undefined") {
            passwordMaxLength = window.intgrtn.options.forms.signup.fields.password.maxLength;
        }
        if (!password) {
            return false;
        }
        if (password.length < passwordMinLength) {
            return false;
        }
        if (password.length > passwordMaxLength) {
            return false;
        }
        return password.match(window.intgrtn.options.forms.signup.fields.password.pattern) !== null;
    };
    window.intgrtn.validateSignupForm = function (form, validateOptions) {
        var valid = true;
        var firstName = window.intgrtn.elements.findFirst("[name='firstName']", form);
        var lastName = window.intgrtn.elements.findFirst("[name='lastName']", form);
        var email = window.intgrtn.elements.findFirst("[name='email']", form);
        var password = window.intgrtn.elements.findFirst("[name='password']", form);
        var passwordConfirm = window.intgrtn.elements.findFirst("[name='passwordConfirm']", form);
        var phone = window.intgrtn.elements.findFirst("[name='phone']", form);
        var areaCode = window.intgrtn.elements.findFirst("[name='areaCode']", form);
        var checkboxAgreeTerms = window.intgrtn.elements.findFirst("[name='checkboxAgreeTerms']", form);

        var defaultValidateOptions = {
            addClasses: true,
            addErrorMessages: true,
            fireEvents: true,
            eventNameSuffix: window.intgrtn.options.forms.signup.validateEvents.eventNameSuffix,
        };
        if (typeof validateOptions == "undefined") {
            validateOptions = window.intgrtn.merge({}, defaultValidateOptions);
        }
        validateOptions = window.intgrtn.merge(defaultValidateOptions, validateOptions);

        if (validateOptions.addClasses == true) {
            window.intgrtn.validate.signupForm.clearValidation(form);
        }

        if (window.intgrtn.validate.signupForm.firstName(firstName, validateOptions).valid == false) {
            valid = false;
        }
        if (window.intgrtn.validate.signupForm.lastName(lastName, validateOptions).valid == false) {
            valid = false;
        }
        if (window.intgrtn.validate.signupForm.email(email, validateOptions).valid == false) {
            valid = false;
        }
        if (window.intgrtn.validate.signupForm.password(password, validateOptions).valid == false) {
            valid = false;
        }
        if (passwordConfirm && window.intgrtn.validate.signupForm.passwordConfirm(password, passwordConfirm, validateOptions).valid == false) {
            valid = false;
        }
        if (window.intgrtn.validate.signupForm.areaCode(areaCode, validateOptions).valid == false) {
            valid = false;
        }
        if (window.intgrtn.validate.signupForm.phone(phone, validateOptions).valid == false) {
            valid = false;
        }
        if (window.intgrtn.validate.signupForm.checkboxAgreeTerms(checkboxAgreeTerms, validateOptions).valid == false) {
            valid = false;
        }

        var userCustomFields = window.intgrtn.elements.find("[data-user-custom-field-id]", form);
        userCustomFields.forEach(function (custom) {
            if (window.intgrtn.validate.signupForm.customField(custom, validateOptions).valid == false) {
                valid = false;
            }
        });

        if (validateOptions.addClasses == true) {
            if (valid === false) {
                window.intgrtn.elements.addClass(form, "intgrtn-form-invalid");
            } else {
                window.intgrtn.elements.addClass(form, "intgrtn-form-valid");
            }
        }

        return valid;
    };

    window.intgrtn.validateSignupFormVerboseMessages = function (form) {
        var result = true;
        var password = window.intgrtn.elements.findFirst("[name='password']", form);
        var passwordConfirm = window.intgrtn.elements.findFirst("[name='passwordConfirm']", form);

        var options = window.intgrtn.options.forms.signup;
        if (form.intgrtn) {
            options = form.intgrtn.options;
        }

        window.intgrtn.elements.find(".intgrtn-input-message-error-verbose .intgrtn-single-message", form).forEach(function (element) {
            window.intgrtn.elements.removeClass(element, "intgrtn-untouched");
            window.intgrtn.elements.removeClass(element, "intgrtn-invalid");
            window.intgrtn.elements.addClass(element, "intgrtn-valid");
        });
        if (password.value.length < options.fields.password.minLength || password.value.length > options.fields.password.maxLength) {
            result = false;
            window.intgrtn.elements.find("[data-intgrtn-message-id='password6To12Chars']", form).forEach(function (element) {
                window.intgrtn.elements.removeClass(element, "intgrtn-valid");
                window.intgrtn.elements.addClass(element, "intgrtn-invalid");
            });
        }
        if (!password.value.match(options.fields.password.patternLowercaseLetter) && options.fields.password.patternLowercaseLetter !== false) {
            result = false;
            window.intgrtn.elements.find("[data-intgrtn-message-id='passwordRegExp1Lowercase']", form).forEach(function (element) {
                window.intgrtn.elements.removeClass(element, "intgrtn-valid");
                window.intgrtn.elements.addClass(element, "intgrtn-invalid");
            });
        }
        if (!password.value.match(options.fields.password.patternUppercaseLetter) && options.fields.password.patternUppercaseLetter !== false) {
            result = false;
            window.intgrtn.elements.find("[data-intgrtn-message-id='passwordRegExp1Uppercase']", form).forEach(function (element) {
                window.intgrtn.elements.removeClass(element, "intgrtn-valid");
                window.intgrtn.elements.addClass(element, "intgrtn-invalid");
            });
        }
        if (!password.value.match(options.fields.password.patternNoSpecialChars) && options.fields.password.patternNoSpecialChars !== false) {
            result = false;
            window.intgrtn.elements.find("[data-intgrtn-message-id='passwordRegExpNoSpecialChars']", form).forEach(function (element) {
                window.intgrtn.elements.removeClass(element, "intgrtn-valid");
                window.intgrtn.elements.addClass(element, "intgrtn-invalid");
            });
        }
        if (!password.value.match(options.fields.password.patternNumber) && options.fields.password.patternNumber !== false) {
            result = false;
            window.intgrtn.elements.find("[data-intgrtn-message-id='passwordRegExpNumber']", form).forEach(function (element) {
                window.intgrtn.elements.removeClass(element, "intgrtn-valid");
                window.intgrtn.elements.addClass(element, "intgrtn-invalid");
            });
        }
        if (!password.value.match(options.fields.password.patternLetter) && options.fields.password.patternLetter !== false) {
            result = false;
            window.intgrtn.elements.find("[data-intgrtn-message-id='passwordRegExpLetter']", form).forEach(function (element) {
                window.intgrtn.elements.removeClass(element, "intgrtn-valid");
                window.intgrtn.elements.addClass(element, "intgrtn-invalid");
            });
        }
        if (passwordConfirm && password.value != passwordConfirm.value || !password.value) {
            result = false;
            window.intgrtn.elements.find("[data-intgrtn-message-id='passwordConfirmMatch']", form).forEach(function (element) {
                window.intgrtn.elements.removeClass(element, "intgrtn-valid");
                window.intgrtn.elements.addClass(element, "intgrtn-invalid");
            });
        }

        return result;
    }

    window.intgrtn.validateOptinForm = function (form, validateOptions) {
        var valid = true;
        var name = window.intgrtn.elements.findFirst("[name='name']", form);
        var firstName = window.intgrtn.elements.findFirst("[name='firstName']", form);
        var lastName = window.intgrtn.elements.findFirst("[name='lastName']", form);
        var email = window.intgrtn.elements.findFirst("[name='email']", form);
        var areaCode = window.intgrtn.elements.findFirst("[name='areaCode']", form);
        var phone = window.intgrtn.elements.findFirst("[name='phone']", form);
        var inputErrorHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-message-error"
        });

        var options = window.intgrtn.options.forms.optin;
        if (form.intgrtn) {
            options = form.intgrtn.options;
        }

        var defaultValidateOptions = {
            addClasses: true,
            addErrorMessages: true,
            fireEvents: true,
            eventNameSuffix: window.intgrtn.options.forms.optin.validateEvents.eventNameSuffix,
        };
        if (typeof validateOptions == "undefined") {
            validateOptions = window.intgrtn.merge({}, defaultValidateOptions);
        }
        validateOptions = window.intgrtn.merge(defaultValidateOptions, validateOptions);

        if (validateOptions.addClasses == true) {
            window.intgrtn.elements.removeClass(form, "intgrtn-form-valid");
            window.intgrtn.elements.removeClass(form, "intgrtn-form-invalid");

            /* Remove validation classes from inputs */
            window.intgrtn.elements.find("input", form).forEach(function (element) {
                window.intgrtn.elements.removeClass(element.parentElement, "intgrtn-invalid");
            });
            /* Remove validation messages from inputs */
            window.intgrtn.elements.find(".intgrtn-input-message-error", form).forEach(function (element) {
                window.intgrtn.elements.remove(element);
            });
        }

        if (window.intgrtn.validate.optinForm.name(name, validateOptions).valid == false) {
            valid = false;
        }
        if (window.intgrtn.validate.optinForm.firstName(firstName, validateOptions).valid == false) {
            valid = false;
        }
        if (window.intgrtn.validate.optinForm.lastName(lastName, validateOptions).valid == false) {
            valid = false;
        }
        if (window.intgrtn.validate.optinForm.email(email, validateOptions).valid == false) {
            valid = false;
        }
        if (window.intgrtn.validate.optinForm.areaCode(areaCode, validateOptions).valid == false) {
            valid = false;
        }
        if (window.intgrtn.validate.optinForm.phone(phone, validateOptions).valid == false) {
            valid = false;
        }

        if (validateOptions.addClasses == true) {
            if (valid === false) {
                window.intgrtn.elements.addClass(form, "intgrtn-form-invalid");
            } else {
                window.intgrtn.elements.addClass(form, "intgrtn-form-valid");
            }
        }

        return valid;
    };

    window.intgrtn.validateContactUsForm = function (form) {
        var valid = true;
        var firstName = window.intgrtn.elements.findFirst("[name='firstName']", form);
        var lastName = window.intgrtn.elements.findFirst("[name='lastName']", form);
        var email = window.intgrtn.elements.findFirst("[name='email']", form);
        var subject = window.intgrtn.elements.findFirst("[name='subject']", form);
        var message = window.intgrtn.elements.findFirst("[name='message']", form);
        var inputErrorHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-message-error"
        });

        window.intgrtn.elements.removeClass(form, "intgrtn-form-valid");
        window.intgrtn.elements.removeClass(form, "intgrtn-form-invalid");

        /* Remove validation classes from inputs */
        window.intgrtn.elements.find("input", form).forEach(function (element) {
            window.intgrtn.elements.removeClass(element.parentElement, "intgrtn-invalid");
        });
        /* Remove validation messages from inputs */
        window.intgrtn.elements.find(".intgrtn-input-message-error", form).forEach(function (element) {
            window.intgrtn.elements.remove(element);
        });

        if (firstName && firstName.hasAttribute("required") && !firstName.value.trim()) {
            valid = false;
            window.intgrtn.elements.addClass(firstName.parentElement, "intgrtn-invalid");
            var error = inputErrorHolder.cloneNode();
            error.innerHTML = "First name is required.";
            window.intgrtn.elements.appendChild(firstName.parentElement, error);
        }
        if (firstName && firstName.value.trim() && !window.intgrtn.checkContainsOnlyLetters(firstName.value)) {
            valid = false;
            window.intgrtn.elements.addClass(firstName.parentElement, "intgrtn-invalid");
            var error = inputErrorHolder.cloneNode();
            error.innerHTML = "Only letters are allowed.";
            window.intgrtn.elements.appendChild(firstName.parentElement, error);
        }
        if (lastName && lastName.hasAttribute("required") && !lastName.value.trim()) {
            valid = false;
            window.intgrtn.elements.addClass(lastName.parentElement, "intgrtn-invalid");
            var error = inputErrorHolder.cloneNode();
            error.innerHTML = "Last name is required.";
            window.intgrtn.elements.appendChild(lastName.parentElement, error);
        }
        if (lastName && lastName.value.trim() && !window.intgrtn.checkContainsOnlyLetters(lastName.value)) {
            valid = false;
            window.intgrtn.elements.addClass(lastName.parentElement, "intgrtn-invalid");
            var error = inputErrorHolder.cloneNode();
            error.innerHTML = "Only letters are allowed.";
            window.intgrtn.elements.appendChild(lastName.parentElement, error);
        }
        if (email && email.hasAttribute("required") && !email.value) {
            valid = false;
            window.intgrtn.elements.addClass(email.parentElement, "intgrtn-invalid");
            var error = inputErrorHolder.cloneNode();
            error.innerHTML = "Email is required.";
            window.intgrtn.elements.appendChild(email.parentElement, error);
        }
        if (email && email.value && !window.intgrtn.validate.email(email.value)) {
            valid = false;
            window.intgrtn.elements.addClass(email.parentElement, "intgrtn-invalid");
            var error = inputErrorHolder.cloneNode();
            error.innerHTML = "Email is invalid.";
            window.intgrtn.elements.appendChild(email.parentElement, error);
        }
        if (subject && subject.hasAttribute("required") && !subject.value) {
            valid = false;
            window.intgrtn.elements.addClass(subject.parentElement, "intgrtn-invalid");
            var error = inputErrorHolder.cloneNode();
            error.innerHTML = "Subject is required.";
            window.intgrtn.elements.appendChild(subject.parentElement, error);
        }
        if (message && subject.hasAttribute("required") && !message.value) {
            valid = false;
            window.intgrtn.elements.addClass(message.parentElement, "intgrtn-invalid");
            var error = inputErrorHolder.cloneNode();
            error.innerHTML = "Message is required.";
            window.intgrtn.elements.appendChild(message.parentElement.parentElement, error);
        }

        if (valid === false) {
            window.intgrtn.elements.addClass(form, "intgrtn-form-invalid");
        } else {
            window.intgrtn.elements.addClass(form, "intgrtn-form-valid");
        }

        return valid;
    };

    window.intgrtn.validateContactRequestMessageForm = function (form) {
        var $valid = true;

        var message = window.intgrtn.elements.findFirst("[name='message']", form);
        var inputErrorHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-message-error"
        });

        window.intgrtn.elements.removeClass(form, "intgrtn-form-valid");
        window.intgrtn.elements.removeClass(form, "intgrtn-form-invalid");

        /* Remove validation classes from inputs */
        window.intgrtn.elements.find("input", form).forEach(function (element) {
            window.intgrtn.elements.removeClass(element.parentElement, "intgrtn-invalid");
        });
        /* Remove validation messages from inputs */
        window.intgrtn.elements.find(".intgrtn-input-message-error", form).forEach(function (element) {
            window.intgrtn.elements.remove(element);
        });

        if (message && message.hasAttribute("required") && !message.value) {
            $valid = false;
            window.intgrtn.elements.addClass(message.parentElement, "intgrtn-invalid");
            var error = inputErrorHolder.cloneNode();
            error.innerHTML = "Message is required";
            window.intgrtn.elements.appendChild(message.parentElement, error);
        }

        return $valid;
    }; // window.intgrtn.validateContactRequestMessageForm

    window.intgrtn.checkContainsOnlyLetters = function (checkedText) {
        /**
         * var lettersPatt = /^[a-zA-Z\s]+$/i;  // only english letters
         * var lettersPatt = XRegExp('^[\\p{L}\s]+$');   // needs to include xregex.js library to work
         */
        // transformed xregexp to pure regexp below:
        var lettersPatt = /^[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\s]+$/i;

        var result = lettersPatt.test(checkedText);
        return result;
    };

    window.intgrtn.generatePassword = function (form) {
        var newPassword = null;
        var options = window.intgrtn.options.forms.signup;

        if (form && form.intgrtn) {
            options = form.intgrtn.options;
        }

        var tryCount = 1;
        do {
            newPassword = window.intgrtn.generateRandomString(options.fields.password.maxLength);
            tryCount++;
        } while (!newPassword.match(options.fields.password.pattern) && tryCount <= 100);

        if (tryCount == 100) {
            window.intgrtn.sendErrorMessage("Can't generate valid password.");
        }

        return newPassword;
    };
    window.intgrtn.generateRandomString = function (length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };

    /*
     * element: areaCode input dom element
     * phoneElement: phone input dom element
     * */
    window.intgrtn.generateAreaFlagsDropdown = function (element, phoneElement) {
        if (!element.intgrtn) {
            element.intgrtn = true;

            window.intgrtn.elements.addClass(element, 'intgrtn-input-area-code-flags');

            window.intgrtn.getProjectDetails(function (responseProjectDetails) {
                var countries = responseProjectDetails.data.countries;
                for (var i = 0; i < countries.length; i++) {
                    countries[i].countryCode = countries[i].countryCode.toLowerCase();
                }

                var selectDropDownItemByCountryCode = function (countryCode) {
                    var country = null;
                    countries.forEach(function (item) {
                        if (item.countryCode == countryCode) {
                            country = item;
                        }
                    });

                    if (!country) {
                        return false;
                    }

                    window.intgrtn.elements.find('.intgrtn-flag-single-item', areasDropDown).forEach(function (element) {
                        if (element.getAttribute("data-country-code") == country.countryCode) {
                            window.intgrtn.elements.addClass(element, 'intgrtn-selected');
                        } else {
                            window.intgrtn.elements.removeClass(element, 'intgrtn-selected');
                        }
                    });

                    window.intgrtn.elements.addClass(mainHolder, 'intgrtn-country-code-' + country.countryCode);
                    window.intgrtn.elements.setAttribute(selectedAreaElementFlag, 'class', 'intgrtn-flag-image intgrtn-flag-' + country.countryCode);
                    window.intgrtn.elements.setHtml(selectedAreaElementPhoneCode, ' +' + country.phoneCode);
                    window.intgrtn.elements.setAttribute(selectedAreaElement, "data-intgrtn-tooltip", country.name);
                    if (phoneElement) {
                        window.intgrtn.elements.setAttribute(phoneElement, 'placeholder', (country.phoneExample ? country.phoneExample : 'Phone number'));
                    }

                    window.intgrtn.elements.removeClass(areasDropDown, 'intgrtn-opened');
                    window.intgrtn.elements.removeClass(selectedAreaElement, 'intgrtn-opened');
                };

                var selectDropDownItemByPhoneCode = function (phoneCode) {
                    var selectedCountry = null;
                    var selectedCountries = countries.filter(function (item) {
                        return (item.phoneCode == phoneCode);
                    });

                    if (selectedCountries.length == 1) {
                        selectedCountry = selectedCountries[0];
                    } else if (selectedCountries.length > 1) {
                        if (element.hasAttribute('data-country-code') && element.getAttribute('data-country-code').length > 0) {
                            for (var i = 0; i < selectedCountries.length; i++) {
                                if (selectedCountries[i].countryCode == element.getAttribute('data-country-code').toLowerCase()) {
                                    selectedCountry = selectedCountries[i];
                                }
                            }
                        } else if (responseProjectDetails.data.client.location.countryIsoCode) {
                            for (var i = 0; i < selectedCountries.length; i++) {
                                if (selectedCountries[i].countryCode == responseProjectDetails.data.client.location.countryIsoCode.toLowerCase()) {
                                    selectedCountry = selectedCountries[i];
                                }
                            }
                        }
                    }

                    var selectedCountryCode = (selectedCountry ? selectedCountry.countryCode : null);
                    selectDropDownItemByCountryCode(selectedCountryCode);

                    return selectedCountryCode;
                };

                var selectedCountry = {
                    countryCode: "",
                    phoneCode: "",
                };

                var mainHolder = window.intgrtn.elements.create('div', '', {
                    'class': 'intgrtn-input intgrtn-area-flags-holder',
                });

                var selectedAreaElement = window.intgrtn.elements.create('div', '', {
                    class: 'intgrtn-selected-area',
                    "data-intgrtn-tooltip": ''
                });
                var selectedAreaElementFlag = window.intgrtn.elements.create('div', '', {
                    class: 'intgrtn-flag-image intgrtn-flag-' + selectedCountry.countryCode
                });
                var selectedAreaElementPhoneCode = window.intgrtn.elements.create('div', ' +' + selectedCountry.phoneCode, {
                    class: 'intgrtn-phone-code'
                });
                window.intgrtn.elements.appendChild(selectedAreaElement, selectedAreaElementFlag);
                window.intgrtn.elements.appendChild(selectedAreaElement, selectedAreaElementPhoneCode);

                var areasDropDown = window.intgrtn.elements.create('div', '', {
                    class: 'intgrtn-areas-dropdown'
                });

                var lastValue = null;

                for (var i = 0; i < countries.length; i++) {
                    var dropDownItem = window.intgrtn.elements.create('div', '', {
                        class: 'intgrtn-flag-single-item ' + (countries[i].countryCode == selectedCountry.countryCode ? ' intgrtn-selected' : ''),
                        'data-country-name': countries[i].name,
                        'data-country-code': countries[i].countryCode,
                        'data-phone-code': countries[i].phoneCode
                    });
                    var flagImage = window.intgrtn.elements.create('div', '', {
                        class: 'intgrtn-flag-image intgrtn-flag-' + countries[i].countryCode
                    });
                    var countryName = window.intgrtn.elements.create('div', countries[i].name, {
                        class: 'intgrtn-area-name'
                    });
                    var countryCode = window.intgrtn.elements.create('div', ' +' + countries[i].phoneCode, {
                        class: 'intgrtn-area-code'
                    });
                    window.intgrtn.elements.appendChild(dropDownItem, flagImage);
                    window.intgrtn.elements.appendChild(dropDownItem, countryName);
                    window.intgrtn.elements.appendChild(dropDownItem, countryCode);

                    window.intgrtn.elements.appendChild(areasDropDown, dropDownItem);

                    if (countries[i].countryCode == selectedCountry.countryCode) {
                        window.intgrtn.elements.setAttribute(selectedAreaElement, "data-intgrtn-tooltip", countries[i].name);
                        if (phoneElement) {
                            window.intgrtn.elements.setAttribute(phoneElement, "placeholder", countries[i].phoneExample)
                        }
                    }

                    window.intgrtn.elements.on(dropDownItem, 'click', function (e) {
                        var triggeredPhoneCode = e.currentTarget.getAttribute('data-phone-code');
                        var triggeredCountryCode = e.currentTarget.getAttribute('data-country-code');
                        selectDropDownItemByCountryCode(triggeredCountryCode);
                        element.value = triggeredPhoneCode;
                        window.intgrtn.elements.setAttribute(element, 'data-country-code', triggeredCountryCode);
                        lastValue = triggeredPhoneCode;
                        window.intgrtn.elements.trigger(element, "input");
                        window.intgrtn.elements.trigger(element, "change");
                        e.stopPropagation();
                    });
                }

                window.intgrtn.elements.appendChild(mainHolder, selectedAreaElement);
                window.intgrtn.elements.appendChild(mainHolder, areasDropDown);

                window.intgrtn.elements.on(selectedAreaElement, 'click', function (e) {
                    if (!window.intgrtn.elements.hasClass(areasDropDown, 'intgrtn-opened')) {
                        window.intgrtn.elements.addClass(areasDropDown, 'intgrtn-opened');
                        window.intgrtn.elements.addClass(selectedAreaElement, 'intgrtn-opened');
                    } else {
                        window.intgrtn.elements.removeClass(areasDropDown, 'intgrtn-opened');
                        window.intgrtn.elements.removeClass(selectedAreaElement, 'intgrtn-opened');
                    }
                    e.stopPropagation();
                });

                setInterval(function () {
                    if (lastValue != element.value) {
                        selectDropDownItemByPhoneCode(element.value);
                        lastValue = element.value;
                    }
                }, 50);

                element.parentNode.insertBefore(mainHolder, element);
            });
        }

        if (!window.intgrtn.attachedEventDocumentClickByAreaFlags) {
            window.intgrtn.attachedEventDocumentClickByAreaFlags = true;

            window.intgrtn.elements.on(document, 'click', function (e) {
                window.intgrtn.elements.removeClass('.intgrtn-areas-dropdown', 'intgrtn-opened');
                window.intgrtn.elements.removeClass('.intgrtn-selected-area', 'intgrtn-opened');
            });
        }
    };
    window.intgrtn.generateSignupForm = function (options, element) {
        if (typeof options === "undefined") {
            options = {};
        }
        options = window.intgrtn.merge(window.intgrtn.options.forms.signup, options);

        var form = window.intgrtn.elements.create("form", "", {
            "name": "intgrtnFormSignup",
            "novalidate": "",
            "class": "intgrtn-form-signup",
        });

        form.intgrtn = {
            options: options,
        };

        var firstNameHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-holder intgrtn-input-holder-first-name",
        });
        var firstNameInput = window.intgrtn.elements.create("input", "", {
            "class": "intgrtn-input",
            "type": "text",
            "name": "firstName",
            "placeholder": options.placeholders.firstName,
            "value": window.intgrtn.lookup("firstName", true, ""),
        });
        if (options.fields.firstName.required) {
            firstNameInput.setAttribute("required", "");
        }
        window.intgrtn.elements.appendChild(firstNameHolder, firstNameInput);

        var lastNameHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-holder intgrtn-input-holder-last-name",
        });
        var lastNameInput = window.intgrtn.elements.create("input", "", {
            "class": "intgrtn-input",
            "type": "text",
            "name": "lastName",
            "placeholder": options.placeholders.lastName,
            "value": window.intgrtn.lookup("lastName", true, ""),
        });
        if (options.fields.lastName.required) {
            lastNameInput.setAttribute("required", "");
        }
        window.intgrtn.elements.appendChild(lastNameHolder, lastNameInput);

        var emailHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-holder intgrtn-input-holder-email",
        });
        var emailInput = window.intgrtn.elements.create("input", "", {
            "class": "intgrtn-input",
            "type": "email",
            "name": "email",
            "placeholder": options.placeholders.email,
            "value": window.intgrtn.lookup("email", true, ""),
        });
        if (options.fields.email.required) {
            emailInput.setAttribute("required", "");
        }
        window.intgrtn.elements.appendChild(emailHolder, emailInput);

        var passwordHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-holder intgrtn-input-holder-password",
        });
        var passwordInputGroup = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-group",
        });
        var passwordInput = window.intgrtn.elements.create("input", "", {
            "class": "intgrtn-input",
            "data-intgrtn-tooltip": options.fields.password.tooltip,
            "name": "password",
            "placeholder": options.placeholders.password,
        });
        if (options.fields.password.required) {
            passwordInput.setAttribute("required", "");
        }
        window.intgrtn.elements.appendChild(passwordInputGroup, passwordInput);

        var passwordEyeIcon = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-password-eye-icon"
        });
        window.intgrtn.elements.appendChild(passwordInputGroup, passwordEyeIcon);

        var btnGeneratePasswordHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-btn-generate-password-holder",
        });
        var btnGeneratePassword = window.intgrtn.elements.create("button", options.buttons.generatePassword.text, {
            "class": "intgrtn-btn-generate-password",
            "type": "button",
        });

        if (options.buttons.generatePassword.show == false) {
            passwordInput.setAttribute("type", "password");
            passwordInput.setAttribute("autocomplete", "new-password");
            window.intgrtn.elements.appendChild(passwordHolder, passwordInputGroup);
        } else {
            passwordInput.setAttribute("type", "text");
            passwordInput.value = window.intgrtn.generatePassword(form);
            window.intgrtn.elements.addClass(passwordHolder, 'has-btn-generate-password');
            window.intgrtn.elements.addClass(passwordEyeIcon, 'intgrtn-visible');

            window.intgrtn.elements.appendChild(btnGeneratePasswordHolder, passwordInputGroup);
            window.intgrtn.elements.appendChild(btnGeneratePasswordHolder, btnGeneratePassword);
            window.intgrtn.elements.appendChild(passwordHolder, btnGeneratePasswordHolder);
        }

        var phoneHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-holder intgrtn-input-holder-phone",
        });
        var phoneInputGroup = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-group",
        });
        var phoneInput = window.intgrtn.elements.create("input", "", {
            "class": "intgrtn-input intgrtn-input-phone",
            "type": "text",
            "name": "phone",
            "size": "1",
            "placeholder": options.placeholders.phone,
            "value": window.intgrtn.lookup("phone", true, ""),
        });
        if (options.fields.phone.required) {
            phoneInput.setAttribute("required", "");
        }
        var areaCodeInput = window.intgrtn.elements.create("input", "", {
            "class": "intgrtn-input intgrtn-input-area-code",
            "type": "text",
            "name": "areaCode",
            "placeholder": options.placeholders.areaCode,
            "value": window.intgrtn.lookup("areaCode", true, ""),
            "data-country-code": window.intgrtn.lookup("areaCountryCode", true, "")
        });
        if (options.fields.areaCode.required) {
            areaCodeInput.setAttribute("required", "");
        }
        window.intgrtn.elements.appendChild(phoneInputGroup, areaCodeInput);
        window.intgrtn.elements.appendChild(phoneInputGroup, phoneInput);
        window.intgrtn.elements.appendChild(phoneHolder, phoneInputGroup);


        window.intgrtn.generateAreaFlagsDropdown(areaCodeInput, phoneInput);

        var checkboxAgreeTermsHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-holder intgrtn-input-holder-checkbox-agree-terms",
        });
        var checkboxAgreeTermsLabel = window.intgrtn.elements.create("label", "", {
            "class": "intgrtn-checkbox-label-agree-terms",
        });
        var checkboxAgreeTermsLabelText = window.intgrtn.elements.create("span", options.labels.checkboxAgreeTerms, {
            "class": "intgrtn-checkbox-label-agree-terms-text",
        });
        var checkboxAgreeTerms = window.intgrtn.elements.create("input", "", {
            "class": "intgrtn-checkbox intgrtn-input-checkbox-agree-terms",
            "type": "checkbox",
            "name": "checkboxAgreeTerms",
            "placeholder": options.placeholders.checkboxAgreeTerms,
        });
        if (options.fields.checkboxAgreeTerms.required == true) {
            window.intgrtn.elements.setAttribute(checkboxAgreeTerms, "required", "");
        }
        window.intgrtn.elements.appendChild(checkboxAgreeTermsLabel, checkboxAgreeTerms);
        window.intgrtn.elements.appendChild(checkboxAgreeTermsLabel, checkboxAgreeTermsLabelText);
        window.intgrtn.elements.appendChild(checkboxAgreeTermsHolder, checkboxAgreeTermsLabel);

        var btnSubmitHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-btn-submit-holder",
        });
        var btnSubmit = window.intgrtn.elements.create("button", options.buttons.submit.text, {
            "class": "intgrtn-btn-submit",
            "type": "submit",
        });
        window.intgrtn.elements.appendChild(btnSubmitHolder, btnSubmit);

        var loaderHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-loader-holder",
        });
        var loader = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-lds-dual-ring",
        });
        var loaderTextHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-loader-text-holder",
        });
        var loaderText = window.intgrtn.elements.create("div", "Loading...", {
            "class": "intgrtn-loader-text",
        });
        window.intgrtn.elements.appendChild(loaderHolder, loaderTextHolder);
        window.intgrtn.elements.appendChild(loaderTextHolder, loader);
        window.intgrtn.elements.appendChild(loaderTextHolder, loaderText);

        window.intgrtn.elements.appendChild(form, firstNameHolder);
        window.intgrtn.elements.appendChild(form, lastNameHolder);
        window.intgrtn.elements.appendChild(form, emailHolder);
        window.intgrtn.elements.appendChild(form, passwordHolder);
        window.intgrtn.elements.appendChild(form, phoneHolder);

        /**
         * Custom Fields
         */
        window.intgrtn.getProjectDetails(function (response) {
            if (response.data.customFields) {
                window.intgrtn.generateCustomFields(response.data.customFields).forEach(function (item) {
                    window.intgrtn.elements.appendChild(form, item);
                });
            }
        });
        /**
         * Custom Fields end
         */

        if (options.fields.checkboxAgreeTerms.show == true) {
            window.intgrtn.elements.appendChild(form, checkboxAgreeTermsHolder);
        }
        window.intgrtn.elements.appendChild(form, btnSubmitHolder);
        window.intgrtn.elements.appendChild(form, loaderHolder);

        if (options.fields.password.verboseErrors.enabled == true) {
            window.intgrtn.elements.setAttribute(passwordInput, "data-intgrtn-tooltip", "");

            var inputErrorHolderVerbose = window.intgrtn.elements.create("div", "", {
                "class": "intgrtn-input-message-error-verbose"
            });

            for (var i = 0; i < options.fields.password.verboseErrors.messages.length; i++) {
                var currentMessage = options.fields.password.verboseErrors.messages[i];

                if (currentMessage.id == "passwordRegExp1Lowercase" && options.fields.password.patternLowercaseLetter === false) {
                    continue;
                } else if (currentMessage.id == "passwordRegExp1Uppercase" && options.fields.password.patternUppercaseLetter === false) {
                    continue;
                } else if (currentMessage.id == "passwordRegExpNoSpecialChars" && options.fields.password.patternNoSpecialChars === false) {
                    continue;
                } else if (currentMessage.id == "passwordRegExpNumber" && options.fields.password.patternNumber === false) {
                    continue;
                } else if (currentMessage.id == "passwordRegExpLetter" && options.fields.password.patternLetter === false) {
                    continue;
                } else if (currentMessage.id == "passwordConfirmMatch") {
                    continue;
                }

                var currentClasses = 'intgrtn-single-message intgrtn-untouched';
                var currentMessageText = currentMessage.text.replace(/{{passwordMinLength}}/g, options.fields.password.minLength).replace(/{{passwordMaxLength}}/g, options.fields.password.maxLength);
                var currentEntry = window.intgrtn.elements.create('div', currentMessageText, {
                    class: currentClasses,
                    "data-intgrtn-message-id": currentMessage.id,
                });
                window.intgrtn.elements.appendChild(inputErrorHolderVerbose, currentEntry);
            }
            window.intgrtn.elements.appendChild(passwordHolder, inputErrorHolderVerbose);

            window.intgrtn.elements.on(passwordInput, "input", function (e) {
                window.intgrtn.validateSignupFormVerboseMessages(form);
            });
        }

        if (!window.intgrtn.lookup("areaCode", true)) {
            window.intgrtn.getProjectDetails(function (response) {
                if (response.data.client.location.areaCode) {
                    areaCodeInput.value = response.data.client.location.areaCode;
                }
            });
        }

        /**
         * Remove non numeric symbols from phone input
         */
        window.intgrtn.elements.on(phoneInput, "input", function (e) {
            setTimeout(function () {
                var filteredValue = phoneInput.value.replace(/\D/g, '');
                if (filteredValue !== phoneInput.value) {
                    phoneInput.value = filteredValue;
                    window.intgrtn.elements.trigger(phoneInput, "input");
                    window.intgrtn.elements.trigger(phoneInput, "change");
                }
            }, 100);
        });

        window.intgrtn.elements.on(passwordEyeIcon, "click", function (e) {
            if (window.intgrtn.elements.hasClass(passwordEyeIcon, 'intgrtn-visible') == true) {
                window.intgrtn.elements.removeClass(passwordEyeIcon, 'intgrtn-visible');
                window.intgrtn.elements.setAttribute(passwordInput, 'type', 'password');
            } else {
                window.intgrtn.elements.addClass(passwordEyeIcon, 'intgrtn-visible');
                window.intgrtn.elements.setAttribute(passwordInput, 'type', 'text');
            }
        });

        window.intgrtn.elements.on(btnGeneratePassword, "click", function (e) {
            passwordInput.value = window.intgrtn.generatePassword(form);
            window.intgrtn.elements.trigger(passwordInput, "input");
            window.intgrtn.elements.trigger(passwordInput, "change");
        });

        window.intgrtn.elements.find("input, textarea, select", form).forEach(function (element) {
            window.intgrtn.elements.on(element, "input", function (e) {
                if (window.intgrtn.elements.hasClass(form, "intgrtn-form-submitted")) {
                    if (element && element.getAttribute("data-intgrtn-validate-events-name-suffix")) {
                        options.validateEvents.eventNameSuffix = element.getAttribute("data-intgrtn-validate-events-name-suffix");
                    }
                    window.intgrtn.validateSignupForm(form, {
                        fireEvents: false,
                        eventNameSuffix: options.validateEvents.eventNameSuffix,
                    });
                }
            });
        });

        window.intgrtn.elements.on(form, "submit", function (e) {
            var firstName = window.intgrtn.elements.findFirst("[name='firstName']", form);
            var lastName = window.intgrtn.elements.findFirst("[name='lastName']", form);
            var email = window.intgrtn.elements.findFirst("[name='email']", form);
            var password = window.intgrtn.elements.findFirst("[name='password']", form);
            var areaCode = window.intgrtn.elements.findFirst("[name='areaCode']", form);
            var phone = window.intgrtn.elements.findFirst("[name='phone']", form);
            var customFieldsInputs = window.intgrtn.elements.find("[data-user-custom-field-id]", form);
            var formMessageErrorHolder = window.intgrtn.elements.create("div", "", {
                "class": "intgrtn-form-message-error"
            });
            var formMessageSuccessHolder = window.intgrtn.elements.create("div", "", {
                "class": "intgrtn-form-message-success"
            });

            window.intgrtn.elements.addClass(form, "intgrtn-form-submitted");
            window.intgrtn.elements.removeClass(form, "intgrtn-form-has-error");
            window.intgrtn.elements.removeClass(form, "intgrtn-form-success");

            /* Remove form messages */
            window.intgrtn.elements.find(".intgrtn-form-message-error", form).forEach(function (element) {
                window.intgrtn.elements.remove(element);
            });
            window.intgrtn.elements.find(".intgrtn-form-message-success", form).forEach(function (element) {
                window.intgrtn.elements.remove(element);
            });

            if (element && element.getAttribute("data-intgrtn-validate-events-name-suffix")) {
                options.validateEvents.eventNameSuffix = element.getAttribute("data-intgrtn-validate-events-name-suffix");
            }

            var platforms = [];
            var excludePlatforms = [];

            if (window.intgrtn.lookup("platforms", true)) {
                platforms = window.intgrtn.lookup("platforms", true).split(",");
            }
            if (window.intgrtn.lookup("excludePlatforms", true)) {
                excludePlatforms = window.intgrtn.lookup("excludePlatforms", true).split(",");
            }
            if (element) {
                if (element.getAttribute("data-intgrtn-platforms")) {
                    platforms = element.getAttribute("data-intgrtn-platforms").split(",");
                }
                if (element.getAttribute("data-intgrtn-exclude-platforms")) {
                    excludePlatforms = element.getAttribute("data-intgrtn-exclude-platforms").split(",");
                }
                if (element.getAttribute("data-intgrtn-on-success-redirect-url") !== null) {
                    options.onSuccess.redirectUrl = element.getAttribute("data-intgrtn-on-success-redirect-url");
                }
                if (element.getAttribute("data-intgrtn-on-success-auto-redirect")) {
                    options.onSuccess.autoRedirect = element.getAttribute("data-intgrtn-on-success-auto-redirect") == 1;
                }
                if (element.getAttribute("data-intgrtn-on-success-redirect-top")) {
                    options.onSuccess.redirectTop = element.getAttribute("data-intgrtn-on-success-redirect-top") == 1;
                }
            }

            var params = {
                clickID: window.intgrtn.lookup("clickID", true),
                custom: window.intgrtn.lookup("custom", true),
                custom1: window.intgrtn.lookup("custom1", true),
                custom2: window.intgrtn.lookup("custom2", true),
                custom3: window.intgrtn.lookup("custom3", true),
                custom4: window.intgrtn.lookup("custom4", true),
                custom5: window.intgrtn.lookup("custom5", true),
                autoSignup: window.intgrtn.lookup("autoSignup", true),
                isTest: window.intgrtn.lookup("isTest", true),
                bid: window.intgrtn.lookup("bID", true),
                baa: window.intgrtn.lookup("baa", true),
                ip: window.intgrtn.lookup("ip", true),
                locale: window.intgrtn.lookup("locale", true),
                firstName: firstName.value.trim(),
                lastName: lastName.value.trim(),
                email: email.value,
                password: password.value,
                areaCode: areaCode.value,
                phone: phone.value,
                platforms: platforms,
                excludePlatforms: excludePlatforms,
            };

            /**
             * Mapping user custom fields , setting new param.customFields
             */
            params.customFields = window.intgrtn.mapCustomFieldsInputsToCustomFieldParams(customFieldsInputs);

            /**
             * Get custom fields from cookies
             */
            var intgrtnCustomFields = window.intgrtn.cookies.get("intgrtn_customFields");
            if (intgrtnCustomFields) {
                intgrtnCustomFields = JSON.parse(intgrtnCustomFields)
                Object.keys(intgrtnCustomFields).forEach(function (key) {
                    var check = params.customFields.filter(function (field) {
                        if (field.userCustomFieldID == key) {
                            return true;
                        }
                        return false;
                    });
                    if (check.length == 0) {
                        params.customFields.push({
                            "value": intgrtnCustomFields[key],
                            "userCustomFieldID": key,
                        });
                    }
                });
            }

            if (element && element.getAttribute("data-intgrtn-additional-params")) {
                options.additionalParams = window.intgrtn.merge(options.additionalParams, window.intgrtn.parseQuery(element.getAttribute("data-intgrtn-additional-params")));
            }
            params = window.intgrtn.merge(params, options.additionalParams);

            window.intgrtn.fireEvent({
                name: "intgrtn-form-signup-submit" + options.validateEvents.eventNameSuffix,
                value: JSON.stringify(params),
            });

            var signupFormFullValidation = window.intgrtn.validateSignupForm(form, {
                eventNameSuffix: options.validateEvents.eventNameSuffix,
            });
            if (signupFormFullValidation) {
                window.intgrtn.store("firstName", firstName.value.trim());
                window.intgrtn.store("lastName", lastName.value.trim());
                window.intgrtn.store("email", email.value);
                window.intgrtn.store("areaCode", areaCode.value);
                window.intgrtn.store("areaCountryCode", areaCode.getAttribute('data-country-code'));
                window.intgrtn.store("phone", phone.value);

                window.intgrtn.elements.addClass(form, "intgrtn-form-loading");
                window.intgrtn.elements.setAttribute(btnSubmit, "disabled", "disabled");
                window.intgrtn.elements.find("input", form).forEach(function (element) {
                    window.intgrtn.elements.setAttribute(element, "disabled", "disabled");
                });

                /* Make request */
                window.intgrtn.elements.addClass(loaderHolder, "show");
                window.intgrtn.sendSignupRequest(params, function (response, statusCode) {
                    window.intgrtn.store("signupRequestID", response.data.signupRequestID, 2);
                    formMessageSuccessHolder.innerHTML = response.messages[0];

                    var executeActionsAfterSignup = function () {
                        window.intgrtn.elements.addClass(form, "intgrtn-form-success");

                        /** Redirect */
                        if (options.onSuccess.autoRedirect) {
                            if (options.onSuccess.redirectUrl) {
                                if (options.onSuccess.redirectTop == true) {
                                    window.top.location.href = options.onSuccess.redirectUrl;
                                } else {
                                    window.location.href = options.onSuccess.redirectUrl;
                                }
                            } else {
                                window.intgrtn.goToBrokerLoginUrlBySignupRequestResponse(response);
                            }
                        } else {
                            window.intgrtn.elements.appendChild(form, formMessageSuccessHolder);

                            window.intgrtn.elements.removeClass(loaderHolder, "show");
                            window.intgrtn.elements.removeClass(form, "intgrtn-form-loading");
                            window.intgrtn.elements.removeAttribute(btnSubmit, "disabled");
                            window.intgrtn.elements.find("input", form).forEach(function (element) {
                                window.intgrtn.elements.removeAttribute(element, "disabled", "disabled");
                            });
                        }

                        window.intgrtn.events.trigger("form.signup.success", form, response);
                    };

                    window.intgrtn.elements.setHtml(loaderText, "Please wait while we are preparing your account... This process can take up to 5 seconds...");
                    window.intgrtn.firePostbacksBySignupRequestResponse(response, function () {
                        executeActionsAfterSignup();
                    }, function () {
                        executeActionsAfterSignup();
                    });
                }, function (response, statusCode) {
                    if (response.messages && response.messages[0]) {
                        formMessageErrorHolder.innerHTML = response.messages[0];
                    } else {
                        formMessageErrorHolder.innerHTML = "An error occurred. Please try again later.";
                    }
                    window.intgrtn.elements.appendChild(form, formMessageErrorHolder);

                    window.intgrtn.elements.removeClass(loaderHolder, "show");
                    window.intgrtn.elements.addClass(form, "intgrtn-form-has-error");
                    window.intgrtn.elements.removeClass(form, "intgrtn-form-loading");
                    window.intgrtn.elements.removeAttribute(btnSubmit, "disabled");
                    window.intgrtn.elements.find("input", form).forEach(function (element) {
                        window.intgrtn.elements.removeAttribute(element, "disabled", "disabled");
                    });

                    window.intgrtn.events.trigger("form.signup.error", form, response);
                }, {
                    eventNameSuffix: options.validateEvents.eventNameSuffix,
                });
            }

            window.intgrtn.events.trigger("form.signup.submit", form);
            e.preventDefault();
        });

        if (element) {
            window.intgrtn.elements.setHtml(element, form);
        }

        return form;
    };
    window.intgrtn.generateSignupForm3Steps = function (options, element) {
        if (typeof options === "undefined") {
            options = {};
        }
        options = window.intgrtn.merge(window.intgrtn.options.forms.signup, options);

        var form = window.intgrtn.elements.create("form", "", {
            "name": "intgrtnFormSignup3Steps",
            "novalidate": "",
            "class": "intgrtn-form-signup-3-steps",
        });
        var currentStep = 1;

        form.intgrtn = {
            options: options,
            goToStep: function (step) {
                var valid = true;
                window.intgrtn.elements.addClass(window.intgrtn.elements.findFirst(".intgrtn-step.intgrtn-active", form), 'intgrtn-submitted');

                var changeStep = function () {
                    if (valid == false) {
                        return false;
                    }

                    window.intgrtn.validate.signupForm.clearValidation(form);

                    window.intgrtn.elements.find(".intgrtn-step", form).forEach(function (element) {
                        window.intgrtn.elements.removeClass(element, 'intgrtn-active');
                        window.intgrtn.elements.removeClass(element, 'intgrtn-submitted');
                    });
                    window.intgrtn.elements.addClass(window.intgrtn.elements.findFirst(".intgrtn-step-" + step, form), 'intgrtn-active');

                    window.intgrtn.elements.find(".intgrtn-steps-navigation-item", form).forEach(function (element) {
                        window.intgrtn.elements.removeClass(element, 'intgrtn-active');
                    });
                    window.intgrtn.elements.addClass(window.intgrtn.elements.findFirst(".intgrtn-steps-navigation-item-" + step, form), 'intgrtn-active');

                    if (step > 1) {
                        window.intgrtn.elements.addClass(window.intgrtn.elements.findFirst(".intgrtn-steps-navigation-item-" + (step - 1), form), 'intgrtn-completed');
                        window.intgrtn.elements.addClass(window.intgrtn.elements.findFirst(".intgrtn-step-" + (step - 1), form), 'intgrtn-completed');
                    }

                    currentStep = step;
                    window.intgrtn.events.trigger("form.signup.step.changed", {
                        form: form,
                        step: step,
                    });
                };
                if (step == 1) {
                    changeStep();
                } else if (step == 2) {
                    if (window.intgrtn.validate.signupForm.firstName(firstNameInput).valid == false) {
                        valid = false;
                    }
                    if (window.intgrtn.validate.signupForm.lastName(lastNameInput).valid == false) {
                        valid = false;
                    }
                    if (window.intgrtn.validate.signupForm.email(emailInput).valid == false) {
                        valid = false;
                    }
                    if (valid == true) {
                        window.intgrtn.elements.addClass(loaderHolder, "show");
                        window.intgrtn.sendOptinRequest({
                            clickID: window.intgrtn.lookup("clickID", true),
                            custom: window.intgrtn.lookup("custom", true),
                            custom1: window.intgrtn.lookup("custom1", true),
                            custom2: window.intgrtn.lookup("custom2", true),
                            custom3: window.intgrtn.lookup("custom3", true),
                            custom4: window.intgrtn.lookup("custom4", true),
                            custom5: window.intgrtn.lookup("custom5", true),
                            isTest: window.intgrtn.lookup("isTest", true),
                            ip: window.intgrtn.lookup("ip", true),
                            firstName: firstNameInput.value,
                            lastName: lastNameInput.value,
                            email: emailInput.value,
                        }, function (response, statusCode) {
                            if (firstNameInput.value) {
                                window.intgrtn.store("firstName", firstNameInput.value);
                            }
                            if (lastNameInput.value) {
                                window.intgrtn.store("lastName", lastNameInput.value);
                            }
                            if (emailInput.value) {
                                window.intgrtn.store("email", emailInput.value);
                            }

                            window.intgrtn.fireOptinCliendSidePostbacksByOptinResponse(response, function () {
                                window.intgrtn.elements.removeClass(loaderHolder, "show");
                                changeStep();
                            }, function () {
                                window.intgrtn.elements.removeClass(loaderHolder, "show");
                                changeStep();
                            });
                        }, function (response, statusCode) {
                            window.intgrtn.elements.removeClass(loaderHolder, "show");

                            if (response.messages && response.messages[0]) {
                                formMessageErrorHolder.innerHTML = response.messages[0];
                            } else {
                                formMessageErrorHolder.innerHTML = "An error occurred. Please try again later.";
                            }
                            window.intgrtn.elements.appendChild(form, formMessageErrorHolder);
                        });
                    }
                } else if (step == 3) {
                    if (window.intgrtn.validate.signupForm.password(passwordInput).valid == false) {
                        valid = false;
                    }
                    if (options.fields.passwordConfirm.show == true) {
                        if (window.intgrtn.validate.signupForm.passwordConfirm(passwordInput, passwordConfirmInput).valid == false) {
                            valid = false;
                        }
                    }

                    changeStep();
                }
            },
        };

        var stepsHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-steps-holder",
        });

        var stepsNavigation = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-steps-navigation",
        });

        var stepsNavigationItem1 = window.intgrtn.elements.create("div", "1", {
            "class": "intgrtn-steps-navigation-item intgrtn-steps-navigation-item-1 intgrtn-active",
        });
        window.intgrtn.elements.appendChild(stepsNavigation, stepsNavigationItem1);
        var stepsNavigationItem2 = window.intgrtn.elements.create("div", "2", {
            "class": "intgrtn-steps-navigation-item intgrtn-steps-navigation-item-2",
        });
        window.intgrtn.elements.appendChild(stepsNavigation, stepsNavigationItem2);
        var stepsNavigationItem3 = window.intgrtn.elements.create("div", "3", {
            "class": "intgrtn-steps-navigation-item intgrtn-steps-navigation-item-3",
        });
        window.intgrtn.elements.appendChild(stepsNavigation, stepsNavigationItem3);

        var step1 = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-step intgrtn-step-1 intgrtn-active",
        });
        var step2 = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-step intgrtn-step-2",
        });
        var step3 = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-step intgrtn-step-3",
        });
        window.intgrtn.elements.appendChild(stepsHolder, step1);
        window.intgrtn.elements.appendChild(stepsHolder, step2);
        window.intgrtn.elements.appendChild(stepsHolder, step3);

        var firstNameHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-holder intgrtn-input-holder-first-name",
        });
        var firstNameInput = window.intgrtn.elements.create("input", "", {
            "class": "intgrtn-input",
            "type": "text",
            "name": "firstName",
            "placeholder": options.placeholders.firstName,
            "value": window.intgrtn.lookup("firstName", true, ""),
        });
        if (options.fields.firstName.required) {
            firstNameInput.setAttribute("required", "");
        }
        window.intgrtn.elements.appendChild(firstNameHolder, firstNameInput);

        var lastNameHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-holder intgrtn-input-holder-last-name",
        });
        var lastNameInput = window.intgrtn.elements.create("input", "", {
            "class": "intgrtn-input",
            "type": "text",
            "name": "lastName",
            "placeholder": options.placeholders.lastName,
            "value": window.intgrtn.lookup("lastName", true, ""),
        });
        if (options.fields.lastName.required) {
            lastNameInput.setAttribute("required", "");
        }
        window.intgrtn.elements.appendChild(lastNameHolder, lastNameInput);

        var emailHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-holder intgrtn-input-holder-email",
        });
        var emailInput = window.intgrtn.elements.create("input", "", {
            "class": "intgrtn-input",
            "type": "email",
            "name": "email",
            "placeholder": options.placeholders.email,
            "value": window.intgrtn.lookup("email", true, ""),
        });
        if (options.fields.email.required) {
            emailInput.setAttribute("required", "");
        }
        window.intgrtn.elements.appendChild(emailHolder, emailInput);

        var btnGoToStep2Holder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-btn-go-to-step-holder",
        });
        var btnGoToStep2 = window.intgrtn.elements.create("button", options.buttons.goToStep2.text, {
            "class": "intgrtn-btn-go-to-step",
            "type": "button",
        });
        window.intgrtn.elements.appendChild(btnGoToStep2Holder, btnGoToStep2);

        var passwordHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-holder intgrtn-input-holder-password",
        });
        var passwordInputGroup = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-group",
        });
        var passwordInput = window.intgrtn.elements.create("input", "", {
            "class": "intgrtn-input",
            "data-intgrtn-tooltip": options.fields.password.tooltip,
            "name": "password",
            "placeholder": options.placeholders.password,
        });
        if (options.fields.password.required) {
            passwordInput.setAttribute("required", "");
        }
        window.intgrtn.elements.appendChild(passwordInputGroup, passwordInput);

        var passwordEyeIcon = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-password-eye-icon"
        });
        window.intgrtn.elements.appendChild(passwordInputGroup, passwordEyeIcon);

        var passwordConfirmHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-holder intgrtn-input-holder-password-confirm",
        });
        var passwordConfirmInputGroup = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-group",
        });
        var passwordConfirmInput = window.intgrtn.elements.create("input", "", {
            "class": "intgrtn-input",
            "name": "passwordConfirm",
            "placeholder": options.placeholders.passwordConfirm,
        });
        if (options.fields.passwordConfirm.required) {
            passwordConfirmInput.setAttribute("required", "");
        }
        window.intgrtn.elements.appendChild(passwordConfirmInputGroup, passwordConfirmInput);

        var passwordConfirmEyeIcon = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-password-eye-icon"
        });
        window.intgrtn.elements.appendChild(passwordConfirmInputGroup, passwordConfirmEyeIcon);

        var btnGeneratePasswordHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-btn-generate-password-holder",
        });
        var btnGeneratePassword = window.intgrtn.elements.create("button", options.buttons.generatePassword.text, {
            "class": "intgrtn-btn-generate-password",
            "type": "button",
        });

        if (options.buttons.generatePassword.show == false) {
            passwordInput.setAttribute("type", "password");
            passwordInput.setAttribute("autocomplete", "new-password");
            passwordConfirmInput.setAttribute("type", "password");
            passwordConfirmInput.setAttribute("autocomplete", "new-password");
            window.intgrtn.elements.appendChild(passwordHolder, passwordInputGroup);
        } else {
            passwordInput.setAttribute("type", "text");
            passwordInput.value = window.intgrtn.generatePassword(form);

            passwordConfirmInput.setAttribute("type", "text");
            passwordConfirmInput.value = passwordInput.value;

            window.intgrtn.elements.addClass(passwordHolder, 'has-btn-generate-password');
            window.intgrtn.elements.addClass(passwordEyeIcon, 'intgrtn-visible');
            window.intgrtn.elements.addClass(passwordConfirmEyeIcon, 'intgrtn-visible');

            window.intgrtn.elements.appendChild(btnGeneratePasswordHolder, passwordInputGroup);
            window.intgrtn.elements.appendChild(btnGeneratePasswordHolder, btnGeneratePassword);
            window.intgrtn.elements.appendChild(passwordHolder, btnGeneratePasswordHolder);
        }

        window.intgrtn.elements.appendChild(passwordConfirmHolder, passwordConfirmInputGroup);

        var btnGoToStep3Holder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-btn-go-to-step-holder",
        });
        var btnGoToStep3 = window.intgrtn.elements.create("button", options.buttons.goToStep3.text, {
            "class": "intgrtn-btn-go-to-step",
            "type": "button",
        });
        window.intgrtn.elements.appendChild(btnGoToStep3Holder, btnGoToStep3);

        var phoneHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-holder intgrtn-input-holder-phone",
        });
        var phoneInputGroup = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-group",
        });
        var phoneInput = window.intgrtn.elements.create("input", "", {
            "class": "intgrtn-input intgrtn-input-phone",
            "type": "text",
            "name": "phone",
            "size": "1",
            "placeholder": options.placeholders.phone,
            "value": window.intgrtn.lookup("phone", true, ""),
        });
        if (options.fields.phone.required) {
            phoneInput.setAttribute("required", "");
        }
        var areaCodeInput = window.intgrtn.elements.create("input", "", {
            "class": "intgrtn-input intgrtn-input-area-code",
            "type": "text",
            "name": "areaCode",
            "placeholder": options.placeholders.areaCode,
            "value": window.intgrtn.lookup("areaCode", true, ""),
            "data-country-code": window.intgrtn.lookup("areaCountryCode", true, "")
        });
        if (options.fields.areaCode.required) {
            areaCodeInput.setAttribute("required", "");
        }
        window.intgrtn.elements.appendChild(phoneInputGroup, areaCodeInput);
        window.intgrtn.elements.appendChild(phoneInputGroup, phoneInput);
        window.intgrtn.elements.appendChild(phoneHolder, phoneInputGroup);


        window.intgrtn.generateAreaFlagsDropdown(areaCodeInput, phoneInput);

        var checkboxAgreeTermsHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-holder intgrtn-input-holder-checkbox-agree-terms",
        });
        var checkboxAgreeTermsLabel = window.intgrtn.elements.create("label", "", {
            "class": "intgrtn-checkbox-label-agree-terms",
        });
        var checkboxAgreeTermsLabelText = window.intgrtn.elements.create("span", options.labels.checkboxAgreeTerms, {
            "class": "intgrtn-checkbox-label-agree-terms-text",
        });
        var checkboxAgreeTerms = window.intgrtn.elements.create("input", "", {
            "class": "intgrtn-checkbox intgrtn-input-checkbox-agree-terms",
            "type": "checkbox",
            "name": "checkboxAgreeTerms",
            "placeholder": options.placeholders.checkboxAgreeTerms,
        });
        if (options.fields.checkboxAgreeTerms.required == true) {
            window.intgrtn.elements.setAttribute(checkboxAgreeTerms, "required", "");
        }
        window.intgrtn.elements.appendChild(checkboxAgreeTermsLabel, checkboxAgreeTerms);
        window.intgrtn.elements.appendChild(checkboxAgreeTermsLabel, checkboxAgreeTermsLabelText);
        window.intgrtn.elements.appendChild(checkboxAgreeTermsHolder, checkboxAgreeTermsLabel);

        var btnSubmitHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-btn-submit-holder",
        });
        var btnSubmit = window.intgrtn.elements.create("button", options.buttons.submit.text, {
            "class": "intgrtn-btn-submit",
            "type": "submit",
        });
        window.intgrtn.elements.appendChild(btnSubmitHolder, btnSubmit);

        var loaderHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-loader-holder",
        });
        var loader = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-lds-dual-ring",
        });
        var loaderTextHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-loader-text-holder",
        });
        var loaderText = window.intgrtn.elements.create("div", "Loading...", {
            "class": "intgrtn-loader-text",
        });
        window.intgrtn.elements.appendChild(loaderHolder, loaderTextHolder);
        window.intgrtn.elements.appendChild(loaderTextHolder, loader);
        window.intgrtn.elements.appendChild(loaderTextHolder, loaderText);

        var formMessageErrorHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-form-message-error"
        });
        var formMessageSuccessHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-form-message-success"
        });

        window.intgrtn.elements.appendChild(step1, firstNameHolder);
        window.intgrtn.elements.appendChild(step1, lastNameHolder);
        window.intgrtn.elements.appendChild(step1, emailHolder);
        window.intgrtn.elements.appendChild(step1, btnGoToStep2Holder);
        window.intgrtn.elements.appendChild(step2, passwordHolder);
        if (options.fields.passwordConfirm.show == true) {
            window.intgrtn.elements.appendChild(step2, passwordConfirmHolder);
        }
        window.intgrtn.elements.appendChild(step2, btnGoToStep3Holder);
        window.intgrtn.elements.appendChild(step3, phoneHolder);

        /**
         * Custom Fields start
         */
        window.intgrtn.getProjectDetails(function (response) {
            if (response.data.customFields) {
                window.intgrtn.generateCustomFields(response.data.customFields).forEach(function (item) {
                    window.intgrtn.elements.appendChild(step3, item);
                });
            }
        });
        /**
         * Custom Fields end
         */

        if (options.fields.checkboxAgreeTerms.show == true) {
            window.intgrtn.elements.appendChild(step3, checkboxAgreeTermsHolder);
        }
        window.intgrtn.elements.appendChild(step3, btnSubmitHolder);
        window.intgrtn.elements.appendChild(form, loaderHolder);
        if (options.steps.show) {
            window.intgrtn.elements.appendChild(form, stepsNavigation);
        }
        window.intgrtn.elements.appendChild(form, stepsHolder);

        if (options.fields.password.verboseErrors.enabled == true) {
            window.intgrtn.elements.setAttribute(passwordInput, "data-intgrtn-tooltip", "");

            var inputErrorHolderVerbose = window.intgrtn.elements.create("div", "", {
                "class": "intgrtn-input-message-error-verbose"
            });

            for (var i = 0; i < options.fields.password.verboseErrors.messages.length; i++) {
                var currentMessage = options.fields.password.verboseErrors.messages[i];

                if (currentMessage.id == "passwordRegExp1Lowercase" && options.fields.password.patternLowercaseLetter === false) {
                    continue;
                } else if (currentMessage.id == "passwordRegExp1Uppercase" && options.fields.password.patternUppercaseLetter === false) {
                    continue;
                } else if (currentMessage.id == "passwordRegExpNoSpecialChars" && options.fields.password.patternNoSpecialChars === false) {
                    continue;
                } else if (currentMessage.id == "passwordRegExpNumber" && options.fields.password.patternNumber === false) {
                    continue;
                } else if (currentMessage.id == "passwordRegExpLetter" && options.fields.password.patternLetter === false) {
                    continue;
                }

                var currentClasses = 'intgrtn-single-message intgrtn-untouched';
                var currentMessageText = currentMessage.text.replace(/{{passwordMinLength}}/g, options.fields.password.minLength).replace(/{{passwordMaxLength}}/g, options.fields.password.maxLength);
                var currentEntry = window.intgrtn.elements.create('div', currentMessageText, {
                    class: currentClasses,
                    "data-intgrtn-message-id": currentMessage.id,
                });
                window.intgrtn.elements.appendChild(inputErrorHolderVerbose, currentEntry);
            }
            window.intgrtn.elements.appendChild(passwordConfirmHolder, inputErrorHolderVerbose);

            window.intgrtn.elements.on(passwordInput, "input", function (e) {
                window.intgrtn.validateSignupFormVerboseMessages(form);
            });
            window.intgrtn.elements.on(passwordConfirmInput, "input", function (e) {
                window.intgrtn.validateSignupFormVerboseMessages(form);
            });
        }

        if (!window.intgrtn.lookup("areaCode", true)) {
            window.intgrtn.getProjectDetails(function (response) {
                if (response.data.client.location.areaCode) {
                    areaCodeInput.value = response.data.client.location.areaCode;
                }
            });
        }

        /**
         * Remove non numeric symbols from phone input
         */
        window.intgrtn.elements.on(phoneInput, "input", function (e) {
            setTimeout(function () {
                var filteredValue = phoneInput.value.replace(/\D/g, '');
                if (filteredValue !== phoneInput.value) {
                    phoneInput.value = filteredValue;
                    window.intgrtn.elements.trigger(phoneInput, "input");
                    window.intgrtn.elements.trigger(phoneInput, "change");
                }
            }, 100);
        });

        window.intgrtn.elements.on(passwordEyeIcon, "click", function (e) {
            if (window.intgrtn.elements.hasClass(passwordEyeIcon, 'intgrtn-visible') == true) {
                window.intgrtn.elements.removeClass(passwordEyeIcon, 'intgrtn-visible');
                window.intgrtn.elements.setAttribute(passwordInput, 'type', 'password');
            } else {
                window.intgrtn.elements.addClass(passwordEyeIcon, 'intgrtn-visible');
                window.intgrtn.elements.setAttribute(passwordInput, 'type', 'text');
            }
        });
        window.intgrtn.elements.on(passwordConfirmEyeIcon, "click", function (e) {
            if (window.intgrtn.elements.hasClass(passwordConfirmEyeIcon, 'intgrtn-visible') == true) {
                window.intgrtn.elements.removeClass(passwordConfirmEyeIcon, 'intgrtn-visible');
                window.intgrtn.elements.setAttribute(passwordConfirmInput, 'type', 'password');
            } else {
                window.intgrtn.elements.addClass(passwordConfirmEyeIcon, 'intgrtn-visible');
                window.intgrtn.elements.setAttribute(passwordConfirmInput, 'type', 'text');
            }
        });
        window.intgrtn.elements.on(btnGeneratePassword, "click", function (e) {
            passwordInput.value = window.intgrtn.generatePassword(form);
            window.intgrtn.elements.trigger(passwordInput, "input");
            window.intgrtn.elements.trigger(passwordInput, "change");

            passwordConfirmInput.value = passwordInput.value;
            window.intgrtn.elements.trigger(passwordConfirmInput, "input");
            window.intgrtn.elements.trigger(passwordConfirmInput, "change");

        });

        window.intgrtn.elements.find("input, textarea, select", form).forEach(function (element) {
            window.intgrtn.elements.on(element, "input", function (e) {
                if (window.intgrtn.elements.hasClass(element.closest(".intgrtn-step"), "intgrtn-submitted")) {
                    if (element && element.getAttribute("data-intgrtn-validate-events-name-suffix")) {
                        options.validateEvents.eventNameSuffix = element.getAttribute("data-intgrtn-validate-events-name-suffix");
                    }
                    window.intgrtn.validateSignupForm(form, {
                        fireEvents: false,
                        eventNameSuffix: options.validateEvents.eventNameSuffix,
                    });
                }
            });
        });

        window.intgrtn.elements.on(btnGoToStep2, "click", function (e) {
            form.intgrtn.goToStep(2);
        });
        window.intgrtn.elements.on(btnGoToStep3, "click", function (e) {
            form.intgrtn.goToStep(3);
        });

        window.intgrtn.elements.on(form, "submit", function (e) {
            e.preventDefault();

            if (currentStep < 3) {
                form.intgrtn.goToStep(currentStep + 1);
                return false;
            }

            var firstName = window.intgrtn.elements.findFirst("[name='firstName']", form);
            var lastName = window.intgrtn.elements.findFirst("[name='lastName']", form);
            var email = window.intgrtn.elements.findFirst("[name='email']", form);
            var password = window.intgrtn.elements.findFirst("[name='password']", form);
            var areaCode = window.intgrtn.elements.findFirst("[name='areaCode']", form);
            var phone = window.intgrtn.elements.findFirst("[name='phone']", form);
            var customFieldsInputs = window.intgrtn.elements.find("[data-user-custom-field-id]", form);

            window.intgrtn.elements.addClass(window.intgrtn.elements.findFirst(".intgrtn-step.intgrtn-active", form), 'intgrtn-submitted');
            window.intgrtn.elements.addClass(form, "intgrtn-form-submitted");
            window.intgrtn.elements.removeClass(form, "intgrtn-form-success");

            /* Remove form messages */
            window.intgrtn.elements.find(".intgrtn-form-message-success", form).forEach(function (element) {
                window.intgrtn.elements.remove(element);
            });

            if (element && element.getAttribute("data-intgrtn-validate-events-name-suffix")) {
                options.validateEvents.eventNameSuffix = element.getAttribute("data-intgrtn-validate-events-name-suffix");
            }

            var platforms = [];
            var excludePlatforms = [];

            if (window.intgrtn.lookup("platforms", true)) {
                platforms = window.intgrtn.lookup("platforms", true).split(",");
            }
            if (window.intgrtn.lookup("excludePlatforms", true)) {
                excludePlatforms = window.intgrtn.lookup("excludePlatforms", true).split(",");
            }
            if (element) {
                if (element.getAttribute("data-intgrtn-platforms")) {
                    platforms = element.getAttribute("data-intgrtn-platforms").split(",");
                }
                if (element.getAttribute("data-intgrtn-exclude-platforms")) {
                    excludePlatforms = element.getAttribute("data-intgrtn-exclude-platforms").split(",");
                }
                if (element.getAttribute("data-intgrtn-on-success-redirect-url") !== null) {
                    options.onSuccess.redirectUrl = element.getAttribute("data-intgrtn-on-success-redirect-url");
                }
                if (element.getAttribute("data-intgrtn-on-success-auto-redirect")) {
                    options.onSuccess.autoRedirect = element.getAttribute("data-intgrtn-on-success-auto-redirect") == 1;
                }
                if (element.getAttribute("data-intgrtn-on-success-redirect-top")) {
                    options.onSuccess.redirectTop = element.getAttribute("data-intgrtn-on-success-redirect-top") == 1;
                }
            }

            var params = {
                clickID: window.intgrtn.lookup("clickID", true),
                custom: window.intgrtn.lookup("custom", true),
                custom1: window.intgrtn.lookup("custom1", true),
                custom2: window.intgrtn.lookup("custom2", true),
                custom3: window.intgrtn.lookup("custom3", true),
                custom4: window.intgrtn.lookup("custom4", true),
                custom5: window.intgrtn.lookup("custom5", true),
                autoSignup: window.intgrtn.lookup("autoSignup", true),
                isTest: window.intgrtn.lookup("isTest", true),
                bid: window.intgrtn.lookup("bID", true),
                baa: window.intgrtn.lookup("baa", true),
                ip: window.intgrtn.lookup("ip", true),
                locale: window.intgrtn.lookup("locale", true),
                firstName: firstName.value.trim(),
                lastName: lastName.value.trim(),
                email: email.value,
                password: password.value,
                areaCode: areaCode.value,
                phone: phone.value,
                platforms: platforms,
                excludePlatforms: excludePlatforms,
            };

            /**
             * Mapping user custom fields , setting new param.customFields
             */
            params.customFields = window.intgrtn.mapCustomFieldsInputsToCustomFieldParams(customFieldsInputs);

            /**
             * Get custom fields from cookies
             */
            var intgrtnCustomFields = window.intgrtn.cookies.get("intgrtn_customFields");
            if (intgrtnCustomFields) {
                intgrtnCustomFields = JSON.parse(intgrtnCustomFields)
                Object.keys(intgrtnCustomFields).forEach(function (key) {
                    var check = params.customFields.filter(function (field) {
                        if (field.userCustomFieldID == key) {
                            return true;
                        }
                        return false;
                    });
                    if (check.length == 0) {
                        params.customFields.push({
                            "value": intgrtnCustomFields[key],
                            "userCustomFieldID": key,
                        });
                    }
                });
            }

            if (element && element.getAttribute("data-intgrtn-additional-params")) {
                options.additionalParams = window.intgrtn.merge(options.additionalParams, window.intgrtn.parseQuery(element.getAttribute("data-intgrtn-additional-params")));
            }
            params = window.intgrtn.merge(params, options.additionalParams);

            window.intgrtn.fireEvent({
                name: "intgrtn-form-signup-submit" + options.validateEvents.eventNameSuffix,
                value: JSON.stringify(params),
            });

            var signupFormFullValidation = window.intgrtn.validateSignupForm(form, {
                eventNameSuffix: options.validateEvents.eventNameSuffix,
            });
            if (signupFormFullValidation) {
                window.intgrtn.store("firstName", firstName.value.trim());
                window.intgrtn.store("lastName", lastName.value.trim());
                window.intgrtn.store("email", email.value);
                window.intgrtn.store("areaCode", areaCode.value);
                window.intgrtn.store("areaCountryCode", areaCode.getAttribute('data-country-code'));
                window.intgrtn.store("phone", phone.value);

                window.intgrtn.elements.addClass(form, "intgrtn-form-loading");
                window.intgrtn.elements.setAttribute(btnSubmit, "disabled", "disabled");
                window.intgrtn.elements.find("input", form).forEach(function (element) {
                    window.intgrtn.elements.setAttribute(element, "disabled", "disabled");
                });

                /* Make request */
                window.intgrtn.elements.addClass(loaderHolder, "show");
                window.intgrtn.sendSignupRequest(params, function (response, statusCode) {
                    window.intgrtn.store("signupRequestID", response.data.signupRequestID, 2);
                    formMessageSuccessHolder.innerHTML = response.messages[0];

                    var executeActionsAfterSignup = function () {
                        window.intgrtn.elements.addClass(form, "intgrtn-form-success");

                        /** Redirect */
                        if (options.onSuccess.autoRedirect) {
                            if (options.onSuccess.redirectUrl) {
                                if (options.onSuccess.redirectTop == true) {
                                    window.top.location.href = options.onSuccess.redirectUrl;
                                } else {
                                    window.location.href = options.onSuccess.redirectUrl;
                                }
                            } else {
                                window.intgrtn.goToBrokerLoginUrlBySignupRequestResponse(response);
                            }
                        } else {
                            window.intgrtn.elements.appendChild(form, formMessageSuccessHolder);

                            window.intgrtn.elements.removeClass(loaderHolder, "show");
                            window.intgrtn.elements.removeClass(form, "intgrtn-form-loading");
                            window.intgrtn.elements.removeAttribute(btnSubmit, "disabled");
                            window.intgrtn.elements.find("input", form).forEach(function (element) {
                                window.intgrtn.elements.removeAttribute(element, "disabled", "disabled");
                            });
                        }

                        window.intgrtn.events.trigger("form.signup.success", form, response);
                    };

                    window.intgrtn.elements.setHtml(loaderText, "Please wait while we are preparing your account... This process can take up to 5 seconds...");
                    window.intgrtn.firePostbacksBySignupRequestResponse(response, function () {
                        executeActionsAfterSignup();
                    }, function () {
                        executeActionsAfterSignup();
                    });
                }, function (response, statusCode) {
                    if (response.messages && response.messages[0]) {
                        formMessageErrorHolder.innerHTML = response.messages[0];
                    } else {
                        formMessageErrorHolder.innerHTML = "An error occurred. Please try again later.";
                    }
                    window.intgrtn.elements.appendChild(form, formMessageErrorHolder);

                    window.intgrtn.elements.removeClass(loaderHolder, "show");
                    window.intgrtn.elements.addClass(form, "intgrtn-form-has-error");
                    window.intgrtn.elements.removeClass(form, "intgrtn-form-loading");
                    window.intgrtn.elements.removeAttribute(btnSubmit, "disabled");
                    window.intgrtn.elements.find("input", form).forEach(function (element) {
                        window.intgrtn.elements.removeAttribute(element, "disabled", "disabled");
                    });

                    window.intgrtn.events.trigger("form.signup.error", form, response);
                }, {
                    eventNameSuffix: options.validateEvents.eventNameSuffix,
                });
            }

            window.intgrtn.events.trigger("form.signup.submit", form);
        });

        if (element) {
            window.intgrtn.elements.setHtml(element, form);
        }

        return form;
    };
    window.intgrtn.generateContactUsForm = function (options) {
        if (typeof options === "undefined") {
            options = {};
        }
        options = window.intgrtn.merge(window.intgrtn.options.forms.contactUs, options);

        var form = window.intgrtn.elements.create("form", "", {
            "name": "intgrtnFormContactUs",
            "novalidate": "",
            "class": "intgrtn-form-contact-us",
        });

        var firstNameHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-holder intgrtn-input-holder-first-name",
        });
        var firstNameInput = window.intgrtn.elements.create("input", "", {
            "class": "intgrtn-input",
            "type": "text",
            "name": "firstName",
            "placeholder": options.placeholders.firstName,
            "required": "",
            "value": window.intgrtn.lookup("firstName", true, ""),
        });
        window.intgrtn.elements.appendChild(firstNameHolder, firstNameInput);

        var lastNameHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-holder intgrtn-input-holder-last-name",
        });
        var lastNameInput = window.intgrtn.elements.create("input", "", {
            "class": "intgrtn-input",
            "type": "text",
            "name": "lastName",
            "placeholder": options.placeholders.lastName,
            "required": "",
            "value": window.intgrtn.lookup("lastName", true, ""),
        });
        window.intgrtn.elements.appendChild(lastNameHolder, lastNameInput);

        var emailHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-holder intgrtn-input-holder-email",
        });
        var emailInput = window.intgrtn.elements.create("input", "", {
            "class": "intgrtn-input",
            "type": "email",
            "name": "email",
            "placeholder": options.placeholders.email,
            "required": "",
            "value": window.intgrtn.lookup("email", true, ""),
        });
        window.intgrtn.elements.appendChild(emailHolder, emailInput);

        var typeHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-holder intgrtn-input-holder-type",
        });
        var typeSelect = window.intgrtn.elements.create("select", "", {
            "class": "intgrtn-select",
            "name": "type",
            "required": "",
            "value": "",
            "title": options.placeholders.type,
        });
        var subjectHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-holder intgrtn-input-holder-subject",
        });
        var subjectInput = window.intgrtn.elements.create("input", "", {
            "class": "intgrtn-input",
            "type": "text",
            "name": "subject",
            "placeholder": options.placeholders.subject,
            "required": "",
            "value": "",
        });
        window.intgrtn.elements.appendChild(subjectHolder, subjectInput);

        var messageHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-holder intgrtn-input-holder-message",
        });
        var messageInput = window.intgrtn.elements.create("textarea", "", {
            "class": "intgrtn-textarea",
            "name": "message",
            "placeholder": options.placeholders.message,
            "required": "",
        });
        var messageInputHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-textarea-holder",
        });
        window.intgrtn.elements.appendChild(messageInputHolder, messageInput);
        window.intgrtn.elements.appendChild(messageHolder, messageInputHolder);


        var btnSubmitHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-btn-submit-holder",
        });
        var btnSubmit = window.intgrtn.elements.create("button", options.buttons.submit.text, {
            "class": "intgrtn-btn-submit",
        });
        window.intgrtn.elements.appendChild(btnSubmitHolder, btnSubmit);

        var loaderHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-loader-holder",
        });
        var loader = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-lds-dual-ring",
        });
        window.intgrtn.elements.appendChild(loaderHolder, loader);

        window.intgrtn.elements.appendChild(form, firstNameHolder);
        window.intgrtn.elements.appendChild(form, lastNameHolder);
        window.intgrtn.elements.appendChild(form, emailHolder);
        window.intgrtn.elements.appendChild(form, typeHolder);
        window.intgrtn.elements.appendChild(form, subjectHolder);
        window.intgrtn.elements.appendChild(form, messageHolder);
        window.intgrtn.elements.appendChild(form, btnSubmitHolder);
        window.intgrtn.elements.appendChild(form, loaderHolder);

        window.intgrtn.elements.addClass(loaderHolder, "show");
        window.intgrtn.getProjectDetails(function (response) {
            response.data.contact.types.forEach(function (type) {
                var name = type.name;
                var option = window.intgrtn.elements.create("option", name, {
                    "value": type.ID,
                });
                window.intgrtn.elements.appendChild(typeSelect, option);
            });
            window.intgrtn.elements.removeClass(loaderHolder, "show");
            window.intgrtn.elements.appendChild(typeHolder, typeSelect);
        });

        window.intgrtn.elements.find("input, textarea", form).forEach(function (element) {
            window.intgrtn.elements.on(element, "input", function (e) {
                if (window.intgrtn.elements.hasClass(form, "intgrtn-form-submitted")) {
                    window.intgrtn.validateContactUsForm(form);
                }
            });
        });

        window.intgrtn.elements.on(form, "submit", function (e) {
            var firstName = window.intgrtn.elements.findFirst("[name='firstName']", form);
            var lastName = window.intgrtn.elements.findFirst("[name='lastName']", form);
            var email = window.intgrtn.elements.findFirst("[name='email']", form);
            var type = window.intgrtn.elements.findFirst("[name='type']", form);
            var subject = window.intgrtn.elements.findFirst("[name='subject']", form);
            var message = window.intgrtn.elements.findFirst("[name='message']", form);
            var formMessageErrorHolder = window.intgrtn.elements.create("div", "", {
                "class": "intgrtn-form-message-error"
            });
            var formMessageSuccessHolder = window.intgrtn.elements.create("div", "", {
                "class": "intgrtn-form-message-success"
            });

            window.intgrtn.elements.addClass(form, "intgrtn-form-submitted");
            window.intgrtn.elements.removeClass(form, "intgrtn-form-has-error");
            window.intgrtn.elements.removeClass(form, "intgrtn-form-success");

            /* Remove form messages */
            window.intgrtn.elements.find(".intgrtn-form-message-error", form).forEach(function (element) {
                window.intgrtn.elements.remove(element);
            });
            window.intgrtn.elements.find(".intgrtn-form-message-success", form).forEach(function (element) {
                window.intgrtn.elements.remove(element);
            });

            if (window.intgrtn.validateContactUsForm(form)) {
                window.intgrtn.store("firstName", firstName.value.trim());
                window.intgrtn.store("lastName", lastName.value.trim());
                window.intgrtn.store("email", email.value);

                window.intgrtn.elements.addClass(form, "intgrtn-form-loading");
                window.intgrtn.elements.setAttribute(btnSubmit, "disabled", "disabled");

                /* Make request */
                window.intgrtn.elements.addClass(loaderHolder, "show");
                window.intgrtn.sendContactUsRequest({
                    clickID: window.intgrtn.lookup("clickID", true),
                    type: type.value,
                    firstName: firstName.value.trim(),
                    lastName: lastName.value.trim(),
                    email: email.value,
                    subject: subject.value,
                    message: message.value,
                }, function (response, statusCode) {
                    formMessageSuccessHolder.innerHTML = response.messages[0];
                    window.intgrtn.elements.appendChild(form, formMessageSuccessHolder);
                    window.intgrtn.elements.addClass(form, "intgrtn-form-success");
                    window.intgrtn.elements.removeClass(loaderHolder, "show");
                    window.intgrtn.elements.removeClass(form, "intgrtn-form-loading");
                    window.intgrtn.elements.removeAttribute(btnSubmit, "disabled");

                    subject.value = "";
                    message.value = "";

                    window.intgrtn.events.trigger("form.contactUs.success", form, response);

                    var modal = window.intgrtn.generateBasicMessageModal({
                        title: response.messages[0],
                        message: "Your support ticket has been sent successfully. Once we respond, you will receive an email notification from " + response.data.fromEmail + ". Make sure you check your spam/junk folders.<br/><a href='" + response.data.supportLink + "'>Click here</a> to access the ticket URL."
                    });
                    modal.intgrtnModal.show();
                }, function (response, statusCode) {
                    if (response.messages && response.messages[0]) {
                        formMessageErrorHolder.innerHTML = response.messages[0];
                    } else {
                        formMessageErrorHolder.innerHTML = "An error occurred. Please try again later.";
                    }
                    window.intgrtn.elements.appendChild(form, formMessageErrorHolder);

                    window.intgrtn.elements.removeClass(loaderHolder, "show");
                    window.intgrtn.elements.addClass(form, "intgrtn-form-has-error");
                    window.intgrtn.elements.removeClass(form, "intgrtn-form-loading");
                    window.intgrtn.elements.removeAttribute(btnSubmit, "disabled");

                    window.intgrtn.events.trigger("form.contactUs.error", form, response);
                });
            }

            window.intgrtn.events.trigger("form.contactUs.submit", form);
            e.preventDefault();
        });

        return form;
    };


    window.intgrtn.generateExitPopupModal = function (options) {
        if (typeof options === "undefined") {
            options = {};
        }
        options = window.intgrtn.merge(window.intgrtn.options.exitPopup, options);

        var titleText = "";
        var exitPopupModal = window.intgrtn.generateModal(titleText, "", {
            class: "intgrtn-modal-exit-popup",
            disableClose: options.disableClose,
            removeFromDOM: options.preloadUrl == false,
        });
        var modalBody = window.intgrtn.elements.findFirst(".intgrtn-modal-body", exitPopupModal);

        var iframeHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-exit-popup-iframe-holder",
        });
        var iframe = window.intgrtn.elements.create("iframe", "", {
            "class": "intgrtn-exit-popup-iframe",
        });

        //combine nodes
        window.intgrtn.elements.appendChild(iframeHolder, iframe);
        window.intgrtn.elements.appendChild(modalBody, iframeHolder);

        if (options.url && !options.html) {
            window.intgrtn.elements.setAttribute(iframe, "src", options.url);
        } else if (options.html) {
            if (iframe.contentWindow) {
                iframe.contentWindow.document.open();
                iframe.contentWindow.document.write(options.html);
                iframe.contentWindow.document.close();
            } else {
                iframe.onload = function () {
                    iframe.contentWindow.document.open();
                    iframe.contentWindow.document.write(options.html);
                    iframe.contentWindow.document.close();
                };
            }
        }

        exitPopupModal.intgrtnExitPopup = {};
        exitPopupModal.intgrtnExitPopup.countShows = 0;
        exitPopupModal.intgrtnExitPopup.disabledFromDelay = false;
        exitPopupModal.intgrtnExitPopup.disabledFromCount = false;
        exitPopupModal.intgrtnExitPopup.disabledFromScroll = false;

        window.intgrtn.events.on("modal.show", function (modal) {
            if (exitPopupModal !== modal) {
                return false;
            }
            window.intgrtn.fireEvent({
                name: "show-offer-exit-popup",
            });
            exitPopupModal.intgrtnExitPopup.countShows++;
            if (window.intgrtn.options.exitPopup.showLimit !== null && exitPopupModal.intgrtnExitPopup.countShows >= window.intgrtn.options.exitPopup.showLimit) {
                exitPopupModal.intgrtnExitPopup.disabledFromCount = true;
            }
        });
        window.intgrtn.events.on("modal.hide", function (modal) {
            if (exitPopupModal !== modal) {
                return false;
            }
            window.intgrtn.fireEvent({
                name: "hide-offer-exit-popup",
            });
            if (window.intgrtn.options.exitPopup.delayInterval !== null && window.intgrtn.options.exitPopup.delayInterval !== 0) {
                exitPopupModal.intgrtnExitPopup.disabledFromDelay = true;
                setTimeout(function () {
                    exitPopupModal.intgrtnExitPopup.disabledFromDelay = false;
                }, parseInt(window.intgrtn.options.exitPopup.delayInterval) * 1000);
            }
            if (window.intgrtn.options.exitPopup.disableUntilScroll == 1) {
                exitPopupModal.intgrtnExitPopup.disabledFromScroll = true;
            }
        });
        window.intgrtn.elements.on(window, "message", function (event) {
            if (event.data == "intgrtn-exit-popup-close") {
                if (exitPopupModal.intgrtnModal) {
                    exitPopupModal.intgrtnModal.hide();
                }
            } else if (typeof event.data == "string" && event.data.match(/^intgrtn-exit-popup-height-([0-9]+)$/)) {
                var height = event.data.match(/^intgrtn-exit-popup-height-([0-9]+)$/)[1];
                iframe.style.minHeight = height + "px";
            }
        });

        return exitPopupModal;
    };

    window.intgrtn.isMobileDevice = function () {
        var check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };

    window.intgrtn.toJSDate = function (dateTime) {
        var dateTime = dateTime.split(" "); //dateTime[0] = date, dateTime[1] = time
        //yyyy-mm-dd hh:mm:ss

        var date = dateTime[0].split("-");
        var time = dateTime[1].split(":");

        //(year, month, day, hours, minutes, seconds, milliseconds)
        return new Date(date[0], date[1], date[2], time[0], time[1], time[2], 0);
    }

    window.intgrtn.inIframe = function () {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    };

    window.intgrtn.getViewportWidth = function () {
        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    };

    window.intgrtn.getViewportHeight = function () {
        return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    };

    window.intgrtn.getContactRequestMessageBox = function (options
        /*
        {styleMode: (1,2),
        messageText: '',
        userName: '',
        date: ''
        }
        */
    ) {

        var result;

        var messageBoxClasses = "intgrtn-message-box";
        if (options.styleMode == 1) messageBoxClasses = messageBoxClasses + " style1";
        if (options.styleMode == 2) messageBoxClasses = messageBoxClasses + " style2";
        var messageBox = window.intgrtn.elements.create("div", options.messageText, {
            "class": messageBoxClasses
        });

        var userPanel = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-user-panel"
        });
        var userPanelUserName = window.intgrtn.elements.create("div", options.userName, {
            "class": "intgrtn-user-name"
        });
        var userPanelDate = window.intgrtn.elements.create("div", options.date, {
            "class": "intgrtn-date"
        });

        window.intgrtn.elements.appendChild(userPanel, userPanelUserName);
        window.intgrtn.elements.appendChild(userPanel, userPanelDate);

        window.intgrtn.elements.appendChild(messageBox, userPanel);

        result = messageBox;
        return result;
    } // window.intgrtn.getContactRequestMessageBox


    window.intgrtn.generateOptinForm = function (options) {
        if (typeof options === "undefined") {
            options = {};
        }
        options = window.intgrtn.merge(window.intgrtn.options.forms.optin, options);

        var form = window.intgrtn.elements.create("form", "", {
            "name": "intgrtnFormOptin",
            "novalidate": "",
            "class": "intgrtn-form-optin",
        });

        form.intgrtn = {
            options: options,
        };

        var nameHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-holder intgrtn-input-holder-name",
        });
        var nameInput = window.intgrtn.elements.create("input", "", {
            "class": "intgrtn-input",
            "type": "text",
            "name": "name",
            "placeholder": options.placeholders.name,
            "value": window.intgrtn.lookup("name", true, ""),
        });

        if (options.fields.name.required == true) {
            window.intgrtn.elements.setAttribute(nameInput, "required", "");
        }
        window.intgrtn.elements.appendChild(nameHolder, nameInput);

        var firstNameHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-holder intgrtn-input-holder-first-name",
        });
        var firstNameInput = window.intgrtn.elements.create("input", "", {
            "class": "intgrtn-input",
            "type": "text",
            "name": "firstName",
            "placeholder": options.placeholders.firstName,
            "value": window.intgrtn.lookup("firstName", true, ""),
        });
        if (options.fields.firstName.required == true) {
            window.intgrtn.elements.setAttribute(firstNameInput, "required", "");
        }
        window.intgrtn.elements.appendChild(firstNameHolder, firstNameInput);

        var lastNameHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-holder intgrtn-input-holder-last-name",
        });
        var lastNameInput = window.intgrtn.elements.create("input", "", {
            "class": "intgrtn-input",
            "type": "text",
            "name": "lastName",
            "placeholder": options.placeholders.lastName,
            "value": window.intgrtn.lookup("lastName", true, ""),
        });
        if (options.fields.lastName.required == true) {
            window.intgrtn.elements.setAttribute(lastNameInput, "required", "");
        }
        window.intgrtn.elements.appendChild(lastNameHolder, lastNameInput);

        var emailHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-holder intgrtn-input-holder-email",
        });
        var emailInput = window.intgrtn.elements.create("input", "", {
            "class": "intgrtn-input",
            "type": "email",
            "name": "email",
            "placeholder": options.placeholders.email,
            "value": window.intgrtn.lookup("email", true, ""),
        });
        if (options.fields.email.required == true) {
            window.intgrtn.elements.setAttribute(emailInput, "required", "");
        }
        window.intgrtn.elements.appendChild(emailHolder, emailInput);

        var phoneHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-holder intgrtn-input-holder-phone",
        });
        var phoneInputGroup = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-input-group",
        });
        var phoneInput = window.intgrtn.elements.create("input", "", {
            "class": "intgrtn-input intgrtn-input-phone",
            "type": "text",
            "name": "phone",
            "size": "1",
            "placeholder": options.placeholders.phone,
            "value": window.intgrtn.lookup("phone", true, ""),
        });
        if (options.fields.phone.required == true) {
            window.intgrtn.elements.setAttribute(phoneInput, "required", "");
        }
        var areaCodeInput = window.intgrtn.elements.create("input", "", {
            "class": "intgrtn-input intgrtn-input-area-code",
            "type": "text",
            "name": "areaCode",
            "placeholder": options.placeholders.areaCode,
            "value": window.intgrtn.lookup("areaCode", true, ""),
            "data-country-code": window.intgrtn.lookup("areaCountryCode", true, "")
        });
        if (options.fields.phone.required == true) {
            window.intgrtn.elements.setAttribute(areaCodeInput, "required", "");
        }
        window.intgrtn.elements.appendChild(phoneInputGroup, areaCodeInput);
        window.intgrtn.elements.appendChild(phoneInputGroup, phoneInput);
        window.intgrtn.elements.appendChild(phoneHolder, phoneInputGroup);

        window.intgrtn.generateAreaFlagsDropdown(areaCodeInput, phoneInput);

        var btnSubmitHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-btn-submit-holder",
        });
        var btnSubmit = window.intgrtn.elements.create("button", options.buttons.submit.text, {
            "class": "intgrtn-btn-submit",
        });
        window.intgrtn.elements.appendChild(btnSubmitHolder, btnSubmit);

        var loaderHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-loader-holder",
        });
        var loader = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-lds-dual-ring",
        });
        window.intgrtn.elements.appendChild(loaderHolder, loader);

        if (options.fields.name.show == true) {
            window.intgrtn.elements.appendChild(form, nameHolder);
        }
        if (options.fields.firstName.show == true) {
            window.intgrtn.elements.appendChild(form, firstNameHolder);
        }
        if (options.fields.lastName.show == true) {
            window.intgrtn.elements.appendChild(form, lastNameHolder);
        }

        window.intgrtn.elements.appendChild(form, emailHolder);

        if (options.fields.phone.show == true) {
            window.intgrtn.elements.appendChild(form, phoneHolder);
        }

        window.intgrtn.elements.appendChild(form, btnSubmitHolder);
        window.intgrtn.elements.appendChild(form, loaderHolder);


        window.intgrtn.elements.find("input", form).forEach(function (element) {
            window.intgrtn.elements.on(element, "input", function (e) {
                if (window.intgrtn.elements.hasClass(form, "intgrtn-form-submitted")) {
                    window.intgrtn.validateOptinForm(form, {
                        fireEvents: false,
                    });
                }
            });
        });

        if (!window.intgrtn.lookup("areaCode", true)) {
            window.intgrtn.getProjectDetails(function (response) {
                if (response.data.client.location.areaCode) {
                    areaCodeInput.value = response.data.client.location.areaCode;
                }
            });
        }

        window.intgrtn.elements.on(form, "submit", function (e) {
            var name = window.intgrtn.elements.findFirst("[name='name']", form);
            var firstName = window.intgrtn.elements.findFirst("[name='firstName']", form);
            var lastName = window.intgrtn.elements.findFirst("[name='lastName']", form);
            var email = window.intgrtn.elements.findFirst("[name='email']", form);
            var areaCode = window.intgrtn.elements.findFirst("[name='areaCode']", form);
            var phone = window.intgrtn.elements.findFirst("[name='phone']", form);
            var formMessageErrorHolder = window.intgrtn.elements.create("div", "", {
                "class": "intgrtn-form-message-error"
            });
            var formMessageSuccessHolder = window.intgrtn.elements.create("div", "", {
                "class": "intgrtn-form-message-success"
            });

            window.intgrtn.elements.addClass(form, "intgrtn-form-submitted");
            window.intgrtn.elements.removeClass(form, "intgrtn-form-has-error");
            window.intgrtn.elements.removeClass(form, "intgrtn-form-success");

            /* Remove form messages */
            window.intgrtn.elements.find(".intgrtn-form-message-error", form).forEach(function (element) {
                window.intgrtn.elements.remove(element);
            });
            window.intgrtn.elements.find(".intgrtn-form-message-success", form).forEach(function (element) {
                window.intgrtn.elements.remove(element);
            });

            if (window.intgrtn.validateOptinForm(form, {
                eventNameSuffix: options.validateEvents.eventNameSuffix
            })) {
                var firstNameValue = null;
                var lastNameValue = null;
                var areaCodeValue = null;
                var phoneValue = null;
                if (name) {
                    window.intgrtn.store("name", name.value);
                    var nameArray = name.value.split(" ");
                    firstNameValue = nameArray[0];
                    nameArray.shift();
                    lastNameValue = nameArray.join(" ");
                    window.intgrtn.store("firstName", firstNameValue);
                    window.intgrtn.store("lastName", lastNameValue);
                }
                if (firstName) {
                    firstNameValue = firstName.value.trim();
                    window.intgrtn.store("firstName", firstNameValue);
                }
                if (lastName) {
                    lastNameValue = lastName.value.trim();
                    window.intgrtn.store("lastName", lastNameValue);
                }
                if (areaCode) {
                    areaCodeValue = areaCode.value.trim();
                    window.intgrtn.store("areaCode", areaCodeValue);
                    window.intgrtn.store("areaCountryCode", areaCode.getAttribute('data-country-code'));
                }
                if (phone) {
                    phoneValue = phone.value.trim();
                    window.intgrtn.store("phone", phoneValue);
                }
                window.intgrtn.store("email", email.value);

                window.intgrtn.elements.addClass(form, "intgrtn-form-loading");
                window.intgrtn.elements.setAttribute(btnSubmit, "disabled", "disabled");
                window.intgrtn.elements.find("input", form).forEach(function (element) {
                    window.intgrtn.elements.setAttribute(element, "disabled", "disabled");
                });

                var params = {
                    clickID: window.intgrtn.lookup("clickID", true),
                    custom: window.intgrtn.lookup("custom", true),
                    custom1: window.intgrtn.lookup("custom1", true),
                    custom2: window.intgrtn.lookup("custom2", true),
                    custom3: window.intgrtn.lookup("custom3", true),
                    custom4: window.intgrtn.lookup("custom4", true),
                    custom5: window.intgrtn.lookup("custom5", true),
                    isTest: window.intgrtn.lookup("isTest", true),
                    locale: window.intgrtn.lookup("locale", true),
                    ip: window.intgrtn.lookup("ip", true),
                    firstName: firstNameValue,
                    lastName: lastNameValue,
                    areaCode: areaCodeValue,
                    phone: phoneValue,
                    email: email.value,
                };

                window.intgrtn.fireEvent({
                    name: "intgrtn-form-optin-submit" + options.validateEvents.eventNameSuffix,
                    value: JSON.stringify(params),
                });

                /* Make request */
                window.intgrtn.elements.addClass(loaderHolder, "show");
                window.intgrtn.sendOptinRequest(params, function (response, statusCode) {
                    var executeActionsAfterOptin = function () {
                        formMessageSuccessHolder.innerHTML = response.messages[0];
                        window.intgrtn.elements.appendChild(form, formMessageSuccessHolder);

                        window.intgrtn.elements.addClass(form, "intgrtn-form-success");

                        if (options.onSuccess.redirectUrl) {
                            window.location.href = options.onSuccess.redirectUrl;
                        } else {
                            window.intgrtn.elements.removeClass(loaderHolder, "show");
                            window.intgrtn.elements.removeClass(form, "intgrtn-form-loading");
                            window.intgrtn.elements.removeAttribute(btnSubmit, "disabled");
                            window.intgrtn.elements.find("input", form).forEach(function (element) {
                                window.intgrtn.elements.removeAttribute(element, "disabled", "disabled");
                            });
                        }
                    };

                    window.intgrtn.fireOptinCliendSidePostbacksByOptinResponse(response, function () {
                        executeActionsAfterOptin();
                    }, function () {
                        executeActionsAfterOptin();
                    });

                    window.intgrtn.events.trigger("form.optin.success", form, response);
                }, function (response, statusCode) {
                    if (response.messages && response.messages[0]) {
                        formMessageErrorHolder.innerHTML = response.messages[0];
                    } else {
                        formMessageErrorHolder.innerHTML = "An error occurred. Please try again later.";
                    }
                    window.intgrtn.elements.appendChild(form, formMessageErrorHolder);

                    window.intgrtn.elements.removeClass(loaderHolder, "show");
                    window.intgrtn.elements.addClass(form, "intgrtn-form-has-error");
                    window.intgrtn.elements.removeClass(form, "intgrtn-form-loading");
                    window.intgrtn.elements.removeAttribute(btnSubmit, "disabled");
                    window.intgrtn.elements.find("input", form).forEach(function (element) {
                        window.intgrtn.elements.removeAttribute(element, "disabled", "disabled");
                    });

                    window.intgrtn.events.trigger("form.optin.error", form, response);
                });
            }

            e.preventDefault();
        });

        return form;
    };


    window.intgrtn.generateBrokersTable = function (options) {
        if (typeof options === "undefined") {
            options = {};
        }
        options = window.intgrtn.merge(window.intgrtn.options.tables.brokers, options);
        var tableHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-table-brokers-holder",
        });
        var table = window.intgrtn.elements.create("table", "", {
            "cellspacing": "0",
            "cellpadding": "0",
            "class": "intgrtn-table-brokers",
        });
        var head = window.intgrtn.elements.create("thead");
        var body = window.intgrtn.elements.create("tbody");
        var loaderHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-loader-holder",
        });
        var loader = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-lds-dual-ring",
        });

        window.intgrtn.elements.appendChild(loaderHolder, loader);
        window.intgrtn.elements.appendChild(table, head);
        window.intgrtn.elements.appendChild(table, body);
        window.intgrtn.elements.appendChild(tableHolder, table);
        window.intgrtn.elements.appendChild(tableHolder, loaderHolder);

        Object.keys(options.columns).forEach(function (columnKey) {
            var th = window.intgrtn.elements.create("th", options.columns[columnKey].title);
            window.intgrtn.elements.appendChild(head, th);
        });


        window.intgrtn.elements.addClass(loaderHolder, "show");
        window.intgrtn.getBrokers({}, function (response) {
            window.intgrtn.elements.removeClass(loaderHolder, "show");

            response.data.items.forEach(function (broker) {
                var tr = window.intgrtn.elements.create("tr", "", {
                    "class": broker.brokerAccountRegisterApi == true ? "intgrtn-table-broker-has-register-api" : "",
                });
                Object.keys(options.columns).forEach(function (columnKey) {
                    var td = window.intgrtn.elements.create("td");
                    switch (options.columns[columnKey].property) {
                        case "advertiserLogo":
                            var img = window.intgrtn.elements.create("img", "", {
                                "src": broker[options.columns[columnKey].property],
                                "alt": broker.advertiserName,
                                "title": broker.advertiserName,
                                "class": "intgrtn-table-broker-logo"
                            });
                            window.intgrtn.elements.appendChild(td, img);
                            break;
                        case "link":
                            var a = window.intgrtn.elements.create("a", "Open Account", {
                                "href": window.intgrtn.replaceParameters(broker[options.columns[columnKey].property]),
                                "target": "_blank",
                                "class": "intgrtn-table-broker-btn-open-account"
                            });
                            window.intgrtn.elements.appendChild(td, a);
                            break;
                        default:
                            window.intgrtn.elements.setHtml(td, broker[options.columns[columnKey].property]);
                            break;
                    }
                    window.intgrtn.elements.appendChild(tr, td);
                });
                window.intgrtn.elements.appendChild(body, tr);
            });
        }, function () {

        });

        return tableHolder;
    };

    window.intgrtn.generateCookiePopup = function () {
        var popup = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-cookie-popup"
        });
        var textHolder = window.intgrtn.elements.create("div", window.intgrtn.options.cookiePopup.text, {
            "class": "intgrtn-cookie-popup-text-holder"
        });
        var linkPrivacyPolicy = window.intgrtn.elements.create("a", window.intgrtn.options.cookiePopup.buttons.learnMore.text, {
            "class": "intgrtn-cookie-popup-link-privacy-policy"
        });
        var buttonAccept = window.intgrtn.elements.create("button", window.intgrtn.options.cookiePopup.buttons.accept.text, {
            "class": "intgrtn-cookie-popup-btn-accept"
        });

        if (window.intgrtn.lookup("cookiePolicyTheme", true) == "light") {
            window.intgrtn.elements.addClass(popup, "intgrtn-cookie-popup-light");
        }

        popup.intgrtn = {
            destroy: function () {
                window.intgrtn.elements.remove(popup);
            },
        };

        window.intgrtn.elements.on(buttonAccept, "click", function (e) {
            window.intgrtn.store("cookiePolicyAccepted", 1);
            window.intgrtn.elements.remove(popup);
        });
        window.intgrtn.elements.on(linkPrivacyPolicy, "click", function (e) {
            var modal = window.intgrtn.generateModal('Privacy Policy');
            var modalBody = window.intgrtn.elements.findFirst(".intgrtn-modal-body", modal);

            var loaderHolder = window.intgrtn.elements.create("div", "", {
                "class": "intgrtn-loader-holder static show",
            });
            var loader = window.intgrtn.elements.create("div", "", {
                "class": "intgrtn-lds-dual-ring",
            });
            window.intgrtn.elements.appendChild(loaderHolder, loader);

            window.intgrtn.elements.appendChild(modalBody, loaderHolder);
            window.intgrtn.getAgreement({
                type: 3,
            }, function (response) {
                window.intgrtn.elements.removeClass(loaderHolder, "show");
                window.intgrtn.elements.setHtml(modalBody, response.data.html);
            }, function () {
                window.intgrtn.elements.removeClass(loaderHolder, "show");
            });

            modal.intgrtnModal.show();
        });

        window.intgrtn.elements.appendChild(popup, textHolder);
        window.intgrtn.elements.appendChild(popup, buttonAccept);
        window.intgrtn.elements.appendChild(textHolder, linkPrivacyPolicy);

        return popup;
    };

    window.intgrtn.generateContactRequestMessagesLayout = function (options) {
        if (typeof options === "undefined") {
            options = {};
        }
        options = window.intgrtn.merge(window.intgrtn.options.contactRequestMessagesLayout, options);

        var clearFixElement = window.intgrtn.elements.create("div", "", {
            "style": "clear: both"
        });

        var layoutHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-contact-request-messages-holder",
        });

        var logoPanel = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-logo-panel",
        });
        var logoImg = window.intgrtn.elements.create("img", "", {
            "class": "intgrtn-logo-img",
        });
        var innerPanel = window.intgrtn.elements.create("div", "", {
            class: "intgrtn-inner-panel"
        });
        var subjectElement = window.intgrtn.elements.create("div", options.subject, {
            class: "intgrtn-subject"
        });
        var descElement = window.intgrtn.elements.create("div", options.desc, {
            class: "intgrtn-desc"
        });
        var prevMessagesHolder = window.intgrtn.elements.create("div", "", {
            class: "intgrtn-holder-prev-messages"
        });

        var newMessageHolder = window.intgrtn.elements.create("div", "", {
            class: "intgrtn-holder-new-message"
        });

        var form = window.intgrtn.elements.create("form", "", {
            "name": "intgrtnFormContactRequestMessage",
            "novalidate": "",
            "class": "intgrtn-form-contact-request-message",
        });
        var messageInputHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-message-input-holder"
        });
        var newMessageInput = window.intgrtn.elements.create("textarea", "", {
            "class": "intgrtn-textarea",
            "name": "message",
            "placeholder": options.placeholders.newMessage,
            "required": ""
        });
        var btnSubmitHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-btn-submit-holder"
        });
        var btnSubmit = window.intgrtn.elements.create("button", options.buttons.submit.text, {
            "class": "intgrtn-btn-submit",
        });

        // combine nodes
        window.intgrtn.elements.appendChild(logoPanel, logoImg);
        window.intgrtn.elements.appendChild(layoutHolder, logoPanel);

        window.intgrtn.elements.appendChild(innerPanel, subjectElement);
        window.intgrtn.elements.appendChild(innerPanel, descElement);
        window.intgrtn.elements.appendChild(innerPanel, prevMessagesHolder);

        window.intgrtn.elements.appendChild(messageInputHolder, newMessageInput);
        window.intgrtn.elements.appendChild(form, messageInputHolder);
        window.intgrtn.elements.appendChild(btnSubmitHolder, btnSubmit);
        window.intgrtn.elements.appendChild(form, btnSubmitHolder);

        window.intgrtn.elements.appendChild(newMessageHolder, form);
        window.intgrtn.elements.appendChild(innerPanel, newMessageHolder);
        window.intgrtn.elements.appendChild(innerPanel, clearFixElement);
        window.intgrtn.elements.appendChild(layoutHolder, innerPanel);

        var contactRequestHash = window.intgrtn.getParameter("intgrtn_contactRequestHash");

        //fetch data
        window.intgrtn.getContactRequestMessages({
            contactRequestHash: contactRequestHash,
        }, function (response) {
            window.intgrtn.elements.setHtml(subjectElement, response.data.contactRequestDetails.subject.toString());
            window.intgrtn.elements.setHtml(descElement, response.data.contactRequestDetails.message.toString());
            if (response.data.projectDetails.catalogLogoPath) {
                window.intgrtn.elements.setAttribute(logoImg, "src", window.intgrtn.options.server.endpoint + "/" + response.data.projectDetails.catalogLogoPath);
            }

            // foreach to add each message in prevMessagesHolder
            response.data.items.forEach(function (contactRequestMessage) {
                var message = contactRequestMessage.message.toString();
                var createDateJS = window.intgrtn.toJSDate(contactRequestMessage.createDate);
                var messageBox;
                if (contactRequestMessage.userID) {
                    messageBox = window.intgrtn.getContactRequestMessageBox({
                        styleMode: 1,
                        messageText: message.replace(/(?:\r\n|\r|\n)/g, '</br>'),
                        userName: 'Support',
                        //userName: 'Support (' + contactRequestMessage.name + ')' ,
                        date: createDateJS.getDate() + " " + createDateJS.toLocaleString("en-us", {
                            month: "short"
                        }) + " " + createDateJS.getFullYear() + "<br/>" + createDateJS.getHours() + ":" + createDateJS.getMinutes()
                    });
                } else {
                    messageBox = window.intgrtn.getContactRequestMessageBox({
                        styleMode: 2,
                        messageText: message,
                        userName: 'Client',
                        date: createDateJS.getDate() + " " + createDateJS.toLocaleString("en-us", {
                            month: "short"
                        }) + " " + createDateJS.getFullYear() + "<br/>" + createDateJS.getHours() + ":" + createDateJS.getMinutes()
                    });
                }
                var clearFixElement = window.intgrtn.elements.create("div", "", {
                    "style": "clear: both"
                });
                window.intgrtn.elements.appendChild(prevMessagesHolder, messageBox);
                window.intgrtn.elements.appendChild(prevMessagesHolder, clearFixElement);
            });

        });

        // submit stuff
        window.intgrtn.elements.on(form, "submit", function (e) {
            var message = window.intgrtn.elements.findFirst("[name='message']", form);
            var formMessageErrorHolder = window.intgrtn.elements.create("div", "", {
                "class": "intgrtn-form-message-error"
            });
            var formMessageSuccessHolder = window.intgrtn.elements.create("div", "", {
                "class": "intgrtn-form-message-success"
            });

            window.intgrtn.elements.addClass(form, "intgrtn-form-submitted");
            window.intgrtn.elements.removeClass(form, "intgrtn-form-success");

            /* Remove form messages */
            window.intgrtn.elements.find(".intgrtn-input-message-error", form).forEach(function (element) {
                window.intgrtn.elements.remove(element);
            });
            window.intgrtn.elements.find(".intgrtn-form-message-success", form).forEach(function (element) {
                window.intgrtn.elements.remove(element);
            });

            if (window.intgrtn.validateContactRequestMessageForm(form)) {
                window.intgrtn.elements.addClass(form, "intgrtn-form-loading");
                window.intgrtn.elements.setAttribute(btnSubmit, "disabled", "disabled");

                /* Make request */
                //window.intgrtn.elements.addClass(loaderHolder, "show");
                window.intgrtn.sendContactRequestMessageRequest({
                    message: message.value,
                    contactRequestHash: contactRequestHash
                }, function (response, statusCode) {
                    formMessageSuccessHolder.innerHTML = response.messages[0];
                    window.intgrtn.elements.appendChild(form, formMessageSuccessHolder);

                    var createDateJS = window.intgrtn.toJSDate(response.data.createDate);
                    var messageBox = window.intgrtn.getContactRequestMessageBox({
                        styleMode: 2,
                        messageText: message.value,
                        userName: 'Client',
                        date: createDateJS.getDate() + " " + createDateJS.toLocaleString("en-us", {
                            month: "short"
                        }) + " " + createDateJS.getFullYear()
                    });
                    var clearFixElement = window.intgrtn.elements.create("div", "", {
                        "style": "clear: both"
                    });
                    window.intgrtn.elements.appendChild(prevMessagesHolder, messageBox);
                    window.intgrtn.elements.appendChild(prevMessagesHolder, clearFixElement);

                    window.intgrtn.elements.addClass(form, "intgrtn-form-success");
                    //window.intgrtn.elements.removeClass(loaderHolder, "show");
                    window.intgrtn.elements.removeClass(form, "intgrtn-form-loading");
                    window.intgrtn.elements.removeAttribute(btnSubmit, "disabled");

                    message.value = "";

                    window.intgrtn.events.trigger("form.contactRequestMessage.success", form, response);
                }, function (response, statusCode) {
                    if (response.messages && response.messages[0]) {
                        formMessageErrorHolder.innerHTML = response.messages[0];
                    } else {
                        formMessageErrorHolder.innerHTML = "An error occurred. Please try again later.";
                    }
                    window.intgrtn.elements.appendChild(form, formMessageErrorHolder);

                    //window.intgrtn.elements.removeClass(loaderHolder, "show");
                    window.intgrtn.elements.addClass(form, "intgrtn-form-has-error");
                    window.intgrtn.elements.removeClass(form, "intgrtn-form-loading");
                    window.intgrtn.elements.removeAttribute(btnSubmit, "disabled");

                    window.intgrtn.events.trigger("form.contactRequestMessage.error", form, response);
                });
            }

            window.intgrtn.events.trigger("form.contactRequestMessage.submit", form);
            e.preventDefault();
        });

        return layoutHolder;
    } // window.intgrtn.generateContactRequestMessagesLayout

    window.intgrtn.generateModal = function (title, body, options) {
        if (!title) {
            title = "";
        }
        if (!body) {
            body = "";
        }
        if (!options) {
            options = {};
        }
        if (typeof options.removeFromDOM == "undefined") {
            options.removeFromDOM = true;
        }
        if (typeof options.isShowed == "undefined") {
            options.isShowed = false;
        }
        var modalHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-modal-holder"
        });
        var modal = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-modal"
        });
        var modalBody = window.intgrtn.elements.create("div", body, {
            "class": "intgrtn-modal-body"
        });
        var modalHeader = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-modal-header"
        });
        var modalTitle = window.intgrtn.elements.create("div", title, {
            "class": "intgrtn-modal-title"
        });
        var btnClose = window.intgrtn.elements.create("button", "&times", {
            "class": "intgrtn-modal-btn-close"
        });

        if (options.class) {
            window.intgrtn.elements.addClass(modalHolder, options.class);
        }

        if (!options.removeFromDOM) {
            window.intgrtn.elements.appendChild("body", modalHolder);
            window.intgrtn.elements.addClass(modalHolder, "intgrtn-hidden");
        }

        modalHolder.intgrtnModal = {
            isShowed: options.isShowed,
            show: function () {
                if (options.removeFromDOM) {
                    window.intgrtn.elements.appendChild("body", modalHolder);
                }
                window.intgrtn.elements.addClass("body", "intgrtn-modal-body-overflow");
                window.intgrtn.elements.removeClass(modalHolder, "intgrtn-hidden");

                modalHolder.intgrtnModal.isShowed = true;
                window.intgrtn.events.trigger("modal.show", modalHolder);
            },
            hide: function () {
                var checkRemoveBodyClass = window.intgrtn.elements.find(".intgrtn-modal-holder").filter(function (item) {
                    if (item == modalHolder) {
                        return false;
                    }
                    if (window.intgrtn.elements.hasClass(item, "intgrtn-hidden")) {
                        return false;
                    }
                    return true;
                });
                if (checkRemoveBodyClass.length == 0) { // check for other modal
                    window.intgrtn.elements.removeClass("body", "intgrtn-modal-body-overflow");
                }
                if (options.removeFromDOM) {
                    window.intgrtn.elements.remove(modalHolder);
                }
                window.intgrtn.elements.addClass(modalHolder, "intgrtn-hidden");

                modalHolder.intgrtnModal.isShowed = false;
                window.intgrtn.events.trigger("modal.hide", modalHolder);
            }
        };

        if (!options.disableClose) {
            window.intgrtn.elements.on(modalHolder, "click", function (e) {
                if (modalHolder == e.target) {
                    modalHolder.intgrtnModal.hide();
                }
            });
            window.intgrtn.elements.on(btnClose, "click", function (e) {
                modalHolder.intgrtnModal.hide();
            });
        }
        if (title) {
            window.intgrtn.elements.appendChild(modalHeader, modalTitle);
        }
        if (!options.disableClose) {
            window.intgrtn.elements.appendChild(modal, btnClose);
        }
        window.intgrtn.elements.appendChild(modal, modalHeader);
        window.intgrtn.elements.appendChild(modal, modalBody);
        window.intgrtn.elements.appendChild(modalHolder, modal);

        if (options.contactRequestMessagesMode) {
            var logoPanel = window.intgrtn.elements.create("div", "", {
                "class": "intgrtn-modal-logo-panel",
                "style": "background-image: url('" + options.contactRequestMessageModeLogoPath + "');"
            });
            window.intgrtn.elements.appendChild(modalHolder, logoPanel);
        }

        if (options.isShowed) {
            modalHolder.intgrtnModal.show();
        }

        return modalHolder;
    };

    window.intgrtn.generateContactUsModal = function (options) {
        if (!options) {
            options = {};
        }
        options = window.intgrtn.merge(window.intgrtn.options.forms.contactUs, options);

        var titleText = options.mode == 'contact' ? 'Contact Us' : 'Report Abuse';
        var modal = window.intgrtn.generateModal(titleText, "", {
            class: "intgrtn-modal-contact-us",
        });
        var modalBody = window.intgrtn.elements.findFirst(".intgrtn-modal-body", modal);
        var form = window.intgrtn.generateContactUsForm(options);
        var textTop = null;
        if (options.mode == "contact") {
            textTop = window.intgrtn.elements.create("div", "If you have any questions or feedback, you are welcome to contact us by using the form below:", {
                "class": "intgrtn-text-top"
            });
        } else {
            textTop = window.intgrtn.elements.create("div", "The website {{domain}} is used as a marketing material to promote advertisers by 3rd party promoters, affiliates, affiliate networks and ad networks.<br/><br/> Anyone promoting this website is prohibited from using spam, spyware, incentivization, denial of service, use of wrong/false marketing material, your identity was used in prelanders prioir for you reaching thise page and any other illegal activity and is obligated to apply all local laws and regulations including GDPR rules where the users are sent from.<br/><br/>If you have come to {{domain}} as a result of abuse activity (mentioned above or any other which is not) , please complete the form below to report the issue. We carefully examine every abuse report and we take action against the promoters.".replace(/{{domain}}/g, window.location.host), {
                "class": "intgrtn-text-top"
            });
        }

        window.intgrtn.events.on("form.contactUs.success", function (checkForm) {
            if (checkForm == form) {
                modal.intgrtnModal.hide();
            }
        });

        window.intgrtn.elements.appendChild(modalBody, textTop);
        window.intgrtn.elements.appendChild(modalBody, form);
        return modal;
    };

    window.intgrtn.generateBasicMessageModal = function (options) {
        if (!options) {
            options = {};
        }
        if (!options.title) {
            throw new Error("Enter title.");
        }
        if (!options.message) {
            throw new Error("Enter message.");
        }
        if (typeof options.confirmButton == "undefined") {
            options.confirmButton = true;
        }
        if (typeof options.confirmButtonText == "undefined") {
            options.confirmButtonText = "OK";
        }

        var modal = window.intgrtn.generateModal(options.title, "", {
            class: "intgrtn-modal-basic-message",
        });
        var modalBody = window.intgrtn.elements.findFirst(".intgrtn-modal-body", modal);

        var layoutHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-basic-message-layout-holder"
        });
        var textTop = window.intgrtn.elements.create("div", options.message);

        window.intgrtn.elements.appendChild(layoutHolder, textTop);

        if (options.confirmButton) {
            var confirmButtonHolder = window.intgrtn.elements.create("div", "", {
                "class": "intgrtn-confirm-button-holder",
            });
            var confirmButton = window.intgrtn.elements.create("button", options.confirmButtonText, {
                "class": "intgrtn-confirm-button",
            });
            window.intgrtn.elements.appendChild(confirmButtonHolder, confirmButton);
            window.intgrtn.elements.appendChild(layoutHolder, confirmButtonHolder);

            window.intgrtn.elements.on(confirmButton, "click", function (e) {
                modal.intgrtnModal.hide();
            });
        }

        window.intgrtn.elements.appendChild(modalBody, layoutHolder);

        return modal;
    }; // window.intgrtn.generateBasicMessageModal

    window.intgrtn.generateContactRequestMessageModal = function (options) {

        var modal = window.intgrtn.generateModal('Contact Request Messages', "", {
            class: "intgrtn-modal-contact-request-message",
            disableClose: true,
            contactRequestMessagesMode: true,
            contactRequestMessageModeLogoPath: window.intgrtn.options.forms.contactRequestMessage.logoPath
        });
        var modalBody = window.intgrtn.elements.findFirst(".intgrtn-modal-body", modal);
        var form = window.intgrtn.generateContactRequestMessageForm(options);

        window.intgrtn.elements.appendChild(modalBody, form);
        return modal;
    };

    window.intgrtn.generateAgreementModal = function (options) {
        if (!options) {
            options = window.intgrtn.options.agreements;
        }

        var modal = window.intgrtn.generateModal("", "", {
            class: "intgrtn-modal-agreement",
        });
        var modalBody = window.intgrtn.elements.findFirst(".intgrtn-modal-body", modal);
        var text = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-text"
        });
        var loaderHolder = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-loader-holder",
        });
        var loader = window.intgrtn.elements.create("div", "", {
            "class": "intgrtn-lds-dual-ring",
        });
        window.intgrtn.elements.appendChild(loaderHolder, loader);

        window.intgrtn.elements.addClass(loaderHolder, "show");
        window.intgrtn.getAgreement({
            type: options.type,
        }, function (response) {
            window.intgrtn.elements.setHtml(text, response.data.html);
            window.intgrtn.parseDataTags();
            window.intgrtn.elements.removeClass(loaderHolder, "show");
        });

        window.intgrtn.elements.appendChild(modalBody, text);
        window.intgrtn.elements.appendChild(modalBody, loaderHolder);

        return modal;
    };

    window.intgrtn.checkCountryRestrictions = function () {
        window.intgrtn.getProjectDetails(function (response) {
            if (response.data.project.restrictions.length > 0) {
                var restriction = response.data.project.restrictions[0];
                if (restriction.redirectProxyURL && response.data.client.ipIsProxy == 1) {
                    if (window.location.href !== restriction.redirectProxyURL) { // check for recursion
                        window.location.href = restriction.redirectProxyURL;
                    }
                } else if (restriction.redirectURL) {
                    if (window.location.href !== restriction.redirectURL) { // check for recursion
                        window.location.href = restriction.redirectURL;
                    }
                } else {
                    var modal = window.intgrtn.generateModal('Country Blocked', "", {
                        disableClose: true,
                        class: "intgrtn-modal-block-website",
                    });
                    var modalBody = window.intgrtn.elements.findFirst(".intgrtn-modal-body", modal);

                    var divTextBlockWebsite = window.intgrtn.elements.create("div", "Unfortunately, this offer is not available in your country.", {
                        "class": "intgrtn-text-block-website"
                    });

                    window.intgrtn.elements.setHtml(modalBody, divTextBlockWebsite);

                    modal.intgrtnModal.show();

                    window.intgrtn.fireEvent({
                        name: "offer-not-available",
                    });
                }
            }
        });
    };
    window.intgrtn.goToBrokerLoginUrlBySignupRequestID = function (signupRequestID, options) {
        if (typeof signupRequestID === "undefined") {
            signupRequestID = null;
        }
        if (typeof options === "undefined") {
            options = {}
        }

        var defaultOptions = {
            redirectTop: false,
        };

        options = window.intgrtn.merge(defaultOptions, options);

        window.intgrtn.getBrokerLoginDetails({
            signupID: signupRequestID,
        }, function (response) {
            var url = response.data.url;
            if (response.data.method == "POST") {
                if (response.data.fragment) {
                    url = url + "#" + response.data.fragment;
                }

                var formJS = window.intgrtn.elements.create("form", "", {
                    method: "POST",
                    action: url,
                });
                for (var key in response.data.parameters) {
                    var item = response.data.parameters[key];
                    var input = window.intgrtn.elements.create('input', "", {
                        type: "text",
                        name: key,
                        value: item
                    });
                    window.intgrtn.elements.appendChild(formJS, input);
                }
                document.body.appendChild(formJS);
                formJS.submit();
            } else {
                var parameters = [];
                for (var key in response.data.parameters) {
                    parameters.push(key + "=" + response.data.parameters[key]);
                }

                if (url.indexOf("?") === -1 && parameters.length > 0) {
                    url += "?";
                }

                if (parameters.length > 0) {
                    url += parameters.join("&");
                }

                if (response.data.fragment) {
                    url = url + "#" + response.data.fragment;
                }

                if (options.redirectTop == true) {
                    window.top.location.href = url;
                } else {
                    window.location.href = url;
                }
            }
        }, function (response) {
            throw new Error(response.messages.join(" "));
        });
    };
    window.intgrtn.goToBrokerLoginUrlBySignupRequestResponse = function (response) {
        if (response.data && response.data.redirect && response.data.redirect.method) {
            if (response.data.redirect.method == "POST") {
                var formJS = window.intgrtn.elements.create("form", "", {
                    method: "POST",
                    action: response.data.redirect.url,
                });
                if (response.data.redirect.params) {
                    for (var key in response.data.redirect.params) {
                        var item = response.data.redirect.params[key];
                        var input = window.intgrtn.elements.create('input', "", {
                            type: "text",
                            name: key,
                            value: item
                        });
                        window.intgrtn.elements.appendChild(formJS, input);
                    }
                }
                document.body.appendChild(formJS);
                formJS.submit();
            } else {
                if (response.data.redirect.url.indexOf("?") === -1) {
                    response.data.redirect.url += "?";
                }
                for (var key in response.data.redirect.params) {
                    var item = response.data.redirect.params[key];
                    response.data.redirect.url += "&" + key + "=" + item;
                }
                window.location.href = response.data.redirect.url;
            }
        }
    };

    window.intgrtn.replaceParameters = function (string) {
        string = string.replace(/{clickID}/g, window.intgrtn.lookup("clickID", true));
        string = string.replace(/{firstName}/g, window.intgrtn.lookup("firstName", true));
        string = string.replace(/{lastName}/g, window.intgrtn.lookup("lastName", true));
        string = string.replace(/{email}/g, window.intgrtn.lookup("email", true));
        string = string.replace(/{custom}/g, window.intgrtn.lookup("custom", true));
        string = string.replace(/{custom1}/g, window.intgrtn.lookup("custom1", true));
        string = string.replace(/{custom2}/g, window.intgrtn.lookup("custom2", true));
        string = string.replace(/{custom3}/g, window.intgrtn.lookup("custom3", true));
        string = string.replace(/{custom4}/g, window.intgrtn.lookup("custom4", true));
        string = string.replace(/{custom5}/g, window.intgrtn.lookup("custom5", true));
        string = string.replace(/{tracker}/g, window.intgrtn.lookup("clickID", true));

        return string;
    };
    window.intgrtn.parseDataTags = function () {
        window.intgrtn.elements.find("[data-intgrtn-form-signup]").forEach(function (element) {
            if (!element.intgrtn) {
                element.intgrtn = {};
                element.intgrtn.oldContent = window.intgrtn.elements.getHtml(element);
                element.intgrtn.options = window.intgrtn.merge({}, window.intgrtn.options.forms.signup);
                element.intgrtn.destroy = function () {
                    window.intgrtn.elements.setHtml(element, element.intgrtn.oldContent);
                };

                if (element.getAttribute("data-intgrtn-button-submit-text")) {
                    element.intgrtn.options.buttons.submit.text = element.getAttribute("data-intgrtn-button-submit-text");
                }
                if (element.getAttribute("data-intgrtn-button-generate-password-text")) {
                    element.intgrtn.options.buttons.generatePassword.text = element.getAttribute("data-intgrtn-button-generate-password-text");
                }
                if (element.getAttribute("data-intgrtn-button-generate-password-show")) {
                    element.intgrtn.options.buttons.generatePassword.show = ["true", "1"].indexOf(element.getAttribute("data-intgrtn-button-generate-password-show")) !== -1;
                }
                if (element.getAttribute("data-intgrtn-placeholder-first-name")) {
                    element.intgrtn.options.placeholders.firstName = element.getAttribute("data-intgrtn-placeholder-first-name");
                }
                if (element.getAttribute("data-intgrtn-placeholder-last-name")) {
                    element.intgrtn.options.placeholders.lastName = element.getAttribute("data-intgrtn-placeholder-last-name");
                }
                if (element.getAttribute("data-intgrtn-placeholder-email")) {
                    element.intgrtn.options.placeholders.email = element.getAttribute("data-intgrtn-placeholder-email");
                }
                if (element.getAttribute("data-intgrtn-placeholder-password")) {
                    element.intgrtn.options.placeholders.password = element.getAttribute("data-intgrtn-placeholder-password");
                }
                if (element.getAttribute("data-intgrtn-placeholder-phone")) {
                    element.intgrtn.options.placeholders.phone = element.getAttribute("data-intgrtn-placeholder-phone");
                }
                if (element.getAttribute("data-intgrtn-placeholder-area-code")) {
                    element.intgrtn.options.placeholders.areaCode = element.getAttribute("data-intgrtn-placeholder-area-code");
                }
                if (element.getAttribute("data-intgrtn-label-checkbox-agree-terms")) {
                    element.intgrtn.options.labels.checkboxAgreeTerms = element.getAttribute("data-intgrtn-label-checkbox-agree-terms");
                }
                if (element.getAttribute("data-intgrtn-fields-checkbox-agree-terms-show")) {
                    element.intgrtn.options.fields.checkboxAgreeTerms.show = ["true", "1"].indexOf(element.getAttribute("data-intgrtn-fields-checkbox-agree-terms-show")) !== -1;
                }
                if (element.getAttribute("data-intgrtn-fields-password-tooltip")) {
                    element.intgrtn.options.fields.password.tooltip = element.getAttribute("data-intgrtn-fields-password-tooltip");
                }
                if (element.getAttribute("data-intgrtn-fields-password-min-length")) {
                    element.intgrtn.options.fields.password.minLength = element.getAttribute("data-intgrtn-fields-password-min-length");
                }
                if (element.getAttribute("data-intgrtn-fields-password-max-length")) {
                    element.intgrtn.options.fields.password.maxLength = element.getAttribute("data-intgrtn-fields-password-max-length");
                }
                if (element.getAttribute("data-intgrtn-fields-password-verbose-errors-enabled")) {
                    element.intgrtn.options.fields.password.verboseErrors.enabled = ["true", "1"].indexOf(element.getAttribute("data-intgrtn-fields-password-verbose-errors-enabled")) !== -1;
                }
                if (element.getAttribute("data-intgrtn-validate-events-name-suffix")) {
                    element.intgrtn.options.validateEvents.eventNameSuffix = element.getAttribute("data-intgrtn-validate-events-name-suffix");
                }

                window.intgrtn.generateSignupForm(element.intgrtn.options, element);

                window.intgrtn.events.trigger("parse.data.tags.form.signup.success", element);
            }
        });

        window.intgrtn.elements.find("[data-intgrtn-form-signup-3-steps]").forEach(function (element) {
            if (!element.intgrtn) {
                element.intgrtn = {};
                element.intgrtn.oldContent = window.intgrtn.elements.getHtml(element);
                element.intgrtn.options = window.intgrtn.merge({}, window.intgrtn.options.forms.signup);
                element.intgrtn.destroy = function () {
                    window.intgrtn.elements.setHtml(element, element.intgrtn.oldContent);
                };

                if (element.getAttribute("data-intgrtn-button-submit-text")) {
                    element.intgrtn.options.buttons.submit.text = element.getAttribute("data-intgrtn-button-submit-text");
                }
                if (element.getAttribute("data-intgrtn-button-generate-password-text")) {
                    element.intgrtn.options.buttons.generatePassword.text = element.getAttribute("data-intgrtn-button-generate-password-text");
                }
                if (element.getAttribute("data-intgrtn-button-generate-password-show")) {
                    element.intgrtn.options.buttons.generatePassword.show = ["true", "1"].indexOf(element.getAttribute("data-intgrtn-button-generate-password-show")) !== -1;
                }
                if (element.getAttribute("data-intgrtn-placeholder-first-name")) {
                    element.intgrtn.options.placeholders.firstName = element.getAttribute("data-intgrtn-placeholder-first-name");
                }
                if (element.getAttribute("data-intgrtn-placeholder-last-name")) {
                    element.intgrtn.options.placeholders.lastName = element.getAttribute("data-intgrtn-placeholder-last-name");
                }
                if (element.getAttribute("data-intgrtn-placeholder-email")) {
                    element.intgrtn.options.placeholders.email = element.getAttribute("data-intgrtn-placeholder-email");
                }
                if (element.getAttribute("data-intgrtn-placeholder-password")) {
                    element.intgrtn.options.placeholders.password = element.getAttribute("data-intgrtn-placeholder-password");
                }
                if (element.getAttribute("data-intgrtn-placeholder-password-confirm")) {
                    element.intgrtn.options.placeholders.passwordConfirm = element.getAttribute("data-intgrtn-placeholder-password-confirm");
                }
                if (element.getAttribute("data-intgrtn-placeholder-phone")) {
                    element.intgrtn.options.placeholders.phone = element.getAttribute("data-intgrtn-placeholder-phone");
                }
                if (element.getAttribute("data-intgrtn-placeholder-area-code")) {
                    element.intgrtn.options.placeholders.areaCode = element.getAttribute("data-intgrtn-placeholder-area-code");
                }
                if (element.getAttribute("data-intgrtn-label-checkbox-agree-terms")) {
                    element.intgrtn.options.labels.checkboxAgreeTerms = element.getAttribute("data-intgrtn-label-checkbox-agree-terms");
                }
                if (element.getAttribute("data-intgrtn-fields-checkbox-agree-terms-show")) {
                    element.intgrtn.options.fields.checkboxAgreeTerms.show = ["true", "1"].indexOf(element.getAttribute("data-intgrtn-fields-checkbox-agree-terms-show")) !== -1;
                }
                if (element.getAttribute("data-intgrtn-fields-password-tooltip")) {
                    element.intgrtn.options.fields.password.tooltip = element.getAttribute("data-intgrtn-fields-password-tooltip");
                }
                if (element.getAttribute("data-intgrtn-fields-password-min-length")) {
                    element.intgrtn.options.fields.password.minLength = element.getAttribute("data-intgrtn-fields-password-min-length");
                }
                if (element.getAttribute("data-intgrtn-fields-password-max-length")) {
                    element.intgrtn.options.fields.password.maxLength = element.getAttribute("data-intgrtn-fields-password-max-length");
                }
                if (element.getAttribute("data-intgrtn-fields-password-verbose-errors-enabled")) {
                    element.intgrtn.options.fields.password.verboseErrors.enabled = ["true", "1"].indexOf(element.getAttribute("data-intgrtn-fields-password-verbose-errors-enabled")) !== -1;
                }
                if (element.getAttribute("data-intgrtn-steps-show")) {
                    element.intgrtn.options.steps.show = element.getAttribute("data-intgrtn-steps-show") == 1;
                }
                if (element.getAttribute("data-intgrtn-buttons-go-to-step2-text")) {
                    element.intgrtn.options.buttons.goToStep2.text = element.getAttribute("data-intgrtn-buttons-go-to-step2-text");
                }
                if (element.getAttribute("data-intgrtn-buttons-go-to-step3-text")) {
                    element.intgrtn.options.buttons.goToStep3.text = element.getAttribute("data-intgrtn-buttons-go-to-step3-text");
                }
                if (element.getAttribute("data-intgrtn-buttons-submit-text")) {
                    element.intgrtn.options.buttons.submit.text = element.getAttribute("data-intgrtn-buttons-submit-text");
                }
                if (element.getAttribute("data-intgrtn-validate-events-name-suffix")) {
                    element.intgrtn.options.validateEvents.eventNameSuffix = element.getAttribute("data-intgrtn-validate-events-name-suffix");
                }

                window.intgrtn.generateSignupForm3Steps(element.intgrtn.options, element);

                window.intgrtn.events.trigger("parse.data.tags.form.signup-3-steps.success", element);
            }
        });

        window.intgrtn.elements.find("[data-intgrtn-form-optin]").forEach(function (element) {
            if (!element.intgrtn) {
                element.intgrtn = {};
                element.intgrtn.oldContent = window.intgrtn.elements.getHtml(element);
                element.intgrtn.options = window.intgrtn.merge({}, window.intgrtn.options.forms.optin);
                element.intgrtn.destroy = function () {
                    window.intgrtn.elements.setHtml(element, element.intgrtn.oldContent);
                };

                if (element.getAttribute("data-intgrtn-button-submit-text")) {
                    element.intgrtn.options.buttons.submit.text = element.getAttribute("data-intgrtn-button-submit-text");
                }
                if (element.getAttribute("data-intgrtn-placeholder-name")) {
                    element.intgrtn.options.placeholders.name = element.getAttribute("data-intgrtn-placeholder-name");
                }
                if (element.getAttribute("data-intgrtn-placeholder-first-name")) {
                    element.intgrtn.options.placeholders.firstName = element.getAttribute("data-intgrtn-placeholder-first-name");
                }
                if (element.getAttribute("data-intgrtn-placeholder-last-name")) {
                    element.intgrtn.options.placeholders.lastName = element.getAttribute("data-intgrtn-placeholder-last-name");
                }
                if (element.getAttribute("data-intgrtn-placeholder-email")) {
                    element.intgrtn.options.placeholders.email = element.getAttribute("data-intgrtn-placeholder-email");
                }
                if (element.getAttribute("data-intgrtn-placeholder-phone")) {
                    element.intgrtn.options.placeholders.phone = element.getAttribute("data-intgrtn-placeholder-phone");
                }
                if (element.getAttribute("data-intgrtn-fields-name-show")) {
                    element.intgrtn.options.fields.name.show = ["true", "1"].indexOf(element.getAttribute("data-intgrtn-fields-name-show")) !== -1;
                }
                if (element.getAttribute("data-intgrtn-fields-first-name-show")) {
                    element.intgrtn.options.fields.firstName.show = ["true", "1"].indexOf(element.getAttribute("data-intgrtn-fields-first-name-show")) !== -1;
                }
                if (element.getAttribute("data-intgrtn-fields-last-name-show")) {
                    element.intgrtn.options.fields.lastName.show = ["true", "1"].indexOf(element.getAttribute("data-intgrtn-fields-last-name-show")) !== -1;
                }
                if (element.getAttribute("data-intgrtn-fields-phone-show")) {
                    element.intgrtn.options.fields.phone.show = ["true", "1"].indexOf(element.getAttribute("data-intgrtn-fields-phone-show")) !== -1;
                }
                if (element.getAttribute("data-intgrtn-on-success-redirect-url") !== null) {
                    element.intgrtn.options.onSuccess.redirectUrl = element.getAttribute("data-intgrtn-on-success-redirect-url");
                }

                window.intgrtn.elements.setHtml(element, window.intgrtn.generateOptinForm(element.intgrtn.options));

                window.intgrtn.events.trigger("parse.data.tags.form.optin.success", element);
            }
        });

        window.intgrtn.elements.find("[data-intgrtn-agreements]").forEach(function (element) {
            if (!element.intgrtn) {
                element.intgrtn = {};
                element.intgrtn.oldContent = window.intgrtn.elements.getHtml(element);
                element.intgrtn.options = window.intgrtn.merge({}, window.intgrtn.options.agreements);
                element.intgrtn.destroy = function () {
                    window.intgrtn.elements.setHtml(element, element.intgrtn.oldContent);
                };
                if (element.getAttribute("data-intgrtn-type")) {
                    element.intgrtn.options.type = element.getAttribute("data-intgrtn-type");
                }

                window.intgrtn.getAgreement({
                    type: element.intgrtn.options.type,
                }, function (response) {
                    window.intgrtn.elements.setHtml(element, response.data.html);
                    window.intgrtn.parseDataTags();
                });

            }
        });

        window.intgrtn.elements.find("[data-intgrtn-table-advertisers]").forEach(function (element) {
            if (!element.intgrtn) {
                element.intgrtn = {};
                element.intgrtn.oldContent = window.intgrtn.elements.getHtml(element);
                element.intgrtn.options = window.intgrtn.merge({}, window.intgrtn.options.tables.brokers);
                element.intgrtn.destroy = function () {
                    window.intgrtn.elements.setHtml(element, element.intgrtn.oldContent);
                };
                if (element.getAttribute("data-intgrtn-column-advertiser-logo-title")) {
                    options.columns.advertiserLogo.title = element.getAttribute("data-intgrtn-column-advertiser-logo-title");
                }
                if (element.getAttribute("data-intgrtn-column-custom1-title")) {
                    options.columns.custom1.title = element.getAttribute("data-intgrtn-column-custom1-title");
                }
                if (element.getAttribute("data-intgrtn-column-custom2-title")) {
                    options.columns.custom2.title = element.getAttribute("data-intgrtn-column-custom2-title");
                }
                if (element.getAttribute("data-intgrtn-column-custom3-title")) {
                    options.columns.custom3.title = element.getAttribute("data-intgrtn-column-custom3-title");
                }
                if (element.getAttribute("data-intgrtn-column-custom4-title")) {
                    options.columns.custom4.title = element.getAttribute("data-intgrtn-column-custom4-title");
                }
                if (element.getAttribute("data-intgrtn-column-custom5-title")) {
                    options.columns.custom5.title = element.getAttribute("data-intgrtn-column-custom5-title");
                }
                if (element.getAttribute("data-intgrtn-column-link-title")) {
                    options.columns.link.title = element.getAttribute("data-intgrtn-column-link-title");
                }

                window.intgrtn.elements.setHtml(element, window.intgrtn.generateBrokersTable(element.intgrtn.options));
            }
        });

        window.intgrtn.elements.find("[data-intgrtn-tooltip]").forEach(function (element) {
            if (!element.intgrtnTooltip) {
                element.intgrtnTooltip = {
                    tooltip: null
                };
                element.intgrtnTooltip.oldContent = window.intgrtn.elements.getHtml(element);
                var setTooltipPosition = function (element) {
                    if (element.intgrtnTooltip && element.intgrtnTooltip.tooltip) {
                        var offset = window.intgrtn.elements.getOffset(element);
                        element.intgrtnTooltip.tooltip.style.maxWidth = element.offsetWidth + "px";
                        element.intgrtnTooltip.tooltip.style.left = offset.left + "px";
                        element.intgrtnTooltip.tooltip.style.top = offset.top - element.intgrtnTooltip.tooltip.offsetHeight + "px";
                    }
                };
                var showTooltip = function (element) {
                    if (element.intgrtnTooltip.tooltip) {
                        window.intgrtn.elements.remove(element.intgrtnTooltip.tooltip);
                    }
                    if (!element.getAttribute("data-intgrtn-tooltip")) {
                        return false;
                    }
                    element.intgrtnTooltip.tooltip = window.intgrtn.elements.create("div", element.getAttribute("data-intgrtn-tooltip"), {
                        "class": "intgrtn-tooltip",
                    });
                    window.intgrtn.elements.appendChild("body", element.intgrtnTooltip.tooltip);
                    setTooltipPosition(element);
                };
                var hideTooltip = function (element) {
                    if (element.intgrtnTooltip.tooltip && element !== document.activeElement) {
                        window.intgrtn.elements.remove(element.intgrtnTooltip.tooltip);
                        element.intgrtnTooltip.tooltip = null;
                    }
                };
                var showTooltipEventCallback = function (e) {
                    showTooltip(element);
                    if (window.intgrtn.isMobileDevice()) { //fixed bug on iOS
                        element.focus();
                    }
                };
                var hideTooltipEventCallback = function (e) {
                    hideTooltip(element);
                };
                var setTooltipPositionCallback = function (e) {
                    setTooltipPosition(element);
                };
                window.intgrtn.elements.on(element, "mouseover", showTooltipEventCallback);
                window.intgrtn.elements.on(element, "onfocus", showTooltipEventCallback);
                window.intgrtn.elements.on(element, "mouseleave", hideTooltipEventCallback);
                window.intgrtn.elements.on(element, "focusout", hideTooltipEventCallback);
                window.intgrtn.elements.on(window, "resize", setTooltipPositionCallback);

                element.intgrtnTooltip.destroy = function () {
                    window.intgrtn.elements.setHtml(element, element.intgrtnTooltip.oldContent);
                    window.intgrtn.elements.off(element, "mouseover", showTooltipEventCallback);
                    window.intgrtn.elements.off(element, "onfocus", showTooltipEventCallback);
                    window.intgrtn.elements.off(element, "mouseleave", hideTooltipEventCallback);
                    window.intgrtn.elements.off(element, "focusout", hideTooltipEventCallback);
                    window.intgrtn.elements.off(element, "resize", setTooltipPositionCallback);
                };
            }
        });

        window.intgrtn.elements.find("[data-intgrtn-link-contact-us],[data-intgrtn-link-report-abuse]").forEach(function (element) {
            if (!element.intgrtn) {
                element.intgrtn = {};
                element.intgrtn.oldContent = window.intgrtn.elements.getHtml(element);
                element.intgrtn.options = window.intgrtn.merge({}, window.intgrtn.options.forms.contactUs);
                element.intgrtn.options.mode = element.hasAttribute('data-intgrtn-link-contact-us') ? 'contact' : 'abuse';

                if (element.getAttribute("data-intgrtn-type")) {
                    element.intgrtn.options.fields.type.value = element.getAttribute("data-intgrtn-type");
                }

                element.intgrtn.openModal = function (e) {
                    var modal = window.intgrtn.generateContactUsModal(element.intgrtn.options);
                    modal.intgrtnModal.show();
                    if (e) {
                        e.preventDefault();
                    }
                };
                window.intgrtn.elements.on(element, "click", element.intgrtn.openModal);
                element.intgrtn.destroy = function () {
                    window.intgrtn.elements.off(element, "click", element.intgrtn.openModal);
                };
            }
        });

        window.intgrtn.elements.find("[data-intgrtn-form-contact-request-message]").forEach(function (element) {
            if (!element.intgrtn) {
                element.intgrtn = {};
                element.intgrtn.oldContent = window.intgrtn.elements.getHtml(element);

                var options = window.intgrtn.merge({}, window.intgrtn.options.contactRequestMessagesLayout);
                var layout = window.intgrtn.generateContactRequestMessagesLayout(options);
                window.intgrtn.elements.appendChild(element, layout);

                element.intgrtn.destroy = function () {
                    window.intgrtn.elements.setHtml(element, element.intgrtn.oldContent);
                };
            }
        });

        window.intgrtn.elements.find("[data-intgrtn-link-agreements]").forEach(function (element) {
            if (!element.intgrtn) {
                element.intgrtn = {};
                element.intgrtn.options = window.intgrtn.merge({}, window.intgrtn.options.agreements);
                element.intgrtn.options.type = element.getAttribute("data-intgrtn-link-agreements");
                element.intgrtn.openModal = function (e) {
                    var modal = window.intgrtn.generateAgreementModal(element.intgrtn.options);
                    modal.intgrtnModal.show();
                    if (e) {
                        e.preventDefault();
                    }
                };

                window.intgrtn.elements.on(element, "click", element.intgrtn.openModal);

                element.intgrtn.destroy = function () {
                    window.intgrtn.elements.off(element, "click", element.intgrtn.openModal);
                };
            }
        });

        /**
         * Popup close button
         */
        window.intgrtn.elements.find("[data-intgrtn-link-close-exit-popup]").forEach(function (element) {
            if (!element.intgrtn) {
                element.intgrtn = {};
                window.intgrtn.elements.on(element, "click", function (event) {
                    if (window.intgrtn.inIframe()) {
                        if (window.parent) {
                            window.parent.postMessage("intgrtn-exit-popup-close", "*");
                        }
                    } else {
                        if (window.top.intgrtn.options.exitPopup.modal && window.top.intgrtn.options.exitPopup.modal.intgrtnModal) {
                            window.top.intgrtn.options.exitPopup.modal.intgrtnModal.hide();
                        }
                    }
                    event.preventDefault();
                });
            }
        });

        /**
         * Redirect Returning Lead
         */
        if (window.intgrtn.elements.find("[data-intgrtn-form-optin]").length > 0 || window.intgrtn.elements.find("[data-intgrtn-form-signup]").length > 0) {
            if (!window.intgrtn.getParameter("intgrtn_openModal") && !window.intgrtn.inIframe()) {
                if (window.intgrtn.lookup("redirectReturningLead", true, "auto") == "auto" && window.intgrtn.lookup("signupRequestID", true)) {
                    window.intgrtn.goToBrokerLoginUrlBySignupRequestID(window.intgrtn.lookup("signupRequestID", true));
                }
            }
        }

        /**
         * Cookie Popup
         */
        if (!window.intgrtn.elements.findFirst(".intgrtn-cookie-popup") && window.intgrtn.lookup("cookiePopup", true, 1) == 1 && window.intgrtn.lookup("cookiePolicyAccepted", true) != 1 && !window.intgrtn.inIframe()) {
            window.intgrtn.elements.appendChild("body", window.intgrtn.generateCookiePopup());
        }

        window.intgrtn.events.trigger("parse.data.tags.success");

        return window.intgrtn;
    };
    window.intgrtn.destroyDataTags = function () {
        window.intgrtn.elements.find("[data-intgrtn-form-signup]").forEach(function (element) {
            if (element.intgrtn) {
                element.intgrtn.destroy();
            }
            delete element.intgrtn;
        });
        window.intgrtn.elements.find("[data-intgrtn-form-signup-3-steps]").forEach(function (element) {
            if (element.intgrtn) {
                element.intgrtn.destroy();
            }
            delete element.intgrtn;
        });
        window.intgrtn.elements.find("[data-intgrtn-form-optin]").forEach(function (element) {
            if (element.intgrtn) {
                element.intgrtn.destroy();
            }
            delete element.intgrtn;
        });
        window.intgrtn.elements.find("[data-intgrtn-form-contact-request-message]").forEach(function (element) {
            if (element.intgrtn) {
                element.intgrtn.destroy();
            }
            delete element.intgrtn;
        });
        window.intgrtn.elements.find("[data-intgrtn-agreements]").forEach(function (element) {
            if (element.intgrtn) {
                element.intgrtn.destroy();
            }
            delete element.intgrtn;
        });
        window.intgrtn.elements.find("[data-intgrtn-link-contact-us],[data-intgrtn-link-report-abuse]").forEach(function (element) {
            if (element.intgrtn) {
                element.intgrtn.destroy();
            }
            delete element.intgrtn;
        });
        window.intgrtn.elements.find("[data-intgrtn-table-advertisers]").forEach(function (element) {
            if (element.intgrtn) {
                element.intgrtn.destroy();
            }
            delete element.intgrtn;
        });
        window.intgrtn.elements.find("[data-intgrtn-link-agreements]").forEach(function (element) {
            if (element.intgrtn) {
                element.intgrtn.destroy();
            }
            delete element.intgrtn;
        });
        window.intgrtn.elements.find("[data-intgrtn-link-contact-us],[data-intgrtn-link-report-abuse]").forEach(function (element) {
            if (element.intgrtn) {
                element.intgrtn.destroy();
            }
            delete element.intgrtn;
        });
        window.intgrtn.elements.find("[data-intgrtn-tooltip]").forEach(function (element) {
            if (element.intgrtnTooltip) {
                element.intgrtnTooltip.destroy();
            }
            delete element.intgrtnTooltip;
        });
        if (window.intgrtn.elements.findFirst(".intgrtn-cookie-popup") && window.intgrtn.elements.findFirst(".intgrtn-cookie-popup").intgrtn) {
            window.intgrtn.elements.findFirst(".intgrtn-cookie-popup").intgrtn.destroy();
        }

        window.intgrtn.events.trigger("destroy.data.tags.success");

        return window.intgrtn;
    };

    if (typeof window.intgrtnInit === "function") {
        window.intgrtnInit(window.intgrtn);
    }

    if (window.intgrtn.lookup("intgrtn.options.server.endpoint", true)) {
        window.intgrtn.options.server.endpoint = window.intgrtn.lookup("intgrtn.options.server.endpoint", true);
    }
    if (window.intgrtn.lookup("intgrtn.options.server.host", true)) {
        window.intgrtn.options.server.host = window.intgrtn.lookup("intgrtn.options.server.host", true);
    }

    /**
     * Clear all intgrtn cookies on new clickID
     */
    if (window.intgrtn.cookies.get("intgrtn_clickID") && window.intgrtn.getParameter("intgrtn_clickID")) {
        if (window.intgrtn.cookies.get("intgrtn_clickID") != window.intgrtn.getParameter("intgrtn_clickID")) {
            window.intgrtn.cookies.getAll().forEach(function (cookie) {
                if (cookie.name.startsWith('intgrtn_')) {
                    window.intgrtn.cookies.delete(cookie.name);
                }
            });
        }
    }

    //Store default params
    window.intgrtn.lookup("clickID", true);
    window.intgrtn.lookup("custom", true);
    window.intgrtn.lookup("custom1", true);
    window.intgrtn.lookup("custom2", true);
    window.intgrtn.lookup("custom3", true);
    window.intgrtn.lookup("custom4", true);
    window.intgrtn.lookup("custom5", true);
    window.intgrtn.lookup("autoSignup", true);
    window.intgrtn.lookup("isTest", true);
    window.intgrtn.lookup("bID", true);
    window.intgrtn.lookup("baa", true);
    window.intgrtn.lookup("ip", true);
    window.intgrtn.lookup("redirectReturningLead", true);
    window.intgrtn.lookup("signupRequestID", true);
    window.intgrtn.lookup("cookiePopup", true);
    window.intgrtn.lookup("userHash", true);
    window.intgrtn.lookup("platforms", true);
    window.intgrtn.lookup("excludePlatforms", true);
    window.intgrtn.lookup("locale", true);

    if (!window.intgrtn.lookup("locale", true)) {
        var userLang = navigator.language || navigator.userLanguage;
        if (userLang) {
            window.intgrtn.store("locale", userLang);
        }
    }

    //Fire events from URL parameters;
    if (window.intgrtn.getParameter("intgrtn_fireEvent")) {
        window.intgrtn.fireEvent({
            name: window.intgrtn.getParameter("intgrtn_fireEvent"),
        });
    }

    //Auto open modals
    if (window.intgrtn.getParameter("intgrtn_openModal")) {
        switch (window.intgrtn.getParameter("intgrtn_openModal")) {
            case "contact-us":
                var modal = window.intgrtn.generateContactUsModal();
                modal.intgrtnModal.show();
                break;
            case "report-abuse":
                var modal = window.intgrtn.generateAbuseModal();
                modal.intgrtnModal.show();
                break;
            default:
                window.intgrtn.sendErrorMessage("Invalid value for intgrtn_openModal parameter.");
                break;
        }
    }

    window.intgrtn.loadjscssfile(window.intgrtn.options.server.endpoint + "/api/v1/integration/sdk.css?v=" + window.intgrtn.getVersion(), "css");


    var waitDocumentLoading = setInterval(function () {
        if (document.readyState == "loading") {
            return false;
        }
        clearInterval(waitDocumentLoading);

        window.intgrtn.getProjectDetails(function (response) {
            if (["dev"].indexOf(response.data.application.mode) == -1 && window.intgrtn.lookup("isTest", true) == null) {
                if (window.intgrtn.options.server.ignoreProjectEndpoint == false) {
                    var scriptUrlParser = document.createElement('a');
                    scriptUrlParser.href = response.data.whitelabel.affiliateLinkURL;
                    window.intgrtn.options.server.endpoint = "//" + scriptUrlParser.hostname;
                    window.intgrtn.options.server.host = scriptUrlParser.hostname;
                    window.intgrtn.store("intgrtn.options.server.endpoint", window.intgrtn.options.server.endpoint);
                    window.intgrtn.store("intgrtn.options.server.host", window.intgrtn.options.server.host);
                }
            }
            if (window.intgrtn.lookup("ignoreCountryRestrictions", true) != 1) {
                window.intgrtn.checkCountryRestrictions();
            }

            /**
             * Check to generate clickID
             */
            if (window.intgrtn.lookup("userHash", true) && !window.intgrtn.lookup("clickID", true)) {
                window.intgrtn.sendAddClickRequest({
                    userHash: window.intgrtn.lookup("userHash", true),
                }, function (response) {
                    window.intgrtn.store("clickID", response.data.click.ID);
                });
            }

            /**
             * Save custom fields in cookies
             */
            var intgrtnCustomFields = window.intgrtn.getQueryParameters().intgrtn_customFields;
            if (intgrtnCustomFields) {
                var intgrtnCustomFieldCookie = window.intgrtn.cookies.get('intgrtn_customFields');
                if (intgrtnCustomFieldCookie) {
                    intgrtnCustomFieldCookie = JSON.parse(intgrtnCustomFieldCookie);
                    intgrtnCustomFields = window.intgrtn.merge(intgrtnCustomFieldCookie, intgrtnCustomFields);
                }
                window.intgrtn.cookies.set("intgrtn_customFields", JSON.stringify(intgrtnCustomFields), 365);
            }

            if (response.data.project.details) {
                window.intgrtn.options.forms.optin.fields.firstName.required = response.data.project.details.requiredFirstName;
                window.intgrtn.options.forms.optin.fields.lastName.required = response.data.project.details.requiredLastName;
                window.intgrtn.options.forms.optin.fields.email.required = response.data.project.details.requiredEmail;

                window.intgrtn.options.forms.signup.fields.firstName.required = response.data.project.details.requiredFirstName;
                window.intgrtn.options.forms.signup.fields.lastName.required = response.data.project.details.requiredLastName;
                window.intgrtn.options.forms.signup.fields.email.required = response.data.project.details.requiredEmail;
                window.intgrtn.options.forms.signup.fields.phone.required = response.data.project.details.requiredPhone;
                window.intgrtn.options.forms.signup.fields.areaCode.required = response.data.project.details.requiredPhone;
                window.intgrtn.options.forms.signup.fields.password.required = response.data.project.details.requiredPassword;
                window.intgrtn.options.forms.signup.fields.passwordConfirm.required = response.data.project.details.requiredPassword;

                if (response.data.project.details.password.maxLength !== null) {
                    if (response.data.project.details.password.maxLength == 0) {
                        response.data.project.details.password.maxLength = false;
                    }
                    window.intgrtn.options.forms.signup.fields.password.maxLength = response.data.project.details.password.maxLength;
                }
                if (response.data.project.details.password.minLength !== null) {
                    if (response.data.project.details.password.minLength == 0) {
                        response.data.project.details.password.minLength = false;
                    }
                    window.intgrtn.options.forms.signup.fields.password.minLength = response.data.project.details.password.minLength;
                }
                if (response.data.project.details.password.pattern !== null) {
                    if (response.data.project.details.password.pattern == 0) {
                        response.data.project.details.password.pattern = false;
                    }
                    window.intgrtn.options.forms.signup.fields.password.pattern = response.data.project.details.password.pattern;
                }
                if (response.data.project.details.password.patternLowercaseLetter !== null) {
                    if (response.data.project.details.password.patternLowercaseLetter == 0) {
                        response.data.project.details.password.patternLowercaseLetter = false;
                    }
                    window.intgrtn.options.forms.signup.fields.password.patternLowercaseLetter = response.data.project.details.password.patternLowercaseLetter;
                }
                if (response.data.project.details.password.patternUppercaseLetter !== null) {
                    if (response.data.project.details.password.patternUppercaseLetter == 0) {
                        response.data.project.details.password.patternUppercaseLetter = false;
                    }
                    window.intgrtn.options.forms.signup.fields.password.patternUppercaseLetter = response.data.project.details.password.patternUppercaseLetter;
                }
                if (response.data.project.details.password.patternNoSpecialChars !== null) {
                    if (response.data.project.details.password.patternNoSpecialChars == 0) {
                        response.data.project.details.password.patternNoSpecialChars = false;
                    }
                    window.intgrtn.options.forms.signup.fields.password.patternNoSpecialChars = response.data.project.details.password.patternNoSpecialChars;
                }
                if (response.data.project.details.password.patternNumber !== null) {
                    if (response.data.project.details.password.patternNumber == 0) {
                        response.data.project.details.password.patternNumber = false;
                    }
                    window.intgrtn.options.forms.signup.fields.password.patternNumber = response.data.project.details.password.patternNumber;
                }
                if (response.data.project.details.password.patternLetter !== null) {
                    if (response.data.project.details.password.patternLetter == 0) {
                        response.data.project.details.password.patternLetter = false;
                    }
                    window.intgrtn.options.forms.signup.fields.password.patternLetter = response.data.project.details.password.patternLetter;
                }
                if (response.data.project.details.password.tooltip !== null) {
                    if (response.data.project.details.password.tooltip == 0) {
                        response.data.project.details.password.tooltip = false;
                    }
                    window.intgrtn.options.forms.signup.fields.password.tooltip = response.data.project.details.password.tooltip;
                }
            }

            /**
             * Check for exit popup
             */
            if (!window.intgrtn.isMobileDevice() && !window.intgrtn.inIframe() && window.intgrtn.elements.find("[data-intgrtn-form-contact-request-message]").length == 0) {
                if (response.data.exitPopup) {
                    if (window.intgrtn.options.exitPopup.url === null) {
                        window.intgrtn.options.exitPopup.url = response.data.exitPopup.url;
                    }
                    if (window.intgrtn.options.exitPopup.html === null) {
                        window.intgrtn.options.exitPopup.html = response.data.exitPopup.html;
                    }
                    if (window.intgrtn.options.exitPopup.showLimit === null) {
                        window.intgrtn.options.exitPopup.showLimit = response.data.exitPopup.showLimit;
                    }
                    if (window.intgrtn.options.exitPopup.delayInterval === null) {
                        window.intgrtn.options.exitPopup.delayInterval = response.data.exitPopup.delayInterval;
                    }
                    if (window.intgrtn.options.exitPopup.disableUntilScroll === null) {
                        window.intgrtn.options.exitPopup.disableUntilScroll = response.data.exitPopup.disableUntilScroll;
                    }
                    if (window.intgrtn.options.exitPopup.preloadUrl === null) {
                        window.intgrtn.options.exitPopup.preloadUrl = response.data.exitPopup.preloadUrl;
                    }
                    if (window.intgrtn.options.exitPopup.disabled === null) {
                        window.intgrtn.options.exitPopup.disabled = response.data.exitPopup.disabled;
                    }
                }

                window.intgrtn.options.exitPopup.modal = window.intgrtn.generateExitPopupModal();

                window.intgrtn.elements.on("html", "mouseleave", function (e) {
                    if (window.intgrtn.options.exitPopup.modal.intgrtnModal.isShowed) {
                        return false;
                    }
                    if (!window.intgrtn.options.exitPopup.url && !window.intgrtn.options.exitPopup.html) {
                        return false;
                    }
                    if (window.intgrtn.options.exitPopup.disabled) {
                        return false;
                    }
                    if (window.intgrtn.options.exitPopup.modal.intgrtnExitPopup.disabledFromDelay) {
                        return false;
                    }
                    if (window.intgrtn.options.exitPopup.modal.intgrtnExitPopup.disabledFromCount) {
                        return false;
                    }
                    if (window.intgrtn.options.exitPopup.modal.intgrtnExitPopup.disabledFromScroll) {
                        return false;
                    }

                    if (window.intgrtn.elements.find("input:focus").length == 0) {
                        window.intgrtn.options.exitPopup.modal.intgrtnModal.show();
                    } else {
                        var tolerance = 20;
                        if (e.clientX <= tolerance ||
                            (window.intgrtn.getViewportWidth() - e.clientX) <= tolerance ||
                            e.clientY <= tolerance ||
                            (window.intgrtn.getViewportHeight() - e.clientY) <= tolerance) {
                            window.intgrtn.options.exitPopup.modal.intgrtnModal.show();
                        }
                    }
                });
                window.intgrtn.elements.on(window, "scroll", function () {
                    window.intgrtn.options.exitPopup.modal.intgrtnExitPopup.disabledFromScroll = false;
                });
            }
            if (response.data.scripts && !window.intgrtn.inIframe()) {
                response.data.scripts.forEach(function (item) {
                    switch (item.projectScriptPlacementID) {
                        case 1: //Before </head>
                            window.intgrtn.elements.parseHTML(item.content).forEach(function (node) {
                                window.intgrtn.elements.appendChild("head", node);
                            });
                            break;
                        case 2: //After <body>
                            window.intgrtn.elements.parseHTML(item.content).forEach(function (node) {
                                window.intgrtn.elements.prepend("body", node);
                            });
                            break;
                        case 3: //Before </body>
                            window.intgrtn.elements.parseHTML(item.content).forEach(function (node) {
                                window.intgrtn.elements.appendChild("body", node);
                            });
                            break;
                    }
                });
            }
            if (response.data.domManipulations) {
                response.data.domManipulations.forEach(function (item) {
                    window.intgrtn.elements.find(item.selector).forEach(function (element) {
                        switch (item.action) {
                            case "append":
                            case "prepend":
                            case "html":
                                window.intgrtn.elements.parseHTML(item.value).forEach(function (node) {
                                    switch (item.action) {
                                        case "append":
                                            window.intgrtn.elements.appendChild(element, node);
                                            break;
                                        case "prepend":
                                            window.intgrtn.elements.prepend(element, node);
                                            break;
                                        case "html":
                                            window.intgrtn.elements.setHtml(element, node);
                                            break;
                                        default:
                                            break;
                                    }
                                });
                                break;
                            case "remove":
                                window.intgrtn.elements.remove(element);
                                break;
                        }

                    });
                });
            }
            window.intgrtn.destroyDataTags();
            window.intgrtn.parseDataTags();
            window.intgrtn.events.trigger("get.project.details.success", response);
            window.intgrtn.fireEvent({
                name: window.intgrtn.options.initializedEvent.name,
            });
        }, function (response) {
            if (response.data.domManipulations) {
                response.data.domManipulations.forEach(function (item) {
                    window.intgrtn.elements.find(item.selector).forEach(function (element) {
                        switch (item.action) {
                            case "append":
                            case "prepend":
                            case "html":
                                window.intgrtn.elements.parseHTML(item.value).forEach(function (node) {
                                    switch (item.action) {
                                        case "append":
                                            window.intgrtn.elements.appendChild(element, node);
                                            break;
                                        case "prepend":
                                            window.intgrtn.elements.prepend(element, node);
                                            break;
                                        case "html":
                                            window.intgrtn.elements.setHtml(element, node);
                                            break;
                                        default:
                                            break;
                                    }
                                });
                                break;
                            case "remove":
                                window.intgrtn.elements.remove(element);
                                break;
                        }
                    });
                });
            }
            window.intgrtn.destroyDataTags();
            window.intgrtn.parseDataTags();
            window.intgrtn.events.trigger("get.project.details.error", response);
        });
    }, 10);
}(window, document, console));

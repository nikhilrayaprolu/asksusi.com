var app = angular.module('appListApp', ['loklak', 'ngTouch']);

app.controller("app_list", function($scope, $http) {
    $scope.apps = [];
    $scope.categoryKeys = [];
    data={
  "apps": [
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["/api/apps.json"],
      "name": "applist",
      "headline": "loklak app list",
      "alternativeHeadline": "work from GCI task",
      "applicationCategory": "About Project",
      "applicationSubCategory": "Apps listing",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Seva Zhidkov",
        "email": "zhidkovseva@gmail.com",
        "url": "https://github.com/sevazhidkov",
        "sameAs": "https://github.com/sevazhidkov"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["/api/signup.json"],
      "name": "signup",
      "headline": "Sign Up to Loklak",
      "alternativeHeadline": "Sign Up",
      "applicationCategory": "Accounts API",
      "applicationSubCategory": "account operations",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Shiven Mian",
        "url": "http://shivenmian.herokuapp.com",
        "email": "shiven15094@iiitd.ac.in",
        "sameAs": "https://github.com/shivenmian"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["/api/recoverpassword.json"],
      "name": "forgotpassword",
      "headline": "Password Recovery",
      "alternativeHeadline": "Forgot Password",
      "applicationCategory": "Accounts API",
      "applicationSubCategory": "account operations",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Shiven Mian",
        "url": "http://shivenmian.herokuapp.com",
        "email": "shiven15094@iiitd.ac.in",
        "sameAs": "https://github.com/shivenmian"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["susi_cognition_000.json"],
      "name": "susi",
      "headline": "Chat with Susi",
      "alternativeHeadline": "Ask Susi Your Queries",
      "applicationCategory": "Susi API",
      "applicationSubCategory": "Text Retrieval",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Damini Satya",
        "email": "daminisatya@gmail.com",
        "url": "https://github.com/daminisatya",
        "sameAs": "https://github.com/daminisatya"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["/api/pubkey_registration.json"],
      "name": "keyRegistration",
      "headline": "Register a public key",
      "alternativeHeadline": "Key Registration",
      "applicationCategory": "Accounts API",
      "applicationSubCategory": "account operations",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Robert Mader",
        "url": "",
        "email": "treba@silentundo.org",
        "sameAs": "https://github.com/treba123"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["/api/resetpassword.json"],
      "name": "resetpass",
      "headline": "Reset your Loklak Password",
      "alternativeHeadline": "Reset Password",
      "applicationCategory": "Accounts API",
      "applicationSubCategory": "account operations",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Shiven Mian",
        "url": "http://shivenmian.herokuapp.com",
        "email": "shiven15094@iiitd.ac.in",
        "sameAs": "https://github.com/shivenmian"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["/learning/rule.json"],
      "name": "consolerule",
      "headline": "Teach Console Rules",
      "alternativeHeadline": "Console Rules",
      "applicationCategory": "Rules API",
      "applicationSubCategory": "teach susi",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Aditya Giri",
        "url": "https://youtube.com/21dtrg",
        "email": "dtrg21@gmail.com",
        "sameAs": "https://github.com/brainbuzzer"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["/api/account-permissions.json"],
      "name": "accountpermissions",
      "headline": "View permissions",
      "alternativeHeadline": "Account Permissions",
      "applicationCategory": "Accounts API",
      "applicationSubCategory": "account operations",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Robert Mader",
        "url": "",
        "email": "treba@silentundo.org",
        "sameAs": "https://github.com/treba123"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "permissions": ["/api/login.json"],
      "name": "loginpage",
      "headline": "Log In to Loklak",
      "alternativeHeadline": "Login",
      "applicationCategory": "Accounts API",
      "applicationSubCategory": "account operations",
      "operatingSystem": "http://loklak.org",
      "author": {
        "@type": "Person",
        "name": "Shiven Mian",
        "url": "http://shivenmian.herokuapp.com",
        "email": "shiven15094@iiitd.ac.in",
        "sameAs": "https://github.com/shivenmian"
      }
    }
  ],
  "categories": [
    "About Project",
    "Accounts API",
    "Susi API",
    "Rules API"
  ],
  "category": {
    "About Project": ["applist"],
    "Accounts API": [
      "signup",
      "forgotpassword",
      "keyRegistration",
      "resetpass",
      "accountpermissions",
      "loginpage"
    ],
    "Susi API": ["susi"],
    "Rules API": ["consolerule"]
  },
  "session": {"identity": {
    "type": "host",
    "name": "162.158.166.151",
    "anonymous": true
  }}
}

        $scope.categoryKeys = data.categories;
        $scope.apps = data.apps;
        $scope.categoryKeys.unshift('All');

    $scope.categoryFilter = function(event) {
        item = event.target.id;
        if (item != 'All') {
            itemName = item.match(/[A-Z][a-z]+/g);
            $('#categoryName')[0].innerHTML = itemName.join(" ");
            $('div.span2').hide();
            qConstruct = 'div.span2#'+item;
            $(qConstruct).show();
            event.stopImmediatePropagation();
        }
        else {
            $('#categoryName')[0].innerHTML = 'Loklak Apps';
            $('div.span2').show();
        }
    }
});

app.filter('nospace', function () {
    return function (value) {
        return (!value) ? '' : value.replace(/ /g, '');
    };
});

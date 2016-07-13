var BoilerPlate = angular.module('BoilerPlate.controllers',[])

.controller('HomeCtrl',function($scope, $http, $route, $location, $mdDialog, $mdMedia) {

    var username = "gagned";
    var hostname = "mail.uoguelph.ca";
    var linktext = username + "@" + hostname ;
    //document.write("<a href='" + "mail" + "to:" + username + "@" + hostname + "'>" + linktext + "</a>");
});


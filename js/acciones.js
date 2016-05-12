// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener('deviceready', function() {
		$('#btnbeep').tap(function (){
			navigator.notification.beep(1);//numero de veces que deseas que notifique
		}); //beep
		$('#btnvibrar').on('tap', function () {
			navigator.notification.vibrate(4000);
	});
});
});
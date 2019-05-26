
  if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./serviceW.js')
	.then(function() {
		console.log('Service Worker registered!');
	})
	.catch(function() {
		console.log('Service Worker Registration failed :(');
	});
}







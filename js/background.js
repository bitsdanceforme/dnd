// The background script page manages the app lifecycle. Listeners are registered here 
// Called when the app is launched
chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('window.html', {
		'outerBounds': {
			'width': 400,
			'height': 500
		}
	});
});


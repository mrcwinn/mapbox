Package.describe({
	summary: "Adds MapBox CSS and JS to the client"
});

Package.on_use(function (api) {
	var path = Npm.require('path');

	api.add_files(path.join('css', 'mapbox.css'), 'client');
	api.add_files(path.join('js', 'mapbox.js'), 'client');
});
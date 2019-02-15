/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"demo/PWAUI5APP/test/integration/PhoneJourneys"
	], function() {
		QUnit.start();
	});
});
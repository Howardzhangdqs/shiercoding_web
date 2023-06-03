/**
 * Creates a Ping instance.
 * @returns {Ping}
 * @constructor
 */
export var Ping = function (opt) {
	this.opt = opt || {};
	this.favicon = this.opt.favicon || "/favicon.ico";
	this.timeout = this.opt.timeout || 0;
	this.logError = this.opt.logError || false;
};

/**
 * Pings source and triggers a callback when completed.
 * @param {string} source Source of the website or server, including protocol and port.
 * @returns {Promise} A promise that both resolves and rejects to the ping value. Or undefined if the browser does not support Promise.
 */
Ping.prototype.ping = function (source) {
	var promise, resolve, reject;
	if (typeof Promise !== "undefined") {
		promise = new Promise(function (_resolve, _reject) {
			resolve = _resolve;
			reject = _reject;
		});
	}

	var self = this;
	self.wasSuccess = false;
	try {
		self.img = new Image();
		self.img.onload = onload;
		self.img.onerror = onerror;

		var timer;
		var start = new Date();

		function onload(e) {
			self.wasSuccess = true;
			pingCheck.call(self, e);
		}

		function onerror(e) {
			self.wasSuccess = false;
			pingCheck.call(self, e);
		}

		if (self.timeout) {
			timer = setTimeout(function () {
				pingCheck.call(self, undefined);
			}, self.timeout);
		}


		/**
		 * Times ping and triggers callback.
		 */
		function pingCheck() {
			if (timer) { clearTimeout(timer); }
			var pong = new Date() - start;

			if (promise) {
				return this.wasSuccess ? resolve(pong) : reject(pong);
			} else {
				throw new Error("Promise is not supported by your browser. Use callback instead.");
			}
		}

		self.img.src = source + self.favicon + "?" + (+new Date()); // Trigger image load with cache buster
		return promise;
		
	} catch {
		return promise;
	}
};
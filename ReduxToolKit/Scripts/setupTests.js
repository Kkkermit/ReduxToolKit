import "@testing-library/jest-dom/extend-expect";

const configure = require("enzyme").configure;
const { configure: configureRtl } = require("@testing-library/react");
const Adapter = require("@wojtekmaj/enzyme-adapter-react-17");
const nodeCrypto = require("crypto");

window.crypto = {
	getRandomValues: function(buffer) {
		return nodeCrypto.randomFillSync(buffer);
	},
};

/* imports polyfills for Headers, Response, etc. into global scope for unit tests */
require("whatwg-fetch");

const BroadcastChannel = require("worker_threads").BroadcastChannel;
window.BroadcastChannel = BroadcastChannel;

configure({ adapter: new Adapter() });
configureRtl({ asyncUtilTimeout: 10000 });

/**
 * Return date in 'en-GB' locale (FSV2 default format).
 * This function is used to avoid a bug in Node. (https://github.com/nodejs/node/issues/8500)
 * By default --with-intl=small-icu is used to build node, which contains just the en-US locale.
 */
Date.prototype.toLocaleDateString = function(locales, options) {
	if (locales === "en-GB") {
		const date = this;
		/** This time will be written to snaps in unit testing.
		 * It failed if local date (time) was used and run it in different timezone.
		 * UTC time was used to avoid this issue.
		 */
		const year = date.getUTCFullYear();
		const month = date.getUTCMonth();
		const day = date.getUTCDate();
		const hour = date.getUTCHours();
		const minute = date.getUTCMinutes();
		const second = date.getUTCSeconds();
		const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		const dateInfo =
			(options.day ? (day < 10 ? "0" + day : day) : "") +
			" " +
			(options.month ? months[month] : "") +
			" " +
			(options.year ? year : "");
		const timeInfo =
			(options.hour ? (hour < 10 ? "0" + hour : hour) : "") +
			(options.minute ? ":" + (minute < 10 ? "0" + minute : minute) : "") +
			(options.second ? ":" + (second < 10 ? "0" + second : second) : "");

		return dateInfo && timeInfo ? dateInfo + " " + timeInfo : dateInfo ? dateInfo : timeInfo;
	}
};

/**
 * Return time.
 * This function is used to avoid a bug in Node. (https://github.com/nodejs/node/issues/8500)
 * By default --with-intl=small-icu is used to build node, which contains just the en-US locale.
 *
 * NOTE: Please update this function if more value needed
 */
Date.prototype.toLocaleTimeString = function(locales, options) {
	if (locales === "en-GB") {
		const date = this;
		const hour = date.getUTCHours();
		const minute = date.getUTCMinutes();
		const second = date.getUTCSeconds();
		return (
			(options.hour ? (hour < 10 ? "0" + hour : hour) : "") +
			(options.minute ? ":" + (minute < 10 ? "0" + minute : minute) : "") +
			(options.second ? ":" + (second < 10 ? "0" + second : second) : "")
		);
	}
};

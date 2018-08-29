# vue-websocket [![NPM version](https://img.shields.io/npm/v/vue-websocket.svg)](https://www.npmjs.com/package/vue-websocket)
![VueJS v1.x compatible](https://img.shields.io/badge/vue%201.x-compatible-green.svg)
![VueJS v2.x compatible](https://img.shields.io/badge/vue%202.x-compatible-green.svg)

A [socket.io](https://socket.io) plugin for Vue.js.

> **This package does not support native websockets**. At the time, we recommend using [vue-native-websocket](https://github.com/nathantsoi/vue-native-websocket) or [implementing it yourself](https://alligator.io/vuejs/vue-socketio/). For ongoing discussion on this, please visit [#2](https://github.com/icebob/vue-websocket/issues/2).

## Installation
You can either install this package with `npm`, or manually by downloading the primary plugin file.

### npm

```bash
$ npm install -S vue-websocket
```

### Manual
Download the production [`vue-websocket.js`](https://raw.githubusercontent.com/icebob/vue-websocket/master/dist/vue-websocket.js) file. This link is a mirror of the same file found in the `dist` directory of this project.

## Usage
Register the plugin. By default, it will connect to `/`:

```js
import VueWebsocket from "vue-websocket";
Vue.use(VueWebsocket);
```

Or to connect to another address:

```js
Vue.use(VueWebsocket, "ws://otherserver:8080");
```

You can also pass options:

```js
Vue.use(VueWebsocket, "ws://otherserver:8080", {
	reconnection: false
});
```

To use it in your components:

```html
<script>
	export default {

		methods: {
			add() {
		  		// Emit the server side
		  		this.$socket.emit("add", { a: 5, b: 3 });
			},

			get() {
		  		this.$socket.emit("get", { id: 12 }, (response) => {
					...
				});
			}
		},

		socket: {
			// Prefix for event names
			// prefix: "/counter/",

			// If you set `namespace`, it will create a new socket connection to the namespace instead of `/`
			// namespace: "/counter",

			events: {

				// Similar as this.$socket.on("changed", (msg) => { ... });
				// If you set `prefix` to `/counter/`, the event name will be `/counter/changed`
				//
				changed(msg) {
					console.log("Something changed: " + msg);
				}

				/* common socket.io events
				connect() {
					console.log("Websocket connected to " + this.$socket.nsp);
				},

				disconnect() {
					console.log("Websocket disconnected from " + this.$socket.nsp);
				},

				error(err) {
					console.error("Websocket error!", err);
				}
				*/

			}
		}
	};

</script>
```

## Develop

### Building
This command will build a distributable version in the `dist` directory:

```bash
$ npm run build
```

## Testing
This package uses [`karma`](https://www.npmjs.com/package/karma) for testing. You can run the tests like so:

```bash
$ npm test
```

## Contribution
Please send pull requests improving the usage and fixing bugs, improving documentation and providing better examples, or providing some testing, because these things are important.

## License
`vue-websocket` is available under the [MIT license](https://tldrlegal.com/license/mit-license).

## Contact

Copyright © 2018 Icebob

[![@icebob](https://img.shields.io/badge/github-icebob-green.svg)](https://github.com/icebob) [![@icebob](https://img.shields.io/badge/twitter-Icebobcsi-blue.svg)](https://twitter.com/Icebobcsi)

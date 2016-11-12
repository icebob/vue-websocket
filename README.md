# vue-websocket [![NPM version](https://img.shields.io/npm/v/vue-websocket.svg)](https://www.npmjs.com/package/vue-websocket)
Websocket (socket.io) plugin for VueJS. Support namespaces.


## Install
### NPM
You can install it via [NPM](http://npmjs.org/).
```
$ npm install vue-websocket
```
### Manual
Download zip package and unpack and add the `vue-websocket.js` file to your project from dist folder.
```
https://github.com/icebob/vue-websocket/archive/master.zip
```

## Usage
Register the plugin
```js
import VueWebsocket from "vue-websocket";
Vue.use(VueWebsocket);
```
or connect to other address:
```js
Vue.use(VueWebsocket, "ws://otherserver:8080");
```
You can pass options too:
```js
Vue.use(VueWebsocket, "ws://otherserver:8080", {
	reconnection: false
});
```


Use it in your components:
```html
<script>
	export default {
		
		methods: {
		  // Emit the server side
		  this.$socket.emit("add", { a: 5 });    
		},

		socket: {
			// prefix: "/counter/",
			// namespace: "/counter",

			events: {

				// Similar as this.$socket.on("changed", (msg) => { ... });
				changed(msg) {
					console.log("Something changed: " + msg);
				}
				
				/*
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

## Build
This command will build a distributable version in the `dist` directory.
```bash
npm run build
```

## Test
```bash
npm test
```

## Contribution
Please send pull requests improving the usage and fixing bugs, improving documentation and providing better examples, or providing some testing, because these things are important.

## License
vue-touch-keyboard is available under the [MIT license](https://tldrlegal.com/license/mit-license).

## Contact

Copyright (C) 2016 Icebob

[![@icebob](https://img.shields.io/badge/github-icebob-green.svg)](https://github.com/icebob) [![@icebob](https://img.shields.io/badge/twitter-Icebobcsi-blue.svg)](https://twitter.com/Icebobcsi)

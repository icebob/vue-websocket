# vue-websocket
Websocket plugin for VueJS. Support namespaces.

## Usage
Register the plugin
```js
import VueWebsocket from "vue-websocket";
Vue.use(VueWebsocket);
```
or connect to other address:
```js
Vue.use(VueWebsocket, "http://otherserver:8080");
```
You can pass options too:
```js
Vue.use(VueWebsocket, "http://otherserver:8080", {
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

			}
		}
	};

</script>
```

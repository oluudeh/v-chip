
# v-chip

>A Chip component for VueJS

[![npm](https://img.shields.io/npm/v/v-chip.svg)](https://www.npmjs.com/package/v-chip)

## Installation

```bash
npm install --save v-chip
```

## Import on a single component

```js
import Vue from 'vue'
import VChip from 'v-chip'
import VChipInput from 'v-chip/src/v-chip-input.js'

Vue.use(VChip)
Vue.use(VChipInput)

```


## Examples

```html
<template>
	<div>

		<!-- Label only -->
		<v-chip label="Jane Doe"></v-chip>

		<!-- Label and image -->
		<v-chip img-src="avatar.jpg" label="Jane Doe"></v-chip>

		<!-- Closable chip with label -->
		<v-chip label="John Doe" :closable="true"></v-chip>

		<!-- Closable chip with label and image -->
		<v-chip img-src="avatar.jpg" label="John Doe" :closable="true"></v-chip>

		<!-- With text and background color -->
		<v-chip img-src="avatar.jpg" label="Harry Doe" :closable="true" bg-color="#003b62" color="#89aec5"></v-chip>


		<!-- chips from input field -->
		<v-chip-input v-model="humans"></v-chip-input>

		<!-- chips from options -->
		<v-chip-input v-model="names" :options="planets"></v-chip-input>

		<ul>
			<li v-for="human in humans"> {{ human }}</li>
		</ul>

		<ul>
			<li v-for="destination in destinations"> {{ destination }}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				humans: [],
				destinations: [],
				planets: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn',  'Uranus', 'Neptune', 'Pluto']
			}
		},

		
	}
</script>

```

## Properties

### v-chip

| name | type | required | default | 
|--|--| -- | -- | 
| label | String | true | null | 
| img-src | String | false | null | 
| closable | Boolean| false | false | 
| color   | String | false | #333 |
| bgColor | String | false | #f1f1f1 |


### v-chip-input

| name | type | required | default | 
|--|--| -- | -- | 
| options | Array | false | null | 
| v-model | Array | true | null | 
| input-class | String | false | null | 


## Author

 Olu Udeh

## License

This project is licensed under
[MIT License](http://en.wikipedia.org/wiki/MIT_License)



<template>
	<div>
		<div class="chipinput-container">
			<div class="chips-container">
				<vue-chip v-for="item, index in modelValue" :closable="true" :index="index" :key="item" :label="item" @click.native="removeItem"></vue-chip>

			</div>
			<br/>
			<datalist v-if="options" id="vue-autocomplete-list">
				<option v-for="option in options" :value="option"></option>
			</datalist>
			<input v-if="options" type="text" :class="inputClass" list="vue-autocomplete-list" @input="onInput" >
			<input v-else type="text" :class="inputClass" @keyup.enter="onEnter">
		</div>
	</div>
</template>

<style>
	.chips-container {
		display: block!important;
		width: 100%!important;
		clear: both;
		min-width: 100%;
	}
	.chipinput-container input{
		display: block!important;
	}
</style>

<script>
	export default {
		model: {
			prop: 'modelValue',
			event: 'enter' 
		},

		props: {
			options: {type: Array, required: false},
			modelValue: {type: Array},
			inputClass: {type: String, required: false},
		},

		data: function(){
			return {
			}
		},

		mounted(){

		},

		methods: {
			onEnter(ev){
				var text = ev.target.value
				if(text.length > 0){
					this.modelValue.push(text)
					ev.target.value = ''
				}
			},

			removeItem(ev){
				//console.log(ev)
				var app = this;
				var parent = ev.target.parentElement;
				//console.log(parent)

					var state = ev.target.parentElement.style.display;
					//console.log(state)
				setTimeout(function() {
					var state = ev.target.parentElement.style.display;
					//console.log(state)
					if(state == 'none'){
						var i = parent.getAttribute('index')
						app.modelValue.splice(i, 1)
					}
				}, 10)
			},

			onInput(ev){
				var value = ev.target.value
				var index = this.options.indexOf(value)
				var ind = this.modelValue.indexOf(value)
				if(index != -1 && ind == -1){
					this.modelValue.push(value.trim())
					ev.target.value = ''					
				}
			}
		}

	}
</script>
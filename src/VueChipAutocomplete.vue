<template>
	<div>
		<div class="chipinput-container">
			<input type="hidden" :v-model="vModel">
			<div class="chips-container">
				<vue-chip v-for="item, index in vModel" :closable="true" :index="index" v-bind:key="item" :label="item" v-on:click.native="removeItem"></vue-chip>

			</div>
			<datalist id="vue-autocomplete-list">
				<option v-for="option in options" :value="option"></option>
			</datalist>
			<input v-if="allowNew" type="text" class="form-control" list="vue-autocomplete-list" @input="onInput" @keyup.enter="onEnter">
			<input v-else="allowNew" type="text" class="form-control" list="vue-autocomplete-list" @input="onInput">

		</div>
	</div>
</template>

<style>
	.chips-container .chip{
		/*float: left!important;*/
	}
	div.chips-container {
		display: block!important;
		width: 100%!important;
		margin-bottom: 20px!important;
	}
	div.chipinput-container input{
		margin-top:15px!important;
		display: block!important;
	}
</style>

<script>
	export default {
		props: {
			options: {type: Array, required: true},
			vModel: { type: Array, required: true },
			allowNew: { type: Boolean, required: false, default: false }
		},

		data: function(){
			return {
				vci_selected_: [],
				selected: [],
				items: []
			}
		},

		mounted(){
			this.vci_selected_ = this.vModel;
		},

		methods: {
			onEnter(ev){
				var text = ev.target.value
				if(text.length > 0){
					var ind = this.vModel.indexOf(text)
					if(ind == -1)
						this.vModel.push(text)
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
						app.vModel.splice(i, 1)
					}
				}, 10)
			},

			_changeInput(ev){
				var value = ev.target.value
				if(value.length < 2) return
				var result = this.matchResult(value)
				this.items = result
				//document.getElementById('autocomplete-result').innerHTML = result
			},

			matchResult(input){
				var reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ""), 'i')

				return this.people.filter(function(person){
					if(person.match(reg)){
						return person
					}
				})
			},

			selectItem(ev){
				var value = ev.target.text
				this.selected.push(value)
			},

			onInput(ev){
				var value = ev.target.value
				var index = this.options.indexOf(value)
				var ind = this.vModel.indexOf(value)
				if(index != -1 && ind == -1){
					this.vModel.push(value.trim())
					ev.target.value = ''					
				}
			}

		}



	}
</script>
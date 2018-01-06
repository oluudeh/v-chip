<template>
	<div>
		<div class="chipinput-container">
			<input type="hidden" :v-model="vModel">
			<div class="chips-container">
				<vue-chip v-for="item, index in vModel" :closable="true" :index="index" :key="item" :label="item" @click.native="removeItem"></vue-chip>

			</div>
			<div class="input-wrapper">
				<input type="text" name="" @keyup.enter.prevent="onEnter">
			</div>
		</div>
	</div>
</template>

<style>
	.chips-container .chip{
		/*float: left!important;*/
	}
	.chips-container {
		display: block!important;
		width: 100%!important;
	}
	.chipinput-container input{
		display: block!important;
	}
</style>

<script>
	export default {
		props: {
			options: {type: Array, required: false},
			vModel: { type: Array, required: true }
		},

		data: function(){
			return {
				vci_selected_: [],
			}
		},

		mounted(){
			this.vci_selected_ = this.vModel;
		},

		methods: {
			onEnter(ev){
				var text = ev.target.value
				if(text.length > 0){
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
			}
		}



	}
</script>
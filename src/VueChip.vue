<template>
	<div>
		<div ref="chip" class="chip" :index="index">
			<img ref="img" v-show="imgSrc" :src="imgSrc" alt="Person" width="96" height="96">
			{{ label }}
			<span v-show="closable" class="closebtn" onclick="this.parentElement.style.display = 'none'">&times;</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			imgSrc: { type: String, required: false, default: null },
			label: { type: String, required: true },
			index: { type: Number, required: false },
			closable: { type: Boolean, required: false, default: false},
			bgColor: { type: String, required: false, default: '#f1f1f1' },
			color: { type: String, required: false, default: '#333' }
		},

		mounted(){
			let chip = this.$refs.chip
			chip.style.color = this.color
		    chip.style.backgroundColor = this.bgColor


		    if (this.imgSrc != null) {
		    	let img =  this.$refs.img
		    	img.border = '4px solid'
		    	img.style.borderColor = this.bgColor
		    }
		},

		methods: {
			closeChip(ev){
				ev.target.parentElement.style.display = 'none';
			},
			
		},
	}
</script>

<style lang="scss">
	.chip{
		display: inline-block;
		padding: 0 25px;
		height: 50px;
		font-size: 16px;
		line-height: 50px;
		border-radius: 25px;
		float: left;
		margin: 2px;

		img{
			float: left;
			margin: 0 10px 0 -25px;
			height: 42px;
			width: 42px;
			border-radius: 50%;
		}
	}
	.closebtn{
		padding-left: 10px;
		color: #888;
		font-weight: bold;
		float: right;
		font-size: 20px;
		cursor: pointer;
		&:hover{
			color: #000;
		}
	}
</style>


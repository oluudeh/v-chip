<template>
	<div>
		<div class="chip" :index="index">
			<img v-show="imgSrc" :src="imgSrc" alt="Person" width="96" height="96">
			{{ label }}
			<span v-show="closable" class="closebtn" onclick="this.parentElement.style.display = 'none'">&times;</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			imgSrc: { type: String, required: false },
			label: { type: String, required: true },
			index: { type: Number, required: false },
			closable: { type: Boolean, required: false, default: false},
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
		background-color: #f1f1f1;
		float: left;
		margin: 2px;

		img{
			float: left;
			margin: 0 10px 0 -25px;
			height: 43px;
			width: 43px;
			border-radius: 50%;
			border: 4px solid #f1f1f1;
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


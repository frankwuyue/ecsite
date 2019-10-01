<template>
	<div class="events">
		<button type="button" name="button" @click="counter++">test</button>
		<div class="parent" @click="parent">
			<p>parent</p>
			<p>parent</p>
			<p>parent</p>
			<p>parent</p>
			<div class="child" @click.stop="child">
				<p>child</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: function () {
			return {
				counter: 0
			}
		},
		methods: {
			msg: function () {
				window.console.log("aaaa");
			},
			parent: function () {
				window.console.log("parent");
			},
			child: function() {
				window.console.log("child");
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
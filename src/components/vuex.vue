<template>
	<div>
		vuex {{ $store.state.count }}
		<button type="button" name="button" @click="increment">increment</button>
		<button type="button" name="button" @click="decrement">decrement</button>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	export default {
		methods: mapActions([
			'increment',
			'decrement'
		])
	}
</script>

<style lang="scss" scoped>

</style>
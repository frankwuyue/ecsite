<template>
	<div>
		page b {{ $store.state.count.count }}
		<button type="button" name="button" @click="add(2)">inc</button>
		<button type="button" name="button" @click="reduce">dec</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
	export default {
		methods: mapActions('count',[
			'add',
			'reduce'
		])
	}
</script>

<style lang="scss" scoped>

</style>
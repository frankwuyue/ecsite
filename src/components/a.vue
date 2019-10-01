<template>
	<div>
		page a {{ $store.state.money.money }}
		<button type="button" name="button" @click="add">inc</button>
		<button type="button" name="button" @click="reduce">dec</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
	export default {
		methods: mapActions('money',[
			'add',
			'reduce'
		])
	}
</script>

<style lang="scss" scoped>

</style>
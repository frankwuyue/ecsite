<template>
	<div class="com">
		<slot name="a"></slot>
		components
		{{ com }}
		{{ age }}
		<button type="button" name="button" @click="$emit('patch')">send to parent component</button>
		<slot name="b"></slot>
	</div>
</template>

<script>
	export default {
		props: ['age'],
		data() {
			return {
				com: 'com'
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
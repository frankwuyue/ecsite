import Vue from 'vue';

Vue.directive('n', {
	bind: (el, binding) => {
		el.textContent = Math.pow(binding.value, 2);
	},
	update: (el, binding) => {
		el.textContent = Math.pow(binding.value, 2);
	}
});
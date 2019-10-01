<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
		<div v-html="msg1"></div>
		<div v-if="seen">Di Ren Jie</div>
		<div :class="[a1,a2]">{{ msg2 }}</div>
		<div :class="{'test-3' : a3}">style object</div>
		<div :class="obj">style object</div>
		<ul>
			<li v-for="(item, index) in list" :key="item">
				{{ item }}, {{ index }}
			</li>
		</ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
		msg: String
	},
	data() {
		return {
			msg1: '<span style="color:red;">Hello World.</span>',
			seen: true,
			a1: 'test-1',
			a2: 'test-2',
			a3: false,
			obj: {
				'test-3' : true
			},
			list: ['a', 'b', 'c', 'd']
		}
	},
	computed: {
		msg2 : function () {
			return this.msg + 'aaaa'
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

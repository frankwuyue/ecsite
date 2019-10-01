<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg='Hello World.'/>
		<div v-n="8"></div>
		<event/>
		<com v-bind:age="age" v-on:patch="patch">
			<h1 class="custom" slot="a">slot test</h1>
			<h1 class="custom" slot="b">slot test</h1>
		</com>
		<pagea/>
		<pageb/>
		<p>
			<router-link to="/pagea">Go to pagea</router-link>
			<router-link to="/pageb">Go to pageb</router-link>
		</p>
		<router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import './components/n'
import event from './components/event'
import com from './components/com'
import Vuexx from './components/vuex'
import pagea from './components/a'
import pageb from './components/b'

export default {
  name: 'app',
  components: {
		HelloWorld,
		event,
		com,
		pagea,
		pageb
	},
	data() {
		return {
			age : 184
		}
	},
	methods: {
		patch: function () {
			this.age++;
		}
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

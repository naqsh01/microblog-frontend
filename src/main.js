import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Rox from 'rox-browser'

Vue.use(Buefy)

Vue.config.productionTip = false

const flags = {
  vipCustomer: new Rox.Flag(),
  backgroundColors: new Rox.Variant('orange', ['orange', 'silver', 'gold'])
}

async function initRollout () {
  const options = {}

  // Register the flags with Rollout
  Rox.register('', flags)

  // Setup the Rollout key
  await Rox.setup('5eaf77683ff7d51938c7a713', options)

  // Boolean flag example
  if (flags.enableTutorial.isEnabled()) {
    console.log('enableTutorial flag is true')
    // TODO:  Put your code here that needs to be gated
  }

  // Multivariate flag example
  console.log('Title color is ' + flags.titleColors.getValue())
}

initRollout().then(function () {
  console.log('Done loading Rollout')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/*Vue.component('progressbar', {
  template: `<div>
                <slot></slot>
                <progress :value="value" max="100"/>
              </div>`,
  props: {
    target: {
      type: Number
    }
  },
  data () {
    return {
      value: 0,
      interval: null
    }
  },
  mounted () {
    this.interval = setInterval(() => {
      this.value++
    }, 10)
  },
  watch: {
    value (v) {
      if (v === this.target) {
        clearInterval(this.interval)
      }
    }
  }
})

new Vue({
  el: '.progressbar-container',
  components: ['progressbar'],
  data () {
    return {
      items: [
        {
          key: 'HTML/CSS',
          value: 50,
        },
        {
          key: 'JS',
          value: 75
        },
        {
          key: 'JAVA',
          value: 100
        },
        {
          key: 'PHP',
          value: 90
        }
      ]
    }
  }
})*/
import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: '<div ref="div">{{text}} {{obj.a}}</div>',
  data: {
    text: 2,
    obj: {}
  }
  // watch: {
  //   text (newText, oldText) {
  //     console.log(`${newText} : ${oldText}`)
  //   }
  // }
})

app.$mount('#root')

// setInterval(() => {
//   app.text += 1
// }, 2000)
// console.log(app)

// app.$on('test', () => {
//   console.log('test 触发')
// })
//
// setInterval(() => {
//   app.$emit('test', 1, 2)
// }, 2000);
// app.$set(app.obj,'a',4);
// app.$delete()

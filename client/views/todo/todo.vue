<template>
  <div>
    <section class="real-app">
      <tabs :value="filter" @change="handleChangeTab">
        <tab :label="tab" :index="tab" v-for="tab in stats"></tab>
      </tabs>
      <input
        type="text"
        class="add-input"
        autofocus="autofocus"
        placeholder="接下去要做什么？"
        @keyup.enter="addTodo"
      >
      <item
        :todo="todo"
        v-for="todo in filteredTodos"
        :key="todo.id"
        @del="deleteTodo"
      />
      <helper
        :filter="filter"
        :todos="todos"
        @toggle="toggleFilter"
        @clearAllCompleted="clearAllCompleted"
      />
    </section>
    <!--<router-view></router-view>-->
    <div style="width:40px;height: 40px;border: 1px solid red" @click="proIdFn">按钮</div>
    <button v-longpress="incrementPlusTen" @click="incrementPlusOne">按钮22</button>
    <div>{{value}}</div>
  </div>
</template>

<script>
  import Item from './item.vue'
  import Helper from './helper.vue'

  let id = 0
  export default {
    directives: {
      // longpress:{
      //   bind: function(el, binding, vNode) {
      //     console.log(1111111)
      //     // 确保提供的表达式是函数
      //     // if (typeof binding.value !== 'function') {
      //     //   // 获取组件名称
      //     //   const compName = vNode.context.name;
      //     //   // 将警告传递给控制台
      //     //   let warn = `[longpress:] provided expression '${binding.expression}' is not a function, but has to be `;
      //     //   if (compName) { warn += `Found in component '${compName}' `}
      //     //
      //     //   console.warn(warn);
      //     // }
      //
      //     // 定义变量
      //     let pressTimer = null;
      //
      //     // 定义函数处理程序
      //     // 创建计时器（ 1秒后执行函数 ）
      //     let start = (e) => {
      //
      //       if (e.type === 'click' && e.button !== 0) {
      //         return;
      //       }
      //
      //       if (pressTimer === null) {
      //         pressTimer = setTimeout(() => {
      //           // 执行函数
      //           handler();
      //         }, 1000)
      //       }
      //     }
      //
      //     // 取消计时器
      //     let cancel = (e) => {
      //
      //       // 检查计时器是否有值
      //       if ( pressTimer !== null ) {
      //         clearTimeout(pressTimer);
      //         pressTimer = null;
      //       }
      //     }
      //
      //     // 运行函数
      //     const handler = (e) => {
      //       // 执行传递给指令的方法
      //       binding.value(e)
      //     }
      //
      //     // 添加事件监听器
      //     el.addEventListener("mousedown", start);
      //     el.addEventListener("touchstart", start);
      //
      //     // 取消计时器
      //     el.addEventListener("click", cancel);
      //     el.addEventListener("mouseout", cancel);
      //     el.addEventListener("touchend", cancel);
      //     el.addEventListener("touchcancel", cancel);
      //   }
      // }
    },
    metaInfo:{
      title:'todo doc'
    },
    beforeRouteEnter(to, from, next) {
      console.log('todo beforeRouteEnter')
      next(vm => {
        console.log('todo beforeRouteEnter', vm.id)
        console.log(vm)
        vm.proId = '这是实验'
      })
    },
    beforeRouteUpdate(to, from, next) {
      console.log('todo beforeRouteUpdate')
      next()
    },
    beforeRouteLeave(to, from, next) {
      console.log('todo beforeRouteLeave')
      next()
    },
    props: ['id'],
    mounted() {
      console.log(this.id);
      console.log(this.$route)
    },
    data() {
      return {
        stats: ['all', 'active', 'completed'],
        todos: [],
        filter: 'all',
        proId: '',
        value:10,
        message:'hello!'
      }
    },
    components: {
      Item,
      Helper
    },
    computed: {
      filteredTodos() {
        if (this.filter === 'all') {
          return this.todos
        }
        const completed = this.filter === 'completed'
        return this.todos.filter(todo => completed === todo.completed)
      }
    },
    methods: {
      // 增加1
      incrementPlusOne() {
        this.value++
      },
      // 增加10
      incrementPlusTen() {
        this.value += 10
      },
      handleChangeTab(index){
        this.filter = index
      },
      proIdFn() {
        const that = this;
        console.log(that.proId)
      },
      addTodo(e) {
        this.todos.unshift({
          id: id++,
          content: e.target.value.trim(),
          completed: false
        })
        e.target.value = ''
      },
      deleteTodo(id) {
        this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
      },
      toggleFilter(state) {
        this.filter = state
      },
      clearAllCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .real-app {
    width 600px
    margin 0 auto
    box-shadow 0 0 5px #666
  }

  .add-input {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0;
    outline: none;
    color: inherit;
    padding: 6px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    font-smoothing: antialiased;
    padding: 16px 16px 16px 60px;
    border: none;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  }
</style>



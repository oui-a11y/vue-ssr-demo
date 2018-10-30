<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <!--{{fullName}}分隔这里{{counter}}分隔{{text}}分隔{{textPlus}}分隔{{c}}-->
    <router-link to="/app/123">app</router-link>
    <router-link to="/login">login</router-link>
    <transition name="fade">
      <router-view/>
    </transition>
    <!--<router-view name="a"/>-->
    <!--<notification content="test notify"></notification>-->
    <button @click="handleNotify">handleNotify</button>
    <Footer></Footer>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
  import Header from './layout/header.vue'
  import Footer from './layout/footer.jsx'
  // import Todo from './views/todo/todo.vue'

  export default {
    metaInfo:{
      title:'xin doc'
    },
    mounted() {
      // console.log(this.$store)
      // this.$store.commit('updateCount',{
      //   num:5
      // })
      // let i = 1;
      // setInterval(() => {
      //   this.updateCount({num:i++})
      // }, 1000)

      // this['a/updataText'](1231232321)
      // this['b/testAction']()
    },
    components: {
      Header,
      Footer,
      // Todo
    },
    computed: {
      // ...mapState(['count']),
      // ...mapState({
      //   counter:'count'
      // }),
      // ...mapState({
      //   counter: (state) => state.count,
      //   text: (state) => state.a.text,
      //   c: (state) => state.c.text
      // }),
      // ...mapGetters({
      //   fullName: 'fullName',
      //   textPlus: 'a/textPlus'
      // })
      // fullName(){
      //   return this.$store.getters.fullName
      // }
    },
    methods: {
      handleNotify(){
        this.$notify({
          content: 'test $notify',
          btn: 'close'
        })
      }
      // ...mapMutations(['updateCount', 'a/updataText']),
      // ...mapActions(['updateCountAsync', 'a/add', 'b/testAction'])
    }
  }
</script>

<style lang="stylus" scoped>
  #app {
    position absolute
    left 0
    right 0
    top 0
    bottom 0
  }

  #cover {
    position absolute
    left 0
    top 0
    right 0
    bottom 0
    background-color #999
    opacity .9
    z-index -1
  }
</style>



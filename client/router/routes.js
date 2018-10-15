// import Tode from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path:'/app/:id',
    // path: '/app',
    name: 'app',
    props:true,
    // props:{
    //   id:'143243434'
    // },
    // props:(route)=>({id:route.query.b}),
    //http://localhost:8000/app/123?a=123&b=3Asdsdsdsd
    meta: {
      title: 'this is app',
      description: 'asdasd'
    },
    component: ()=> import('../views/todo/todo.vue'),
    // components:{
    //   default:Tode,
    //   a:Login
    // },
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
    beforeEnter(to, from, next) {
      console.log('app beforeEach')
      next()
    }
  },
  {
    path: '/login',
    component: ()=> import('../views/login/login.vue')
  }
]

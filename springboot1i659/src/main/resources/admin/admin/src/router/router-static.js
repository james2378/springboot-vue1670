import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import adminexam from '@/views/modules/exampaperlist/exam'
    import examfailrecord from '@/views/modules/examfailrecord/list'
    import discussdangjianxuexi from '@/views/modules/discussdangjianxuexi/list'
    import dangjianhuodong from '@/views/modules/dangjianhuodong/list'
    import examquestion from '@/views/modules/examquestion/list'
    import wenjuandiaocha from '@/views/modules/wenjuandiaocha/list'
    import xuexixinde from '@/views/modules/xuexixinde/list'
    import exampaper from '@/views/modules/exampaper/list'
    import minzhutoupiao from '@/views/modules/minzhutoupiao/list'
    import dangjianxuexi from '@/views/modules/dangjianxuexi/list'
    import dangyuan from '@/views/modules/dangyuan/list'
    import discussdangjianyaowen from '@/views/modules/discussdangjianyaowen/list'
    import huodongbaoming from '@/views/modules/huodongbaoming/list'
    import exampaperlist from '@/views/modules/exampaperlist/list'
    import dangjianditu from '@/views/modules/dangjianditu/list'
    import discussdangjianditu from '@/views/modules/discussdangjianditu/list'
    import toupiaoxinxi from '@/views/modules/toupiaoxinxi/list'
    import dangjianyaowen from '@/views/modules/dangjianyaowen/list'
    import dangfeijiaona from '@/views/modules/dangfeijiaona/list'
    import config from '@/views/modules/config/list'
    import examrecord from '@/views/modules/examrecord/list'
    import dangzhibu from '@/views/modules/dangzhibu/list'
    import wenjuanhuida from '@/views/modules/wenjuanhuida/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/examfailrecord',
        name: '错题本',
        component: examfailrecord
      }
      ,{
	path: '/discussdangjianxuexi',
        name: '党建学习评论',
        component: discussdangjianxuexi
      }
      ,{
	path: '/dangjianhuodong',
        name: '党建活动',
        component: dangjianhuodong
      }
      ,{
	path: '/examquestion',
        name: '试题管理',
        component: examquestion
      }
      ,{
	path: '/wenjuandiaocha',
        name: '问卷调查',
        component: wenjuandiaocha
      }
      ,{
	path: '/xuexixinde',
        name: '学习心得',
        component: xuexixinde
      }
      ,{
	path: '/exampaper',
        name: '学习测试管理',
        component: exampaper
      }
      ,{
	path: '/minzhutoupiao',
        name: '民主投票',
        component: minzhutoupiao
      }
      ,{
	path: '/dangjianxuexi',
        name: '党建学习',
        component: dangjianxuexi
      }
      ,{
	path: '/dangyuan',
        name: '党员',
        component: dangyuan
      }
      ,{
	path: '/discussdangjianyaowen',
        name: '党建要闻评论',
        component: discussdangjianyaowen
      }
      ,{
	path: '/huodongbaoming',
        name: '活动报名',
        component: huodongbaoming
      }
      ,{
	path: '/exampaperlist',
        name: '学习测试列表',
        component: exampaperlist
      }
      ,{
	path: '/dangjianditu',
        name: '党建地图',
        component: dangjianditu
      }
      ,{
	path: '/discussdangjianditu',
        name: '党建地图评论',
        component: discussdangjianditu
      }
      ,{
	path: '/toupiaoxinxi',
        name: '投票信息',
        component: toupiaoxinxi
      }
      ,{
	path: '/dangjianyaowen',
        name: '党建要闻',
        component: dangjianyaowen
      }
      ,{
	path: '/dangfeijiaona',
        name: '党费缴纳',
        component: dangfeijiaona
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/examrecord',
        name: '考试记录',
        component: examrecord
      }
      ,{
	path: '/dangzhibu',
        name: '党支部',
        component: dangzhibu
      }
      ,{
	path: '/wenjuanhuida',
        name: '问卷回答',
        component: wenjuanhuida
      }
    ]
  },
  {
    path: '/adminexam',
    name: 'adminexam',
    component: adminexam,
    meta: {icon:'', title:'adminexam'}
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '系统首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;

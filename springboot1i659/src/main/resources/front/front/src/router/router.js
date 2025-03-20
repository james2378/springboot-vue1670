import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import ExamPaper from '../pages/exam/examPaper'
import Exam from '../pages/exam/exam'
import ExamList from '../pages/exam/examList'
import ExamRecord from '../pages/exam/examRecord'
import Storeup from '../pages/storeup/list'
import dangyuanList from '../pages/dangyuan/list'
import dangyuanDetail from '../pages/dangyuan/detail'
import dangyuanAdd from '../pages/dangyuan/add'
import dangzhibuList from '../pages/dangzhibu/list'
import dangzhibuDetail from '../pages/dangzhibu/detail'
import dangzhibuAdd from '../pages/dangzhibu/add'
import dangjianyaowenList from '../pages/dangjianyaowen/list'
import dangjianyaowenDetail from '../pages/dangjianyaowen/detail'
import dangjianyaowenAdd from '../pages/dangjianyaowen/add'
import dangjiandituList from '../pages/dangjianditu/list'
import dangjiandituDetail from '../pages/dangjianditu/detail'
import dangjiandituAdd from '../pages/dangjianditu/add'
import dangjianxuexiList from '../pages/dangjianxuexi/list'
import dangjianxuexiDetail from '../pages/dangjianxuexi/detail'
import dangjianxuexiAdd from '../pages/dangjianxuexi/add'
import xuexixindeList from '../pages/xuexixinde/list'
import xuexixindeDetail from '../pages/xuexixinde/detail'
import xuexixindeAdd from '../pages/xuexixinde/add'
import dangfeijiaonaList from '../pages/dangfeijiaona/list'
import dangfeijiaonaDetail from '../pages/dangfeijiaona/detail'
import dangfeijiaonaAdd from '../pages/dangfeijiaona/add'
import dangjianhuodongList from '../pages/dangjianhuodong/list'
import dangjianhuodongDetail from '../pages/dangjianhuodong/detail'
import dangjianhuodongAdd from '../pages/dangjianhuodong/add'
import huodongbaomingList from '../pages/huodongbaoming/list'
import huodongbaomingDetail from '../pages/huodongbaoming/detail'
import huodongbaomingAdd from '../pages/huodongbaoming/add'
import wenjuandiaochaList from '../pages/wenjuandiaocha/list'
import wenjuandiaochaDetail from '../pages/wenjuandiaocha/detail'
import wenjuandiaochaAdd from '../pages/wenjuandiaocha/add'
import wenjuanhuidaList from '../pages/wenjuanhuida/list'
import wenjuanhuidaDetail from '../pages/wenjuanhuida/detail'
import wenjuanhuidaAdd from '../pages/wenjuanhuida/add'
import minzhutoupiaoList from '../pages/minzhutoupiao/list'
import minzhutoupiaoDetail from '../pages/minzhutoupiao/detail'
import minzhutoupiaoAdd from '../pages/minzhutoupiao/add'
import toupiaoxinxiList from '../pages/toupiaoxinxi/list'
import toupiaoxinxiDetail from '../pages/toupiaoxinxi/detail'
import toupiaoxinxiAdd from '../pages/toupiaoxinxi/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'examPaper',
					component: ExamPaper
				},
				{
					path: 'examList',
					component:ExamList
				},
				{
					path: 'examRecord/:type',
					component:ExamRecord
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'dangyuan',
					component: dangyuanList
				},
				{
					path: 'dangyuanDetail',
					component: dangyuanDetail
				},
				{
					path: 'dangyuanAdd',
					component: dangyuanAdd
				},
				{
					path: 'dangzhibu',
					component: dangzhibuList
				},
				{
					path: 'dangzhibuDetail',
					component: dangzhibuDetail
				},
				{
					path: 'dangzhibuAdd',
					component: dangzhibuAdd
				},
				{
					path: 'dangjianyaowen',
					component: dangjianyaowenList
				},
				{
					path: 'dangjianyaowenDetail',
					component: dangjianyaowenDetail
				},
				{
					path: 'dangjianyaowenAdd',
					component: dangjianyaowenAdd
				},
				{
					path: 'dangjianditu',
					component: dangjiandituList
				},
				{
					path: 'dangjiandituDetail',
					component: dangjiandituDetail
				},
				{
					path: 'dangjiandituAdd',
					component: dangjiandituAdd
				},
				{
					path: 'dangjianxuexi',
					component: dangjianxuexiList
				},
				{
					path: 'dangjianxuexiDetail',
					component: dangjianxuexiDetail
				},
				{
					path: 'dangjianxuexiAdd',
					component: dangjianxuexiAdd
				},
				{
					path: 'xuexixinde',
					component: xuexixindeList
				},
				{
					path: 'xuexixindeDetail',
					component: xuexixindeDetail
				},
				{
					path: 'xuexixindeAdd',
					component: xuexixindeAdd
				},
				{
					path: 'dangfeijiaona',
					component: dangfeijiaonaList
				},
				{
					path: 'dangfeijiaonaDetail',
					component: dangfeijiaonaDetail
				},
				{
					path: 'dangfeijiaonaAdd',
					component: dangfeijiaonaAdd
				},
				{
					path: 'dangjianhuodong',
					component: dangjianhuodongList
				},
				{
					path: 'dangjianhuodongDetail',
					component: dangjianhuodongDetail
				},
				{
					path: 'dangjianhuodongAdd',
					component: dangjianhuodongAdd
				},
				{
					path: 'huodongbaoming',
					component: huodongbaomingList
				},
				{
					path: 'huodongbaomingDetail',
					component: huodongbaomingDetail
				},
				{
					path: 'huodongbaomingAdd',
					component: huodongbaomingAdd
				},
				{
					path: 'wenjuandiaocha',
					component: wenjuandiaochaList
				},
				{
					path: 'wenjuandiaochaDetail',
					component: wenjuandiaochaDetail
				},
				{
					path: 'wenjuandiaochaAdd',
					component: wenjuandiaochaAdd
				},
				{
					path: 'wenjuanhuida',
					component: wenjuanhuidaList
				},
				{
					path: 'wenjuanhuidaDetail',
					component: wenjuanhuidaDetail
				},
				{
					path: 'wenjuanhuidaAdd',
					component: wenjuanhuidaAdd
				},
				{
					path: 'minzhutoupiao',
					component: minzhutoupiaoList
				},
				{
					path: 'minzhutoupiaoDetail',
					component: minzhutoupiaoDetail
				},
				{
					path: 'minzhutoupiaoAdd',
					component: minzhutoupiaoAdd
				},
				{
					path: 'toupiaoxinxi',
					component: toupiaoxinxiList
				},
				{
					path: 'toupiaoxinxiDetail',
					component: toupiaoxinxiDetail
				},
				{
					path: 'toupiaoxinxiAdd',
					component: toupiaoxinxiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
		{
			path: '/exam',
			component: Exam
		}
	]
})

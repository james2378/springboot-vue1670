<template>
	<div class="main-containers">
		<div class="top-container" :style='{"boxShadow":"0 0px 0px rgba(64, 158, 255, .3)","padding":"0px","margin":"0 auto","overflow":"hidden","alignItems":"center","background":"#fff","display":"flex","width":"100%","position":"relative","justifyContent":"space-around","height":"75px","zIndex":"1002"}'>
			<img v-if='false' :style='{"width":"44px","objectFit":"cover","borderRadius":"100%","display":"block","height":"44px"}' src='http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg'>
			<div v-if="true" :style='{"margin":"0 0 12px","color":"#0660ac","textAlign":"center","background":"none","display":"inline-block","fontSize":"24px","fontWeight":"bold"}'>智慧党建系统设计与实现</div>
			<div>
				<div v-if="true" :style='{"color":"#666","fontSize":"14px","display":"inline-block"}'></div>
				<div v-if="Token" :style='{"color":"#666","fontSize":"14px","display":"inline-block"}'>{{username}}</div>
				<el-button v-if="!Token" @click="toLogin()" :style='{"border":"1px solid #1170d2","padding":"0 30px","boxShadow":"1px 2px 4px #ccc","margin":"10px 0 12px","color":"#fff","borderRadius":"2px","background":"radial-gradient(circle, rgba(17,112,210,1) 0%, rgba(8,179,68,1) 100%)","display":"inline-block","fontSize":"14px","lineHeight":"36px","height":"36px"}'>登录/注册</el-button>
                <el-button v-if="Token" @click="logout" :style='{"border":"1px solid #1170d2","padding":"0 30px","boxShadow":"1px 2px 4px #bbb","margin":"10px 0 0 10px","color":"#1170d2","borderRadius":"2px","background":"#fff","display":"inline-block","fontSize":"14px","lineHeight":"36px","height":"36px"}'>退出</el-button>
			</div>
		</div>
		
		
		<div class="body-containers" :style='"horizontal" == "vertical" ? {"minHeight":"100vh","padding":"64px 0 0","margin":"0 0 0 210px","position":"relative","background":"rgba(64, 158, 255, .3)","display":"block"} : {"minHeight":"100vh","padding":"0","margin":"0","position":"relative","background":"url(http://codegen.caihongy.cn/20221119/59536cea60624059af14b8031ae0ce53.png) no-repeat center bottom,url(http://codegen.caihongy.cn/20221118/d7c5d6775d3f402fb36e0f9bd462ea34.jpg) no-repeat center top fixed,#fff"}'>
			<div class="menu-preview" :style='{"width":"100%","borderColor":"#efefef","borderStyle":"solid","background":"linear-gradient(to right,#1170d2, #08b344),#1170d2","borderWidth":"0","height":"auto"}'>
				<el-menu class="el-menu-horizontal-demo" :style='{"listStyle":"none","margin":"0 auto","borderColor":"#ffa100","flexWrap":"wrap","textAlign":"center","background":"none","borderWidth":"0","display":"flex","width":"100%","position":"relative","borderStyle":"solid","justifyContent":"center"}' :default-active="activeIndex" :unique-opened="true" mode="horizontal" :router="true" @select="handleSelect">
					<el-image v-if="false" :style='{"width":"44px","margin":"8px 10px 8px 0","objectFit":"cover","borderRadius":"100%","float":"left","height":"44px"}' src="http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg" fit="cover"></el-image>
					<el-menu-item v-for="(menu, index) in menuList" :index="index + ''" :key="index" :route="menu.url">
						<i v-if="true" :style='{"padding":"0 10px","margin":"0","color":"inherit","width":"14px","lineHeight":"56px","fontSize":"14px","height":"56px"}' :class="iconArr[index]"></i>
						<span :style='{"padding":"0 10px","lineHeight":"56px","fontSize":"14px","color":"inherit","height":"56px"}'>{{menu.name}}</span>
					</el-menu-item>
					<el-menu-item @click="goBackend">
						<i v-if="true" :style='{"padding":"0 10px","margin":"0","color":"inherit","width":"14px","lineHeight":"56px","fontSize":"14px","height":"56px"}' class="el-icon-box"></i>
						<span :style='{"padding":"0 10px","lineHeight":"56px","fontSize":"14px","color":"inherit","height":"56px"}'>后台管理</span>
					</el-menu-item>
					<el-menu-item :index="menuList.length + 2 + ''" v-if="Token && notAdmin" @click="goMenu('/index/center')">
						<i v-if="true" :style='{"padding":"0 10px","margin":"0","color":"inherit","width":"14px","lineHeight":"56px","fontSize":"14px","height":"56px"}' class="el-icon-user"></i>
						<span :style='{"padding":"0 10px","lineHeight":"56px","fontSize":"14px","color":"inherit","height":"56px"}'>个人中心</span>
					</el-menu-item>
				</el-menu>
			</div>
			
			<div class="banner-preview" :style='{"width":"100%","margin":"0","height":"auto"}'>
				<el-carousel :style='{"width":"100%","margin":"0 auto"}' trigger="click" indicator-position="inside" arrow="always" type="default" direction="horizontal" height="500px" :autoplay="true" :interval="3000" :loop="true">
					<el-carousel-item :style='{"borderRadius":"0","width":"100%","height":"100%"}' v-for="item in carouselList" :key="item.id">
						<el-image :style='{"objectFit":"cover","width":"100%","height":"100%"}' :src="baseUrl + item.value" fit="cover"></el-image>
					</el-carousel-item>
				</el-carousel>
			</div>
			
			<router-view></router-view>
			
			<div class="bottom-preview" :style='{"minHeight":"150px","padding":"20px 0","margin":"20px 0 0","alignItems":"center","color":"#fff","background":"#333","flexDirection":"column","display":"flex","width":"100%","justifyContent":"center"}'>
			    <img :style='{"width":"44px","objectFit":"cover","borderRadius":"100%","display":"none","height":"44px"}' src="http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg" >
			    <div :style='{"margin":"0","fontSize":"14px","lineHeight":"28px","color":"#fff"}'></div>
			    <div :style='{"margin":"10px 0 0","fontSize":"14px","lineHeight":"28px","color":"#fff"}'></div>
			    <div :style='{"margin":"10px 0 0","fontSize":"14px","lineHeight":"28px","color":"#fff"}'></div>
			</div>
		</div>
		
	</div>
</template>

<script>
import Vue from 'vue'
export default {
    data() {
		return {
            activeIndex: '0',
			roleMenus: [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["新增","查看","修改","删除","年龄分析","学历统计"],"menu":"党员","menuJump":"列表","tableName":"dangyuan"}],"menu":"党员管理"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["新增","查看","修改","删除"],"menu":"党支部","menuJump":"列表","tableName":"dangzhibu"}],"menu":"党支部管理"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["新增","查看","修改","删除","查看评论"],"menu":"党建要闻","menuJump":"列表","tableName":"dangjianyaowen"}],"menu":"党建要闻管理"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["新增","查看","修改","删除","查看评论"],"menu":"党建地图","menuJump":"列表","tableName":"dangjianditu"}],"menu":"党建地图管理"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["新增","查看","修改","删除","查看评论"],"menu":"党建学习","menuJump":"列表","tableName":"dangjianxuexi"}],"menu":"党建学习管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","修改","删除"],"menu":"学习心得","menuJump":"列表","tableName":"xuexixinde"}],"menu":"学习心得管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","修改","删除"],"menu":"党费缴纳","menuJump":"列表","tableName":"dangfeijiaona"}],"menu":"党费缴纳管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["查看","修改","删除"],"menu":"党建活动","menuJump":"列表","tableName":"dangjianhuodong"}],"menu":"党建活动管理"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看","修改","删除"],"menu":"活动报名","menuJump":"列表","tableName":"huodongbaoming"}],"menu":"活动报名管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["新增","查看","修改","删除"],"menu":"问卷调查","menuJump":"列表","tableName":"wenjuandiaocha"}],"menu":"问卷调查管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","修改","删除","问卷回答统计"],"menu":"问卷回答","menuJump":"列表","tableName":"wenjuanhuida"}],"menu":"问卷回答管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["新增","查看","修改","删除"],"menu":"民主投票","menuJump":"列表","tableName":"minzhutoupiao"}],"menu":"民主投票管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看","修改","删除"],"menu":"投票信息","menuJump":"列表","tableName":"toupiaoxinxi"}],"menu":"投票信息管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["新增","查看","修改","删除"],"menu":"试题管理","tableName":"examquestion"}],"menu":"试题管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["新增","查看","修改","删除"],"menu":"学习测试管理","tableName":"exampaper"}],"menu":"学习测试管理"},{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"},{"child":[{"appFrontIcon":"cuIcon-baby","buttons":["新增","查看","修改","删除"],"menu":"学习测试列表","tableName":"exampaperlist"},{"appFrontIcon":"cuIcon-skin","buttons":["查看","修改","删除"],"menu":"考试记录","tableName":"examrecord"},{"appFrontIcon":"cuIcon-explore","buttons":["查看","修改","删除"],"menu":"错题本","tableName":"examfailrecord"}],"menu":"考试管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看"],"menu":"党建要闻列表","menuJump":"列表","tableName":"dangjianyaowen"}],"menu":"党建要闻模块"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["查看"],"menu":"党建地图列表","menuJump":"列表","tableName":"dangjianditu"}],"menu":"党建地图模块"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["查看","学习"],"menu":"党建学习列表","menuJump":"列表","tableName":"dangjianxuexi"}],"menu":"党建学习模块"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看","报名"],"menu":"党建活动列表","menuJump":"列表","tableName":"dangjianhuodong"}],"menu":"党建活动模块"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","问卷回答"],"menu":"问卷调查列表","menuJump":"列表","tableName":"wenjuandiaocha"}],"menu":"问卷调查模块"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看","投票"],"menu":"民主投票列表","menuJump":"列表","tableName":"minzhutoupiao"}],"menu":"民主投票模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看"],"menu":"学习心得","menuJump":"列表","tableName":"xuexixinde"}],"menu":"学习心得管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","支付"],"menu":"党费缴纳","menuJump":"列表","tableName":"dangfeijiaona"}],"menu":"党费缴纳管理"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看"],"menu":"活动报名","menuJump":"列表","tableName":"huodongbaoming"}],"menu":"活动报名管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看"],"menu":"问卷回答","menuJump":"列表","tableName":"wenjuanhuida"}],"menu":"问卷回答管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看"],"menu":"投票信息","menuJump":"列表","tableName":"toupiaoxinxi"}],"menu":"投票信息管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看"],"menu":"党建要闻列表","menuJump":"列表","tableName":"dangjianyaowen"}],"menu":"党建要闻模块"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["查看"],"menu":"党建地图列表","menuJump":"列表","tableName":"dangjianditu"}],"menu":"党建地图模块"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["查看","学习"],"menu":"党建学习列表","menuJump":"列表","tableName":"dangjianxuexi"}],"menu":"党建学习模块"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看","报名"],"menu":"党建活动列表","menuJump":"列表","tableName":"dangjianhuodong"}],"menu":"党建活动模块"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","问卷回答"],"menu":"问卷调查列表","menuJump":"列表","tableName":"wenjuandiaocha"}],"menu":"问卷调查模块"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看","投票"],"menu":"民主投票列表","menuJump":"列表","tableName":"minzhutoupiao"}],"menu":"民主投票模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"否","roleName":"党员","tableName":"dangyuan"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["新增","查看","修改","删除","党费缴纳"],"menu":"党员","menuJump":"列表","tableName":"dangyuan"}],"menu":"党员管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看"],"menu":"党费缴纳","menuJump":"列表","tableName":"dangfeijiaona"}],"menu":"党费缴纳管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["新增","查看","修改","删除"],"menu":"党建活动","menuJump":"列表","tableName":"dangjianhuodong"}],"menu":"党建活动管理"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看","审核"],"menu":"活动报名","menuJump":"列表","tableName":"huodongbaoming"}],"menu":"活动报名管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看"],"menu":"党建要闻列表","menuJump":"列表","tableName":"dangjianyaowen"}],"menu":"党建要闻模块"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["查看"],"menu":"党建地图列表","menuJump":"列表","tableName":"dangjianditu"}],"menu":"党建地图模块"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["查看","学习"],"menu":"党建学习列表","menuJump":"列表","tableName":"dangjianxuexi"}],"menu":"党建学习模块"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看","报名"],"menu":"党建活动列表","menuJump":"列表","tableName":"dangjianhuodong"}],"menu":"党建活动模块"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","问卷回答"],"menu":"问卷调查列表","menuJump":"列表","tableName":"wenjuandiaocha"}],"menu":"问卷调查模块"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看","投票"],"menu":"民主投票列表","menuJump":"列表","tableName":"minzhutoupiao"}],"menu":"民主投票模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"党支部","tableName":"dangzhibu"}],
			baseUrl: '',
			carouselList: [],
			menuList: [],
			form: {
				ask: '',
				userid: localStorage.getItem('userid')
			},
			Token: localStorage.getItem('Token'),
            username: localStorage.getItem('username'),
            notAdmin: localStorage.getItem('sessionTable')!='"users"',
			timer: '',
			iconArr: [
				'el-icon-star-off',
				'el-icon-goods',
				'el-icon-warning',
				'el-icon-question',
				'el-icon-info',
				'el-icon-help',
				'el-icon-picture-outline-round',
				'el-icon-camera-solid',
				'el-icon-video-camera-solid',
				'el-icon-video-camera',
				'el-icon-bell',
				'el-icon-s-cooperation',
				'el-icon-s-order',
				'el-icon-s-platform',
				'el-icon-s-operation',
				'el-icon-s-promotion',
				'el-icon-s-release',
				'el-icon-s-ticket',
				'el-icon-s-management',
				'el-icon-s-open',
				'el-icon-s-shop',
				'el-icon-s-marketing',
				'el-icon-s-flag',
				'el-icon-s-comment',
				'el-icon-s-finance',
				'el-icon-s-claim',
				'el-icon-s-opportunity',
				'el-icon-s-data',
				'el-icon-s-check'
			],	
		}
    },
    created() {
		this.baseUrl = this.$config.baseUrl;
		this.menuList = this.$config.indexNav;
		this.getCarousel();
    },
    mounted() {
        this.activeIndex = localStorage.getItem('keyPath') || '0';
    },
    watch: {
        $route(newValue) {
            let that = this
            let url = window.location.href
            let arr = url.split('#')
            for (let x in this.menuList) {
                if (newValue.path == this.menuList[x].url) {
                    this.activeIndex = x
                }
            }
            this.Token = localStorage.getItem('Token')
        },
    },
    methods: {
        handleSelect(keyPath) {
            if (keyPath) {
                localStorage.setItem('keyPath', keyPath)
            }
        },
		toLogin() {
		  this.$router.push('/login');
		},
        logout() {
            localStorage.clear();
            Vue.http.headers.common['Token'] = "";
            this.$router.push('/index/home');
            this.activeIndex = '0'
            localStorage.setItem('keyPath', this.activeIndex)
            this.Token = ''
            this.$forceUpdate()
            this.$message({
                message: '登出成功',
                type: 'success',
                duration: 1000,
            });
        },
		getCarousel() {
			this.$http.get('config/list', {params: { page: 1, limit: 3 }}).then(res => {
				if (res.data.code == 0) {
					this.carouselList = res.data.data.list;
				}
			});
		},
		goBackend() {
			window.open(`${this.$config.baseUrl}admin/dist/index.html`, "_blank");
		},
		goMenu(path) {
            if (!localStorage.getItem('Token')) {
                this.toLogin();
            } else {
                this.$router.push(path);
            }
		},
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.menu-preview {
	  .el-scrollbar {
	    height: 100%;
	
	    & /deep/ .scrollbar-wrapper {
	      overflow-x: hidden;
	    }
	  }
	}
	
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item {
		cursor: pointer;
		padding: 0;
		margin: 0;
		color: #fff;
		white-space: nowrap;
		display: flex;
		font-size: 16px;
		border-color: #ffc800 #ffc800 #ffc800 #ffc800;
		line-height: 56px;
		border-radius: 0;
		background: none;
		width: 120px;
		justify-content: center;
		border-width: 0px;
		position: relative;
		border-style: solid;
		list-style: none;
		text-align: center;
		height: 56px;
	}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item:hover {
		cursor: pointer;
		padding: 0;
		margin: 0;
		color: #fff;
		white-space: nowrap;
		font-size: 14px;
		border-color: #ffa100 #ffa100 #ffa100 #ffa100;
		line-height: 56px;
		border-radius: 0;
		background: #0b4887;
		width: 120px;
		border-width: 0px;
		position: relative;
		border-style: solid;
		list-style: none;
		height: 56px;
	}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.is-active {
		cursor: pointer;
		padding: 0;
		margin: 0;
		color: #fff;
		white-space: nowrap;
		font-size: 14px;
		border-color: #ffa100 #ffa100 #ffa100 #ffa100;
		line-height: 56px;
		border-radius: 0;
		background: #0b4887;
		width: 120px;
		border-width: 0px;
		position: relative;
		border-style: solid;
		list-style: none;
		height: 56px;
	}
	
	.banner-preview {
	  .el-carousel /deep/ .el-carousel__indicator button {
	    width: 0;
	    height: 0;
	    display: none;
	  }
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left:hover {
		background: #2087c3;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right:hover {
		background: #2087c3;
	}

	.banner-preview .el-carousel /deep/ .el-carousel__indicators {
		padding: 0;
		margin: 0 0 12px 0;
		z-index: 2;
		position: absolute;
		list-style: none;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__indicators li {
		border-radius: 50%;
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 12px;
		opacity: 0.4;
		transition: 0.3s;
		height: 12px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__indicators li:hover {
		border-radius: 50%;
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 12px;
		opacity: 0.7;
		height: 12px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__indicators li.is-active {
		border-radius: 50%;
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 12px;
		opacity: 1;
		height: 12px;
	}

    .chat-content {
      .left-content {
          width: 100%;
          text-align: left;
      }
      .right-content {
          width: 100%;
          text-align: right;
      }
    }
</style>

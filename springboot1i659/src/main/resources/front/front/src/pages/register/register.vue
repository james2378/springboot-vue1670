<template>
	<div>

	<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20221119/e47b609472f14bba85fbe4ea38b2ec99.jpg) no-repeat","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
		<el-form class='rgs-form' v-if="pageFlag=='register'" :style='{"padding":"30px 40px 40px 40px","boxShadow":"0px 0px 0px #ccc,inset 0px 0px 0px 0px #e0f8e8","margin":"20px 0 0 40%","borderColor":"#1170d2 #08b344 #08b344 #1170d2","borderRadius":"10% 10%","background":"rgba(255,255,255,.8)","borderWidth":"4px","width":"auto","minWidth":"800px","borderStyle":"solid double solid double","height":"auto"}' ref="registerForm" :model="registerForm" :rules="rules">
			<div v-if="true" :style='{"width":"100%","margin":"0 0 4px 0","fontSize":"20px","color":"#08b344","textAlign":"center","fontWeight":"bold"}'>USER / REGISTER</div>
			<div v-if="true" :style='{"width":"100%","margin":"0 0 20px 0","fontSize":"20px","color":"#08b344","textAlign":"center","fontWeight":"bold"}'>智慧党建系统设计与实现注册</p></div>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0px auto 24px","height":"auto"}' v-if="tableName=='dangyuan'" prop="dangyuanzhanghao">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>党员账号：</div>
				<el-input v-model="registerForm.dangyuanzhanghao"  placeholder="请输入党员账号" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0px auto 24px","height":"auto"}' v-if="tableName=='dangyuan'" prop="mima">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0px auto 24px","height":"auto"}' v-if="tableName=='dangyuan'" prop="mima">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0px auto 24px","height":"auto"}' v-if="tableName=='dangyuan'" prop="dangyuanxingming">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>党员姓名：</div>
				<el-input v-model="registerForm.dangyuanxingming"  placeholder="请输入党员姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0px auto 24px","height":"auto"}' v-if="tableName=='dangyuan'" prop="touxiang">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="dangyuantouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0px auto 24px","height":"auto"}' v-if="tableName=='dangyuan'" prop="lianxifangshi">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>联系方式：</div>
				<el-input v-model="registerForm.lianxifangshi"  placeholder="请输入联系方式" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0px auto 24px","height":"auto"}' v-if="tableName=='dangyuan'" prop="nianling">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>年龄：</div>
				<el-input v-model="registerForm.nianling"  placeholder="请输入年龄" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0px auto 24px","height":"auto"}' v-if="tableName=='dangyuan'" prop="xingbie">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in dangyuanxingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0px auto 24px","height":"auto"}' v-if="tableName=='dangyuan'" prop="xueli">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>学历：</div>
				<el-input v-model="registerForm.xueli"  placeholder="请输入学历" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0px auto 24px","height":"auto"}' v-if="tableName=='dangyuan'" prop="shenfenzhenghao">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>身份证号：</div>
				<el-input v-model="registerForm.shenfenzhenghao"  placeholder="请输入身份证号" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0px auto 24px","height":"auto"}' v-if="tableName=='dangyuan'" prop="rudangshijian">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>入党时间：</div>
                <el-date-picker
                    format="yyyy 年 MM 月 dd 日"
                    value-format="yyyy-MM-dd"
                    v-model="registerForm.rudangshijian"
                    type="date"
                    placeholder="入党时间"
                ></el-date-picker>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0px auto 24px","height":"auto"}' v-if="tableName=='dangyuan'" prop="zhibuzhanghao">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>支部账号：</div>
				<el-input v-model="registerForm.zhibuzhanghao"  placeholder="请输入支部账号" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0px auto 24px","height":"auto"}' v-if="tableName=='dangyuan'" prop="zhibumingcheng">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>支部名称：</div>
				<el-input v-model="registerForm.zhibumingcheng"  placeholder="请输入支部名称" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0px auto 24px","height":"auto"}' v-if="tableName=='dangzhibu'" prop="zhibuzhanghao">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>支部账号：</div>
				<el-input v-model="registerForm.zhibuzhanghao"  placeholder="请输入支部账号" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0px auto 24px","height":"auto"}' v-if="tableName=='dangzhibu'" prop="mima">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0px auto 24px","height":"auto"}' v-if="tableName=='dangzhibu'" prop="mima">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0px auto 24px","height":"auto"}' v-if="tableName=='dangzhibu'" prop="zhibumingcheng">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>支部名称：</div>
				<el-input v-model="registerForm.zhibumingcheng"  placeholder="请输入支部名称" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0px auto 24px","height":"auto"}' v-if="tableName=='dangzhibu'" prop="fuzeren">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>负责人：</div>
				<el-input v-model="registerForm.fuzeren"  placeholder="请输入负责人" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0px auto 24px","height":"auto"}' v-if="tableName=='dangzhibu'" prop="lianxidianhua">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>联系电话：</div>
				<el-input v-model="registerForm.lianxidianhua"  placeholder="请输入联系电话" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0px auto 24px","height":"auto"}' v-if="tableName=='dangzhibu'" prop="zhibudizhi">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>支部地址：</div>
				<el-input v-model="registerForm.zhibudizhi"  placeholder="请输入支部地址" />
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0px","boxShadow":"1px 2px 3px #aaa","margin":"12px 16px 5px 236px","color":"#fff","display":"inline-block","outline":"none","borderRadius":"4px","background":"linear-gradient(180deg, rgba(17,112,210,1) 0%, rgba(8,179,68,1) 100%)","width":"128px","fontSize":"16px","height":"40px"}' type="primary" @click="submitForm('registerForm')">注册</el-button>
			<el-button :style='{"border":"1px solid #bbb","cursor":"pointer","padding":"0px","boxShadow":"1px 2px 3px #ccc","margin":"12px auto 5px","color":"#999","display":"inline-block","outline":"none","borderRadius":"4px","background":"#fff","width":"128px","fontSize":"16px","height":"40px"}' @click="resetForm('registerForm')">重置</el-button>
			<router-link :style='{"cursor":"pointer","padding":"0 10%","color":"#08b344","display":"inline-block","width":"100%","lineHeight":"1","fontSize":"12px","textDecoration":"none"}' to="/login">已有账户登录</router-link>
		</el-form>
    </div>
  </div>
</div>
</template>

<script>

export default {
    //数据集合
    data() {
		return {
            pageFlag : '',
			tableName: '',
			registerForm: {
                xingbie: '',
            },
			rules: {},
            dangyuanxingbieOptions: [],
		}
    },
	mounted() {
	},
    created() {
      this.pageFlag = this.$route.query.pageFlag;
      this.tableName = this.$route.query.role;
      if ('dangyuan' == this.tableName) {
        this.rules.dangyuanzhanghao = [{ required: true, message: '请输入党员账号', trigger: 'blur' }];
      }
      if ('dangyuan' == this.tableName) {
        this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
      }
      if ('dangyuan' == this.tableName) {
        this.rules.lianxifangshi = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
      }
      if ('dangyuan' == this.tableName) {
        this.rules.nianling = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
      }
        this.dangyuanxingbieOptions = "男,女".split(',');
      if ('dangyuan' == this.tableName) {
        this.rules.shenfenzhenghao = [{ required: true, validator: this.$validate.isIdCard, trigger: 'blur' }];
      }
      if ('dangzhibu' == this.tableName) {
        this.rules.zhibuzhanghao = [{ required: true, message: '请输入支部账号', trigger: 'blur' }];
      }
      if ('dangzhibu' == this.tableName) {
        this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
      }
      if ('dangzhibu' == this.tableName) {
        this.rules.zhibumingcheng = [{ required: true, message: '请输入支部名称', trigger: 'blur' }];
      }
      if ('dangzhibu' == this.tableName) {
        this.rules.lianxidianhua = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
      }
    },
    //方法集合
    methods: {
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
        // 下二随
      dangyuantouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },

        // 多级联动参数


      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url=this.tableName+"/register";
              if(`dangyuan` == this.tableName && this.registerForm.dangyuanzhanghao.length<3){
                this.$message.error('党员账号长度不能小于3');
                return
              }
              if(`dangyuan` == this.tableName && this.registerForm.dangyuanzhanghao.length>10){
                this.$message.error('党员账号长度不能大于10');
                return
              }
               if(`dangyuan` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
              if(`dangyuan` == this.tableName && this.registerForm.mima.length<3){
                this.$message.error('密码长度不能小于3');
                return
              }
              if(`dangyuan` == this.tableName && this.registerForm.mima.length>10){
                this.$message.error('密码长度不能大于10');
                return
              }
               if(`dangzhibu` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
            this.$http.post(url, this.registerForm).then(res => {
              if (res.data.code === 0) {
                this.$message({
                  message: '注册成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.$router.push('/login');
                  }
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20221119/e47b609472f14bba85fbe4ea38b2ec99.jpg) no-repeat;

		.el-date-editor.el-input {
			width: 100%;
		}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border: 0px solid #eacb96;
						border-radius: 0px;
						padding: 0 10px;
						box-shadow: 0px 2px 0px #08b344;
						outline: none;
						color: #999;
						background: #fff;
						width: 100%;
						font-size: 14px;
						height: 40px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border: 0px solid #eacb96;
						border-radius: 0px;
						padding: 0 10px;
						box-shadow: 0px 2px 0px #08b344;
						outline: none;
						color: #999;
						background: #fff;
						width: 288px;
						font-size: 14px;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 0px solid #eacb96;
						border-radius: 0px;
						padding: 0 10px 0 30px;
						box-shadow: 0px 2px 0px #08b344;
						outline: none;
						color: #999;
						background: #fff;
						width: 288px;
						font-size: 14px;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 0px solid #eacb96;
						border-radius: 0px;
						padding: 0 10px 0 30px;
						box-shadow: 0px 2px 0px #08b344;
						outline: none;
						color: #999;
						background: #fff;
						width: 288px;
						font-size: 14px;
						height: 40px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  border: 1px dashed #08b344;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #08b344;
		  		  background: #Fff;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 120px;
		  		  text-align: center;
		  		  height: 120px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 1px dashed #08b344;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #08b344;
		  		  background: #Fff;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 120px;
		  		  text-align: center;
		  		  height: 120px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 1px dashed #08b344;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #08b344;
		  		  background: #Fff;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 120px;
		  		  text-align: center;
		  		  height: 120px;
		  		}
	}
</style>

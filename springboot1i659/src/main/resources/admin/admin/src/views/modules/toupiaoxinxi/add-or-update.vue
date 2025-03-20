<template>
	<div class="addEdit-block" style="width: 100%;">
		<el-form
			:style='{"borderRadius":"6px","width":"93%","padding":"30px"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="140px"
		>
			<template >
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="党员账号" prop="dangyuanzhanghao">
					<el-input v-model="ruleForm.dangyuanzhanghao" placeholder="党员账号" clearable  :readonly="ro.dangyuanzhanghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="党员账号" prop="dangyuanzhanghao">
					<el-input v-model="ruleForm.dangyuanzhanghao" placeholder="党员账号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="党员姓名" prop="dangyuanxingming">
					<el-input v-model="ruleForm.dangyuanxingming" placeholder="党员姓名" clearable  :readonly="ro.dangyuanxingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="党员姓名" prop="dangyuanxingming">
					<el-input v-model="ruleForm.dangyuanxingming" placeholder="党员姓名" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="投票主题" prop="toupiaozhuti">
					<el-input v-model="ruleForm.toupiaozhuti" placeholder="投票主题" clearable  :readonly="ro.toupiaozhuti"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="投票主题" prop="toupiaozhuti">
					<el-input v-model="ruleForm.toupiaozhuti" placeholder="投票主题" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' class="select" v-if="type!='info'"  label="选项a" prop="xuanxianga">
					<el-select :disabled="ro.xuanxianga" v-model="ruleForm.xuanxianga" placeholder="请选择选项a" >
						<el-option
							v-for="(item,index) in xuanxiangaOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="选项a" prop="xuanxianga">
					<el-input v-model="ruleForm.xuanxianga"
						placeholder="选项a" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' class="select" v-if="type!='info'"  label="选项b" prop="xuanxiangb">
					<el-select :disabled="ro.xuanxiangb" v-model="ruleForm.xuanxiangb" placeholder="请选择选项b" >
						<el-option
							v-for="(item,index) in xuanxiangbOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="选项b" prop="xuanxiangb">
					<el-input v-model="ruleForm.xuanxiangb"
						placeholder="选项b" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' class="select" v-if="type!='info'"  label="选项c" prop="xuanxiangc">
					<el-select :disabled="ro.xuanxiangc" v-model="ruleForm.xuanxiangc" placeholder="请选择选项c" >
						<el-option
							v-for="(item,index) in xuanxiangcOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="选项c" prop="xuanxiangc">
					<el-input v-model="ruleForm.xuanxiangc"
						placeholder="选项c" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' class="select" v-if="type!='info'"  label="选项d" prop="xuanxiangd">
					<el-select :disabled="ro.xuanxiangd" v-model="ruleForm.xuanxiangd" placeholder="请选择选项d" >
						<el-option
							v-for="(item,index) in xuanxiangdOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="选项d" prop="xuanxiangd">
					<el-input v-model="ruleForm.xuanxiangd"
						placeholder="选项d" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' class="date" v-if="type!='info'" label="投票时间" prop="toupiaoshijian">
					<el-date-picker
						value-format="yyyy-MM-dd HH:mm:ss"
						v-model="ruleForm.toupiaoshijian" 
						type="datetime"
						:readonly="ro.toupiaoshijian"
						placeholder="投票时间"
					></el-date-picker>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-else-if="ruleForm.toupiaoshijian" label="投票时间" prop="toupiaoshijian">
					<el-input v-model="ruleForm.toupiaoshijian" placeholder="投票时间" readonly></el-input>
				</el-form-item>
			</template>
			<el-form-item :style='{"padding":"0","margin":"0"}' class="btn">
				<el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"40px","background":"rgba(27, 167, 166, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
				<el-button :style='{"border":"1px solid rgba(27, 167, 166, 1)","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"rgba(27, 167, 166, 1)","borderRadius":"40px","background":"rgba(255, 255, 255, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
				<el-button :style='{"border":"1px solid rgba(27, 167, 166, 1)","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"rgba(27, 167, 166, 1)","borderRadius":"40px","background":"rgba(255, 255, 255, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				dangyuanzhanghao : false,
				dangyuanxingming : false,
				toupiaozhuti : false,
				xuanxianga : false,
				xuanxiangb : false,
				xuanxiangc : false,
				xuanxiangd : false,
				toupiaoshijian : false,
				crossuserid : false,
				crossrefid : false,
			},
			
			
			ruleForm: {
				dangyuanzhanghao: '',
				dangyuanxingming: '',
				toupiaozhuti: '',
				xuanxianga: '',
				xuanxiangb: '',
				xuanxiangc: '',
				xuanxiangd: '',
				toupiaoshijian: '',
				crossuserid: '',
				crossrefid: '',
			},
		
			xuanxiangaOptions: [],
			xuanxiangbOptions: [],
			xuanxiangcOptions: [],
			xuanxiangdOptions: [],
			
			rules: {
				dangyuanzhanghao: [
				],
				dangyuanxingming: [
				],
				toupiaozhuti: [
				],
				xuanxianga: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				xuanxiangb: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				xuanxiangc: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				xuanxiangd: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				toupiaoshijian: [
				],
				crossuserid: [
				],
				crossrefid: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {



	},
	created() {
		this.ruleForm.toupiaoshijian = this.getCurDateTime()
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='dangyuanzhanghao'){
							this.ruleForm.dangyuanzhanghao = obj[o];
							this.ro.dangyuanzhanghao = true;
							continue;
						}
						if(o=='dangyuanxingming'){
							this.ruleForm.dangyuanxingming = obj[o];
							this.ro.dangyuanxingming = true;
							continue;
						}
						if(o=='toupiaozhuti'){
							this.ruleForm.toupiaozhuti = obj[o];
							this.ro.toupiaozhuti = true;
							continue;
						}
						if(o=='xuanxianga'){
							this.ruleForm.xuanxianga = obj[o];
							this.ro.xuanxianga = true;
							continue;
						}
						if(o=='xuanxiangb'){
							this.ruleForm.xuanxiangb = obj[o];
							this.ro.xuanxiangb = true;
							continue;
						}
						if(o=='xuanxiangc'){
							this.ruleForm.xuanxiangc = obj[o];
							this.ro.xuanxiangc = true;
							continue;
						}
						if(o=='xuanxiangd'){
							this.ruleForm.xuanxiangd = obj[o];
							this.ro.xuanxiangd = true;
							continue;
						}
						if(o=='toupiaoshijian'){
							this.ruleForm.toupiaoshijian = obj[o];
							this.ro.toupiaoshijian = true;
							continue;
						}
						if(o=='crossuserid'){
							this.ruleForm.crossuserid = obj[o];
							this.ro.crossuserid = true;
							continue;
						}
						if(o=='crossrefid'){
							this.ruleForm.crossrefid = obj[o];
							this.ro.crossrefid = true;
							continue;
						}
				}
				



				this.ruleForm.xuanxianga = 0
				this.ro.xuanxianga = false;

				this.ruleForm.xuanxiangb = 0
				this.ro.xuanxiangb = false;

				this.ruleForm.xuanxiangc = 0
				this.ro.xuanxiangc = false;

				this.ruleForm.xuanxiangd = 0
				this.ro.xuanxiangd = false;




			}
			
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
					if(((json.dangyuanzhanghao!=''&&json.dangyuanzhanghao) || json.dangyuanzhanghao==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.dangyuanzhanghao = json.dangyuanzhanghao
						this.ro.dangyuanzhanghao = true;
					}
					if(((json.dangyuanxingming!=''&&json.dangyuanxingming) || json.dangyuanxingming==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.dangyuanxingming = json.dangyuanxingming
						this.ro.dangyuanxingming = true;
					}
				} else {
					this.$message.error(data.msg);
				}
			});
			
            this.xuanxiangaOptions = "1".split(',')
            this.xuanxiangbOptions = "1".split(',')
            this.xuanxiangcOptions = "1".split(',')
            this.xuanxiangdOptions = "1".split(',')
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `toupiaoxinxi/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {





















var objcross = this.$storage.getObj('crossObj');
      var table = this.$storage.getObj('crossTable');
      if(objcross!=null) {
	      objcross.xuanxianga = parseFloat(objcross.xuanxianga) + parseFloat(this.ruleForm.xuanxianga)
                }
      var table = this.$storage.getObj('crossTable');
      if(objcross!=null) {
	      objcross.xuanxiangb = parseFloat(objcross.xuanxiangb) + parseFloat(this.ruleForm.xuanxiangb)
                }
      var table = this.$storage.getObj('crossTable');
      if(objcross!=null) {
	      objcross.xuanxiangc = parseFloat(objcross.xuanxiangc) + parseFloat(this.ruleForm.xuanxiangc)
                }
      var table = this.$storage.getObj('crossTable');
      if(objcross!=null) {
	      objcross.xuanxiangd = parseFloat(objcross.xuanxiangd) + parseFloat(this.ruleForm.xuanxiangd)
                }

      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                              this.$http({
                                  url: `${table}/update`,
                                  method: "post",
                                  data: objcross
                                }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
       this.$refs["ruleForm"].validate(valid => {
         if (valid) {
		 if(crossrefid && crossuserid) {
			 this.ruleForm.crossuserid = crossuserid;
			 this.ruleForm.crossrefid = crossrefid;
			let params = { 
				page: 1, 
				limit: 10, 
				crossuserid:this.ruleForm.crossuserid,
				crossrefid:this.ruleForm.crossrefid,
			} 
			this.$http({ 
				url: "toupiaoxinxi/page", 
				method: "get", 
				params: params 
			}).then(({ 
				data 
			}) => { 
				if (data && data.code === 0) { 
				       if(data.data.total>=crossoptnum) {
					     this.$message.error(this.$storage.get('tips'));
					       return false;
				       } else {
					 this.$http({
					   url: `toupiaoxinxi/${!this.ruleForm.id ? "save" : "update"}`,
					   method: "post",
					   data: this.ruleForm
					 }).then(({ data }) => {
					   if (data && data.code === 0) {
					     this.$message({
					       message: "操作成功",
					       type: "success",
					       duration: 1500,
					       onClose: () => {
						 this.parent.showFlag = true;
						 this.parent.addOrUpdateFlag = false;
						 this.parent.toupiaoxinxiCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
                      this.$http({
                          url: `${table}/update`,
                          method: "post",
                          data: objcross
                        }).then(({ data }) => {});
					   } else {
					     this.$message.error(data.msg);
					   }
					 });

				       }
				} else { 
				} 
			});
		 } else {
			 this.$http({
			   url: `toupiaoxinxi/${!this.ruleForm.id ? "save" : "update"}`,
			   method: "post",
			   data: this.ruleForm
			 }).then(({ data }) => {
			   if (data && data.code === 0) {
                  this.$http({
                      url: `${table}/update`,
                      method: "post",
                      data: objcross
                    }).then(({ data }) => {});
			     this.$message({
			       message: "操作成功",
			       type: "success",
			       duration: 1500,
			       onClose: () => {
				 this.parent.showFlag = true;
				 this.parent.addOrUpdateFlag = false;
				 this.parent.toupiaoxinxiCrossAddOrUpdateFlag = false;
				 this.parent.search();
				 this.parent.contentStyleChange();
			       }
			     });
			   } else {
			     this.$message.error(data.msg);
			   }
			 });
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.toupiaoxinxiCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: #333;
	  	  width: 140px;
	  	  font-size: 14px;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 140px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 4px;
	  	  padding: 0 12px;
	  	  outline: none;
	  	  color: #333;
	  	  width: 300px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 4px;
	  	  padding: 0 10px;
	  	  outline: none;
	  	  color: #333;
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 4px;
	  	  padding: 0 10px 0 30px;
	  	  outline: none;
	  	  color: #333;
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  	  border: 2px dashed #797979;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #797979;
	  	  width: 150px;
	  	  font-size: 32px;
	  	  line-height: 150px;
	  	  text-align: center;
	  	  height: 150px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 2px dashed #797979;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #797979;
	  	  width: 150px;
	  	  font-size: 32px;
	  	  line-height: 150px;
	  	  text-align: center;
	  	  height: 150px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 2px dashed #797979;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #797979;
	  	  width: 150px;
	  	  font-size: 32px;
	  	  line-height: 150px;
	  	  text-align: center;
	  	  height: 150px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 4px;
	  	  padding: 12px;
	  	  outline: none;
	  	  color: #333;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 120px;
	  	}
</style>

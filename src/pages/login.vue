<template>
  <div class="login">
     <p class="login-title">
        <span class="login-title_left">Muke</span>
        <span class="login-title_right">Wang</span>
    </p>
    <div class="section">
      <input 
        class="section-input" 
        type="text" 
        v-model="form.account"
        placeholder="请输入您的账号">
    </div>
    <div class="section">
      <input 
        class="section-input" 
        type="text"
        v-model="form.password"
        placeholder="请输入您的密码">
    </div>
    <button class="btn" @click="login">登录</button>

    <p class="login-text">@wh</p>
  </div>
</template>

<script>
import store from "../store";
export default {
 data(){
   return{
      form: {
          account: "",
          password: ""
        }
   }
 },
 methods: {
   login(){
     if (!this.form.account && !this.form.password) {
        alert("请填写账号密码");
        return false;
      }
      setTimeout(() => {
        store.commit('login',{
          account: this.form.account,
          password: this.form.password
        });
        store.commit('setMemberInfo',{
          userStatus: 1,
          vipLevel: 0
        })
        this.$router.push("./");
      },500)
   }
 },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.login{
   position: relative;
   top: 0;
   left: 0;
  //  padding: 0 45px;
   p {
     text-align: center;
   }
   &-title {
     color: #111;
     font-size: 36px;
    //  padding: 40px 0 30px;
     &_left {
       padding: 0 15px;
     }
     &_right {
        background-color: #f29d38;
        border-radius: 5px;
        padding: 0 15px;
     }
   }
   .section{
     width: 200px;
     margin: 0 auto;
     &-input {
       width: 100%;
       height: auto;
       border: none;
       outline: none;
       font-size: 16px; 
       line-height: 1.6;
       margin-bottom: 30px;
       border-bottom: 1px solid #666;
       padding-left: 5px;
     }
   }
   .btn {
     width:210px;
     height: auto;
     color: #fff;
     background: #373737;
     margin: 10px 0 20px;
     padding:10px 15px;
     box-sizing: border-box;
     border-radius: 5px;
     outline: none;
     font-size: 16px;
   }
    .login-text {
        position: fixed;
        left: 0;
        bottom: 30px;
        width: 100%;
        height: auto;
        font-size: 12px;
        color: #777777;
        text-align: center;
    }
}
</style>

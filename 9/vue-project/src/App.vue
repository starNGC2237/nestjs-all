<script setup lang="ts">
import { reactive,ref } from 'vue'

let codeUrl = ref("/api/user/code");

const resetCode = ()=>
  codeUrl.value = "/api/user/code?"+Math.random();
let formLabelAlign = reactive({
  name: '',
  password: '',
  code: ''
})


const submit = ()=>{
  fetch('/api/user/create',{
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formLabelAlign)
  }).then(res=>res.json()).then(res=>{
    if(res.code === 200){
      alert('登录成功');
    }else{
      alert(res.msg);
      resetCode();
    }
  })
}
</script>

<template>
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh">
    <el-form label-position="right" label-width="100px" :model="formLabelAlign" style="width: 300px;">
      <el-form-item label="账号">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.password"></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <div style="display: flex">
          <el-input v-model="formLabelAlign.code"></el-input>
          <img @click="resetCode" :src="codeUrl" alt="">
        </div>
      </el-form-item>
      <el-form-item>
        <el-button @click="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped></style>

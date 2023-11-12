<script setup lang="ts">
const useFetch = async (url:string)=>{
 const res = await fetch(url).then(res=>res.arrayBuffer())
 const blob = new Blob([res]);
  const urlD = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = urlD;
  a.download = 'starmars.zip';
  a.click();
}
const download = ()=>{
  useFetch('http://localhost:3000/upload/stream')
}
</script>

<template>
  <div>
    没有问题
    <br/>
    <button @click="download">点击</button>
  </div>
</template>

<style scoped>
</style>

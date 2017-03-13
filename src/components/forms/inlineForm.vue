<template>
   <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
    </el-form-item>
    <el-form-item label="审批事项">
        <el-input v-model="formInline.option" placeholder="审批事项"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
        </el-select>
    </el-form-item><el-form-item>
        <el-button type="success" @click="onSubmit">查询</el-button>
    </el-form-item>
    </el-form>
</template>
<script>
    export default {
    data() {
      return {
        formInline: {
          user: '',
          region: '',
          option:''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<style scoped>
    
</style>

<template>
  <div>
    <el-form  label-position="left" label-width="80px" :model="formLabelAlign">
        <el-form-item label="名称">
            <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
            <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item label="活动形式">
            <el-input v-model="formLabelAlign.type"></el-input>
        </el-form-item>
         <el-form-item label="活动人员">
            <el-input v-model="formLabelAlign.user"></el-input>
        </el-form-item>
    </el-form>
</div>

</template>
<script>
    export default {
    data() {
      return {
       formLabelAlign: {
          name: '',
          region: '',
          type: '',
          user:''
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

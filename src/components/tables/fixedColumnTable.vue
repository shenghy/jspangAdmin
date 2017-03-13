<template>
   <el-table :data="tableData" style="width: 100%" border stripe>
      <el-table-column fixed prop="id"  label="ID"  width="80"></el-table-column>
      <el-table-column prop="userName" label="NAME" width="180"></el-table-column>
      <el-table-column prop="age" label="AGE"  width="80"> </el-table-column>
      <el-table-column prop="ability" label="ABILITY" width="300"> </el-table-column>
      <el-table-column prop="Education" label="EDUCATION" width="200" > </el-table-column>
      <el-table-column prop="wages" label="WAGES"  width="180"> </el-table-column>
      <el-table-column prop="value" label="VALUE"  width="180" align="right"> </el-table-column>
    </el-table>
</template>

<script>
    export default {
      data() {
        return {
          tableData: [{
            id:1,
            userName: 'JSpang',
            age: '30',
            ability: 'Web,HTML5,PHP',
            Education:'University',
            wages:'$821',
            value:'80%'
          }, {
            id:2,
            userName: 'King',
            age: '28',
            ability: 'Web,PHP',
            Education:'University',
            wages:'$864',
            value:'70%'
          }, {
            id:3,
            userName: 'Panda',
            age: '30',
            ability: 'PHP,MySql',
            Education:'University',
            wages:'$244',
            value:'60%'
          }, {
            id:4,
            userName: 'HaiPu',
            age: '35',
            ability: 'Web,HTML5,PHP,DB',
            Education:'University',
            wages:'$952',
            value:'80%'
          }]
        }
      }
    }
</script>
<style scoped>
    
</style>

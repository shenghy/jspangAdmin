<template>
   <el-table :data="tableData" style="width: 100%" border stripe height="250">
      <el-table-column prop="id"  label="ID"  width="80"></el-table-column>
      <el-table-column prop="userName" label="NAME" width="180"></el-table-column>
      <el-table-column prop="age" label="AGE" width="80"> </el-table-column>
      <el-table-column prop="ability" label="ABILITY"> </el-table-column>
      <el-table-column prop="value" label="VALUE" align="right"> </el-table-column>
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
            value:'80%'
          }, {
            id:2,
            userName: 'King',
            age: '28',
            ability: 'Web,PHP',
            value:'70%'
          }, {
            id:3,
            userName: 'Panda',
            age: '30',
            ability: 'PHP,MySql',
            value:'60%'
          }, {
            id:4,
            userName: 'Panda',
            age: '30',
            ability: 'PHP,MySql',
            value:'60%'
          },{
            id:5,
            userName: 'Panda',
            age: '30',
            ability: 'PHP,MySql',
            value:'60%'
          },{
            id:6,
            userName: 'Panda',
            age: '30',
            ability: 'PHP,MySql',
            value:'60%'
          },{
            id:7,
            userName: 'Panda',
            age: '30',
            ability: 'PHP,MySql',
            value:'60%'
          },{
            id:8,
            userName: 'HaiPu',
            age: '35',
            ability: 'Web,HTML5,PHP,DB',
            value:'80%'
          }]
        }
      }
    }
</script>
<style scoped>
    
</style>

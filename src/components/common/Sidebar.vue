<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <el-menu-item index="DashBoard">
               
                    <span class="sb-icon"><i class="material-icons">home</i></span>
                    <span class="sb-cn">DashBoard</span>
            </el-menu-item>

            <el-submenu index="2">
                <template slot="title">
               
                    <span class="sb-icon"><i class="material-icons">perm_data_setting</i></span>
                    <span class="sb-cn">Components</span>
                 
                </template>
                <el-menu-item index="EditorPage">Editor</el-menu-item>
                <el-menu-item index="MarkdownPage">Markdown</el-menu-item>
                <el-menu-item index="TodoList">TodoList</el-menu-item>
                     
                
            </el-submenu>

            <el-submenu index="3">
                <template slot="title">
                    <span class="sb-icon"><i class="material-icons">pie_chart</i></span>
                    <span class="sb-cn">charts</span>
                </template>
                <el-menu-item index="BasicCharts"> BasicCharts</el-menu-item>
            </el-submenu>

            <el-submenu index="4">
                <template slot="title">
                    <span class="sb-icon"><i class="material-icons">content_paste</i></span>
                    <span class="sb-cn">Form Elements</span>
                </template>
                <el-menu-item index="FormInput"> Form Inputs</el-menu-item>
                <el-menu-item index="FormLayouts">  Form Layouts</el-menu-item>
            </el-submenu>

             <el-submenu index="5">
                <template slot="title">
                    <span class="sb-icon"><i class="material-icons">border_all</i></span>
                    <span class="sb-cn">Tables</span>
                </template>
                <el-menu-item index="BasicTables"> Basic Tables</el-menu-item>
                
            </el-submenu>


 

 
            
        </el-menu>
    </div>
</template>
<script>
    export default {
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>
<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 200px;
        left: 0;
        top: 66px;
        bottom:0;
        background: #324157;
       
    }
    .sidebar > ul {
        height:100%;
    }

   .el-menu-item, .el-submenu__title{
       font-size:14px;
     
   }
   
    .material-icons {font-size:12px;}
</style>

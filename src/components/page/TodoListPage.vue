<template>
    <div >
        <v-pageTitle vtitle="To Do List"></v-pageTitle>


        <el-row :gutter="20">
            <el-col :span="12" :offset="6">
                <el-card class="box-card">
                   <TodoList></TodoList>
                </el-card>
            </el-col>
           
            
        </el-row>



        


    </div>



</template>

<script>
    import vPageTitle from '../common/pageTitle.vue';
    import TodoList from '../todoList/TodoList.vue';
    
    

   
    export default {
        components:{
            vPageTitle,TodoList
        }
        
        
        
        
    }
</script>

<style>
    .el-col{
        margin-bottom:16px;
    }
 
    
</style>
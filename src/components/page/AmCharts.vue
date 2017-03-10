<template>
    <div >
        <v-pageTitle vtitle="amCharts"></v-pageTitle>


        <el-row :gutter="20">
            <el-col :span="8">
                <el-card class="box-card">
                    <barChart></barChart>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card class="box-card">
                    
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card class="box-card">
                    
                </el-card>
            </el-col>
        </el-row>



        


    </div>



</template>

<script>
    import vPageTitle from '../common/pageTitle.vue';
    import barChart from '../charts/barChart.vue';
   
    export default {
        components:{
            vPageTitle,barChart
        },
        methods: {      
        }
    }
</script>

<style scoped>
    .el-col{
        margin-bottom:16px;
    }
    .material-icons{
        font-size:80px;
        color:#ddd;
    }
   
    .cart-string{
        height:100px;
        padding-top:10px;
        font-size:1.1rem;
        
    }
    
 
    
</style>
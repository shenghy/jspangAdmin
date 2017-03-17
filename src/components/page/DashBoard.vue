<template>
    <div >
        <v-pageTitle vtitle="DashBoard"></v-pageTitle>

        <div class="clear"></div>

        <el-row :gutter="20">

            <el-col :xs="12" :sm="12" :md="12" :lg="6">
                <el-card class="box-card">
                   <el-row :gutter="6">
                    <el-col :xs="24" :sm="8" :md="8" :lg="8">
                        <el-progress type="circle" :percentage="67" :width="80"></el-progress>
                    </el-col>
                    <el-col :xs="24" :sm="11" :md="12" :lg="12">
                        <div class="cart-string"> 
                        <span>New Visits</span>
                        <span><h2>57,820</h2></span>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="5" :md="4" :lg="4">
                        <div>
                            <i class="material-icons">person_outline</i>
                        </div>
                    </el-col>
                   </el-row>
                </el-card>
            </el-col>

            <el-col :xs="12" :sm="12" :md="12" :lg="6">
                <el-card class="box-card">
                   <el-row :gutter="6">
                    <el-col :xs="24" :sm="8" :md="8" :lg="8">
                        <div> <el-progress type="circle" :percentage="81" :width="80"></el-progress></div>
                    </el-col>
                    <el-col :xs="24" :sm="11" :md="12" :lg="12">
                        <div class="cart-string"> 
                        <span>Purchases</span>
                        <span><h2>$1,680</h2></span>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="5" :md="4" :lg="4">
                        <div>
                            <i class="material-icons">attach_money</i>
                        </div>
                    </el-col>
                   </el-row>
                </el-card>
            </el-col>

            <el-col :xs="12" :sm="12" :md="12" :lg="6">
                <el-card class="box-card">
                   <el-row :gutter="6">
                    <el-col :xs="24" :sm="8" :md="8" :lg="8">
                        <div> <el-progress type="circle" :percentage="30" :width="80"></el-progress></div>
                    </el-col>
                    <el-col :xs="24" :sm="11" :md="12" :lg="12">
                        <div class="cart-string"> 
                        <span>Active Users</span>
                        <span><h2>157,820</h2></span>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="5" :md="4" :lg="4">
                        <div>
                            <i class="material-icons">touch_app</i>
                        </div>
                    </el-col>
                   </el-row>
                </el-card>
            </el-col>


            <el-col :xs="12" :sm="12" :md="12" :lg="6">
                <el-card class="box-card">
                   <el-row :gutter="6">
                    <el-col :xs="24" :sm="8" :md="8" :lg="8">
                        <div> <el-progress type="circle" :percentage="88" :width="80"></el-progress></div>
                    </el-col>
                    <el-col :xs="24" :sm="11" :md="12" :lg="12">
                        <div class="cart-string"> 
                        <span>Returned</span>
                        <span><h2>32,645</h2></span>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="5" :md="4" :lg="4">
                        <div>
                            <i class="material-icons">replay</i>
                        </div>
                    </el-col>
                   </el-row>
                </el-card>
            </el-col>
        </el-row>



        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="12">
                <el-card class="box-chart">
                    <pieChart></pieChart>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="12">
                <el-card class="box-chart">
                    <lineChart></lineChart>
                </el-card>
            </el-col>
            
        </el-row>



        <!--todoList  & mail & table-->
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="8">
                <el-card class="box-list">
                    To Do List<hr>
                    <TodoList></TodoList>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="10">
                <el-card class="box-list">
                     BORDERED TABLE
                   <hr>
                   <borderTable></borderTable>
                </el-card>
            </el-col>

            <el-col :xs="24" :sm="24" :md="24" :lg="6">
                <el-card class="box-list">
                     Message List
                   <hr>
                   <MessageList></MessageList>
                </el-card>
            </el-col>
            
        </el-row>

    </div>



</template>

<script>
    import vPageTitle from '../common/pageTitle.vue';
    import barChart from '../charts/barChart.vue';
    import pieChart from '../charts/pieChart.vue';
    import lineChart from '../charts/lineChart.vue';
    import radarChart from '../charts/radarChart.vue';
    import funnelChart from '../charts/funnelChart.vue';
    import TodoList from '../todoList/TodoList.vue';
    import borderTable from '../tables/borderTable.vue';
    import MessageList from '../message/MessageList.vue';
    export default {
        data(){
           return{
              //percentage:10
           }
        },
        components:{
            vPageTitle,barChart,pieChart,lineChart,radarChart,funnelChart,TodoList,borderTable,MessageList
        }
    }
</script>

<style scoped>
    .el-col{
        margin-bottom:16px;
        text-align:center;
    }
    .material-icons{
        font-size:80px;
        color:#ddd;
    }
    .box-card{
        height:110px;
    } 
    .cart-string{
        height:100px;
        padding-top:10px;
        font-size:1.1rem;
        
    }
    .box-chart{
        height:420px;
    }
    .box-list{
        height:auto;
        text-align:left;
    }
    .box-list hr{
        height:1px;
        border:none;
        border-top:1px  dashed #ccc;
        margin-bottom:5px;
        margin-top:6px;

    }
</style>
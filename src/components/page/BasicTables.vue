<template>
    <div >
        <v-pageTitle vtitle="BasicTables"></v-pageTitle>


         <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                   HOVER ROWS
                   <hr>
                   <hoverRow></hoverRow>
                </el-card>
            </el-col>
             <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                   STRIPED  ROWS
                   <hr>
                   <stripedRow></stripedRow>
                </el-card>
            </el-col>
            
            
        </el-row>


        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                  BORDERED TABLE
                   <hr>
                   <borderTable></borderTable>
                </el-card>
            </el-col>


             <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                  CONDENSED TABLE
                   <hr>
                   <condensedTable></condensedTable>
                </el-card>
            </el-col>
             
            
            
        </el-row>

        
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                  FIXED HEADER TABLE
                   <hr>
                   <fixedHeaderTable></fixedHeaderTable>
                </el-card>
            </el-col>


             <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                  FIXED COLUMN TABLE
                   <hr>
                   <fixedColumnTable></fixedColumnTable>
                </el-card>
            </el-col>
             
            
            
        </el-row>


        


    </div>



</template>

<script>
    import vPageTitle from '../common/pageTitle.vue';
    import hoverRow from '../tables/hoverRow.vue';
    import stripedRow from '../tables/stripedRow.vue';
    import borderTable from '../tables/borderTable.vue';
    import condensedTable from '../tables/condensedTable.vue';
    import fixedHeaderTable from '../tables/fixedHeaderTable.vue';
    import fixedColumnTable from '../tables/fixedColumnTable.vue';
    
   
    export default {
        components:{
            vPageTitle,hoverRow,stripedRow,borderTable,condensedTable,fixedHeaderTable,fixedColumnTable
        },
        methods: {      
        }
    }
</script>

<style scoped>
    .el-col{
        margin-bottom:16px;
    }
    .box-card{
        font-size:12px;
    }
    .box-card hr{
        height:1px;
        border:none;
        border-top:1px  dashed #ccc;
        margin-bottom:10px;
        margin-top:6px;
    }


    
 
    
</style>
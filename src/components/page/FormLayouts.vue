<template>
    <div >
        <v-pageTitle vtitle="FormLayouts"></v-pageTitle>


       
        <el-row>
            <el-col :span="24">
                <el-card class="box-card">
                    InlineForm-行布局
                    <hr>
                    <inlineForm></inlineForm>
                </el-card>
            </el-col>
        </el-row>

        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="8" :lg="8">
                <el-card class="box-card card-a">
                    Right Layout Form
                    <hr>
                    <rightLayoutForm></rightLayoutForm>
                </el-card>
            </el-col>
             <el-col :xs="24" :sm="24" :md="8" :lg="8">
                <el-card class="box-card card-a">
                    Left Layout Form
                    <hr>
                    <leftLayoutForm></leftLayoutForm>
                </el-card>
            </el-col>
             <el-col :xs="24" :sm="24" :md="8" :lg="8">
                <el-card class="box-card card-a">
                    Top Layout Form
                    <hr>
                    <topLayoutForm></topLayoutForm>
                </el-card>
            </el-col>
        </el-row>


        


    </div>



</template>

<script>
    import vPageTitle from '../common/pageTitle.vue';
    import inlineForm from '../forms/inlineForm.vue';
    import rightLayoutForm from '../forms/rightLayoutForm.vue';
    import leftLayoutForm from '../forms/leftLayoutForm.vue';
    import topLayoutForm from '../forms/topLayoutForm.vue';
   
   
    export default {
        components:{
            vPageTitle,inlineForm,rightLayoutForm,leftLayoutForm,topLayoutForm
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
    .card-a{
        height:300px;
    }
   
    
 
    
</style>
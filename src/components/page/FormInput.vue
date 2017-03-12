<template>
    <div >
        <v-pageTitle vtitle="FormInput"></v-pageTitle>


        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                  STANDARD FIELDS
                  <hr>
                  Text
                  <el-input  placeholder="请输入内容"></el-input>
                  With Icon
                  <el-input placeholder="带图标的文本框" icon="search" ></el-input>
                  Disabled Input
                  <el-input  placeholder="请输入内容" :disabled="true"></el-input>
                  Textarea
                  <el-input type="textarea" :rows="4"placeholder="请输入内容"></el-input>
                  Small Input
                  <el-input size="small" placeholder="请输入内容"></el-input>
                  Large Input
                  <el-input size="large" placeholder="请输入内容"></el-input>
                  <br/><br/>
                </el-card>
            </el-col>



            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                    EXAMPLE FORM
                  <hr>
                    <el-form ref="form" label-width="80px">
                        <el-form-item label="活动名称">
                            <el-input></el-input>
                        </el-form-item>
                        
                        <el-form-item label="活动时间">
                            <el-col :span="12">
                            <el-date-picker type="date" placeholder="选择日期"  style="width: 99%;"></el-date-picker>
                            </el-col>
                            
                            <el-col :span="12">
                            <el-time-picker type="fixed-time" placeholder="选择时间"  style="width: 100%;"></el-time-picker>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="活动性质">
                            <el-checkbox-group >
                            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                            <el-checkbox label="地推活动" name="type"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item>
                            <el-button  >立即创建</el-button>
                            <el-button>取消</el-button>
                        </el-form-item>
                        </el-form>




                </el-card>
            </el-col>




            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                  Time PICKER
                  <hr>
                  
                        <el-time-select v-model="time1" style="width: 100%;" :picker-options="{start: '08:30',step: '00:15',end: '18:30'}" placeholder="选择时间">
                        </el-time-select><br/><br/>
                   
                <el-time-select
                    placeholder="起始时间"
                    style="width: 49%;"
                    v-model="startTime"
                    :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30'
                    }">
                </el-time-select>
                <el-time-select
                    placeholder="结束时间"
                    v-model="endTime"
                    style="width: 49%;"
                    :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30',
                    minTime: startTime
                    }">
                </el-time-select><br/><br/>
                   

                </el-card>
            </el-col>
        </el-row>

        <el-row :gutter="20">
             <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                    SELECTS
                  <hr>
                  正常选项
                   <el-select v-model="value1" placeholder="请选择" style="width:100%;">
                        <el-option
                        v-for="item in options1" :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                  有禁用选项
                    <el-select v-model="value2" placeholder="请选择" style="width:100%;">
                        <el-option
                        v-for="item in options2" :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        :disabled="item.disabled">
                        </el-option>
                    </el-select>
                  禁用 
                    <el-select v-model="value1" placeholder="请选择" style="width:100%;" disabled >
                        <el-option
                        v-for="item in options1" :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                  多选
                    <el-select v-model="value3" multiple placeholder="请选择" style="width:100%;">
                        <el-option
                        v-for="item in options1" :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                  分组
                     <el-select v-model="value4" placeholder="请选择" style="width:100%;">
                        <el-option-group
                        v-for="group in options3" :key="group.label"
                        :label="group.label">
                        <el-option
                            v-for="item in group.options" :key="item.label"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                        </el-option-group>
                    </el-select>

                </el-card>
            </el-col>



             <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                   INPUT GROUPS
                  <hr>
                    <div>
                    <el-input placeholder="请输入内容" >
                        <template slot="prepend">Http://</template>
                    </el-input>
                    </div>
                    <div style="margin-top: 15px;">
                    <el-input placeholder="请输入内容" >
                        <template slot="append">.com</template>
                    </el-input>
                    </div>
                    <div style="margin-top: 15px;">
                    <el-input placeholder="请输入内容">
                        <el-select v-model="select"  slot="prepend">
                        <el-option label="餐厅名" value="1"></el-option>
                        <el-option label="订单号" value="2"></el-option>
                        <el-option label="用户电话" value="3"></el-option>
                        </el-select>
                        <el-button slot="append" icon="search"></el-button>
                    </el-input>
                    </div>


                </el-card>
            </el-col>


            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                   RATE
                  <hr>
                用户打分
                <el-rate v-model="value5"></el-rate>
                只读分数
                <el-rate
                v-model="value6"
                disabled
                show-text
                text-color="#ff9900"
                text-template="{value}">
                </el-rate>

                </el-card>
            </el-col>
            
        </el-row>


    </div>



</template>

<script>
    import vPageTitle from '../common/pageTitle.vue';
   
   
    export default {
        data(){
            return{
                time1:'',
                startTime: '',
                endTime: '',
                value1:'',
                value2:'',
                value3:[],
                value4:'',
                value5:null,
                value6:3.7,
                select: '',
                options1: [{value: '选项1',label: '黄金糕'},
                           {value: '选项2',label: '双皮奶'}, 
                           {value: '选项3',label: '蚵仔煎'}, 
                           {value: '选项4',label: '龙须面'},
                           {value: '选项5',label: '北京烤鸭'}],
                options2: [{value: '选项1',label: '黄金糕'},
                           {value: '选项2',label: '双皮奶',disabled: true}, 
                           {value: '选项3',label: '蚵仔煎'}, 
                           {value: '选项4',label: '龙须面'},
                           {value: '选项5',label: '北京烤鸭'}],
                 options3: [{
                            label: '热门城市',
                            options: [{
                                value: 'Shanghai',
                                label: '上海'
                            }, {
                                value: 'Beijing',
                                label: '北京'
                            }]
                            }, {
                            label: '城市名',
                            options: [{
                                value: 'Chengdu',
                                label: '成都'
                            }, {
                                value: 'Shenzhen',
                                label: '深圳'
                            }, {
                                value: 'Guangzhou',
                                label: '广州'
                            }, {
                                value: 'Dalian',
                                label: '大连'
                            }]
                            }],
                
            };
        },
        components:{
            vPageTitle
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
    .box-card{
        font-size:12px;
        line-height:26px;
    }
    .box-card hr{
        height:1px;
        border:none;
        border-top:1px  dashed #ccc;
        margin-bottom:10px;
    }
    .el-select .el-input {
    width: 140px;
     }
    
 
    
</style>
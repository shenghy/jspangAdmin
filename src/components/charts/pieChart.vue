<template>
    <div class="c-charts" >
        <IEcharts :option="pie"  ></IEcharts>
    </div>



</template>

<script>
    import vPageTitle from '../common/pageTitle.vue';
    import IEcharts from 'vue-echarts-v3';
    export default {
        components:{
            vPageTitle,IEcharts
        },
        data: () => ({
            pie:{
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
                },
                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        selectedMode: 'single',
                        radius: [0, '50%'],

                        label: {
                            normal: {
                                position: 'inner'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:335,name:'直达',selected:true,itemStyle:{normal:{color:'#4cb1a7'}}},
                            {value:679,
                             name:'营销广告',
                             itemStyle:{
                                 normal:{
                                 color:'#ec7777'
                                 }
                             }
                             },
                            {value:1548,
                             name:'搜索引擎',
                             itemStyle:{
                                 normal:{
                                 color:'#e5c649'
                                 }
                                }
                             }
                        ]
                    },
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['60%', '90%'],

                        data:[
                            {value:335, name:'直达',itemStyle:{normal:{color:'#4cb1a7'}}},
                            {value:310, name:'邮件营销',itemStyle:{normal:{color:'#ec7777'}}},
                            {value:234, name:'联盟广告',itemStyle:{normal:{color:'#e5c649'}}},
                            {value:135, name:'视频广告',itemStyle:{normal:{color:'#a6c733'}}},
                            {value:1048, name:'百度',itemStyle:{normal:{color:'#57bcda'}}},
                            {value:251, name:'谷歌',itemStyle:{normal:{color:'#489e95'}}},
                            {value:147, name:'必应',itemStyle:{normal:{color:'#ecd77f'}}},
                            {value:102, name:'其他',itemStyle:{normal:{color:'#94b033'}}}
                        ]
                    }
                ]
            }
            }),

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
    .c-charts{
        height:400px;
        width:100%;
    }
    
</style>
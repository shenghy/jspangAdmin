<template>
    <div class="c-charts" >
        <IEcharts :option="line"  ></IEcharts>
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
            line: {
                    title: {
                        text: ''
                    },
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                    },
                    
                    grid: {
                        left: '1%',
                        right: '3%',
                        bottom: '3%',
                        containLabel: true,
                        show:true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            data : ['周一','周二','周三','周四','周五','周六','周日'],
                            axisLine:{lineStyle:{color:'#999'}},
                            splitLine:{show:true,lineStyle:{color:'#ddd'}}
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            axisLine:{lineStyle:{color:'#999'}},
                            splitLine:{lineStyle:{color:'#ddd'}}

                        }
                    ],
                    series : [
                        {
                            itemStyle:{normal:{ color:'#96d6e8'}},
                            name:'邮件营销',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            itemStyle:{normal:{ color:'#e6d385'}},
                            name:'联盟广告',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            itemStyle:{normal:{ color:'#f4abab'}},
                            name:'视频广告',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            itemStyle:{normal:{ color:'#a6c733'}},
                            name:'直接访问',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            itemStyle:{normal:{ color:'#4cb1a7'}},
                            name:'搜索引擎',
                            type:'line',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            areaStyle: {normal: {}},
                            data:[820, 932, 901, 934, 1290, 1330, 1320]
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
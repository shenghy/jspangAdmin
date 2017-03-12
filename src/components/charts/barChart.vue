<template>
    <div class="c-charts" >
        <IEcharts :option="bar"  ></IEcharts>
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
            bar: {
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: ['直接访问','联盟广告','视频广告','搜索引擎']
                },
                grid: {
                    x:'10%',
                    y:'10%',
                    width:'85%',
                    show:true,
                  
                },
                xAxis:  {
                    type: 'value',
                    axisLine:{
                        lineStyle:{
                            color:'#999'
                        }
                    },
                    splitLine:{
                        lineStyle:{
                            color:'#ddd'
                        }
                    }
                   
                },
                yAxis: {
                    type: 'category',
                    data: ['周一','周二','周三','周四','周五','周六','周日'],
                     axisLine:{
                        lineStyle:{
                            color:'#999'
                        }
                    },
                    splitLine:{
                        show:true, 
                        lineStyle:{
                            color:'#ddd'
                        }
                    }
                    
                },
                series: [
                    {
                        itemStyle:{
                            normal:{
                                color:'#63bbb2',
                                opacity:0.9
                            }
                        },
                        
                        
                        name: '直接访问',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [320, 302, 301, 334, 390, 330, 320]
                    },
                   
                    {
                        itemStyle:{
                            normal:{
                                color:'#ef8989',
                                opacity:0.9
                            }
                        },
                        name: '联盟广告',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        itemStyle:{
                            normal:{
                                color:'#6cc5df',
                                opacity:0.9
                            }
                        },
                        name: '视频广告',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [530, 600, 301, 554, 490, 330, 710]
                    },
                    {
                        itemStyle:{
                            normal:{
                                color:'#b1ce4d',
                                opacity:0.9
                            }
                        },
                        name: '搜索引擎',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [820, 832, 901, 934, 1290, 1330, 1320]
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
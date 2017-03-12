<template>
    <div class="c-charts" >
        <IEcharts :option="funnel"  ></IEcharts>
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
            funnel:{
                    title: {
                        text: '',
                      
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c}%"
                    },
                    toolbox: {
                        feature: {
                           
                        }
                    },
                    legend: {
                        orient: 'vertical',
                         x: 'left',
                        data: ['展现','点击','访问','咨询','订单']
                    },
                    calculable: true,
                    series: [
                        {
                            name:'漏斗图',
                            type:'funnel',
                            left: '20%',
                            top: 70,
                            //x2: 80,
                            bottom: 30,
                            width: '70%',
                            // height: {totalHeight} - y - y2,
                            min: 0,
                            max: 100,
                            minSize: '0%',
                            maxSize: '100%',
                            sort: 'descending',
                            gap: 2,
                            label: {
                                normal: {
                                    show: true,
                                    position: 'inside'
                                },
                                emphasis: {
                                    textStyle: {
                                        fontSize: 20
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    length: 10,
                                    lineStyle: {
                                        width: 1,
                                        type: 'solid'
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    borderColor: '#fff',
                                    borderWidth: 1
                                }
                            },
                            data: [
                                {value: 60, name: '访问',itemStyle:{normal:{color:'#4cb1a7'}}},
                                {value: 40, name: '咨询',itemStyle:{normal:{color:'#57bcda'}}},
                                {value: 20, name: '订单',itemStyle:{normal:{color:'#e5c649'}}},
                                {value: 80, name: '点击',itemStyle:{normal:{color:'#ec7777'}}},
                                {value: 100, name: '展现',itemStyle:{normal:{color:'#489e95'}}}
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
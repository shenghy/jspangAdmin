<template>
    <div class="c-charts" >
        <IEcharts :option="radar"  ></IEcharts>
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
            radar: {
                    title: {
                        text: ''
                    },
                   
                    tooltip: {
                         
                    },
                    legend: {
                        data: ['预算分配', '实际开销']
                    },
                    radar: {
                        // shape: 'circle',
                        
                        indicator: [
                        { name: '销售', max: 6500},
                        { name: '管理', max: 16000},
                        { name: '信息技术', max: 30000},
                        { name: '客服', max: 38000},
                        { name: '研发', max: 52000},
                        { name: '市场', max: 25000},
                        { name: '测试', max: 25000}
                        ]
                    },
                    series: [{
                        name: '预算 vs 开销（Budget vs spending）',
                        type: 'radar',
                        areaStyle: {normal: {}},
                        data : [
                            {
                               itemStyle:{normal:{ color:'rgba(87, 188, 218, 0.4)'}},
                                value : [4300, 10000, 28000, 35000, 50000, 19000,20000],
                                name : '预算分配'
                            },
                            {
                                itemStyle:{normal:{ color:'rgba(236, 119, 119, 0.7)'}},
                                value : [5000, 14000, 28000, 31000, 42000, 21000,16000],
                                name : '实际开销'
                            }
                        ]
                    }]
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
<template>
    <div class="header">
        <el-row :gutter="10">
            <!--Logo area-->
            <el-col :xs="12" :sm="12" :md="4">
                <div class="logo">  
                    <span class="logo_prefix">JSPang</span><span class="logo_suffix">Admin</span>
                </div>
            </el-col>

            <!--Search area-->    
            <el-col :xs="12" :sm="12" :md="8">
                <div class="search">
                    <el-input
                        size="small"
                        placeholder="Search for...">
                        <el-button slot="append" icon="search"></el-button>
                    </el-input>
                </div> 
            </el-col>
            <!-- header right area-->
            <el-col :xs="24" :sm="12" :md="4">
                <div class="website">
                    <span>Website:</span>
                    <span>www.jspang.com</span>
                </div>
            </el-col>


           <el-col :xs="8" :sm="8" :md="{span:2,offset: 4}" >
                <div class="header-right">
                    <span>
                        <el-badge :value="5" class="item">
                            <i class="el-icon-message"></i>
                        </el-badge>
                    </span>


                    <span>
                     <el-badge :value="3" class="item">
                        <i class="el-icon-date"></i>
                     </el-badge>
                    </span>
                </div>
            
         </el-col>

         <el-col :xs="8" :sm="8" :md="2" >
            <div class="user-header">
                <img src="../../../static/images/b_header.jpg" width="50px" />
            </div>
         </el-col>

            



        </el-row>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'linxin'
            }
        },
        methods:{
            
        }
    }
</script>
<style scoped>
    .header {
        position: fixed;
        box-sizing: border-box;
        width: 100%;
        height:66px;
       
        font-size: 14px;
        line-height: 66px;
        background-color:#324157;
        box-shadow:2px 0 3px rgba(0,0,0,.5);
        z-index:1000;
        padding:0 32px 0 40px;
        overflow:hidden;
       
    }
    .header .logo{
        float: left;
        cursor:pointer;
        font-size: 22px;
    }
    .logo_prefix{
        color:#209e91;
    }
    .logo_suffix{
        color:#fff;
    }
    .header .search{
        float: left;
        color:#fff;
        font-size:14px;
    }
    .website span{
        display:inline-block;
        color:#209e91;
    }
    .website span:first-child{
        color:#fff;
    }
    .header-right{
        
    }
    .header-right span{
        display:inline-block;
        margin-left:14px;
        font-size:18px;
        color:#fff;
        line-height:18px;
        cursor:pointer;
    }
    .header-right span:hover{
        color:#209e91;

    }
    .user-header{
        line-height:50px;
        padding-top:7px;
    }
    .user-header img{
        border-radius:50%;
    }
    

</style>

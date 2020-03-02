<template>
  <el-container class="container">
  <el-header class="header">
    <el-row>
        <el-col :span="4">
            <div class="grid-content bg-purple">
                <img src="../../assets/logo.jpg" alt="无法显示图片" height="60px" >
            </div></el-col>
        <el-col :span="18" class="middle">
            <h2>基层医疗卫生服务信息系统</h2>
        </el-col>
        <el-col :span="2" >
            <div class="grid-content bg-purple" >
                <a  @click.prevent="handleSignout()" class="loginout" href="#">退出</a>
            </div></el-col>
    </el-row>
  </el-header>
  <el-container>
    <el-aside width="200px" class="aside">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            >
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>住院登记</span>
                </template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>押金管理</span>
                </template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
            </el-submenu>
                        <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>住院收费</span>
                </template>
                    <el-menu-item index="3-1">选项1</el-menu-item>
            </el-submenu>
                        <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>系统管理</span>
                </template>
                    <el-menu-item index="4-1">选项1</el-menu-item>
            </el-submenu>
                        <el-submenu index="5">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>住院处方收费</span>
                </template>
                    <el-menu-item index="5-1">选项1</el-menu-item>
            </el-submenu>
                        <el-submenu index="6">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>门诊费用管理</span>
                </template>
                    <el-menu-item index="6-1">选项1</el-menu-item>
            </el-submenu>
        </el-menu>
    </el-aside>
    <el-main class="main">Main</el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
    beforeCreate(){
        const token=localStorage.getItem('token')
        if(!token){
            this.$router.push({name:'login'})
        }
    },
    methods:{
        handleSignout(){
            localStorage.clear()
            this.$message.success("退出成功")
            this.$router.push({name:'login'})
        }
    }
}
</script>

<style>
    .header{
        background-color: #63c0d1;
    }
    .aside{
        background-color: #d3dce6;
    }
    .main{
        background-color: #e9eef3;
    }
    .container{
        height: 100%;
    }
    .middle{
        
        text-align: center;
    }
    .loginout{
       line-height: 60px;
        text-decoration: none
    }

</style>
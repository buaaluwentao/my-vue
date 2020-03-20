<template>
    <div>
        <header id="homeBanner">
            <nav>
                <ul>
                <li><a @click="showHome()">首页</a></li>
                <li><a href="#" title="国内新闻" target="_blank">国内新闻</a></li>
                <li><a href="#" title="国外新闻" target="_blank">国外新闻</a></li>
                <li><a href="#" title="娱乐新闻" target="_blank">娱乐新闻</a></li>
                <li><a href="#" title="时事新闻" target="_blank">时事新闻</a></li>
                <li><a href="#" title="联系我们" target="_blank">联系我们</a></li>
                <li><router-link to="/login" title="登录本站" target="_blank">登录本站</router-link></li>
                </ul>
            </nav>
            <div id="clearFloat" style="clear: both;"></div>
        </header>
    </div>
</template>

<script>
export default {
    methods: {
        showHome() {
            this.$bus.emit('urlChanged', 'https://talent.baidu.com/external/baidu/index.html');
        }
    }
}
</script>

<style scoped>
    .home{
        margin:0px;
        background-repeat:no-repeat;
        width:800px;
    }

    nav{
        float: left;
        width:920px;
        height:40px;
        /*background-image:url(../images/nav.jpg);*/
        margin: 10px 0 0 0;
        padding: 0 ;
    }

    nav ul {
        float:left;
        margin: 0px;
        padding: 0 0 0 0;
        width: 920px;
        list-style: none;
    }

    nav ul li {
        display: inline;
    }

    nav ul li a {
        float: left;
        padding: 11px 20px; 
        font-size: 14px;
        text-align: center;
        text-decoration: none;
        /*background: url(../images/templatemo_menu_divider.png)        center right no-repeat;*/
        /* color: #fff; */
        font-family: Tahoma;
        outline: none;
    }

    nav li a:hover {
        color: #2a5f00;
    }

</style>
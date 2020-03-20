<template>
    <div>
        <div>
            <label>用户名</label>：<input type="text" v-bind:value="defaultUserName"/>
        </div>

        <div>
            <label>密  码</label>：<input type="text" v-bind:value="defaultPwd"/>
        </div>

        <div>
            <label>账  户</label>：<input type="text" v-bind:value="accountId"/>
        </div>
    </div>
  
</template>

<script>
  export default {
    name: 'for Login',
    data: function() {
      return {
        defaultUserName: 'lwt',
        defaultPwd: 'pwd',
        accountId: 'why1234',
      };
    },
    methods: {
        
    },
    created() {
        
        /*
        //1.通过path传参
        console.log('hello, world' + JSON.stringify(this.$route.params));
        this.defaultUserName = this.$route.params.name;
        */

        /*
        //2.通过路径后的查询参数传参
        console.log('hello, world' + JSON.stringify(this.$route.query));
        this.defaultUserName = this.$route.query.id;
        */

       /*
       //3.name传参
       */

        /*console.log('accountId:'+JSON.stringify(this.$route.params));
        this.accountId = this.$route.params.accountId;*/
    }
  }


</script>

<style>
  /* * {
    background: red;
  } */
</style>
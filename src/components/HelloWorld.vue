<template>
  <div>
    <ul>
      <li><router-link to="/login?id=lwt2" target="_blank">登录</router-link></li>
      <div @click="deliverName('lwt2')">传name</div>
      <div @click="deliverId('412726XXX')">传id</div>
      <div @click="deliverAccount('why123')">传Account</div>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'I do not know what is this',
    data: function() {
      return {
        msg: 'this is just a hello world',
      };
    },
    methods: {
      deliverName(name) {
        this.$router.push({
          path: `Login/${name}`,
        })
      },

      deliverId(id) {
        this.$router.push({
          path: '/Login',
          query: {
            id
          },
        })
      },

      deliverAccount(accountId) {
        this.$router.push({
          name: 'accountLogin',
          params: {
            accountId,
          },
        })
      },


    }
  }
</script>

<style>
  * {
    background: red;
  }
</style>
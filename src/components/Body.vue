<template>
  <div>
    <iframe v-bind:src="url"></iframe>
  </div>
</template>

<script>
  export default {
    name: 'Body',
    data: function() {
      return {
        url: 'https://talent.baidu.com/external/baidu/index.html#/social/2',
      }
    },
    methods: {
        
    },

    created() {
        this.$bus.on('urlChanged', (newURL) => {
            console.log('newURL:' + newURL);
            this.url = newURL;
        });
    }
  }
</script>

<style>
  iframe {
    height: 1500px;
    width: 100%;
  } 
</style>
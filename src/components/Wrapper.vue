<template>
    <div>
        <HomeBanner></HomeBanner>
        <Body></Body>
    </div>
</template>

<script>
import HomeBanner from '@/components/HomeBanner'
import Body from '@/components/Body'

export default {
    name: 'wrapper',
    components:{
        HomeBanner,
        Body,
    }
}
</script>

<style>
</style>
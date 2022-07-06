<template>
  <div class="page">
    <Header/>
    <div class="content" v-if="$store.state.login">
      <router-view/>
    </div>
  </div>
</template>

<script>

import Header from '@/components/Header'

export default {
  name: 'Home',
  components: {
    Header,
  },
  methods: {
    setDocumentTitle(){
      document.title = this.$route.meta.title;
    }
  },
  mounted(){
    this.setDocumentTitle()
  },
  watch:{
    $route(){
        this.setDocumentTitle()
    }
  }
}
</script>

<style lang="scss">
  
  @import "@/assets/scss/style";
  

</style>

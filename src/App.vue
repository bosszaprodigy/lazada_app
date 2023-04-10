<template>
  <v-app pa-0>
    <Appbar/>
    <br>
    <v-main>
      <router-view/>
      <br><br><br>
      <Footer></Footer>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    Appbar: () => import('@/components/AppBar'),
    Footer: () => import('@/components/Footer')
  },
  data: () => ({

  })
}
</script>
<style>
#app {
  background-color: #e7e8ec !important;
}
</style>

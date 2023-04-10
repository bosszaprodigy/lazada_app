<template>
  <v-app-bar app height="85">
    <v-container class="fill-height">
      <v-toolbar-title>
        <img class="image-logo" src="../assets/lazada_logo.png" alt="Lazada Logo" />
      </v-toolbar-title>

      <v-text-field
          :width="width"
          v-model="search"
          :append-outer-icon="'search'"
          label="Search"
          single-line
          hide-details
          filled
          @click:append-outer="searchdata()"
          class=".d-sm-none .d-md-flex ma-2"
        ></v-text-field>
        <!-- <v-btn text v-show="showbtn" class=".d-none .d-sm-flex .d-sm-none .d-md-flex .d-lg-flex" ><img class="image-logo" src="../assets/image_appbar.jpg" alt="image_appbar" /></v-btn> -->
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  data () {
    return {
      drawer: false,
      // showbtn: true,
      search: '',
      items: [
        { title: 'Profile', action: () => {} },
        { title: 'Settings', action: () => {} },
        { title: 'Logout', action: () => {} }
      ]
    }
  },
  computed: {
    width () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 50
        case 'sm': return 100
        case 'md': return 150
        case 'lg': return 300
        case 'xl': return 500
      }
    }
  },
  methods: {
    searchdata () {

    }
  }
}
</script>

<style>
.image-logo {
  width: 127px;
  height: 40px;
}
.container {
   max-width: 75rem;
   height: auto;
   margin: 0 auto;
   padding: 0 1.25rem;
}
</style>

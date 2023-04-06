<!-- <template>
  <v-app-bar app height="85">
    <v-container class="fill-height">
      <v-toolbar-title>
        <img class="image-logo" src="../assets/lazada_logo.png" alt="Lazada Logo" />
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn text>Home</v-btn>
      <v-btn text>About</v-btn>
      <v-btn text>Contact</v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">Account</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="item in items" :key="item.title" @click="item.action">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-navigation-drawer v-model="drawer" app>
        <v-list>
          <v-list-item v-for="item in items" :key="item.title" @click="item.action">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-container>
  </v-app-bar>
</template> -->

<template>
  <v-app-bar flat elevation-0 rounded color="#FFFFFF">
    <v-container align-center justify-center row fill-height>
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-toolbar-title><img class="image-logo ma-2" src="../assets/lazada_logo.png" alt="Lazada Logo" /></v-toolbar-title>
      <!-- <v-spacer></v-spacer> -->
      <!-- <v-text-field v-model="search" label="Search" hide-details search-icon="mdi-magnify"></v-text-field> -->
      <v-flex xs10 sm6>
        <v-text-field
          v-model="search"
          :append-outer-icon="'search'"
          label="Search"
          single-line
          hide-details
          box
          @click:append-outer="searchdata()"
          class="hidden-sm-and-down ma-2 xs12 sm6"
        ></v-text-field>
      </v-flex>
      <v-btn class="ma-2" icon text hide-sm-and-down color="blue lighten-2">
        <v-icon icon="mdi-cart-outline">mdi-cart-outline</v-icon>
        <!-- <v-icon>shopping_cart</v-icon> -->
      </v-btn>
      <v-btn text hide-sm-and-down><img class="image-logo" src="../assets/image_appbar.jpg" alt="image_appbar" /></v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  data () {
    return {
      drawer: false,
      search: '',
      items: [
        { title: 'Profile', action: () => {} },
        { title: 'Settings', action: () => {} },
        { title: 'Logout', action: () => {} }
      ]
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
.search{
  width: 45;
  height: 688px;
}
</style>

<template>
  <v-container fluid row>
    <v-row class="pa-1">
        <v-carousel
          cycle
          :height="height"
          :width="width"
          hide-delimiter-background
          show-arrows-on-hover
          :show-arrows="false"
        >
          <v-carousel-item>
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <v-img src="https://picsum.photos/510/300?random"></v-img>
              </v-row>
          </v-carousel-item>
        </v-carousel>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: 'Carousel',
  components: {
    ListItem: () => import('@/components/ListItem')
  },
  data: () => ({
    colors: [
      'indigo',
      'warning',
      'pink darken-2',
      'red lighten-1',
      'deep-purple accent-4'
    ],
    slides: [
      'First',
      'Second',
      'Third',
      'Fourth',
      'Fifth'
    ]

  }),
  computed: {
    height () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 150
        case 'sm': return 250
        case 'md': return 350
        case 'lg': return 450
        case 'xl': return 550
      }
    },
    width () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 120
        case 'sm': return 200
        case 'md': return 300
        case 'lg': return 400
        case 'xl': return 500
      }
    }
  }
}
</script>

<style>

</style>

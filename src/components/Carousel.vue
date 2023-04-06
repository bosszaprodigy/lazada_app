<template>
  <v-container fluid row>
    <v-row class="pa-1">
        <v-carousel
          cycle
          height="400"
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

  })
}
</script>

<style>

</style>

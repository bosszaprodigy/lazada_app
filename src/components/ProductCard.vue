<template>
  <v-hover v-slot="{ hover }">
      <v-card flat width="188" height="290" :elevation="hover ? 1 : 0" :class="{ 'on-hover': hover }">
        <v-img :src="product.image" aspect-ratio="1"></v-img>
        <v-card-title class ='pl-1'>{{ product.name }}</v-card-title>
        <v-card-subtitle>
          <v-row>
            <span class="orange--text text--darken-1">฿{{ product.price.toFixed(2) }}</span>
          </v-row>
          <v-row>
            <span class="text-decoration-line-through">THB{{product.priceDiscount.toFixed(2)}}</span>
          </v-row>
        </v-card-subtitle>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      hover: true
    }
  },
  methods: {

  }
}
</script>

<style scoped>

.v-card:not(.on-hover) {
  /* opacity: 0.6; */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
 }
</style>

<template>
  <v-container fluid>
    {{ formatTime(timeLeft) }}
    <v-card flat>
      <v-card-title>
        <span class="orange--text text--darken-1 mr-10">On Sale Now</span>
        <span class="mr-2">Ending in</span>
        <v-item-group class="justify-space-between">
          <v-container>
            <v-row class="justify-space-between">
              <v-card flat class="card-time text-center red white--text mr-1">
                {{ hours }}
              </v-card>
              <label class="mr-1">:</label>
              <v-card flat class="card-time text-center red white--text mr-1">
                {{ minutes }}
              </v-card>
              <label class="mr-1">:</label>
              <v-card flat class="card-time text-center red white--text mr-1">
                {{ seconds }}
              </v-card>
            </v-row>
          </v-container>
        </v-item-group>
        <v-spacer></v-spacer>
        <v-btn outlined color="orange">
          SHOP ALL PRODUCTS
        </v-btn>
      </v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        <v-row cols="12" md="4">
          <v-col v-for="product in featuredProducts" :key="product.id">
            <product-card :product="product" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
export default {
  name: 'flashsle',
  components: {
    ProductCard
  },
  data () {
    return {
      datas: [
        {
          id: 1,
          text: 'รสชาติของผลไม้ที่ยังไม่สุกงอม',
          img: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          price: 599,
          priceDiscount: 499,
          rate: 4
        },
        {
          id: 2,
          text: 'รสชาติของผลไม้ที่ยังไม่สุกงอม',
          img: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          price: 399,
          priceDiscount: 299,
          rate: 3.5
        },
        {
          id: 3,
          text: 'รสชาติของผลไม้ที่ยังไม่สุกงอม',
          img: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          price: 799,
          priceDiscount: 699,
          rate: 2
        },
        {
          id: 4,
          text: 'รสชาติของผลไม้ที่ยังไม่สุกงอม',
          img: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          price: 199,
          priceDiscount: 99,
          rate: 2.5
        },
        {
          id: 5,
          text: 'รสชาติของผลไม้ที่ยังไม่สุกงอม',
          img: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          price: 799,
          priceDiscount: 699,
          rate: 3
        },
        {
          id: 6,
          text: 'รสชาติของผลไม้ที่ยังไม่สุกงอม',
          img: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          price: 199,
          priceDiscount: 99,
          rate: 3.5
        }
      ],
      featuredProducts: [
        {
          id: 1,
          name: 'Product 1',
          image: 'https://picsum.photos/300/200?random=8',
          price: 199,
          priceDiscount: 99
        },
        {
          id: 2,
          name: 'Product 2',
          image: 'https://picsum.photos/300/200?random=7',
          price: 799,
          priceDiscount: 699
        },
        {
          id: 3,
          name: 'Product 3',
          image: 'https://picsum.photos/300/200?random=6',
          price: 450,
          priceDiscount: 250
        },
        {
          id: 4,
          name: 'Product 4',
          image: 'https://picsum.photos/300/200?random=19',
          price: 599,
          priceDiscount: 499
        },
        {
          id: 5,
          name: 'Product 5',
          image: 'https://picsum.photos/300/200?random=12',
          price: 1000,
          priceDiscount: 500
        }
        // {
        //   id: 6,
        //   name: 'Product 6',
        //   image: 'https://placehold.it/300x300',
        //   price: 19.99
        // }
      ],
      categories: ['Electronics', 'Clothing', 'Home', 'Sports'],
      products: [
        {
          name: 'Product 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet felis ac massa suscipit imperdiet.',
          price: 19.99,
          image: 'https://picsum.photos/300/200?random=1'
        },
        {
          name: 'Product 2',
          description: 'Nullam non tellus non est consectetur lobortis. Integer id leo vel mauris ultricies eleifend.',
          price: 29.99,
          image: 'https://picsum.photos/300/200?random=2'
        },
        {
          name: 'Product 3',
          description: 'Praesent feugiat turpis et lectus feugiat volutpat. Nulla aliquet tristique enim, quis dignissim leo mattis quis.',
          price: 39.99,
          image: 'https://picsum.photos/300/200?random=3'
        },
        {
          name: 'Product 4',
          description: 'Donec sed orci vel ex suscipit aliquam ut in arcu. Aenean ut ante sit amet dolor venenatis lacinia.',
          price: 49.99,
          image: 'https://picsum.photos/300/200?random=4'
        },
        {
          name: 'Product 5',
          description: 'In in augue eget sapien auctor dictum a eget arcu. Nulla sit amet justo odio.',
          price: 59.99,
          image: 'https://picsum.photos/300/200?random=5'
        },
        {
          name: 'Product 6',
          description: 'Mauris volutpat interdum sapien, eu commodo tortor. Vivamus sagittis, felis ut finibus commodo.',
          price: 69.99,
          image: 'https://picsum.photos/300/200?random=6'
        },
        {
          name: 'Product 7',
          description: 'Ut et mi euismod, maximus purus vel, feugiat sem. Curabitur ullamcorper, nibh in aliquam.',
          price: 79.99,
          image: 'https://picsum.photos/300/200?random=7'
        },
        {
          name: 'Product 8',
          description: 'Sed tincidunt vestibulum nibh, at ultrices augue. Vivamus scelerisque venenatis velit, sed ultrices augue commodo eget.',
          price: 89.99,
          image: 'https://picsum.photos/300/200?random=8'
        },
        {
          name: 'Product 9',
          description: 'Fusce eget nibh sed velit sodales tincidunt. Pellentesque euismod blandit est, ut feugiat eros hendrerit ut.',
          price: 99.99,
          image: 'https://picsum.photos/300/200?random=9'
        },
        {
          name: 'Product 10',
          description: 'Nam rhoncus odio vitae tortor auctor, quis porttitor dolor consequat. Duis vel aliquet purus.',
          price: 109.99,
          image: 'https://picsum.photos/300/200?random=10'
        }
      ],
      endTime: new Date().getTime() + 24 * 60 * 60 * 1000,
      timeLeft: 0,
      timerInterval: null,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  mounted () {
    this.timerInterval = setInterval(this.updateTimeLeft, 1000)
  },
  beforeUnmount () {
    clearInterval(this.timerInterval)
  },
  methods: {
    updateTimeLeft () {
      const now = new Date().getTime()
      const timeLeft = this.endTime - now

      if (timeLeft <= 0) {
        clearInterval(this.timerInterval)
        this.timeLeft = 0
      } else {
        this.timeLeft = timeLeft
      }
    },
    formatTime (time) {
      const hours = Math.floor(time / (60 * 60 * 1000))
      const minutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000))
      const seconds = Math.floor((time % (60 * 1000)) / 1000)

      this.hours = hours
      this.minutes = minutes
      this.seconds = seconds
      // return `${hours}:${minutes
      //   .toString()
      //   .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }
  }

}
</script>

<style>
.box {
  width: 1380px;
  height: 375px;
}
.card-time {
  width: 40px;
  height: 35px;
}
</style>

<template>
  <v-container fluid>
    <span>Just for You</span>
        <v-row ma-1>
          <v-col v-for="(product, index) in products" :key="index" wrap>
            <v-hover v-slot="{ hover }">
              <v-card flat :elevation="hover ? 1 : 0" :class="{ 'on-hover': hover }" width="188" height="290">
                <v-img :src="product.image" height="180px"></v-img>
                <span class ='pl-1'>{{ product.name }}</span>
                <v-card-subtitle class ='ml-1'>
                  <v-row>
                    <span class="orange--text text--darken-1">฿{{ product.price.toFixed(2) }}</span>
                  </v-row>
                  <v-row>
                    <span class="text-decoration-line-through">THB{{product.priceDiscount.toFixed(2)}}</span>
                  </v-row>
                </v-card-subtitle>
                  <v-row justify-start fill-height>
                    <v-col class ='ml-1'>
                      <v-rating
                        v-model="product.rate"
                        background-color="grey"
                        color="yellow darken-3"
                        half-increments
                        length="5"
                        size="13"
                        readonly
                        dense
                      ></v-rating>
                    </v-col>
                    <v-col justify-start>
                      <span class="grey--text text--lighten-1 text-caption mr-2">
                        ({{ product.rate }})
                      </span>
                    </v-col>
                  </v-row>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
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
      categories: ['Electronics', 'Clothing', 'Home', 'Sports'],
      products: [
        {
          name: 'Product 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet felis ac massa suscipit imperdiet.',
          price: 250,
          priceDiscount: 150,
          image: 'https://picsum.photos/300/200?random=1',
          rate: 4
        },
        {
          name: 'Product 2',
          description: 'Nullam non tellus non est consectetur lobortis. Integer id leo vel mauris ultricies eleifend.',
          price: 290,
          priceDiscount: 150,
          image: 'https://picsum.photos/300/200?random=2',
          rate: 1.5
        },
        {
          name: 'Product 3',
          description: 'Praesent feugiat turpis et lectus feugiat volutpat. Nulla aliquet tristique enim, quis dignissim leo mattis quis.',
          price: 390,
          priceDiscount: 150,
          image: 'https://picsum.photos/300/200?random=3',
          rate: 2.5
        },
        {
          name: 'Product 4',
          description: 'Donec sed orci vel ex suscipit aliquam ut in arcu. Aenean ut ante sit amet dolor venenatis lacinia.',
          price: 490,
          priceDiscount: 150,
          image: 'https://picsum.photos/300/200?random=4',
          rate: 4
        },
        {
          name: 'Product 5',
          description: 'In in augue eget sapien auctor dictum a eget arcu. Nulla sit amet justo odio.',
          price: 590,
          priceDiscount: 150,
          image: 'https://picsum.photos/300/200?random=5',
          rate: 3.5
        },
        {
          name: 'Product 6',
          description: 'Mauris volutpat interdum sapien, eu commodo tortor. Vivamus sagittis, felis ut finibus commodo.',
          price: 690,
          priceDiscount: 150,
          image: 'https://picsum.photos/300/200?random=6',
          rate: 4
        },
        {
          name: 'Product 7',
          description: 'Ut et mi euismod, maximus purus vel, feugiat sem. Curabitur ullamcorper, nibh in aliquam.',
          price: 790,
          priceDiscount: 150,
          image: 'https://picsum.photos/300/200?random=7',
          rate: 1
        },
        {
          name: 'Product 8',
          description: 'Sed tincidunt vestibulum nibh, at ultrices augue. Vivamus scelerisque venenatis velit, sed ultrices augue commodo eget.',
          price: 890,
          priceDiscount: 150,
          image: 'https://picsum.photos/300/200?random=8',
          rate: 2
        },
        {
          name: 'Product 9',
          description: 'Fusce eget nibh sed velit sodales tincidunt. Pellentesque euismod blandit est, ut feugiat eros hendrerit ut.',
          price: 990,
          priceDiscount: 150,
          image: 'https://picsum.photos/300/200?random=9',
          rate: 3.5
        },
        {
          name: 'Product 10',
          description: 'Nam rhoncus odio vitae tortor auctor, quis porttitor dolor consequat. Duis vel aliquet purus.',
          price: 1090,
          priceDiscount: 150,
          image: 'https://picsum.photos/300/200?random=10',
          rate: 5
        }
      ]
    }
  }
}
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title>
            Featured Products
          </v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-card-text>
            <v-row>
              <v-col v-for="product in featuredProducts" :key="product.id" cols="12" md="4">
                <product-card :product="product" />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- <v-col cols="12" md="4">
        <v-card>
          <v-card-title>
            Categories
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="category in categories" :key="category.id">
                <v-list-item-title>
                  {{ category.name }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  components: {
    ProductCard
  },
  data () {
    return {
      featuredProducts: [
        {
          id: 1,
          name: 'Product 1',
          image: 'https://placehold.it/300x300',
          price: 9.99
        },
        {
          id: 2,
          name: 'Product 2',
          image: 'https://placehold.it/300x300',
          price: 14.99
        },
        {
          id: 3,
          name: 'Product 3',
          image: 'https://placehold.it/300x300',
          price: 19.99
        }
      ],
      categories: [
        {
          id: 1,
          name: 'Category 1'
        },
        {
          id: 2,
          name: 'Category 2'
        },
        {
          id: 3,
          name: 'Category 3'
        }
      ]
    }
  }
}
</script>

<template>
  <v-card flat max-width="250">
    <v-row>
      <ul style="list-style-type:none;" >
        <li v-for=" ( item, i ) in items" :key = 'i'>
          <v-hover>
            <template v-slot:default="{ hover }">
              <span :class="{ 'orange-text': hover }">{{ item.text }}</span>
            </template>
          </v-hover>
        </li>
      </ul>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: 'Electronic Devices'
      },
      {
        text: 'Electronic Accessories'
      },
      {
        text: 'TV & Home Appliances'
      },
      {
        text: 'Health & Beauty'
      },
      {
        text: 'Babies & Toys'
      },
      {
        text: 'Groceries & Pets'
      },
      {
        text: 'Home & Lifestyle'
      },
      {
        text: "Women's Fashion & Accessories"
      },
      {
        text: "Men's Fashion & Accessories"
      },
      {
        text: "Kid's Fashion & Accessories"
      },
      {
        text: 'Sports & Travel'
      },
      {
        text: 'Automotive & Motorcycles'
      }
    ],
    model: 1,
    hover: false
  })
}
</script>

<style>
 .orange-text {
    color: orange;
  }
</style>

<template>
  <v-container fluid>
      <Carousel/>
    <br>
    <!-- Button -->
      <v-layout justify-space-around>
        <v-item-group>
          <div class="text-center">
            <v-btn
              rounded
              large
              class="mr-2"
              color="#FFFFFF"
            >
            <img class='image' src="../assets/LazMall.png" alt="LazMall" />
              LazMall
            </v-btn>
            <v-btn
              rounded
              large
              class="mr-2"
              color="#FFFFFF"
            >
            <img class='image' src="../assets/Vouchers.png" alt="Vouchers" />
              Vouchers
            </v-btn>
            <v-btn
              rounded
              large
              class="mr-2"
              color="#FFFFFF"
            >
            <img class='image' src="../assets/Top-Up.png" alt="Top-Up" />
              Top-Up, Bills&Food
            </v-btn>
            <v-btn
              rounded
              large
              class="mr-2"
              color="#FFFFFF"
            >
            <img class='image' src="../assets/LazBlog.png" alt="LazBlog" />
            LazBlog
            </v-btn>
            <v-btn
              rounded
              large
              class="mr-2"
              color="#FFFFFF"
            >
            <img class='image' src="../assets/Lazpick.png" alt="Lazpick" />
            Lazpick
            </v-btn>
          </div>
        </v-item-group>
      </v-layout>
    <br>
      <FlashSale/>
    <br>
    <JustForYou/>
  </v-container>
</template>

<script>

export default {
  name: 'mainpage',
  components: {
    Carousel: () => import('@/components/Carousel'),
    FlashSale: () => import('@/components/FlashSale'),
    JustForYou: () => import('@/components/JustForYou')
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

.image {
  width: 32px;
  height: 32px;
  border-radius: 16px;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  /* box-sizing: border-box;
  padding-top: 11px; */
}

.search-box {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: 20px;
}

.search-box input {
  border: none;
  padding: 10px;
  width: 300px;
  font-size: 16px;
}

.search-box button {
  background-color: #f90;
  color: #fff;
  border: none;
  border-radius: 0 4px 4px 0;
  padding: 10px;
  cursor: pointer;
}

.account,
.cart {
  display: flex;
  align-items: center;
}

.account p,
.cart p {
  margin-left: 10px;
}

.categories {
  background-color: #f2f2f2;
  padding: 20px;
}

.categories ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}

.categories ul li {
  margin-right: 10px;
}

.categories ul li a {
  color: #666;
  text-decoration: none;
}

.carousel {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.carousel img {
  width: 400px;
}

.products {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.product-card {
  width: 200px;
  text-align: center;
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
}

.product-card h3 {
  font-size: 16px;
  margin-bottom: 10px;
}

.product-card p {
  font-size: 14px;
  color: #f90;
}
</style>

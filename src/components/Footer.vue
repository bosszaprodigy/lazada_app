<template>
  <v-footer height="120" color="#FFFFFF">
    <v-container align-center justify-center row fill-height>
      <v-col>
        <p>Lazada Southeast Asia</p>
          <v-btn class="ma-2" outlined fab x-small>
            <!-- indo -->
            <v-img class='image' src="../assets/indo.png"></v-img>
          </v-btn>
          <v-btn class="ma-2" outlined fab x-small>
            <!-- malay -->
            <v-img class='image' src="../assets/Malaysia.png"></v-img>
          </v-btn>
          <v-btn class="ma-2" outlined fab x-small>
            <!-- pilipinas -->
            <v-img class='image' src="../assets/pilipinas.jpg"></v-img>
          </v-btn>
          <v-btn class="ma-2" outlined fab x-small>
            <!-- singapore -->
            <v-img class='image' src="../assets/singapore.png"></v-img>
          </v-btn>
          <v-btn class="ma-2" outlined fab x-small>
            <!-- thai -->
            <v-img class='image' src="../assets/thai.png"></v-img>
          </v-btn>
          <v-btn class="ma-2" outlined fab x-small>
            <!-- vietnam -->
            <v-img class='image' src="../assets/vietnam.png"></v-img>
          </v-btn>
      </v-col>
      <v-col >
        <p>Follow Us</p>
        <v-btn class="ma-2" outlined fab x-small>
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn class="ma-2" outlined fab x-small>
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn class="ma-2" outlined fab x-small>
          <v-icon>mdi-google-plus</v-icon>
        </v-btn>
        <v-btn class="ma-2" outlined fab x-small>
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn class="ma-2" outlined fab x-small>
          <v-icon>mdi-youtube</v-icon>
        </v-btn>
        <v-btn class="ma-2" outlined fab x-small>
          <v-icon>mdi-pinterest</v-icon>
        </v-btn>
      </v-col>
      <v-col >
        <span>&copy; Lazada {{ new Date().getFullYear() }}</span>
      </v-col>
  </v-container>
  </v-footer>
</template>
<script>
export default {
  name: 'Footer',
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
</style>

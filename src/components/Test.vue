<template>
  <div>
    <h3>Flash Sale</h3>
    <v-row>
      <!-- flat -->
      <v-card class="box grey lighten-5">
        <!-- <v-container fill-height class="grey lighten-5"> -->
          <!-- <v-card-title>
            <h5 class="orange--text text--darken-1">On Sale Now</h5>
            <h5>Ending in</h5>
            <v-item-group class="justify-space-between">
              <v-container>
                <v-row class="justify-space-between">
                  <v-card flat class="card-time text-center red">
                    00
                  </v-card>
                  <label>:</label>
                  <v-card flat class="card-time text-center red">
                    02
                  </v-card>
                  <label>:</label>
                  <v-card flat class="card-time text-center red">
                    50
                  </v-card>
                </v-row>
              </v-container>
            </v-item-group>
            <v-spacer></v-spacer>
            <v-btn outlined color="orange">
              SHOP ALL PRODUCTS
            </v-btn>
          </v-card-title> -->

          <!-- <v-row class="d-flex justify-start" >
              <v-row xs6 px-1>
                <h5 px-1 class="orange--text text--darken-1">On Sale Now</h5>
              </v-row>
              <v-row px-2 pt-1>
                <h5>Ending in</h5>
              </v-row>
            <v-spacer></v-spacer>
            <v-col cols="6" md="4">
              <v-btn class="pa-2" outlined color="orange">
                SHOP ALL PRODUCTS
              </v-btn>
            </v-col>
          </v-row>

          <v-divider class="mx-4"></v-divider> -->

            <!-- <v-row  no-gutters class="d-flex justify-space-between">
              <v-col style="height: 70px;">
                <v-card class="pa-2" outlined tile>
                  One of three columns
                </v-card>
              </v-col>
              <v-col style="height: 70px;" class="px-2">
                <v-card class="pa-2" outlined tile>
                  <v-btn class="pa-2" outlined color="orange">
                    SHOP ALL PRODUCTS
                  </v-btn>
                </v-card>
              </v-col>
            </v-row> -->

            <v-card class="d-flex" color="grey lighten-2" flat tile>
              <!-- <v-card class="pa-2" outlined tile> <h5 px-1 class="orange--text text--darken-1">On Sale Now</h5> </v-card> -->
              <v-col md="1">
                <v-row>
                  <h5 px-1 class="orange--text text--darken-1">On Sale Now</h5>
                </v-row>
              </v-col>
              <v-col>
                <v-row>
                  <h5>Ending in</h5>
                </v-row>
              </v-col>
              <!-- <v-col> -->
                <v-row>
                  <v-item-group class="justify-space-between">
                    <!-- <v-container> -->
                      <v-row class="justify-space-between">
                        <v-card flat class="card-time text-center red">
                          00
                        </v-card>
                        <label>:</label>
                        <v-card flat class="card-time text-center red">
                          02
                        </v-card>
                        <label>:</label>
                        <v-card flat class="card-time text-center red">
                          50
                        </v-card>
                      </v-row>
                    <!-- </v-container> -->
                  </v-item-group>
                </v-row>
              <!-- </v-col> -->

              <!-- <v-card class="pa-2" outlined tile> <h5>Ending in</h5> </v-card> -->

              <v-card class="pa-2 ml-auto" outlined tile>
                <v-btn class="pa-2" outlined color="orange">
                  SHOP ALL PRODUCTS
                </v-btn>
              </v-card>
            </v-card>

          <!-- <v-row>
            <v-card
              class="my-5"
              width="188"
              height="290"
              v-for="n in datas" :key="n.id"
            >
              <v-img height="188" width="188" src="https://picsum.photos/510/300?random"></v-img>
              <v-card-title class="text-subtitle-1" >{{n.text}}</v-card-title>
              <v-card-text>
                <div class="text-subtitle-1 orange--text text--darken-1">฿{{n.priceDiscount}} </div>
                <v-row>
                  <div class="text-decoration-line-through align-self-center">฿{{n.price}}</div>
                  <div>-50%</div>
                </v-row>
              </v-card-text>
            </v-card>
          </v-row> -->
      </v-card>
    </v-row>
  </div>
</template>

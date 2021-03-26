<template>
  <v-dialog v-model="dialog" max-width="290" :style="{ zIndex: options.zIndex }" @keydown.esc="cancel">
     <v-card>
        <v-card-title class="headline">
          {{message}}
        </v-card-title>


        <form @submit.prevent="submit">
        <v-container>
        <v-text-field :rules="rules" label="Pret" required v-model="number"></v-text-field>
       
        </v-container>
 <v-card
    flat
    color="transparent"
  >

    <v-card-text>
      <span
      style="text-align:center;"
            class="display-2 font-weight-light"
          >x {{slider}}</span>
      <v-row>
        <v-col class="pr-4">
          <v-slider
        v-model="slider"
        :color="color"
        track-color="grey"
        always-dirty
        min="1"
        max="50"
      >
        <template v-slot:prepend>
          <v-icon
            :color="color"
            @click="decrement"
          >
            mdi-minus
          </v-icon>
        </template>

        <template v-slot:append>
          <v-icon
            :color="color"
            @click="increment"
          >
            mdi-plus
          </v-icon>
        </template>
      </v-slider>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>


        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click.native="cancel"
          >
            Cancel
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="submit"
          >
            Ok
          </v-btn>
        </v-card-actions>
        </form>
      </v-card>
      
  </v-dialog>
  
</template>

<script>
import { db } from "../firebase/db.js";
/**
 * Vuetify Confirm Dialog component
 *
 * Insert component where you want to use it:
 * <confirm ref="confirm"></confirm>
 *
 * Call it:
 * this.$refs.confirm.open('Delete', 'Are you sure?', { color: 'red' }).then((confirm) => {})
 * Or use await:
 * if (await this.$refs.confirm.open('Delete', 'Are you sure?', { color: 'red' })) {
 *   // yes
 * }
 * else {
 *   // cancel
 * }
 *
 * Alternatively you can place it in main App component and access it globally via this.$root.$confirm
 * <template>
 *   <v-app>
 *     ...
 *     <confirm ref="confirm"></confirm>
 *   </v-app>
 * </template>
 *
 * mounted() {
 *   this.$root.$confirm = this.$refs.confirm.open
 * }
 */
export default {
  
  data: () => ({
    dialog: false,
    resolve: null,
    reject: null,
    message: null,
    title: null,
    number: null,
    min: 1,
        max: 100,
        slider: 1,
     rules: [
        value => !!value || 'Required.',
        value => (value || '').length <= 20 || 'Max 20 characters',
        value => {
          const pattern = /^(\d*\.?\d*)$/
          return pattern.test(value) || '34.23, 30 , plm cam asa sa arate'
        },
      ],
    options: {
      color: 'primary',
      width: 290,
      zIndex: 200
    }
  }),
  methods: {
    open(title, message, options) {
      this.dialog = true
      this.title = title
      this.message = message
      this.options = Object.assign(this.options, options)
      return new Promise((resolve, reject) => {
        this.resolve = resolve
        this.reject = reject
      })
    },
    submit() {
      const pattern = /^(\d*\.?\d*)$/
      let a = pattern.test(this.number)
      if (this.number != null && a != false){
      let b = this.price[0].pret
      let c = b + this.number * this.slider
      db.collection("price").doc('pr').update({pret: c })
      db.collection("ToDos").doc(this.title).update({price: this.number * this.slider });
      this.resolve(true)
      this.slider=1
      this.dialog = false
      this.number = null
      }
    },
    cancel() {
      this.resolve(false)
      this.dialog = false
    },
    decrement () {
        this.slider--
      },
      increment () {
        this.slider++
      },
  },
  firestore: {
    ToDos: db.collection("ToDos"),
    price: db.collection("price"),
  },
}
</script>
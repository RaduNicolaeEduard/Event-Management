<template>
  
  <v-container>
      <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        style="margin-top:1em;margin-bottom:2em"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Add Concentrare
        </v-btn>
      </template>

      <v-card>
        <v-toolbar
          dark
          
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Add</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="addItem"
            >
              Submit
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container>
        <v-list
          three-line
          subheader
        >

          <v-text-field
          v-model="title"
            label="Title"
            filled
          ></v-text-field>

          <v-text-field
            v-model="subtitle"
            label="Subtitle"
            filled
          ></v-text-field>

          <v-textarea
          v-model="text"
          filled
          name="input-7-4"
          label="Text"
          value=""
        ></v-textarea>
        </v-list>
         <div class="my-4 subtitle-1">
             nu este necesar sa completati tot :D
      </div>

        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
  <vuuri v-model="items" drag-enabled :get-item-width="getItemWidth" :get-item-height ="getItemHeight" >
      <template #item="{ item }" >
      <v-card
        style="margin-right: 1em"
        elevation="2"
        
    >
    <v-card-title>
        {{item.title}}
    </v-card-title>
    <v-card-subtitle>
        {{item.subtitle}}
    </v-card-subtitle>
    <v-card-text style="overflow: hidden;">
        {{item.text}}
    </v-card-text>
    <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon @click="deleteToDo(item.id)">
                <v-icon color="red lighten-2">mdi-delete</v-icon>
              </v-btn>
            </v-card-actions>
   

    </v-card>
      </template>
</vuuri>



  </v-container>

</template>

<script>
import { db } from "../firebase/db.js";
import Vue from 'vue'
import vuuri from 'vuuri';
Vue.component('vuuri', vuuri)
export default {
components: { 
        vuuri,
    },
    data () {
      return {  
        title:null,
        subtitle:null,
        text:null,
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        items: [],
      }
    },
    methods: {
        async deleteToDo(id) {
        db.collection("keep").doc(id).delete();
        },
        async addItem() {
         await db.collection("keep").add({
                subtitle:this.subtitle,
                text:this.text,
                title:this.title
         })
         this.dialog=false;
         this.text=null;
         this.title=null;
         this.subtitle=null;
        },
        getItemWidth(item){
            return `${item.width}%`
        },
        getItemHeight(item) {
        return `${item.height}px`
        },
        ha(){
            console.log(this.items);
        }
    },
    firestore: {
        items: db.collection("keep"),
    }
}
</script>

<style>

</style>
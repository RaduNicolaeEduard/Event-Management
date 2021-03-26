<template>
  <div>
    
     <v-container>
       <v-btn @click="savefile" style="margin-left:50%; margin-top:2em ;margin-bottom:2em">
         Download
       </v-btn>
      <v-row dense>
        <v-col
          v-for="n in Songs"
          :key="n"
          cols="4"
        >
          <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="n.thumbnail"
    >

    </v-img>

    <v-card-title class="pb-0">
      {{n.title}}
    </v-card-title>

  

    <v-card-actions>
      <v-btn
      target="_blank"
      :href="n.link"
        color="orange"
        text
      >
        Open
      </v-btn>

      <v-btn
        @click="deleteTo(n.id)"
        color="orange"
        text
      >
        Delete
      </v-btn>
    </v-card-actions>
  </v-card>
        </v-col>
 </v-row>
   </v-container>
  </div>
</template>

<script>
import {db} from "../firebase/db.js";
export default {
  data: ()=>({
    Songs:[],
  }),
  methods:{
    savefile(){
    const data = JSON.stringify(this.Songs)
    const blob = new Blob([data], {type: 'text/plain'})
    const e = document.createEvent('MouseEvents'),
    a = document.createElement('a');
    a.download = "Songs.json";
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
    e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
    },
    deleteTo(id){
      db.collection("Songs").doc(id).delete();
    }
  },
  firestore: {
        Songs: db.collection("Songs")
    },
}
</script>

<style>

</style>
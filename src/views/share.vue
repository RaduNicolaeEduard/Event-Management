<template>
  <div>
      <v-progress-linear
      indeterminate
      color="info"
      style="margin-top:1px"
    ></v-progress-linear>
    <v-alert
      border="top"
      colored-border
      type="info"
      elevation="2"
      max-width="344" class="mx-auto" style="margin-top:2em"
    >
    Uploading song
    </v-alert>
    
    <v-card class="mx-auto" max-width="344" style="margin-top:2em">
      <v-card-text>
        <p class="display-1 text--primary">{{ title }}</p>
        <div class="text--primary">

        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { db } from "../firebase/db.js";
export default {
  data() {
    return {
      title: "",
      text: "",
      url: "",
    };
  },
  mounted() {
    const parsedUrl = new URL(window.location);
    const thumbnail = "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    this.title = parsedUrl.searchParams.get("title")
    this.text = parsedUrl.searchParams.get("text");

    if(this.text!=""){
    db.collection("Songs").add({
        title: this.title,
        thumbnail: thumbnail,
        link: this.text,
      });

  }
  },
    created(){
       setTimeout( () => this.$router.push({ path: '/'}), 4000);
            }
};
</script>

<style>
</style>
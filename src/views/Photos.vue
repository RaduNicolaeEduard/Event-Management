<template>
  <div>
    <v-card style="margin-top: 2em" class="mx-auto" max-width="800">
      <v-img
        src="../assets/photos/Cabana (254 of 256).jpg"
        height="200px"
      ></v-img>

      <v-card-title>Cabana Munte</v-card-title>

      <v-card-subtitle> </v-card-subtitle>

      <v-card-actions>

        <v-btn color="orange lighten-2" @click="open('https://photos.app.goo.gl/xRRs2DiWM3ziFNkE6')" text> Google Photos </v-btn>

        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
    <v-card style="margin-top: 2em" class="mx-auto" max-width="800">
      <v-img
        src="../assets/photos/Babana (20 of 57).jpg"
        height="200px"
      ></v-img>

      <v-card-title>Lma❤️</v-card-title>

      <v-card-subtitle> </v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange lighten-2" @click="open('https://youtu.be/uQ_cI4dGDyw')" text> Video </v-btn>
        <v-btn color="orange lighten-2" @click="open('https://photos.app.goo.gl/8mEYU4Vd9drom3pQ7')" text> Google Photos </v-btn>

        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
    <v-card style="margin-top: 2em" class="mx-auto" max-width="800">
      <v-img
        src="../assets/photos/Babana (19 of 20).jpg"
        height="200px"
      ></v-img>

      <v-card-title> Beuta Robi </v-card-title>

      <v-card-subtitle> </v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange lighten-2" @click="open('https://drive.google.com/drive/folders/1nDkczETpS8krIYeWyBFDFUModDvzCnLL?usp=sharin')" text> Google Drive </v-btn>
        <v-btn color="orange lighten-2" @click="open('https://photos.app.goo.gl/m6C34oTStDkaS9ZQ9')" text> Google Photos </v-btn>

        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
    
  </div>
  
</template>

<script>
export default {
  methods: {
    open(a) {
      window.open(a, "_blank");
    },
  },
};
</script>

<style>
</style>
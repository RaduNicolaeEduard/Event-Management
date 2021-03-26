<template>
  <div class="home">
    <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4">{{name[0].title}} {{name[0].title_sr}}</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-200">Countdown</p>
    </div>
    <countdown date="2021-2-26 00:00:00"></countdown>
  </div>
  </div>
</template>

<script>

import { db } from "../firebase/db.js";
export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      name:[],
      
    };
  },
  firestore: {
    name: db.collection("name"),
  },
}
</script>

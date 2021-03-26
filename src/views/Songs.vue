<template>
  <div>
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
            style="margin-top: 3em; color: white"
            v-bind="attrs"
            v-on="on"
          >
            Add Songs
          </v-btn>
        </template>
        <v-card>
          <v-toolbar>
            <v-btn icon @click="close">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Add Songs</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items> </v-toolbar-items>
          </v-toolbar>
          <!-- <v-btn @click="authenticate().then(loadClient)" v-if="this.loada!=true" style="display: block; -->
          <v-btn
            @click="authenticate().then(loadClient)"
            style="
              display: block;
              margin-left: auto;
              margin-right: auto;
              margin-top: 2em;
              color: white;
            "
            >Sign In</v-btn
          >
          <v-subheader class="d-flex justify-center"
            >Daca Nu mere apasa pe button</v-subheader
          >
          <!-- <v-list v-if="this.loada!=false" -->
          <v-list three-line subheader>
            <v-card-title>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                v-on:keyup.enter="execute()"
              ></v-text-field>
            </v-card-title>

            <v-subheader>Videos</v-subheader>
            <v-container>
              <v-row no-gutters v-if="r != ''">
                <v-col v-for="a in r" :key="a" cols="12" sm="4">
                  <v-radio-group v-model="radioGroup">
                    <v-card
                      style="margin-top: 2em"
                      class="mx-auto"
                      max-width="344"
                    >
                      <v-img
                        :src="a.snippet.thumbnails.high.url"
                        height="200px"
                      ></v-img>

                      <v-card-title>
                        {{ a.snippet.title }}
                      </v-card-title>

                      <v-card-actions>
                        <v-btn
                          style="
                            color: white;
                            margin-left: auto;
                            margin-right: auto;
                          "
                          elevation="2"
                          @click="
                            newitem(
                              a.snippet.title,
                              a.id.videoId,
                              a.snippet.thumbnails.high.url
                            )
                          "
                          >add</v-btn
                        >
                      </v-card-actions>
                    </v-card>
                  </v-radio-group>
                </v-col>
              </v-row>
            </v-container>
          </v-list>
        </v-card>
      </v-dialog>
    </v-row>
    <v-container>
      <v-row no-gutters>
        <v-col v-for="n in Songs" :key="n.id" cols="12" sm="4">
          <v-card style="margin-top: 2em" class="mx-auto" max-width="344">
            <v-img
              @click="open(n.link)"
              :src="n.thumbnail"
              height="200px"
            ></v-img>

            <v-card-title>
              {{ n.title }}
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    </v-container>
  </div>
</template>

<script>

import { gapi } from "gapi-script";
import { db } from "../firebase/db.js";

gapi.load("client:auth2", function () {
  gapi.auth2.init({
    client_id:
      "604429312844-fqc4hgvevkbdssju7k3tvjgosafcelgv.apps.googleusercontent.com",
  });
});
export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      search: "",
      widgets: false,
      checkbox: true,
      radioGroup: 0,
      key: "AIzaSyCUibZimX_rNA1JFpStf5_EGyKSSV94ZKo",
      r: [],
      Songs: [],
      loada: false,
    };
  },

  methods: {
    
    open(a) {
      window.open(a, "_blank");
    },
    loadClient() {
      gapi.client.setApiKey("AIzaSyCUibZimX_rNA1JFpStf5_EGyKSSV94ZKo");
      return gapi.client
        .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(
          function () {
            console.log("GAPI client loaded for API");
          },
          function (err) {
            console.error("Error loading GAPI client for API", err);
          }
        );
    },
    async execute() {
      this.isUpdating = true;
      console.log(this.r);
      let a = await gapi.client.youtube.search.list({
        part: ["snippet"],
        maxResults: 10,
        q: this.search,
      });

      this.r = a.result.items;
      console.log(this.r);
    },
    authenticate() {
      return gapi.auth2
        .getAuthInstance()
        .signIn({ scope: "https://www.googleapis.com/auth/youtube.force-ssl" })
        .then(
          () => {
            console.log("Sign-in successful" + self.loada);
          },
          function (err) {
            console.error("Error signing in", err);
          }
        );
    },
    close() {
      this.dialog = false;
      this.r = [];
    },
    

    async newitem(title, id, thumbnail) {
      let link = "https://www.youtube.com/watch?v=" + id;

      await db.collection("Songs").add({
        title: title,
        thumbnail: thumbnail,
        link: link,
      });

      this.r = { data: { items: [] } };
      this.search="";

    },
  },
  firestore: {
    Songs: db.collection("Songs"),
  },
};
</script>

<style>
</style>
<template>
  <div>
    <v-chip
      class="ma-2"
      style="position:fixed"
    >
      Price: {{this.price[0].pret}} lei
    </v-chip>

    <div class="text-center ma-2">
      <v-snackbar v-model="snackbar">
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
    <confirm ref="confirm"></confirm>
    <price ref="price"></price>
    <section class="body-font">
      <div class=" px-2 py-10 mx-auto">
        <div class="text-center mb-20">
          <h1
            class="sm:text-3xl text-2xl font-medium text-center title-font mb-1"
          >
            Shopping List
          </h1>
        </div>
      </div>
    </section>
    <v-row align="center"  class="hope">
      <v-col cols="4" class="d-flex">
        <v-text-field
          label="Product"
          v-model="newItem"
          v-on:keyup.enter="addItem"
        ></v-text-field>
      </v-col>
      <v-col cols="4" class="d-flex">
        <v-select :items="items" label="Type" @change="selection"></v-select>
      </v-col>
      <v-col cols="1">
        <v-btn large @click="addItem">Add</v-btn>
      </v-col>
    </v-row>

    <section
      class="body-font"
      v-if="(Mancaree != '') | (Mancareeuncompleted != '')"
    >
      <div >
        <div class="text-center mb-20">
          <h1
            class="sm:text-3xl text-2xl font-medium text-center title-font  mb-2"
          >
            Mancare
          </h1>
        </div>
        <div
          class="special"
          v-for="ToDo in Mancaree"
          :key="ToDo.id"
        >
          <div class="a">
            <div class="rounded flex p-4 h-full items-center abc">
              <svg
                v-if="ToDo.completed == true"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <input 
              v-model="ToDo.name"
                
                @keyup.enter="updateEvent(ToDo.id,ToDo.name);$event.target.blur()"
                v-focus
              class="title-font font-medium">
              <div style="margin-left: auto">
                <v-btn
                  icon
                  @click="CompleteToDo(ToDo.id, ToDo.completed,ToDo.name)"
                >
                  <v-icon>mdi-book-check</v-icon>
                </v-btn>
                <v-btn icon color="red lighten-2" @click="deleteToDo(ToDo.id)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </div>
        <div
          class="special"
          v-for="ToDo in Mancareeuncompleted"
          :key="ToDo.id"
        >
          <div class="">
            <div class="abc rounded flex p-4 h-full items-center">
              <svg
                v-if="ToDo.completed == true"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <input 
              v-model="ToDo.name"
                
                @keyup.enter="updateEvent(ToDo.id,ToDo.name);$event.target.blur()"
                v-focus
              class="title-font font-medium">
              <div style="margin-left: auto">
                <v-btn
                  icon
                  @click="CompleteToDo(ToDo.id, ToDo.completed,ToDo.name)"
                >
                  <v-icon>mdi-book-check</v-icon>
                </v-btn>
                <v-btn icon color="red lighten-2" @click="deleteToDo(ToDo.id)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="body-font"
      v-if="(Beut != '') | (Beutuncompleted != '')"
    >
      <div class="  py-10 mx-auto">
        <div class="text-center mb-20">
          <h1
            class="sm:text-3xl text-2xl font-medium text-center title-font  mb-2"
          >
            Bautura
          </h1>
        </div>
        <div
          class="special"
          v-for="ToDo in Beut"
          :key="ToDo.id"
        >
          <div class="">
            <div class="abc rounded flex p-4 h-full items-center">
              <svg
                v-if="ToDo.completed == true"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <input 
              v-model="ToDo.name"
                
                @keyup.enter="updateEvent(ToDo.id,ToDo.name);$event.target.blur()"
                v-focus
              class="title-font font-medium">
              <div style="margin-left: auto">
                <v-btn
                  icon
                  @click="CompleteToDo(ToDo.id, ToDo.completed,ToDo.name)"
                >
                  <v-icon>mdi-book-check</v-icon>
                </v-btn>
                <v-btn icon color="red lighten-2" @click="deleteToDo(ToDo.id)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </div>
        <div
          class="special"
          v-for="ToDo in Beutuncompleted"
          :key="ToDo.id"
        >
          <div class="">
            <div class="abc rounded flex p-4 h-full items-center">
              <svg
                v-if="ToDo.completed == true"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <input 
              v-model="ToDo.name"
                
                @keyup.enter="updateEvent(ToDo.id,ToDo.name);$event.target.blur()"
                v-focus
              class="title-font font-medium">
              <div style="margin-left: auto">
                <v-btn
                  icon

                  @click="CompleteToDo(ToDo.id, ToDo.completed,ToDo.name)"
                >
                  <v-icon>mdi-book-check</v-icon>
                </v-btn>
                <v-btn icon color="red lighten-2" @click="deleteToDo(ToDo.id)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="body-font"
      v-if="(Snack != '') | (Snackuncompleted != '')"
    >
      <div class="  py-10 mx-auto">
        <div class="text-center mb-20">
          <h1
            class="sm:text-3xl text-2xl font-medium text-center title-font  mb-2"
          >
            Snacks
          </h1>
        </div>
        <div
          class="special"
          v-for="ToDo in Snack"
          :key="ToDo.id"
        >
          <div class="">
            <div class="abc rounded flex p-4 h-full items-center">
              <svg
                v-if="ToDo.completed == true"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <input 
              v-model="ToDo.name"
                
                @keyup.enter="updateEvent(ToDo.id,ToDo.name);$event.target.blur()"
                v-focus
              class="title-font font-medium">
              <div style="margin-left: auto">
                <v-btn
                  icon

                  @click="CompleteToDo(ToDo.id, ToDo.completed,ToDo.name)"
                >
                  <v-icon>mdi-book-check</v-icon>
                </v-btn>
                <v-btn icon color="red lighten-2" @click="deleteToDo(ToDo.id)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </div>
        <div
         class="special"
          v-for="ToDo in Snackuncompleted"
          :key="ToDo.id"
        >
          <div class="">
            <div class="abc rounded flex p-4 h-full items-center">
              <svg
                v-if="ToDo.completed == true"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <input 
              v-model="ToDo.name"
                
                @keyup.enter="updateEvent(ToDo.id,ToDo.name);$event.target.blur()"
                v-focus
              class="title-font font-medium">
              <div style="margin-left: auto">
                <v-btn
                  icon
 
                  @click="CompleteToDo(ToDo.id, ToDo.completed,ToDo.name)"
                >
                  <v-icon>mdi-book-check</v-icon>
                </v-btn>
                <v-btn icon color="red lighten-2" @click="deleteToDo(ToDo.id)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="body-font"
      v-if="(Alte != '') | (Alteuncompleted != '')"
    >
      <div class="  py-10 mx-auto">
        <div class="text-center mb-20">
          <h1
            class="sm:text-3xl text-2xl font-medium text-center title-font  mb-2"
          >
            Other
          </h1>
        </div>
        <div
          class="special"
          v-for="ToDo in Alte"
          :key="ToDo.id"
        >
          <div class="">
            <div class="abc rounded flex p-4 h-full items-center">
              <svg
                v-if="ToDo.completed == true"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <input 
              v-model="ToDo.name"
                
                @keyup.enter="updateEvent(ToDo.id,ToDo.name);$event.target.blur()"
                v-focus
              class="title-font font-medium">
              <div style="margin-left: auto">
                <v-btn
                  icon
  
                  @click="CompleteToDo(ToDo.id, ToDo.completed,ToDo.name);"
                >
                  <v-icon>mdi-book-check</v-icon>
                </v-btn>
                <v-btn icon color="red lighten-2" @click="deleteToDo(ToDo.id)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </div>
        <div
          class="special"
          v-for="ToDo in Alteuncompleted"
          :key="ToDo.id"
        >
          <div class="">
            <div class="abc rounded flex p-4 h-full items-center">
              <svg
                v-if="ToDo.completed == true"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <input 
              v-model="ToDo.name"
                
                @keyup.enter="updateEvent(ToDo.id,ToDo.name);$event.target.blur();$event.target.blur()"
                v-focus
              class="title-font font-medium">
              <div style="margin-left: auto">
                <v-btn
                  icon

                  @click="CompleteToDo(ToDo.id, ToDo.completed, ToDo.name)"
                >
                  <v-icon>mdi-book-check</v-icon>
                </v-btn>
                <v-btn icon color="red lighten-2" @click="deleteToDo(ToDo.id)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss">

  .special{
    margin-left:auto; margin-right:auto; margin-bottom:1em
  }
  @media only screen and (min-width: 600px) {
  .special {
     margin-left:auto; margin-right:auto; margin-bottom:1em; width:40em;
  }
}

@media only screen and (max-width: 600px) {
  .hope {
     margin-left:auto;
  }
}
@media only screen and (min-width: 600px) {
  .hope {
    padding-left:7em;
    margin: auto;
    width: 70%;
  }
}
</style>
<script>

import { db } from "../firebase/db.js";
export default {
  data: () => ({
    items: ["Mancare", "Bautura", "Snacks", "Altele"],
    ToDos: [],
    price:[],
    newItem: "",
    selectiona: "",
    snackbar: false,
    text: "Good Job Item Added",
    dialog: false,
    response: false,
  }),
  methods: {
    updateEvent(a,c){
      db.collection("ToDos").doc(a).update({name: c});
    },
    async addItem() {
      if (this.newItem != "" && this.selectiona != "") {
        await db
          .collection("ToDos")
          .add({
            name: this.newItem,
            completed: false,
            selection: this.selectiona,
            robi: true,
          });
        this.newItem = "";
        this.snackbar = true;
      } else {
        alert("Oare o fi greu sa completezi ambele patratele");
      }
    },
    async deleteToDo(id) {
      if (
        await this.$refs.confirm.open("Delete", "Are You Sure Bout That", {
          color: "red",
        })
      ) {
        db.collection("ToDos").doc(id).delete();
      }
    },
    editTodo: function (todo) {
      this.editedTodo = todo
    },
    async CompleteToDo(id, completed,name) {

    if (completed == true){
      
      let b = this.price[0].pret
      let c = 0
      console.log(b)
        for (let a in this.ToDos){
          if (this.ToDos[a].name == name){
            c = this.ToDos[a].price
          }
        }
        console.log(c)
       db.collection("ToDos").doc(id).update({ completed: !completed });
       db.collection("price").doc('pr').update({pret: b - c })
       db.collection("ToDos").doc(id).update({ price: 0 });
    }else {
      if (
        await this.$refs.price.open(id, name, {
          color: "red",
        })
      ){
      let b = db.collection("ToDos").doc('pr')
      console.log(b)
      db.collection("ToDos").doc(id).update({ completed: !completed });
      }
    }
    },
    selection(a) {
      this.selectiona = a;
      console.log(this.selectiona);
    },
    
  },
  firestore: {
    ToDos: db.collection("ToDos"),
    price: db.collection("price"),
  },
  computed: {
    Mancaree: function () {
      return this.ToDos.filter(function (u) {
        return u.selection == "Mancare" && u.completed == false;
      });
    },
    Mancareeuncompleted: function () {
      return this.ToDos.filter(function (u) {
        return u.selection == "Mancare" && u.completed == true;
      });
    },
    Alte: function () {
      return this.ToDos.filter(function (u) {
        return u.selection == "Altele" && u.completed == false;
      });
    },
    Alteuncompleted: function () {
      return this.ToDos.filter(function (u) {
        return u.selection == "Altele" && u.completed == true;
      });
    },
    Beut: function () {
      return this.ToDos.filter(function (u) {
        return u.selection == "Bautura" && u.completed == false;
      });
    },
    Beutuncompleted: function () {
      return this.ToDos.filter(function (u) {
        return u.selection == "Bautura" && u.completed == true;
      });
    },
    Snack: function () {
      return this.ToDos.filter(function (u) {
        return u.selection == "Snacks" && u.completed == false;
      });
    },
    Snackuncompleted: function () {
      return this.ToDos.filter(function (u) {
        return u.selection == "Snacks" && u.completed == true;
      });
    },
  },
};
</script>

<style>
.abc{
  background-color: #272727;
}
</style>
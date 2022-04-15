<template>
  <!-- Container home page -->
  <v-container class="ma-0 pa-0" grid-list-sm>
    <!-- Button route to blogs -->
    <div class="text-right">
      <v-btn small text to="/blogs" class="blue--text"
        >All Blogs
        <v-icon left>mdi-chevron-right</v-icon>
      </v-btn>
    </div>

    <v-layout wrap>
      <!-- Blog item // image & title -->
      <v-flex v-for="blog in blogs" :key="`blog-` + blog.id" xs6>
        <v-card :to="`/blog/` + blog.id">
          <v-img :src="blog.photo ? apiDomain + blog.photo : 'https://picsum.photos/200/300'" class="white--text" height="200px">
            <v-card-title class="fill-height align-end" v-text="blog.title"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-progress-linear color="blue-grey" height="4px"></v-progress-linear>
          </v-card-actions>

          <v-card-actions>
            <span>{{ blog.title.substring(0, 15) }} ...</span>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <Button @click="increment(100)">Tambah</Button>
    {{ tambah }}
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data: () => ({
    apiDomain: "http://demo-api-vue.sanbercloud.com",
    blogs: [],
  }),

  computed: {
    // Use Getters
    // count() {
    //   return this.$store.getters.count
    // }

    // Use MapGetters
    ...mapGetters({
      tambah: "count",
    }),
  },

  methods: {
    go() {
      const config = {
        method: "get",
        url: this.apiDomain + "/api/v2/blog/random/4",
      };

      this.axios(config)
        .then((response) => {
          let { blogs } = response.data;
          this.blogs = blogs;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // Use Mutations
    // increment(payload) {
    //   this.$store.commit('increment', payload)
    // },

    // Use MapMutations
    ...mapMutations({
      increment: "increment",
    }),
  },

  created() {
    this.go();
  },
};
</script>

<template>
<!-- Container Blogs page -->
  <v-container class="ma-0 pa-0" grid-list-sm>
    <v-subheader> All Blogs </v-subheader>
    <v-layout wrap>
    <!-- Blog item // image & title -->
      <v-flex v-for="blog in blogs" :key="`blog-` + blog.id" xs6>
      
        <v-card :to="`/blog/` + blog.id">
          <v-img :src="blog.photo ? apiDomain + blog.photo : 'https://picsum.photos/200/300'" class="white--text" height="200px">
            <v-card-title class="fill-height align-end" v-text="blog.title"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-progress-linear color="blue-grey" height="6px"></v-progress-linear>
          </v-card-actions>

          <v-card-actions>
            <span>{{ blog.title.substring(0, 15) }} ...</span>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- Pagination -->
    <v-pagination v-model="page" @input="go" :length="lengthPage" :total-visible="5"> </v-pagination>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      apiDomain: "http://demo-api-vue.sanbercloud.com",
      blogs: [],
      page: 0,
      lengthPage: 0,
      perPage: 0,
    };
  },

  methods: {
    go() {
      const config = {
        method: "GET",
        url: this.apiDomain + "/api/v2/blog?page=" + this.page,
      };

      this.axios(config)
        .then((response) => {
          let { blogs } = response.data;
          this.blogs = blogs.data;
          this.page = blogs.current_page;
          this.lengthPage = blogs.last_page;
          this.perPage = blogs.per_page;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.go();
  },
};
</script>

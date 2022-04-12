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
  </v-container>
</template>

<script>
export default {
  
  data: () => ({
    apiDomain: 'http://demo-api-vue.sanbercloud.com',
    blogs: [],
  }),

  methods: {
    go(){
      const config = {
      method: 'get',
      url:  this.apiDomain + '/api/v2/blog/random/4',
    }
    
    this.axios(config)
      .then(response => {
        let { blogs } = response.data;
        this.blogs = blogs;
      })
      .catch(error => {
        console.log(error);
      });
    }
  },

  created() {
    this.go();
  },
};
</script>

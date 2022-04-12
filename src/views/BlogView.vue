<template>
  <div>
    <v-card v-if="blog.id">
      <v-img :src="blog.photo ? apiDomain + blog.photo : 'https://picsum.photos/200/300'" class="white--text" height="200px">
        <v-card-title class="fill-height align-end" v-text="blog.title"></v-card-title>
      </v-img>

      <v-card-text>
        <v-simple-table dense>
          <tbody>
            <tr>
              <td><v-icon>mdi-format-title</v-icon>Judul</td>
              <td><h3>{{ blog.title }}</h3></td>
            </tr>
            <tr>
              <td><v-icon>mdi-note</v-icon>Desikripsi</td>
              <td><p>{{ blog.description }}</p></td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    apiDomain: "http://demo-api-vue.sanbercloud.com",
    blog: {},
  }),

  methods: {
    go() {

      let { id } = this.$route.params;
      const config = {
        method: "GET",
        url: `${this.apiDomain}/api/v2/blog/${id}`,
      };

      this.axios(config)
        .then((response) => {
          let { blog } = response.data;
          this.blog = blog;
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

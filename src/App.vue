<template>
  <!-- App.vue -->
  <v-app>

    <!-- Alert -->
    <alert></alert>

    <!-- Sidebar -->
    <v-navigation-drawer app v-model="drawer">
      <v-list>
        <!-- User // logged in -->
        <v-list-item v-if="!guest">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg" alt="avatar"> </v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title><h4>Aldy Fikhri Muhammad</h4></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Guest // Ask for login or register -->
        <div class="pa-2" v-if="guest">
          <v-btn block color="primary" class="mb-1" @click="login">
            <v-icon left>mdi-lock</v-icon>
            Login
          </v-btn>
          <v-btn block color="success" class="mb-1">
            <v-icon left>mdi-account</v-icon>
            Register
          </v-btn>
        </div>

        <v-divider></v-divider>

        <!-- List menu on sidebar -->
        <v-list-item v-for="(item, index) in menus" :key="`menu-` + index" :to="item.route">
          <v-list-item-icon>
            <v-icon left>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <!-- Logout button -->
      <template v-slot:append v-if="!guest">
        <div class="pa-2">
          <v-btn block color="red" dark @click="logout"><v-icon left>mdi-lock</v-icon> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- Navbar // But in this case we use for title -->
    <v-app-bar app color="success" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Jabar Coding Camp</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <v-slide-y-transition>
          <router-view></router-view>
        </v-slide-y-transition>
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer app>
      <h5>&#169; 2022 | <a href="https://www.linkedin.com/in/aldyfikhrimuhammad/" target="blank"> Aldy Fikhri Muhammad</a></h5>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import Alert from './components/AlertView.vue';
export default {
  components: {
    Alert,
  },
  name: "App",

  data: () => ({
    drawer: false,
    menus: [
      {
        title: "Home",
        icon: "mdi-home",
        route: "/",
      },
      {
        title: "Blogs",
        icon: "mdi-note",
        route: "/blogs",
      },
      {
        title: "About",
        icon: "mdi-information",
        route: "/about",
      },
    ],
    guest: true,
    snackbarStatus: false,
    snackbarText: "Anda berhasil login!",
  }),

  methods: {
    logout() {
      this.guest = true;
      this.setAlert({
        status: true,
        text: "Anda berhasil logout!",
        color: "success",
      });
    },

    login() {
      this.guest = false;
      this.setAlert({
        status: true,
        text: "Anda berhasil login!",
        color: "success",
      });
    },

    ...mapActions({
      setAlert : "alert/set"}),
  },

  mounted () {
    this.snackbarStatus = true
  }
};
</script>

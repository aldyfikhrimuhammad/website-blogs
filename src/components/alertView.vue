<template>
    <!-- Snackbar -->
    <v-snackbar
      v-model="alert"
      :color="color"
      top
      timeout="2000"
      :multi-line="multiLine"
      outlined
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          text
          v-bind="attrs"
          @click="close"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'AlertView',

        computed: {
            ...mapGetters({
                status: "alert/status",
                text: "alert/text",
                color: "alert/color",
            }),
        },
        alert: {
            get() {
                return this.status;
            },
            set(value) {
                this.setAlert ({
                    status: value,
                });
            }
        },
        methods: {
            ...mapActions({
                setAlert: "alert/set",
            }),
            close() {
                this.setAlert ({
                    status: false,
                });
            },
        },
    }
</script>
<script setup>
import {RouterView} from 'vue-router'

</script>

<template>


  <v-layout class="rounded rounded-md">
    <v-app-bar scroll-threshold="0" class="pa-0">
      <v-app-bar-nav-icon v-on:click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Test Vue</v-toolbar-title>
      <div v-show="login">
        <v-btn icon="mdi-account-cog-outline" size="x-large"/>
      </div>
      <div v-show="login">
        <!--        <v-btn prepend-icon="mdi-logout" variant="outlined">-->
        <!--          ログアウト-->
        <!--        </v-btn>-->
        <v-btn icon="mdi-logout" size="x-large"/>
      </div>
      <div v-show="!login">
        <!--        <v-btn prepend-icon="mdi-login" variant="outlined">-->
        <!--          ログイン-->
        <!--        </v-btn>-->
        <v-btn icon="mdi-login" size="x-large"/>
      </div>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
    >
      <v-list>
        <v-list-item
              value="Home"
              color="primary"
              rounded="xl"
              to="/"
              prepend-icon="mdi-home"
              title="Home"
              class="mt-1"
        ></v-list-item>
        <v-list-group value="tables">
          <template v-slot:activator="{ props }">
            <v-list-item
                v-bind="props"
                title="Tables"
                prepend-icon="mdi-phone-outgoing"
            >
            </v-list-item>
          </template>
          <v-list-item
              v-for="(table, i) in tables"
              v-bind="props"
              :key="i"
              :value="table"
              color="primary"
              rounded="xl"
              :to="table.to"
              :prepend-icon="table.icon"
              :title="table.title"
          >
          </v-list-item>
        </v-list-group>

      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
<!--        <line-chart></line-chart>-->
        <RouterView/>
      </v-container>
    </v-main>
    <v-footer class="bg-grey-lighten-1" app>
      <v-row justify="center" no-gutters>
        <v-btn
            v-for="link in links"
            :key="link"
            color="white"
            variant="text"
            class="mx-2 v-col-3 v-col-md-1"
            rounded="xl"
        >
          {{ link }}
        </v-btn>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>

  </v-layout>


</template>
<script>
export default {
  data: () => ({
    login: true,
    items: [
      {title: 'About', to: '/about', icon: 'mdi-clock'},
      {title: 'Form', to: '/form', icon: 'mdi-map-marker'},
      {title: 'Form Send', to: '/form_send', icon: 'mdi-map-marker'},
      {title: 'Form Validate', to: '/form_validate', icon: 'mdi-map-marker'},
      {title: 'tab', to: '/tab', icon: 'mdi-earth'},
      {title: 'ZipCode', to: '/zipcode', icon: 'mdi-spider-thread'},
      {title: 'HarryPotter', to: '/harry', icon: 'mdi-magic-staff'},
      {title: '入門', to: '/nyumon', icon: 'mdi-arrow-left-bold'},
      {title: 'Pinia', to: '/pinia', icon: 'mdi-image-filter-drama'},
      {title: 'Pinia2', to: '/pinia2', icon: 'mdi-image-filter-drama'},
      {title: 'Chart', to: '/chart', icon: 'mdi-image-filter-drama'},
    ],
    tables: [
      {title: 'Table', to: '/table', icon: 'mdi-phone-outgoing'},
      {title: 'Table2', to: '/table2', icon: 'mdi-alert-circle-outline'},
    ],
    pivtots: [
      {title: 'PiVToT Get', to: '/pivtot_get', icon: 'mdi-image-filter-hdr'},
      {title: 'PiVToT Post', to: '/pivtot_post', icon: 'mdi-thumb-up-outline'},
    ],
    drawer: false,
    links: [
      'Home',
      'About',
      'Contact',
    ],
  }),
}
</script>
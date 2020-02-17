<template>
  <v-container>
    <v-row
      align="start"
      justify="center"
    >
      <v-col cols="4">
        <locations/>
      </v-col>
      <v-col cols="4">
        <person/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import person from './cards/Person.vue'
import locations from './cards/Locations.vue'

export default {
  components: {
    person,
    locations
  },
  data: () => ({
  })
}
</script>

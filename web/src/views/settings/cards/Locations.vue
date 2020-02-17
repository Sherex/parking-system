<template>
  <v-card>
    <v-card-title>Parking Locations</v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-list two-line width="100%">
            <v-list-item
              v-for="location in locations"
              :key="location.name"
            >
              <v-list-item-avatar>
                <v-icon
                  v-text="location.icon"
                ></v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="location.name"></v-list-item-title>
                <v-list-item-subtitle v-text="location.address.subtitle()"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey lighten-1">mdi-pencil</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    locations: [
      {
        name: 'Home',
        address: {
          street: 'P. A. Munchs gate 29',
          city: 'Skien',
          zip: '3717',
          subtitle: function () { return `${this.street} - ${this.city} ${this.zip}` }
        },
        icon: 'mdi-home'
      },
      {
        name: 'Cottage',
        address: {
          street: 'Far Away 22',
          city: 'Coast City',
          zip: '2233',
          subtitle: function () { return `${this.street} - ${this.city} ${this.zip}` }
        },
        icon: 'mdi-campfire'
      }
    ]
  })
}
</script>

<template>
  <v-container>
    <v-row
      align="start"
      justify="center"
    >
      <v-col cols="8">
        <v-card>
          <v-card-title>
            Dashboard
          </v-card-title>
          <v-card-text>
            <v-sheet height="400">
              <v-calendar
                ref="calendar"
                :now="today"
                :value="today"
                :events="events"
                color="primary"
                type="week"
              ></v-calendar>
            </v-sheet>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'dashboard'
}
</script>

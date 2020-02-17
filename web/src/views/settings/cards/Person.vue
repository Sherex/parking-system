<template>
  <v-card>
    <v-card-title>About Me</v-card-title>
    <v-card-text>
      <v-form v-model="valid">
        <v-container>
          <v-row dense>
            <v-col cols="6">
              <v-text-field
                v-model="firstname"
                :disabled="!editable"
                :rules="nameRules"
                label="First name"
                prepend-icon="mdi-account"
                dense
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="lastname"
                :disabled="!editable"
                :rules="nameRules"
                label="Last name"
                dense
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="email"
                :disabled="!editable"
                :rules="emailRules"
                label="Email"
                prepend-icon="mdi-email"
                dense
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="phoneNumber"
                :disabled="!editable"
                :rules="phoneNumberRules"
                label="Phone number"
                prepend-icon="mdi-phone"
                dense
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            v-on="on"
            @click="editable = true"
          >
            <v-icon>{{editable ? "mdi-check" : "mdi-account-edit"}}</v-icon>
          </v-btn>
        </template>
        <span>{{editable ? "Done" : "Edit"}}</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    editable: false,
    firstname: 'Ingar',
    lastname: 'Helgesen',
    nameRules: [
      v => !!v || 'Name is required'
    ],
    email: 'ingar@i-h.no',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    phoneNumber: '94034040',
    phoneNumberRules: [
      v => !!v || 'Phone number is required',
      v => /^\d{8}$/.test(v) || 'Phone number must 8 digits'
    ]
  })
}
</script>

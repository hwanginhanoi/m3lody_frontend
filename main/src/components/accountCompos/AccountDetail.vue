<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useDisplay} from "vuetify";
import updateAccount from "../../apis/updateAccount/updateAccount.ts";
import accountDetail from "../../apis/account/accountDetail.ts";
// Define reactive form fields
const form = ref({
    address: '',
    language: '',
    email: '',
    phone_num: '',
    avatar_url: '',
    image: ''
})
const userImage = ref("");
let isblock = ref(true);
let accountInfor = ref([]);
onMounted(async () => {
    // Get user account details
    accountInfor.value = await accountDetail();
    userImage.value = accountInfor.value[0].avatar_url;
    form.value.avatar_url = accountInfor.value[0].avatar_url;
    form.value.email = accountInfor.value[0].email;
    form.value.phonenumber = accountInfor.value[0].phone_num;
    form.value.address = accountInfor.value[0].address;
    form.value.language = accountInfor.value[0].language;

    console.log(accountInfor.value);

})
// Get display properties from Vuetify
const {mdAndUp} = useDisplay();
// Define reactive user image
async function handleUpdateAccount() {
    let formData = new FormData();
    formData.append('address', form.value.address);
    formData.append('language', form.value.language);
    formData.append('email', form.value.email);
    formData.append('phone_num', form.value.phonenumber);
    formData.append('avatar_url', form.value.avatar_url);
    formData.append('image', form.value.image);
    await updateAccount(formData);
}

const onChange = (imageData: ChangeEvent<HTMLInputElement> | null) => {
    form.value.image = imageData.target.files[0];
    userImage.value = URL.createObjectURL(imageData.target.files[0]);
}

</script>

<template>
    <v-container class="pa-2">
        <v-card class=" pa-10 backgroundgra rounded-lg" elevation="2"
                width="99%"
        >
            <v-card-text class="pt-2"><h3>Account Details</h3></v-card-text>
            <v-card-text class="pt-2">
                <v-row class="">
                    <v-col class="backgroundgrade d-flex justify-center">
                        <v-img :src="userImage" min-width="140" min-height="140" max-width="180"
                               class="rounded-lg"></v-img>
                    </v-col>

                    <v-col class="d-flex align-center">
                        <v-row>
                            <v-col cols="12" class="pl-4">
                                <v-file-input
                                              label="Upload your image"
                                              rounded="lg"
                                              clearable
                                              show-size
                                              class="w-75"

                                              accept="image/jpeg,image/png"
                                              variant="outlined"
                                              @change="onChange"
                                              style="min-width: 50%">

                                </v-file-input>
                            </v-col>
                            <v-col class="ml-9">
                                <p>Allowed PNG, JPG. Max size is 800k</p>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <br>
                <br>
                <hr>
            </v-card-text>
            <v-card-text>
<!--                Account Details input fields-->
                <v-row>
                    <v-col :cols="mdAndUp?'':12">
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.email"
                                    label="Email"
                                    :disabled="isblock"
                                    type="email"
                                    clearable
                                    rounded="lg"
                                    variant="outlined"
                                    color="#d777ed"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.phonenumber"
                                    label="Phone Number"
                                    type="number"
                                    :disabled="isblock"
                                    clearable
                                    rounded="lg"
                                    variant="outlined"
                                    color="#d777ed"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-col>

                    <v-col>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.address"
                                    label="Address"
                                    type="text"
                                    :disabled="isblock"
                                    clearable
                                    rounded="lg"
                                    variant="outlined"
                                    color="#d777ed"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-select
                                    label="Select"
                                    v-model="form.language"
                                    :items="['English', 'Chinese', 'Vietnamese']"
                                    :disabled="isblock"
                                    clearable
                                    rounded="lg"
                                    variant="outlined"
                                    color="#d777ed"
                                ></v-select>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card-text>
<!--            Buttons for making changes or cancel-->
            <v-card-text>
                <v-row>
                    <v-col>
                        <v-btn class="ml-2" color="purple" max-width="150" @click="handleUpdateAccount">Save Changes</v-btn>
                        <v-btn class="ml-2" color="white" max-width="150" @click="()=>{isblock = !isblock}">{{isblock ? 'Edit': 'Cancel'}}</v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<style scoped>
.backgroundgrade {
    max-width: 300px;
    min-width: 100px;
    justify-content: center;
}

.fixborder {
    min-width: 100vh;
}
</style>
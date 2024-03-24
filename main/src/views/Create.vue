<script setup lang="ts">
//import PictureInput component
import PictureInput from 'vue-picture-input'
import checkCookieExists from "../ultilities/checkCookieExists.ts";
import createNFT from "../apis/createnft/createNFT.ts";
import router from "../plugins/router.ts";
import {onMounted, ref} from "vue";

const form = ref({
    music_url: '',
    title: '',
    price: '',
    description: '',
    type: '---',
    musicFile: '',
})

onMounted(async () => {
    if (!checkCookieExists()) {
        await router.push('/login');
    }
});

async function handleCreateNFT() {
    let formData = new FormData();
    formData.append('image', form.value.music_url);
    formData.append('title', form.value.title);
    formData.append('price', form.value.price);
    formData.append('description', form.value.description);
    formData.append('type', form.value.type);
    formData.append('musicFile', form.value.musicFile);

    console.log(formData.get('musicFile'))
    await createNFT(formData);
}

const image = ref<File | null>(null)

const onChangeImage = (imageData: ChangeEvent<HTMLInputElement> | null) => {
    form.value.music_url =  imageData.target.files[0];
}

const onChangeMusic = (musicData: ChangeEvent<HTMLInputElement> | null) => {
    form.value.musicFile =  musicData.target.files[0];
}
</script>


<template>
    <v-main :style="{ background: $vuetify.theme.global.current.colors.background }">
        <div class="my-16 jusd-flex mb-16">
            <v-row>
                <v-col>
                    <div style="margin: 0px 15%">
                        <!--title-->
                        <h1>Create an NFT</h1>
                        <p>
                            Once your item is minted you will not be able to change any of its information.
                        </p>
                    </div>
                    <!--picture input-->
                    <picture-input
                        class="pt-5"
                        ref="pictureInput"
                        style="min-height: 400px; min-width: 400px"
                        v-model="form.music_url"
                        width="500"
                        height="500"
                        accept="image/jpeg,image/png"
                        size="10"
                        button-class="btn"
                        @change="onChangeImage"
                        :custom-strings="{
                                upload: '<h1>Bummer!</h1>',
                                drag: 'Drag a 😺 GIF or GTFO'
                            }"
                        radius="5">
                    </picture-input>
                </v-col>
                <!--form input-->
                <v-col class="d-flex flex-column align-center">
                    <v-text-field label="Name" variant="outlined" rounded="lg" placeholder="Name your NFT" class="" v-model="form.title">
                    </v-text-field>

                    <v-text-field label="Price" variant="outlined" rounded="lg" placeholder="Name your NFT" class="" v-model="form.price">
                    </v-text-field>


                    <v-textarea label="Description" variant="outlined" rounded="lg"
                                placeholder="Enter a description" v-model="form.description">
                    </v-textarea>

                    <v-select label="Type" variant="outlined" rounded="lg" v-model="form.type" :items="['Anime', 'Classic', 'Angelic', 'Rock']">

                    </v-select>
                    <v-file-input prepend-icon="mdi-music"
                                  label="Upload your music file"
                                  rounded="lg"
                                  clearable
                                  show-size
                                  accept="audio/*"
                                  variant="outlined"
                                  @change="onChangeMusic"
                                  style="min-width: 50%">

                    </v-file-input>
                    <v-btn type="submit" rounded="lg" @click="handleCreateNFT">
                        Create
                    </v-btn>
                </v-col>
            </v-row>
        </div>
    </v-main>
</template>

<style scoped>
 /* Scoped styles for the component */
.v-text-field {
    width: 35rem;
}

.v-file-input {
    width: 35rem;
}

.v-text-field, v-textarea {
    border-radius: 8px;
}
</style>
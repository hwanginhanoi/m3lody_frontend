<script setup lang="ts">
import PictureInput from 'vue-picture-input'

</script>


<template>
    <v-main :style="{ background: $vuetify.theme.global.current.colors.background }">
        <div class="my-16 jusd-flex " >
            <v-row>
                <v-col>
                    <div style="margin: 0px 15%">
                        <h1>Create an NFT</h1>
                        <p>
                            Once your item is minted you will not be able to change any of its information.
                        </p>
                    </div>
                    <picture-input
                        class="pt-5"
                        ref="pictureInput"
                        style="min-height: 400px; min-width: 400px"
                        width="500"
                        height="500"
                        accept="image/jpeg,image/png"
                        size="10"
                        button-class="btn"
                        :custom-strings="{
                                upload: '<h1>Bummer!</h1>',
                                drag: 'Drag a 😺 GIF or GTFO'
                            }"
                        radius="5"
                        @change="onChange">
                    </picture-input>

                </v-col>
                <v-col class="d-flex flex-column align-center">
                    <v-text-field label="Name" variant="outlined" rounded="lg" placeholder="Name your NFT" class="">
                    </v-text-field>

                    <v-text-field label="Supply" variant="outlined" rounded="lg" placeholder="1">

                    </v-text-field>
                    <v-text-field label="Price" variant="outlined" rounded="lg" placeholder="Name your NFT" class="">
                    </v-text-field>


                    <v-textarea label="Description" variant="outlined" rounded="lg"
                                placeholder="Enter a description">
                    </v-textarea>

                    <v-select label="Type" variant="outlined" rounded="lg">

                    </v-select>
                    <v-file-input prepend-icon="mdi-music"
                                  label="Upload your music file"
                                  rounded="lg"
                                  clearable
                                  show-size
                                  accept="audio/*"
                                  variant="outlined"
                                  style="min-width: 50%">

                    </v-file-input>
                    <v-btn type="submit" rounded="lg">
                        Create
                    </v-btn>
                </v-col>
            </v-row>
        </div>
    </v-main>
</template>

<style scoped>
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
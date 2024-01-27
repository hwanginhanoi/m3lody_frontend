<script>
import PictureInput from 'vue-picture-input'

export default {
    name: 'app',
    data() {
        return {}
    },
    components: {
        PictureInput
    },
    methods: {
        onChange(image) {
            console.log('New picture selected!')
            if (image) {
                console.log('Picture loaded.')
                this.image = image
            } else {
                console.log('FileReader API not supported: use the <form>, Luke!')
            }
        }
    }
}
</script>

<template>
    <v-main :style="{ background: $vuetify.theme.global.current.colors.background }">
        <v-row>
            <v-col class="pt-12">
                <v-container justify="center">
                    <h1>Create an NFT</h1>
                    <p>
                        Once your item is minted you will not be able to change any of its information.
                    </p>
                    <picture-input
                        algin="center"
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
                        @change="onChange">
                    </picture-input>
                </v-container>
            </v-col>
            <v-col class="pt-12">
                <v-container class="justify-center">
                    <p>Name *</p>
                    <v-text-field variant="outlined" rounded="lg" placeholder="Name your NFT" align="center">

                    </v-text-field>
                    <p>Supply *</p>
                    <v-text-field variant="outlined" rounded="lg" placeholder="1"  align="center">

                    </v-text-field>
                    <p>Description *</p>
                    <v-textarea variant="outlined" rounded="lg" placeholder="Enter a description"  align="center">
                    </v-textarea>

                    Category
                    <v-select variant="outlined" rounded="lg"  align="center">

                    </v-select>

                    <v-btn rounded="lg">
                        Create
                    </v-btn>
                </v-container>
            </v-col>/
        </v-row>
    </v-main>
</template>

<style scoped>
.v-text-field{
    width: 35rem;
}
</style>
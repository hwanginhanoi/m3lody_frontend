<script setup lang="ts">
import {ref} from 'vue'

let data = [
    {
        image: "https://cdn.pentas.io/next-s3-uploads/2b1340b4-2ac3-4dfc-a572-7797025aa12e/1200-%2822%29.png",
        desciption: 'Frozen Yogurt',
        price: 0.6,
    },
    {
        image: "data:image/jpeg;base64,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",
        desciption: 'Bad Ape',
        price: 0.14,
    },
    {
        image: "https://preview.redd.it/9zzel52xfcy81.jpg?width=640&crop=smart&auto=webp&s=b9315cc50f0929d7a3ff5a26c7f6147b37fd8a67",
        desciption: 'Ningen Dog',
        price: 0.7,
    },
]

function calcSum() {
    let total = 0;
    data.forEach((item, i) => {
        total += item.price;
    });
    return total;
}

let sum = calcSum()
</script>
<template>
    <v-table class="pa-4">
        <thead>
        <tr>
            <th class="text-left">Description</th>
            <th class="text-left">Remove</th>
            <th class="text-left">Price</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in data" :key="item.desciption">
            <td>
                <v-row>
                    <v-col>
                        <v-img
                            :src="item.image"
                            style="border-radius: 6px"
                            class="ma-2"
                        ></v-img>
                    </v-col>
                    <v-col>
                        <v-card-text class="align-center"
                        >{{ item.desciption }}
                        </v-card-text
                        >
                    </v-col>
                </v-row>
            </td>
            <td>
                <v-btn>
                    <v-icon icon="$delete"></v-icon>
                </v-btn>
            </td>
            <td>{{ item.price }} SWB</td>
        </tr>
        </tbody>
    </v-table>
    <v-row class="pa-5">
        <v-col class="v-col-8">
            <v-card-text class="text-center font-weight-black"
            >Total Price: {{ sum }} SWB
            </v-card-text
            >
        </v-col>
        <v-col class="v-col-2">
            <v-btn min-width="100px" class="text-center font-weight-black"
                   :style="{ background: $vuetify.theme.global.current.colors.navbtn}">Payment
            </v-btn>
        </v-col>
    </v-row>
</template>

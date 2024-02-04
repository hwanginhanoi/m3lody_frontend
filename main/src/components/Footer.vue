<script setup lang="ts">
import {useTheme, useDisplay} from 'vuetify';

const icons = [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-linkedin',
    'mdi-instagram',
]
let {mdAndUp} = useDisplay();

</script>

<template>
    <v-footer>
        <v-container class="d-flex flex-column flex-wrap" style="max-width: 95vw; padding-right: 2em;">
            <v-row>
                <v-col cols="12" md="6">
                    <v-img src="src/assets/t-dark.png" max-width="15px"></v-img>
                    <h1>trad3</h1>
                    <p>Welcome to the premier digital hub for music NFTs, where melodies meet the blockchain. Explore,
                        trade, and unearth exclusive musical treasures in our revolutionary marketplace.</p>
                    <div>
                        <v-btn
                            v-for="icon in icons"
                            :key="icon"
                            class="mx-4"
                            :icon="icon"
                            variant="text"
                        ></v-btn>
                    </div>
                </v-col>
                <v-col cols="4" md="2">
                    <v-list>
                        <v-list-subheader :class="!mdAndUp? 'smallertext':''"><h2>About Us</h2></v-list-subheader>
                        <v-list-item title="Our team"></v-list-item>
                        <v-list-item title="Careers"></v-list-item>
                        <v-list-item title="Contact"></v-list-item>
                    </v-list>
                </v-col>
                <v-col cols="4" md="2">
                    <v-list>
                        <v-list-subheader :class="[(!mdAndUp ? 'smallertext' : ''), 'w-100']"><h2>Marketplace</h2>
                        </v-list-subheader>
                        <v-list-item to="/marketplace" title="Buy" active-class="no-active"></v-list-item>
                        <v-list-item to="/create" title="Create" active-class="no-active"></v-list-item>
                        <v-list-item to="/" title="Sell" active-class="no-active"></v-list-item>
                    </v-list>
                </v-col>
                <v-col cols="4" md="2">
                    <v-list>
                        <v-list-subheader :class="!mdAndUp? 'smallertext':''"><h2>Account</h2></v-list-subheader>
                        <v-list-item to="/marketplace" title="Profile" active-class="no-active"></v-list-item>
                        <v-list-item to="/create" title="Settings" active-class="no-active"></v-list-item>
                        <v-list-item to="/transaction" title="History" active-class="no-active"></v-list-item>
                    </v-list>
                </v-col>
            </v-row>
            <v-row class="justify-center">
                <v-icon>mdi-copyright</v-icon>
                    {{ new Date().getFullYear() }} — <strong>Trader Network, Inc</strong>
            </v-row>
        </v-container>
    </v-footer>
</template>

<style scoped>
.smallertext {
    font-size: 11.4px;
}
</style>
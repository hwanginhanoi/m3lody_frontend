<script setup lang="ts">
// Importing necessary functions from Vue
import {ref} from "vue";

// Creating a reactive reference for the tab
import getUsersData from "../apis/getUsersData";
let users = await getUsersData();
console.log(users);
</script>

<template>
    <v-main>
        <table>
            <thead>
                <tr>
                    <th>user_id</th>
                    <th>username</th>
                    <th>email</th>
                    <th>password</th>
                    <th>created_at</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.user_id">
                    <td>{{ user.user_id }}</td>
                    <td>{{ user.username }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.password }}</td>
                    <td>{{ user.created_at }}</td>
                </tr>
            </tbody>
        </table>
    </v-main>
</template>

<style scoped>
 /* Scoped styles for the component */
 
</style>

<script setup lang="ts">
// Importing necessary functions from Vue
import {ref} from "vue";
import {onMounted} from "vue";
// Creating a reactive reference for the tab
import getUsersData from "../apis/getUsersData";
const users = ref([]);
// onMounted(async () => {
// });
async function handleClick() {
    try {
        // Fetch users data
        users.value = await getUsersData();
        // Update the users array with fetched data
    } catch (error) {
        console.error("Error fetching users data:", error);
    }

}

defineExpose({
    handleClick
});
</script>

<template>
    <v-main>
        <Button class="border px-1 py-2 ma-2 rounded-lg bg-green-accent-2" @click="handleClick">Click me</Button>
        <table border="1">
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

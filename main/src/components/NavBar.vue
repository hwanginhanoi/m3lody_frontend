<script>
export default {
    name: 'NavBar',
};
</script>

<template>
    <div class="nav-bar">
        <p>This is navbar</p>
    </div>
</template>

<style scoped>
.nav-bar {
    position: relative;
    top: 0;
    bottom: 0;
    min-height: 100vh;
    left: 0;
    width: 280px;
    overflow: hidden;
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.1);
    background: black;

}
p{
    color: white;
}
</style>


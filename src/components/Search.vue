<template>
    <form>
        <div class="search-area">
            <input type="text" />
        </div>
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
    </form>
</template>
<script>
export default {
    components: {},
};
</script>
<style scoped>
.search-area {
    width: 100%;
    height: 100%;
    border: #e7e7e7 1px solid;
    border-radius: 2px;
    box-sizing: border-box;
}
.search-area input {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 45px 0 8px;
}
</style>

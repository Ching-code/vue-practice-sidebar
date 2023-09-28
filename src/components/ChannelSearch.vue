<template>
    <div class="channel-search">
        <Search @search="handleSearch" placeholder="搜索頻道" />
    </div>
</template>
<script>
import Search from "./Search";
export default {
    components: {
        Search,
    },
    methods: {
        handleSearch(e) {
            console.log("搜尋", e);
        },
    },
};
</script>
<style scoped>
.channel-search {
    width: 100%;
    box-sizing: border-box;
    padding: 0 18px;
    height: 30px;
    margin: 18px 0;
}
</style>

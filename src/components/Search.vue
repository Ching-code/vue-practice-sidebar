<template>
    <form class="search-area" @submit.prevent="handleSearch">
        <input type="text" v-model="searchValue" :placeholder="placeHolder" />
        <div class="iconPos" @click="handleSearch">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </div>
    </form>
</template>
<script>
export default {
    components: {},
    props: {
        placeHolder: {
            type: String,
            default: "搜尋關鍵字",
        },
    },
    data() {
        return {
            searchValue: "",
        };
    },
    methods: {
        handleSearch() {
            if (this.searchValue) {
                this.$emit("search", this.searchValue);
            }
        },
    },
};
</script>
<style scoped>
.search-area {
    width: 100%;
    height: 100%;
    border: #e7e7e7 1px solid;
    border-radius: 2px;
    box-sizing: border-box;
    position: relative;
}
.search-area input {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 45px 0 8px;
}
.iconPos {
    position: absolute;
    width: 40px;
    height: 100%;
    /* background-color: red; */
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #e7e7e7;
    cursor: pointer;
}
</style>

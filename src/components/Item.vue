<template>
    <!-- :class="{ active: isActive } 
    類樣式動態綁定是否有這個類樣式根據 { 類樣式同名: boolean } -->
    <div class="item" :class="{ active: isActive }" @click="handleClick">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        isActive: {
            type: Boolean,
            // required: true,
            default: false,
        },
    },
    methods: {
        handleClick() {
            // 通知父組件做事
            this.$emit("active");
        },
    },
};
</script>

<style scoped>
.active {
    background-color: #e7e7e7;
}
.item {
    cursor: pointer;
    width: 100%;
    height: 100%;
    transition: 0.2s;
}
.item:hover {
    background-color: #f4f4f4;
}
</style>

<template>
    <div class="channel">
        <Item :isActive="isActive" @active="$emit('active')">
            <div class="inner">
                <span class="name">{{ cdata.name }}</span>
                <span class="number">{{ cdata.channel_count }}</span>
            </div>
        </Item>
    </div>
</template>

<script>
import Item from "./Item";
export default {
    props: {
        isActive: {
            type: Boolean,
            // required: true,
            default: false,
        },
        cdata: {
            type: Object,
            // props 內傳遞 object/array 必須使用 function return
            // 因為 component 會被重複調用
            // 直接傳遞會讓各組件的資料互相影響
            default: () => ({}),
        },
    },
    components: {
        Item,
    },
};
</script>

<style scoped>
.channel {
    /* 寬度跟著父組件，不要定死 */
    width: 100%;
    height: 40px;
    line-height: 40px;
}
.inner {
    padding: 0 20px;
}

.name,
.number {
    float: left;
}

.name {
    font-size: 14px;
    color: #212121;
}

.number {
    font-size: 12px;
    color: #999;
    margin-left: 8px;
}
</style>

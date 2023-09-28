<template>
    <div class="aside">
        <ChannelSearch />
        <TitleMenu :isActive="activeId === 100" @active="activeId = 100">
            <template v-slot:title>
                <!-- 給 title 具名插槽傳遞內容 -->
                發現頻道
            </template>
            <template v-slot:icon> > </template>
        </TitleMenu>
        <ChannelList
            :columns="2"
            :activeId="activeId"
            @active="activeId = $event"
        />
    </div>
</template>
<script>
import TitleMenu from "./TitleMenu";
import ChannelList from "./ChannelList";
import ChannelSearch from "./ChannelSearch";
export default {
    components: {
        TitleMenu,
        ChannelList,
        ChannelSearch,
    },
    data() {
        return {
            activeId: 100,
        };
    },
    methods: {
        handleSearch(e) {
            console.log("搜尋", e);
        },
    },
};
</script>
<style scoped>
.aside {
    width: 100%;
    height: 100%;
    overflow: auto;
}
</style>

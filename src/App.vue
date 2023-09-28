<template>
    <div>
        <div style="width: 250px">
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
    </div>
</template>

<script>
import TitleMenu from "./components/TitleMenu";
import ChannelList from "./components/ChannelList";
import ChannelSearch from "./components/ChannelSearch";
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

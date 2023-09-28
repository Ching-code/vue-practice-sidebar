<template>
    <div>
        <div style="width: 250px">
            <div style="width: 100%; height: 30px">
                <Search />
            </div>
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
import Search from "./components/Search";
export default {
    components: {
        TitleMenu,
        ChannelList,
        Search,
    },
    data() {
        return {
            activeId: 100,
        };
    },
};
</script>

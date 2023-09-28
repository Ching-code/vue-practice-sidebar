<template>
    <div>
        <div
            class="channel-list"
            :style="{
                height: `${height}px`,
            }"
        >
            <div
                v-for="item in channels"
                :key="item.id"
                class="item"
                :style="{
                    width: `${100 / columns}%`,
                }"
            >
                <Channel
                    @active="$emit('active', item.id)"
                    :isActive="item.id === activeId"
                    :cdata="item"
                />
            </div>
        </div>
        <div class="collapse" @click="isExpand = !isExpand">
            <span>{{ isExpand ? "收起" : "展開" }}</span>
        </div>
    </div>
</template>
<script>
import Channel from "./Channel";
// import channelServ from "../services/channel";
export default {
    components: {
        Channel,
    },
    props: {
        activeId: {
            type: Number,
            required: true,
        },
        columns: {
            type: Number,
            default: 2,
        },
    },
    data() {
        return {
            // 先暫時寫死數據，之後再改成 ajax 請求
            channels: [
                { id: 0, name: "全部", channel_count: "2547" },
                { id: 1, name: "動漫", channel_count: "226" },
                { id: 2, name: "遊戲", channel_count: "483" },
                { id: 3, name: "電競", channel_count: "52" },
                { id: 4, name: "鬼畜", channel_count: "51" },
                { id: 5, name: "時尚", channel_count: "45" },
                { id: 6, name: "音樂", channel_count: "149" },
                { id: 7, name: "科技", channel_count: "47" },
                { id: 8, name: "數碼", channel_count: "23" },
                { id: 9, name: "知識", channel_count: "24" },
                { id: 10, name: "動物圈", channel_count: "27" },
                { id: 11, name: "美食", channel_count: "43" },
                { id: 12, name: "Vtuber", channel_count: "16" },
                { id: 13, name: "明星", channel_count: "857" },
                { id: 14, name: "舞蹈", channel_count: "25" },
                { id: 15, name: "生活", channel_count: "83" },
                { id: 16, name: "綜藝", channel_count: "92" },
                { id: 17, name: "電影", channel_count: "92" },
                { id: 18, name: "電視劇", channel_count: "183" },
                { id: 19, name: "相聲", channel_count: "16" },
                { id: 20, name: "特攝", channel_count: "17" },
                { id: 21, name: "體育", channel_count: "71" },
                { id: 22, name: "星海", channel_count: "7" },
            ],
            isExpand: true,
        };
    },
    computed: {
        height() {
            var rows = 3;
            if (this.isExpand) {
                rows = Math.ceil(this.channels.length / this.columns);
            }
            return rows * 40;
        },
    },
    // 在 hook function created() 內發送 ajax request
    // async created() {
    //     var datas = await channelServ.getChannels();
    //     this.channels = datas.filter((item) => item.name != '熱門');
    // }
};
</script>
<style scoped>
.channel-list {
    overflow: hidden;
    transition: 0.3s;
}

.item {
    float: left;
    width: 50%;
}

.collapse {
    clear: both;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #999;
    font-size: 14px;
    cursor: pointer;
    border-bottom: #e7e7e7 1px solid;
}
</style>

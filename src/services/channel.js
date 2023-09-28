// fetch bilibili 頻道列表資料
// 會有跨域問題 CORS
// 教學內是先用開發環境內的 webpack 的 dev server 設定  proxy 解決

export default {
    async getChannels() {
        var resp = await fetch(
            "https://api.bilibili.com/x/web-interface/web/channel/category/list"
        );
        // 資料解析
        var data = await resp.json();
        return data.data.categories;
    }
}
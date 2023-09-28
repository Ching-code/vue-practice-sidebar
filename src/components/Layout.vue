<template>
    <div class="container">
        <header class="head">
            <slot name="head"></slot>
        </header>
        <div class="mid">
            <div class="left">
                <slot name="left"></slot>
            </div>
            <div class="main">
                <slot name="main"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.container {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}
.head {
    height: 50px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
}
.mid {
    position: absolute;
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0;
}
.left {
    float: left;
    width: 250px;
    height: 100%;
}
.main {
    overflow: hidden;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f4f4f4;
}
</style>

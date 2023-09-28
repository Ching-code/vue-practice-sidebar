<template>
    <Layout>
        <template v-slot:head> Menu </template>
        <template v-slot:left> <Aside /> </template>
        <template v-slot:main> Main </template>
    </Layout>
</template>
<script>
import Aside from "../components/Aside";
import Layout from "../components/Layout";
export default {
    components: {
        Aside,
        Layout,
    },
};
</script>
<style></style>

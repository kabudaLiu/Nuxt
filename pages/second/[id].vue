<template>
    <div>{{ route.params.id }}</div>
</template>

<script setup lang="ts">
useSeoMeta({
    title: "我的神奇网站2",
    ogTitle: "我的神奇网站1",
    description: "这是我的神奇网站，让我来告诉你关于它的一切。",
    ogDescription: "这是我的神奇网站，让我来告诉你关于它的一切。",
    ogImage: "https://example.com/image.png",
    twitterCard: "summary_large_image",
});
const route = useRoute();

// 当访问/posts/1时，route.params.id将为1
console.log(route.params.id);
module.exports = {
    theme: {
        extend: {
            spacing: {
                "1px": "1px",
                "2px": "2px",
                // Add more custom px values as needed
            },
            fontSize: {
                xs: "0.75rem",
                sm: "0.875rem",
                // Add more custom px values as needed
            },
            // Add more custom properties as needed
        },
    },
    // ...
};
</script>

<style></style>

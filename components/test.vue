<template>
  <div>Hello:</div>
  <pre>{{ data }}</pre>
</template>

<script setup lang="ts">
const { $trpc } = useNuxtApp();

const data = await $trpc.test.completions.mutate({
  integrationUuid: "123",
});
</script>

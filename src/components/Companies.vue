// companies.vue
<template>
  <main>
    <h3>Paper Companies</h3>
    <div v-for="(companies, i) in returnedData" :key="i">
      {{ companies.name }} - ${{ companies.net
      }}<button
        @click="$emit('click', { name: 'setNetWorth', id: companies.id });"
      >
        Set Company Value
      </button>
    </div>
  </main>
</template>

<script>
export default {
  props: ["returnedData"]
};
</script>

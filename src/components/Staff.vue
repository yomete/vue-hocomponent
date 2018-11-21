// staff.vue
<template>
  <main>
    <h3>Staff List</h3>
    <div v-for="(staff, i) in returnedData" :key="i">
      {{ staff.name }}: {{ staff.awards }} Salesman of the year Award 🎉
      <button @click="$emit('click', { name: 'increaseAward', id: staff.id });">
        +
      </button>
      <button @click="$emit('click', { name: 'decreaseAward', id: staff.id });">
        -
      </button>
    </div>
  </main>
</template>

<script>
export default {
  props: ["returnedData"]
};
</script>

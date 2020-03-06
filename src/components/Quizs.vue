<template>
  <div class="container">
    <b-card header="Choisissez un quiz" header-tag="header">
      <b-list-group>
        <b-list-group-item
          button
          v-for="(item, index) in quizs"
          :key="item.id"
          @click="action(index)">
          {{ item.nom }}
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </div>
</template>
<script>
export default {
  name: 'Quizs',
  methods: {
    action: function(index) {
      this.$router.push({ name: 'action', params: { id: index }})
    }
  },
  computed: {
    quizs () {
      return this.$store.state.quizs;
    }
  },
  created() {
    this.$store.dispatch('getData');
  }
}
</script>

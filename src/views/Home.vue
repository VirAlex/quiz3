<template>
  <div class="home">
    <img alt="logo" class="mb-4" src="../assets/logo.png">
    <quizs />
  </div>
</template>
<script>
import Quizs from '@/components/Quizs.vue'
export default {
  name: 'Quizs',
  components: {
    Quizs,
  }
};

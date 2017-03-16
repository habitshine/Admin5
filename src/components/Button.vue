<template>
  <a class="btn btn-warning">
    <slot></slot>  
  </a>
</template>

<script>
export default {
  name: 'VButton',

  props: {
    opts: {
        type: Object
    }
  },

  methods: {
    click: function(){
      this.$emit('click');
    }
  }
}
</script>

<style scoped lang=scss>
.mt{margin-top: 15px;}
</style>

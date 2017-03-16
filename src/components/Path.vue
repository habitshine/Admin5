<template>
    <h3 class="page-header">{{data.active}}<small>
        <template v-for="link in data.link">
          <a :href="link.url" v-text="link.text"></a>
          <a>/</a>
        </template>
      </small>
    </h3>
</template>

<script>
export default {
    props: {
        data: {
            required: true
        }
    }
}
</script>

<style scoped lang=scss>

</style>

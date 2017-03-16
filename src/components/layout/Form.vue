<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-body">
                    <slot></slot>
                </div>
                <div class="panel-footer">
                    <div class="btn-group">
                        <!-- 自定义按钮 -->
                        <slot name="btn-group"></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'FormLayout',

    methods: {

    }
}
</script>

<style scoped>
h1 {
  color: #423983;
}
</style>

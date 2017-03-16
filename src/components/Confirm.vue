<template>
<div class="modal" style="display:none;" transition="confirm" v-show="data.show">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button @click="cancel" type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">系统</h4>
      </div>
      <div class="modal-body">
        <p>您确定吗?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal" @click="cancel">返回</button>
        <button type="button" class="btn btn-primary" @click="ok">确定</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
</template>

<script>
export default {
    props: {
        data: {
            required: true
        }
    },
    methods: {
      ok: function(){
        this.data.ok();
        this.data.show = false;
      },
      cancel: function(){
        this.data.show = false;
      }
    }
}
</script>

<style scoped lang=scss>
.modal{display: block;}
.confirm-transition {
}
.confirm-enter {
  animation: confirm-in .5s;
}
.confirm-leave {
  animation: confirm-out .5s;
}
@keyframes confirm-in {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes confirm-out {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;

    transform: translateY(-30px);
  }
}

</style>

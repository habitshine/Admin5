<template>
  <div class="form-group mt">
    <div class="btn-group">
      <a v-for="btn in data.children" href="{{btn.link}}" type="button" class="btn {{btn.class}}">{{btn.text}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
        twoWay: true
    }
  },
  ready: function(){
    var _this = this;
    // 上传初始化
    FileAPI.event.on(document.getElementById(this.data.name), 'change', function (evt){
      var files = FileAPI.getFiles(evt); 
      FileAPI.upload({
        url: './mock/upload',
        files: { file: files },
        progress: function (evt){
          // 响应上传进度
          var pr = parseInt(evt.loaded/evt.total * 100);
          _this.progress = pr;
          _this.progress_show = true;
        },
        complete: function (err, xhr){ 
          // 上传完成回调
          _this.data.value.url = JSON.parse(xhr.response).data.url;
          _this.data.value.id = JSON.parse(xhr.response).data.id;
          _this.progress_show = false;
        }
      });
    })
  },
  data: function() {
    return {
      uploader: {},
      progress: 0,
      progress_show: false
    }
  },
  methods: {
    upload: function(){

    },
    preview: function(){
    }
  }
}
</script>

<style scoped lang=scss>
.mt{margin-top: 15px;}
</style>

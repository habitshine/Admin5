<template>
  <div>
      <h5 class="filter-title">{{data.title}}</h5>
      <input  style="display:none;" id="{{data.id}}"  type="file" class="form-control" >
      <div class="input-group upload">
        <input :placeholder="data.placeholder" readonly @click="preview"  v-model="data.value.url" type="text" class="form-control" >
        <span  class="input-group-btn" >
          <label for="{{data.id}}" class="btn btn-default" type="button"><i class="fa fa-cloud-upload"></i> 上传</label>
        </span>
      </div>
      <div transition="progress" v-show="progress_show" class="upload-progress" :style="{width: progress + '%'}"></div>
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
    // var el = $(this.$el).find("#" + this.data.name).get(0);
    var el = document.getElementById(this.data.id);
    // console.log(el)
    // 上传初始化
    FileAPI.event.on(el, 'change', function (evt){
      var files = FileAPI.getFiles(evt); 
      // 过滤文件类型
      FileAPI.filterFiles(files, function (file, info){
        var warning = true;
        _this.data.ext.forEach(item=>{
          if(-1 < file.name.indexOf(item)) {
            // 开始上传
            FileAPI.upload({
              url: _this.data.url,
              files: { file: files },
              progress: function (evt){
                // 响应上传进度
                var pr = parseInt(evt.loaded/evt.total * 100);
                _this.progress = pr;
                _this.progress_show = true;
              },
              complete: function (err, xhr){ 
                // 上传完成回调
                _this.data.value.url = JSON.parse(xhr.response).data.path;
                _this.data.value.id = JSON.parse(xhr.response).data.id;
                _this.progress_show = false;
              }
            });
            warning = false;
          }
          if(warning) {
            _this.data.value.url = '';
            _this.$dispatch('alert', { 'content': '不允许的文件类型!', 'type': 'error' });
          }
        });
        // console.log(file, info);
      }, function(){

      });
    });
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

.upload{position: relative;overflow: hidden;}
.upload-progress{width: 0;height: 2px;background: #69c;margin:auto;}

.progress-transition {
}
.progress-enter {
  animation: progress-in 1s;
}
.progress-leave {
  animation: progress-out 1s;
}
@keyframes progress-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes progress-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;

  }
}

</style>

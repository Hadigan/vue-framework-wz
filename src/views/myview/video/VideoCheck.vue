<template>
  <div class="animated fadeIn">
    <Row>
      <Col :sm="24" :md="24" :lg="12">
        <h3>伪造视频鉴别</h3>
        <p>上传视频，输出视频是否伪造的</p>
      </Col>
    </Row>

    <Upload
      multiple
      type="drag"
      :on-success="handleSuccess"
      action="//jsonplaceholder.typicode.com/posts/"
    >
      <div style="padding: 20px 0">
        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
        <p>点击或将视频拖拽到此处上传</p>
      </div>
    </Upload>

    <div v-if="checkDone">
      <p>检测结果：</p>
      <p>{{checkResult}}</p>
    </div>
  </div>
</template>

   
<script>
export default {
  data() {
    return {
      checkDone: false,
      checkResult: "该视频是伪造的"
    };
  },
  methods: {
    handleSuccess() {
      console.log("hahha");
      this.checkDone = true;
    }
  }
};
</script>
<template>
	<div class="animated fadeIn">
		<Row>
			<Col :sm="24" :md="24" :lg="12">
			<h3>伪造人脸生成</h3>
			<p>点击按钮生成一张伪造人脸</p>
			</Col>
		</Row>

        <Button type="primary" @click="getFakeFace">Normal</Button>
        <p />
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562926835987&di=201e0c7c5aed2543568e76e50dd9099a&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn12%2F40%2Fw480h360%2F20180418%2Fe4ac-fzihnep3757621.jpg" />
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
			},
            getFakeFace() {
                console.log("click");
            }
		}
	};
</script>

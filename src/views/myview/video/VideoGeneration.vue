<template>
<Tabs value="name1">
    <TabPane label="Face2Face" name="name1">
        <p>Face2Face能够将源视频中的人脸替换到目标视频中</p>
        <Upload multiple type="drag" :on-success="handleSuccess" action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 20px 0">
                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                <p>点击上传源视频</p>
            </div>
        </Upload>
        <Upload multiple type="drag" :on-success="handleSuccess" action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 20px 0">
                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                <p>点击上传目标视频</p>
            </div>
        </Upload>
        <p> 生成的伪造视频: </p>
        <video :src="videoSrc" height=400 autoplay=true controls="controls" />
        <p> </p>
        <Button type="primary" @click="downloadFakeVideo">点击下载伪造视频</Button>
    </TabPane>
    <TabPane label="伪造视频生成方法2" name="name2">
        伪造视频生成方法2
    </TabPane>
    <TabPane label="伪造视频生成方法3" name="name3">
        伪造视频生成方法3
    </TabPane>
</Tabs>
</template>

<script>
export default {
    data() {
        return {
            videoSrc: "https://github.com/Hadigan/video/raw/master/c.MP4",
            checkDone: false,
            checkResult: "该视频是伪造的",
            cityList: [{
                    value: 'New York',
                    label: 'New York'
                },
                {
                    value: 'London',
                    label: 'London'
                },
                {
                    value: 'Sydney',
                    label: 'Sydney'
                },
                {
                    value: 'Ottawa',
                    label: 'Ottawa'
                },
                {
                    value: 'Paris',
                    label: 'Paris'
                },
                {
                    value: 'Canberra',
                    label: 'Canberra'
                }
            ],
            model1: '',
        };
    },
    methods: {
        handleSuccess() {
            console.log("hahha");
            this.checkDone = true;
        },
        downloadFakeVideo() {
            window.open(this.videoSrc, '_blank');
        }
    }
};
</script>

<template>
    <div class="course">
        <h3 class="title">学习vuex</h3>
        <div class="content">
            <video src="http://www.w3school.com.cn/i/movie.ogg" controls="controls"></video>
            <h3>简介</h3>
            <p class="content-p">是的拉萨肯德基拉斯熟练度空间阿萨德了,啦啦啦，我是卖报的小画家，哈哈哈哈。</p>

            <p class="note">
                <strong>注：</strong>分享即可获得免费的一个月vip权益
            </p>
        </div>

        <button class="share-btn" @click="share">分享</button>
    </div>
</template>

<script>
// import { mapState, mapGetters } from "vuex";
import store from "../store";

export default {
    data() {
        return {};
    },
    methods: {
        share() {
            // 简单分享
            let c = confirm("课程分享，地址： http://www.muke.com");
            if (c) {
                // 修改state userStatus
                store.dispatch("getFreeVip").then(res => {
                    alert(res);
                });
            } 
        }
    }
};
</script>

<style lang="less">
.course {
    width: 100%;
    height: auto;
    padding: 16px;
    position: absolute;
    top: 0;
    left: 0;
    .content {
        text-align: left;
        video {
            width: 90%;
        }
        &-p {
            margin-bottom: 20px;
        }
        .note {
            color: #666;
        }
    }
    .share-btn {
        width: 210px;
        height: auto;
        color: #fff;
        background: #373737;
        margin: 10px 0 20px;
        padding:10px 15px;
        box-sizing: border-box;
        border-radius: 5px;
        font-size: 16px;
        outline: none;
    }
}
</style>

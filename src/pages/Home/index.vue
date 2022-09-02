<template>
    <div>
        我是首页
        
    <h1 id="nextTick" ref="hello">hello boy!</h1>
    <Recursion :list="list"></Recursion>
    <button @click="debounceTask">防抖</button>
    </div>
</template>
<script>
// import { onDeactivated } from 'vue';
import Recursion from "./test/recursion.vue"
export default{
    name: "",
    comments: {
        Recursion,
    },
    data(){
        return{
            list:[
                {"name":"q","id":1,"chidren":[
                    {"name":"e","id":1,"chidren":[
                        {"name":"e","id":1}
                    ]}
                ]},
                {"name":"w","id":2,"chidren":[
                    {"name":"e","id":1}
                ]},
            ]
        }
    },
    created() {
        // console.log(this)
        // let that=this;
        // that.$refs.hello.innerHTML="hello girl!";  //写入到DOM元素
        this.$nextTick(() => {
            this.$refs.hello.innerHTML = "hello girl!";
        });
    },
    activated() {
        console.log("组件激活了");
    },
    deactivated() {
        console.log("组件失活了");
    },
    beforeRouteLeave(to, from, next) {
        console.log(to, from);
        next();
    },
    components: { Recursion }
}
</script>
<style scoped>

</style>
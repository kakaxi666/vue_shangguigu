<template>
    <div>
        我是首页
        
    <h1 id="nextTick" ref="hello">hello boy!</h1>
    <a href="">这是一个连接</a>
    <Recursion :list="list"></Recursion>
    <!-- <button @click="debounceTask">防抖</button> -->
    <a-button type="primary" @click="testVueDebounce">
        Primary
      </a-button>
      <a-button type="primary" @click="changeMsg">
        改变名字
      </a-button>
      <a-button type="primary" @click="changeCounter">
        加
      </a-button>
      {{msg}}
      {{counter}}
    </div>
</template>
<script>
// import { onDeactivated } from 'vue';
import Recursion from "./test/recursion.vue"
import VueDebounce from "@/utils/debounce.js"
import {ref} from 'vue'
export default{
    name: "",
    
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
            ],
            message:"HelloWorld"
        }
    },
    setup(){
        console.log("setup");
        let msg = ref('hello');
        console.log(msg);
        function changeMsg(){
            msg.value='nihao'
            console.log(msg)
        }

        const counter = ref(0)
        function changeCounter(){
            counter.value++
        }
        return {msg,changeMsg,counter,changeCounter}
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
    components: {
        Recursion,
    },
    methods:{
        debounceTask(){
            console.log("防抖中。。。")
        },
        testVueDebounce:VueDebounce(()=>{
            console.log('防抖中x。。。')
        },2000)
        //     VueDebounce(this.debounceTask,2000)()
        // }
        

        
    }
}
</script>
<style scoped>
a:link{
    color:red;
}

a:visited{
    color: green;
}

a:hover{
    color: hotpink;
}

a:active{
    color: blue;
}
</style>
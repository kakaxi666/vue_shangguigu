<template>
    <div>
        <ul>
            <li v-for="(l,index) of list" :key="index">
                {{l.name}}{{index}}{{l.id}}
                <ul style="padding-left: 20px;" v-if="l.chidren">
                    <li>
                        <index-child :list="l.chidren" />
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script src="">
export default{
    name: "index-child",
    props: {
        list:Array
    },
    data() {
        return{
        }
    },
    watch:{
        list(newData){
            this.list = newData
        }
    }
}
</script>

<style>

</style>
<template>
    <div>newclass
        <h1>{{ classOne }}</h1>
    </div>
</template>

<script>
export default {
    name: 'AddClass',
    props: ['data'],
    // data: () => ({
    //     classOne: '',
    // }),
    created() {
        this.classOne = this.$route.params.data
    },
    // props: ['firstclass'],
    mounted() {
        // console.log(firstclass)
    },
    methods: {
        // console.log(firstclass)
    }
}
// console.log(firstclass)
</script>
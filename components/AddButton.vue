<template>
    <div>
    <v-btn color="primary" :to="table_name+'/new'">Add</v-btn>
    </div>
</template>

<script>
    export default {
        props:{
            table_name:String,
        }

    }
</script>

<style lang="scss" scoped>

</style>
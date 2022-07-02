<template>
    <div class="form-item">
        <label for="dynamic-date">{{ label }}</label>
        <input type="date" name="dynamic-date" v-model="date" />
    </div>
</template>

<script>
export default {
    props: {
        value: String,
        label: String
    },
    computed: {
        date: {
            get () {
                return this.value
            },
            set (value) {
                this.$emit('update:value', value)
            }
        }
    }
}
</script>

<style scoped>
input {
    min-width: 100%;
}
</style>
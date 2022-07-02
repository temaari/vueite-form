<template>
    <div class="form-item">
        <label for="dynamic-input">{{ label }}</label>
        <input type="text" name="dynamic-input" v-model="inputValue"/>
    </div>
</template>

<script>
export default {
    props: {
        value: String,
        label: String
    },
    computed: {
        inputValue: {
            get () {
                return this.value
            },
            set (data) {
                this.$emit('update:value', data)
            }
        }
    }
}
</script>

<style scoped>
</style>
<template>
    <div class="form-item">
        <label for="dynamic-email">{{ label }}</label>
        <input type="email" name="dynamic-email" v-model="email"/>
    </div>
</template>

<script>
export default {
    props: {
        value: String,
        label: String
    },
    computed: {
        email: {
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
</style>
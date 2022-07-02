<template>
    <div class="form-item">
        <label for="dynamic-label">{{ label }}</label>
        <input :type="type" name="dynamic-input" @input="$emit('change', $event.target.value)" />
    </div>
</template>

<script>
export default {
    emits: { change: null },
    props: {
        label: String,
        type: String
    }
}
</script>

<style scoped>
input {
    min-width: 100%;
}
</style>
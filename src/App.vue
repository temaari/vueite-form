<script>
import BasicForm from './components/basicForm.vue'

export default {
    components: {
        BasicForm
    }
}
</script>

<template>
    <div class="form">
        <h3>Basic form</h3>
        <basic-form />
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
}

#app {
    margin-top: 5vh;
}

.form {
    display: flex;
    flex-direction: column;
    row-gap: 1vh;
    justify-content: center;
    margin: auto;
    width: 35%;
    border: 1px solid black;
    padding: 1em;
}

.form-item {
    display: flex;
    row-gap: 0.5vh;
    flex-direction: column;
    width: 46%;
}

.form-item
input {
    padding-left: 0.4ch;
    height: 3vh;
    font-size: 2.3ch;
    outline: 0;
    border: 0;
    border-bottom: 1px solid black;
}
</style>

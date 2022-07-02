<template>
    <span>
        <div class="form-content">
            <text-form v-model:value="firstName" label="First name"/>
            <text-form v-model:value="lastName" label="Last name"/>
            <email-form v-model:value="emailAddress" label="Email address"/>
            <date-form v-model:value="dateOfBirth" label="Date of birth"/>
        </div>
        <div class="button-group">
            <button type="button" @click="submit">Submit</button>
        </div>
    </span>
</template>

<script>
import TextForm from './textForm.vue'
import EmailForm from './emailForm.vue'
import DateForm from './dateForm.vue'

export default {
    components: {
        TextForm,
        EmailForm,
        DateForm
    },
    data: () => ({
        firstName: '',
        lastName: '',
        emailAddress: '',
        dateOfBirth: ''
    }),
    methods: {
        submit() {
            console.log('submitting')
        }
    }
}
</script>

<style scoped>
    .form-content {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
    }

    .button-group {
        margin-top: 3vh;
        display: flex;
        justify-content: right;
    }

    .button-group
    button {
        width: 5em;
    }
</style>
<template>
    <span class="form-items">
        <div class="form-content">
            <form-item @change="firstName = $event" label="First name" :type="FormItemTypeEnum.Text" />
            <form-item @change="lastName = $event" label="Last name" :type="FormItemTypeEnum.Text" />
            <form-item @change="emailAddress = $event" label="Email Address" :type="FormItemTypeEnum.Email" />
            <form-item @change="dateOfBirth = $event" label="Date of birth" :type="FormItemTypeEnum.Date" />
        </div>
        <div class="button-group">
            <button type="button" @click="cancel">Cancel</button>
            <button type="button" @click="submit">Submit</button>
        </div>
    </span>
</template>

<script>
import { FormItemTypeEnum } from '../shared/Enums'
import FormItem from './formItem.vue'

export default {
    components: {
        FormItem
    },
    data: () => ({
        firstName: '',
        lastName: '',
        emailAddress: '',
        dateOfBirth: '',
        FormItemTypeEnum
    }),
    methods: {
        submit() {
            localStorage.setItem('first_name', this.firstName)
            localStorage.setItem('last_name', this.lastName)
            localStorage.setItem('email_address', this.emailAddress)
            localStorage.setItem('date_of_birth', this.dateOfBirth)
        },
        cancel() {
            localStorage.removeItem('first_name')
            localStorage.removeItem('last_name')
            localStorage.removeItem('email_address')
            localStorage.removeItem('date_of_birth')
        }
    }
}
</script>

<style scoped>
    .form-items {
        display: flex;
        flex-direction: column;
    }
    .form-content {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
    }

    .button-group {
        margin-top: 3vh;
        display: flex;
        gap: 1rem;
        justify-content: right;
    }

    .button-group
    button {
        height: 3rem;
        flex: 1;
    }
</style>
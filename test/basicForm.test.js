import { mount } from '@vue/test-utils'
import { expect } from 'vitest'
import BasicForm from '../src/components/BasicForm.vue'

describe('BasicForm', () => {
    test('BasicForm component is true', () => {
        expect(BasicForm).toBeTruthy()
    })

    test('mount component', () => {
        expect(BasicForm).toBeTruthy()

        const wrapper = mount(BasicForm, {})
        expect(wrapper).toBeTruthy()
    })
})
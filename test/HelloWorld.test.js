import { mount } from '@vue/test-utils'
import { expect } from 'vitest'
import HelloWorld from '../src/components/HelloWorld.vue'

test('mount component with text in msg prop', async () => {
    expect(HelloWorld).toBeTruthy()

    const wrapper = mount(HelloWorld, {
        props: {
            msg: 'Hello from vitest'
        }
    })

    expect(wrapper.text()).toContain('Hello from vitest')
})

test('mount component with button click', async () => {
    expect(HelloWorld).toBeTruthy()

    const wrapper = mount(HelloWorld, {
        props: {
            msg: 'Hello from vitest'
        }
    })

    await wrapper.get('button').trigger('click')

    expect(wrapper.text()).toContain('count is: 1')
})
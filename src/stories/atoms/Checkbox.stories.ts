import type { Meta, StoryObj } from '@storybook/vue3';


import Input from './Input.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {}, // default value
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label:'Label',
    required: true,
    error: true
  },

};




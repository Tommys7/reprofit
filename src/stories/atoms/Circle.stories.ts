import type { Meta, StoryObj } from '@storybook/vue3';


import Circle from './Circle.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta: Meta<typeof Circle> = {
  title: 'Atoms/Circle',
  component: Circle,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {}, // default value
};

export default meta;
type Story = StoryObj<typeof Circle>;

export const Default: Story = {
  args: {
    label: 'Hello',
    img: '../../../src/img/Success.svg',
    alt: 'alt'
  },
};




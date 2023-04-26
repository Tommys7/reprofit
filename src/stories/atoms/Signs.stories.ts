import type { Meta, StoryObj } from '@storybook/vue3';


import Signs from './Signs.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta: Meta<typeof Signs> = {
  title: 'Atoms/Signs',
  component: Signs,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {}, // default value
};

export default meta;
type Story = StoryObj<typeof Signs>;

export const Default: Story = {
  args: {
    src: '../../../src/img/sign.png',
    alt: 'Podpis',
    doctor:'MUDr. Tomáš Bagócsi',
    text:'Vedoucího lékař Reprofit Bratislava',
  },

};




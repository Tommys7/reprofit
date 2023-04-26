import type { Meta, StoryObj } from '@storybook/vue3';


import List from './List.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta: Meta<typeof List> = {
  title: 'Atoms/List',
  component: List,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {}, // default value
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {
    title: 'Léčba neplodnosti',
    links: [
      {label: "IUI (Inseminace)", href: "/#"},
      {label: "IVF s vlastními vajíčky", href: "/#"},
      {label: "IVF s darovanými vajíčky", href: "/#"},
      {label: "IVF s darovanými embryi", href: "/#"},
    ],
  },

};




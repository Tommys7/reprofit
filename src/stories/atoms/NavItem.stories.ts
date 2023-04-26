import type { Meta, StoryObj } from '@storybook/vue3';

import NavItem from './NavItem.vue';


// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof NavItem> = {
  title: 'Atoms/NavItem',
  component: NavItem,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: { }, // default value
};

export default meta;
type Story = StoryObj<typeof NavItem>;

export const Default: Story = {
  args: {
    title: "Default",
    options: [
      {label: "Novinky", link: "/novinky"},
      {label: "FAQ", link: "/faq"},
    ],
  },
  
};

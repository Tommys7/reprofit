import type { Meta, StoryObj } from '@storybook/vue3';

import About from './About.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof About> = {
  title: 'Organisms/About',
  component: About,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
  },
  args: {  }, // default value
};

export default meta;
type Story = StoryObj<typeof About>;

export const Default: Story = {
  args: {
    items: [
    ]
  },
};


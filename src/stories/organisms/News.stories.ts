import type { Meta, StoryObj } from '@storybook/vue3';

import News from './News.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof News> = {
  title: 'Organisms/News',
  component: News,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autoNews'],
  argTypes: {
  },
  args: {  }, // default value
};

export default meta;
type Story = StoryObj<typeof News>;

export const Default: Story = {
  args: {
  },
};


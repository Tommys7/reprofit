import type { Meta, StoryObj } from '@storybook/vue3';

import Footer from './Footer.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer',
  component: Footer,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autoFooter'],
  argTypes: {
  },
  args: {  }, // default value
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
  },
};


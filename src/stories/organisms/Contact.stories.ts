import type { Meta, StoryObj } from '@storybook/vue3';

import Contact from './Contact.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof Contact> = {
  title: 'Organisms/Contact',
  component: Contact,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
  },
  args: {  }, // default value
};

export default meta;
type Story = StoryObj<typeof Contact>;

export const Default: Story = {
  args: {
  },
};


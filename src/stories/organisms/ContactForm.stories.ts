import type { Meta, StoryObj } from '@storybook/vue3';

import ContactForm from './ContactForm.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof ContactForm> = {
  title: 'Organisms/ContactForm',
  component: ContactForm,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autoContactForm'],
  argTypes: {
  },
  args: {  }, // default value
};

export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {
  args: {
  },
};


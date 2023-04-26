import type { Meta, StoryObj } from '@storybook/vue3';

import Banner from './Banner.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof Banner> = {
  title: 'Organisms/Banner',
  component: Banner,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
  },
  args: {  }, // default value
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Default: Story = {
  args: {
    img: '',
    alt: '',
    bannerTitle: '',
    bannerText: '',
  },
};


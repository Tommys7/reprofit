import type { Meta, StoryObj } from '@storybook/vue3';

import Slider from './Slider.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof Slider> = {
  title: 'Organisms/Slider',
  component: Slider,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
  },
  args: {  }, // default value
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    sliderTitle:"",
    sliderText:"",
    sliderImg:"",
    sliderAlt:"",
  },
  
};


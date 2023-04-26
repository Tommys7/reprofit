import type { Meta, StoryObj } from '@storybook/vue3';


import SolutionCard from './SolutionCard.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta: Meta<typeof SolutionCard> = {
  title: 'Molecules/SolutionCard',
  component: SolutionCard,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {}, // default value
};

export default meta;
type Story = StoryObj<typeof SolutionCard>;

export const Default: Story = {
  args: {
    img: '../../../src/img/Data Display/Images/Card care/Image01.png',
    alt: 'alt',
    title: 'title',
    label: 'label',
  },
};




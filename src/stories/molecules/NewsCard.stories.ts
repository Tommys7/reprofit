import type { Meta, StoryObj } from '@storybook/vue3';


import NewsCard from './NewsCard.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta: Meta<typeof NewsCard> = {
  title: 'Molecules/NewsCard',
  component: NewsCard,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {}, // default value
};

export default meta;
type Story = StoryObj<typeof NewsCard>;

export const Default: Story = {
  args: {
    src: '../../../src/img/Data Display/Images/Card News/Image01.png',
    alt: 'Doktor',
    tag: 'Brno',
    title: 'Reprofit online se zkoušenou doktorou Patrícií Nižníkovou',
    date: '08. 08. 2022',
  },
};




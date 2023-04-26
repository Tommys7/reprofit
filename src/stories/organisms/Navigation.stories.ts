import type { Meta, StoryObj } from '@storybook/vue3';

import Navigation from './Navigation.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof Navigation> = {
  title: 'Organisms/Navigation',
  component: Navigation,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
  },
  args: {  }, // default value
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  args: {
    items: [
      {label: "Kliniky", options: [{label:"Praha",link:"/reprofit/praha"},{label:"Brno",link:"/reprofit/brno"}]},
      {label: "Neplodnost", options: [{label:"Lorem",link:"/reprofit/praha"},{label:"Ipsum",link:"/reprofit/brno"}]},
      {label: "Genetika", options: [{label:"Lorem",link:"/reprofit/praha"},{label:"Ipsum",link:"/reprofit/brno"}]},
      {label: "Gynekologie", options: [{label:"Lorem",link:"/reprofit/praha"},{label:"Ipsum",link:"/reprofit/brno"}]},
      {label: "Dárcovství", options: [{label:"Lorem",link:"/reprofit/praha"},{label:"Ipsum",link:"/reprofit/brno"}]},
      {label: "Úspěšnost", options: [{label:"Lorem",link:"/reprofit/praha"},{label:"Ipsum",link:"/reprofit/brno"}]},
      {label: "Ceník", options: [{label:"Lorem",link:"/reprofit/praha"},{label:"Ipsum",link:"/reprofit/brno"}]},
    ]
  },
};


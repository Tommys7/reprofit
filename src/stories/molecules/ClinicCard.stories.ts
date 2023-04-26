import type { Meta, StoryObj } from '@storybook/vue3';


import ClinicCard from './ClinicCard.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta: Meta<typeof ClinicCard> = {
  title: 'Molecules/ClinicCard',
  component: ClinicCard,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {}, // default value
};

export default meta;
type Story = StoryObj<typeof ClinicCard>;

export const Default: Story = {
  args: {
    src: '../../../src/img/Data Display/Images/Clinic/bratislava.png',
    alt: 'alt',
    label: 'Klinika Brno',
    flags:[
      {src:"../../../src/img/france.svg",alt:"Francie"},
      {src:"../../../src/img/france.svg",alt:"Francie"},
      {src:"../../../src/img/france.svg",alt:"Francie"}
    ]
  },
};




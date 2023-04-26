import type { Meta, StoryObj } from '@storybook/vue3';


import Select from './Select.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    
  },
  args: {}, // default value
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label:'label',
    required:'',
    placeholder: 'Select option...',
    options: [
      {id: 1, label: 'Čeština '}, 
      {id: 2, label: 'Angličtina'}, 
      {id: 3, label: 'Němčina'},
      {id: 4, label: 'Francouzština'}, 
      {id: 5, label: 'Italština'}, 
      {id: 6, label: 'Maďarština'},
      {id: 7, label: 'Rumunština'}, 
      {id: 8, label: 'Polština'}, 
      {id: 9, label: 'Slovenština'},
    ]
  },
};


export const Language: Story = {
  args: {
    placeholder: 'Select option...',
    default: 1,
    borderless: true,
    options: [
      {id: 1, label: '<img src="../../../src/img/Czech.svg">'}, 
      {id: 2, label: '<img src="../../../src/img/Englisch.svg">'}, 
      {id: 3, label: '<img src="../../../src/img/France.svg">'}, 
      {id: 4, label: '<img src="../../../src/img/Germany.svg">'}, 
      {id: 5, label: '<img src="../../../src/img/Hungary.svg">'}, 
      {id: 6, label: '<img src="../../../src/img/Romania.svg">'}, 
    ]
  },
};


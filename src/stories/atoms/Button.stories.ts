import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    icon: {
      options: [null, 'arrow', 'user','send'],
      control: { type: 'select' },
    },
    size: {
      options: [null, 'small', 'large', 'huge'],
      control: {type: 'select'}
    },
  },
  args: { primary: false, secondary: false }, // default value
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    primary: false,
    secondary: false,
    label: "Default"
  },
};


export const Primary: Story = {
  args: {
    primary: true,
    secondary: false,
    label: "Primary",
  },
};


export const Secondary: Story = {
  args: {
    primary: false,
    secondary: true,
    label: "Secondary"
  },
};

export const Huge: Story = {
  args: {
    primary: false,
    secondary: false,
    huge: true,
    label: "Huge"
  },
};

export const Large: Story = {
  args: {
    primary: false,
    secondary: false,
    large: true,
    label: "Large"
  },
};


export const Arrow: Story = {
  args: {
    primary: false,
    secondary: false,
    large: false,
    label: "Button with arrow",
    icon: 'arrow',
  },
};

export const send: Story = {
  args: {
    primary: false,
    secondary: false,
    large: false,
    label: "Button with arrow",
    icon: 'send',
  },
};

export const Shadow: Story = {
  args: {
    primary: false,
    secondary: false,
    large: false,
    label: "Button with arrow",
    icon: 'arrow',
    shadow: true,
  },
};
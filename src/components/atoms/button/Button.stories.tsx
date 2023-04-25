import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import buttonStyles from './button.module.css';

const meta: Meta<typeof Button> = {
  title: 'atoms/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label:'Button',
    children: 'primary btn',
    variant:buttonStyles["primary-button"]
  },
};

















// import React from 'react';
// import {Button} from './Button';

// export default {
//   title: 'Button',
//   component: Button,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//     onClick: { action: 'clicked' },
//   },
// };

// const Template = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };








// import React from "react";
// import { action } from "@storybook/addon-actions";
// import { Button } from "./Button";

// export default {
//   title: "Button",
//   component: Button,
// };

// export const Primary = ({children}:any) => (
//   <Button variant="primary-button" onClick={action("clicked")}>
//     {children}
//   </Button>
// );

// export const Secondary = ({label}:any) => (
//   <Button variant="secondary-button" onClick={action("clicked")}>
//     {label}
//   </Button>
// );

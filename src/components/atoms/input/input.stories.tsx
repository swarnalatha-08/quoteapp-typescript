import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import Input from "./input";
import inputStyles from '../input/input.module.css';

export default {
    title: 'atoms/Input',
    component: Input,
  } as Meta;
 
  type Story = StoryObj<typeof Input>;
export const BasicInput: Story = {
    args: {
        placeholder: 'basic input',
        variant: inputStyles["input"]
    }
}
export const LargeInput: Story = {
    args: {
        placeholder: 'Large input'
    }
}
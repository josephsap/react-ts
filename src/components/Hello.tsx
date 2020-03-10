import React from 'react';
import { TextField } from './TextField';
import Cars from './Cars';
// https://github.com/typescript-cheatsheets/react-typescript-cheatsheet

export interface HelloProps {
  compiler: string; 
  framework: string; 
}

export const Hello = (props: HelloProps) => {
  return (
    <>
      <h1>Hello from {props.compiler} and {props.framework}!</h1>
      <TextField text="234567" />
      <Cars />
    </>
  )
};
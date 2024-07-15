import { PropsWithChildren } from 'react';

export type PropsWithClassName = {
  className?: string;
};

export type PropsWithClassNameAndChildren = PropsWithChildren & PropsWithClassName;

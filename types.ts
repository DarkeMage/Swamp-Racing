
import React from 'react';

export interface SectionProps {
  id: string;
  number?: string;
  title: string;
  children: React.ReactNode;
}

export interface GridItemProps {
  span?: number;
  title?: string;
  content: string | React.ReactNode;
  label?: string;
}
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root') as HTMLElement;

const initialChildren = (
  <StrictMode>
    <div>Hello!</div>
  </StrictMode>
);

const root = createRoot(container);
root.render(initialChildren);

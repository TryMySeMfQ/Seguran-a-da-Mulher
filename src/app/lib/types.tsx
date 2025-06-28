// src/lib/types.ts
import React from 'react';
export type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export type ApiEndpoint = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  description: string;
};
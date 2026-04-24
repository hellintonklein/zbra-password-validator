import React from 'react';

export const FormContent = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col space-y-8 align-stretch">
    {children}
  </div>
);

export const HeaderGroup = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col space-y-1 text-center md:text-left">
    {children}
  </div>
);

export const SidebarContent = ({ children }: { children: React.ReactNode }) => (
  <div className="flex-1 flex flex-col space-y-8">
    {children}
  </div>
);

export const RequirementsGroup = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col space-y-3">
    {children}
  </div>
);

export const RequirementsList = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col space-y-1">
    {children}
  </div>
);

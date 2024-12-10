import React from 'react';
import { AppSidebar } from '../components/sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
          <AppSidebar />
          <main className="flex-1">{children}</main>
        </div>
  );
};

export default Layout;

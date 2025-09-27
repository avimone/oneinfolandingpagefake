"use client";
import { usePathname } from 'next/navigation';
import Navigation from './Navigation';

const NavigationWrapper = () => {
  const pathname = usePathname();
  
  return <Navigation activeRoute={pathname} />;
};

export default NavigationWrapper;

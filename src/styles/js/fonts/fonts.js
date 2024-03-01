// * google font imports *
import { Open_Sans, Roboto_Mono } from '@next/font/google';

// * google fonts *
export const FontSansSerifDefault = Open_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});
export const FontMonospaceDefault = Roboto_Mono({
  weight: ['300', '400'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Lucida Console', 'monospace'],
});

// * local fonts *
export const FontDisplayDefault = 'Hudson-NY-Serif';

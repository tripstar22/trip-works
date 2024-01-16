import { Open_Sans, Roboto_Mono } from '@next/font/google';

// Google Fonts
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

// Local Fonts
export const FontDisplayDefault = 'Hudson-NY-Serif';

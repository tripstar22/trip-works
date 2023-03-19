import { Source_Sans_Pro, Roboto_Mono } from '@next/font/google';

// Google Fonts
export const FontSansSerifDefault = Source_Sans_Pro({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Times New Roman', 'Garamond', 'serif'],
});
export const FontMonospaceDefault = Roboto_Mono({
  weight: ['300', '400'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Lucida Console', 'monospace'],
});

// Local Fonts
export const FontDisplayDefault = 'Hudson-NY-Serif';
declare module 'path';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module '*.webp';
declare module '*.pdf';
declare module '*.docx';
declare module '*.doc';
declare module '*.xlsx';
declare module '*.xls';

declare module '*.svg' {
  const content: any;
  export default content;
}

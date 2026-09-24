export type Language = 'en' | 'bn';

export interface VideoItem {
  id: string;
  title: string;
  tag: string;
  embedUrl: string;
  sourceUrl: string;
  platform: 'youtube' | 'facebook';
  aspectRatio?: '16/9' | '9/16';
}

export interface GraphicItem {
  id: string;
  src: string;
  imageUrl?: string;
  title: string;
  category: string;
  alt: string;
}

export interface SoftwareTool {
  id: string;
  name: string;
  shortName: string;
  category: 'Video Editing' | 'Motion & VFX' | 'Graphic Design' | 'Digital Marketing';
  roleTag: string;
  description: string;
  badgeBg: string;
  badgeColor: string;
  accentBorder: string;
  level: string;
}

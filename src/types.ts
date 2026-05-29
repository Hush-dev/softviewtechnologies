/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId =
  | 'home'
  | 'about'
  | 'products'
  | 'services'
  | 'industries'
  | 'training'
  | 'projects'
  | 'gallery'
  | 'careers'
  | 'contact'
  | 'lead-hub';

export interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  location: string;
  description: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  icon: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  specs: string[];
  benefit: string;
  icon: string;
}

export interface ProductDetail {
  id: string;
  title: string;
  tagline: string;
  description: string;
  specs: { label: string; value: string }[];
  features: string[];
  applications: string[];
  icon: string;
}

export interface IndustrySector {
  id: string;
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
  features: string[];
  icon: string;
}

export interface CareerOpportunity {
  id: string;
  title: string;
  department: string;
  experience: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'panels' | 'commissioning' | 'infrastructure' | 'lab';
  desc: string;
  iconName: string;
}

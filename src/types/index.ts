export interface CakeType {
  category: string;
  slug: string;
  flavors: FlavorSection[];
}

export interface FlavorSection {
  flavors: string[];
  sizes: {
    size: string;
    price: number;
  }[];
}

export interface CupcakeType {
  flavors: string[];
  pricing: {
    quantity: number;
    price: number;
  }[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}

export interface SocialMedia {
  platform: string;
  url: string;
  icon: React.ElementType;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}
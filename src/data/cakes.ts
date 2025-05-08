import { CakeType, CupcakeType } from '../types';

export const cakesData: CakeType[] = [
  {
    category: 'Sponge Cakes',
    slug: 'sponge-cakes',
    flavors: [
      {
        flavors: ['Blackforest', 'Whiteforest', 'Red velvet', 'Purple velvet'],
        sizes: [
          { size: '1kg', price: 2400 },
          { size: '1.5kg', price: 3300 },
          { size: '2kg', price: 4100 },
          { size: '2.5kg', price: 5000 },
          { size: '3kg', price: 7000 },
          { size: '3.5kg', price: 8000 },
          { size: '4kg', price: 9000 },
        ],
      },
      {
        flavors: ['Baileys Whiteforest cake'],
        sizes: [
          { size: '1kg', price: 3500 },
          { size: '1.5kg', price: 5000 },
          { size: '2kg', price: 6000 },
          { size: '2.5kg', price: 7200 },
          { size: '3kg', price: 8500 },
          { size: '3.5kg', price: 9500 },
          { size: '4kg', price: 10000 },
        ],
      },
    ],
  },
  {
    category: 'Basic Butter Cakes',
    slug: 'basic-butter-cakes',
    flavors: [
      {
        flavors: ['Vanilla', 'Strawberry', 'Blueberry', 'Raspberry', 'Marble'],
        sizes: [
          { size: '1kg', price: 2400 },
          { size: '1.5kg', price: 3500 },
          { size: '2kg', price: 4300 },
          { size: '2.5kg', price: 5300 },
          { size: '3kg', price: 6200 },
          { size: '3.5kg', price: 7300 },
          { size: '4kg', price: 8200 },
        ],
      },
      {
        flavors: ['Lemon', 'Orange'],
        sizes: [
          { size: '1kg', price: 2600 },
          { size: '1.5kg', price: 3600 },
          { size: '2kg', price: 4600 },
          { size: '2.5kg', price: 5600 },
          { size: '3kg', price: 6500 },
          { size: '3.5kg', price: 7600 },
          { size: '4kg', price: 8800 },
        ],
      },
      {
        flavors: ['Chocolate', 'Red Velvet', 'Oreo (Cookies and cream)'],
        sizes: [
          { size: '1kg', price: 2600 },
          { size: '1.5kg', price: 3600 },
          { size: '2kg', price: 4600 },
          { size: '2.5kg', price: 5700 },
          { size: '3kg', price: 6600 },
          { size: '3.5kg', price: 7900 },
          { size: '4kg', price: 8900 },
        ],
      },
      {
        flavors: ['Carrot', 'Banana'],
        sizes: [
          { size: '1kg', price: 2600 },
          { size: '1.5kg', price: 3600 },
          { size: '2kg', price: 4600 },
          { size: '2.5kg', price: 5700 },
          { size: '3kg', price: 6600 },
          { size: '3.5kg', price: 7900 },
          { size: '4kg', price: 8900 },
        ],
      },
    ],
  },
  {
    category: 'Rich Butter Cakes',
    slug: 'rich-butter-cakes',
    flavors: [
      {
        flavors: ['Rich Blueberry', 'Rich Strawberry', 'Rich Raspberry', 'Pinacolada'],
        sizes: [
          { size: '1kg', price: 3100 },
          { size: '1.5kg', price: 4000 },
          { size: '2kg', price: 5000 },
          { size: '2.5kg', price: 6000 },
          { size: '3kg', price: 7000 },
          { size: '3.5kg', price: 8000 },
          { size: '4kg', price: 9000 },
        ],
      },
      {
        flavors: ['Lotus Biscotti'],
        sizes: [
          { size: '1kg', price: 2700 },
          { size: '1.5kg', price: 3500 },
          { size: '2kg', price: 4900 },
          { size: '2.5kg', price: 6100 },
          { size: '3kg', price: 7100 },
          { size: '3.5kg', price: 8500 },
          { size: '4kg', price: 9600 },
        ],
      },
    ],
  },
];

export const cupcakesData: CupcakeType = {
  flavors: [
    'Vanilla', 'Strawberry', 'Marble', 'Blueberry', 'Raspberry', 
    'Red Velvet', 'Chocolate', 'Oreo', 'Lotus Biscotti', 
    'Lemon', 'Orange', 'Carrot', 'Banana'
  ],
  pricing: [
    { quantity: 6, price: 700 },
    { quantity: 12, price: 1400 },
    { quantity: 18, price: 2200 },
    { quantity: 24, price: 4600 },
  ],
};
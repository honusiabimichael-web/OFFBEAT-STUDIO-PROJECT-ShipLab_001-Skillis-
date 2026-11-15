export const images = {
  copper: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1100&q=85',
  blonde: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85',
  nails: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85',
  bob: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85',
  blue: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=85',
  studio: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85',
  hair: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=85',
  hands: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1000&q=85',
};
export const services = [
  { category: 'Hair', name: 'Creative colour', description: 'Vivid, soft, or something in between — colour formulated around the finish you want to wear.', price: 'From GH₵ 350', image: images.copper },
  { category: 'Hair', name: 'Alt cuts', description: 'Shags, mullets, crops and expressive shapes, cut with intention and built to be restyled at home.', price: 'From GH₵ 180', image: images.hair },
  { category: 'Hair', name: 'Wash, style & finish', description: 'A thoughtful reset, a fresh finish, or the final touch before your next big moment.', price: 'From GH₵ 120', image: images.blonde },
  { category: 'Nails', name: 'Custom nail art', description: 'Editorial sets, playful details and one-of-one designs for hands that deserve a point of view.', price: 'From GH₵ 150', image: images.nails },
  { category: 'Nails', name: 'Gel manicure', description: 'A clean, considered manicure with a long-wearing finish and your choice of colour.', price: 'From GH₵ 100', image: images.hands },
];
export const looks = [
  { title: 'Graphic bob', tag: 'COLOUR', category: 'Hair', image: images.bob },
  { title: 'Indigo crop', tag: 'CUT + COLOUR', category: 'Hair', image: images.blue },
  { title: 'Copper shag', tag: 'ALT CUT', category: 'Hair', image: images.copper },
  { title: 'After-hours set', tag: 'NAIL ART', category: 'Nails', image: images.nails },
  { title: 'Studio finish', tag: 'STYLE', category: 'Hair', image: images.blonde },
  { title: 'Colour study', tag: 'NAIL ART', category: 'Nails', image: images.hands },
];

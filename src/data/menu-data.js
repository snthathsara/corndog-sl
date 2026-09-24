export const MENU_ITEMS = [
  // --- 1. MAINS: KOREAN CORN DOGS & SIGNATURES (4 Items) ---
  {
    id: 'cd-mozzarella-corndog',
    name: 'Full Mozzarella Corn Dog',
    category: 'mains',
    categoryLabel: 'Mains · Korean Corn Dogs',
    price: 'Rs. 1,450',
    description: '100% whole molten mozzarella cheese skewered on wood, hand-dipped in our signature sweet yeasted batter, rolled in golden panko crumbs, fried to a crisp crunch, and finished with honey mustard and ketchup zig-zag.',
    notes: 'Epic mozzarella cheese pull, light cane sugar dusting, honey mustard & ketchup.',
    dietary: ['Bestseller', '100% Mozzarella Pull', 'Vegetarian Friendly'],
    pairing: 'Korean Dalgona Honeycomb Latte',
    image: '/corndog-hero.jpg',
    prepTime: 'Fried Fresh to Order'
  },
  {
    id: 'cd-potato-gamja-corndog',
    name: 'Potato Mozzarella Corn Dog (Gamja)',
    category: 'mains',
    categoryLabel: 'Mains · Korean Corn Dogs',
    price: 'Rs. 1,650',
    description: 'The viral Korean street favorite: Molten mozzarella and chicken sausage enveloped in diced golden french fries and extra-crispy panko breadcrumbs, drizzled with sweet honey mustard and fiery sriracha mayo.',
    notes: 'Crunchy potato cube crust, gooey cheese core, sweet & spicy drizzle.',
    dietary: ['Street Food Icon', 'Extra Crunchy', 'Chef Recommendation'],
    pairing: 'Iced Korean Americano (Ah-Ah)',
    image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Hand-Rolled in Potato Cubes'
  },
  {
    id: 'cd-half-and-half',
    name: 'Half & Half Corn Dog (Cheese & Sausage)',
    category: 'mains',
    categoryLabel: 'Mains · Korean Corn Dogs',
    price: 'Rs. 1,350',
    description: 'The best of both worlds: Top half stretchy premium mozzarella cheese, bottom half juicy seasoned chicken bockwurst sausage, golden-fried to perfection with our classic sweet sugar glaze.',
    notes: 'Stretchy cheese first bite, savory juicy sausage finale, classic panko crunch.',
    dietary: ['Crowd Favorite', 'Cheese & Sausage', 'Halal Chicken Bockwurst'],
    pairing: 'Korean Fresh Strawberry Milk',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Fried Golden to Order'
  },
  {
    id: 'cd-ramen-crusted',
    name: 'Crispy Ramen Crusted Corn Dog',
    category: 'mains',
    categoryLabel: 'Mains · Korean Corn Dogs',
    price: 'Rs. 1,550',
    description: 'Dipped in batter and generously coated with crushed dry ramen noodles before deep-frying for the ultimate shatteringly crisp crunch. Stuffed with stretchy mozzarella and chicken sausage, drizzled with gochujang cheese sauce.',
    notes: 'Ultra-crunchy ramen noodle exterior, gooey molten center, spicy cheese drizzle.',
    dietary: ['Extreme Crunch', 'Street Food Innovation', 'Spicy Gochujang Mayo'],
    pairing: 'Sparkling Yuzu Citrus Cooler',
    image: '/korean-ramen-corndog.jpg',
    prepTime: 'Crusted with Crispy Ramen'
  },

  // --- 2. SNACKS & SIDES: KOREAN STREET BITES (3 Items) ---
  {
    id: 'cd-yangnyeom-chicken',
    name: 'Korean Yangnyeom Chicken Bites',
    category: 'snacks',
    categoryLabel: 'Snacks & Street Bites · Light Plates',
    price: 'Rs. 1,750',
    description: 'Double-fried boneless crispy chicken chunks tossed in sticky, sweet, and mildly spicy authentic Korean yangnyeom red chili glaze, showered with toasted white sesame seeds and crushed peanuts. Served with yellow pickled radish.',
    notes: 'Crisp double-fry crunch, sweet spicy sticky glaze, toasted sesame aroma.',
    dietary: ['Halal Chicken', 'Sweet & Spicy', 'Korean Night Market Classic'],
    pairing: 'Iced Korean Americano (Ah-Ah)',
    image: '/korean-yangnyeom-chicken.jpg',
    prepTime: 'Wok Glazed Fresh'
  },
  {
    id: 'cd-cheesy-tteokbokki',
    name: 'Cheesy Tteokbokki',
    category: 'snacks',
    categoryLabel: 'Snacks & Street Bites · Light Plates',
    price: 'Rs. 1,850',
    description: 'Chewy cylinder Korean rice cakes, fish cakes, and scallions simmered in rich, sweet & savory gochujang chili stew, blanketed with molten torch-seared mozzarella cheese that stretches with every forkful.',
    notes: 'Chewy rice cake texture, authentic gochujang heat, rich molten mozzarella layer.',
    dietary: ['Authentic Recipe', 'Rich & Comforting', 'Torch-Melted Mozzarella'],
    pairing: 'Korean Fresh Strawberry Milk',
    image: '/korean-cheesy-tteokbokki.jpg',
    prepTime: 'Simmered in Cast Iron'
  },
  {
    id: 'cd-kimchi-fries',
    name: 'Kimchi Cheese Loaded Fries',
    category: 'snacks',
    categoryLabel: 'Snacks & Street Bites · Light Plates',
    price: 'Rs. 1,400',
    description: 'Piping hot golden shoestring fries seasoned with Korean seaweed salt, loaded with warm melted cheddar cheese sauce, caramelized pan-fried kimchi, spicy Japanese kewpie mayo, and toasted nori flakes.',
    notes: 'Crispy golden fries, tangy caramelized kimchi, velvety cheese sauce drizzle.',
    dietary: ['Shareable Snack', 'Umami Packed', 'Crispy Golden Fries'],
    pairing: 'Brown Sugar Bingsu Latte',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Loaded Hot & Crispy'
  },

  // --- 3. SPECIALTY COFFEE & SIPS (4 Items) ---
  {
    id: 'cd-dalgona-latte',
    name: 'Korean Dalgona Honeycomb Latte',
    category: 'sips',
    categoryLabel: 'Korean Coffee · Handcrafted Sips',
    price: 'Rs. 1,150',
    description: 'Chilled silky fresh milk layered with whipped golden dalgona coffee foam and topped with crunchy honeycomb toffee candy chunks made in-house. As the toffee melts, the drink transforms into rich caramel nectar.',
    notes: 'Whipped bittersweet coffee cream, crunchy homemade honeycomb toffee candy.',
    dietary: ['Viral Phenomenon', 'Korean Cafe Signature', 'Sweet & Velvety'],
    pairing: 'Full Mozzarella Corn Dog',
    image: 'https://images.unsplash.com/photo-1587080413959-06b859fb107d?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Whipped to Order'
  },
  {
    id: 'cd-iced-americano',
    name: 'Iced Korean Americano (Ah-Ah / 아아)',
    category: 'sips',
    categoryLabel: 'Korean Coffee · Handcrafted Sips',
    price: 'Rs. 850',
    description: 'The defining daily drink of Seoul youth culture: Double specialty espresso pulled fresh over crystal-clear ice and filtered cold water. Clean, bold, ultra-refreshing with subtle cocoa and nutty undertones.',
    notes: 'Bold double espresso extraction, crystal ice, zero sugar, crisp finish.',
    dietary: ['Seoul Cafe Essential', 'Zero Calorie / Sugar Free', 'Double Espresso'],
    pairing: 'Potato Mozzarella Corn Dog (Gamja)',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Double Espresso Pulled Fresh'
  },
  {
    id: 'cd-brown-sugar-latte',
    name: 'Brown Sugar Bingsu Latte',
    category: 'sips',
    categoryLabel: 'Korean Coffee · Handcrafted Sips',
    price: 'Rs. 1,250',
    description: 'Rich chilled whole milk lined with slow-simmered Taiwanese brown sugar tiger stripes, balanced with a bold ristretto shot of espresso and crowned with salted mascarpone cream foam.',
    notes: 'Brown sugar caramel tiger stripes, salted cream cheese foam, dark roast espresso.',
    dietary: ['Dessert Coffee', 'Cream Foam Crown', 'Rich & Indulgent'],
    pairing: 'Crispy Ramen Crusted Corn Dog',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Artisan Tiger Striped'
  },
  {
    id: 'cd-condensed-milk-kopi',
    name: 'Condensed Milk Iced Kopi',
    category: 'sips',
    categoryLabel: 'Korean Coffee · Handcrafted Sips',
    price: 'Rs. 980',
    description: 'Rich dark espresso pulled directly over creamy sweetened condensed milk and whole milk, vigorously shaken with crushed ice for a smooth, velvety, nostalgic cafe treat.',
    notes: 'Dark espresso boldness, velvety sweetened milk, chilled over crushed ice.',
    dietary: ['Asian Cafe Classic', 'Sweet & Strong', 'Shaken Over Ice'],
    pairing: 'Korean Yangnyeom Chicken Bites',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Pulled & Shaken Fresh'
  },

  // --- 4. BEVERAGES & REFRESHERS (3 Items) ---
  {
    id: 'cd-strawberry-milk',
    name: 'Korean Fresh Strawberry Milk (Ttalgi-uyu)',
    category: 'refreshers',
    categoryLabel: 'Korean Refreshers & Fruit Drinks',
    price: 'Rs. 1,100',
    description: 'Authentic Korean cafe favorite made with homemade fresh strawberry compote, ripe diced strawberry fruit chunks, and silky chilled fresh dairy milk. Gently shake before sipping.',
    notes: 'Chunky real strawberry fruit bits, house strawberry compote, pure fresh milk.',
    dietary: ['100% Real Strawberries', 'No Artificial Flavors', 'Cafe Bestseller'],
    pairing: 'Half & Half Corn Dog (Cheese & Sausage)',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Layered Fresh'
  },
  {
    id: 'cd-yuzu-cooler',
    name: 'Sparkling Yuzu Citrus Cooler',
    category: 'refreshers',
    categoryLabel: 'Korean Refreshers & Fruit Drinks',
    price: 'Rs. 950',
    description: 'Fragrant Korean yuja (citron) marmalade shaken with ice-cold sparkling soda water, fresh garden mint leaves, and sliced lime. Fizzy, aromatic, and the perfect palate cleanser for hot fried snacks.',
    notes: 'Aromatic Korean yuja marmalade, effervescent sparkling soda, bruised mint.',
    dietary: ['Naturally Refreshing', 'Sparkling Fizz', 'Zesty Korean Citron'],
    pairing: 'Full Mozzarella Corn Dog',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Sparkling Shaken'
  },
  {
    id: 'cd-peach-oolong',
    name: 'Iced Peach Oolong Tea',
    category: 'refreshers',
    categoryLabel: 'Korean Refreshers & Fruit Drinks',
    price: 'Rs. 900',
    description: 'Slow cold-steeped roasted Taiwanese oolong tea infused with juicy white peach puree and sweet honey, topped with organic chia seeds and a sprig of fresh rosemary.',
    notes: 'Floral roasted oolong notes, sweet orchard white peach, herbal rosemary accent.',
    dietary: ['Antioxidant Rich', 'Cold-Steeped Tea', 'Low Sugar'],
    pairing: 'Kimchi Cheese Loaded Fries',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Cold-Steeped Brew'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'gallery-corndogs',
    title: 'Cheesy Korean Corn Dogs & Mozzarella Pulls',
    subtitle: 'From viral Gamja potato dogs to crispy ramen crusts & 100% whole mozzarella pulls',
    category: 'Korean Corn Dogs 🧀',
    image: '/corndog-hero.jpg'
  },
  {
    id: 'gallery-street-food',
    title: 'Korean Street Food, Bites & Tteokbokki',
    subtitle: 'Yangnyeom sweet-spicy fried chicken bites and molten cheesy gochujang tteokbokki',
    category: 'Street Bites 🍗',
    image: '/korean-cheesy-tteokbokki.jpg'
  },
  {
    id: 'gallery-dalgona-coffee',
    title: 'Korean Cafe Coffee & Dalgona Lattes',
    subtitle: 'Whipped honeycomb toffee dalgona lattes & Seoul’s signature Iced Americano',
    category: 'Korean Coffee ☕',
    image: 'https://images.unsplash.com/photo-1587080413959-06b859fb107d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gallery-fruit-sips',
    title: 'Korean Strawberry Milk & Yuzu Coolers',
    subtitle: 'Fresh strawberry compote milk, sparkling yuja coolers and iced peach oolong teas',
    category: 'Fruit Drinks 🍓',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80'
  }
];

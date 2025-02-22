export const DOG_BREEDS = [
  'Labrador Retriever',
  'German Shepherd',
  'Golden Retriever',
  'Beagle',
  'Indian Pariah Dog',
  'Dachshund',
  'Pug',
  'Boxer',
  'Rottweiler',
  'Great Dane',
  'Doberman Pinscher',
  'Shih Tzu',
  'Pomeranian',
  'Cocker Spaniel',
  'Indian Spitz',
  'Rajapalayam',
  'Mudhol Hound',
  'Dalmatian',
  'Chihuahua',
  'Siberian Husky',
  'Maltese',
  'Yorkshire Terrier',
  'Bulldog',
  'French Bulldog',
  'Poodle',
  'Saint Bernard',
  'Basset Hound',
  'Bullmastiff',
  'English Mastiff',
  'Lhasa Apso',
  'Tibetan Mastiff',
  'Alaskan Malamute',
  'Weimaraner',
  'Border Collie',
  'Australian Shepherd',
  'Cane Corso',
  'Akita',
  'Bichon Frise',
  'Chow Chow',
  'Samoyed',
  'Whippet',
  'Irish Setter',
  'Newfoundland',
  'Great Pyrenees',
  'Belgian Malinois',
  'Afghan Hound',
  'Saluki',
  'Keeshond',
  'Schipperke'
];

export const CAT_BREEDS = [
  'Persian',
  'Maine Coon',
  'Siamese',
  'British Shorthair',
  'Bengal',
  'Himalayan',
  'Bombay',
  'Spotted (Indian Billi)',
  'Ragdoll',
  'Birman',
  'Abyssinian',
  'Oriental Shorthair',
  'Tonkinese',
  'Devon Rex',
  'Russian Blue',
  'Scottish Fold',
  'Sphynx',
  'American Shorthair',
  'Turkish Angora',
  'Burmese',
  'Norwegian Forest Cat',
  'Cornish Rex',
  'Manx',
  'Turkish Van',
  'Egyptian Mau',
  'Ocicat',
  'Burmilla',
  'Singapura',
  'Japanese Bobtail',
  'LaPerm',
  'Selkirk Rex',
  'Chartreux',
  'Havana Brown',
  'Somali',
  'Nebelung',
  'Peterbald',
  'Snowshoe',
  'American Curl',
  'Toyger',
  'Ragamuffin',
  'European Shorthair',
  'Javanese',
  'Serengeti',
  'Cymric',
  'Korat',
  'Lykoi',
  'Munchkin',
  'Chausie',
  'Exotic Shorthair'
];


export const SUBSCRIPTION_PLANS = [
  {
    id: 'essential',
    name: 'Essential Pack 🎒',
    price: 499,
    allowances: {
      food: 1,
      grooming: 1,
      toys: 0
    },
    totalItems: 3,
    description: 'Perfect for starting your pet care journey',
    features: [
      '1 Food Item (Limited choices)',
      '1 Grooming Product',
      'Monthly Delivery'
    ]
  },
  {
    id: 'comfort',
    name: 'Comfort Pack 🛏',
    price: 749,
    allowances: {
      food: 1,
      grooming: 1,
      toys: 1
    },
    totalItems: 3,
    description: 'Most popular choice for pet parents',
    features: [
      '1 Premium Food Item',
      '1 Grooming Product',
      '1 Toy or Accessory',
      'Monthly Delivery'
    ]
  },
  {
    id: 'luxury',
    name: 'Luxury Pack 💎',
    price: 999,
    allowances: {
      food: 2,
      grooming: 2,
      toys: 1
    },
    totalItems: 5,
    description: 'Complete care package for your pet',
    features: [
      '2 Premium Food Items',
      '2 Grooming Products',
      '1 Toy or Accessory',
      'Priority Delivery'
    ]
  }
]

export const PRODUCT_VARIANTS = {
  'f1': [ // Premium Dry Food
    {
      id: 'f1-royal',
      name: 'Royal Canin',
      description: 'Premium nutrition tailored for specific breeds',
      image: '🏆',
      price: '₹1200'
    },
    {
      id: 'f1-hills',
      name: 'Hills Science',
      description: 'Scientifically formulated for optimal health',
      image: '🔬',
      price: '₹1100'
    },
    {
      id: 'f1-pedigree',
      name: 'Pedigree Pro',
      description: 'Complete & balanced nutrition',
      image: '⭐',
      price: '₹900'
    }
  ],
  'f2': [ // Wet Food
    {
      id: 'f2-whiskas',
      name: 'Whiskas',
      description: 'Tender chunks in gravy',
      image: '🐱',
      price: '₹150'
    },
    {
      id: 'f2-sheba',
      name: 'Sheba',
      description: 'Premium cuts in sauce',
      image: '✨',
      price: '₹180'
    },
    {
      id: 'f2-fancy',
      name: 'Fancy Feast',
      description: 'Gourmet cat food',
      image: '🎀',
      price: '₹200'
    }
  ],
  'f3': [ // Natural Diet
    {
      id: 'f3-farmina',
      name: 'Farmina N&D',
      description: 'Grain-free natural nutrition',
      image: '🌾',
      price: '₹1500'
    },
    {
      id: 'f3-orijen',
      name: 'Orijen Original',
      description: 'Biologically appropriate diet',
      image: '🥩',
      price: '₹1800'
    },
    {
      id: 'f3-acana',
      name: 'Acana Classics',
      description: 'Wholesome natural ingredients',
      image: '🌿',
      price: '₹1600'
    }
  ],
  't1': [ // Interactive Toys
    {
      id: 't1-kong',
      name: 'KONG Classic',
      description: 'Durable rubber toy for hours of play',
      image: '🧸',
      price: '₹600'
    },
    {
      id: 't1-nina',
      name: 'Nina Ottosson Puzzle',
      description: 'Interactive puzzle game',
      image: '🧩',
      price: '₹800'
    },
    {
      id: 't1-outward',
      name: 'Outward Hound Hide A Squirrel',
      description: 'Plush interactive puzzle toy',
      image: '🐿️',
      price: '₹700'
    }
  ],
  't2': [ // Chew Toys
    {
      id: 't2-nylabone',
      name: 'Nylabone DuraChew',
      description: 'Long-lasting chew toy',
      image: '🦴',
      price: '₹400'
    },
    {
      id: 't2-benebone',
      name: 'Benebone Wishbone',
      description: 'Real flavor infused chew',
      image: '🍖',
      price: '₹500'
    },
    {
      id: 't2-petstages',
      name: 'Petstages Dogwood',
      description: 'Natural wood alternative',
      image: '🌳',
      price: '₹450'
    }
  ],
  't3': [ // Training Toys
    {
      id: 't3-starmark',
      name: 'Starmark Treat Ball',
      description: 'Treat dispensing toy',
      image: '🎾',
      price: '₹300'
    },
    {
      id: 't3-chuckit',
      name: 'Chuckit! Ultra Ball',
      description: 'Durable bouncing ball',
      image: '⚾',
      price: '₹250'
    },
    {
      id: 't3-trixie',
      name: 'Trixie Activity Set',
      description: 'Complete training kit',
      image: '🎯',
      price: '₹350'
    }
  ],
  'g1': [ // Shampoo Collection
      {
        id: 'g1-earthbath',
        name: 'Earthbath All Natural',
        description: 'Oatmeal & Aloe formula',
        image: '🧴',
        price: '₹800'
      },
      {
        id: 'g1-tropiclean',
        name: 'TropiClean PerfectFur',
        description: 'Deep cleaning shampoo',
        image: '✨',
        price: '₹700'
      },
      {
        id: 'g1-wahl',
        name: 'Wahl 4-in-1',
        description: 'Complete cleaning solution',
        image: '🛁',
        price: '₹900'
      }
    ],
    'g2': [ // Brush Set
      {
        id: 'g2-furminator',
        name: 'FURminator deShedding',
        description: 'Professional deshedding tool',
        image: '🧹',
        price: '₹1200'
      },
      {
        id: 'g2-hertzko',
        name: 'Hertzko Soft Brush',
        description: 'Gentle grooming brush',
        image: '🪮',
        price: '₹500'
      },
      {
        id: 'g2-safari',
        name: 'Safari Complete Kit',
        description: 'Complete grooming set',
        image: '✂️',
        price: '₹1000'
      }
    ]
  }
 
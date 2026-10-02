export interface SalonService {
  id: string;
  name: string;
  category: 'hair' | 'grooming' | 'beauty';
  duration: string;
  description: string;
  benefits: string[];
  popular?: boolean;
}

export interface SalonReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  serviceCategory: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hair' | 'grooming' | 'beauty' | 'studio';
  image: string;
  caption: string;
  aspect: 'square' | 'portrait' | 'landscape';
}

export const SALON_INFO = {
  name: '7 Wonders Studio – Unisex Salon',
  shortName: '7 Wonders Studio',
  tagline: 'Your Style. Your Beauty. Your 7 Wonders.',
  subtext: 'Professional hair, beauty and grooming services for women and men in the heart of Bandra West.',
  rating: 4.8,
  reviewCount: 591,
  phone: '098336 79949',
  phoneClean: '+919833679949',
  phoneTel: 'tel:09833679949',
  whatsappUrl: 'https://wa.me/919833679949?text=Hello%207%20Wonders%20Studio%2C%20I%20would%20like%20to%20enquire%20about%20booking%20an%20appointment',
  address: {
    shop: 'Shop No. 4, Ground Floor, Libra Tower',
    street: 'Hill Rd, Bandra West',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400050',
    full: 'Shop No. 4, Ground Floor, Libra Tower, Hill Rd, Bandra West, Mumbai, Maharashtra 400050',
    landmark: 'Opposite Marks & Spencer / Near St. Peter’s Church, Hill Road'
  },
  openingHours: {
    opensAt: '10:00 AM',
    closesAt: '9:00 PM',
    days: 'Monday to Sunday (All 7 Days)',
    note: 'Opening hours may vary on public holidays.'
  },
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=7+Wonders+Studio+Libra+Tower+Hill+Rd+Bandra+West+Mumbai+400050',
  embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3916960481283!2d72.82772597597148!3d19.055819752885994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c915f7959fbb%3A0x1d752945768cf30a!2sLibra%20Tower%2C%20Hill%20Rd%2C%20Bandra%20West%2C%20Mumbai%2C%20Maharashtra%20400050!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
};

export const SALON_SERVICES: SalonService[] = [
  // Hair Category
  {
    id: 'haircut-styling',
    name: 'Couture Haircut & Blow Dry',
    category: 'hair',
    duration: '45 - 60 mins',
    description: 'Precision cut tailored to your facial architecture and hair texture, finished with an editorial blowout styling.',
    benefits: ['Face-framing design', 'Texturizing & volume', 'Luxury blow-dry finish'],
    popular: true
  },
  {
    id: 'hair-coloring-balayage',
    name: 'Balayage, Highlights & Global Color',
    category: 'hair',
    duration: '120 - 180 mins',
    description: 'Bespoke dimensional coloring, seamless foil highlights, or rich ammonia-free global shades with bond protection.',
    benefits: ['Natural sun-kissed blending', 'Tone & gloss glaze', 'Minimal root regrowth effect'],
    popular: true
  },
  {
    id: 'keratin-smoothening',
    name: 'Keratin & Protein Smoothening',
    category: 'hair',
    duration: '150 - 210 mins',
    description: 'Deep-penetrating formaldehdye-safe keratin infusion that eliminates Mumbai frizz while preserving natural bounce and mirror shine.',
    benefits: ['Frizz-free humidity resistance', 'Lasts up to 4-5 months', 'Cut drying time by 50%'],
    popular: true
  },
  {
    id: 'hair-botox-treatment',
    name: 'Hair Botox & Deep Repair Therapy',
    category: 'hair',
    duration: '90 - 120 mins',
    description: 'Intense reconstructive hydration therapy enriched with amino acids and essential oils to restore damaged or over-processed hair.',
    benefits: ['Fills cuticle gaps', 'Deep hydration & shine', 'Weightless natural body']
  },
  {
    id: 'moroccan-oil-spa',
    name: 'Moroccan Argan Spa & Scalp Detox',
    category: 'hair',
    duration: '60 mins',
    description: 'Purifying scalp exfoliation followed by warm botanical infusion with relaxing acupressure massage.',
    benefits: ['Scalp circulation boost', 'Intense moisture lock', 'Pure sensory relaxation']
  },

  // Men's Grooming Category
  {
    id: 'mens-haircut-fade',
    name: 'Men’s Precision Cut & Taper Fade',
    category: 'grooming',
    duration: '35 - 45 mins',
    description: 'Sharp scissor work, skin fades, or classic gentleman tapers tailored to personal style, finished with matte styling clay.',
    benefits: ['Custom neckline taper', 'Hair wash & conditioning', 'Textured finish styling'],
    popular: true
  },
  {
    id: 'beard-sculpting',
    name: 'Beard Sculpting & Sharp Line-up',
    category: 'grooming',
    duration: '30 mins',
    description: 'Careful beard architecture, razor-sharp cheek line definition, hot towel conditioning, and nourishing beard oil.',
    benefits: ['Symmetrical shaping', 'Hot towel softening', 'Beard cuticle nourishment'],
    popular: true
  },
  {
    id: 'charcoal-detan-shave',
    name: 'Royal Charcoal Detan & Shave',
    category: 'grooming',
    duration: '40 mins',
    description: 'Traditional close shave combined with an activated charcoal detan cleanup to revive tired and sun-exposed skin.',
    benefits: ['Zero razor burn', 'Pollution detox', 'Brightened, clean skin tone']
  },
  {
    id: 'mens-grooming-package',
    name: 'The Bandra Executive Package',
    category: 'grooming',
    duration: '75 mins',
    description: 'Complete grooming suite: Haircut, beard styling, stress-relief head massage, and rapid refreshing cleanup.',
    benefits: ['All-in-one grooming', 'Invigorating scalp therapy', 'Instant polished appearance']
  },

  // Beauty & Skin Category
  {
    id: 'radiance-hydra-facial',
    name: 'Hydra-Glow Radiance Facial',
    category: 'beauty',
    duration: '60 - 75 mins',
    description: 'Deep pore vacuum cleansing, gentle exfoliation, and antioxidant serum infusion leaving skin luminous and plump.',
    benefits: ['Instant skin illumination', 'Pore refinement', 'Non-invasive deep hydration'],
    popular: true
  },
  {
    id: 'detan-skin-cleanup',
    name: 'Gold Brightening Detan Cleanup',
    category: 'beauty',
    duration: '45 mins',
    description: 'Specialized formulation to reverse environmental tan, hyperpigmentation, and dullness caused by coastal city weather.',
    benefits: ['Evens skin tone', 'Removes dead skin cells', 'Radiant healthy glow']
  },
  {
    id: 'threading-brow-waxing',
    name: 'Eyebrow Architecture & Organic Waxing',
    category: 'beauty',
    duration: '20 - 45 mins',
    description: 'Delicate precision eyebrow threading and painless stripless waxing for face or body with skin-soothing post-care.',
    benefits: ['Clean defined brow arch', 'Sensitive skin safe', 'Long-lasting smoothness']
  },
  {
    id: 'luxury-pedicure-manicure',
    name: 'Spa Citrus Pedicure & Manicure',
    category: 'beauty',
    duration: '60 mins',
    description: 'Exfoliating botanical soak, cuticle care, heel smoothing, deeply relaxing massage, and nail buffing.',
    benefits: ['Tired feet revival', 'Soft callus-free heels', 'Neat glossy nail finish']
  }
];

export const SALON_REVIEWS: SalonReview[] = [
  {
    id: 'rev-1',
    author: 'Priya K.',
    rating: 5,
    date: '3 weeks ago',
    text: '7 Wonders Studio in Bandra is my go-to salon! I had my hair smoothening and balayage done here. The stylists actually took time to examine my hair texture and recommended the right treatment without pushing unnecessary add-ons. My hair looks glossy and feels healthier than ever.',
    serviceCategory: 'Hair Smoothening & Balayage',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Rohan M.',
    rating: 5,
    date: '1 month ago',
    text: 'Best men\'s haircut and beard trim in Bandra West! Conveniently located on Hill Road right inside Libra Tower. The fade was spot-on, very clean hygiene standards, and the staff is polite and skilled. Excellent value and warm service.',
    serviceCategory: 'Men\'s Grooming & Beard Fade',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Ananya S.',
    rating: 5,
    date: '2 months ago',
    text: 'Visited for a Hydra-Glow facial and haircut. The ambience is quiet, elegant, and relaxing after a busy day on Hill Road. My skin was glowing for days and the hair styling was exactly what I wanted. Definitely worthy of their 4.8 star rating!',
    serviceCategory: 'Radiance Facial & Styling',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Farhan Q.',
    rating: 5,
    date: '2 months ago',
    text: 'A genuine unisex salon where both men and women can get top-notch service. The hair wash and scalp massage alone are worth the visit. Super friendly team and very punctual with appointments.',
    serviceCategory: 'Haircut & Scalp Therapy',
    verified: true
  },
  {
    id: 'rev-5',
    author: 'Neha D.',
    rating: 5,
    date: '3 months ago',
    text: 'Got my global color touch up and deep conditioning treatment. They used genuine professional products and the blow dry stayed intact through Mumbai humidity. Highly recommend 7 Wonders to anyone in Bandra!',
    serviceCategory: 'Hair Color & Deep Conditioning',
    verified: true
  }
];

export const SALON_FEATURES = [
  {
    title: 'Experienced Salon Professionals',
    description: 'Master stylists and seasoned aestheticians dedicated to modern techniques and personalized care.'
  },
  {
    title: 'Unisex Hair & Beauty Care',
    description: 'A welcoming, inclusive space catering to refined men’s grooming and luxury women’s styling under one roof.'
  },
  {
    title: 'Personalized Consultations',
    description: 'Every session starts with listening to your texture, face profile, and lifestyle before scissors or brushes touch your hair.'
  },
  {
    title: 'Professional Hair Treatments',
    description: 'Formaldehyde-safe keratin, bond repair, restorative botox, and customized moisture therapies.'
  },
  {
    title: 'Premium Salon Atmosphere',
    description: 'Calm ambient lighting, clean aesthetic stations, pristine sanitization, and warm hospitality.'
  },
  {
    title: 'Prime Bandra West Location',
    description: 'Ground Floor, Libra Tower on vibrant Hill Road — easily accessible with nearby parking and shopping.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Studio Interior & Styling Suites',
    category: 'studio',
    image: '/src/assets/images/hero_salon_interior_1790959684790.jpg',
    caption: 'Modern luxury ambience with ambient backlighting and ergonomic leather styling chairs.',
    aspect: 'landscape'
  },
  {
    id: 'gal-2',
    title: 'Balayage & Dimensional Tone',
    category: 'hair',
    image: '/src/assets/images/editorial_hairstyling_1790959697699.jpg',
    caption: 'Seamless warm caramel and golden ribbons blended for natural dimension.',
    aspect: 'portrait'
  },
  {
    id: 'gal-3',
    title: 'Gentlemen’s Beard Sculpting',
    category: 'grooming',
    image: '/src/assets/images/mens_grooming_1790959709495.jpg',
    caption: 'Architectural line-ups and tailored beard definition for the modern professional.',
    aspect: 'portrait'
  },
  {
    id: 'gal-4',
    title: 'Hydra Skin Rejuvenation',
    category: 'beauty',
    image: '/src/assets/images/salon_skincare_1790959719867.jpg',
    caption: 'Calming facial therapy restoring moisture barrier and natural coastal glow.',
    aspect: 'portrait'
  },
  {
    id: 'gal-5',
    title: 'Signature Blowout & Volume',
    category: 'hair',
    image: '/src/assets/images/editorial_hairstyling_1790959697699.jpg',
    caption: 'Bouncy, mirror-shine blow dry crafted to withstand Mumbai climate.',
    aspect: 'square'
  },
  {
    id: 'gal-6',
    title: 'Executive Taper & Cut',
    category: 'grooming',
    image: '/src/assets/images/mens_grooming_1790959709495.jpg',
    caption: 'Sharp fades paired with natural crown movement and scissor over comb styling.',
    aspect: 'square'
  }
];

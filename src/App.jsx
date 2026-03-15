// import { useState, useEffect, useRef } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
// import { ShoppingBag, Phone, Instagram, Facebook, Mail, X, Plus, Upload, ChevronRight } from 'lucide-react';

// // Types
// interface Product {
//   id: number;
//   name: string;
//   image: string;
//   description: string;
//   price: string;
//   category: string;
// }

// // Sample Products Data
// const initialProducts: Product[] = [
//   {
//     id: 1,
//     name: "Eternal Elegance Diamond Ring",
//     image: "https://res.cloudinary.com/dchcvgdh0/image/upload/v1773469341/ivra_2_vogyxd.jpg",
//     description: "A breathtaking solitaire diamond ring featuring a brilliant-cut 2-carat diamond set in 18k white gold. The classic six-prong setting allows maximum light reflection, creating unparalleled sparkle. Perfect for engagements or as a timeless heirloom piece.",
//     price: "$12,500",
//     category: "Nacklace"
//   },
//   {
//     id: 2,
//     name: "Celestial Pearl Necklace",
//     image: "https://res.cloudinary.com/dchcvgdh0/image/upload/v1773469341/ivra_4_irurtc.jpg",
//     description: "An exquisite necklace featuring rare South Sea pearls graduated in size, suspended from a delicate 18k gold chain. Each pearl is hand-selected for its luster and perfect roundness. The adjustable clasp ensures a perfect fit for any occasion.",
//     price: "$8,900",
//     category: "Necklaces"
//   },
//   {
//     id: 3,
//     name: "Royal Sapphire Bracelet",
//     image: "https://res.cloudinary.com/dchcvgdh0/image/upload/v1773469341/ivra__ujg7u0.jpg",
//     description: "A luxurious tennis bracelet featuring a stunning array of Burmese sapphires and diamonds set in platinum. Each gemstone is precision-cut and hand-set to create a seamless line of color and brilliance. A true statement piece for formal events.",
//     price: "$15,200",
//     category: "Nacklace"
//   },
//   {
//     id: 4,
//     name: "Moonlight Diamond Earrings",
//     image: "https://res.cloudinary.com/dchcvgdh0/image/upload/v1773469341/ivra_6_rmonmf.jpg",
//     description: "Elegant drop earrings featuring pear-shaped diamonds cascading from round brilliant accents, all set in 18k rose gold. The delicate design catches light from every angle, creating a mesmerizing dance of sparkle. Perfect for evening wear.",
//     price: "$6,800",
//     category: "Nacklace"
//   },
//   {
//     id: 5,
//     name: "Imperial Emerald Ring",
//     image: "https://res.cloudinary.com/dchcvgdh0/image/upload/v1773469341/ivra_3_yooo10.jpg",
//     description: "A magnificent ring showcasing a rare Colombian emerald of exceptional clarity and color, surrounded by a halo of VS1 diamonds. Set in a custom 18k yellow gold band with intricate milgrain detailing. A collector's piece of extraordinary beauty.",
//     price: "$22,000",
//     category: "Rings"
//   },
//   {
//     id: 6,
//     name: "Venetian Gold Pendant",
//     image: "https://res.cloudinary.com/dchcvgdh0/image/upload/v1773470078/ivra_7_p5qnld.jpg",
//     description: "An artisan-crafted pendant inspired by Venetian goldsmithing traditions. Features hand-engraved 24k gold with an intricate filigree pattern and a central marquise-cut diamond. Suspended on an 18-inch Italian gold chain.",
//     price: "$9,500",
//     category: "Necklaces"
//   },
//   {
//     id: 7,
//     name: "Artisan Pearl Bracelet",
//     image: "https://res.cloudinary.com/dchcvgdh0/image/upload/v1773470077/ivra_8_nounpt.jpg",
//     description: "A contemporary take on the classic pearl bracelet, featuring baroque freshwater pearls interspersed with small diamonds and set in a flexible platinum wire design. Each pearl is unique, making this piece one-of-a-kind.",
//     price: "$4,200",
//     category: "Bracelets"
//   },
//   {
//     id: 8,
//     name: "Diamond Infinity Band",
//     image: "https://res.cloudinary.com/dchcvgdh0/image/upload/v1773470077/ivra_10_lsa06t.jpg",
//     description: "A modern eternity band featuring a continuous row of round brilliant diamonds set in platinum. The channel setting protects the stones while allowing light to pass through, creating exceptional brilliance. Perfect for stacking or wearing alone.",
//     price: "$18,500",
//     category: "Rings"
//   },
//   {
//     id: 9,
//     name: "Diamond Infinity Band",
//     image: "https://res.cloudinary.com/dchcvgdh0/image/upload/v1773470077/ivra_9_sznhxi.jpg",
//     description: "A modern eternity band featuring a continuous row of round brilliant diamonds set in platinum. The channel setting protects the stones while allowing light to pass through, creating exceptional brilliance. Perfect for stacking or wearing alone.",
//     price: "$18,500",
//     category: "Rings"
//   }
// ];

// // WhatsApp Configuration
// const WHATSAPP_PHONE = "+919265939045"; // Replace with actual client number

// // WhatsApp Redirect Function
// const handleWhatsAppRedirect = (product: Product) => {
//   const message = `Hello IVERA, I'm interested in purchasing the "${product.name}". Here is the description: ${product.description}`;
//   const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
//   window.open(whatsappUrl, "_blank");
// };

// // Navigation Component
// const Navigation = () => {
//   return (
//     <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <Link to="/" className="text-2xl font-serif font-semibold tracking-wide text-charcoal">
//             IVERA
//           </Link>
          
//           <div className="hidden md:flex items-center space-x-8">
//             <Link to="/" className="text-sm uppercase tracking-widest hover:text-[var(--gold)] transition-colors">
//               Collection
//             </Link>
//             <Link to="/designers-portal" className="text-sm uppercase tracking-widest hover:text-[var(--gold)] transition-colors">
//               Designers Portal
//             </Link>
//           </div>
          
//           <div className="flex items-center space-x-4">
//             <a href={`tel:${WHATSAPP_PHONE}`} className="hover:text-[var(--gold)] transition-colors">
//               <Phone size={20} />
//             </a>
//             <Link to="/cart" className="hover:text-[var(--gold)] transition-colors">
//               <ShoppingBag size={20} />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// // Hero Section Component
// const Hero = () => {
//   return (
//     <section className="relative h-screen flex items-center justify-center overflow-hidden">
//       <div className="absolute inset-0 bg-charcoal">
//         <img
//           src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1920&h=1080&fit=crop"
//           alt="Luxury Jewelry"
//           className="w-full h-full object-cover opacity-50"
//         />
//       </div>
      
//       <div className="relative z-10 text-center text-white px-6">
//         <p className="text-sm uppercase tracking-[0.3em] mb-4 text-[var(--gold)]">
//           Timeless Elegance
//         </p>
//         <h1 className="text-5xl md:text-7xl font-serif font-light mb-6">
//           IVERA Jewellery Design
//         </h1>
//         <p className="text-lg md:text-xl font-light text-gray-300 mb-8 max-w-2xl mx-auto">
//           Discover our exclusive collection of handcrafted fine jewelry, 
//           where every piece tells a story of luxury and sophistication.
//         </p>
//         <Link 
//           to="/collection" 
//           className="inline-block border border-white text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-charcoal transition-all duration-300"
//         >
//           Explore Collection
//         </Link>
//       </div>
      
//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <ChevronRight className="rotate-90 text-white" size={24} />
//       </div>
//     </section>
//   );
// };

// // Product Card Component
// const ProductCard = ({ product }: { product: Product }) => {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setShow(true);
//         }
//       },
//       { threshold: 0.35 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => {
//       if (ref.current) observer.unobserve(ref.current);
//     };
//   }, []);

//   return (
//     <Link to={`/product/${product.id}`} className="block">
//       <div ref={ref} className="relative overflow-hidden aspect-square mb-4">

//         <img
//           src={product.image}
//           alt={product.name}
//           className={`w-full h-full object-cover transition-all duration-[1200ms] ease-out ${
//             show ? "scale-100 opacity-100" : "scale-110 opacity-0"
//           }`}
//         />

//         <div
//           className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition duration-700 ${
//             show ? "opacity-100" : "opacity-0"
//           }`}
//         />

//         <div
//           className={`absolute left-1/2 -translate-x-1/2 transition-all duration-700 ${
//             show ? "bottom-6 opacity-100" : "bottom-0 opacity-0"
//           }`}
//         >
//           <div className="backdrop-blur-md bg-white/80 px-7 py-3 rounded-full shadow-2xl border border-white/40">
//             <span className="text-xs tracking-[0.25em] font-semibold text-gray-800">
//               VIEW DETAILS
//             </span>
//           </div>
//         </div>

//       </div>

//       <div className="text-center">
//         <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">{product.category}</p>
//         <h3 className="font-serif text-lg mb-2 hover:text-[var(--gold)] transition-colors">{product.name}</h3>
//         <p className="text-sm text-gray-600">{product.price}</p>
//       </div>
//     </Link>
//   );
// };

// // Product Grid Component
// const ProductGrid = () => {
//   const [products] = useState<Product[]>(initialProducts);
  
//   return (
//     <section className="py-20 px-6 bg-off-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <p className="text-sm uppercase tracking-[0.3em] text-[var(--gold)] mb-3">Our Collection</p>
//           <h2 className="text-4xl font-serif font-light mb-4">Exquisite Designs</h2>
//           <div className="w-24 h-px bg-charcoal mx-auto" />
//         </div>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Product Detail Page Component
// const ProductDetail = () => {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();
//   const [products] = useState<Product[]>(initialProducts);
  
//   const product = products.find((p) => p.id === parseInt(id || ''));
  
//   if (!product) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-serif mb-4">Product Not Found</h2>
//           <Link to="/" className="btn-secondary inline-block">
//             Back to Collection
//           </Link>
//         </div>
//       </div>
//     );
//   }
  
//   return (
//     <div className="min-h-screen pt-24 pb-20 px-6">
//       <div className="max-w-7xl mx-auto">
//         <button 
//           onClick={() => navigate(-1)}
//           className="flex items-center text-sm uppercase tracking-widest mb-8 hover:text-[var(--gold)] transition-colors"
//         >
//           <ChevronRight className="rotate-180 mr-2" size={16} />
//           Back to Collection
//         </button>
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
//           <div className="aspect-square bg-gray-100">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-full object-cover"
//             />
//           </div>
          
//           <div className="flex flex-col justify-center">
//             <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-3">{product.category}</p>
//             <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">{product.name}</h1>
//             <p className="text-2xl font-light text-gray-600 mb-8">{product.price}</p>
            
//             <div className="w-12 h-px bg-charcoal mb-8" />
            
//             <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>
            
//             <div className="flex flex-col sm:flex-row gap-4">
//               <button
//                 onClick={() => handleWhatsAppRedirect(product)}
//                 className="btn-primary flex items-center justify-center"
//               >
//                 <Phone size={16} className="mr-3" />
//                 Purchase via WhatsApp with Vensi
//               </button>
//               <button className="btn-secondary">
//                 Add to Wishlist
//               </button>
//             </div>
            
//             <div className="mt-12 pt-8 border-t border-gray-200">
//               <h3 className="font-serif text-lg mb-4">Product Details</h3>
//               <ul className="space-y-2 text-sm text-gray-600">
//                 <li>• Handcrafted with precision</li>
//                 <li>• Certificate of authenticity included</li>
//                 <li>• Luxury gift packaging</li>
//                 <li>• Lifetime warranty on craftsmanship</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Designers Portal Component
// const DesignersPortal = () => {
//   const [products, setProducts] = useState<Product[]>(initialProducts);
//   const [showForm, setShowForm] = useState(false);
//   const [newProduct, setNewProduct] = useState({
//     name: '',
//     image: '',
//     description: '',
//     price: '',
//     category: 'Rings'
//   });
  
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const product: Product = {
//       id: products.length + 1,
//       ...newProduct,
//       image: newProduct.image || 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop'
//     };
//     setProducts([...products, product]);
//     setNewProduct({ name: '', image: '', description: '', price: '', category: 'Rings' });
//     setShowForm(false);
//   };
  
//   return (
//     <div className="min-h-screen pt-24 pb-20 px-6 bg-off-white">
//       <div className="max-w-4xl mx-auto">
//         <div className="text-center mb-12">
//           <p className="text-sm uppercase tracking-[0.3em] text-[var(--gold)] mb-3">Designers Portal</p>
//           <h1 className="text-4xl font-serif font-light mb-4">Upload New Design</h1>
//           <div className="w-24 h-px bg-charcoal mx-auto" />
//         </div>
        
//         {!showForm ? (
//           <div className="bg-white p-12 text-center">
//             <Upload size={48} className="mx-auto text-[var(--gold)] mb-6" />
//             <h2 className="font-serif text-2xl mb-4">Add New Jewelry Piece</h2>
//             <p className="text-gray-600 mb-8">Upload a new design to showcase in your collection</p>
//             <button onClick={() => setShowForm(true)} className="btn-primary">
//               <Plus size={16} className="inline mr-2" />
//               Upload Design
//             </button>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12">
//             <div className="flex justify-between items-center mb-8">
//               <h2 className="font-serif text-2xl">New Design Details</h2>
//               <button
//                 type="button"
//                 onClick={() => setShowForm(false)}
//                 className="text-gray-400 hover:text-charcoal"
//               >
//                 <X size={24} />
//               </button>
//             </div>
            
//             <div className="space-y-6">
//               <div>
//                 <label className="block text-sm uppercase tracking-widest mb-2">Design Name</label>
//                 <input
//                   type="text"
//                   value={newProduct.name}
//                   onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
//                   className="w-full px-4 py-3 border border-gray-300 focus:border-[var(--gold)] focus:outline-none transition-colors"
//                   placeholder="Enter design name"
//                   required
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm uppercase tracking-widest mb-2">Category</label>
//                 <select
//                   value={newProduct.category}
//                   onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
//                   className="w-full px-4 py-3 border border-gray-300 focus:border-[var(--gold)] focus:outline-none transition-colors"
//                 >
//                   <option value="Rings">Rings</option>
//                   <option value="Necklaces">Necklaces</option>
//                   <option value="Bracelets">Bracelets</option>
//                   <option value="Earrings">Earrings</option>
//                 </select>
//               </div>
              
//               <div>
//                 <label className="block text-sm uppercase tracking-widest mb-2">Image URL</label>
//                 <input
//                   type="url"
//                   value={newProduct.image}
//                   onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
//                   className="w-full px-4 py-3 border border-gray-300 focus:border-[var(--gold)] focus:outline-none transition-colors"
//                   placeholder="https://example.com/image.jpg"
//                 />
//                 <p className="text-xs text-gray-500 mt-1">Leave empty to use default placeholder</p>
//               </div>
              
//               <div>
//                 <label className="block text-sm uppercase tracking-widest mb-2">Description</label>
//                 <textarea
//                   value={newProduct.description}
//                   onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
//                   className="w-full px-4 py-3 border border-gray-300 focus:border-[var(--gold)] focus:outline-none transition-colors h-32 resize-none"
//                   placeholder="Enter detailed description of the design..."
//                   required
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm uppercase tracking-widest mb-2">Price</label>
//                 <input
//                   type="text"
//                   value={newProduct.price}
//                   onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
//                   className="w-full px-4 py-3 border border-gray-300 focus:border-[var(--gold)] focus:outline-none transition-colors"
//                   placeholder="$0,000"
//                   required
//                 />
//               </div>
              
//               <div className="flex gap-4 pt-4">
//                 <button type="submit" className="btn-primary flex-1">
//                   Upload Design
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setShowForm(false)}
//                   className="btn-secondary flex-1"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </form>
//         )}
        
//         {/* Preview of uploaded products */}
//         <div className="mt-16">
//           <h3 className="font-serif text-2xl mb-8 text-center">Current Collection ({products.length} pieces)</h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {products.map((product) => (
//               <div key={product.id} className="bg-white p-4">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full aspect-square object-cover mb-3"
//                 />
//                 <p className="font-serif text-sm truncate">{product.name}</p>
//                 <p className="text-xs text-gray-500">{product.price}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Footer Component
// const Footer = () => {
//   return (
//     <footer className="bg-charcoal text-white py-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
//           <div className="md:col-span-2">
//             <h2 className="text-3xl font-serif font-light mb-4">IVERA</h2>
//             <p className="text-gray-400 leading-relaxed max-w-md">
//               Crafting timeless jewelry pieces that celebrate elegance and sophistication. 
//               Each design is meticulously handcrafted to create heirlooms that transcend generations.
//             </p>
//           </div>
          
//           <div>
//             <h3 className="text-sm uppercase tracking-widest mb-4">Quick Links</h3>
//             <ul className="space-y-2 text-gray-400">
//               <li><Link to="/" className="hover:text-[var(--gold)] transition-colors">Collection</Link></li>
//               <li><Link to="/designers-portal" className="hover:text-[var(--gold)] transition-colors">Designers Portal</Link></li>
//               <li><a href="#" className="hover:text-[var(--gold)] transition-colors">About Us</a></li>
//               <li><a href="#" className="hover:text-[var(--gold)] transition-colors">Contact</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="text-sm uppercase tracking-widest mb-4">Contact</h3>
//             <ul className="space-y-2 text-gray-400">
//               <li><a href={`tel:${WHATSAPP_PHONE}`} className="hover:text-[var(--gold)] transition-colors flex items-center">
//                 <Phone size={14} className="mr-2" /> {WHATSAPP_PHONE}
//               </a></li>
//               <li><a href="mailto:info@ivera.com" className="hover:text-[var(--gold)] transition-colors flex items-center">
//                 <Mail size={14} className="mr-2" /> info@ivera.com
//               </a></li>
//             </ul>
            
//             <div className="flex space-x-4 mt-6">
//               <a href="#" className="text-gray-400 hover:text-[var(--gold)] transition-colors">
//                 <Instagram size={20} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-[var(--gold)] transition-colors">
//                 <Facebook size={20} />
//               </a>
//             </div>
//           </div>
//         </div>
        
//         <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
//           <p>&copy; 2024 IVERA Jewellery Design. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// // Home Page Component
// const Home = () => {
//   return (
//     <>
//       <Hero />
//       <ProductGrid />
      
//       {/* Brand Story Section */}
//       <section className="py-20 px-6 bg-charcoal text-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <p className="text-sm uppercase tracking-[0.3em] text-[var(--gold)] mb-3">Our Story</p>
//           <h2 className="text-4xl font-serif font-light mb-6">A Legacy of Excellence</h2>
//           <p className="text-gray-300 leading-relaxed mb-8">
//             For over three decades, IVERA has been synonymous with exceptional craftsmanship 
//             and timeless design. Our master jewelers draw inspiration from nature, art, 
//             and culture to create pieces that are not just jewelry, but wearable art.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//             <div>
//               <p className="text-4xl font-serif text-[var(--gold)] mb-2">30+</p>
//               <p className="text-sm uppercase tracking-widest text-gray-400">Years of Excellence</p>
//             </div>
//             <div>
//               <p className="text-4xl font-serif text-[var(--gold)] mb-2">500+</p>
//               <p className="text-sm uppercase tracking-widest text-gray-400">Unique Designs</p>
//             </div>
//             <div>
//               <p className="text-4xl font-serif text-[var(--gold)] mb-2">10K+</p>
//               <p className="text-sm uppercase tracking-widest text-gray-400">Happy Clients</p>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Newsletter Section */}
//       <section className="py-20 px-6 bg-off-white">
//         <div className="max-w-2xl mx-auto text-center">
//           <p className="text-sm uppercase tracking-[0.3em] text-[var(--gold)] mb-3">Stay Connected</p>
//           <h2 className="text-3xl font-serif font-light mb-4">Join Our Exclusive List</h2>
//           <p className="text-gray-600 mb-8">
//             Be the first to know about new collections, exclusive events, and special offers.
//           </p>
//           <form className="flex flex-col sm:flex-row gap-4">
//             <input
//               type="email"
//               placeholder="Your email address"
//               className="flex-1 px-6 py-4 border border-gray-300 focus:border-[var(--gold)] focus:outline-none transition-colors"
//             />
//             <button type="submit" className="btn-primary">
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };

// // Main App Component
// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col">
//         <Navigation />
//         <main className="flex-1">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/collection" element={<ProductGrid />} />
//             <Route path="/product/:id" element={<ProductDetail />} />
//             <Route path="/designers-portal" element={<DesignersPortal />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;



import { useState, useEffect, useRef, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import {
  ShoppingBag, Phone, Instagram, Facebook, Mail, X, Plus, Upload,
  ChevronRight, Heart, Search, ZoomIn, Star, Trash2, SlidersHorizontal,
  MessageCircle, Eye, ArrowLeft, Home as HomeIcon, Grid, RefreshCw, AlertCircle
} from 'lucide-react';

// const API_BASE = "https://ivera-backend.onrender.com";
const API_BASE = import.meta.env.VITE_API_URL;

const WHATSAPP_PHONE = "+919265939045";
const CATEGORIES = ["All", "Rings", "Necklaces", "Bracelets", "Earrings"];

const parsePriceNum = (price = "") => {
  if (typeof price === "number") return price;
  return parseInt(price.replace(/[^0-9]/g, "")) || 0;
};

const normaliseProduct = (p) => ({
  ...p,
  id: p._id,
  priceNum: parsePriceNum(p.price),
  rating: p.rating ?? null,
  reviews: p.reviews ?? 0,
  badge: p.badge ?? null,
});

const handleWhatsAppRedirect = (product, cartItems) => {
  let message = '';
  if (cartItems) {
    const list = cartItems.map(p => `• ${p.name} (${p.price}) x${p.qty}`).join('\n');
    message = `Hello IVERA, I'd like to purchase the following items:\n\n${list}\n\nPlease confirm availability.`;
  } else {
    message = `Hello IVERA, I'm interested in purchasing the "${product.name}" (${product.price}). ${product.description}`;
  }
  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`, "_blank");
};

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res  = await fetch(`${API_BASE}/api/products`);
      if (!res.ok) throw new Error(`Server error ${res.status}`);
      const data = await res.json();
      setProducts(data.map(normaliseProduct));
    } catch (err) {
      setError(err.message || "Failed to load products");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchProducts(); }, [fetchProducts]);
  return { products, loading, error, refetch: fetchProducts };
};

const SkeletonCard = () => (
  <div className="animate-pulse">
    <div className="rounded-2xl bg-gray-200 aspect-square mb-4" />
    <div className="h-3 bg-gray-200 rounded w-1/3 mb-2" />
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
    <div className="h-3 bg-gray-200 rounded w-1/4" />
  </div>
);

const ErrorBanner = ({ message, onRetry }) => (
  <div className="flex flex-col items-center justify-center py-24 text-center px-6">
    <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-5">
      <AlertCircle size={30} className="text-red-400" />
    </div>
    <h3 className="font-serif text-xl text-gray-700 mb-2">Couldn't load products</h3>
    <p className="text-sm text-gray-400 mb-6 max-w-xs">{message}</p>
    <button onClick={onRetry} className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full text-sm hover:bg-amber-600 transition">
      <RefreshCw size={14} /> Try Again
    </button>
  </div>
);

const StarRating = ({ rating, reviews }) => (
  <div className="flex items-center gap-1.5">
    <div className="flex">
      {[1,2,3,4,5].map(s => (
        <Star key={s} size={11} className={s <= Math.round(rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"} />
      ))}
    </div>
    <span className="text-xs text-gray-400">({reviews})</span>
  </div>
);

const QuickView = ({ product, onClose, addToCart, toggleWishlist, isWishlisted }) => {
  const [added, setAdded] = useState(false);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);
  const handleAdd = () => { addToCart(product); setAdded(true); setTimeout(() => setAdded(false), 2000); };
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="relative bg-white max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl animate-fadeIn" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2 hover:bg-gray-100 transition"><X size={18} /></button>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            {product.badge && <span className="absolute top-4 left-4 bg-amber-500 text-white text-xs px-3 py-1 rounded-full font-medium">{product.badge}</span>}
          </div>
          <div className="p-8 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-600 mb-2">{product.category}</p>
            <h2 className="font-serif text-2xl mb-2">{product.name}</h2>
            {product.rating && <StarRating rating={product.rating} reviews={product.reviews} />}
            <p className="text-2xl font-light text-gray-800 mt-4 mb-4">{product.price}</p>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">{product.description}</p>
            <div className="flex gap-3">
              <button onClick={handleAdd} className={`flex-1 py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 ${added ? 'bg-green-600 text-white' : 'bg-black text-white hover:bg-gray-900'}`}>
                {added ? '✓ Added to Cart' : 'Add to Cart'}
              </button>
              <button onClick={() => toggleWishlist(product.id)} className={`p-3 rounded-xl border transition ${isWishlisted ? 'bg-red-50 border-red-200 text-red-500' : 'border-gray-200 hover:border-gray-400'}`}>
                <Heart size={18} className={isWishlisted ? 'fill-red-500' : ''} />
              </button>
            </div>
            <button onClick={() => handleWhatsAppRedirect(product)} className="mt-3 w-full py-3 rounded-xl border border-green-500 text-green-600 text-sm font-medium flex items-center justify-center gap-2 hover:bg-green-50 transition">
              <MessageCircle size={15} /> Order via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product, addToCart, toggleWishlist, isWishlisted, onQuickView }) => {
  const ref = useRef(null);
  const [show, setShow]             = useState(false);
  const [hovered, setHovered]       = useState(false);
  const [addedPulse, setAddedPulse] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setShow(true); }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault(); e.stopPropagation();
    addToCart(product); setAddedPulse(true); setTimeout(() => setAddedPulse(false), 700);
  };

  return (
    <div ref={ref} className={`group transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="relative overflow-hidden rounded-2xl bg-gray-50 aspect-square mb-4 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-110' : 'scale-100'}`} />
        </Link>
        {product.badge && <span className="absolute top-3 left-3 bg-amber-500 text-white text-[10px] px-2.5 py-1 rounded-full font-semibold tracking-wide z-10">{product.badge}</span>}
        <div className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 z-10 ${hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
          <button onClick={e => { e.preventDefault(); toggleWishlist(product.id); }} className={`p-2.5 rounded-full shadow-lg transition-all ${isWishlisted ? 'bg-red-500 text-white' : 'bg-white text-gray-700 hover:bg-red-50'}`}>
            <Heart size={14} className={isWishlisted ? 'fill-white' : ''} />
          </button>
          <button onClick={e => { e.preventDefault(); onQuickView(product); }} className="p-2.5 rounded-full bg-white text-gray-700 shadow-lg hover:bg-amber-50 transition-all">
            <Eye size={14} />
          </button>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] z-10">
          <button onClick={handleAdd} className={`w-full py-2.5 rounded-xl text-xs font-semibold tracking-widest uppercase transition-all duration-300 shadow-lg ${addedPulse ? 'bg-green-500 text-white scale-95' : 'bg-white/95 text-gray-800 hover:bg-amber-500 hover:text-white'}`}>
            {addedPulse ? '✓ Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
      <div className="px-1">
        <p className="text-[10px] uppercase tracking-[0.2em] text-amber-600 mb-1">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-base leading-snug mb-1 hover:text-amber-700 transition-colors">{product.name}</h3>
        </Link>
        {product.rating && <StarRating rating={product.rating} reviews={product.reviews} />}
        <p className="text-sm font-medium text-gray-800 mt-1">{product.price}</p>
      </div>
    </div>
  );
};

const CollectionPage = ({ addToCart, toggleWishlist, wishlist }) => {
  const { products, loading, error, refetch } = useProducts();
  const [activeCategory, setActiveCategory]   = useState("All");
  const [search, setSearch]                   = useState("");
  const [priceRange, setPriceRange]           = useState([0, 100000]);
  const [showFilters, setShowFilters]         = useState(false);
  const [sortBy, setSortBy]                   = useState("default");
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const maxPrice = products.length ? Math.max(...products.map(p => p.priceNum), 1000) : 100000;

  const filtered = products
    .filter(p => activeCategory === "All" || p.category === activeCategory)
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter(p => p.priceNum >= priceRange[0] && p.priceNum <= (priceRange[1] || maxPrice))
    .sort((a, b) => {
      if (sortBy === "price-asc")  return a.priceNum - b.priceNum;
      if (sortBy === "price-desc") return b.priceNum - a.priceNum;
      if (sortBy === "rating")     return (b.rating || 0) - (a.rating || 0);
      return 0;
    });

  return (
    <div className="min-h-screen pt-24 pb-24 px-4 md:px-8 bg-[#faf9f7]">
      {quickViewProduct && (
        <QuickView product={quickViewProduct} onClose={() => setQuickViewProduct(null)}
          addToCart={addToCart} toggleWishlist={toggleWishlist} isWishlisted={wishlist.includes(quickViewProduct.id)} />
      )}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-600 mb-2">Our Collection</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-3">Exquisite Designs</h1>
          <div className="w-20 h-px bg-gray-800 mx-auto" />
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search jewelry..."
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-400 transition" />
          </div>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}
            className="px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-400 transition cursor-pointer">
            <option value="default">Sort: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
          <button onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-medium transition ${showFilters ? 'bg-amber-500 text-white border-amber-500' : 'bg-white border-gray-200 hover:border-amber-400'}`}>
            <SlidersHorizontal size={15} /> Filters
          </button>
        </div>
        {showFilters && (
          <div className="bg-white rounded-2xl p-6 mb-8 border border-gray-100 shadow-sm animate-fadeIn">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Price Range</h3>
            <div className="flex items-center gap-6">
              <span className="text-sm text-gray-500 w-24">${priceRange[0].toLocaleString()}</span>
              <input type="range" min={0} max={maxPrice} step={500} value={priceRange[0]} onChange={e => setPriceRange([+e.target.value, priceRange[1]])} className="flex-1 accent-amber-500" />
              <input type="range" min={0} max={maxPrice} step={500} value={priceRange[1] || maxPrice} onChange={e => setPriceRange([priceRange[0], +e.target.value])} className="flex-1 accent-amber-500" />
              <span className="text-sm text-gray-500 w-24 text-right">${(priceRange[1] || maxPrice).toLocaleString()}</span>
            </div>
          </div>
        )}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-10 scrollbar-hide">
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-300 ${activeCategory === cat ? 'bg-gray-900 text-white shadow-lg scale-105' : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'}`}>
              {cat}
            </button>
          ))}
          {!loading && !error && <span className="ml-auto text-xs text-gray-400 self-center whitespace-nowrap pr-1">{filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}</span>}
        </div>
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : error ? (
          <ErrorBanner message={error} onRetry={refetch} />
        ) : filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <Search size={40} className="mx-auto mb-4 opacity-30" />
            <p className="font-serif text-xl">No pieces found</p>
            <p className="text-sm mt-2">Try adjusting your filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} addToCart={addToCart}
                toggleWishlist={toggleWishlist} isWishlisted={wishlist.includes(product.id)} onQuickView={setQuickViewProduct} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Navigation = ({ cartCount, wishlistCount }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className={`text-2xl font-serif tracking-wider transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>IVERA</Link>
        <div className="hidden md:flex gap-8">
          {[['/', 'Collection'], ['/wishlist', 'Wishlist']].map(([to, label]) => (
            <Link key={to} to={to} className={`text-xs uppercase tracking-[0.2em] hover:text-amber-400 transition-colors ${scrolled ? 'text-gray-700' : 'text-white/90'}`}>{label}</Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link to="/wishlist" className="relative">
            <Heart size={20} className={scrolled ? 'text-gray-700 hover:text-red-500' : 'text-white'} />
            {wishlistCount > 0 && <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">{wishlistCount}</span>}
          </Link>
          <Link to="/cart" className="relative">
            <ShoppingBag size={20} className={scrolled ? 'text-gray-700 hover:text-amber-500' : 'text-white'} />
            {cartCount > 0 && <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1920&h=1080&fit=crop" alt="Luxury Jewelry" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />
    </div>
    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <p className="text-xs uppercase tracking-[0.55em] mb-6 text-amber-300 drop-shadow-md">Timeless Elegance</p>
      <h1 className="font-serif font-light leading-tight mb-4" style={{ fontSize:'clamp(3rem,8vw,6rem)', color:'#FFFFFF', textShadow:'0 2px 24px rgba(0,0,0,0.6)', letterSpacing:'0.06em' }}>IVERA</h1>
      <p className="font-serif italic font-light mb-6" style={{ fontSize:'clamp(1.4rem,3.5vw,2.4rem)', color:'#F6D78A', textShadow:'0 1px 12px rgba(0,0,0,0.55)', letterSpacing:'0.04em' }}>Jewellery Design</p>
      <p className="font-light mb-10 max-w-xl mx-auto leading-relaxed" style={{ fontSize:'clamp(0.9rem,1.6vw,1.05rem)', color:'#EDE8DF', textShadow:'0 1px 8px rgba(0,0,0,0.5)' }}>
        Discover our exclusive collection of handcrafted fine jewelry, where every piece tells a story of luxury and sophistication.
      </p>
      <Link to="/collection" className="inline-block bg-amber-500 hover:bg-amber-400 text-white px-12 py-4 uppercase tracking-[0.2em] text-xs font-semibold transition-all duration-300 rounded-full shadow-xl hover:shadow-amber-500/40 hover:scale-105">
        Explore Collection
      </Link>
    </div>
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <ChevronRight className="rotate-90 text-white/50" size={24} />
    </div>
  </section>
);

const ProductDetail = ({ addToCart, toggleWishlist, wishlist }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);
  const [zoomed, setZoomed]   = useState(false);
  const [added, setAdded]     = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true); setError(null);
      try {
        const res  = await fetch(`${API_BASE}/api/products/${id}`);
        if (!res.ok) throw new Error("Product not found");
        const data = await res.json();
        const norm = normaliseProduct(data);
        setProduct(norm);
        const allRes  = await fetch(`${API_BASE}/api/products`);
        const allData = await allRes.json();
        setRelated(allData.map(normaliseProduct).filter(p => p.category === norm.category && p.id !== norm.id).slice(0, 3));
      } catch (err) { setError(err.message); }
      finally { setLoading(false); }
    };
    load();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-8 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 animate-pulse">
        <div className="aspect-square bg-gray-200 rounded-3xl" />
        <div className="space-y-4 flex flex-col justify-center">
          <div className="h-3 bg-gray-200 rounded w-1/4" /><div className="h-8 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-1/3" /><div className="h-24 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
  if (error || !product) return <div className="min-h-screen flex items-center justify-center bg-[#faf9f7]"><ErrorBanner message={error || "Product not found"} onRetry={() => navigate(-1)} /></div>;

  const isWishlisted = wishlist.includes(product.id);
  const handleAdd = () => { addToCart(product); setAdded(true); setTimeout(() => setAdded(false), 2000); };

  return (
    <div className="min-h-screen pt-20 pb-24 bg-[#faf9f7]">
      {zoomed && (
        <div className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center cursor-zoom-out" onClick={() => setZoomed(false)}>
          <img src={product.image} alt={product.name} className="max-w-[90vw] max-h-[90vh] object-contain" />
          <button onClick={() => setZoomed(false)} className="absolute top-6 right-6 text-white bg-white/10 rounded-full p-2"><X size={22} /></button>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 hover:text-amber-600 transition mb-10 mt-6">
          <ArrowLeft size={14} /> Back to Collection
        </button>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="relative group">
            <div className="aspect-square bg-white rounded-3xl overflow-hidden shadow-lg cursor-zoom-in" onClick={() => setZoomed(true)}>
              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <button onClick={() => setZoomed(true)} className="absolute bottom-4 right-4 bg-white/90 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition"><ZoomIn size={18} /></button>
            {product.badge && <span className="absolute top-4 left-4 bg-amber-500 text-white text-xs px-3 py-1.5 rounded-full font-semibold">{product.badge}</span>}
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-600 mb-2">{product.category}</p>
            <h1 className="font-serif text-3xl md:text-4xl font-light mb-3">{product.name}</h1>
            {product.rating && <StarRating rating={product.rating} reviews={product.reviews} />}
            <p className="text-3xl font-light text-gray-800 mt-4 mb-2">{product.price}</p>
            <div className="w-12 h-px bg-amber-500 mb-6" />
            <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>
            <div className="flex gap-3 mb-4">
              <button onClick={handleAdd} className={`flex-1 py-4 rounded-xl font-medium tracking-wide text-sm transition-all duration-300 shadow-md ${added ? 'bg-green-600 text-white' : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg'}`}>
                {added ? '✓ Added to Cart' : 'Add to Cart'}
              </button>
              <button onClick={() => toggleWishlist(product.id)} className={`p-4 rounded-xl border-2 transition-all duration-300 ${isWishlisted ? 'border-red-300 bg-red-50 text-red-500' : 'border-gray-200 hover:border-red-300 text-gray-400 hover:text-red-400'}`}>
                <Heart size={20} className={isWishlisted ? 'fill-red-500' : ''} />
              </button>
            </div>
            <button onClick={() => handleWhatsAppRedirect(product)} className="w-full py-4 rounded-xl border-2 border-green-400 text-green-600 font-medium text-sm flex items-center justify-center gap-2 hover:bg-green-50 transition">
              <MessageCircle size={16} /> Purchase via WhatsApp
            </button>
            <div className="mt-10 pt-8 border-t border-gray-100">
              <h3 className="font-serif text-lg mb-4">Craftsmanship Promise</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Handcrafted with precision','Certificate of authenticity','Luxury gift packaging','Lifetime craftsmanship warranty'].map(d => (
                  <div key={d} className="flex items-start gap-2 text-sm text-gray-600"><span className="text-amber-500 mt-0.5">✦</span> {d}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {related.length > 0 && (
          <div className="mt-24">
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-600 mb-2">You May Also Like</p>
              <h2 className="font-serif text-2xl font-light">Related Pieces</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {related.map(p => <ProductCard key={p.id} product={p} addToCart={addToCart} toggleWishlist={toggleWishlist} isWishlisted={wishlist.includes(p.id)} onQuickView={() => {}} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CartPage = ({ cart, removeFromCart, updateQty }) => {
  const total = cart.reduce((sum, p) => sum + p.priceNum * (p.qty || 1), 0);
  return (
    <div className="min-h-screen pt-24 pb-28 px-4 md:px-8 bg-[#faf9f7]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-600 mb-1">Your Selection</p>
          <h1 className="font-serif text-4xl font-light">Shopping Cart</h1>
        </div>
        {cart.length === 0 ? (
          <div className="text-center py-28">
            <ShoppingBag size={52} className="mx-auto mb-5 text-gray-200" />
            <p className="font-serif text-xl text-gray-400 mb-6">Your cart is empty</p>
            <Link to="/collection" className="inline-block bg-gray-900 text-white px-10 py-3.5 rounded-full text-sm uppercase tracking-wider hover:bg-amber-600 transition">Explore Collection</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cart.map(item => (
                <div key={item.id} className="bg-white rounded-2xl p-5 flex gap-5 shadow-sm">
                  <img src={item.image} alt={item.name} className="w-24 h-24 rounded-xl object-cover flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-amber-600 mb-0.5">{item.category}</p>
                    <h3 className="font-serif text-base leading-snug mb-1 truncate">{item.name}</h3>
                    <p className="text-sm font-medium text-gray-800">{item.price}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <button onClick={() => updateQty(item.id, Math.max(1,(item.qty||1)-1))} className="w-7 h-7 rounded-full border border-gray-200 text-sm flex items-center justify-center hover:bg-gray-100 transition">−</button>
                      <span className="text-sm font-medium w-4 text-center">{item.qty||1}</span>
                      <button onClick={() => updateQty(item.id, (item.qty||1)+1)} className="w-7 h-7 rounded-full border border-gray-200 text-sm flex items-center justify-center hover:bg-gray-100 transition">+</button>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-end">
                    <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-400 transition"><Trash2 size={16} /></button>
                    <p className="font-medium text-gray-800">${(item.priceNum*(item.qty||1)).toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm h-fit sticky top-28">
              <h3 className="font-serif text-xl mb-6">Order Summary</h3>
              <div className="space-y-3 mb-6">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between text-sm text-gray-600">
                    <span className="truncate mr-2">{item.name}</span>
                    <span className="flex-shrink-0">${(item.priceNum*(item.qty||1)).toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between font-medium text-lg"><span>Total</span><span className="text-amber-600">${total.toLocaleString()}</span></div>
              </div>
              <button onClick={() => handleWhatsAppRedirect(cart[0], cart)} className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition shadow-lg">
                <MessageCircle size={16} /> Order via WhatsApp
              </button>
              <Link to="/collection" className="block text-center mt-3 text-sm text-gray-500 hover:text-amber-600 transition">Continue Shopping</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const WishlistPage = ({ wishlist, toggleWishlist, addToCart }) => {
  const { products, loading } = useProducts();
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const items = products.filter(p => wishlist.includes(p.id));
  return (
    <div className="min-h-screen pt-24 pb-28 px-4 md:px-8 bg-[#faf9f7]">
      {quickViewProduct && <QuickView product={quickViewProduct} onClose={() => setQuickViewProduct(null)} addToCart={addToCart} toggleWishlist={toggleWishlist} isWishlisted={wishlist.includes(quickViewProduct.id)} />}
      <div className="max-w-7xl mx-auto">
        <div className="mb-10"><p className="text-xs uppercase tracking-[0.3em] text-amber-600 mb-1">Saved Pieces</p><h1 className="font-serif text-4xl font-light">My Wishlist</h1></div>
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">{Array.from({length:4}).map((_,i) => <SkeletonCard key={i} />)}</div>
        ) : items.length === 0 ? (
          <div className="text-center py-28">
            <Heart size={52} className="mx-auto mb-5 text-gray-200" />
            <p className="font-serif text-xl text-gray-400 mb-6">No saved pieces yet</p>
            <Link to="/collection" className="inline-block bg-gray-900 text-white px-10 py-3.5 rounded-full text-sm uppercase tracking-wider hover:bg-amber-600 transition">Explore Collection</Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {items.map(p => <ProductCard key={p.id} product={p} addToCart={addToCart} toggleWishlist={toggleWishlist} isWishlisted={true} onQuickView={setQuickViewProduct} />)}
          </div>
        )}
      </div>
    </div>
  );
};

const DesignersPortal = () => {
  const { products, loading, refetch } = useProducts();
  const [showForm, setShowForm]         = useState(false);
  const [submitting, setSubmitting]     = useState(false);
  const [success, setSuccess]           = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [newProduct, setNewProduct]     = useState({ name:'', description:'', price:'', category:'Rings' });
  const [imageFile, setImageFile]       = useState(null);
  const [preview, setPreview]           = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) return alert("Please select an image");
    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("name", newProduct.name); fd.append("price", newProduct.price);
      fd.append("description", newProduct.description); fd.append("category", newProduct.category);
      fd.append("image", imageFile);
      const res = await fetch(`${API_BASE}/api/products`, { method:"POST", body:fd });
      if (!res.ok) throw new Error("Upload failed");
      setNewProduct({ name:'', description:'', price:'', category:'Rings' });
      setImageFile(null); setPreview(null); setShowForm(false);
      setSuccess(true); refetch(); setTimeout(() => setSuccess(false), 3000);
    } catch (err) { alert(err.message); }
    finally { setSubmitting(false); }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${API_BASE}/api/products/${id}`, { method:"DELETE" });
      setDeleteConfirm(null); refetch();
    } catch (err) { alert("Delete failed: " + err.message); }
  };

  return (
    <div className="min-h-screen pt-24 pb-24 px-4 md:px-8 bg-[#faf9f7]">
      {deleteConfirm && (
        <div className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4"><Trash2 size={22} className="text-red-500" /></div>
            <h3 className="font-serif text-xl mb-2">Delete this piece?</h3>
            <p className="text-sm text-gray-500 mb-6">This action cannot be undone.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteConfirm(null)} className="flex-1 border border-gray-200 py-3 rounded-xl text-sm hover:bg-gray-50 transition">Cancel</button>
              <button onClick={() => handleDelete(deleteConfirm)} className="flex-1 bg-red-500 text-white py-3 rounded-xl text-sm hover:bg-red-600 transition">Delete</button>
            </div>
          </div>
        </div>
      )}
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-600 mb-2">Designers Portal</p>
          <h1 className="font-serif text-4xl font-light">Manage Collection</h1>
          <div className="w-20 h-px bg-gray-800 mx-auto mt-4" />
        </div>
        {success && <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl p-4 mb-6 text-sm text-center animate-fadeIn">✓ New design uploaded and live on the store!</div>}
        {!showForm ? (
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm mb-10">
            <Upload size={44} className="mx-auto text-amber-500 mb-5" />
            <h2 className="font-serif text-2xl mb-3">Add New Jewelry Piece</h2>
            <p className="text-gray-500 mb-8 text-sm">Upload a new design — it goes live instantly</p>
            <button onClick={() => setShowForm(true)} className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3.5 rounded-full text-sm uppercase tracking-wider hover:bg-amber-600 transition shadow-md">
              <Plus size={15} /> Upload Design
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-10 animate-fadeIn">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-serif text-2xl">New Design</h2>
              <button onClick={() => { setShowForm(false); setPreview(null); }} className="p-2 text-gray-400 hover:text-gray-700"><X size={20} /></button>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Product Image</label>
                <label className="flex-1 border-2 border-dashed border-gray-200 rounded-xl p-6 text-center cursor-pointer hover:border-amber-400 transition group block">
                  <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                  {preview ? <img src={preview} alt="preview" className="w-32 h-32 object-cover rounded-xl mx-auto" /> : (
                    <><Upload size={28} className="mx-auto text-gray-300 group-hover:text-amber-400 transition mb-2" /><p className="text-sm text-gray-400">Click to select image</p></>
                  )}
                </label>
              </div>
              {[
                { label:'Design Name', key:'name', placeholder:'e.g. Aurora Diamond Ring', type:'text', required:true },
                { label:'Price', key:'price', placeholder:'e.g. $9,500', type:'text', required:true },
              ].map(({ label, key, placeholder, type, required }) => (
                <div key={key}>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">{label}</label>
                  <input type={type} value={newProduct[key]} placeholder={placeholder} required={required}
                    onChange={e => setNewProduct({ ...newProduct, [key]: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-400 transition bg-gray-50" />
                </div>
              ))}
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Category</label>
                <select value={newProduct.category} onChange={e => setNewProduct({ ...newProduct, category: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-400 transition bg-gray-50 cursor-pointer">
                  {CATEGORIES.filter(c => c !== 'All').map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Description</label>
                <textarea value={newProduct.description} placeholder="Describe the piece..." required
                  onChange={e => setNewProduct({ ...newProduct, description: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-400 transition bg-gray-50 h-28 resize-none" />
              </div>
              <div className="md:col-span-2 flex gap-4">
                <button type="submit" disabled={submitting} className="flex-1 bg-gray-900 text-white py-3.5 rounded-xl text-sm font-medium hover:bg-amber-600 transition shadow-md disabled:opacity-60 flex items-center justify-center gap-2">
                  {submitting ? <><RefreshCw size={14} className="animate-spin" /> Uploading…</> : 'Upload Design'}
                </button>
                <button type="button" onClick={() => { setShowForm(false); setPreview(null); }} className="flex-1 border border-gray-200 text-gray-600 py-3.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition">Cancel</button>
              </div>
            </form>
          </div>
        )}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-xl">Live Collection {!loading && <span className="text-gray-400 text-base font-sans">({products.length} pieces)</span>}</h3>
            <button onClick={refetch} className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-amber-600 transition"><RefreshCw size={13} /> Refresh</button>
          </div>
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">{Array.from({length:8}).map((_,i) => <SkeletonCard key={i} />)}</div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {products.map(p => (
                <div key={p.id} className="bg-white rounded-xl overflow-hidden shadow-sm group relative">
                  <img src={p.image} alt={p.name} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
                  <button onClick={() => setDeleteConfirm(p.id)}
                    className="absolute top-2 right-2 bg-white/90 hover:bg-red-500 hover:text-white text-gray-500 rounded-full p-1.5 shadow opacity-0 group-hover:opacity-100 transition-all" title="Delete">
                    <Trash2 size={13} />
                  </button>
                  <div className="p-3">
                    <p className="font-serif text-sm truncate">{p.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{p.price}</p>
                    <span className="inline-block mt-1 text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{p.category}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-gray-950 text-white py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-serif mb-4">IVERA</h2>
          <p className="text-gray-500 leading-relaxed max-w-sm text-sm">Crafting timeless jewelry that celebrates elegance and sophistication.</p>
          <div className="flex gap-4 mt-6">
            <a href="https://www.instagram.com/ivera_designs?igsh=ODMyaWMxa3ZqZm1n" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-white/5 hover:bg-amber-500/20 text-gray-400 hover:text-amber-400 transition"><Instagram size={18} /></a>
            <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-amber-500/20 text-gray-400 hover:text-amber-400 transition"><Facebook size={18} /></a>
            <a href={`https://wa.me/${WHATSAPP_PHONE}`} target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-white/5 hover:bg-green-500/20 text-gray-400 hover:text-green-400 transition"><MessageCircle size={18} /></a>
          </div>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-widest mb-5 text-gray-400">Explore</h3>
          <ul className="space-y-3 text-sm text-gray-500">
            {[['/', 'Collection'], ['/wishlist', 'Wishlist']].map(([to, label]) => (
              <li key={to}><Link to={to} className="hover:text-amber-400 transition">{label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-widest mb-5 text-gray-400">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href={`tel:${WHATSAPP_PHONE}`} className="flex items-center gap-2 hover:text-amber-400 transition"><Phone size={13} />{WHATSAPP_PHONE}</a></li>
            <li><a href="mailto:info@ivera.com" className="flex items-center gap-2 hover:text-amber-400 transition"><Mail size={13} />info@ivera.com</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 text-center text-gray-600 text-xs">© 2024 IVERA Jewellery Design. All rights reserved.</div>
    </div>
  </footer>
);

const MobileNav = ({ cartCount, wishlistCount }) => (
  <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-2 py-2 grid grid-cols-4">
    {[
      { to:'/', icon:<HomeIcon size={20} />, label:'Home', badge:0 },
      { to:'/collection', icon:<Grid size={20} />, label:'Shop', badge:0 },
      { to:'/wishlist', icon:<Heart size={20} />, label:'Saved', badge:wishlistCount },
      { to:'/cart', icon:<ShoppingBag size={20} />, label:'Cart', badge:cartCount },
    ].map(({ to, icon, label, badge }) => (
      <Link key={to} to={to} className="flex flex-col items-center gap-1 py-1 relative text-gray-500 hover:text-amber-600 transition">
        <div className="relative">
          {icon}
          {badge > 0 && <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-white text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">{badge}</span>}
        </div>
        <span className="text-[10px] uppercase tracking-wide">{label}</span>
      </Link>
    ))}
  </nav>
);

const InstaFloat = () => (
  <a href="https://www.instagram.com/ivera_designs?igsh=ODMyaWMxa3ZqZm1n" target="_blank" rel="noreferrer" className="fixed bottom-20 md:bottom-6 right-5 z-[100] group">
    <div className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-[2px] rounded-full shadow-xl">
      <div className="bg-white rounded-full p-3 group-hover:scale-110 transition duration-300"><Instagram size={22} className="text-pink-600" /></div>
    </div>
  </a>
);

const HomePage = ({ addToCart, toggleWishlist, wishlist }) => {
  const { products, loading } = useProducts();
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  return (
    <>
      {quickViewProduct && <QuickView product={quickViewProduct} onClose={() => setQuickViewProduct(null)} addToCart={addToCart} toggleWishlist={toggleWishlist} isWishlisted={wishlist.includes(quickViewProduct.id)} />}
      <Hero />
      <section className="py-20 px-4 md:px-8 bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-600 mb-2">Handpicked for You</p>
            <h2 className="font-serif text-3xl font-light">Featured Pieces</h2>
          </div>
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">{Array.from({length:4}).map((_,i) => <SkeletonCard key={i} />)}</div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {products.slice(0,4).map(p => <ProductCard key={p.id} product={p} addToCart={addToCart} toggleWishlist={toggleWishlist} isWishlisted={wishlist.includes(p.id)} onQuickView={setQuickViewProduct} />)}
            </div>
          )}
          <div className="text-center mt-12">
            <Link to="/collection" className="inline-block border border-gray-900 text-gray-900 px-10 py-3.5 rounded-full text-xs uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-300">View Full Collection →</Link>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-amber-400 mb-3">Our Story</p>
          <h2 className="font-serif text-4xl font-light mb-6">A Legacy of Excellence</h2>
          <p className="text-gray-400 leading-relaxed mb-12 text-sm max-w-2xl mx-auto">For over three decades, IVERA has been synonymous with exceptional craftsmanship and timeless design.</p>
          <div className="grid grid-cols-3 gap-8">
            {[['30+','Years of Excellence'],['500+','Unique Designs'],['10K+','Happy Clients']].map(([num,label]) => (
              <div key={label}><p className="text-4xl font-serif text-amber-400 mb-1">{num}</p><p className="text-xs uppercase tracking-widest text-gray-500">{label}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-white">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-600 mb-2">Stay Connected</p>
          <h2 className="font-serif text-3xl font-light mb-3">Join Our Exclusive List</h2>
          <p className="text-gray-500 text-sm mb-8">Be the first to discover new collections and special offers.</p>
          <div className="flex gap-3">
            <input type="email" placeholder="Your email address" className="flex-1 px-5 py-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-400 transition" />
            <button className="bg-gray-900 text-white px-6 py-3.5 rounded-xl text-sm font-medium hover:bg-amber-600 transition">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default function App() {
  const [cart, setCart]         = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = useCallback((product) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === product.id);
      if (existing) return prev.map(p => p.id === product.id ? { ...p, qty: (p.qty||1)+1 } : p);
      return [...prev, { ...product, qty:1 }];
    });
  }, []);
  const removeFromCart = useCallback((id) => setCart(prev => prev.filter(p => p.id !== id)), []);
  const updateQty      = useCallback((id, qty) => setCart(prev => prev.map(p => p.id === id ? { ...p, qty } : p)), []);
  const toggleWishlist = useCallback((id) => setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]), []);
  const cartCount      = cart.reduce((s, p) => s + (p.qty||1), 0);

  return (
    <Router>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');
        * { font-family: 'Jost', sans-serif; }
        .font-serif { font-family: 'Cormorant Garamond', serif !important; }
        @keyframes fadeIn { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.4s ease forwards; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        input[type=range] { height: 4px; }
      `}</style>
      <div className="min-h-screen flex flex-col">
        <Navigation cartCount={cartCount} wishlistCount={wishlist.length} />
        <InstaFloat />
        <MobileNav cartCount={cartCount} wishlistCount={wishlist.length} />
        <main className="flex-1">
          <Routes>
            <Route path="/"                 element={<HomePage       addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
            <Route path="/collection"       element={<CollectionPage addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
            <Route path="/product/:id"      element={<ProductDetail  addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
            <Route path="/cart"             element={<CartPage       cart={cart} removeFromCart={removeFromCart} updateQty={updateQty} />} />
            <Route path="/wishlist"         element={<WishlistPage   wishlist={wishlist} toggleWishlist={toggleWishlist} addToCart={addToCart} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
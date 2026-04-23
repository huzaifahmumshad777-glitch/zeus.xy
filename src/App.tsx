/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Dumbbell, 
  Users, 
  MapPin, 
  Phone, 
  Clock, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Instagram, 
  Facebook, 
  Youtube, 
  Menu, 
  X,
  Zap,
  ShieldCheck,
  Timer,
  Play,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants & Data ---

const GYM_IMAGES = [
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFfETWzIzv6rJn3MCA9demvbWgvLpxU1bQJNClLu-auO-cjxzJzakKo49Uph9DZkUTbTaWdMp-Q-c0UOGYehS2K6bz1UwaPojrNTqrDl9uiFxfJ4v4FdotoDJqWAdAn2lGs7e-Y7Q=w1000-h800-k-no", // Main Hero / Main Photo
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFCCoDJnl8CiM4XSRGAIUeqg_XHLZ5UZR53TI9uN4Iw9hrrWtt4QX8jlR9NGezlLdy7D5v6F46DUTlLAG7-8wo6mbJgQXFm_JdzL_WYTCPp0_LRRbb5e3NpRjiL5dwbVfv5talHUA=w1000-h800-k-no", // Image 2
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHkSIXl0Q7UgOLETNWKB58t-ycWcLE-I3o08iTMOSWo4EV9qWxLPPmar35r2HjdhtZ4DutrK_zEG0wjeMwy_QGVC5rQz3atlc1FS7saMBU8DRk0lThKx2lCKzviQRfi6jkbLku-1w=w1000-h800-k-no", // Image 3
  "https://lh3.googleusercontent.com/p/AF1QipOF0LKmrs4332AOoYoL6_8WjTmN_TwcCNYxaexO=w1300-h800-k-no", // Image 4 (AF1Q...)
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHjraJPLnSZ8tKsbWAR-XZAZ_dXpZ1MRlIuoX2z966VJNWhHkYS1uAEZv8IaKiDieDxZp4aQ510xUV6AxZpNw4N-wkxr-5eCs-1twieUtwqByPw0mV3zKf0W-OTlqJi_QFKwskN=w500-h1000-k-no", // Image 5
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHM0JyglMMk06V_dXWuXZ06Phsv1fTnAUrbKMwsS_UBLdMeWC7ZvS-1pXaVhuXSNFOrq57gggQ_QeoTIvgeoCWe9Rlwwdn5YlLcL_gMecCskPPYwH286tKIKr86ZNkbC_nOaeaf=w1000-h800-k-no" // Image 6
];

const TESTIMONIALS = [
  {
    quote: "Amazing place – good trainers and equipment and friendly atmosphere.",
    author: "Google Reviewer",
    rating: 5,
  },
  {
    quote: "The locker room and shower/steam bath facility was clean.",
    author: "Google Reviewer",
    rating: 5,
  },
  {
    quote: "Trainers are good, steam bath, changing rooms, washrooms.",
    author: "Google Reviewer",
    rating: 5,
  }
];

const CLASSES = [
  { title: "Weight Training", icon: <Dumbbell className="w-6 h-6" />, desc: "Advanced strength programs with modern equipment." },
  { title: "Functional Fitness", icon: <Zap className="w-6 h-6" />, desc: "Dynamic workouts for real-world performance." },
  { title: "Yoga", icon: <Users className="w-6 h-6" />, desc: "Balance your mind and body with expert guidance." },
  { title: "Zumba", icon: <Users className="w-6 h-6" />, desc: "High-energy dance fitness to keep you moving." },
  { title: "MMA", icon: <ShieldCheck className="w-6 h-6" />, desc: "Tapping into your warrior spirit with mixed martial arts." },
  { title: "Calisthenics", icon: <Timer className="w-6 h-6" />, desc: "Master your body weight with precision training." },
];

const WHY_US = [
  { title: "4.7★ Rating", desc: "Top-rated gym in Mangaluru from 600+ Google reviews.", icon: <Star className="w-8 h-8 text-primary" /> },
  { title: "Spacious Floor", desc: "9,000 sq.ft. of air-conditioned workout space.", icon: <CheckCircle2 className="w-8 h-8 text-primary" /> },
  { title: "Premium Gear", desc: "60+ state-of-the-art fitness machines.", icon: <Dumbbell className="w-8 h-8 text-primary" /> },
  { title: "Elite Trainers", desc: "Professional trainers who give individual attention.", icon: <ShieldCheck className="w-8 h-8 text-primary" /> },
];

const HOURS = [
  { day: "Mon - Sat", time: "5:30 AM - 10:00 PM" },
  { day: "Sunday", time: "Closed / 7:00 AM - 1:00 PM (verify info)" },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Classes', href: '#classes' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-6 left-0 right-0 z-50 transition-all duration-500`}>
      <div className={`max-w-7xl mx-auto px-4 w-full`}>
        <div className={`flex justify-between items-center px-4 md:px-6 py-2 md:py-3 transition-all duration-300 rounded-3xl border border-white/5 ${isScrolled ? 'bg-surface/90 backdrop-blur-xl shadow-2xl md:py-4 border-primary/20' : 'bg-surface/40 backdrop-blur-lg shadow-xl'}`}>
          <a href="#home" className="flex items-center gap-2 md:gap-3 group">
            <div className="bg-primary text-black px-1.5 py-0.5 rounded font-black italic tracking-tighter text-base md:text-lg leading-tight">ZEUS</div>
            <div className="h-4 w-[1px] bg-white/20 hidden sm:block"></div>
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-primary font-black">Strength <span className="text-white/60">Style</span></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-primary transition-colors">
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4 border-l border-white/10 pl-8">
               <span className="text-[10px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full font-bold">4.7★ (629+ Reviews)</span>
               <a href="tel:+919164973777" className="bg-primary hover:bg-white text-black px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-tighter transition-all">
                Book Trial
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-4 right-4 mt-2 bg-surface border border-white/10 p-6 md:hidden flex flex-col gap-4 rounded-3xl shadow-2xl"
          >
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-black uppercase tracking-widest text-white/70 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="tel:+919164973777" className="bg-primary text-black py-4 rounded-2xl text-center font-black uppercase tracking-tighter">
              Call Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle, light = false }: { children: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="mb-10">
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-3"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.9] text-white`}
    >
      {children}
    </motion.h2>
  </div>
);

const BMRCalculator = () => {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [bmr, setBmr] = useState<number | null>(null);

  const calculateBmr = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (w && h && a) {
      let result = 10 * w + 6.25 * h - 5 * a;
      if (gender === 'male') {
        result += 5;
      } else {
        result -= 161;
      }
      setBmr(Math.round(result));
    }
  };

  return (
    <div className="flex flex-col h-full">
      <SectionHeading subtitle="Tools">BMR Calculator</SectionHeading>
      <div className="space-y-4 flex-1">
        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={() => setGender('male')}
            className={`py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${gender === 'male' ? 'bg-primary text-black' : 'bg-white/5 border border-white/10 text-white/60'}`}
          >
            Male
          </button>
          <button 
            onClick={() => setGender('female')}
            className={`py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${gender === 'female' ? 'bg-primary text-black' : 'bg-white/5 border border-white/10 text-white/60'}`}
          >
            Female
          </button>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <input 
            type="number" 
            placeholder="Weight (kg)" 
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-2xl focus:border-primary outline-none transition-colors text-sm font-bold" 
          />
          <input 
            type="number" 
            placeholder="Height (cm)" 
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-2xl focus:border-primary outline-none transition-colors text-sm font-bold" 
          />
          <input 
            type="number" 
            placeholder="Age" 
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-2xl focus:border-primary outline-none transition-colors text-sm font-bold" 
          />
        </div>
        <button 
          onClick={calculateBmr}
          className="w-full bg-primary text-black py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white transition-colors"
        >
          Calculate Result
        </button>
      </div>
      {bmr !== null && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-6 bg-primary/10 border border-primary/20 p-6 rounded-3xl text-center"
        >
          <p className="text-[10px] font-black uppercase text-primary mb-1">Your Est. BMR</p>
          <div className="text-4xl font-black italic tracking-tighter text-white">{bmr} <span className="text-xs not-italic text-white/50">kcal/day</span></div>
        </motion.div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden selection:bg-primary selection:text-dark">
      <Navbar />

      {/* Hero Section - Bento style */}
      <section id="home" className="pt-28 md:pt-32 pb-6 md:pb-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4">
          {/* Main Hero Block */}
          <div className="col-span-12 lg:col-span-8 relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/5 h-[450px] sm:h-[500px] lg:h-[600px] shadow-2xl">
            <img 
              src={GYM_IMAGES[0]} 
              alt="Zeus Fitness Club" 
              className="absolute inset-0 w-full h-full object-cover brightness-50"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end bg-gradient-to-t from-black via-black/40 to-transparent">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-2 mb-4 md:mb-6">
                  <Star className="text-primary fill-primary w-3 h-3 md:w-4 md:h-4" />
                  <span className="font-black uppercase tracking-[0.4em] text-[9px] md:text-[10px] text-primary">Mangaluru's Top Fitness Destination</span>
                </div>
                <h1 className="text-3xl sm:text-5xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.9] md:leading-[0.82] italic tracking-tighter md:tracking-[-0.05em] mb-6 md:mb-10 drop-shadow-2xl">
                  TRANSFORM YOUR <br className="sm:hidden" />
                  <span className="text-primary bg-gradient-to-br from-primary to-yellow-200 bg-clip-text text-transparent">BODY AND LIFE</span>
                </h1>
                <p className="text-base md:text-lg text-white/70 max-w-xl font-light mb-6 md:mb-8 line-clamp-3 sm:line-clamp-none">
                  Leading fitness destination in Mangaluru – <span className="text-primary font-bold">9000 sq.ft.</span> floor with top-quality equipment and expert trainers.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#contact" className="bg-primary text-black px-6 md:px-8 py-2.5 md:py-3 rounded-full font-black text-[10px] md:text-xs uppercase tracking-tighter hover:bg-white transition-all scale-105 md:scale-110 active:scale-100">
                    Book a Free Trial
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stats / Advantage Block */}
          <div className="col-span-12 lg:col-span-4 bg-primary rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-10 text-dark flex flex-col shadow-2xl lg:h-[600px]">
            <div className="flex flex-col h-full"> 
               <div className="mb-8 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.85] mb-4 md:mb-6">The Zeus<br />Advantage</h2>
                <p className="text-xs md:text-sm font-bold opacity-80 uppercase tracking-widest mb-6 lg:mb-10 leading-relaxed">
                  Premium fitness at a budget-friendly price. Strength meets style in our state-of-the-art facility.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 md:gap-4 mt-auto">
                {[
                  { val: "9k", label: "Sq. Ft Floor" },
                  { val: "60+", label: "Elite Gear" },
                  { val: "4.7★", label: "Google Rank" },
                  { val: "24/7", label: "Energy" }
                ].map((stat, i) => (
                  <div key={i} className="bg-black/5 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-black/5 hover:bg-black/10 transition-colors text-center sm:text-left">
                    <div className="text-2xl md:text-3xl font-black italic tracking-tighter mb-1">{stat.val}</div>
                    <div className="text-[8px] md:text-[10px] uppercase font-black tracking-widest opacity-60 leading-none">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Utilities Section - BMR SECTION */}
      <section className="py-6 md:py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* BMR Calculator Block */}
          <div className="md:col-span-5 lg:col-span-4 bg-surface border border-white/5 rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-10 shadow-xl">
             <BMRCalculator />
          </div>

          {/* Join Form Block */}
          <div className="md:col-span-7 lg:col-span-8 bg-surface border border-white/5 rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-10 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none hidden lg:block">
              <Dumbbell className="w-64 h-64 -rotate-12" />
            </div>
            <div className="relative z-10 h-full flex flex-col">
              <SectionHeading subtitle="Enroll">Membership Form</SectionHeading>
              <form className="grid sm:grid-cols-2 gap-6 flex-1" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <div>
                    <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 block">Full Name</label>
                    <input type="text" placeholder="e.g. Rahul Shenoy" className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-2xl focus:border-primary outline-none transition-colors text-sm font-bold placeholder:text-white/20" />
                  </div>
                  <div>
                    <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 block">Email Address</label>
                    <input type="email" placeholder="rahul@example.com" className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-2xl focus:border-primary outline-none transition-colors text-sm font-bold placeholder:text-white/20" />
                  </div>
                  <div>
                    <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 block">Mobile Number</label>
                    <input type="tel" placeholder="+91 00000 00000" className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-2xl focus:border-primary outline-none transition-colors text-sm font-bold placeholder:text-white/20" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 block">Selected Program</label>
                    <select className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-2xl focus:border-primary outline-none transition-colors text-sm font-bold appearance-none text-white/70">
                       <option>Weight Training</option>
                       <option>Functional Fitness</option>
                       <option>Yoga / Zumba</option>
                       <option>MMA / Fighting</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 block">Experience Level</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Beginner', 'Intermediate', 'Pro'].map(lvl => (
                        <button key={lvl} type="button" className="py-2.5 bg-white/5 border border-white/10 rounded-xl text-[9px] font-bold uppercase hover:bg-primary hover:text-black transition-all">{lvl}</button>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4">
                    <button className="w-full bg-primary text-black py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">Submit Application</button>
                    <p className="text-[8px] text-white/30 text-center mt-3 uppercase font-bold tracking-widest">No commitment required for trial</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* About & Programs - Multi-block Grid */}
      <section id="about" className="py-6 md:py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Programs Block */}
          <div id="classes" className="md:col-span-5 lg:col-span-5 bg-surface border border-white/5 rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-10 shadow-xl">
             <SectionHeading subtitle="Programs">Our Classes</SectionHeading>
             <div className="space-y-2 md:space-y-4">
               {CLASSES.map((program, i) => (
                 <div key={i} className="flex items-center justify-between group cursor-pointer border-b border-white/5 pb-3 md:pb-4 hover:border-primary/40 transition-colors">
                   <div className="flex items-center">
                     <span className="text-base md:text-lg font-black uppercase italic tracking-tighter mr-3 text-white/50 group-hover:text-primary transition-colors">0{i+1}</span>
                     <span className="text-sm md:text-base font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform inline-block whitespace-nowrap">{program.title}</span>
                   </div>
                   <ArrowRight className="text-primary w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                 </div>
               ))}
             </div>
          </div>

          {/* About Image Block */}
          <div className="md:col-span-7 lg:col-span-7 bg-surface border border-white/5 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative shadow-xl min-h-[350px] md:min-h-0">
            <img src={GYM_IMAGES[1]} className="absolute inset-0 w-full h-full object-cover" alt="Gym floor" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/40 to-transparent p-8 md:p-10 flex flex-col justify-center">
              <div className="max-w-md">
                <h3 className="text-2xl md:text-3xl font-black uppercase mb-4 italic tracking-tighter">Premium Facility</h3>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-6">
                  Zeus Fitness Club is one of the most‑recommended gyms in Mangaluru, known for its clean, spacious, and well‑maintained environment.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Unisex", "Air-Con", "Locker Rooms", "Sauna & Steam"].map(tag => (
                    <span key={tag} className="text-[8px] md:text-[10px] bg-primary/20 text-primary border border-primary/20 px-3 py-1 rounded-full font-black uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Gallery & Video Grid */}
      <section id="gallery" className="py-6 md:py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
          
          {/* Main Gallery Block */}
          <div className="md:col-span-5 lg:col-span-4 grid grid-cols-2 grid-rows-2 gap-3 md:gap-4 h-[300px] sm:h-[400px] md:h-[500px]">
             <div className="rounded-2xl md:rounded-3xl bg-surface overflow-hidden border border-white/10 group">
                <img src={GYM_IMAGES[2]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
             </div>
             <div className="rounded-2xl md:rounded-3xl bg-surface overflow-hidden border border-white/10 group">
                <img src={GYM_IMAGES[4]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
             </div>
             <div className="col-span-2 rounded-2xl md:rounded-3xl bg-surface overflow-hidden border border-white/10 relative group h-full">
                <img src={GYM_IMAGES[5]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-50" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] bg-white text-black px-4 py-2 rounded-full shadow-2xl">Inside Zeus</span>
                </div>
             </div>
          </div>

          {/* Video Experience Block */}
          <div className="md:col-span-7 lg:col-span-8 bg-surface border border-white/5 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative h-[400px] md:h-[500px] shadow-xl group">
             <img src={GYM_IMAGES[3]} className="absolute inset-0 w-full h-full object-cover brightness-[0.3] grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt="Video cover" referrerPolicy="no-referrer" />
             <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-10">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-16 h-16 md:w-20 md:h-20 bg-primary flex items-center justify-center cursor-pointer rounded-full mb-6 md:mb-8 shadow-2xl hover:bg-white transition-colors"
                  onClick={() => window.open('https://www.google.com/maps/place/Zeus+Fitness+Club/@12.8804531,74.8591682,3a,75y,90t/data=!3m8!1e5!3m6!1sAF1QipNW-iaamKQnElyfolycE37ueW6w5sNrh289lteb!2e10!3e10!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipNW-iaamKQnElyfolycE37ueW6w5sNrh289lteb%3Dw203-h114-k-no!7i1920!8i1080', '_blank', 'noreferrer')}
                >
                  <Play className="text-black w-6 h-6 md:w-8 md:h-8 fill-black" />
                </motion.div>
                <SectionHeading subtitle="Video Tour">Experience Zeus</SectionHeading>
                <p className="text-[9px] md:text-sm font-bold uppercase tracking-[0.3em] text-primary">Discover the movement</p>
             </div>
          </div>

        </div>
      </section>

      {/* Social / Testimonials / Membership Grid */}
      <section className="py-6 md:py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Testimonials Block */}
          <div className="md:col-span-7 lg:col-span-8 bg-surface border border-white/5 rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-10 shadow-xl flex flex-col">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
               <SectionHeading subtitle="Success">Member Stories</SectionHeading>
               <div className="flex gap-1 text-primary">
                 {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
               </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 flex-1">
              {TESTIMONIALS.slice(0, 2).map((t, i) => (
                <div key={i} className="bg-white/5 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 hover:border-primary/20 transition-colors flex flex-col">
                  <p className="text-xs md:text-sm italic text-white/70 leading-relaxed mb-6 font-light">"{t.quote}"</p>
                  <div className="mt-auto">
                    <p className="text-[9px] font-black uppercase text-primary tracking-[0.2em]">— {t.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Connect Block */}
          <div className="md:col-span-5 lg:col-span-4 bg-primary rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-10 text-dark flex flex-col justify-between shadow-xl h-[350px] md:h-auto">
            <div>
              <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter mb-4">Connect <br /> with us</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-8 leading-tight">Stay updated with the latest classes and transformations.</p>
            </div>
            <div className="flex gap-3 md:gap-4">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 md:w-14 md:h-14 bg-black/10 flex items-center justify-center rounded-xl md:rounded-2xl hover:bg-black hover:text-white transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <button className="w-full bg-black text-white py-4 rounded-2xl text-[9px] md:text-xs font-black uppercase tracking-[0.2em] mt-8 hover:scale-[1.02] active:scale-[0.98] transition-transform">
              Join the Community
            </button>
          </div>

        </div>
      </section>

      {/* Final Contact Bento Grid */}
      <section id="contact" className="py-12 md:py-24 px-4 bg-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Contact Details Block */}
          <div className="md:col-span-5 lg:col-span-4 bg-primary rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-10 text-dark flex flex-col shadow-2xl">
             <h3 className="text-[9px] md:text-[10px] uppercase font-black tracking-[0.4em] mb-8">Reach Out</h3>
             <div className="flex-1 space-y-8">
                <div>
                   <p className="text-[8px] md:text-[9px] font-black uppercase mb-2 text-dark/60 tracking-widest">Location</p>
                   <p className="text-xs md:text-sm font-bold uppercase tracking-tight leading-tight">3rd Floor, Times Square Building,<br />Shivbagh Road, Mangaluru, 575005</p>
                </div>
                <div>
                   <p className="text-[8px] md:text-[9px] font-black uppercase mb-2 text-dark/60 tracking-widest">Opening Hours</p>
                   {HOURS.map((h, i) => (
                     <div key={i} className="flex justify-between text-[10px] font-bold mb-1">
                       <span className="uppercase">{h.day}</span>
                       <span className="italic">{h.time}</span>
                     </div>
                   ))}
                </div>
                <div>
                   <p className="text-[8px] md:text-[9px] font-black uppercase mb-2 text-dark/60 tracking-widest">Phone</p>
                   <a href="tel:+919164973777" className="text-2xl md:text-3xl font-black italic tracking-tighter block hover:translate-x-1 transition-transform">+91 91649 73777</a>
                </div>
             </div>
             <a href="tel:+919164973777" className="w-full bg-black text-white py-4 rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mt-10 flex items-center justify-center gap-2">
                <Phone size={14} fill="currentColor" /> Call Now
             </a>
          </div>

          {/* Map & Form Grid */}
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-1 gap-4">
             {/* Map Block */}
             <div className="bg-surface rounded-[1.5rem] md:rounded-[2rem] overflow-hidden h-[300px] md:h-auto border border-white/5 relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.654876935279!2d74.85684237510168!3d12.880331087426618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a397858348d%3A0x63f03b222d0577be!2sZeus%20Fitness%20Club!5e0!3m2!1sen!2sin!4v1700000000000"
                  className="w-full h-full border-none grayscale group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                ></iframe>
                <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-primary text-black px-3 md:px-4 py-1.5 rounded-full font-black text-[8px] md:text-[9px] uppercase tracking-widest shadow-xl">Kadri, Mangaluru</div>
             </div>
             
             {/* Simple Trial Block */}
             <div className="bg-surface border border-white/5 rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-10 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
                <div>
                   <h4 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-primary leading-none mb-2">Claim your <br className="hidden sm:block" /> free pass</h4>
                   <p className="text-[9px] font-black uppercase tracking-widest text-white/50">Experience the quality without any strings.</p>
                </div>
                <div className="w-full md:w-auto">
                   <button className="w-full md:w-64 bg-white text-black py-4 rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-primary transition-colors">Start Workout</button>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* Footer Branding */}
      <footer className="py-12 border-t border-white/5 bg-darker px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
           <div className="bg-primary text-black px-4 py-1 rounded font-black italic tracking-tighter text-2xl md:text-3xl mb-4">ZEUS</div>
           <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] text-white/30 text-center mb-8">Mangaluru • Excellence • Strength</p>
           <div className="h-[1px] w-full bg-white/5 mb-8"></div>
           <p className="text-[8px] md:text-[10px] font-bold text-white/20 uppercase tracking-widest text-center">© {new Date().getFullYear()} Zeus Fitness Club. Crafted for strength.</p>
        </div>
      </footer>
    </div>
  );
}

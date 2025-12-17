// Escape Gettysburg - React App

const { useState, useEffect, useRef } = React;

// Image paths - place your images in /images folder
const IMAGES = {
  logo: "/images/logo.png",
  titleLogo: "/images/title_logo.png",
  lockIcon: "/images/lock_only.png",
  heist: "/images/heist.png",
  madhatter: "/images/madhatter.png",
  houdini: "/images/houdini.png",
  heroVideo: "/videos/hero.mp4"
};

// Room data
const rooms = [
  {
    id: 'heist',
    name: 'HEIST OF THE GETTYSBURG ADDRESS',
    shortName: 'The Heist',
    description: "The most famous speech in American history sits behind reinforced glass. Your crew has one shot to pull off the impossible heist before the night guard returns.",
    difficulty: 5,
    escapeRate: 70,
    duration: 60,
    players: '2-8',
    image: IMAGES.heist,
    icon: 'fa-scroll',
    color: '#F59E0B'
  },
  {
    id: 'alice',
    name: 'THE MAD HATTER',
    shortName: 'Mad Hatter',
    description: "Trapped in a twisted wonderland, you must solve the Queen's puzzles before the dream becomes a nightmare. Curiouser and curiouser...",
    difficulty: 6,
    escapeRate: 50,
    duration: 60,
    players: '2-8',
    image: IMAGES.madhatter,
    icon: 'fa-hat-wizard',
    color: '#EC4899'
  },
  {
    id: 'houdini',
    name: "HOUDINI'S WORKSHOP",
    shortName: "Houdini's Workshop",
    description: "The master illusionist left behind his greatest secrets. But his workshop has a mind of its own. Can you escape before the final curtain falls?",
    difficulty: 8,
    escapeRate: 40,
    duration: 60,
    players: '2-8',
    image: IMAGES.houdini,
    icon: 'fa-wand-sparkles',
    color: '#8B5CF6'
  }
];

// Navigation Component
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}
         style={{ 
           background: scrolled ? 'rgba(10,10,11,0.95)' : 'transparent',
           backdropFilter: scrolled ? 'blur(20px)' : 'none',
           borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none'
         }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center group">
          <img src={IMAGES.titleLogo} alt="Escape Gettysburg" className="h-12 md:h-14 w-auto transition-all group-hover:scale-105" />
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#rooms" className="font-body text-sm text-slate-300 hover:text-white transition-colors">Our Rooms</a>
          <a href="#about" className="font-body text-sm text-slate-300 hover:text-white transition-colors">How It Works</a>
          <a href="#contact" className="font-body text-sm text-slate-300 hover:text-white transition-colors">Contact</a>
          <a href="tel:7177695397" className="font-body text-sm text-brand-blue hover:text-brand-blue transition-colors flex items-center gap-2">
            <i className="fas fa-phone"></i> (717) 769-5397
          </a>
          <a href="booking.html" className="px-6 py-2.5 rounded-xl font-display text-lg tracking-wide transition-all hover:scale-105 text-white"
                  style={{ background: 'linear-gradient(90deg, #3684bf, #00a0e2)', boxShadow: '0 0 20px rgba(0,160,226,0.3)' }}>
            BOOK NOW
          </a>
        </div>

        <button className="md:hidden text-white text-2xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 p-6" style={{ background: 'rgba(10,10,11,0.98)' }}>
          <div className="flex flex-col gap-4">
            <a href="#rooms" className="font-body text-lg text-white py-2">Our Rooms</a>
            <a href="#about" className="font-body text-lg text-white py-2">How It Works</a>
            <a href="#contact" className="font-body text-lg text-white py-2">Contact</a>
            <a href="tel:7177695397" className="font-body text-lg text-brand-blue py-2">
              <i className="fas fa-phone mr-2"></i>(717) 769-5397
            </a>
            <a href="booking.html" className="w-full py-4 rounded-xl font-display text-xl tracking-wide mt-2 text-white text-center block"
                    style={{ background: 'linear-gradient(90deg, #3684bf, #00a0e2)' }}>
              BOOK NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="hero-video w-full h-full object-cover"
        >
          <source src={IMAGES.heroVideo} type="video/mp4" />
        </video>
        
        {/* Gritty overlay effects */}
        <div className="film-grain"></div>
        <div className="scanlines"></div>
        <div className="vignette"></div>
        <div className="color-grade"></div>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
             style={{ background: 'rgba(0,160,226,0.1)', border: '1px solid rgba(0,160,226,0.3)', backdropFilter: 'blur(10px)' }}>
          <i className="fas fa-map-marker-alt text-brand-blue"></i>
          <span className="font-ui text-sm text-brand-blue">Downtown Gettysburg, PA</span>
        </div>

        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-wider mb-6 text-white leading-none drop-shadow-2xl">
          YOUR ADVENTURE
          <span className="block gradient-text">AWAITS</span>
        </h1>

        <p className="font-body text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-lg">
          Three immersive escape rooms. 60 minutes each. 
          <span className="text-white font-semibold"> Zero second chances.</span>
          <br/>Think you've got what it takes?
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="booking.html" className="px-10 py-5 rounded-xl font-display text-2xl tracking-wider transition-all hover:scale-105 animate-pulse-glow text-white"
                  style={{ background: 'linear-gradient(90deg, #3684bf, #00a0e2)' }}>
            <i className="fas fa-calendar-alt mr-3"></i>BOOK YOUR ESCAPE
          </a>
          <a href="#rooms" className="px-8 py-5 rounded-xl font-display text-xl tracking-wide transition-all hover:scale-105 hover:bg-white/10"
                  style={{ border: '2px solid rgba(255,255,255,0.3)', color: 'white', backdropFilter: 'blur(10px)' }}>
            <i className="fas fa-play-circle mr-2"></i>SEE OUR ROOMS
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300">
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <span className="font-ui text-sm">5-Star Rated</span>
          </div>
          <div className="w-px h-4 bg-slate-500"></div>
          <div className="flex items-center gap-2">
            <i className="fas fa-user-shield text-brand-blue"></i>
            <span className="font-ui text-sm">Private Games Only</span>
          </div>
          <div className="w-px h-4 bg-slate-500"></div>
          <div className="flex items-center gap-2">
            <i className="fas fa-users text-green-400"></i>
            <span className="font-ui text-sm">All Skill Levels</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <i className="fas fa-chevron-down text-2xl text-slate-400"></i>
      </div>
    </section>
  );
}

// Room Carousel Component - Center Focus
function RoomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % rooms.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getCardStyle = (index) => {
    const diff = index - currentIndex;
    const isActive = diff === 0;
    const isLeft = diff === -1 || (currentIndex === 0 && index === rooms.length - 1);
    const isRight = diff === 1 || (currentIndex === rooms.length - 1 && index === 0);
    
    if (isActive) {
      return {
        transform: 'translateX(0) scale(1)',
        opacity: 1,
        zIndex: 10,
        filter: 'brightness(1)'
      };
    } else if (isLeft) {
      return {
        transform: 'translateX(-70%) scale(0.8)',
        opacity: 0.5,
        zIndex: 5,
        filter: 'brightness(0.4)'
      };
    } else if (isRight) {
      return {
        transform: 'translateX(70%) scale(0.8)',
        opacity: 0.5,
        zIndex: 5,
        filter: 'brightness(0.4)'
      };
    } else {
      return {
        transform: 'translateX(0) scale(0.7)',
        opacity: 0,
        zIndex: 0,
        filter: 'brightness(0.3)'
      };
    }
  };

  return (
    <section id="rooms" className="py-24 px-6 overflow-hidden" style={{ background: '#0A0A0B' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl tracking-wider mb-4 text-white">
            CHOOSE YOUR <span className="gradient-text">ADVENTURE</span>
          </h2>
          <p className="font-body text-xl text-slate-400 max-w-2xl mx-auto">
            Three unique challenges. Three unforgettable experiences. Which will you conquer first?
          </p>
        </div>

        {/* Center-Focus Carousel */}
        <div className="relative h-[450px] md:h-[400px] flex items-center justify-center mb-8 overflow-hidden">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              onClick={() => goToSlide(index)}
              className="absolute w-[85%] max-w-2xl cursor-pointer transition-all duration-500 ease-out"
              style={getCardStyle(index)}
            >
              <div 
                className="relative rounded-3xl overflow-hidden"
                style={{ 
                  boxShadow: index === currentIndex ? '0 0 50px 5px rgba(0,160,226,0.4), 0 0 100px 10px rgba(0,160,226,0.2)' : '0 20px 40px rgba(0,0,0,0.5)',
                  border: index === currentIndex ? '3px solid rgba(0,0,0,0.8)' : '3px solid rgba(0,0,0,0.6)',
                  outline: index === currentIndex ? '2px solid rgba(0,160,226,0.5)' : 'none'
                }}
              >
                {/* Room background image */}
                <div className="absolute inset-0">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                </div>
                
                {/* Stronger gradient overlay for better text readability */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.4) 100%)' }}></div>
                
                <div className="relative aspect-[4/3] md:aspect-[16/10]">
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10">
                    <h3 className="font-display text-3xl md:text-5xl tracking-wide mb-3 text-white drop-shadow-lg">
                      {room.name}
                    </h3>
                    <p className="font-body text-base md:text-lg text-white/90 mb-5 max-w-2xl drop-shadow-md">
                      {room.description}
                    </p>

                    {/* Stats - brand blue color scheme */}
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-5">
                      <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-ui text-white"
                            style={{ background: 'rgba(0,160,226,0.3)', border: '1px solid rgba(0,160,226,0.4)' }}>
                        <i className="fas fa-clock text-brand-blue"></i> {room.duration} MIN
                      </span>
                      <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-ui text-white"
                            style={{ background: 'rgba(0,160,226,0.3)', border: '1px solid rgba(0,160,226,0.4)' }}>
                        <i className="fas fa-users text-brand-blue"></i> {room.players}
                      </span>
                      <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-ui text-white"
                            style={{ background: 'rgba(0,160,226,0.3)', border: '1px solid rgba(0,160,226,0.4)' }}>
                        <i className="fas fa-puzzle-piece text-brand-blue"></i> {room.difficulty}/10
                      </span>
                      <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-ui text-white"
                            style={{ background: 'rgba(0,160,226,0.3)', border: '1px solid rgba(0,160,226,0.4)' }}>
                        <i className="fas fa-trophy text-brand-blue"></i> {room.escapeRate}%
                      </span>
                    </div>

                    {index === currentIndex && (
                      <a href="booking.html" className="inline-block px-8 py-3 rounded-xl font-display text-xl tracking-wide transition-all hover:scale-105 text-white"
                              style={{ background: 'linear-gradient(90deg, #3684bf, #00a0e2)', boxShadow: '0 0 30px rgba(0,160,226,0.4)' }}>
                        BOOK THIS ROOM
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button 
            onClick={() => { setCurrentIndex((prev) => (prev - 1 + rooms.length) % rooms.length); setIsAutoPlaying(false); setTimeout(() => setIsAutoPlaying(true), 10000); }}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 z-20"
            style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            <i className="fas fa-chevron-left text-lg text-white"></i>
          </button>
          <button 
            onClick={() => { setCurrentIndex((prev) => (prev + 1) % rooms.length); setIsAutoPlaying(false); setTimeout(() => setIsAutoPlaying(true), 10000); }}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 z-20"
            style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            <i className="fas fa-chevron-right text-lg text-white"></i>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-3">
          {rooms.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'w-10 bg-brand-blue' : 'w-2 bg-slate-600 hover:bg-slate-500'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorks() {
  const steps = [
    { icon: 'fa-calendar-check', title: 'BOOK ONLINE', description: 'Pick your room, choose your time, and reserve your adventure in seconds.' },
    { icon: 'fa-users', title: 'GATHER YOUR CREW', description: 'Bring 2-8 of your sharpest friends, family, or coworkers.' },
    { icon: 'fa-door-open', title: 'GET BRIEFED', description: 'Your game master sets the scene and explains the rules.' },
    { icon: 'fa-clock', title: 'BEAT THE CLOCK', description: '60 minutes to solve puzzles, crack codes, and escape!' },
  ];

  return (
    <section id="about" className="py-24 px-6" style={{ background: 'linear-gradient(180deg, #0A0A0B 0%, #0F172A 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl tracking-wider mb-4 text-white">
            HOW IT <span className="gradient-text">WORKS</span>
          </h2>
          <p className="font-body text-xl text-slate-400">
            First time? No problem. Here's everything you need to know.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group flex">
              <div className="text-center p-8 rounded-2xl transition-all group-hover:scale-105 flex flex-col w-full"
                   style={{ background: 'rgba(0,160,226,0.05)', border: '1px solid rgba(0,160,226,0.1)' }}>
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110"
                     style={{ background: 'linear-gradient(135deg, rgba(0,160,226,0.2), rgba(54,132,191,0.1))' }}>
                  <i className={`fas ${step.icon} text-3xl text-brand-blue`}></i>
                </div>
                <div className="font-display text-4xl text-brand-blue mb-2">0{index + 1}</div>
                <h3 className="font-display text-2xl tracking-wide mb-3 text-white">{step.title}</h3>
                <p className="font-body text-slate-400 flex-grow">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <i className="fas fa-chevron-right text-slate-700"></i>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Who Is This For Section
function WhoIsThisFor() {
  const audiences = [
    { icon: 'fa-users', title: 'Friends & Family', description: 'Create memories that last longer than any photo.' },
    { icon: 'fa-heart', title: 'Date Night', description: 'Skip the boring dinner. Do something unforgettable.' },
    { icon: 'fa-building', title: 'Team Building', description: 'Watch your team communicate like never before.' },
    { icon: 'fa-birthday-cake', title: 'Celebrations', description: 'Birthdays, bachelor parties, reunions — we\'ve got you.' },
    { icon: 'fa-suitcase', title: 'Tourists', description: 'The perfect Gettysburg adventure beyond the battlefield.' },
    { icon: 'fa-gamepad', title: 'Puzzle Lovers', description: 'Think you\'re good? Prove it against the clock.' },
  ];

  return (
    <section className="py-24 px-6" style={{ background: '#0A0A0B' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl tracking-wider mb-4 text-white">
            PERFECT <span className="gradient-text">FOR</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((item, index) => (
            <div key={index} className="p-6 rounded-2xl transition-all hover:scale-105 cursor-pointer group"
                 style={{ background: 'rgba(15,23,42,0.5)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                     style={{ background: 'linear-gradient(135deg, rgba(0,160,226,0.2), rgba(54,132,191,0.1))' }}>
                  <i className={`fas ${item.icon} text-xl text-brand-blue`}></i>
                </div>
                <div>
                  <h3 className="font-display text-2xl tracking-wide mb-2 text-white group-hover:text-brand-blue transition-colors">{item.title}</h3>
                  <p className="font-body text-slate-400">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function Testimonials() {
  const reviews = [
    { text: "Best escape room we've ever done! The puzzles were clever without being frustrating. Our game master was super helpful and made the experience even better.", author: "Sarah M.", date: "2 weeks ago", avatar: "S" },
    { text: "Our team building event was a huge hit. Everyone's still talking about it! Already planning our next visit to try another room.", author: "Mike R.", date: "4 months ago", avatar: "M" },
    { text: "The Gettysburg Address room was incredible. So unique to this area! My family had a blast and we escaped with 3 minutes to spare!", author: "Jennifer L.", date: "8 months ago", avatar: "J" },
  ];

  return (
    <section className="py-24 px-6" style={{ background: 'linear-gradient(180deg, #0F172A 0%, #0A0A0B 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl md:text-7xl tracking-wider mb-4 text-white">
            WHAT <span className="gradient-text">ESCAPEES</span> SAY
          </h2>
        </div>

        {/* Overall Rating Summary */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-4 p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png" alt="Google" className="h-8 object-contain" />
            <div className="w-px h-12 bg-slate-700"></div>
            <div className="text-center">
              <div className="flex items-center gap-2">
                <span className="font-display text-4xl text-white">4.9</span>
                <div className="flex text-amber-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="font-ui text-sm text-slate-400">Based on 150+ reviews</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="p-6 rounded-2xl"
                 style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              {/* Header with avatar and name */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-ui font-semibold text-white"
                     style={{ background: 'linear-gradient(135deg, #4285F4, #34A853)' }}>
                  {review.avatar}
                </div>
                <div className="flex-grow">
                  <p className="font-ui font-medium text-white">{review.author}</p>
                  <p className="font-ui text-xs text-slate-500">{review.date}</p>
                </div>
                <img src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" alt="Google" className="w-5 h-5 opacity-70" />
              </div>
              
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-amber-400 text-sm"></i>
                ))}
              </div>
              
              {/* Review text */}
              <p className="font-body text-slate-300 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Link to all reviews */}
        <div className="text-center mt-10">
          <a href="https://www.google.com/search?q=escape+gettysburg+reviews" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-ui text-sm transition-all hover:scale-105"
             style={{ background: 'rgba(66,133,244,0.1)', border: '1px solid rgba(66,133,244,0.3)', color: '#8AB4F8' }}>
            <i className="fab fa-google"></i>
            Read all reviews on Google
            <i className="fas fa-external-link-alt text-xs"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #3684bf 0%, #0284C7 100%)' }}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-display text-5xl md:text-7xl tracking-wider mb-6 text-white">
          READY TO ESCAPE?
        </h2>
        <p className="font-body text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Book now and lock in your adventure. Spots fill up fast — especially on weekends!
        </p>
        <a href="booking.html" className="inline-block px-12 py-6 rounded-xl font-display text-3xl tracking-wider transition-all hover:scale-105 bg-white text-slate-900 shadow-2xl">
          <i className="fas fa-bolt mr-3"></i>BOOK NOW
        </a>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="py-24 px-6" style={{ background: '#0A0A0B' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-5xl tracking-wider mb-6 text-white">
              FIND <span className="gradient-text">US</span>
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                     style={{ background: 'rgba(0,160,226,0.2)' }}>
                  <i className="fas fa-map-marker-alt text-brand-blue"></i>
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-wide text-white mb-1">ADDRESS</h3>
                  <p className="font-body text-slate-400">59 N. 5th Street<br/>Gettysburg, PA 17325</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                     style={{ background: 'rgba(0,160,226,0.2)' }}>
                  <i className="fas fa-phone text-brand-blue"></i>
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-wide text-white mb-1">PHONE</h3>
                  <a href="tel:7177695397" className="font-body text-brand-blue hover:text-brand-blue transition-colors text-lg">(717) 769-5397</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                     style={{ background: 'rgba(0,160,226,0.2)' }}>
                  <i className="fas fa-clock text-brand-blue"></i>
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-wide text-white mb-1">HOURS</h3>
                  <div className="font-body text-slate-400 space-y-1">
                    <p>Mon - Tue: <span className="text-slate-500">Closed</span></p>
                    <p>Wed - Fri: <span className="text-white">4pm - 9pm</span></p>
                    <p>Saturday: <span className="text-white">12pm - 9pm</span></p>
                    <p>Sunday: <span className="text-white">1pm - 6pm</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="https://instagram.com/escapegettysburg" target="_blank" rel="noopener noreferrer"
                 className="w-14 h-14 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                 style={{ background: 'linear-gradient(135deg, #E1306C, #833AB4)' }}>
                <i className="fab fa-instagram text-2xl text-white"></i>
              </a>
              <a href="https://facebook.com/escapegettysburg" target="_blank" rel="noopener noreferrer"
                 className="w-14 h-14 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                 style={{ background: '#1877F2' }}>
                <i className="fab fa-facebook text-2xl text-white"></i>
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden h-80 lg:h-auto"
               style={{ background: 'rgba(15,23,42,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.8!2d-77.2311!3d39.8301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ5JzQ4LjQiTiA3N8KwMTMnNTIuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen="" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10" style={{ background: '#0A0A0B' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="flex items-center">
            <img src={IMAGES.titleLogo} alt="Escape Gettysburg" className="h-10 w-auto" />
          </a>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-ui text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Waivers</a>
            <a href="#" className="hover:text-white transition-colors">FAQ</a>
          </div>

          <p className="font-ui text-sm text-slate-500">
            © 2016-2025 Escape Gettysburg
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main App
function App() {
  return (
    <div className="min-h-screen" style={{ background: '#0A0A0B' }}>
      <Navigation />
      <Hero />
      <RoomCarousel />
      <HowItWorks />
      <WhoIsThisFor />
      <Testimonials />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

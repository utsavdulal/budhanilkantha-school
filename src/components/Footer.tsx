import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-[#111317] text-white pt-12 pb-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. TOP CENTER: SCHOOL LOGO & ADDRESS */}
        <div className="flex flex-col items-center justify-center text-center space-y-3 pb-10">
          <Link to="/" className="flex flex-col items-center group transition-transform hover:scale-105 duration-300">
            {/* Logo Emblem */}
            <img
              src="/images/school-logo.png"
              alt="Budhanilkantha Secondary English School Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-contain shadow-lg mb-2 bg-white p-0.5 border-2 border-amber-400/40"
            />
            <span className="font-headline-sm text-lg sm:text-xl font-bold tracking-tight text-white uppercase font-serif">
              Budhanilkantha
            </span>
            <span className="font-label-caps text-[10px] tracking-[0.2em] text-[#e5a93c] uppercase font-semibold">
              Secondary English School
            </span>
          </Link>

          {/* Centered Address */}
          <p className="text-sm text-gray-300 font-normal tracking-wide">
            Shankarpur, Biratnagar-2, Morang
          </p>
        </div>

        {/* 2. MIDDLE GRID: QUICK LINKS & CONTACT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 py-8 border-t border-white/10 max-w-4xl mx-auto">
          
          {/* Left Column: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base sm:text-lg tracking-wide">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-300">
              <div className="space-y-3 flex flex-col">
                <Link to="/about" className="hover:text-white transition-colors">
                  About
                </Link>
                <Link to="/news-events" className="hover:text-white transition-colors">
                  News And Events
                </Link>
                <Link to="/student-life" className="hover:text-white transition-colors">
                  Student Life
                </Link>
              </div>
              <div className="space-y-3 flex flex-col">
                <Link to="/academics" className="hover:text-white transition-colors">
                  Academics
                </Link>
                <Link to="/facilities" className="hover:text-white transition-colors">
                  Facilities
                </Link>
                <Link to="/admissions" className="hover:text-white transition-colors">
                  Admissions
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base sm:text-lg tracking-wide">
              Contact
            </h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>021-514168 / +977 982-7028947</p>
              <p>info@budhanilkantha.edu.np</p>
            </div>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-block px-6 py-2 border border-white text-white text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-black transition-all duration-300 rounded-sm"
              >
                CONTACT US
              </Link>
            </div>
          </div>

        </div>

        {/* 3. FOLLOW US SOCIALS */}
        <div className="flex items-center justify-center gap-3 pt-8 pb-6 text-sm text-gray-300">
          <span className="font-medium text-gray-400">Connect With Us:</span>
          <div className="flex items-center gap-3 text-white">
            <a
              href="https://www.facebook.com/profile.php?id=61574782987462"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition-all text-white shadow-sm hover:scale-110"
              title="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@budhanilakanthaschool"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF0000] hover:text-white flex items-center justify-center transition-all text-white shadow-sm hover:scale-110"
              title="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://wa.me/9779827028947"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-all text-white shadow-sm hover:scale-110"
              title="WhatsApp: +977 982-7028947"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </a>
          </div>
        </div>

        {/* 4. BOTTOM COPYRIGHT */}
        <div className="pt-6 border-t border-white/10 text-center text-xs text-gray-400">
          <p>© 2026 Budhanilkantha Secondary English School, All Rights Reserved</p>
        </div>

      </div>
    </footer>
  );
}

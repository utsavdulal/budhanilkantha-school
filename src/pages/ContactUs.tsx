import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useData } from '../context/DataContext';

export default function ContactUs() {
  const { addContactMessage } = useData();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    topic: 'Admission Inquiry (PG to Grade 10)',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      alert('Please fill in all required fields (Name, Phone Number, and Message).');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      const generatedTicket = addContactMessage({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        topic: formData.topic,
        message: formData.message,
      });
      setTicketId(generatedTicket);
      setStatus('submitted');
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      topic: 'Admission Inquiry (PG to Grade 10)',
      message: '',
    });
    setStatus('idle');
  };

  return (
    <div className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-tertiary-fixed selection:text-tertiary">
      <Navbar />

      <main className="w-full pt-18 sm:pt-20 bg-surface">
        {/* 1. HERO BANNER */}
        <section className="relative w-full bg-primary-container text-on-primary py-space-3xl md:py-space-4xl overflow-hidden">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 relative z-10">
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-space-sm text-caption mb-space-md text-surface-variant">
              <Link to="/" className="hover:text-tertiary-fixed transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-tertiary-fixed font-semibold">Contact Us</span>
            </div>

            <div className="max-w-4xl space-y-space-md">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-fixed/20 text-tertiary-fixed font-label-caps text-[11px] uppercase tracking-widest font-bold">
                <span className="material-symbols-outlined text-[16px]">support_agent</span>
                <span>We're Here to Help · Admissions &amp; Campus Desk</span>
              </div>
              <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-primary font-normal tracking-tight font-serif">
                Get In Touch with Budhanilkantha.
              </h1>
              <p className="font-body-lead text-body-lead text-surface-variant max-w-3xl leading-relaxed">
                We'd love to hear from you. Whether you have questions regarding admissions from Playgroup through Grade 10, academic curricula, fee structures, bus transportation, or hostel facilities, our administration is ready to assist you.
              </p>
            </div>
          </div>
        </section>

        {/* 2. CONTACT INFORMATION CARDS */}
        <section className="w-full bg-surface-container-lowest border-b border-outline-variant/30 py-space-3xl">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
              {/* Card 1: Visit Us */}
              <div className="p-space-xl rounded-2xl bg-surface-container-low border border-outline-variant/30 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary-container text-tertiary-fixed flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[26px]">location_on</span>
                  </div>
                  <h3 className="font-headline-sm text-lg font-bold text-primary font-serif">Visit Us</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Shankarpur, Biratnagar-2, Morang<br />
                    Koshi Province 56613, Nepal
                  </p>
                </div>
                <div className="pt-space-md border-t border-outline-variant/20 mt-space-md">
                  <a
                    href="https://maps.google.com/?q=Budhanilkantha+Secondary+English+School+Biratnagar"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-primary font-label-caps text-[11px] uppercase tracking-wider font-bold hover:underline"
                  >
                    <span>View on Google Map</span>
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                </div>
              </div>

              {/* Card 2: Call Us */}
              <div className="p-space-xl rounded-2xl bg-surface-container-low border border-outline-variant/30 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary-container text-tertiary-fixed flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[26px]">call</span>
                  </div>
                  <h3 className="font-headline-sm text-lg font-bold text-primary font-serif">Call Us</h3>
                  <div className="space-y-0.5 font-body-sm text-on-surface-variant">
                    <p className="font-bold text-primary text-base">021-514168</p>
                    <p className="text-xs text-secondary">Tel / Admissions Desk</p>
                  </div>
                </div>
                <div className="pt-space-md border-t border-outline-variant/20 mt-space-md">
                  <a
                    href="tel:021514168"
                    className="inline-flex items-center gap-1 text-primary font-label-caps text-[11px] uppercase tracking-wider font-bold hover:underline"
                  >
                    <span>Click to Call</span>
                    <span className="material-symbols-outlined text-[14px]">phone_forwarded</span>
                  </a>
                </div>
              </div>

              {/* Card 3: Email Us */}
              <div className="p-space-xl rounded-2xl bg-surface-container-low border border-outline-variant/30 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary-container text-tertiary-fixed flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[26px]">mail</span>
                  </div>
                  <h3 className="font-headline-sm text-lg font-bold text-primary font-serif">Email Us</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    info@budhanilkantha.edu.np<br />
                    admissions@budhanilkantha.edu.np
                  </p>
                </div>
                <div className="pt-space-md border-t border-outline-variant/20 mt-space-md">
                  <span className="text-caption text-secondary font-medium">Replies within 24 hours</span>
                </div>
              </div>

              {/* Card 4: Office Hours */}
              <div className="p-space-xl rounded-2xl bg-surface-container-low border border-outline-variant/30 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary-container text-tertiary-fixed flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[26px]">schedule</span>
                  </div>
                  <h3 className="font-headline-sm text-lg font-bold text-primary font-serif">Office Hours</h3>
                  <div className="space-y-1 text-caption text-on-surface-variant">
                    <p><strong className="text-primary">Sun – Fri:</strong> 8:30 AM – 4:00 PM</p>
                    <p><strong className="text-primary">Saturday:</strong> 10:00 AM – 1:00 PM</p>
                    <p><strong className="text-secondary">Holidays:</strong> Closed</p>
                  </div>
                </div>
                <div className="pt-space-md border-t border-outline-variant/20 mt-space-md">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1.5 align-middle"></span>
                  <span className="text-[11px] font-bold text-green-700">Open for Inquiries</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. INTERACTIVE CONTACT FORM & GOOGLE MAP SPLIT */}
        <section className="w-full bg-surface py-space-4xl">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-3xl items-start">
              {/* Left Column: Form (7 Cols) */}
              <div className="lg:col-span-7 bg-surface-container-lowest p-space-xl sm:p-space-2xl md:p-space-3xl rounded-2xl border border-outline-variant/40 shadow-sm">
                <div className="space-y-space-xs mb-space-xl">
                  <span className="font-label-caps text-label-caps uppercase tracking-wider text-on-tertiary-container font-semibold block">
                    Online Inquiry Portal
                  </span>
                  <h2 className="font-headline-xl text-headline-xl text-primary font-serif tracking-tight">
                    Send Us a Message
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Fill out the form below and our admissions office will respond to your phone or email as soon as possible.
                  </p>
                </div>

                {/* Submitted Success Banner */}
                {status === 'submitted' ? (
                  <div className="p-space-xl bg-green-50 border border-green-200 rounded-xl space-y-space-md animate-fadeIn">
                    <div className="flex items-start gap-space-md">
                      <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[24px]">check</span>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-headline-sm text-lg font-bold text-green-900">
                          Message Sent Successfully!
                        </h3>
                        <p className="text-body-sm text-green-800">
                          Thank you, <strong>{formData.name}</strong>. Your inquiry has been registered with reference ID:
                        </p>
                        <div className="inline-block px-3 py-1 bg-white border border-green-300 rounded font-mono font-bold text-green-900 text-sm mt-1">
                          {ticketId}
                        </div>
                        <p className="text-caption text-green-700 pt-2">
                          Our administration team will get in touch with you at <strong>{formData.phone}</strong> shortly.
                        </p>
                      </div>
                    </div>
                    <div className="pt-space-sm flex items-center gap-space-md border-t border-green-200">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-space-lg py-2 bg-green-700 hover:bg-green-800 text-white font-label-caps text-[11px] uppercase tracking-wider rounded font-bold transition-all cursor-pointer"
                      >
                        Send Another Message
                      </button>
                      <Link
                        to="/"
                        className="text-caption font-bold text-green-900 hover:underline"
                      >
                        Return to Home &rarr;
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-space-md">
                    {/* Name Field */}
                    <div>
                      <label className="block text-caption font-bold text-primary mb-1.5 uppercase tracking-wider">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar Sharma"
                        className="w-full px-4 py-3 bg-surface border border-outline-variant rounded-lg text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      />
                    </div>

                    {/* 2-Col: Phone & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      <div>
                        <label className="block text-caption font-bold text-primary mb-1.5 uppercase tracking-wider">
                          Phone / Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 98XXXXXXXX or 021-XXXXXX"
                          className="w-full px-4 py-3 bg-surface border border-outline-variant rounded-lg text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-caption font-bold text-primary mb-1.5 uppercase tracking-wider">
                          Email Address <span className="text-secondary font-normal lowercase">(optional)</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. parent@gmail.com"
                          className="w-full px-4 py-3 bg-surface border border-outline-variant rounded-lg text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        />
                      </div>
                    </div>

                    {/* Inquiry Topic Dropdown */}
                    <div>
                      <label className="block text-caption font-bold text-primary mb-1.5 uppercase tracking-wider">
                        Inquiry Topic <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full px-4 py-3 bg-surface border border-outline-variant rounded-lg text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      >
                        <option value="Admission Inquiry (PG to Grade 10)">Admission Inquiry (Playgroup to Grade 10)</option>
                        <option value="Pre-Primary & Kids Entertainment Hall">Pre-Primary &amp; Kids Entertainment Hall</option>
                        <option value="Fee Structure & Scholarships">Fee Structure &amp; Scholarships</option>
                        <option value="Academic Programs & Super Learning">Academic Programs &amp; Super Learning Classes</option>
                        <option value="Science, Robotics & Computer Labs">Science, Robotics &amp; Computer Labs</option>
                        <option value="Transportation / School Bus Routes">Transportation &amp; Bus Routes (Biratnagar)</option>
                        <option value="Other General Question">Other General Inquiry</option>
                      </select>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label className="block text-caption font-bold text-primary mb-1.5 uppercase tracking-wider">
                        Your Message / Questions <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please specify your query or the grade you are applying for..."
                        className="w-full px-4 py-3 bg-surface border border-outline-variant rounded-lg text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-y"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full sm:w-auto inline-flex items-center justify-center px-space-2xl py-3.5 bg-primary-container hover:bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-widest rounded-lg font-bold transition-all shadow-md active:scale-[0.99] cursor-pointer disabled:opacity-60"
                      >
                        {status === 'submitting' ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            <span>Sending Message...</span>
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <span>Send Message</span>
                            <span className="material-symbols-outlined text-[18px]">send</span>
                          </span>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Right Column: Campus Map & Directions (5 Cols) */}
              <div className="lg:col-span-5 space-y-space-xl">
                {/* Map Card */}
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl border border-outline-variant/40 shadow-sm space-y-space-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-headline-sm text-lg font-bold text-primary font-serif">
                        Campus Location Map
                      </h3>
                      <p className="font-caption text-caption text-secondary">
                        Shankarpur, Biratnagar-2 (Google Plus: F7CM+43)
                      </p>
                    </div>
                    <span className="w-8 h-8 rounded-lg bg-primary-container text-tertiary-fixed flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">map</span>
                    </span>
                  </div>

                  {/* Google Maps Iframe */}
                  <div className="w-full h-72 rounded-xl overflow-hidden border border-outline-variant/30 bg-surface-container">
                    <iframe
                      title="Budhanilkantha School Location Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14283.428489709734!2d87.27156545!3d26.4748174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef746654ef244f%3A0xe54d898ef479e095!2sBiratnagar%2C%20Nepal!5e0!3m2!1sen!2snp!4v1709800000000!5m2!1sen!2snp"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                  {/* Directions note */}
                  <div className="p-space-md bg-surface-container-low rounded-xl text-caption text-on-surface-variant space-y-1">
                    <p className="font-bold text-primary">Getting to Campus:</p>
                    <p>Conveniently accessible from Biratnagar Main Road, Tinpaini Chowk, and Kanchanbari with paved school approach roads.</p>
                  </div>
                </div>

                {/* Direct Admissions Hotline Callout */}
                <div className="p-space-xl bg-primary-container text-on-primary rounded-2xl space-y-space-sm shadow-md">
                  <span className="font-label-caps text-[10px] uppercase tracking-widest text-tertiary-fixed font-bold block">
                    Immediate Assistance
                  </span>
                  <h4 className="font-headline-sm text-lg font-bold font-serif text-on-primary">
                    Need Instant Answers for 2081/2082 Admission?
                  </h4>
                  <p className="text-body-sm text-surface-variant leading-relaxed">
                    Speak directly with our Admissions Officer or visit our administrative reception desk during office hours.
                  </p>
                  <div className="pt-2 flex items-center gap-space-md">
                    <a
                      href="tel:021514168"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-tertiary-fixed hover:bg-tertiary-fixed-dim text-primary rounded font-label-caps text-[11px] uppercase tracking-wider font-bold transition-all"
                    >
                      <span className="material-symbols-outlined text-[16px]">call</span>
                      <span>021-514168</span>
                    </a>
                    <Link
                      to="/admissions"
                      className="text-caption font-bold text-tertiary-fixed hover:underline"
                    >
                      Admissions Portal &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

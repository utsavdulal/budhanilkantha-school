import React, { createContext, useContext, useState, useEffect } from 'react';

export interface GalleryItem {
  id: string;
  category: string;
  title: string;
  tag: string;
  description: string;
  image: string;
  images?: string[];
  mediaType?: 'photo' | 'video';
  videoUrl?: string;
  date?: string;
}

export interface FacilityItem {
  id: string;
  category: string;
  title: string;
  tag: string;
  description: string;
  image: string;
  images?: string[];
  date?: string;
}

export interface NewsArticle {
  id: string;
  category: string;
  title: string;
  date: string;
  tag: string;
  summary: string;
  image: string;
  badge: string;
}

export interface AdmissionInquiry {
  id: string;
  parentName: string;
  studentName?: string;
  grade: string;
  phone: string;
  email?: string;
  date: string;
  status: 'New' | 'Contacted' | 'Interview Scheduled' | 'Enrolled' | 'Archived';
  notes?: string;
}

export interface ContactMessage {
  id: string;
  ticketId: string;
  name: string;
  phone: string;
  email?: string;
  topic: string;
  message: string;
  date: string;
  status: 'Unread' | 'Read' | 'Replied' | 'Archived';
}

interface DataContextType {
  gallery: GalleryItem[];
  facilities: FacilityItem[];
  news: NewsArticle[];
  inquiries: AdmissionInquiry[];
  messages: ContactMessage[];
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => void;
  updateGalleryItem: (id: string, item: Partial<Omit<GalleryItem, 'id'>>) => void;
  deleteGalleryItem: (id: string) => void;
  addFacilityItem: (item: Omit<FacilityItem, 'id'>) => void;
  updateFacilityItem: (id: string, item: Partial<Omit<FacilityItem, 'id'>>) => void;
  deleteFacilityItem: (id: string) => void;
  addNewsArticle: (item: Omit<NewsArticle, 'id'>) => void;
  updateNewsArticle: (id: string, item: Partial<Omit<NewsArticle, 'id'>>) => void;
  deleteNewsArticle: (id: string) => void;
  addAdmissionInquiry: (inquiry: Omit<AdmissionInquiry, 'id' | 'date' | 'status'>) => string;
  updateInquiryStatus: (id: string, status: AdmissionInquiry['status'], notes?: string) => void;
  deleteInquiry: (id: string) => void;
  addContactMessage: (msg: Omit<ContactMessage, 'id' | 'ticketId' | 'date' | 'status'>) => string;
  updateMessageStatus: (id: string, status: ContactMessage['status']) => void;
  deleteMessage: (id: string) => void;
  resetToDefaults: () => void;
}

const defaultGallery: GalleryItem[] = [
  {
    id: 'cricket-action',
    category: 'sports',
    title: 'Cricket Academy Training & Match Practice',
    tag: 'Cricket & Sports',
    description: 'Professional batting, bowling, and tactical match simulation supervised by ICC Panel Umpire Mr. Buddhi Bahadur Pradhan.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn9o590rqwV1vZb79r7KVPGsFafoVhc85XukfuZz-gq-gnbxgLevfcY-FqOhnPrjJOPh_h85oP2I3HEcDby_GfCJFuAcZ0vDqmXnXy9i7smAj9drvbSgj6_WwgGs8kH8Ieq6sUS_rbBW7tXVtf7KOFj72p2TJnUIWr47HdBx4Ql6PkPSGyL7p2PjImXwFixt5e3KEgoljhEnMDWDgCggUP9PBrZuTXrpXX2TqqK3x2KS7ovBGTjoaUPw',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCn9o590rqwV1vZb79r7KVPGsFafoVhc85XukfuZz-gq-gnbxgLevfcY-FqOhnPrjJOPh_h85oP2I3HEcDby_GfCJFuAcZ0vDqmXnXy9i7smAj9drvbSgj6_WwgGs8kH8Ieq6sUS_rbBW7tXVtf7KOFj72p2TJnUIWr47HdBx4Ql6PkPSGyL7p2PjImXwFixt5e3KEgoljhEnMDWDgCggUP9PBrZuTXrpXX2TqqK3x2KS7ovBGTjoaUPw',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ3yN9KLUMMRZpDlVtrJekOJJ6g2LiEKbXkxvLFSfaumNdUgB8qaaO3BKS-GtgCNmyooK-0kD0cqqJY6efqZjJJmc6QTWq-dyJZXfdBgaMGnpZivJMS43eC7sNMOiPusfBaERMFSw3P6UAsKUV1BRUAuZmW5u5hk-RKY1NGnEvbsC7bu6lr7l65pUKflrWkT0psjMeYIGA2yzx-K2mvfH7T1OMEquWHymMDO19vttF1guenmapjGyXeQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDhtaQm9RjcMIrDTqwwK3wz7gUj5kRRcHcHJ3XURwIxs1Jtke0THJEkAbVo4jyxIU4cQTG33NPZAtKumaPzowb0drxU7gFfFiO28agmGcfTTJP2NaJLUE1PRIg_3hd6gSXhySQ3QUj9viXGeHJKFrkWkPSeXTq4pLift5DOGAkou75g4LR4RXlX-LDKWffkzFzfT10S3Jo5tebJRnS7PztdOWTiUH_78XwAEvCX7dFmWflqIRH2QTkDyQ',
    ],
    date: 'Biratnagar Sports League',
    mediaType: 'photo',
  },
  {
    id: 'robotics-hands-on',
    category: 'stem',
    title: 'Robotics & Hardware Prototype Assembly',
    tag: 'STEM & Robotics',
    description: 'Secondary division innovators engineering micro-controller rovers and autonomous obstacle sensors.',
    image: '/images/robotics-lab.jpg',
    images: [
      '/images/robotics-lab.jpg',
      '/images/why-future-ready.jpg',
    ],
    date: 'Science & Innovation Lab',
    mediaType: 'photo',
  },
  {
    id: 'school-students-group',
    category: 'community',
    title: 'Budhanilkantha Senior Scholars & Campus Quad',
    tag: 'Campus Community',
    description: 'Senior students gathering before academic seminars at the Shankarpur school campus.',
    image: '/images/enrollment-students.jpg',
    images: [
      '/images/enrollment-students.jpg',
      '/images/why-community.jpg',
    ],
    date: 'Estd. 2040 B.S. Heritage',
    mediaType: 'photo',
  },
  {
    id: 'house-cheer',
    category: 'community',
    title: 'Annual Sports Day & House Championship Trophy',
    tag: 'House System',
    description: 'Passionate student cheering, inter-house track events, and championship celebrations on the school grounds.',
    image: '/images/why-community.jpg',
    images: [
      '/images/why-community.jpg',
      '/images/why-opportunities.jpg',
    ],
    date: 'Inter-House Sports Meet',
    mediaType: 'photo',
  },
  {
    id: 'stem-coding',
    category: 'stem',
    title: 'Coding, Algorithms & Micro-controller Labs',
    tag: 'STEM & Robotics',
    description: 'Collaborative software programming, electronics breadboards, and circuit simulations.',
    image: '/images/why-future-ready.jpg',
    images: [
      '/images/why-future-ready.jpg',
      '/images/robotics-lab.jpg',
    ],
    date: 'Computer Technology Lab',
    mediaType: 'photo',
  },
  {
    id: 'debate-elocution',
    category: 'arts',
    title: 'Oratory, Parliamentary Debate & Elocution',
    tag: 'Oratory & Arts',
    description: 'Developing eloquence, articulate reasoning, and poise on stage during regional inter-school debate tournaments.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4Bm1jNTzVp1M8Dfg9ruxXyiVklBGvIOgfQ1ylKJrjYUGB5Ouite-NCua_gXHzxZANxVX_H1nGBkPukOCJU4dpBbnLbjrx4DoOh6PCRlKVnZ5XtsWOi15OprWngp4f6Jgxbc6Y1fjnHF0JFQ8gaC-CgV9WoLoQ7AgBZfECegi3x84GKXdfphV2E6jN8gLUUCR6c38YYGh7UHQHUDrgl_gjOpoGzYC1kwiZSI2Pn4mwBOqIQEtBUoKUhQ',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4Bm1jNTzVp1M8Dfg9ruxXyiVklBGvIOgfQ1ylKJrjYUGB5Ouite-NCua_gXHzxZANxVX_H1nGBkPukOCJU4dpBbnLbjrx4DoOh6PCRlKVnZ5XtsWOi15OprWngp4f6Jgxbc6Y1fjnHF0JFQ8gaC-CgV9WoLoQ7AgBZfECegi3x84GKXdfphV2E6jN8gLUUCR6c38YYGh7UHQHUDrgl_gjOpoGzYC1kwiZSI2Pn4mwBOqIQEtBUoKUhQ',
    ],
    date: 'Koshi Province Debate Meet',
    mediaType: 'photo',
  },
  {
    id: 'elementary-care',
    category: 'community',
    title: 'Early Childhood Discovery & Creative Learning',
    tag: 'Friendly Environment',
    description: 'Joyful, collaborative classroom learning fostering empathy, motor skills, and imagination.',
    image: '/images/why-friendly-env.jpg',
    images: [
      '/images/why-friendly-env.jpg',
    ],
    date: 'Primary Learning Wing',
    mediaType: 'photo',
  },
  {
    id: 'taekwondo-grading',
    category: 'sports',
    title: 'Taekwondo Martial Arts & Belt Grading',
    tag: 'Martial Arts',
    description: 'Physical agility, mental fortitude, self-defense conditioning, and belt gradings under certified black-belt instructors.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ3yN9KLUMMRZpDlVtrJekOJJ6g2LiEKbXkxvLFSfaumNdUgB8qaaO3BKS-GtgCNmyooK-0kD0cqqJY6efqZjJJmc6QTWq-dyJZXfdBgaMGnpZivJMS43eC7sNMOiPusfBaERMFSw3P6UAsKUV1BRUAuZmW5u5hk-RKY1NGnEvbsC7bu6lr7l65pUKflrWkT0psjMeYIGA2yzx-K2mvfH7T1OMEquWHymMDO19vttF1guenmapjGyXeQ',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ3yN9KLUMMRZpDlVtrJekOJJ6g2LiEKbXkxvLFSfaumNdUgB8qaaO3BKS-GtgCNmyooK-0kD0cqqJY6efqZjJJmc6QTWq-dyJZXfdBgaMGnpZivJMS43eC7sNMOiPusfBaERMFSw3P6UAsKUV1BRUAuZmW5u5hk-RKY1NGnEvbsC7bu6lr7l65pUKflrWkT0psjMeYIGA2yzx-K2mvfH7T1OMEquWHymMDO19vttF1guenmapjGyXeQ',
    ],
    date: 'Dojang & Fitness Hall',
    mediaType: 'photo',
  },
  {
    id: 'cricket-champions-cup',
    category: 'sports',
    title: 'Championship Trophy Celebration',
    tag: 'Cricket & Athletics',
    description: 'The school cricket team proudly hoisting the inter-school championship trophy in Biratnagar.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhtaQm9RjcMIrDTqwwK3wz7gUj5kRRcHcHJ3XURwIxs1Jtke0THJEkAbVo4jyxIU4cQTG33NPZAtKumaPzowb0drxU7gFfFiO28agmGcfTTJP2NaJLUE1PRIg_3hd6gSXhySQ3QUj9viXGeHJKFrkWkPSeXTq4pLift5DOGAkou75g4LR4RXlX-LDKWffkzFzfT10S3Jo5tebJRnS7PztdOWTiUH_78XwAEvCX7dFmWflqIRH2QTkDyQ',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDhtaQm9RjcMIrDTqwwK3wz7gUj5kRRcHcHJ3XURwIxs1Jtke0THJEkAbVo4jyxIU4cQTG33NPZAtKumaPzowb0drxU7gFfFiO28agmGcfTTJP2NaJLUE1PRIg_3hd6gSXhySQ3QUj9viXGeHJKFrkWkPSeXTq4pLift5DOGAkou75g4LR4RXlX-LDKWffkzFzfT10S3Jo5tebJRnS7PztdOWTiUH_78XwAEvCX7dFmWflqIRH2QTkDyQ',
    ],
    date: 'Biratnagar Interschool Finals',
    mediaType: 'photo',
  },
];

const defaultNews: NewsArticle[] = [
  {
    id: 'robotics-victory',
    category: 'stem',
    title: 'Budhanilkantha Scholars Triumph at Regional Robotics & Science Exhibition',
    date: 'Chaitra 18, 2080',
    tag: 'STEM & Robotics',
    summary:
      'Secondary division students demonstrated self-engineered automated microcontroller prototypes and obstacle-avoiding rovers, securing first position among prestigious schools across Morang district.',
    image: '/images/robotics-lab.jpg',
    badge: 'District Award',
  },
  {
    id: 'cricket-championship',
    category: 'sports',
    title: 'Budhanilkantha Cricket Squad Clinches Biratnagar Interschool Trophy',
    date: 'Falgun 24, 2080',
    tag: 'Cricket & Athletics',
    summary:
      'Trained under the mentorship of ICC Panel Umpire Mr. Buddhi Bahadur Pradhan, the school cricket team demonstrated remarkable tactical composure and won the inter-school championship final.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDhtaQm9RjcMIrDTqwwK3wz7gUj5kRRcHcHJ3XURwIxs1Jtke0THJEkAbVo4jyxIU4cQTG33NPZAtKumaPzowb0drxU7gFfFiO28agmGcfTTJP2NaJLUE1PRIg_3hd6gSXhySQ3QUj9viXGeHJKFrkWkPSeXTq4pLift5DOGAkou75g4LR4RXlX-LDKWffkzFzfT10S3Jo5tebJRnS7PztdOWTiUH_78XwAEvCX7dFmWflqIRH2QTkDyQ',
    badge: 'Champions',
  },
  {
    id: 'admissions-2081',
    category: 'notices',
    title: 'Admissions Open for Academic Session 2081/2082 (PG to Grade 10)',
    date: 'Baisakh 02, 2081',
    tag: 'Admissions Desk',
    summary:
      'Enrollment is officially open for Playgroup through Grade 10. Parents are welcome to visit our Shankarpur campus, complete on-spot evaluations, and secure hostel and daycare seats.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDnQImTrIvCG4YFiP07GpIbYMm0ZsX5uBo8DoLCPu_aWJjHUMChlO9q67ObAyK4BGEbxuj4qSuK-zeSnjJ6rrwxka3aJ5mjqz_NtWyoWvqIvoDSc_vIhAb8kVT0j7T6u7WRXkCqoxYeuzstxUQaHg05muz1_AO6a-OI9f8yXb3oUFPrjc8Bj6wy6Q-tjuApwi07Cl74z9HfBVsrX0h0sybnsqDmcosoSC9qogrb__CYqpy4xsm80xekcg',
    badge: 'Official Notice',
  },
  {
    id: 'see-model-exams',
    category: 'academic',
    title: 'SEE Board Distinction & Intensive Pre-Board Model Exam Schedule',
    date: 'Poush 15, 2080',
    tag: 'Academic Board',
    summary:
      'Detailed terminal assessment series and subject-wise remedial clinics launched for Grade 10 students preparing for the National Secondary Education Examination (SEE).',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4Bm1jNTzVp1M8Dfg9ruxXyiVklBGvIOgfQ1ylKJrjYUGB5Ouite-NCua_gXHzxZANxVX_H1nGBkPukOCJU4dpBbnLbjrx4DoOh6PCRlKVnZ5XtsWOi15OprWngp4f6Jgxbc6Y1fjnHF0JFQ8gaC-CgV9WoLoQ7AgBZfECegi3x84GKXdfphV2E6jN8gLUUCR6c38YYGh7UHQHUDrgl_gjOpoGzYC1kwiZSI2Pn4mwBOqIQEtBUoKUhQ',
    badge: 'Academic Notice',
  },
  {
    id: 'parent-conference',
    category: 'notices',
    title: 'Annual Parents-Teachers Association & Student Showcase in 250-Seat Hall',
    date: 'Mangsir 28, 2080',
    tag: 'School Community',
    summary:
      'A comprehensive dialogue between parents, faculty, and school leadership celebrating student achievements across academics, fine arts, sports, and behavioral character formation.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDJafTI1h_wxcTGMbWoqykqDwyaRJ3gcD1prgRqxuImLKmo6LmI13lt8FatGr_V61Ho5p1aQKNJoR0PPtMqM4dcBwBbmMBL5Z7ONgQS0im28JNR4EGF6nyo6KuU2z0lzV0OmEtlUITifBB6NrwOCHAzw5meNLN-JCGgCdWlOe5Ot9D2dNeX8Qj8iPpLM5mWDIKWaL3_Kk7KQpH0Fvke2macC7SkZNSD9IoTrRQV2alegivSIINYkLpFyw',
    badge: 'Community',
  },
];

const defaultInquiries: AdmissionInquiry[] = [
  {
    id: 'inq-101',
    parentName: 'Gopal Krishna Adhikari',
    studentName: 'Aayush Adhikari',
    grade: 'Grade 8',
    phone: '9842055678',
    email: 'gopal.adhikari@gmail.com',
    date: '2081-01-14 10:30 AM',
    status: 'New',
    notes: 'Inquired about Computer Science lab & school bus from Kanchanbari.',
  },
  {
    id: 'inq-102',
    parentName: 'Sunita Shrestha',
    studentName: 'Priya Shrestha',
    grade: 'Playgroup (PG)',
    phone: '9804011234',
    email: 'sunita.shrestha@hotmail.com',
    date: '2081-01-12 02:15 PM',
    status: 'Contacted',
    notes: 'Interested in Kids Entertainment Hall & half-day daycare program.',
  },
  {
    id: 'inq-103',
    parentName: 'Dr. Binod Kumar Mandal',
    studentName: 'Samir Mandal',
    grade: 'Grade 10 (SEE)',
    phone: '9852024567',
    email: 'binod.mandal@yahoo.com',
    date: '2081-01-10 11:00 AM',
    status: 'Interview Scheduled',
    notes: 'Transfer from Kathmandu. Scheduled entrance evaluation this Friday.',
  },
];

const defaultFacilities: FacilityItem[] = [
  {
    id: 'fac-grounds',
    category: 'sports',
    title: 'The Main Academic Grounds & Cricket Turf',
    tag: 'Athletics & Assemblies',
    description: 'Hosting daily morning assemblies, inter-house sports meets, and cricket training under ICC Panel Umpire Mr. Buddhi Bahadur Pradhan.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn9o590rqwV1vZb79r7KVPGsFafoVhc85XukfuZz-gq-gnbxgLevfcY-FqOhnPrjJOPh_h85oP2I3HEcDby_GfCJFuAcZ0vDqmXnXy9i7smAj9drvbSgj6_WwgGs8kH8Ieq6sUS_rbBW7tXVtf7KOFj72p2TJnUIWr47HdBx4Ql6PkPSGyL7p2PjImXwFixt5e3KEgoljhEnMDWDgCggUP9PBrZuTXrpXX2TqqK3x2KS7ovBGTjoaUPw',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCn9o590rqwV1vZb79r7KVPGsFafoVhc85XukfuZz-gq-gnbxgLevfcY-FqOhnPrjJOPh_h85oP2I3HEcDby_GfCJFuAcZ0vDqmXnXy9i7smAj9drvbSgj6_WwgGs8kH8Ieq6sUS_rbBW7tXVtf7KOFj72p2TJnUIWr47HdBx4Ql6PkPSGyL7p2PjImXwFixt5e3KEgoljhEnMDWDgCggUP9PBrZuTXrpXX2TqqK3x2KS7ovBGTjoaUPw'
    ],
    date: 'Campus Grounds'
  },
  {
    id: 'fac-auditorium',
    category: 'auditorium',
    title: '250-Seat Conference Hall',
    tag: 'Academic Events',
    description: 'Equipped with high-definition projection, surround sound, and power backup for seminars and cultural programs.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJafTI1h_wxcTGMbWoqykqDwyaRJ3gcD1prgRqxuImLKmo6LmI13lt8FatGr_V61Ho5p1aQKNJoR0PPtMqM4dcBwBbmMBL5Z7ONgQS0im28JNR4EGF6nyo6KuU2z0lzV0OmEtlUITifBB6NrwOCHAzw5meNLN-JCGgCdWlOe5Ot9D2dNeX8Qj8iPpLM5mWDIKWaL3_Kk7KQpH0Fvke2macC7SkZNSD9IoTrRQV2alegivSIINYkLpFyw',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDJafTI1h_wxcTGMbWoqykqDwyaRJ3gcD1prgRqxuImLKmo6LmI13lt8FatGr_V61Ho5p1aQKNJoR0PPtMqM4dcBwBbmMBL5Z7ONgQS0im28JNR4EGF6nyo6KuU2z0lzV0OmEtlUITifBB6NrwOCHAzw5meNLN-JCGgCdWlOe5Ot9D2dNeX8Qj8iPpLM5mWDIKWaL3_Kk7KQpH0Fvke2macC7SkZNSD9IoTrRQV2alegivSIINYkLpFyw'
    ],
    date: 'Conference Wing'
  },
  {
    id: 'fac-preprimary',
    category: 'preprimary',
    title: "Kids' Entertainment Hall",
    tag: 'Pre-Primary',
    description: 'Bright colorful early childhood playgroup classroom with educational games and interactive learning screens.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAK0zp2C1S9Em97K8YCxklerWYzmvk9Ci8W1QI4u-0rUxdvQ0rRQt1Z4WsTr1kpJiKFZ5Uv5tBahXHE1kGFmPbYuyIEBiYFDiu2cA6iZ2SA7V-YRbIIHdfPahf_I04d286E2fFYe9b_wtT94WoV5HpmtU_My4nT-hFFMrk8gdXuSAsBJdYcGKK2cJqo9y8euLPbGLtQeUaVaxDsVkxP6-8qbV2ZdBGgGAgLkmGSog9D02KcPIIsaDzLYg',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAK0zp2C1S9Em97K8YCxklerWYzmvk9Ci8W1QI4u-0rUxdvQ0rRQt1Z4WsTr1kpJiKFZ5Uv5tBahXHE1kGFmPbYuyIEBiYFDiu2cA6iZ2SA7V-YRbIIHdfPahf_I04d286E2fFYe9b_wtT94WoV5HpmtU_My4nT-hFFMrk8gdXuSAsBJdYcGKK2cJqo9y8euLPbGLtQeUaVaxDsVkxP6-8qbV2ZdBGgGAgLkmGSog9D02KcPIIsaDzLYg'
    ],
    date: 'Junior Wing'
  },
  {
    id: 'fac-stem',
    category: 'labs',
    title: 'Computer & Robotics Lab',
    tag: 'Technology & STEM',
    description: 'High-speed computer workstations and practical microcontroller robotics engineering facilities.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOOnX_orATVmXQwbOco-ogbBxGQfqxh7smQo6Nq9tDBemSkRPgVQdsAwsjmydsOKBkiKvKk1tg8CZt9ZE8ZW6hl1ytDPVxGTEYHlplm0c6zuVEU_uoNbejWHo_mXriKhJ1rfl1u1VTE8TyJexcnbpcqfvmOsh4ZN_bqN65iY_PQA-5mmIsaXvVopyM3hZiNSawAxtKTdYfBVVw89IIvV2sD_fKUiXiBERpCcIEw9DQuoBVVMyZmry-8g',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBOOnX_orATVmXQwbOco-ogbBxGQfqxh7smQo6Nq9tDBemSkRPgVQdsAwsjmydsOKBkiKvKk1tg8CZt9ZE8ZW6hl1ytDPVxGTEYHlplm0c6zuVEU_uoNbejWHo_mXriKhJ1rfl1u1VTE8TyJexcnbpcqfvmOsh4ZN_bqN65iY_PQA-5mmIsaXvVopyM3hZiNSawAxtKTdYfBVVw89IIvV2sD_fKUiXiBERpCcIEw9DQuoBVVMyZmry-8g'
    ],
    date: 'Innovation Center'
  },
  {
    id: 'fac-hostel',
    category: 'hostel',
    title: 'Hostel & Dining Hall',
    tag: 'Residential Facility',
    description: 'Comfortable, secure, and hygienic boarding environment with nutritious meal services and 24/7 supervision.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvgdYKp94u7wiW_Rj92sSyqQ9KLugssbruvUKojY2o5sXOWSPMwC3xbAwIsMBDo2jKQ0p5IKVudv8sQMmLUXbp3mwbr43iIqcC0b111TN6rqCpxZdlU8SQOrGS29LZgPhspzHHHbMzu58pVg6b5Do4XQarPVLXlt3GAQoCNBTvr2i8y0VzKDlJJ30qViwUCwmY0mTubUDRIJirdZbiZNeLZ3GBpAiey0yftVhVrkQH0y7j736vn3Mg6Q',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDvgdYKp94u7wiW_Rj92sSyqQ9KLugssbruvUKojY2o5sXOWSPMwC3xbAwIsMBDo2jKQ0p5IKVudv8sQMmLUXbp3mwbr43iIqcC0b111TN6rqCpxZdlU8SQOrGS29LZgPhspzHHHbMzu58pVg6b5Do4XQarPVLXlt3GAQoCNBTvr2i8y0VzKDlJJ30qViwUCwmY0mTubUDRIJirdZbiZNeLZ3GBpAiey0yftVhVrkQH0y7j736vn3Mg6Q'
    ],
    date: 'Boarding Wing'
  }
];

const defaultMessages: ContactMessage[] = [
  {
    id: 'msg-101',
    ticketId: 'BKS-582910',
    name: 'Anita Dahal',
    phone: '9819033456',
    email: 'anita.dahal@gmail.com',
    topic: 'Fee Structure & Scholarships',
    message: 'Hello, could you please provide details about merit scholarships for Grade 9 students who scored A+ in Grade 8?',
    date: '2081-01-15 09:45 AM',
    status: 'Unread',
  },
  {
    id: 'msg-102',
    ticketId: 'BKS-439012',
    name: 'Rajesh Karki',
    phone: '9842188765',
    email: 'karki.rajesh@outlook.com',
    topic: 'Transportation & Bus Routes',
    message: 'We live near Roadways / Tinpaini Chowk. What are the morning pickup timings for Pre-Primary students?',
    date: '2081-01-13 04:20 PM',
    status: 'Read',
  },
];

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [gallery, setGallery] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem('bks_gallery');
    return saved ? JSON.parse(saved) : defaultGallery;
  });

  const [facilities, setFacilities] = useState<FacilityItem[]>(() => {
    const saved = localStorage.getItem('bks_facilities');
    return saved ? JSON.parse(saved) : defaultFacilities;
  });

  const [news, setNews] = useState<NewsArticle[]>(() => {
    const saved = localStorage.getItem('bks_news');
    return saved ? JSON.parse(saved) : defaultNews;
  });

  const [inquiries, setInquiries] = useState<AdmissionInquiry[]>(() => {
    const saved = localStorage.getItem('bks_inquiries');
    return saved ? JSON.parse(saved) : defaultInquiries;
  });

  const [messages, setMessages] = useState<ContactMessage[]>(() => {
    const saved = localStorage.getItem('bks_messages');
    return saved ? JSON.parse(saved) : defaultMessages;
  });

  useEffect(() => {
    localStorage.setItem('bks_gallery', JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem('bks_facilities', JSON.stringify(facilities));
  }, [facilities]);

  useEffect(() => {
    localStorage.setItem('bks_news', JSON.stringify(news));
  }, [news]);

  useEffect(() => {
    localStorage.setItem('bks_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  useEffect(() => {
    localStorage.setItem('bks_messages', JSON.stringify(messages));
  }, [messages]);

  const addGalleryItem = (item: Omit<GalleryItem, 'id'>) => {
    const newItem: GalleryItem = {
      ...item,
      id: 'gallery-' + Date.now(),
    };
    setGallery((prev) => [newItem, ...prev]);
  };

  const updateGalleryItem = (id: string, updated: Partial<Omit<GalleryItem, 'id'>>) => {
    setGallery((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
  };

  const deleteGalleryItem = (id: string) => {
    setGallery((prev) => prev.filter((item) => item.id !== id));
  };

  const addFacilityItem = (item: Omit<FacilityItem, 'id'>) => {
    const newItem: FacilityItem = {
      ...item,
      id: 'fac-' + Date.now(),
    };
    setFacilities((prev) => [newItem, ...prev]);
  };

  const updateFacilityItem = (id: string, updated: Partial<Omit<FacilityItem, 'id'>>) => {
    setFacilities((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
  };

  const deleteFacilityItem = (id: string) => {
    setFacilities((prev) => prev.filter((item) => item.id !== id));
  };

  const addNewsArticle = (item: Omit<NewsArticle, 'id'>) => {
    const newItem: NewsArticle = {
      ...item,
      id: 'news-' + Date.now(),
    };
    setNews((prev) => [newItem, ...prev]);
  };

  const updateNewsArticle = (id: string, updated: Partial<Omit<NewsArticle, 'id'>>) => {
    setNews((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
  };

  const deleteNewsArticle = (id: string) => {
    setNews((prev) => prev.filter((item) => item.id !== id));
  };

  const addAdmissionInquiry = (inquiry: Omit<AdmissionInquiry, 'id' | 'date' | 'status'>) => {
    const id = 'inq-' + Date.now();
    const newInquiry: AdmissionInquiry = {
      ...inquiry,
      id,
      date: new Date().toLocaleString(),
      status: 'New',
    };
    setInquiries((prev) => [newInquiry, ...prev]);
    return id;
  };

  const updateInquiryStatus = (id: string, status: AdmissionInquiry['status'], notes?: string) => {
    setInquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status, ...(notes ? { notes } : {}) } : item))
    );
  };

  const deleteInquiry = (id: string) => {
    setInquiries((prev) => prev.filter((item) => item.id !== id));
  };

  const addContactMessage = (msg: Omit<ContactMessage, 'id' | 'ticketId' | 'date' | 'status'>) => {
    const ticketId = 'BKS-' + Math.floor(100000 + Math.random() * 900000);
    const newMessage: ContactMessage = {
      ...msg,
      id: 'msg-' + Date.now(),
      ticketId,
      date: new Date().toLocaleString(),
      status: 'Unread',
    };
    setMessages((prev) => [newMessage, ...prev]);
    return ticketId;
  };

  const updateMessageStatus = (id: string, status: ContactMessage['status']) => {
    setMessages((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );
  };

  const deleteMessage = (id: string) => {
    setMessages((prev) => prev.filter((item) => item.id !== id));
  };

  const resetToDefaults = () => {
    setGallery(defaultGallery);
    setFacilities(defaultFacilities);
    setNews(defaultNews);
    setInquiries(defaultInquiries);
    setMessages(defaultMessages);
    localStorage.removeItem('bks_gallery');
    localStorage.removeItem('bks_facilities');
    localStorage.removeItem('bks_news');
    localStorage.removeItem('bks_inquiries');
    localStorage.removeItem('bks_messages');
  };

  return (
    <DataContext.Provider
      value={{
        gallery,
        facilities,
        news,
        inquiries,
        messages,
        addGalleryItem,
        updateGalleryItem,
        deleteGalleryItem,
        addFacilityItem,
        updateFacilityItem,
        deleteFacilityItem,
        addNewsArticle,
        updateNewsArticle,
        deleteNewsArticle,
        addAdmissionInquiry,
        updateInquiryStatus,
        deleteInquiry,
        addContactMessage,
        updateMessageStatus,
        deleteMessage,
        resetToDefaults,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

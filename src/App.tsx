import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToHash from './components/ScrollToHash';
import StJudeHome from './pages/StJudeHome';
import StJudeAbout from './pages/StJudeAbout';
import StJudeAcademics from './pages/StJudeAcademics';
import StJudeAdmissions from './pages/StJudeAdmissions';
import StJudeFacilities from './pages/StJudeFacilities';
import StJudeStudentLife from './pages/StJudeStudentLife';
import StJudeNewsEvents from './pages/StJudeNewsEvents';
import PrePrimaryAcademics from './pages/PrePrimaryAcademics';
import PrimaryAcademics from './pages/PrimaryAcademics';
import SecondaryAcademics from './pages/SecondaryAcademics';
import ContactUs from './pages/ContactUs';
import BudhanilkanthaHome from './pages/BudhanilkanthaHome';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminLogin from './pages/admin/AdminLogin';
import { DataProvider } from './context/DataContext';

export default function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<StJudeHome />} />
          <Route path="/about" element={<StJudeAbout />} />
          <Route path="/academics" element={<PrePrimaryAcademics />} />
          <Route path="/academics/pre-primary" element={<PrePrimaryAcademics />} />
          <Route path="/academics/kids-school" element={<PrePrimaryAcademics />} />
          <Route path="/academics/primary" element={<PrimaryAcademics />} />
          <Route path="/academics/middle-school" element={<PrimaryAcademics />} />
          <Route path="/academics/secondary" element={<SecondaryAcademics />} />
          <Route path="/academics/high-school" element={<SecondaryAcademics />} />
          <Route path="/academics/all" element={<StJudeAcademics />} />
          <Route path="/admissions" element={<StJudeAdmissions />} />
          <Route path="/facilities" element={<StJudeFacilities />} />
          <Route path="/student-life" element={<StJudeStudentLife />} />
          <Route path="/news-events" element={<StJudeNewsEvents />} />
          <Route path="/news-and-events" element={<StJudeNewsEvents />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/variant-2" element={<BudhanilkanthaHome />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

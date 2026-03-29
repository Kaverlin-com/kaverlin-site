import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import EnquiryForm from './components/EnquiryForm';
import Booking from './components/Booking';

export default function App() {
  return (
    <div className="bg-[#f8f3ed] text-[#2b241f]">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <EnquiryForm />
        <Booking />
      </main>
    </div>
  );
}

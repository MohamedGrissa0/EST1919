import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaTwitch, FaXTwitter, FaWhatsapp } from 'react-icons/fa6';
import { SiBereal } from 'react-icons/si';
import tarajilogo from '../assets/taraji.png';

const FooterColumn = ({ title, items }: { title: string; items: string[] }) => (
  <div className="mb-6 sm:mb-0">
    <h4 className="text-white font-bold uppercase text-sm mb-3">{title}</h4>
    <ul className="space-y-2 text-sm text-white/80">
      {items.map((item, i) => (
        <li key={i} className="hover:text-white cursor-pointer">{item}</li>
      ))}
    </ul>
  </div>
);

export default function PsgFooter() {
  return (
    <footer className="bg-[#0c1324] text-white px-6 sm:px-10 py-12 border-t-2 ">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-5 gap-8">
        <FooterColumn
          title="Espérance sportive de Tunis"
          items={[
            'First team',
            'Women',
            'Handball',
            'TARAJI TV',
            'Club',
            'Sponsors',
            "Ligue 1 McDonald's",
          ]}
        />
        <FooterColumn
          title="Services"
          items={[
            'My account',
            'Tickets',
            'Shop',
            'MyParis',
            'Stadium Tour',
          ]}
        />
        <FooterColumn
          title="Languages"
          items={[
            'Français',
            'English',
            'Português',
            'Español',
            'العربية',
            'Bahasa Indonesia',
            '中文',
            '日本語',
          ]}
        />
        <FooterColumn
          title="Help"
          items={[
            'Legal notice',
            'Privacy policy',
            'Terms and conditions',
            'Cookies preferences',
            'Help center',
          ]}
        />
        <div>
          <h4 className="text-white font-bold uppercase text-sm mb-3">Join us</h4>
          <div className="flex flex-wrap gap-4 text-xl text-white">
            <FaFacebookF />
            <FaInstagram />
            <FaXTwitter />
            <FaYoutube />
            <FaTiktok />
            <FaWhatsapp />
            <FaTwitch />
            <SiBereal />
          </div>
          <div className="mt-6">
            <img src={tarajilogo} alt="PSG Logo" className="w-16" />
          </div>
        </div>
      </div>
    </footer>
  );
}

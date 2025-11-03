import { FaFacebookF, FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 p-8 text-white text-end ">
      <div className="">
        <h3 className="text-xl font-bold">TEAMPLATE Sole Co., Ltd</h3>
        <p className="text-sm">ICT Center, Saysetta, Vietiane, Laos</p>
        <p className="text-sm">2025 All Rights Reserved.</p>
        <div className="flex flex-row gap-4 pt-4">
          <a className="" href="https://facebook.com">
            <FaFacebookF />
          </a>
          <a className="" href="https://WhatsApp.com">
            <FaWhatsapp />
          </a>
          <a className="" href="https://Instagram.com">
            <FaInstagram />
          </a>
          <a className="" href="https://Tiktok.com">
            <FaTiktok />
          </a>
        </div>
      </div>
    </footer>
  );
}

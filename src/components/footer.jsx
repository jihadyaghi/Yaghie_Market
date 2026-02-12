import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaEnvelope } from "react-icons/fa";
function Footer(){
return(
<footer className="bg-red-700 text-white mt-16">
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
            <h2 className="text-xl font-bold text-white">
                Yaghi <span className="text-yellow-500">Market</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
                Your trusted supermarket and butchery.
                Fresh products, premium quality, and weekly hot offers.
            </p>
        </div>
        <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="flex items-center gap-3 mb-3">
                <FaMapMarkerAlt className="text-yellow-500"/>
                <span>Tripoli, Lebanon</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
                <FaPhoneAlt className="text-yellow-500"/>
                <span>+961 81670212</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
                <FaEnvelope className="text-yellow-500"/>
                <span>jihadyaghie@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
                <FaClock className="text-yellow-500"/>
                <span>Mon - Sun: 8:00 AM - 10:00 PM</span>
            </div>
        </div>
        <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
                <li className="hover:text-yellow-500 cursor-pointer">Home</li>
                <li className="hover:text-yellow-500 cursor-pointer">Supermarket</li>
                <li className="hover:text-yellow-500 cursor-pointer">Butchery</li>
                <li className="hover:text-yellow-500 cursor-pointer">Chicken</li>
                <li className="hover:text-yellow-500 cursor-pointer">Offers</li>
            </ul>
        </div>
    </div>
    <div className="border-t border-gray-800 text-center py-4 text-sm text-white-500">
        @{new Date().getFullYear()} Yaghi Market. All rights reserved.
    </div>
</footer>
);
}
export default Footer;
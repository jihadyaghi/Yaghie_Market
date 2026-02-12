import { FaTruck,FaShieldAlt,FaTags,FaArrowRight } from "react-icons/fa";
import supermarket from "../assets/supermarket.jpeg";
import butchery from "../assets/butchery.jpeg";
import chicken from "../assets/chicken.jpeg";
import hero from "../assets/offers.jpeg";
import offers from "../assets/offers2.jpeg";
import { useNavigate } from "react-router-dom";
function CategoryCard({title, desc, img, badge, buttonText, onClick, accent="red"}){
    const accentStyles =
    accent === "yellow"
      ? "from-yellow-500 to-yellow-300 text-white"
      : "from-red-700 to-red-600 text-white";
    return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition">
      <div className="relative h-44">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
        {badge && (
          <span className="absolute top-4 left-4 bg-white/90 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow">
            {badge}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-extrabold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600 text-sm leading-relaxed">{desc}</p>

        <button
          onClick={onClick}
          className={`mt-4 w-full py-3 rounded-xl font-semibold bg-gradient-to-r ${accentStyles}
          hover:brightness-95 transition flex items-center justify-center gap-2`}
        >
          {buttonText} <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
function Home(){
    const navigate = useNavigate();
return(
    <div className="min-h-[calc(100vh-80px)] bg-gray-50">
        <section className="relative">
            <div className="absolute inset-0">
                <img src={hero} alt="Yaghi Market" className="w-full h-[469px] object-cover "/>
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10"/>
            </div>
            <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-14">
                <div className="max-w-2xl">
                    <span className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm border border-white">
                        <FaTags/>
                        Weekly Deals & Fresh Daily
                    </span>
                    <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                        Welcome to <span className="text-yellow-500">Yaghi Market</span>
                    </h1>
                    <p className="mt-4 text-gray-300 text-lg leading-relaxed">
                        Supermarket essentials + Premium butchery cuts + Fresh chicken
                    </p>
                    <div className="mt-7 flex flex-col sm:flex-row gap-3">
                        <button onClick={()=> navigate("/offers")} className="bg-red-700 text-white font-bold px-6 py-3 rounded-xl hover:bg-red-300 transition">View Offers</button>
                        <button onClick={()=>navigate("/supermarket")} className="bg-white font-semibold px-6 py-3 rounded-xl hover:bg-slate-300 transition">Shop Now</button>
                    </div>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-white border border-white rounded-xl p-4 ">
                            <div className="flex items-center gap-2 font-bold">
                                <FaTruck/>
                                Fast Service
                            </div>
                            <p className="text-black text-sm mt-1">Quick delivery & pickup</p>
                        </div>
                        <div className="bg-white border border-white rounded-xl p-4 ">
                            <div className="flex items-center gap-2 font-bold">
                                <FaShieldAlt/>
                                Trusted Quality
                            </div>
                            <p className="text-black text-sm mt-1">Fresh & clean products</p>
                        </div>
                        <div className="bg-white border border-white rounded-xl p-4 ">
                            <div className="flex items-center gap-2 font-bold">
                                <FaTags/>
                                Best Deals
                            </div>
                            <p className="text-black text-sm mt-1">Weekly hot offers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex items-end justify-between gap-4">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-red-700">Shop by Category</h2>
                    <p className="text-gray-600 mt-2">choose category</p>
                </div>
                <button onClick={()=>navigate("offers")} className=" text-white hidden sm:inline-flex items-center gap-2 bg-red-700 font-semibold hover:text-red-300">See all offers <FaArrowRight/></button>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <CategoryCard 
                     title="Supermarket"
                     desc="Groceries, dairy, snacks, beverages and essentials."
                     img={supermarket}
                     badge="Essentials"
                     buttonText="Shop Supermarket"
                     onClick={()=>navigate("/supermarket")}
                />
                <CategoryCard
                     title="Butchery"
                     desc="Beef, lamb, fresh cuts prepared professionally."
                     img={butchery}
                     badge="Premium Cuts"
                     buttonText="Shop Butchery"
                     onClick={()=>navigate("/butchery")}
                />
                <CategoryCard
                     title="Chicken"
                     desc="Fresh chicken cuts prepared daily with top quality."
                     img={chicken}
                     badge="Fresh Daily"
                     buttonText="Shop Chicken"
                     onClick={()=>navigate("/chicken")}
                />
                <CategoryCard
                     title="Offers"
                     desc="Best discounts and promotions updated weekly."
                     img={offers}
                     badge="Hot Deals"
                     buttonText="View Offers"
                     accent="yellow"
                     onClick={()=>navigate("/offers")}
                />
            </div>
        </section>
    </div>
);
}
export default Home;
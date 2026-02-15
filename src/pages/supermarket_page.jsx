import { useEffect, useMemo, useState } from "react";

function Supermarket() {
  const API = "http://localhost:5000";
  const [categories, setCategories] = useState([]);
  const [activeCatId, setActiveCatId] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [onlyOffers, setOnlyOffers] = useState(false);
  const [catError, setCatError] = useState("");
  const [prodError, setProdError] = useState("");
  useEffect(() => {
    const loadCats = async () => {
      try {
        setCatError("");
        const res = await fetch(`${API}/api/categories?section=supermarket`);
        const data = await res.json();
        if (!Array.isArray(data)) {
          setCategories([]);
          setActiveCatId(null);
          setCatError("Categories response is not an array.");
          return;
        }
        setCategories(data);
        setActiveCatId(data?.[0]?.id ?? null); 
      } catch (err) {
        console.log(err);
        setCatError("Failed to load categories.");
      }
    };
     loadCats();
  }, []);
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setProdError("");
        setLoading(true);
        let url = `${API}/api/products?section=supermarket`;
        if (activeCatId !== null) {
          url += `&category_id=${activeCatId}`;
        }
        const res = await fetch(url);
        const data = await res.json();
        if (!Array.isArray(data)) {
          setProducts([]);
          setProdError("Products response is not an array.");
          return;
        }
        setProducts(data);
      } catch (err) {
        console.log(err);
        setProdError("Failed to load products.");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    if (activeCatId === null && categories.length > 0) return;
    loadProducts();
  }, [activeCatId]);
  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch = (p.name || "")
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchOffer = onlyOffers ? Number(p.is_offer) === 1 : true;
      return matchSearch && matchOffer;
    });
  }, [products, search, onlyOffers]);
   return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Supermarket</h1>
          <p className="text-gray-600 mt-2">
            Browse by category: Dairy, Canned, Grains, Beverages...
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full sm:max-w-md px-4 py-3 rounded-xl border border-gray-200
                         focus:outline-none focus:ring-2 focus:ring-red-300"
            />
           <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <input
                type="checkbox"
                checked={onlyOffers}
                onChange={(e) => setOnlyOffers(e.target.checked)}
                className="w-4 h-4 accent-red-700"
              />
              Only Offers
            </label>
          </div>
          <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
            {catError ? (
              <div className="text-sm text-red-600">{catError}</div>
            ) : categories.length === 0 ? (
              <div className="text-sm text-gray-500">No categories found.</div>
            ) : (
              categories.map((c) => {
                const active = c.id === activeCatId;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveCatId(c.id)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full border text-sm font-semibold transition
                      ${
                        active
                          ? "bg-red-700 text-white border-red-700"
                          : "bg-white text-gray-700 border-gray-200 hover:border-red-300 hover:text-red-700"
                      }`}
                  >
                    {c.name}
                  </button>
                );
              })
            )}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-10">
        {loading ? (
          <div className="text-gray-600">Loading products...</div>
        ) : prodError ? (
          <div className="text-red-600">{prodError}</div>
        ) : filtered.length === 0 ? (
          <div className="text-gray-600">No products found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition overflow-hidden"
              >
                <div className="relative h-44">
                  <img
                    src={`${API}/images/${p.image}`}
                    alt={p.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/400x250?text=No+Image";
                    }}
                  />
                  {Number(p.is_offer) === 1 && (
                    <span className="absolute top-3 left-3 bg-yellow-300 text-red-900 text-xs font-bold px-3 py-1 rounded-full">
                      OFFER
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="font-extrabold text-gray-900">
                    {p.name || "Unnamed"}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {p.description || "No description"}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-lg font-extrabold text-red-700">
                      ${p.price}
                    </div>

                    <button className="px-3 py-2 rounded-xl bg-red-700 text-white font-semibold hover:bg-red-800 transition">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default Supermarket;
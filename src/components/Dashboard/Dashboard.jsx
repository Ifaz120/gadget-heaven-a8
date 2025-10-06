import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getBuyList, getWishList } from "../../utility/AddToDb";
import ProductDetails from "../ProductDetails/ProductDetails";
import Product from "../Product/Product";
import CartList from "../CartList/CartList";
import WishList from "../WishList/WishList";
import { ToastContainer, toast } from "react-toastify";

const Dashboard = () => {
  const [buyList, setBuyList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");

  const navigate = useNavigate();

  const handlePurchase = () => {
    setBuyList([]);
    localStorage.removeItem("buy-list");
    document.getElementById("purchase_modal").showModal();
  };

  const allProduct = useLoaderData();
  useEffect(() => {
    const storedBuyList = getBuyList();
    const storedBuyListInt = storedBuyList.map((id) => parseInt(id));

    const buyProductList = allProduct.filter((prod) =>
      storedBuyListInt.includes(prod.product_id)
    );
    setBuyList(buyProductList);
  }, []);

  useEffect(() => {
    const storedWishList = getWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));

    const wishProductList = allProduct.filter((prod) =>
      storedWishListInt.includes(prod.product_id)
    );
    setWishList(wishProductList);
  }, []);

  const [activeTab, setActiveTab] = useState("cart");

  const handleSort = () => {
    const sortedBuyList = [...buyList].sort((a, b) => b.price - a.price);
    setBuyList(sortedBuyList);
  };

  // ekhane calculate korbo kivabe total items er khatay number jog korte hobe
  const totalCost = buyList.reduce((total, product) => {
    return total + parseInt(product.price);
  }, 0);

  return (
    <div className="">
      <div className="bg-[#9538E2] text-center text-white pt-10 pb-10 flex flex-col gap-y-5">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className="flex justify-center gap-x-5">
          <button
            onClick={() => setActiveTab("cart")}
            className={`btn font-bold text-base py-2 px-12 rounded-2xl
             ${
               activeTab === "cart"
                 ? "bg-white text-[#9538E2] border-none"
                 : "bg-[#9538E2] text-white border-1 border-white "
             }`}
          >
            Cart
          </button>

          <button
            onClick={() => setActiveTab("wishlist")}
            className={`btn font-bold text-base py-2 px-12 rounded-2xl
             ${
               activeTab === "wishlist"
                 ? "bg-white text-[#9538E2] border-none"
                 : "bg-[#9538E2] text-white border-1 border-white "
             }`}
          >
            WishList
          </button>
        </div>
      </div>
      <div className="text-black w-[90%] mx-auto">
        <div>
          <div>
            {activeTab === "cart" ? (
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold pb-10 pt-10">Cart</h2>
                </div>
                <div className="flex items-center gap-x-3">
                  <h3 className="font-bold text-2xl">
                    Total Cost: ${totalCost}
                  </h3>
                  <button
                    onClick={handleSort}
                    className="btn text-[#9538E2] font-bold rounded-2xl border border-[#9538E2]"
                  >
                    Sort By Price
                  </button>
                  <button disabled={buyList.length === 0} onClick={handlePurchase} className="btn bg-[#9538E2] font-bold rounded-2xl text-white">
                    Purchase
                  </button>
                </div>
              </div>
            ) : (
              <h2 className="text-2xl font-bold pb-10 pt-10"> Wish list</h2>
            )}
          </div>
          <div>{/* ekhane price and etc boshbe */}</div>
        </div>
        {/* ekhane tab change er jinish gula thakbe */}
        <div>
          {/* ekhane props jinish disi karon amar product er vetore item gula ovabei dewa */}
          {activeTab === "cart" ? (
            buyList.length === 0 ? (
              <div className="flex justify-center items-center h-40">
          <p className="text-3xl font-bold">Add items to the Cart to purchase here</p>
        </div>
            ) : (
              buyList.map((prods) => (
                <CartList
                  setBuyList={setBuyList}
                  key={prods.product_id}
                  jinish={prods}
                ></CartList>
              ))
            )
          ) : wishList.length === 0 ? (
           <div className="flex justify-center items-center h-40">
          <p className="text-3xl font-bold">Add items to the Wishlist to select here</p>
        </div>
          ) : (
            wishList.map((prods) => (
              <WishList
                setBuyList={setBuyList}
                allProduct={allProduct}
                setWishList={setWishList}
                jinish={prods}
                key={prods.product_id}
              ></WishList>
            ))
          )}
        </div>
      </div>
      <dialog id="purchase_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className=" flex flex-col justify-center items-center">
            <img src="https://img.icons8.com/?size=100&id=bE5mRAhk65Br&format=png&color=000000" alt="" />
          <h3 className="font-bold text-2xl">Purchase successful</h3>
          <p className="py-4 font-bold">
            Thank you for purchasing from us
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={()=> navigate('/')} className="btn rounded-xl bg-gray-300">Close</button>
            </form>
          </div>

          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Dashboard;

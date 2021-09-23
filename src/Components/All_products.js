import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { products_are_loaded } from "../Redux/Action_creators";
import { Link } from "react-router-dom";

export let All_products = () => {
  let dispatch = useDispatch();
  let all_products = useSelector(
    ({ products_reducer: { all_products } }) => all_products
  );

  let fetchProducts = async () => {
    try {
      let response = await fetch("https://fakestoreapi.com/products");
      let json = await response.json();
      console.log(json);
      dispatch(products_are_loaded(json));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products_page">
      {all_products.map((el) => (
        <div key={el.id} className="different_product">
          <Link to={`/products/${el.id}`}>
            <p>{el.title}</p>
            {el.id}
          </Link>
          <img src={el.image} className="product_image" />
          <button>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

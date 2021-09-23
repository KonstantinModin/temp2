import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { different_product_are_loaded } from "../Redux/Action_creators";

export const Product_Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const { title, description } = useSelector(
    (state) => state.products_reducer.different_product
  );

  const fetchProductDifferent = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const json = await response.json();
      dispatch(different_product_are_loaded(json));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductDifferent();
  }, []);

  const goBackHandler = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>Product {id} Detail</h1>
      <div>Title: {title}</div>
      <div>Description: {description}</div>
      <button onClick={goBackHandler}> Go Back</button>
    </div>
  );
};

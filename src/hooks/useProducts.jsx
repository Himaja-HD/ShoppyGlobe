import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productsSlice";

const useProducts = () => {
  const dispatch = useDispatch();
  
  // State
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]); // Dependency

  return { products: items, status, error }; // Return
};

export default useProducts;

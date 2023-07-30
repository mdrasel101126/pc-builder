import RootLayout from "@/components/Layouts/RootLayout";
import { addStorage } from "@/redux/product/productSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const AddStorage = ({ products }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleAddProduct = (product) => {
    dispatch(addStorage(product));
    router.push("/pc-builder");
  };
  return (
    <div className="w-full my-8 px-4">
      <h3 className="text-3xl text-center font-bold">Choose Your Storage</h3>
      {products?.map((product) => (
        <div
          key={product._id}
          className="flex flex-row justify-between mx-5 my-4"
        >
          <div className="flex flex-row  items-center">
            <Image
              width={100}
              height={100}
              alt="processor"
              src={product?.image}
            />
            <div className="ml-2">
              <p>{product?.productName}</p>
              <p>Category:{product?.category}</p>
              <p>Status:{product?.status}</p>
              <p>Rating:{product?.averageRating}</p>
              <p>price:{product?.price}</p>
            </div>
          </div>
          <div>
            <button
              onClick={() => handleAddProduct(product)}
              className="btn btn-primary"
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddStorage;

AddStorage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch("https://pc-builer-backend.vercel.app/products");
  const data = await res.json();
  const products = data?.filter(
    (product) => product.category.toLowerCase() === "storage device"
  );

  return {
    props: {
      products: products,
    },
  };
};

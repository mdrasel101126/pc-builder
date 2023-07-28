import Image from "next/image";

const ProductDetails = ({ product }) => {
  return (
    <div>
      <div className="card card-compact shadow-xl">
        <figure>
          <Image src={product?.image} width={500} height={270} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product?.productName}</h2>
          <p>Category:{product?.categrory}</p>
          <p>Price:{product?.price}</p>
          <p>Status:{product?.status}</p>
          <p>avarageRating:{product?.avarageRating}</p>
          <p>Individual Rating:{product?.individualRating}</p>
          <p>Rating:{product?.rating}</p>
          <p>Key Features</p>
          <p>Brand:{product?.features?.brand}</p>
          <p>Model:{product?.features?.model}</p>
          <p>Description:{product?.description}</p>
          {product?.reviews?.map((review) => (
            <div key={review._id}>
              <div>
                <p>Name:{review.name}</p>
              </div>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

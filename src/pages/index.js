import RootLayout from "@/components/Layouts/RootLayout";
import ProductCard from "@/components/products/ProductCard";
import HomePageHeroSection from "@/components/ui/HomePageHeroSection";

export default function HomePage({ products }) {
  console.log(products);
  return (
    <div className="w-full">
      <div>
        <HomePageHeroSection />
      </div>
      <h1 className="my-8 text-5xl text-center">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-8 gap-8">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticProps() {
  const res = await fetch("https://pc-builer-backend.vercel.app/products");
  const data = await res.json();
  return {
    props: {
      products: data,
    },
    revalidate: 300,
  };
}

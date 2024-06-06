import { useRouter } from "next/router";

function Product() {
   const { query } = useRouter();
   return <h1>Product: {JSON.stringify(query)}</h1>;
}

export default Product;

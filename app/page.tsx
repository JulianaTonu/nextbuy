import Link from "next/link";
import { stripe } from "./lib/stripe"

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });
  console.log(products)
  return (
    <div>
      <section>
        <div>
          <div>
            <h2>Welcome to My E-commerce</h2>
            <p>Discover the latest products at the best prices</p>
            <button >
              <Link href='/products'>Browse All products</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

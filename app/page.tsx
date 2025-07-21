import Link from "next/link";
import stripe from "./lib/stripe"
import Image from "next/image";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  console.log(products)
  return (
    <div>
      <section className="rounded bg-neutral-100 py-8 sm:py-12">
        <div className="mx-auto grid grid-cols-2 items-center justify-items-center gap-8 py-8 sm:px-16">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md;text-4xl">Welcome to My E-commerce</h2>
            <p className="text-neutral-600">Discover the latest products at the best prices</p>
            <button >
              <Link href='/products'>Browse All products</Link>
            </button>
            < Image
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black "
              src={products.data[2].images[0]}
              alt="Banner Image"
              width={450}
              height={450}
            />

          </div>
        </div>
      </section>
    </div>
  );
}

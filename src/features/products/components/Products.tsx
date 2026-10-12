"use client";

import { SECTION_IDS } from "@/config/site";
import { useCopy } from "@/features/i18n";
import { SectionHeading } from "@/shared/components/SectionHeading";
import { productsContent } from "../content";
import { products } from "../data/products";
import { ProductShowcase } from "./ProductShowcase";

export function Products() {
  const copy = useCopy(productsContent);

  return (
    <section id={SECTION_IDS.products} className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading index="03" eyebrow={copy.eyebrow} title={copy.title} description={copy.intro} />
        <div className="mt-14 flex flex-col gap-8">
          {products.map((product) => (
            <ProductShowcase key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

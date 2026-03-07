import { notFound } from "next/navigation";
import ProductTemplate from "@/components/ProductTemplate";
import { products } from "@/app/lib/Products";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "xelphrix-outreach-engine" },
    { slug: "xelphrix-fitcore" },
    { slug: "xelphrix-commerce-suite" },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products[slug as keyof typeof products];

  if (!product) {
    return {
      title: "Product Not Found | Xelphrix Technologies",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `https://www.xelphrixtechnologies.com/products/${slug}`;

  return {
    title: `${product.name} | Xelphrix Technologies`,
    description: product.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${product.name} | Xelphrix Technologies`,
      description: product.description,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: product.images[0],
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Xelphrix Technologies`,
      description: product.description,
      images: [product.images[0]],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = products[slug as keyof typeof products];

  if (!product) {
    notFound();
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Xelphrix Technologies",
    },
    image: product.images,
    category: "Software",
    url: `https://www.xelphrixtechnologies.com/products/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ProductTemplate {...product} />
    </>
  );
}
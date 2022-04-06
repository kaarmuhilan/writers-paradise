import { useEffect, useState } from "react";

import MobileHeaderComponent from "@/components/layout/mobile-header.component";
import HeaderComponent from "@/components/layout/header.component";
import FooterComponent from "@/components/layout/footer.component";
import NextLink from "next/link";
import NextImage from "next/image";

const testimonials = [
  {
    id: 1,
    quote:
      "My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!",
    attribution: "Sarah Peters, New Orleans",
  },
  {
    id: 2,
    quote:
      "I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two new items!",
    attribution: "Kelly McPherson, Chicago",
  },
  {
    id: 3,
    quote:
      "Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient, and I know the quality will always be there.",
    attribution: "Chris Paul, Phoenix",
  },
];

const collections = [
  {
    name: "Avalen Perumbodhai",
    author: "Poetu Bee",
    href: "https://www.amazon.com/%E0%AE%85%E0%AE%B5%E0%AE%B3%E0%AF%86%E0%AE%A9%E0%AF%8D-%E0%AE%AA%E0%AF%86%E0%AE%B0%E0%AF%81%E0%AE%AE%E0%AF%8D%E0%AE%AA%E0%AF%8B%E0%AE%A4%E0%AF%88-Tamil-Poetu-Bee-ebook/dp/B08MTP67RK/ref=sr_1_1?crid=3CUZENBZMSQSD&keywords=Poetu+bee&qid=1649098358&sprefix=poetu+be%2Caps%2C410&sr=8-1",
    imageSrc: "Avalen.jpg",
    imageAlt: "Avalen Perumbodhai",
  },
  {
    name: "Theethum Nandrum",
    href: "#",
    author: "Sandhiya Natarajan",
    imageSrc: "Theethum-Nanrum.jpg",
    imageAlt: "Theethum Nandrum",
  },
  {
    name: "Theernthuvittal",
    href: "https://www.amazon.com/%E0%AE%A4%E0%AF%80%E0%AE%B0%E0%AF%8D%E0%AE%A8%E0%AF%8D%E0%AE%A4%E0%AF%81%E0%AE%B5%E0%AE%BF%E0%AE%9F%E0%AF%8D%E0%AE%9F%E0%AE%BE%E0%AE%B3%E0%AF%8D-Tamil-Poetu-Bee-ebook/dp/B08T7V7PWG/ref=sr_1_2?crid=3CUZENBZMSQSD&keywords=Poetu+bee&qid=1649098358&sprefix=poetu+be%2Caps%2C410&sr=8-2",
    author: "Poetu Bee",
    imageSrc: "Theernthuvittak.jpg",
    imageAlt: "Theernthuvittal",
  },
];
const trendingProducts = [
  {
    id: 1,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  // More products...
];
const perks = [
  {
    name: "Publish E-Book",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg",
    description:
      "Get your e-book published with the most trusted online book stores like Amazon, Notion Press..etc",
  },
  {
    name: "Publish Paperback",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg",
    description:
      "Are you ready to publish a book, but not sure where to start? Learn how to publish a book with zero investment.",
  },
  {
    name: "Magic of Editing",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg",
    description:
      "Never edited a book before? Fear not - We've a set of highly qualified editors for do the job for you!",
  },
  {
    name: "Get Paid",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg",
    description:
      "Publishing done! And next? We provide the industry's highest author royalty. Sales notifications and reports within 34hrs.",
  },
];
const footerNavigation = {
  Books: [
    // { name: "Books", href: "#" },
    // { name: "Tees", href: "#" },
    // { name: "Objects", href: "#" },
    // { name: "Home Goods", href: "#" },
    // { name: "Accessories", href: "#" },
  ],
  aboutUs: [
    // { name: "About us", href: "#" },
    // { name: "Sustainability", href: "#" },
    // { name: "Press", href: "#" },
    // { name: "Careers", href: "#" },
    // { name: "Terms & Conditions", href: "#" },
    // { name: "Privacy", href: "#" },
  ],
  contactUs: [
    // { name: "Contact us", href: "#" },
    // { name: "Shipping", href: "#" },
    // { name: "Returns", href: "#" },
    // { name: "Warranty", href: "#" },
    // { name: "Secure Payments", href: "#" },
    // { name: "FAQ", href: "#" },
    // { name: "Find a store", href: "#" },
  ],
};

export default function Example() {
  // useEffect(() => {
  //   document.title = "Writer's Paradise";
  // }, []);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative">
        {/* Background image and overlap */}
        <div
          aria-hidden="true"
          className="hidden absolute inset-0 sm:flex sm:flex-col"
        >
          <div className="flex-1 relative w-full bg-gray-800">
            <div className="absolute inset-0 overflow-hidden">
              <NextImage
                src="https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gray-900 opacity-50" />
          </div>
          <div className="w-full bg-white h-32 md:h-40 lg:h-48" />
        </div>

        <div className="relative max-w-3xl mx-auto pb-96 px-4 text-center sm:pb-0 sm:px-6 lg:px-8">
          {/* Background image and overlap */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex flex-col sm:hidden"
          >
            <div className="flex-1 relative w-full bg-gray-800">
              <div className="absolute inset-0 overflow-hidden"></div>
              <div className="absolute inset-0 bg-gray-900 opacity-50" />
            </div>
            <div className="w-full bg-white h-48" />
          </div>
          <div className="relative py-32">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Writer's Paradise
            </h1>
            {/* <div className="mt-4 sm:mt-6">
              <a
                href="#"
                className="inline-block bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
              >
                Publish Your Books
              </a>
            </div> */}
          </div>
        </div>

        <section
          aria-labelledby="collection-heading"
          className="-mt-96 relative sm:mt-0"
        >
          <h2 id="collection-heading" className="sr-only">
            Collections
          </h2>
          <div className="max-w-md mx-auto grid grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:px-6 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:px-8 lg:gap-x-8">
            {collections.map((collection) => (
              <div
                key={collection.name}
                className="group relative h-96 bg-white rounded-lg shadow-xl sm:h-auto sm:aspect-w-4 sm:aspect-h-5"
              >
                <div>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-lg overflow-hidden"
                  >
                    <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                      <NextImage
                        src={collection.imageSrc}
                        alt={collection.imageAlt}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                  </div>
                  <div className="absolute inset-0 rounded-lg p-6 flex items-end">
                    <div>
                      <h3 className="mt-1 font-semibold text-white">
                        <NextLink href={collection.href}>
                          <a target="_blank">
                            <span className="absolute inset-0" />
                            {collection.name}
                          </a>
                        </NextLink>
                      </h3>
                      <p aria-hidden="true" className="text-sm text-white">
                        {collection.author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section
        aria-labelledby="perks-heading"
        className="bg-gray-50 border-t border-gray-200"
      >
        <h2 id="perks-heading" className="sr-only">
          Our perks
        </h2>

        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0">
                  <div className="flow-root">
                    <NextImage
                      className="-my-1 h-24 w-auto mx-auto"
                      src={perk.imageUrl}
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-gray-500">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        aria-labelledby="testimonial-heading"
        className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8"
      >
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <h2
            id="testimonial-heading"
            className="text-2xl font-extrabold tracking-tight text-gray-900"
          >
            What are people saying?
          </h2>

          <div className="mt-16 space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.id} className="sm:flex lg:block">
                <svg
                  width={24}
                  height={18}
                  viewBox="0 0 24 18"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="flex-shrink-0 text-gray-300"
                >
                  <path
                    d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                    fill="currentColor"
                  />
                </svg>
                <div className="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                  <p className="text-lg text-gray-600">{testimonial.quote}</p>
                  <cite className="mt-4 block font-semibold not-italic text-gray-900">
                    {testimonial.attribution}
                  </cite>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { component$ } from "@builder.io/qwik";

const categoriesList: string[] = [
  "Women's Fashion",
  "Men's Fashion",
  "Phones & Telecommunications",
  "Computer, Office & Security",
  "Consumer Electronics",
  "Jewelry & Watches",
  "Home, Pet & Appliances",
  "Bags & Shoes",
  "Toys , Kids & Babies",
  "Outdoor Fun & Sports",
  "Beauty, Health & Hair",
  "Automobiles & Motorcycles",
  "Tools & Home Improvement",
];

export const Categories = component$(() => {
  return (
    <>
      <section class="flex flex-col p-4 shadow-xl min-h-screen  bg-red-400 text-white">
        <h3 class="text-3xl sticky">Categories</h3>
        <ul class="menu py-6 px-4 w-50 min-h-full ">
          {categoriesList.map((category) => {
            return <li class="py-1" key={category}>{category}</li>;
          })}
        </ul>
      </section>
    </>
  );
});

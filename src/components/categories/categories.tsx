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
      <section class="flex flex-col bg-base-200 p-4 shadow-xl rounded-xl">
        <h3>Categories</h3>
        <ul class="menu p-4 w-80 min-h-full text-base-content">
          {categoriesList.map((category) => {
            return <li key={category}>{category}</li>;
          })}
        </ul>
      </section>
    </>
  );
});

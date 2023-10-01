import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Categories } from "~/components/categories/categories";

import Hero from "~/components/starter/hero/hero";

export default component$(() => {
  return (
    <>
    <div class='flex items-center px-8'>
      <Categories />
      <Hero />

    </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

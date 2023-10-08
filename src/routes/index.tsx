import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/hero/hero";

export default component$(() => {
  return (
    <>
    <div class='flex items-center justify-center pr-8 relative'>
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

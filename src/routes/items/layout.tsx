import { component$, Slot } from '@builder.io/qwik';
import { Categories } from "~/components/categories/categories";


export default component$(() => {
  return (
    <>
    <main class="flex">

      <Categories />
      <Slot />
    </main>
    </>
  );
});

export const Child = component$(() => {
  return <div>Hello Qwik Child Component!</div>
})
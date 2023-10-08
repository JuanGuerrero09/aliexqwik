import { component$, useSignal } from "@builder.io/qwik";
import { AliexpressLogo } from "../icons/aliexpress";
import { ShoppingCart } from "../icons/shoppingCart";
import styles from "./header.module.css";

export default component$(() => {
  const cartItems = useSignal(0);

  return (
    <header
      class={[
        "w-screen px-10 py-2 flex items-center justify-between gap-3 sticky top-0 z-50 backdrop-blur-2xl bg-red-600",
      ]}
    >
      <div class={styles.logo}>
        <a href="/" title="qwik">
          <AliexpressLogo height={50} width={143} />
        </a>
      </div>
      <div class="flex w-1/2 justify-around items-center text-white">
        <input
          type="text"
          placeholder="Type here"
          class="input h-10 input-bordered bg-transparent w-5/6 focus:backdrop-blur-2xl text-white border-white placeholder:text-white"
        />
        <button class="btn btn-ghost btn-circle h-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <ul class="flex gap-3 items-center">
        <li class="link">
          <a
            href="https://qwik.builder.io/docs/components/overview/"
            target="_blank"
          >
            Docs
          </a>
        </li>
        <li class="link">
          <a
            href="https://qwik.builder.io/examples/introduction/hello-world/"
            target="_blank"
          >
            Examples
          </a>
        </li>
        <li class="link">
          <a
            href="https://qwik.builder.io/tutorial/welcome/overview/"
            target="_blank"
          >
            Tutorials
          </a>
        </li>
        <li class="link" onClick$={() => console.log(cartItems.value)}>
          <span onClick$={() => cartItems.value++}>
            <ShoppingCart value={cartItems.value} />
          </span>
        </li>
      </ul>
    </header>
  );
});

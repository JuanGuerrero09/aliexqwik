import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";
// import ImgThunder from "~/media/thunder.png?jsx";

export default component$(() => {
  return (
    <div class={["container", styles.hero]}>
      {/* <ImgThunder class={styles["hero-image"]} /> */}
      <h1 class="font-bold text-6xl" >
        <span class="text-primary">Qwik</span> <span class="text-red-600">Store</span>
      </h1>
      <p class="text-sm text-base-content">
          A simple e-commerce store built with Qwik
        </p>
        <a
          href="https://qwik.builder.io/docs"
          target="_blank"
          class="button button-dark"
        >
          Explore the docs
        </a>
      </div>
  );
});

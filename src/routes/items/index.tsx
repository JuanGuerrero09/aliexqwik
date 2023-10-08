import { component$ } from '@builder.io/qwik'
import { Product } from '~/components/product/product'

const example = {
  "id": 38,
  "title": "Tasty Granite Ball",
  "price": 740,
  "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
  "images": [
  "https://i.imgur.com/lVH533g.jpeg",
  "https://i.imgur.com/OARGZQW.jpeg",
  "https://i.imgur.com/gxaUWSF.jpeg"
  ],
  "creationAt": "2023-10-06T18:41:34.000Z",
  "updatedAt": "2023-10-06T18:41:34.000Z",
  "category": {
  "id": 3,
  "name": "Furniture",
  "image": "https://i.imgur.com/QEGACen.jpeg",
  "creationAt": "2023-10-06T18:41:34.000Z",
  "updatedAt": "2023-10-06T18:41:34.000Z"
  }
  }

export default component$(() => {
  const {id, images,  category, title} = example
  return (
    <>
        <Product key={id} description={category.name} image={images[0]} name={title} />
    </>
  )
})

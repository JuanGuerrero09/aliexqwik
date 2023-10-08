import { component$ } from '@builder.io/qwik'

interface Props {
  name: string
  image: string
  description: string
}

export const Product = component$(({ name, image, description }: Props) => {
  return (
    <>
      <div class="card w-80 bg-slate-300 text-gray-900 shadow-xl h-64 m-1 p-1">
        <figure>
          <img src={image} alt={name} width={100} height={100} />
        </figure>
        <div class="card-body p-2">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
          <div class="card-actions justify-start">
            <div class="badge badge-outline">Fashion</div>
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </>
  )
})

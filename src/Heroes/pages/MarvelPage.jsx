import { HeroComponent } from "../components/HeroComponent"


export const MarvelPage = () => {
  return (
    <div>
     <h1 className='mb-5 text-3xl font-bold'>Marvel Comics</h1>
     <hr className='mb-10' />
      <HeroComponent publisher={'Marvel Comics'} />
    </div>
  )
}


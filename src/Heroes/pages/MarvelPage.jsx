import { HeroComponent } from "../components/HeroComponent"


export const MarvelPage = ({ searchTerms }) => {


  return (
    <div>
     <h1 className='mb-5 text-3xl font-bold'>Marvel Comics</h1>
     <hr className='mb-10' />
      <HeroComponent searchTerms={searchTerms}   publisher={'Marvel Comics'} />
    </div>
  )
}


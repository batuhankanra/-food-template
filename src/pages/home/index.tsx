import Banner from "../../components/banner"
import Cart from "../../components/cart"
import DinnerToday from "../../components/dinnerToday"
import TodaysRecipe from "../../components/todaysRecipe"



const Home = () => {
  return (
    <section className='mt-6 container mx-auto flex flex-col gap-y-10'>
        <Banner />
      
        <Cart />
        <DinnerToday />
        <TodaysRecipe />
        
  
      
    </section>
  )
}

export default Home

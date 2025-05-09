import Cart from "../../components/cart"
import DinnerToday from "../../components/dinnerToday"



const Home = () => {
  return (
    <section className='mt-6 container mx-auto flex flex-col gap-y-10'>
      
        <Cart />
        <DinnerToday />
        
  
      
    </section>
  )
}

export default Home

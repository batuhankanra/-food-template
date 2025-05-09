
import logo from '/logo.png'



const recipes :cartProps[]=[
  {
    id:1,
    title:'Imam bayildi',
    description:'asdjkljdklsadjakldjkal',
    imgLink:logo,
    rating:2,
    
  },
  {
    id:2,
    title:'Imam bayildi',
    description:'asdjkljdklsadjakldjkal',
    imgLink:logo,
    rating:4,
    
  },
  {
    id:3,
    title:'Imam bayildi',
    description:'asdjkljdklsadjakldjkal',
    imgLink:logo,
    rating:5,
    
  }
]

const Cart=()=>{
  return (
    <section className='py-10 bg-[#120907] rounded-md'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-3xl font-bold text-zinc-200 mb-6 text-center'>Popüler Tarifler</h2>
        <div className='grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
          {recipes.map(item=>(
            <div key={item.id} className='bg-zinc-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300'>
              <img src={item.imgLink} alt={item.title} className='w-full h-48 object-cover' />
              <div className="p-3">
                <h3 className='text-xl font-semibold text-zinc-800'>{item.title}</h3>
                <p className='text-base  text-zinc-950'>{item.description}</p>
                <p className='text-sm text-zinc-500'>⭐{item.rating}</p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
export default Cart


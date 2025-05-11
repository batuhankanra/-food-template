
import { useParams } from 'react-router'
import logo from '/logo.png'

const data=[
    {
        id:1,
        category:'ana-yemekler',
        name:'imam bayildi',
        description:'sajdlksajdklsajdklsadjklsa',
        rating:'3',
        imgageLink:logo

    },
    {
        id:2,
        name:'imam bayildi',
        category:'ana-yemekler',
        description:'sajdlksajdklsajdklsadjklsa',
        rating:'3',
        imgageLink:logo
    },
    {
        id:3,
        category:'ana-yemekler',
        name:'imam bayildi',
        description:'sajdlksajdklsajdklsadjklsa',
        rating:'3',
        imgageLink:logo

    },
    {
        id:4,
        category:'tatlilar',
        name:'soguk baklava',
        description:'sajdlksajdklsajdklsadjklsa',
        rating:'3',
        imgageLink:logo

    }
]


const RecipeId = () => {
    const {category}=useParams()
    console.log(data.map(item=>item.name))
  return (
    <section className='max-w-7xl mx-auto p-6'>
        <h1 className='text-3xl font-bold mb-6 capitalize '>{category} tarifleri</h1>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 '>
                {data.filter(x=>x.category===category).map(item=>(
                    <div key={item.id} className='flex flex-col  bg-zinc-600 rounded-xl shadow md:shadow-lg transition overflow-hidden w-full '> 
                        <img src={item.imgageLink} alt={item.name} className='w-full  object-cover  ' />
                        <div className='p-4 flex-1'>
                            <h3 className='text-xl font-semibold '> {item.name}</h3>
                            <p className='text-sm mt-2 mb-4 text-wrap'>{item.description} </p>
                            <button className='border border-sky-500 p-2 rounded-md hover:bg-sky-700 cursor-pointer duration-300 w-full'>Tarifi Gor</button>
                        </div>
                    </div>
                ))}
        </div>
    </section>
  )
}

export default RecipeId

import { useState } from "react";
import { categories } from "../../components/dinnerToday";
import clsx from "clsx";



const CreateModal = () => {
  const [ingredient, setIngredient] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [step, setStep] = useState('');
  const [name,setName]=useState('')
  const [description,setdescription]=useState('')
  const [steps, setSteps] = useState<string[]>([]);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [category, setCategory] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleKeyDown=(e:React.KeyboardEvent<HTMLInputElement>)=>{
     if (e.key === 'Enter' && ingredient.trim() !== '') {
      e.preventDefault();
      setIngredients([...ingredients, ingredient.trim()]);
      setIngredient('');
    }
  }
  const handleStepKeyDown=(e:React.KeyboardEvent<HTMLInputElement>)=>{
     if (e.key === 'Enter' && step.trim() !== '') {
      e.preventDefault();
      setSteps([...steps, step.trim()]);
      setStep('');
    }
  }
  const handleRemove=(item:String)=>{
    setIngredients(ingredients.filter(x=> x !== item))
  }
  const handleStepRemove=(item:String)=>{
    setSteps(steps.filter(x=> x !== item))
  }
  const handleFile=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const currenFile=e.target.files?.[0]
    if(currenFile){
      setSelectedFile(currenFile)
    }
  }
  return (
   <form className="mt-4 flex flex-col items-center gap-y-4">
    <input onChange={e=>setName(e.target.value)} value={name} type="text" placeholder="Tarifin ismi" className="w-full outline-none border border-zinc-400 focus:border-zinc-800 focus:bg-white transition-all duration-200 rounded-md py-2 px-1 text-lg" />
    <input onChange={e=>setdescription(e.target.value)} value={description} type="text" placeholder="Tarifin Açıklanması" className="w-full outline-none border border-zinc-400 focus:bg-white transition-all duration-200 focus:border-zinc-800 rounded-md py-2 px-1 text-lg" />
    <input type="text" value={ingredient} onChange={e=>setIngredient(e.target.value)} onKeyDown={handleKeyDown} placeholder="Tarifin Malzemeleri" className="w-full focus:bg-white transition-all duration-200 outline-none border border-zinc-400 focus:border-zinc-800 rounded-md py-2 px-1 text-lg" />
    <p className="text-sm">Malzemeyi yazıp entera basmanız gerekiyor.</p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4">
      
      {ingredients.length >0 && ingredients.map((item,i)=>(
        <div className="bg-sky-300 px-3 py-3 rounded-lg text-center relative" key={i}>
          {item}
          <button type="button" onClick={()=>handleRemove(item)} className="absolute top-0 right-2 text-xs cursor-pointer hover:text-white">X</button>
        </div>
      ))}
    </div>
    <input type="text" value={step} onChange={e=>setStep(e.target.value)} onKeyDown={handleStepKeyDown} placeholder="Tarifin Adımları" className="w-full outline-none border border-zinc-400 focus:bg-white transition-all duration-200 focus:border-zinc-800 rounded-md py-2 px-1 text-lg" />
    <p className="text-sm">Adımları yazıp entera basmanız gerekiyor.</p>
    {steps.length >0 && steps.map((item,i)=>(
        <div className="bg-sky-400 px-3 py-3 rounded-lg  relative w-full text-start" key={i}>
          {item}
          <button type="button" onClick={()=>handleStepRemove(item)} className="absolute top-0 right-3 cursor-pointer hover:text-white">X</button>
        </div>
    ))}
    <div className="relative w-full">
      <button type="button" className={clsx(
        'w-full outline-none border border-zinc-400 hover:bg-sky-200 transition-all duration-200 hover:border-zinc-800 text-start rounded-md py-2 px-1 text-lg',
         isActive===true &&'bg-white hover:bg-white'
        
      )} onClick={()=>setIsActive(!isActive)}>
        {category==='' ? 'Kategori Seç' : category}
      </button>
      {isActive && (
        <div className="absolute top-14 left-0 w-full bg-white border border-zinc-400 rounded-md shadow-md z-50">
          
          {categories.map((item, i) => (
            <button
              type="button"
              key={i}
              className="w-full text-start px-3 py-2 hover:bg-sky-200 border-b last:border-b-0 "
              onClick={()=>setCategory(item.name)}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}

    </div>
    <input onChange={handleFile} type="file" className="cursor-pointer w-full outline-none border border-zinc-400 hover:bg-sky-200 transition-all duration-200 hover:border-zinc-800 text-start rounded-md py-2 px-1 text-lg " />
    {selectedFile && (
      <img
        src={URL.createObjectURL(selectedFile)}
        alt="Önizleme"
        
        className="mt-3 w-10 h-10 object-cover rounded-md"
      />
    )}
    <button type="submit" className=" cursor-pointer  w-full outline-none border border-zinc-400 hover:bg-sky-200 transition-all duration-200 hover:border-zinc-800 text-center rounded-md py-2 px-1 text-lg font-semibold">Olustur</button>
      
   </form>
  )
}

export default CreateModal

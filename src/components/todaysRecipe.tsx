import logo from '/logo.png'


const recipeOfTheDay = {
  title: "Tavuklu Kremalı Makarna",
  description: "Kremalı sosun tavukla buluştuğu, nefis ve pratik bir makarna tarifi. Akşam yemeği için mükemmel bir tercih!",
  image: logo,
  date: "08 Mayıs 2025",
  link: "/tarifler/tavuklu-kremali-makarna",
};

const TodaysRecipe = () => {
  return (
    <section className="py-12 bg-zinc-900 text-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <img
          src={recipeOfTheDay.image}
          alt={recipeOfTheDay.title}
          className="w-full md:w-1/2 rounded-xl shadow-lg object-cover h-64"
        />
        <div className="md:w-1/2 space-y-4">
          <p className="text-sm text-zinc-400">Bugünün Tarifi • {recipeOfTheDay.date}</p>
          <h2 className="text-3xl font-bold">{recipeOfTheDay.title}</h2>
          <p className="text-zinc-200">{recipeOfTheDay.description}</p>
          <a
            href={recipeOfTheDay.link}
            className="inline-block mt-4 bg-yellow-400 text-zinc-900 font-semibold px-6 py-2 rounded hover:bg-yellow-300 transition"
          >
            Tarife Git
          </a>
        </div>
      </div>
    </section>
  )
}

export default TodaysRecipe

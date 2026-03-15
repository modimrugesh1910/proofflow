function Stats() {

  const stats = [
    { title: "Projects", value: "24" },
    { title: "Total Funded", value: "12 ETH" },
    { title: "Milestones Completed", value: "58" },
    { title: "NFT Rewards", value: "41" }
  ]

  return (

    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

      {stats.map((s,i)=>(
        <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

          <p className="text-gray-500 text-sm">{s.title}</p>

          <h2 className="text-2xl font-bold text-indigo-600">
            {s.value}
          </h2>

        </div>
      ))}

    </div>

  )
}

export default Stats

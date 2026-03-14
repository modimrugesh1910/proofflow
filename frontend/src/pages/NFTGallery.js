import { useState } from "react"

function NFTGallery(){

  const [nfts] = useState([1,2,3])

  return (

    <div className="bg-white p-6 rounded shadow">

      <h2 className="text-xl font-bold mb-4">
        Milestone NFT Achievements
      </h2>

      <div className="grid grid-cols-3 gap-4">

        {nfts.map((nft,i)=>(
          <div key={i} className="border p-4 rounded text-center">

            <p className="font-bold">
              NFT #{nft}
            </p>

            <p className="text-gray-500 text-sm">
              Milestone Achievement
            </p>

          </div>
        ))}

      </div>

    </div>

  )
}

export default NFTGallery
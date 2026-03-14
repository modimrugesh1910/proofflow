import { useEffect, useState } from "react";
import { getNFTs } from "../services/blockchain";

function NFTGallery() {

  const [nfts, setNFTs] = useState([]);

  useEffect(() => {

    async function loadNFTs() {
      const data = await getNFTs();
      setNFTs(data);
    }

    loadNFTs();

  }, []);

  return (
    <div>

      <h2 className="text-xl font-bold mb-4">
        Milestone NFT Achievements
      </h2>

      <div className="grid grid-cols-3 gap-4">

        {nfts.map((nft, i) => (

          <div
            key={i}
            className="border p-4 rounded text-center"
          >
            <p className="font-bold">
              NFT #{nft}
            </p>

            <p className="text-sm text-gray-500">
              Milestone Achievement
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default NFTGallery;
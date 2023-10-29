//METACRAFTER Assessment

// a variable to hold our NFT's
const NFTs = [];

// function to mint NFTs
function mintNFT(_name, _eyecolor, _shirttype, _bling) {
  const NFT = {
    name: _name,
    eyecolor: _eyecolor,
    shirtType: _shirttype,
    bling: _bling,
  };
  NFTs.push(NFT);
  console.log("Minted: " + _name);
}

// function to list properties of the NFT
function listNFTs() {
  for (let i = 0; i < NFTs.length; i++) {
    console.log("\nID :\t\t" + (i + 1));
    console.log("NAME :\t\t" + NFTs[i].name);
    console.log("EYE_COLOR :\t" + NFTs[i].eyecolor);
    console.log("SHIRT_TYPE :\t" + NFTs[i].shirtType);
    console.log("BLING :\t\t" + NFTs[i].bling);
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("\n" + NFTs.length);
}

// call your functions
mintNFT("Rai", "Blue", "White Hoodie", "Gold Chain");
mintNFT("Tay", "Green", "Black Hoodie", "Silver Chain");
mintNFT("Zuck", "Grey", "Suit", "Gold teeth");
mintNFT("Sara", "Black", "Shirt", "Glasses");
listNFTs();
getTotalSupply();

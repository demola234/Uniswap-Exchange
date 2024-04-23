import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("Uniswap", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.

  const TOKEN_ID = 0;

  async function deployUniswap() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const uniswapFactory = await hre.ethers.getContractFactory("SingleSwap");
    const uniswap = await uniswapFactory.deploy();

    return { uniswap, owner, otherAccount };
  }

  async function deployUniswapFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const Mint = await hre.ethers.getContractFactory("SingleSwap");
    const uniswap = await Mint.deploy();

    return { uniswap, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should be deployed to Sepolia", async function () {
      const { uniswap, owner, otherAccount } = await loadFixture(
        deployUniswapFixture
      );

      expect(await uniswap.connect(owner));
    });

    it("Should set the right owner", async function () {
      const { uniswap, owner, otherAccount } = await loadFixture(
        deployUniswapFixture
      );

      //   expect(await uniswap.owner()).to.equal(owner.address);
    });

    // it("Should mint nft", async function () {
    //   const { mint, owner, otherAccount } = await loadFixture(
    //     deployMintFixture
    //   );
    //   const { uniswapFactory } = await loadFixture(deployuniswapFactoryFixture);

    //   const mintedNft = mint.mintNft();

    //   mint.connect(owner).approve(await uniswapFactory.getAddress(), TOKEN_ID);

    //   log(mint.target);

    //   expect((await mintedNft).isMined);
    // });

    // it("Should approve minted nft", async function () {
    //   // We don't use the fixture here because we want a different deployment

    //   const { mint, owner, otherAccount } = await loadFixture(
    //     deployMintFixture
    //   );

    //   const { uniswapFactory } = await loadFixture(deployuniswapFactoryFixture);

    //   await mint.mintNft();

    //   const approved = await mint
    //     .connect(owner)
    //     .approve(await uniswapFactory.getAddress(), TOKEN_ID);

    //   log(mint.target);

    //   expect(approved.confirmations);
    // });
  });

  //   describe("Should List all Items and can be brought", function () {
  //     it("Should list all items", async function () {
  //       const { uniswapFactory, owner, otherAccount } = await loadFixture(
  //         deployuniswapFactoryFixture
  //       );
  //       const { mint } = await loadFixture(deployMintFixture);
  //       await mint.mintNft();
  //       await mint
  //         .connect(owner)
  //         .approve(await uniswapFactory.getAddress(), TOKEN_ID);
  //       log(mint.target);
  //       const price = ethers.parseEther("0.00000001");
  //       await uniswapFactory
  //         .connect(owner)
  //         .listItem(mint.target, TOKEN_ID, price);

  //       const boughtNft = await uniswapFactory
  //         .connect(owner)
  //         .buyItem(mint.target, TOKEN_ID, ethers.ZeroAddress, {
  //           value: price,
  //         });

  //       expect(await boughtNft).to.emit(uniswapFactory, "ItemBought");

  //       expect(await boughtNft).to.changeEtherBalance(owner, price);
  //     });
  //       it("Should error out when you are the owner", async function () {
  //         const { uniswapFactory, owner, otherAccount } = await loadFixture(
  //             deployuniswapFactoryFixture
  //           );

  //       })
  //   });
});

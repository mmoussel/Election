const { ethers } = require("hardhat");

describe("Election", function () {
  it("Should create and execute market sales", async function () {
    const Election = await ethers.getContractFactory("Election");
    const election = await Election.deploy();
    await election.deployed();
    // const marketAddress = election.address;

    // const [_, buyerAddress] = await ethers.getSigners();

    // await election.connect(buyerAddress);

    let items = await election.getCandidates();

    console.log("items: ", items);
  });
});

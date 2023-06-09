const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

app.use(cors({
  origin: [ 'https://ecdsa.saigontoken.com/' ]
}
));
app.use(express.json());

//private key 01: 923c89536469b00da37e538d821f8817447c4eced4949ef11a8486d9738dab9d
//private key 02: b4fcc96f20f4e4a5091886f4e6573ed298936c1ecb6c2716005235a5ecaf8951
//private key 03: 6776bb125dc2b88a8e6c516a8ed3522dfc80a9da5eacc106b108bca8ad5e6453
//private key 04: b79419c86e6ae8a87453e9b9244fa9dd669300b19357bb0594f47ed0865bd958
//private key 05: 0e60883ec50f44f629caac640fd7ecaa6e9bd3155b424ca795e2e781f5069a5d


const balances = {
  "0406b9b61e011d4546da45cda45c26f90b5ae95ec83e5eea530fea43ca7909e3af03044b814bc8964616464a7e48f916f705194814127c2b21b2bd1578446afbe5": 100,
  "041d07521bac3f95993a8426e58c0f1545811313a441b921327e8a299452b7baf47aeb5e5b3507ed4caf21c65c039f2a42a758cb6a2bf179e659db33bc32fe7772": 50,
  "0470ecc005832208927f86789a3315d6627a6cbf791d2f0027dbd24b757baa17ac53bad6ba1761bfe50822d0d68dccf7311e67e24bc2085962176fc2e707e1b11c": 75,
  "04cc47286943720c3bcbc50a45f725f5e8786bca2e09eeb55a574eaeedde3e979064de4b55aadb03b3fdd2095749594c65a9bafddb331cf2643b90ceac6e6dce72": 55,
  "04ae8fd75595321be6d0458676550f4a81342a4ef6936748feeedf31f564542423e305ab81c9fb9aa58f5661896698fdc91d7f9fc5043a65eb655e63251c00b59f": 80,

};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  // TODO: get a signature from the client-side application
  // recover the public address from the signature

  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}

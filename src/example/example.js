/*
// REGIAO ALL
regiaoClient
  .getAllRegiao(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUsInN5c3RlbSI6IklHUkVKQVMiLCJpYXQiOjE2MzExNDEwNTUsImV4cCI6MTYzMTIyNzQ1NX0.gE7INUWo46ZRl2nDOKsDlrWVIl_SAe6tNW8hjRiZWlw"
  )
  .then((res) => {
    console.log("Exemplo getAllRegiao");
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
*/

// REGIAO
/*
regiaoClient
  .getRegiao(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUsInN5c3RlbSI6IklHUkVKQVMiLCJpYXQiOjE2MzExNDEwNTUsImV4cCI6MTYzMTIyNzQ1NX0.gE7INUWo46ZRl2nDOKsDlrWVIl_SAe6tNW8hjRiZWlw",
    2
  )
  .then((res) => {
    console.log("Exemplo getRegiao");
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
*/


// CREATE REGIAO
/*
const payloadRequest1 = {
  data: { nome: "Regiao XYZ2" },
};

regiaoClient
  .getCreateRegiao(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUsInN5c3RlbSI6IklHUkVKQVMiLCJpYXQiOjE2MzExNDEwNTUsImV4cCI6MTYzMTIyNzQ1NX0.gE7INUWo46ZRl2nDOKsDlrWVIl_SAe6tNW8hjRiZWlw",
    payloadRequest1
  )
  .then((res) => {
    console.log("Exemplo getCreateRegiao");
    console.log(res);
  })
  .catch((err) => {
    console.log(err.response);
  });
*/


// UPDATE REGIAO
/*
const payloadRequest2 = {
  data: { id: 6, nome: "Barreiro", status: "INATIVO" },
};

regiaoClient
  .getUpdateRegiao(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUsInN5c3RlbSI6IklHUkVKQVMiLCJpYXQiOjE2MzExNDEwNTUsImV4cCI6MTYzMTIyNzQ1NX0.gE7INUWo46ZRl2nDOKsDlrWVIl_SAe6tNW8hjRiZWlw",
    payloadRequest2
  )
  .then((res) => {
    console.log("Exemplo getUpdateRegiao");
    console.log(res);
  })
  .catch((err) => {
    console.log(err.response);
  });
  */


// DELETE REGIAO
/*
regiaoClient
  .getDeleteRegiao(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUsInN5c3RlbSI6IklHUkVKQVMiLCJpYXQiOjE2MzExNDEwNTUsImV4cCI6MTYzMTIyNzQ1NX0.gE7INUWo46ZRl2nDOKsDlrWVIl_SAe6tNW8hjRiZWlw",
    7
  )
  .then((res) => {
    console.log("Exemplo getDeleteRegiao");
    console.log(res);
  })
  .catch((err) => {
    console.log(err.response);
  });
*/
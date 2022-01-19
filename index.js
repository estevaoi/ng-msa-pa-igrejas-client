/**
 * @author PabloFlanmarion
 */
const regiaoClient = require("./src/client/RegiaoClient");
const areaClient = require("./src/client/AreaClient");
const igrejaClient = require("./src/client/IgrejaClient");

exports.regiaoClient = regiaoClient;
exports.areaClient = areaClient;
exports.igrejaClient = igrejaClient;

/**
  * Testes



 igrejaClient
   .getAllIgreja(
     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUsInN5c3RlbSI6IklHUkVKQVMiLCJpYXQiOjE2MzEyMjQ2MDYsImV4cCI6MTYzMTMxMTAwNn0.0P8KQfs1IRMQM3roglXrlqCJo6P6FPzI9LNWso7l1zI"
   )
   .then((res) => {
     console.log("Exemplo getAllRegiao");
     console.log(res);
   })
   .catch((err) => {
     console.log(err);
   });

 igrejaClient
   .getIgreja(
     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUsInN5c3RlbSI6IklHUkVKQVMiLCJpYXQiOjE2MzEyMjQ2MDYsImV4cCI6MTYzMTMxMTAwNn0.0P8KQfs1IRMQM3roglXrlqCJo6P6FPzI9LNWso7l1zI",
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

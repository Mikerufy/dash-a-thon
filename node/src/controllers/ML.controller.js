const { errorHandler } = require("../utils/errorHandler");
const { spawn,exec } = require("child_process");

const func = (cusine,x,y)=>{
  return new Promise((resolve, reject) => {
  exec(
    `cd F:/Tsec-Sem-5/MP4/dash-a-thon/node/src/controllers && python F:/Tsec-Sem-5/MP4/dash-a-thon/node/src/controllers/Average_rating.py ${cusine} ${x} ${y}`,
    (error, stdout, stderr) => {
      if (error) reject({error,stderr});
      if (stderr) reject(stderr);
      resolve(stdout);
    }
  );
});
}
module.exports = {
  rating: (req, res) => {
    errorHandler(req, res, async () => {
      var dataToSend = "";
      var {cusine,x,y} = req.body;
      // spawn new child process to call the python script
      // let python = await spawn("python", ["F:/Tsec-Sem-5/MP4/dash-a-thon/node/src/controllers/Average_rating.py","Chinese","19.10304209600746","72.84793227095305"]);
      // // const python = spawn("python",["F:/Tsec-Sem-5/MP4/dash-a-thon/node/src/controllers/hello.py","HI"])
      // //"Chinese","19.10304209600746","72.84793227095305"
      // // collect data from script
      // await python.stdout.on("data", function (data) {
      //   console.log("Pipe data from python script ...");
      //   console.log(data)
      //   dataToSend += data
      // });
      // python.stdout.on("end", function () {
      //   console.log(dataToSend)
      // });
      // python.on("close", (code) => {
      //   console.log(`child process close all stdio with code ${code}`);
      //   // send data to browser
      //   // console.log(dataToSend)
      //   res.status(200).json(dataToSend);
      // });
    dataToSend += await func(cusine,x,y);
    console.log(dataToSend)
    res.status(200).json(dataToSend)
    });
  },
};

const uniqid = require("uniqid");
const multer = require("multer");
const upload = multer({ dest: "image/" });
const fs = require("fs");

module.exports = app => {
  app.post("/api/image-upload", upload.single("file"), async (req, res) => {
    const newFileName = req.file.originalname;
    const requestFile = req.file.path;
    await fs.rename(requestFile, "image/" + uniqid() + newFileName, function(
      err
    ) {
      if (err) {
        res.send({ status: "fail" });
      }
      res.send({ status: "success", data: newFileName });
    });
  });
};

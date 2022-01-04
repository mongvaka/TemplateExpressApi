import fs from "fs";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { Request, Response } from "express";

let createDocument = (
  req: Request,
  res: Response,
  template: any,
  datamodel: any
) => {
  try {
    const model_name = datamodel.model_name;
    fs.writeFileSync(
      "import_file/" + model_name + "Template.docx",
      template,
      "base64"
      // function (err:any) {
      //   if (err) {
      //     console.log(err);
      //   }
      // }
    );
    if (fs.existsSync("import_file/" + model_name + "Template.docx")) {
      console.log("fileExi");
    } else {
      console.log("fileNotExit");
    }
    const content = fs.readFileSync(
      "import_file/" + model_name + "Template.docx",
      "binary"
      // function (error) {
      //   console.log("error", error);
      //   if (error) {
      //     return console.log(error);
      //   }
      // }
    );
    //console.log("content", content);
    const zip = new PizZip(content);
    const doc = new Docxtemplater();
    doc.loadZip(zip);
    doc.setData(datamodel);
    doc.render();
    const buf = doc.getZip().generate({ type: "nodebuffer" });
    fs.writeFileSync("" + model_name + ".docx", buf);
    //res.header["File-Name"] = "CustomFileName";
    res.download("" + model_name + ".docx", function (err) {
      if (err) {
        console.log(err); // Check error if you want
      }
      fs.unlink("" + model_name + ".docx", function () {
        console.log("File " + model_name + ".docx was deleted"); // Callback
      });
      fs.unlink("import_file/" + model_name + "Template.docx", function () {
        console.log("File " + model_name + "Template.docx was deleted"); // Callback
      });
    });
    // fs.unlinkSync("mongta.docx");
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export default {
  createDocument,
};

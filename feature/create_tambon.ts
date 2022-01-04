// import pool from "../db";
// import fs from "fs";
//import readXlsxFile from "read-excel-file/node";
// import e from "express";
import countryService from "../api/services/country_service";
// const { createAddressTable } from "../api/services/address_service";
let addTambon = 0;
let addProvince = 0;
let addDistrict = 0;
let addsubDistrict = 0;
let create = async () => {
  // try {
  //   await readXlsxFile("import_file/tambon.xlsx", {
  //     sheet: "TambonDatabase",
  //   }).then((rows: any) => {
  //     try {
  //       let countryModel: any = {
  //         country_code: "TH",
  //         country_name: "ประเทศไทย",
  //         company_uuid: "6401dee8-8c18-4099-b704-4a954f52a66f",
  //         branch_uuid: '"12a3cf93-a095-4391-a57d-8021302b6e59"',
  //         is_active: true,
  //         province: {},
  //       };
  //       rows.forEach((item: any) => {
  //         if (countryModel.province[item[14]]) {
  //           if (countryModel.province[item[14]].district) {
  //             if (countryModel.province[item[14]].district[item[9]]) {
  //               if (
  //                 countryModel.province[item[14]].district[item[9]].sub_district
  //               ) {
  //                 addTambon++;
  //                 countryModel.province[item[14]].district[
  //                   item[9]
  //                 ].sub_district[item[1]] = {
  //                   sub_district_name: item[1],
  //                   sub_district_code: item[0],
  //                   district_uuid: null,
  //                   zipcode: item[5],
  //                 };
  //               } else {
  //                 addTambon++;
  //                 countryModel.province[item[14]].district[
  //                   item[9]
  //                 ].sub_district = {};
  //                 countryModel.province[item[14]].district[
  //                   item[9]
  //                 ].sub_district[item[0]] = {
  //                   sub_district_name: item[1],
  //                   sub_district_code: item[0],
  //                   district_uuid: null,
  //                   zipcode: item[5],
  //                 };
  //                 // console.log(
  //                 //   "tambon: ",
  //                 //   addTambon,
  //                 //   " subdistrict: ",
  //                 //   addsubDistrict,
  //                 //   " district: ",
  //                 //   addDistrict,
  //                 //   " province: ",
  //                 //   addProvince
  //                 // );
  //                 console.log("addnewTambon: ", addTambon, " ", item[1]);
  //               }
  //             } else {
  //               addsubDistrict++;
  //               addTambon++;
  //               countryModel.province[item[14]].district[item[9]] = {
  //                 district_code: item[8],
  //                 district_name: item[9],
  //                 province_uuid: null,
  //                 is_active: true,
  //               };
  //               countryModel.province[item[14]].district[item[9]].sub_district =
  //                 {};
  //               countryModel.province[item[14]].district[item[9]].sub_district[
  //                 item[0]
  //               ] = {
  //                 sub_district_name: item[1],
  //                 sub_district_code: item[0],
  //                 district_uuid: null,
  //                 zipcode: item[5],
  //               };
  //               // console.log(
  //               //   "tambon: ",
  //               //   addTambon,
  //               //   " subdistrict: ",
  //               //   addsubDistrict,
  //               //   " district: ",
  //               //   addDistrict,
  //               //   " province: ",
  //               //   addProvince
  //               // );
  //             }
  //           } else {
  //             addDistrict++;
  //             addsubDistrict++;
  //             addTambon++;
  //             countryModel.province[item[14]].district = {};
  //             countryModel.province[item[14]].district[item[9]] = {
  //               district_code: item[8],
  //               district_name: item[9],
  //               province_uuid: null,
  //               is_active: true,
  //             };
  //             countryModel.province[item[14]].district[item[9]].sub_district =
  //               {};
  //             countryModel.province[item[14]].district[item[9]].sub_district[
  //               item[0]
  //             ] = {
  //               sub_district_name: item[1],
  //               sub_district_code: item[0],
  //               district_uuid: null,
  //               zipcode: item[5],
  //             };
  //             // console.log(
  //             //   "tambon: ",
  //             //   addTambon,
  //             //   " subdistrict: ",
  //             //   addsubDistrict,
  //             //   " district: ",
  //             //   addDistrict,
  //             //   " province: ",
  //             //   addProvince
  //             // );
  //           }
  //         } else {
  //           addProvince++;
  //           addDistrict++;
  //           addsubDistrict++;
  //           addTambon++;
  //           countryModel.province[item[14]] = {
  //             province_code: item[13],
  //             province_name: item[14],
  //             country_uuid: null,
  //             is_active: true,
  //           };
  //           countryModel.province[item[14]].district = {};
  //           countryModel.province[item[14]].district[item[9]] = {
  //             district_code: item[8],
  //             district_name: item[9],
  //             province_uuid: null,
  //             is_active: true,
  //           };
  //           countryModel.province[item[14]].district[item[9]].sub_district = {};
  //           countryModel.province[item[14]].district[item[9]].sub_district[
  //             item[0]
  //           ] = {
  //             sub_district_name: item[1],
  //             sub_district_code: item[0],
  //             district_uuid: null,
  //             zipcode: item[5],
  //           };
  //         }
  //       });
  //       console.log(
  //         "tambon: ",
  //         addTambon,
  //         " subdistrict: ",
  //         addsubDistrict,
  //         " district: ",
  //         addDistrict,
  //         " province: ",
  //         addProvince
  //       );
  //       createAddressTable(countryModel);
  //     } catch (e: any) {
  //       console.log("e", e);
  //       throw new Error(e.message);
  //     }
  //   });
  // } catch (e: any) {
  //   console.log("e", e);
  //   throw new Error(e.message);
  // }
};
let createAddressTable = (countryModel: any) => {
  createCountry(countryModel);
};
let createCountry = (countryModel: any) => {
  let conter = 0;
  let createProvinceError = 0;
  let createDistrictError = 0;
  let createSubDistrictError = 0;
  // pool
  //   .query(
  //     "INSERT INTO country_table ( country_code , country_name , is_active ) values ( '" +
  //       countryModel.country_code +
  //       "' , '" +
  //       countryModel.country_name +
  //       "' , true ) RETURNING *"
  //   )
  //   .then((countryResult) => {
  //     console.log("countryModel", countryResult.rows[0]);
  //     Object.keys(countryModel.province).forEach((province_index) => {
  //       const provinceModel = countryModel.province[province_index];
  //       console.log();
  //       pool
  //         .query(
  //           "INSERT INTO province_table ( province_code , province_name , country_uuid , is_active ) values ( '" +
  //             provinceModel.province_code +
  //             "' , '" +
  //             provinceModel.province_name +
  //             "' , '" +
  //             countryResult.rows[0].country_uuid +
  //             "' , true ) RETURNING *"
  //         )
  //         .then((provinceResult) => {
  //           if (countryModel.province[province_index].district) {
  //             Object.keys(
  //               countryModel.province[province_index].district
  //             ).forEach((district_index) => {
  //               const district_model =
  //                 countryModel.province[province_index].district[
  //                   district_index
  //                 ];
  //               pool
  //                 .query(
  //                   "INSERT INTO district_table ( district_code , district_name , province_uuid , is_active ) values ( '" +
  //                     district_model.district_code +
  //                     "' , '" +
  //                     district_model.district_name +
  //                     "', '" +
  //                     provinceResult.rows[0].province_uuid +
  //                     "' , true ) RETURNING *"
  //                 )
  //                 .then((districtResult) => {
  //                   if (
  //                     countryModel.province[province_index].district[
  //                       district_index
  //                     ].sub_district
  //                   ) {
  //                     Object.keys(
  //                       countryModel.province[province_index].district[
  //                         district_index
  //                       ].sub_district
  //                     ).forEach((sub_district_index) => {
  //                       const sub_districtModel =
  //                         countryModel.province[province_index].district[
  //                           district_index
  //                         ].sub_district[sub_district_index];
  //                       pool
  //                         .query(
  //                           "INSERT INTO sub_district_table ( sub_district_code , sub_district_name , district_uuid  , zipcode , is_active ) values ( '" +
  //                             sub_districtModel.sub_district_code +
  //                             "' , '" +
  //                             sub_districtModel.sub_district_name +
  //                             "', '" +
  //                             districtResult.rows[0].district_uuid +
  //                             "' , '" +
  //                             sub_districtModel.zipcode +
  //                             "', true ) RETURNING *"
  //                         )
  //                         .then((subDistrictResult) => {
  //                           conter = conter + 1;
  //                           console.log(
  //                             "All: " +
  //                               addTambon +
  //                               "  Current: " +
  //                               conter +
  //                               "  PError: " +
  //                               createProvinceError +
  //                               "  DError: " +
  //                               createDistrictError +
  //                               "  SDError: " +
  //                               createSubDistrictError
  //                           );
  //                         })
  //                         .catch((error) => {
  //                           createSubDistrictError++;
  //                           console.log("errror", error.message);
  //                         });
  //                     });
  //                   }
  //                 })
  //                 .catch((error) => {
  //                   createDistrictError++;
  //                   console.log("errror", error.message);
  //                 });
  //             });
  //           }
  //         })
  //         .catch((error) => {
  //           createProvinceError++;
  //           console.log("errror", error.message);
  //         });
  //     });
  //   });
};

module.exports = {
  create,
};

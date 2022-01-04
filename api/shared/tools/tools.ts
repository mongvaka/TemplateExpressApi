import { SearchParameter } from "../../system_model";

let getCondition = (req: any) => {
  console.log(req.body);
  try {
    const authorization = req.headers["authorization"].split(" ");
    const company_uuid = authorization[1];
    const branch_uuid = authorization[2];
    let condintionList: any = [];
    let operatorList: any = [];
    let sqlCommand =
      "where company_uuid = " +
      "'" +
      company_uuid +
      "'" +
      " AND branch_uuid = " +
      "'" +
      branch_uuid +
      "'";
    req.body.conditions.forEach((element: any) => {
      let columnName = element.columnName;
      let value: any = "'" + element.value + "'";
      if (element.value) {
        value = "'" + element.value + "'";
      } else {
        value = null;
      }
      let operator = element.operator;
      let equalityOperator = element.equalityOperator;
      let command = columnName + equalityOperator + value;
      let operatorStr = operator;
      operatorList.push(operatorStr);
      condintionList.push(command);
    });
    condintionList.forEach((item: any, index: any) => {
      sqlCommand = sqlCommand + operatorList[index] + item;
    });
    if (company_uuid == undefined) {
      return "";
    } else {
      return sqlCommand;
    }
  } catch (e: any) {
    throw new Error(e.message);
  }
};

let getConditionFieldChange = (req: any) => {
  try {
    const authorization = req.headers["authorization"].split(" ");
    const company_uuid = authorization[1];
    const branch_uuid = authorization[2];

    let sqlCommand =
      "where company_uuid = " +
      "'" +
      company_uuid +
      "'" +
      " AND branch_uuid = " +
      "'" +
      branch_uuid +
      "'";

    if (company_uuid == undefined) {
      return "";
    } else {
      return sqlCommand;
    }
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getConditionCompany = (req: any) => {
  try {
    const authorization = req.headers["authorization"].split(" ");
    const company_uuid = authorization[1];
    const branch_uuid = authorization[2];
    let condintionList: any = [];
    let operatorList: any = [];
    let sqlCommand = "where company_uuid = " + "'" + company_uuid + "'";
    req.body.conditions.forEach((element: any) => {
      let columnName = element.columnName;
      let value = "'" + element.value + "'";
      let operator = element.operator;
      let equalityOperator = element.equalityOperator;
      let command = columnName + " " + equalityOperator + " " + value;
      let operatorStr = " " + operator + " ";
      operatorList.push(operatorStr);
      condintionList.push(command);
    });
    let i = 0;
    condintionList.forEach((item: any) => {
      if (i == 0) {
        sqlCommand = sqlCommand + " " + item;
      } else {
        sqlCommand = sqlCommand + " " + operatorList[i] + " " + item;
      }

      i = i + 1;
    });
    if (company_uuid == undefined) {
      return "";
    } else {
      return sqlCommand;
    }
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getConditionOnly = (req: any) => {
  try {
    let condintionList: any = [];
    let operatorList: any = [];
    let sqlCommand = "where ";
    req.body.conditions.forEach((element: any) => {
      let columnName = element.columnName;
      let value = "'" + element.value + "'";
      let operator = element.operator;
      let equalityOperator = element.equalityOperator;
      let command = columnName + " " + equalityOperator + " " + value;
      let operatorStr = " " + operator + " ";
      operatorList.push(operatorStr);
      condintionList.push(command);
    });
    let i = 0;
    condintionList.forEach((item: any) => {
      if (i == 0) {
        sqlCommand = sqlCommand + " " + item;
      } else {
        sqlCommand = sqlCommand + " " + operatorList[i] + " " + item;
      }

      i = i + 1;
    });
    if (sqlCommand != "where ") {
      return sqlCommand;
    } else {
      return "";
    }
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let getConditionCompanyAndBranch = (req: any) => {
  try {
    const authorization = req.headers["authorization"].split(" ");
    const company_uuid = authorization[1];
    const branch_uuid = authorization[2];
    let sqlCommand =
      "where company_uuid = " +
      "'" +
      company_uuid +
      "' AND branch_uuid = '" +
      branch_uuid +
      "'";

    if (company_uuid == undefined) {
      return "";
    } else {
      return sqlCommand;
    }
  } catch (e: any) {
    throw new Error(e.message);
  }
};
let toDateCurrectFormat = (date: any) => {
  try {
    if (date == null) {
      return null;
    } else {
      date = date
        .toString()
        .replace("-", "/")
        .replace("-", "/")
        .replace(" ", "/");
      return stringToDate(date, "dd/MM/yyyy", "/");
    }
  } catch (e: any) {
    console.log("E :", e);
    throw new Error(e.message);
  }
};
function dateToString(_date: any) {
  var x = new Date(_date);
  var dd = x.getDate();
  var mm = x.getMonth() + 1;
  var yyyy = x.getFullYear();
  return dd + "/" + mm + "/" + yyyy;
}
function stringToDate(_date: any, _format: any, _delimiter: any) {
  var formatLowerCase = _format.toLowerCase();
  var formatItems = formatLowerCase.split(_delimiter);
  var dateItems = _date.split(_delimiter);
  var monthIndex = formatItems.indexOf("mm");

  var dayIndex = formatItems.indexOf("dd");
  var yearIndex = formatItems.indexOf("yyyy");
  var month = parseInt(dateItems[monthIndex]);
  month -= 1;
  var formatedDate = new Date(dateItems[yearIndex], month, dateItems[dayIndex]);
  return formatedDate;
}
function getSearchParameter(searchParam: any) {
  try {
    return JSON.parse(searchParam) as SearchParameter;
  } catch (e) {
    return searchParam;
  }
}
export default {
  getCondition,
  getConditionCompany,
  getConditionOnly,
  toDateCurrectFormat,
  dateToString,
  getConditionCompanyAndBranch,
  getConditionFieldChange,
  getSearchParameter,
};

let get_row_auth = (data_list: any) => {
  data_list.forEach((element: any) => {
    element["rowAuthorize"] = 4;
  });
};
export default { get_row_auth };

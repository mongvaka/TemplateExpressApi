export const thowThisError = (error: any) => {
  console.log("This Error : ", error);
  throw new Error(error);
};

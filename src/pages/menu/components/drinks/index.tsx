import { Typography } from "@mui/material";
import { useClassifyMenu } from "hooks";
import ListOfFoods from "../shared/ListOfFoods";

const Drinks = () => {
  const { data } = useClassifyMenu({ classification: "Drink" });
  return (
    <>
      <Typography>Drink</Typography>
      <ListOfFoods foods={data} />
    </>
  );
};
export default Drinks;

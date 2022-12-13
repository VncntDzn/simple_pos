import { Typography } from "@mui/material";
import { useClassifyMenu } from "hooks";
import ListOfFoods from "../shared/ListOfFoods";

const Desserts = () => {
  const { data } = useClassifyMenu({ classification: "Dessert" });
  return (
    <>
      <Typography>Desserts</Typography>
      <ListOfFoods foods={data} />
    </>
  );
};
export default Desserts;

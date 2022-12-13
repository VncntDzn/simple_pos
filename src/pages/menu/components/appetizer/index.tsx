import { Typography } from "@mui/material";
import { useClassifyMenu } from "hooks";
import ListOfFoods from "../shared/ListOfFoods";

const Appetizer = () => {
  const { data } = useClassifyMenu({ classification: "Appetizer" });
  return (
    <>
      <Typography>Appetizer</Typography>
      <ListOfFoods foods={data} />
    </>
  );
};
export default Appetizer;

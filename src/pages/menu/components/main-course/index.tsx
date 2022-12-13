import { Typography } from "@mui/material";
import { useClassifyMenu } from "hooks";
import ListOfFoods from "../shared/ListOfFoods";
const MainCourse = () => {
  const { data } = useClassifyMenu({ classification: "Main" });
  return (
    <>
      <Typography>Main Course</Typography>
      <ListOfFoods foods={data} />
    </>
  );
};
export default MainCourse;

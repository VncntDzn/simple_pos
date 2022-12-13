import { Typography } from "@mui/material";
import FoodMenu from "assets/data/menu.json";
import { useEffect, useState } from "react";
import { MenuProps } from "types";
import ListOfFoods from "../shared/ListOfFoods";
const MainCourse = () => {
  const [data, setData] = useState<MenuProps[]>([]);

  useEffect(() => {
    let classifiedMenu: MenuProps[] = [];
    FoodMenu.map((food: any) => {
      if (food.classification === "Main") {
        classifiedMenu.push(food);
      }
    });
    setData(classifiedMenu);
  }, []);
  return (
    <>
      <Typography>Main Course</Typography>
      <ListOfFoods foods={data} />
    </>
  );
};
export default MainCourse;

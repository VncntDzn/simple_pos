import { MenuProps } from "types";

import FoodMenu from "assets/data/menu.json";
import { useEffect, useState } from "react";

interface ClassificationProps {
  classification: "Main" | "Appetizer" | "Dessert" | "Drink";
}
const useClassifyMenu = ({ classification }: ClassificationProps) => {
  const [data, setData] = useState<MenuProps[]>([]);
  useEffect(() => {
    let classifiedMenu: MenuProps[] = [];
    FoodMenu.map((food: any) => {
      if (food.classification === classification) {
        classifiedMenu.push(food);
      }
    });
    setData(classifiedMenu);
  }, []);

  return {
    data,
  };
};

export default useClassifyMenu;

import { useEffect, useState } from "react";
import { MenuProps } from "types";
import FoodMenu from "assets/data/menu.json";

interface SearchFoodProps {
  id: number | string | undefined;
}
const useSearchFood = ({ id }: SearchFoodProps) => {
  const [food, setFood] = useState<MenuProps>();
  useEffect(() => {
    if (id) {
      setFood(() => FoodMenu.find(({ id }) => id === Number(id)));
    }
  }, [id]);

  return {
    food,
  };
};
export default useSearchFood;

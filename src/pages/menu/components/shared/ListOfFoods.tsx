import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MenuProps } from "types";
interface ListOfFoodProps {
  foods: MenuProps[];
}
const ListOfFoods = ({ foods }: ListOfFoodProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleNavigateToFood = () => {
    navigate("");
  };
  return (
    <Box display="flex" flexWrap="wrap" gap={2}>
      {foods.map(({ id, pictureUrl, name, price }: MenuProps) => (
        <Box
          onClick={handleNavigateToFood}
          key={id}
          component={Card}
          sx={{
            height: { xs: 150, lg: "fit-content" },
            width: { sm: "45vw", md: "48vw", lg: "47vw" },
            cursor: "pointer",
          }}
        >
          <CardMedia
            height="140"
            component="img"
            alt={name}
            image={require(`../../../../assets/images/menu/${pictureUrl}`)}
          />

          <CardContent
            sx={{
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <Typography gutterBottom variant="h5" color="white" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="white">
              ₱ {price}
            </Typography>
          </CardContent>
        </Box>
      ))}
    </Box>
  );
};

export default ListOfFoods;

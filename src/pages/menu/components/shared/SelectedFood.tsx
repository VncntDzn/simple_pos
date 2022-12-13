import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import FoodMenu from "assets/data/menu.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MenuProps } from "types";
const SelectedFood = () => {
  const params = useParams();
  const [food, setFood] = useState<MenuProps>();
  const theme = useTheme();
  useEffect(() => {
    if (params.id) {
      setFood(() => FoodMenu.find(({ id }) => id === Number(params.id)));
    }
  }, [params.id]);

  if (!food) return null;
  // display only if data is available
  return (
    <>
      <Typography>Menu Details</Typography>
      <Box
        key={food!.id}
        component={Card}
        sx={{
          height: { xs: 150, lg: "fit-content" },
          width: { sm: "45vw", md: "48vw", lg: "100%" },
          cursor: "pointer",
        }}
      >
        <CardMedia
          height="140"
          component="img"
          alt={food!.name}
          image={require(`../../../../assets/images/menu/${food!.pictureUrl}`)}
        />

        <CardContent
          sx={{
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <Typography gutterBottom variant="h5" color="white" component="div">
            {food!.name}
          </Typography>
          <Typography variant="body2" color="white">
            {food!.preparationTime} mins prep time
          </Typography>
          <Typography variant="body2" color="white">
            {food!.cookingTime} mins cooking time
          </Typography>
          <Typography variant="body2" color="white">
            ₱ {food!.price}
          </Typography>
        </CardContent>

        <CardActionArea
          sx={{
            display: "flex",
          }}
        >
          <Button>-</Button>
          <Typography>count</Typography>
          <Button>+</Button>
        </CardActionArea>
      </Box>
    </>
  );
};
export default SelectedFood;

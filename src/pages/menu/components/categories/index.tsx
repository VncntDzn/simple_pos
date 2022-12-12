import ChefRecommendationSVG from "./svg/recommend.svg";
import DessertSVG from "./svg/dessert.svg";
import AppetizerSVG from "./svg/appetizer.svg";
import DrinksSVG from "./svg/drinks.svg";
import MainSVG from "./svg/main.svg";
import { Box, Typography, useTheme } from "@mui/material";
const DATA = [
  {
    svg: ChefRecommendationSVG,
    name: "Add All Chef's Recommendation",
    path: "",
  },
  {
    svg: MainSVG,
    name: "Main Ccourse",
    path: "",
  },
  {
    svg: AppetizerSVG,
    name: "Appettizer",
    path: "",
  },
  {
    svg: DessertSVG,
    name: "Dessert",
    path: "",
  },
  {
    svg: DrinksSVG,
    name: "Drinks",
    path: "",
  },
];
const Categories = () => {
  const theme = useTheme();
  return (
    <>
      <Typography variant="h5">Categories</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: { sm: "space-between" },
          flexDirection: { xs: "column", sm: "row" },
          flexWrap: { sm: "wrap" },
          gap: "1rem",
        }}
      >
        {DATA.map(({ svg, name }) => (
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: "15rem",
              width: { sm: "45vw", md: "48vw" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: 2,
              borderRadius: "10px",
              cursor: "pointer",
            }}
            key={name}
          >
            <Box sx={{ height: { xs: 150, lg: 300 } }}>
              <img alt={name} src={svg} height={"100%"} />
            </Box>

            <Typography color="white">{name}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Categories;

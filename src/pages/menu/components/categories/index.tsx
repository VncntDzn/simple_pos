import { Box, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppetizerSVG from "./svg/appetizer.svg";
import DessertSVG from "./svg/dessert.svg";
import DrinksSVG from "./svg/drinks.svg";
import MainSVG from "./svg/main.svg";
import ChefRecommendationSVG from "./svg/recommend.svg";
const DATA = [
  {
    svg: ChefRecommendationSVG,
    name: "Add All Chef's Recommendation",
    path: "chef-recommendation",
  },
  {
    svg: MainSVG,
    name: "Main Course",
    path: "main-course",
  },
  {
    svg: AppetizerSVG,
    name: "Appetizer",
    path: "appetizer",
  },
  {
    svg: DessertSVG,
    name: "Dessert",
    path: "desserts",
  },
  {
    svg: DrinksSVG,
    name: "Drinks",
    path: "",
  },
];
const Categories = () => {
  const theme = useTheme();
  const navigate = useNavigate();
    const handleNavigation = ({ path }: { path: string }) => {
      navigate(`${path}`);
    };
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
        {DATA.map(({ svg, name, path }) => (
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: "15rem",
              width: { sm: "45vw", md: "48vw", lg: "47vw" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: 2,
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={() => handleNavigation({ path })}
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

import { Breadcrumbs as MuiBreadcrumbs, Link, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const [breadcrumb, setBreadcrumb] = useState("");

  useEffect(() => {
    setBreadcrumb(() => {
      const pathname = location.pathname;
      return pathname.substring(1);
    });
  }, [location]);
  return (
    <div role="presentation">
      <MuiBreadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography
          onClick={() => console.log(location)}
          color="text.primary"
          sx={{
            "::first-letter": {
              textTransform: "uppercase",
            },
          }}
        >
          {breadcrumb}
        </Typography>
      </MuiBreadcrumbs>
    </div>
  );
};

export default Breadcrumbs;

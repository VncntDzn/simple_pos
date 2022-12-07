import { Breadcrumbs as MuiBreadcrumbs, Link, Typography } from "@mui/material";
const Breadcrumbs = () => {
  return (
    <div role="presentation">
      <MuiBreadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </MuiBreadcrumbs>
    </div>
  );
};

Breadcrumbs.propTypes = {};

export default Breadcrumbs;

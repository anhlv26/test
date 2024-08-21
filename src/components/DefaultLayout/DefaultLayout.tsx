import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HeaderComponent from "~/components/HeaderComponent/HeaderComponent";
import NavbarComponent from "~/components/NavbarComponent/NavbarComponent";

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Box>
      <HeaderComponent />
      <Box>
        <Grid container>
          <Grid item md={2.4} sx={{height:"100%"}}>
            <NavbarComponent />
          </Grid>
          <Grid item md={9.6}>
            {children}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DefaultLayout;

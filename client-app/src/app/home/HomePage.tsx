import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `linear-gradient(
          135deg,
          rgb(24, 42, 115) 0%,
          rgb(33, 138, 174) 69%,
          rgb(32, 167, 172) 89%
  )`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#FFFFFF",
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="./asset/logo.png"
            alt="logo"
            style={{ height: "40px", width: "40px" }}
          />
          &nbsp; &nbsp;
          <Typography sx={{ fontSize: "50px", fontWeight: "500" }}>
            Reactivities
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
            Welcome To Reactivities
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "#FFFFFF",
              borderColor: "#FFFFFF",
              "&:hover": {
                borderColor: "#FFFFFF",
              },
            }}
            onClick={() => navigate("/activities")}
          >
            Take me to Activities!
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;

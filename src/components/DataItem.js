import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
function DataItem({ el }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card sx={{ maxWidth: 300, marginTop: "20px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={el.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ overflow: "hidden" }}
          >
            {el.title.slice(1, 20)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {el.name}
          </Typography>
        </CardContent>
        <div>
          <Button onClick={handleOpen}>Learn more..</Button>
          <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box sx={style} style={{ textAlign: "center" }}>
              <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="h2"
              >
                {el.name}
              </Typography>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                {el.title}
              </Typography>
              <img src={el.img} height="300" />
            </Box>
          </Modal>
        </div>
      </CardActionArea>
    </Card>
  );
}
export default DataItem;

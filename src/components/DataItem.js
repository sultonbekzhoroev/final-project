import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function DataItem({ el }) {
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
            {el.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {el.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default DataItem;

import React from "react";
import {
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
  Box,
  Link,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AutoAwesomeSharpIcon from "@mui/icons-material/AutoAwesomeSharp";
import "../App.css";

type CardData = {
  title: string;
  description: string;
  img: string;
  link: string;
};

type CardListProps = {
  items: CardData[];
  width?: number;
};

const CardList: React.FC<CardListProps> = ({ items, width }) => {
  const theme = useTheme();

  return (
    <Container>
      <Grid container spacing={4} justifyContent="center">
        {items.map((item, index) => (
          <Grid
            item
            key={index}
            xs={48}
            sm={24}
            md={16}
            lg={12}
            style={{ width: width }}
          >
            <Box
              sx={{
                border: 2,
                borderRadius: 1.3,
                borderColor: "transparent",
                transition:
                  "transform 0.2s ease-in-out, border-color 0.2s ease-in-out",
                "&:hover": {
                  borderColor: theme.palette.primary.main,
                  transform: "scale(1.02)",
                },
              }}
              className="card card-hidden"
            >
              <Link href={item.link} underline="none">
                <Card sx={{ textDecoration: "none" }}>
                  <CardContent>
                    <Grid container spacing={0}>
                      <Grid item xs={8}>
                        <Grid container>
                          <Grid item xs={6} alignSelf="left">
                            {" "}
                            <Typography
                              align="left"
                              variant="h5"
                              component="div"
                              color="textPrimary"
                              gutterBottom
                              sx={{ paddingLeft: "48px" }}
                            >
                              {item.title}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <AutoAwesomeSharpIcon
                              sx={{
                                color: theme.palette.primary.main,
                                transform: "scale(1.4)",
                              }}
                            />
                          </Grid>
                        </Grid>
                        <br />
                        {item.description.split("\n").map((line, index) => (
                          <Typography
                            key={index}
                            align="left"
                            variant="body1"
                            component="p"
                            sx={{ paddingLeft: "48px" }}
                          >
                            {line}
                            <br />
                          </Typography>
                        ))}
                      </Grid>
                      <Grid item xs={4}>
                        <img
                          src={item.img}
                          loading="lazy"
                          alt={item.title}
                          style={{ width: "100%", height: "auto" }}
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://via.placeholder.com/150";
                            e.currentTarget.alt = "Placeholder image";
                          }}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardList;

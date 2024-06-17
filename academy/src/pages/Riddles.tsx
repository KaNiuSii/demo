import React, { useState } from "react";
import {
  Typography,
  Container,
  Box,
  keyframes,
  Pagination,
} from "@mui/material";
import CardList from "../components/CardList";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const cardItems = [
  {
    title: "Baazar Riddle",
    description:
      "Description is hard to make :(\n\n\nDolorem ipsum shakalaka giga sraka.\nMany many uga buga.",
    img: "https://via.placeholder.com/300x300",
    link: "/riddle",
  },
  {
    title: "No Riddle",
    description: "Theres no more riddles.\n\n\nIt's a demo you dumb ass",
    img: "https://via.placeholder.com/300x300",
    link: "",
  },
];

const Riddles: React.FC = () => {
  const [pageNum, setPageNum] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(cardItems.length / itemsPerPage);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPageNum(value);
  };

  const paginatedItems = cardItems.slice(
    (pageNum - 1) * itemsPerPage,
    pageNum * itemsPerPage
  );

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        mt: 4,
      }}
    >
      <Box
        sx={{
          animation: `${fadeIn} 1s ease-out`,
          animationDelay: "0.3s",
          animationFillMode: "forwards",
          opacity: 0,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Riddles Page
        </Typography>
      </Box>
      <Box
        sx={{
          animation: `${fadeIn} 1s ease-out`,
          animationDelay: "0.6s",
          animationFillMode: "forwards",
          opacity: 0,
          mt: 2,
        }}
      >
        <Pagination
          count={totalPages}
          page={pageNum}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
          size="large"
        />
      </Box>
      <Box
        key={pageNum}
        sx={{
          animation: `${fadeIn} 1s ease-out`,
          animationDelay: "0.6s",
          animationFillMode: "forwards",
          opacity: 0,
          mt: 2,
        }}
      >
        <CardList items={paginatedItems} width={420} />
      </Box>
      <Box
        sx={{
          animation: `${fadeIn} 1s ease-out`,
          animationDelay: "0.6s",
          animationFillMode: "forwards",
          opacity: 0,
          mt: 2,
        }}
      >
        <Pagination
          count={totalPages}
          page={pageNum}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
          size="large"
        />
      </Box>
    </Container>
  );
};

export default Riddles;

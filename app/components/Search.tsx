"use client";
import { Box, Card, Grid, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { Course } from "../types/courses";
import { removeAccent } from "../utils/utils";
import { styled } from "@mui/material/styles";
import { CourseCard } from "./Card";

type SearchPageProps = {
  data: Course[];
};
export const SearchList = ({ data }: SearchPageProps) => {
  // console.log("data", data);
  const allData = data;
  const [filteredData, setFilteredData] = useState(data);
  const onChangeSearch = (event: any) => {
    const searchData = event.target.value;
    if (searchData.length <= 3) {
      setFilteredData(allData);
      return;
    }
    const cleanData = removeAccent(searchData).toUpperCase().split(" ");
    // console.log("clean data", cleanData);
    setFilteredData(
      allData.filter((item: any) => {
        const itemValues = Object.values(item).join(" ").toUpperCase();
        // console.log("itemValues", itemValues);
        return cleanData.every((params) => itemValues.includes(params));
      })
    );
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Grid container spacing={1} sx={{ width: "fullWidth" }} columns={16}>
      <Grid item xs={12} border={1}>
        <Box component={"form"} noValidate width={"100%"}>
          <TextField
            onChange={onChangeSearch}
            variant="outlined"
            label="Busca aquí"
            fullWidth
            sx={{
              backgroundColor: "white",
              width: "80%",
              m: 3,
              borderRadius: 10,
            }}
          />
        </Box>
        {filteredData.length == 0 ? (
          <div> No hay cursos existentes</div>
        ) : (
          filteredData.map((item: any, i: any) => (
            <CourseCard course={item} key={i} />
          ))
        )}
      </Grid>
      <Grid
        item
        xs={4}
        border={1}
        sx={{
          position: "fixed",
          zIndex: 1000,
          left: "75%",
        }}
      >
        <Card>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como
          texto de relleno en documentos electrónicos, quedando esencialmente
          igual al original. Fue popularizado en los 60s con la creación de las
          hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más
          recientemente con software de autoedición, como por ejemplo Aldus
          PageMaker, el cual incluye versiones de Lorem Ipsum.
        </Card>
      </Grid>
    </Grid>
  );
};

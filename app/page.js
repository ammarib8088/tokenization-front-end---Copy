import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Cards from "@/components/cards/Cards";

function PropertyFilter() {
  return (
    <Container
      className="properties-container"
      sx={{ padding: "20px 0px", textAlign: "left", width: "100%" }}
    >
      <Typography
        variant="h4"
        sx={{
          mx: 1,
          color: "#165C7C",
          fontWeight: "700",
          mb: 2,
        }}
      >
        Properties
      </Typography>
      <div className="form-control-div">
        <div>
          <FormControl sx={{ my: 1, mx: 1, minWidth: 200, flexBasis: "146px" }}>
            <InputLabel sx={{ color: "white" }} htmlFor="apartment-select">
              Apartments
            </InputLabel>
            <Select
              defaultValue=""
              id="apartment-select"
              label="Grouping"
              sx={{
                backgroundColor: "#0079B0",
                color: "white",
                borderRadius: "15px",
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ my: 1, mx: 1, minWidth: 200, flexBasis: "146px" }}>
            <InputLabel htmlFor="penthouse-select">Penthouses</InputLabel>
            <Select
              defaultValue=""
              id="penthouse-select"
              label="Grouping"
              sx={{ borderRadius: "15px" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ my: 1, mx: 1, minWidth: 200, flexBasis: "146px" }}>
            <InputLabel htmlFor="villa-select">Villas</InputLabel>
            <Select
              defaultValue=""
              id="villa-select"
              label="Grouping"
              sx={{ borderRadius: "15px" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="widgets-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            cursor="pointer"
          >
            <path
              d="M5 14C4.73478 14 4.48043 13.8946 4.29289 13.7071C4.10536 13.5196 4 13.2652 4 13V5.002C4 4.73678 4.10536 4.48243 4.29289 4.29489C4.48043 4.10736 4.73478 4.002 5 4.002H13C13.2652 4.002 13.5196 4.10736 13.7071 4.29489C13.8946 4.48243 14 4.73678 14 5.002V13C14 13.2652 13.8946 13.5196 13.7071 13.7071C13.5196 13.8946 13.2652 14 13 14H5ZM19 14C18.7348 14 18.4804 13.8946 18.2929 13.7071C18.1054 13.5196 18 13.2652 18 13V5.002C18 4.73678 18.1054 4.48243 18.2929 4.29489C18.4804 4.10736 18.7348 4.002 19 4.002H26.998C27.2632 4.002 27.5176 4.10736 27.7051 4.29489C27.8926 4.48243 27.998 4.73678 27.998 5.002V13C27.998 13.2652 27.8926 13.5196 27.7051 13.7071C27.5176 13.8946 27.2632 14 26.998 14H19ZM5 28C4.73478 28 4.48043 27.8946 4.29289 27.7071C4.10536 27.5196 4 27.2652 4 27V19C4 18.7348 4.10536 18.4804 4.29289 18.2929C4.48043 18.1054 4.73478 18 5 18H13C13.2652 18 13.5196 18.1054 13.7071 18.2929C13.8946 18.4804 14 18.7348 14 19V27C14 27.2652 13.8946 27.5196 13.7071 27.7071C13.5196 27.8946 13.2652 28 13 28H5ZM19 28C18.7348 28 18.4804 27.8946 18.2929 27.7071C18.1054 27.5196 18 27.2652 18 27V19C18 18.7348 18.1054 18.4804 18.2929 18.2929C18.4804 18.1054 18.7348 18 19 18H26.998C27.2632 18 27.5176 18.1054 27.7051 18.2929C27.8926 18.4804 27.998 18.7348 27.998 19V27C27.998 27.2652 27.8926 27.5196 27.7051 27.7071C27.5176 27.8946 27.2632 28 26.998 28H19Z"
              fill="#888888"
            />
          </svg>{" "}
        </div>
      </div>
      <Cards />
    </Container>
  );
}

export default PropertyFilter;

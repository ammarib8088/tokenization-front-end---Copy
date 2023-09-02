import React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const cardData = [
  {
    location: "Dubai",
    image: "./card1.png",
    title: "Studio in Central Park, DIFC",
    marketValue: "AED 980 000",
    fractionPrice: "110 USD",
    availableFractions: 50,
    propertyValuePercentage: "41%",
    propertyValue: "21%",
    yieldPercentage: "20%",
  },
  {
    location: "Dubai",
    image: "./card2.png",
    title: "Villa in Dubai Marina",
    marketValue: "AED 980 000",
    fractionPrice: "110 USD",
    availableFractions: 50,
    propertyValuePercentage: "41%",
    propertyValue: "21%",
    yieldPercentage: "20%",
  },
  {
    location: "Miami",
    image: "./card3.png",
    title: "Villa Miami Downtown",
    marketValue: "AED 980 000",
    fractionPrice: "110 USD",
    availableFractions: 50,
    propertyValuePercentage: "41%",
    propertyValue: "21%",
    yieldPercentage: "20%",
  },
  {
    location: "Dubai",
    image: "./card4.png",
    title: "Villa Miami Downtown",
    marketValue: "AED 980 000",
    fractionPrice: "110 USD",
    availableFractions: 50,
    propertyValuePercentage: "41%",
    propertyValue: "21%",
    yieldPercentage: "20%",
  },
  {
    location: "Dubai",
    image: "./card5.png",
    title: "Villa Miami Downtown",
    marketValue: "AED 980 000",
    fractionPrice: "110 USD",
    availableFractions: 50,
    propertyValuePercentage: "41%",
    propertyValue: "21%",
    yieldPercentage: "20%",
  },
  {
    location: "Dubai",
    image: "./card6.png",
    title: "Villa Miami Downtown",
    marketValue: "AED 980 000",
    fractionPrice: "110 USD",
    availableFractions: 50,
    propertyValuePercentage: "41%",
    propertyValue: "21%",
    yieldPercentage: "20%",
  },
  

  // Diğer kartlar buraya eklenir...
];

export default function MediaCard() {
  return (
    <Container
    className="properties-cards-container"
    sx={{
      padding: "20px 0px",
      textAlign: "left",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: "10px",
    }}
  >
      {cardData.map((card, index) => (
        <div key={index} style={{ flex: "1 0 calc(33.3333% - 10px)", marginBottom: "10px" }}>
          <Card
            sx={{
              maxWidth: 320,
              maxHeight: "100%",
              padding: "20px",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardMedia
              sx={{ height: "auto", width: "100%", borderRadius: "20px" }}
              component="img"
              image={card.image}
              alt="green iguana"
            />
            <CardContent>
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  margin: "10px 0px",
                  flexShrink: 0,
                }}
              >
                <svg
                style={{paddingBottom: "5px"}}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="22"
                  
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M10.4849 1.69282C12.3034 1.69282 14.0475 2.41524 15.3334 3.70117C16.6194 4.98709 17.3418 6.73117 17.3418 8.54974C17.3418 11.4472 15.3058 14.6049 11.2866 18.0566C11.0631 18.2486 10.7782 18.354 10.4836 18.3537C10.1889 18.3535 9.90418 18.2475 9.68103 18.0552L9.41519 17.8245C5.57392 14.4629 3.62796 11.3825 3.62796 8.54974C3.62796 6.73117 4.35038 4.98709 5.6363 3.70117C6.92222 2.41524 8.66631 1.69282 10.4849 1.69282ZM10.4849 2.74773C8.94609 2.74773 7.47032 3.35901 6.38224 4.4471C5.29415 5.53519 4.68287 7.01095 4.68287 8.54974C4.68287 11.0126 6.47481 13.8503 10.1079 17.0291L10.3702 17.2563C10.4021 17.2837 10.4428 17.2988 10.4849 17.2988C10.5269 17.2988 10.5676 17.2837 10.5995 17.2563C14.4084 13.9846 16.2869 11.071 16.2869 8.54974C16.2869 7.78781 16.1368 7.03334 15.8452 6.3294C15.5536 5.62547 15.1263 4.98586 14.5875 4.4471C14.0487 3.90833 13.4091 3.48096 12.7052 3.18938C12.0013 2.8978 11.2468 2.74773 10.4849 2.74773ZM10.4849 5.91246C11.1843 5.91246 11.8551 6.19032 12.3497 6.6849C12.8443 7.17949 13.1221 7.85029 13.1221 8.54974C13.1221 9.24918 12.8443 9.91998 12.3497 10.4146C11.8551 10.9092 11.1843 11.187 10.4849 11.187C9.78542 11.187 9.11462 10.9092 8.62004 10.4146C8.12545 9.91998 7.8476 9.24918 7.8476 8.54974C7.8476 7.85029 8.12545 7.17949 8.62004 6.6849C9.11462 6.19032 9.78542 5.91246 10.4849 5.91246ZM10.4849 6.96737C10.0652 6.96737 9.66272 7.13408 9.36597 7.43083C9.06922 7.72759 8.90251 8.13007 8.90251 8.54974C8.90251 8.9694 9.06922 9.37188 9.36597 9.66864C9.66272 9.96539 10.0652 10.1321 10.4849 10.1321C10.9045 10.1321 11.307 9.96539 11.6038 9.66864C11.9005 9.37188 12.0672 8.9694 12.0672 8.54974C12.0672 8.13007 11.9005 7.72759 11.6038 7.43083C11.307 7.13408 10.9045 6.96737 10.4849 6.96737Z"
                    fill="#6B6B6B"
                  />
                </svg>
                <div>
                  <p style={{fontWeight: "300", fontSize: "13px"}}>{card.location}</p>
                </div>
              </div>
              <p style={{color:"#141414", fontSize: "18px", fontWeight: "500", margin: "5px 0px "}}>{card.title}</p>
              <div
                className="latest-market-div"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ margin: "5px" }}>
                  <Typography color="text.secondary">
                    <h5 style={{ fontWeight: "30px" }}>
                      Latest Market Value :
                    </h5>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="10"
                      viewBox="0 0 10 5"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_23_190)">
                        <path
                          d="M1.37901 3.94248H8.53877C8.61126 3.94236 8.68232 3.93237 8.74429 3.91356C8.80626 3.89476 8.8568 3.86786 8.89048 3.83577C8.92415 3.80367 8.93968 3.76759 8.93539 3.73141C8.9311 3.69522 8.90716 3.66031 8.86614 3.63043L5.28625 1.04496C5.13789 0.937762 4.78069 0.937762 4.63193 1.04496L1.05205 3.63043C1.01061 3.66025 0.986311 3.69518 0.981789 3.73142C0.977267 3.76766 0.992695 3.80383 1.0264 3.836C1.0601 3.86816 1.11079 3.89509 1.17295 3.91387C1.23512 3.93264 1.30639 3.94253 1.37901 3.94248Z"
                          fill="#4ECB71"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_23_190">
                          <rect
                            width="9.54635"
                            height="4.77318"
                            fill="white"
                            transform="translate(0.18573 0.163712)"
                          />
                        </clipPath>
                      </defs>
                    </svg>{" "}
                    <h3 style={{ margin: "0px", color: "#165C7C" }}>
                      {card.marketValue}
                    </h3>
                  </Typography>
                  <Typography color="text.secondary">
                    <p> Fractions price :</p>
                    <p
                      style={{
                        margin: "5px 0px",
                        color: "#165C7C",
                        fontWeight: "700",
                      }}
                    >
                      {card.fractionPrice}
                    </p>
                  </Typography>
                </div>
                <div style={{ flexGrow: 1 }}>
                  <hr
                    style={{
                      height: "150px",
                      width: "1px",
                      backgroundColor: "#9c9c9c",
                      border: "none",
                    }}
                  />
                </div>
                <div style={{ padding: "3px" }}>
                  <Typography>
                    <p>Available Fractions :</p>
                    <p
                      style={{
                        color: "#165C7C",
                        fontWeight: "700",
                      }}
                    >
                      {card.availableFractions}
                    </p>
                  </Typography>
                </div>
              </div>
              <hr
                style={{
                  height: "1px",
                  width: "100%",
                  backgroundColor: "#9c9c9c",
                  margin: "5px 0px",
                  border: "none",
                }}
              />
            </CardContent>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                margin: "10px 0px",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  display: "grid",
                  gap: "5px",
                  fontSize: "10px",
                }}
              >
                <p>
                  <b>{card.propertyValuePercentage}</b>
                </p>
                <p>
                  <b>{card.propertyValue}</b> Property Value
                </p>
                <p>
                  <b>{card.yieldPercentage}</b> Yield (rent)
                </p>
              </div>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "right",
                  flexShrink: 0,
                }}
              >
                <Button
                  sx={{
                    backgroundColor: "#1A4A60",
                    color: "#ffff",
                    width: "134.732px",
                    height: "41.456px",
                    borderRadius: "9px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Buy &nbsp;
                  <KeyboardArrowDownIcon />
                </Button>
              </CardActions>
            </div>
            </Card>
        </div>
      ))}
    </Container>
  );
}

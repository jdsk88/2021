import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_ITEMS,
  SET_ITEMS,
  DELETE_ITEMS,
  CREATE_ITEM_DESC,
  DELETE_ITEM_DESC,
  GET_ITEMS_DESC,
  DELETE_ALL_ITEM_DESC,
} from "store/actions";
import { NativeSelect, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

function PricingContent() {
  const dispatch = useDispatch();
  const tiers = useSelector((state) => state.pricing.cards);
  const descriptions = useSelector((state) => state.pricing.descriptions);
  React.useEffect(() => {
    dispatch({ type: GET_ITEMS });
    dispatch({ type: GET_ITEMS_DESC });
  }, [dispatch]);

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const options = [
    { value: "Normal", label: "Normal" },
    { value: "Pro", label: "Pro" },
  ];

  const [descrs, setDescrs] = React.useState({ id: 0, value: "" });
  const handleDescrs = (event) => {
    const value = event.currentTarget.value;
    setDescrs({ id: getRandomIntInclusive(0, 9), value: value });
  };
  const handleAddDesctription = (event) => {
    event.preventDefault();
    dispatch({ type: CREATE_ITEM_DESC, payload: descrs });
    dispatch({ type: GET_ITEMS_DESC });
    document.getElementById("description").value = "";
  };

  const validationSchema = yup.object({
    title: yup.string().required("title is required"),
    subheader: yup
      .string()
      .min(5, "subheader should be of minimum 5 characters length")
      .max(25, "subheader should be of minimum 25 characters length")
      .required("subheader is required"),
    icon: yup.string().required("icon is required"),
    price: yup
      .number()
      .min(1, "price must be more than 1")
      .max(999999999)
      .required("price is required"),
    peroid: yup.string().required("peroid is required"),
  });

  const initialValues = {
    title: "",
    subheader: "",
    icon: "",
    price: 0,
    peroid: "",
    descriptions: descriptions,
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit: () => {
      const newTier = {
        id: getRandomIntInclusive(0, 999999999),
        title: formik.values.title,
        subheader: formik.values.subheader,
        price: formik.values.price,
        icon: formik.values.icon,
        peroid: formik.values.peroid,
        description: descriptions,
        buttonText: "Contact us",
        buttonVariant: "contained",
      };
      dispatch({ type: SET_ITEMS, payload: newTier });
      dispatch({ type: DELETE_ALL_ITEM_DESC });
      formik.resetForm();
      Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );
    },
  });

  return (
    <>
      <Container maxWidth="xl" component="main" sx={{ pt: 2, pb: 3, mt: 1 }}>
        <Grid container spacing={5} alignItems="flex-end">
          <Grid item xs={12} sm={12} md={12}>
            <form onSubmit={formik.handleSubmit}>
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      mt: 2,
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                    }}
                  >
                    <NativeSelect
                      sx={{ width: "80%" }}
                      id="title"
                      name="title"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.title}
                    >
                      <option value={""}>Version (default: Normal)</option>

                      {options.map((option, i) => (
                        <option key={option + i} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </NativeSelect>

                    <NativeSelect
                      sx={{ width: "20%" }}
                      id="icon"
                      name="icon"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.icon}
                    >
                      <option value={""}>*</option>
                      {["📞", "⭐"].map((option, i) => (
                        <option key={option + i} value={option}>
                          {option}
                        </option>
                      ))}
                    </NativeSelect>
                  </Box>
                  <TextField
                    sx={{ mt: 2 }}
                    fullWidth
                    id="subheader"
                    name="subheader"
                    variant={"standard"}
                    placeholder="About product short"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.subheader &&
                      Boolean(formik.errors.subheader)
                    }
                    helperText={
                      formik.touched.subheader && formik.errors.subheader
                    }
                  />

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <TextField
                      fullWidth
                      id="price"
                      name="price"
                      type={"number"}
                      variant={"standard"}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      defaultValue={formik.values.price}
                      placeholder="Price:"
                      error={
                        formik.touched.price && Boolean(formik.errors.price)
                      }
                      helperText={formik.touched.price && formik.errors.price}
                    />
                    <NativeSelect
                      id="peroid"
                      name="peroid"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      defaultValue={formik.values.peroid}
                    >
                      {["year", "month", "day"].map((option, i) => (
                        <option key={option + i} value={option}>
                          {option}
                        </option>
                      ))}
                    </NativeSelect>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                    }}
                  >
                    <TextField
                      sx={{ width: "90%" }}
                      id="description"
                      name="description"
                      type={"text"}
                      variant={"standard"}
                      onChange={(e) => handleDescrs(e)}
                      placeholder="Descritpions:"
                    />
                    <button
                      style={{ width: "10%" }}
                      onClick={(e) => {
                        handleAddDesctription(e);
                      }}
                    >
                      +
                    </button>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    {descriptions &&
                      descriptions.map((description, i) => (
                        <Box
                          key={"box_" + description.id + i}
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                          }}
                        >
                          <Typography
                            style={{ width: "5%" }}
                            key={"id_" + description.id + i}
                          >
                            {description.id}
                          </Typography>
                          <Typography
                            style={{ width: "85%" }}
                            key={"value=" + description.id + i}
                          >
                            {description.value}
                          </Typography>
                          <button
                            style={{
                              width: "10%",
                            }}
                            onClick={(e) => {
                              e.preventDefault();
                              dispatch({
                                type: DELETE_ITEM_DESC,
                                payload: description,
                              });
                              dispatch({ type: GET_ITEMS_DESC });
                            }}
                          >
                            🗑️
                          </button>
                        </Box>
                      ))}
                  </Box>
                </CardContent>
                <CardActions>
                  <Button type="submit" fullWidth variant="contained">
                    add
                  </Button>
                </CardActions>
              </Card>
            </form>
          </Grid>

          {tiers.map((tier, i) => (
            <Grid
              item
              key={tier.title + i}
              xs={12}
              sm={tier.title === "Normal" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={
                    tier.title === "Pro" ? (
                      <>
                        <p>{tier.icon} </p>
                        <Button
                          onClick={() => {
                            dispatch({ type: DELETE_ITEMS, payload: tier });
                            dispatch({ type: GET_ITEMS });
                          }}
                        >
                          delete
                        </Button>
                      </>
                    ) : (
                      <Button
                        onClick={() => {
                          dispatch({ type: DELETE_ITEMS, payload: tier });
                          dispatch({ type: GET_ITEMS });
                        }}
                      >
                        delete
                      </Button>
                    )
                  }
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                    >
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line, i) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line.id + i}
                      >
                        {line.value}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default function Pricing() {
  return <PricingContent />;
}

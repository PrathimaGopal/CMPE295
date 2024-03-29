import React from 'react';
import { useState,setState } from 'react';
import { useJumboApp } from "@jumbo/hooks";
import {Card, CardContent, TextField, Typography} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Div from "@jumbo/shared/Div";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {ASSET_IMAGES} from "app/utils/constants/paths";
import {getAssetPath} from "app/utils/appHelpers";
import SocialIconsButton from "./components/SocialIconsButton";
import AddressComponent from "./components/AddressComponent";
import PhoneDetailComponent from "./components/PhoneDetailComponent";
import EmailComponent from "./components/EmailComponent";
import { LAYOUT_NAMES } from "../../../layouts/layouts";
import Navbar from '../Navbar/Navbar';
import emailjs from "@emailjs/browser";

const ContactUs = () => {

  const defaultValues = {
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    message: "",
  };

  const [form, setForm] = useState(defaultValues);

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(e.target);
  };

  const sendEmail = (e) => {
    console.log("send email");
    e.preventDefault();
    emailjs
      .sendForm(
        "service_idecnky",
        "template_om6rscl",
        e.target,
        "Jv9WKlhF4-NEwIKgR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      setForm(defaultValues);
  };

    const { setActiveLayout } = useJumboApp();

    React.useEffect(() => {
    setActiveLayout(LAYOUT_NAMES.SOLO_PAGE);
    });

    return (
      <React.Fragment>
        <Navbar />
        <br />
        <form onSubmit={sendEmail}>
          <Div style={{ marginRight: 6 + "em", marginLeft: 6 + "em" }}>
            <Card sx={{ display: "flex", mb: 3.5 }}>
              <Div sx={{ display: "flex", flexDirection: "column", flex: "1" }}>
                <CardContent>
                  <Typography variant="h6" color={"text.secondary"}>
                    Send Message
                  </Typography>
                  <Typography component={"h2"} variant="h1" mb={3}>
                    Let's talk
                  </Typography>
                  <Box sx={{ mx: -1, "& .MuiFormControl-root:not(.MuiTextField-root)": { p: 1, mb: 2, width: { xs: "100%", sm: "50%" },},
                      "& .MuiFormControl-root.MuiFormControl-fluid": { width: "100%",}, }}
                    autoComplete="off"
                  >
                    <FormControl>
                      <TextField
                        fullWidth
                        id="firstname"
                        name="firstname"
                        label="First Name"
                        placeholder="First name"
                        onChange={updateForm}
                        value={form.firstname}
                        required
                      />
                    </FormControl>
                    <FormControl>
                      <TextField
                        fullWidth
                        id="lastname"
                        name="lastname"
                        label="Last Name"
                        placeholder="Last name"
                        onChange={updateForm}
                        value={form.lastname}
                        required
                      />
                    </FormControl>
                    <FormControl>
                      <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        placeholder="abc@abc.com"
                        onChange={updateForm}
                        value={form.email}
                        required
                      />
                    </FormControl>
                    <FormControl>
                      <TextField
                        fullWidth
                        id="phoneno"
                        name="phone"
                        label="Phone No."
                        placeholder="1234567890"
                        onChange={updateForm}
                        value={form.phone}
                        required
                      />
                    </FormControl>
                    <FormControl className="MuiFormControl-fluid">
                      <TextField
                        fullWidth
                        id="help"
                        name="message"
                        multiline
                        rows={4}
                        label="How can we help you?"
                        placeholder="Enter message"
                        onChange={updateForm}
                        value={form.message}
                        required
                      />
                    </FormControl>
                    <Div sx={{ mx: 1 }}>
                      <Button type="submit" variant={"contained"}>Submit</Button>
                    </Div>
                  </Box>
                </CardContent>
              </Div>
              <CardMedia
                component="img"
                sx={{
                  flexShrink: 0,
                  flexBasis: "30%",
                  display: { xs: "none", md: "block" },
                }}
                image={getAssetPath(
                  `${ASSET_IMAGES}/apps/contactus.jpg`,
                  "640x920"
                )}
                alt="Contact Us"
              />
            </Card>

            <Grid container spacing={3.75} mb={3.5}>
              <Grid item xs={12} sm={6} md={4}>
                <AddressComponent />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <PhoneDetailComponent />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <EmailComponent />
              </Grid>
            </Grid>
            <SocialIconsButton />
          </Div>
        </form>
      </React.Fragment>
    );
};

export default ContactUs;

"use client";
import React, { useState } from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { gql, useMutation } from "@apollo/client";

const MUTATION_QUERY = gql`
  mutation SaveContactForm($input: ContactFormInput) {
    saveContactForm(input: $input)
  }
`;

const ContactContainer = styled(Box)(({ theme }) => ({
  padding: "80px 0",
  minHeight: "600px",
  background:theme.palette.common.white,
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  maxWidth: "1200px",
}));

const HeaderSection = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(6),
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(4),
  },
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontSize: "48px",
  fontWeight: 500,
  color: theme.palette.primary.main,
  lineHeight: "120%",
  letterSpacing: 0,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    fontSize: "44px",
    textAlign: "left",
    lineHeight: "130%",
    letterSpacing: "-2%",
    fontStyle: "medium",
  },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 400,
  color: theme.palette.text.secondary,
  lineHeight: "26px",
  letterSpacing: 0,
  margin: "0 auto",
  verticalAlign: "middle",
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "80px",
  alignItems: "flex-start",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    gap: "40px",
  },
}));

const LeftSection = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

const RightSection = styled(Box)(({ theme }) => ({}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 600,
  color: theme.palette.primary.main,
  lineHeight: "120%",
  letterSpacing: 0,
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
    textAlign: "left",
    lineHeight: "30px",
    letterSpacing: 0,
    verticalAlign: "middle",
    marginBottom: theme.spacing(2),
    fontWeight: 500,
    fontStyle: "medium",
  },
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    justifyContent: "flex-start",
  },
}));

const ContactIcon = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(2),
  color: theme.palette.primary.main,
  marginTop: "2px",
  [theme.breakpoints.down("md")]: {
    marginRight: theme.spacing(1),
  },
}));

const ContactText = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 400,
  color: theme.palette.primary.main,
  lineHeight: "22px",
  letterSpacing: 0,
  textAlign: "left",
}));

const FormWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
    borderRadius: "8px",
    "& fieldset": {
      borderColor: "#E0E0E0",
    },
    "&:hover fieldset": {
      borderColor: "#BDBDBD",
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
  "& .MuiInputLabel-root": {
    color: theme.palette.text.secondary,
  },
}));

const SendButton = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: "1px",
  padding: "12px 24px",
  fontSize: "14px",
  fontWeight: 500,
  width: 150,
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  "& .MuiButton-endIcon": {
    marginLeft: theme.spacing(1),
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

interface FormData {
  firstName: string;
  email: string;
  note: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    email: "",
    note: "",
  });

  const [SaveContactForm, { loading }] = useMutation(MUTATION_QUERY, {
    onCompleted: () => {
      setFormData({ firstName: "", email: "", note: "" });
      alert(
        "Your inquiry has been received. We appreciate you reaching out and will respond as soon as possible."
      );
    },
    onError: () => {
      alert(
        "Sorry, we encountered an error trying to send your message. Please try submitting again."
      );
    },
  });

  const handleInputChange =
    (field: keyof FormData) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
        ...formData,
        [field]: event.target.value,
      });
    };

  const handleSubmit = (event: React.FormEvent) => {
    console.log(event);
    SaveContactForm({
      variables: {
        input: {
          description: formData.note,
          email: formData.email,
          firstName: formData?.firstName,
        },
      },
    });
  };

  return (
    <ContactContainer>
      <StyledContainer>
        <HeaderSection>
          <MainTitle textAlign="left">
            Have a question? Let&apos;s connect.
          </MainTitle>
          <SubTitle color="textSecondary" textAlign="left">
            Whether you&apos;re a creator, brand, or just curious — we&apos;d
            love to hear from you! Our team is here to support, collaborate, and
            grow with you.
          </SubTitle>
        </HeaderSection>

        <ContentWrapper>
          <LeftSection>
            <SectionTitle>Contact Info</SectionTitle>

            <ContactItem>
              <ContactIcon>
                <img src="/icon/location.svg" alt="call" />
              </ContactIcon>
              <ContactText>
                4th Floor, SRR Gateway, Minoura lane,
                <br />
                Hittech City Main Rd, opp. Cyber Gateway,
                <br />
                Hyderabad, Telangana 500081
              </ContactText>
            </ContactItem>

            <ContactItem>
              <ContactIcon>
                <img src="/icon/call.svg" alt="call" />
              </ContactIcon>
              <ContactText>+91 9848011150</ContactText>
            </ContactItem>

            <ContactItem>
              <ContactIcon>
                <img src="/icon/message.svg" alt="email" />
              </ContactIcon>
              <ContactText>support@oneinfo.io</ContactText>
            </ContactItem>
          </LeftSection>

          <RightSection>
            <SectionTitle>Get in touch</SectionTitle>

            <FormWrapper>
              <StyledTextField
                label="Your name"
                variant="outlined"
                fullWidth
                value={formData.firstName}
                onChange={handleInputChange("firstName")}
                required
              />

              <StyledTextField
                label="Your Email"
                variant="outlined"
                type="email"
                fullWidth
                value={formData.email}
                onChange={handleInputChange("email")}
                required
              />

              <StyledTextField
                label="Your message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                value={formData.note}
                onChange={handleInputChange("note")}
                required
              />

              <SendButton
                disabled={loading}
                endIcon={<img src="/icon/ArrowRight.svg" alt="send" />}
                onClick={handleSubmit}
                variant="contained"
              >
                Send
              </SendButton>
            </FormWrapper>
          </RightSection>
        </ContentWrapper>
      </StyledContainer>
    </ContactContainer>
  );
};

export default Contact;

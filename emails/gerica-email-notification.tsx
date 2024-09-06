import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface GericaEmailNotificationProps {
  validationCode: string;
  userName: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const GericaEmailNotification: React.FC<
  GericaEmailNotificationProps
> = ({ validationCode = "123456", userName= 'userName' }) => (
  <Html>
    <Head />
    <Preview>You're now ready to make live transactions with Stripe!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`${baseUrl}/static/geriga-dark-logo.png`}
            width="90"
            height="26"
            alt="Stripe"
          />
          <Hr style={hr} />
          <Text style={tertiary}>Verify Your Identity</Text>
          <Heading style={secondary}>
            Greetings, {userName}!
            <br /><br />
            Please enter the following verification code when prompted. 
            <br />If you 
            <strong> don't want</strong> to create an account, you can ignore this message.
          </Heading>
          <Text style={verificationText}>Verification code</Text>
          <Section style={codeContainer}>
            <Text style={code}>{validationCode}</Text>
          </Section>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default GericaEmailNotification;

const main = {
  display: 'flex',
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f6f9fc",
  marginTop: "64px",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  padding: "20px 20px",
  boxShadow: "0 5px 10px rgba(20,50,70,.2)",
};

const box = {
  padding: "20px 20px",
  maxWidth: '440px',
};

const tertiary = {
  fontSize: "24px",
  lineHeight: "16px",
  color: "#303030",
  fontWeight: 400,
  fontFamily: "Roboto, sans-serif",
  height: "16px",
  letterSpacing: "0",
  marginBottom: "32px",
  textTransform: "uppercase" as const,
  textAlign: "center" as const,
};

const hr = {
  borderColor: "#e6ebf1",
  marginBottom: "32px",
};

const secondary = {
  fontSize: "14px",
  lineHeight: "20px",
  color: "#303030",
  fontWeight: 400,
  fontFamily: "Roboto, sans-serif",
  height: "16px",
  marginBottom: "120px",
  textAlign: "center" as const,
};

const verificationText = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 600,
  fontSize: '14px',
  lineHeight: '20px',
  color: '#303030',
  marginBottom: "18px",
  textAlign: "center" as const,
}

const codeContainer = {
  background: "rgba(0,0,0,.05)",
  border: '2px solid #FF6666',
  borderRadius: "5px",
  margin: "16px auto 14px",
  verticalAlign: "middle",
  maxWidth: "300px",
};

const code = {
  color: "#000",
  display: "inline-block",
  fontFamily: "Roboto, sans-serif",
  fontSize: "32px",
  fontWeight: 700,
  letterSpacing: "6px",
  lineHeight: "40px",
  paddingBottom: "8px",
  paddingTop: "8px",
  margin: "0 auto",
  width: "100%",
  textAlign: "center" as const,
};

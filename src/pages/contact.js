/** @jsx jsx */
import { jsx } from 'theme-ui';
import {
  Container,
  Box,
  Grid,
  Button,
  Label,
  Textarea,
  Input,
  Text,
} from 'theme-ui';

import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';
import { useRouter } from 'next/router';
import Layout from 'components/layout';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import emailjs from 'emailjs-com';
import Popup from 'reactjs-popup';
//import 'reactjs-popup/dist/index.css';

export default function contact() {
  const router = useRouter();

  const onSubmitHandler = () => {
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    emailjs
      .send(
        'service_753hza1',
        'template_c0gz98e',
        { name: name, lastName: lastName, email: email, message: message },
        'user_FRMx02FpAmigUyQQ9kTsI'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <ThemeProvider theme={theme}>
      <Layout home={false}>
        <section sx={styles.banner} id="home">
          <Container sx={styles.banner.container}>
            <Box
              as="form"
              onSubmit={(e) => e.preventDefault()}
              sx={styles.banner.contentBox}
            >
              <Grid gap={2} width={[128, null, 192]}>
                <Box>
                  {' '}
                  <Label htmlFor="name">Name</Label>
                  <Input name="name" id="name" mb={3} />
                </Box>
                <Box>
                  <Label htmlFor="last name">Last Name</Label>
                  <Input name="lastName" id="lastName" mb={3} />
                </Box>
              </Grid>
              <Label htmlFor="email">Email</Label>
              <Input name="email" id="email" mb={3} />
              <Label htmlFor="message">Message</Label>
              <Textarea name="message" id="message" rows={6} mb={3} />
              <Popup
                trigger={
                  <Button onClick={() => onSubmitHandler()}>Submit</Button>
                }
              >
                <Box>
                  <Text as="p" sx={styles.popup}>
                    Thank you for your interest, will be in touch soon.
                  </Text>
                </Box>
              </Popup>
            </Box>
          </Container>
        </section>
      </Layout>
    </ThemeProvider>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    height: 'auto',
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -2,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -2,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      position: 'relative',
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    heading: {
      color: '#EA3A60',
    },
    popup: {
      backgroundColor: '#008000',
      color: 'white',
    },
  },
};

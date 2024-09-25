// src/app/not-found.tsx

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export const metadata = {title: "404 | Sandrapp"};

export default function NotFound() {

  return (
    <Container>
        <Typography>nenašlo sa</Typography>
    </Container>
  );
}
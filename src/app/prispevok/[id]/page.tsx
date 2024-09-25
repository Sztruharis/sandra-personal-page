// src/app/[id]/page.tsx

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export const metadata = {title: "Príspevok | Sandrapp"};

export default function PostID() {

  return (
    <Container>
        <Typography>Príspevok ID</Typography>
    </Container>
  );
}
// src/app/components/NavBar.tsx

"use client";

import * as React from 'react';
import Link from 'next/link';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Home as HomeIcon, AddBox as AddBoxIcon, Login as LI, AccountCircle as ACI, AppRegistration as ARI } from '@mui/icons-material';



export const metadata = {title: "Navigácia | Sandrapp"};

export default function NavBar() {

  const [value, setValue] = React.useState(0);
  return (
    <Paper 
      component="div" // Specify the component type
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} 
      elevation={3} // Add elevation for shadow effect
    >
<BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels={false}
        sx={{ alignItems: 'center' }} // Center the icons vertically
      >
        {/* Home Link */}
        <Link href="/" passHref>
          <BottomNavigationAction icon={<HomeIcon />} />
        </Link>
        {/* Profiles Link */}
        <Link href="/profil" passHref>
          <BottomNavigationAction icon={<ACI/>} />
        </Link>
        {/* Posts Link */}
        <Link href="/prispevok" passHref>
          <BottomNavigationAction icon={<AddBoxIcon />} />
        </Link>
        {/* Sign In Link */}
        <Link href="/auth/prihlasenie" passHref>
          <BottomNavigationAction icon={<LI />} />
        </Link>
        {/* Registration Link */}
        <Link href="/auth/registracia" passHref>
          <BottomNavigationAction icon={<ARI />} />
        </Link>
      </BottomNavigation>
    </Paper>

  );
}
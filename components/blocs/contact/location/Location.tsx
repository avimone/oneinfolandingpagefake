'use client'
import { Box, Container, Grid, styled, Typography } from '@mui/material'
import React from 'react'

const StylistLocation = styled(Container)(() => ({
  paddingTop: 75,
  paddingBottom: 75,
}))

const Location = () => {
  return (
    <StylistLocation>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <div style={{ height: 320, borderRadius: 10 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3806.3006081088515!2d78.37657132516628!3d17.445320433451784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s4th%20floor%2C%20SBR%20Gateway%2C%20Maxcure%20lane%2C%20Hitech%20City%20Main%20Rd%2C%20opp.%20Cyber%20Gateways%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1747409270178!5m2!1sen!2sin"
              width="100%"
              height={300}
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }} container justifyContent="center" flexDirection="column">
          <Grid size={12}>
            <Box pl={3}>
              <Typography variant="h6">Registered Address</Typography>
              <Typography variant="body2">
                House No 1-140, Machnapally, Jammikunta, <br />
                Karimnagar, Telangana -505122
              </Typography>
            </Box>
          </Grid>
          <Grid size={12}>
            <Box pl={3}>
              <Typography fontSize={12} variant="body2">
                OUR MISSION AND OUR VISION
              </Typography>
              <Typography variant="h6">Address for communication</Typography>
              <Typography variant="body2">
                4th floor, SBR Gateway, Maxcure lane,
                <br /> Hitech City Main Rd, opp. Cyber Gateways,
                <br /> Hyderabad, Telangana 500081
              </Typography>
              <Typography mt={1}>
                Website :{' '}
                <a style={{ color: '#006994' }} href="https://oneinfo.ai/">
                  https://oneinfo.ai/
                </a>
              </Typography>
              <Typography>Call : +91 9848011150</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </StylistLocation>
  )
}

export default Location

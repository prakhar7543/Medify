import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function FaqAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px', border: 'none'}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{border: 'none', boxShadow: 'none'}}>
        <AccordionSummary
          expandIcon={expanded === 'panel1' ? <RemoveIcon /> : <AddIcon sx={{color: '#2AA7FF'}}/>}
        >
          <Typography sx={{ fontWeight: 'bold', fontSize: '16px', color: '#1B3C74' }}>
            Why choose our medical for your family?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Our medical care offers personalized treatment and family-friendly support.
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{border: 'none', boxShadow: 'none'}}>
        <AccordionSummary
          expandIcon={expanded === 'panel2' ? <RemoveIcon /> : <AddIcon sx={{color: '#2AA7FF'}}/>}
        >
          <Typography sx={{ fontWeight: 'bold', fontSize: '16px', color: '#1B3C74' }}>
            Why we are different from others?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          We prioritize compassion, affordability, and expert service.
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{border: 'none', boxShadow: 'none'}}>
        <AccordionSummary
          expandIcon={expanded === 'panel3' ? <RemoveIcon /> : <AddIcon sx={{color: '#2AA7FF'}}/>}
        >
          <Typography sx={{ fontWeight: 'bold', fontSize: '16px', color: '#1B3C74'}}>
            Trusted & experience senior care & love
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Our team brings years of experience and heartfelt dedication to elder care.
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{border: 'none', boxShadow: 'none'}}>
        <AccordionSummary
          expandIcon={expanded === 'panel4' ? <RemoveIcon /> : <AddIcon sx={{color: '#2AA7FF'}}/>}
        >
          <Typography sx={{ fontWeight: 'bold', fontSize: '16px', color: '#1B3C74'}}>
            How to get appointment for emergency cases?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Contact us immediately via our 24/7 hotline or emergency booking form.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

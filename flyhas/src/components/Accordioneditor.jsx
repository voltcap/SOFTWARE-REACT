import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from '@mui/material/Button';
import AccordionActions from '@mui/material/AccordionActions';

const Accordioneditor = () => {
    return (
        <div>
            <Accordion sx={{ backgroundColor: "rgba(255, 255, 255, 0.3)", backdropFilter: "blur(10px)" }}>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">Uçuş bilgilerini düzenle</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
                <AccordionActions>
                    <Button>Agreee</Button>
                </AccordionActions>

            </Accordion>

        </div>
    )
}

export default Accordioneditor
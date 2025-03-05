import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from '@mui/material/Button';
import AccordionActions from '@mui/material/AccordionActions';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Accordioneditor = () => {
    return (
        <div>
            <Accordion sx={{ backgroundColor: "rgb(255, 255, 255)", }}>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">Edit Flight Informations</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'flex-start' }}>
                        <TextField
                            label="From"
                            defaultValue="İstanbul"
                            slotProps={{ readOnly: true }}
                            sx={{ width: '48%' }}
                        />
                        <TextField
                            label="To"
                            defaultValue="Ankara"
                            slotProps={{ readOnly: true }}
                            sx={{ width: '48%' }}
                        />
                        <TextField
                            label="Date"
                            defaultValue="2025/03/15"
                            slotProps={{ readOnly: true }}
                            sx={{ width: '48%' }}
                        />
                        <TextField
                            label="People"
                            defaultValue="1"
                            slotProps={{ readOnly: true }}
                            sx={{ width: '48%' }}
                        />
                    </div>
                </AccordionDetails>
                <AccordionActions>
                    <Button>Agreee</Button>
                </AccordionActions>

            </Accordion>

        </div>
    )
}

export default Accordioneditor
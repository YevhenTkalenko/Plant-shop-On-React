import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
import './HomeQuestionAccordion.scss'

const HomeQuestionAccordion = () => {
    const [expanded, setExpanded] = useState<string | false>(false)

    const handleChange =
        (panel: string) =>
        (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false)
        }
    return (
        <div>
            <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    className="home-question-accordion-item"
                >
                    <div>1. Can i consult about caring for Plants?</div>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, elit & consectetur adipiscing
                    elit. Integer adipiscing erat eget risus sollicitudin
                    pellentes queet non erat. Maecenas nibh dolor, malesuada et
                    bibendum a, sagittis accumsan ipsum. Pellentesque ultrices
                    ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Name ultrices
                    scelerisque tristique dolor vitae tincidunt. Aenean quis
                    massa uada mi elementum elementum. Nec sapien convallis
                    vulputate rhoncus vel dui.
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    className="home-question-accordion-item"
                >
                    <div>2. How many types of plant are in the ...?</div>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, elit & consectetur adipiscing
                    elit. Integer adipiscing erat eget risus sollicitudin
                    pellentes queet non erat. Maecenas nibh dolor, malesuada et
                    bibendum a, sagittis accumsan ipsum. Pellentesque ultrices
                    ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Name ultrices
                    scelerisque tristique dolor vitae tincidunt. Aenean quis
                    massa uada mi elementum elementum. Nec sapien convallis
                    vulputate rhoncus vel dui.
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    className="home-question-accordion-item"
                >
                    <div>3. What are the uses of plants in daily life?</div>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, elit & consectetur adipiscing
                    elit. Integer adipiscing erat eget risus sollicitudin
                    pellentes queet non erat. Maecenas nibh dolor, malesuada et
                    bibendum a, sagittis accumsan ipsum. Pellentesque ultrices
                    ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Name ultrices
                    scelerisque tristique dolor vitae tincidunt. Aenean quis
                    massa uada mi elementum elementum. Nec sapien convallis
                    vulputate rhoncus vel dui.
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel4'}
                onChange={handleChange('panel4')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    className="home-question-accordion-item"
                >
                    <div>4. Can i consult about caring for Plants?</div>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, elit & consectetur adipiscing
                    elit. Integer adipiscing erat eget risus sollicitudin
                    pellentes queet non erat. Maecenas nibh dolor, malesuada et
                    bibendum a, sagittis accumsan ipsum. Pellentesque ultrices
                    ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Name ultrices
                    scelerisque tristique dolor vitae tincidunt. Aenean quis
                    massa uada mi elementum elementum. Nec sapien convallis
                    vulputate rhoncus vel dui.
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel5'}
                onChange={handleChange('panel5')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                    className="home-question-accordion-item"
                >
                    <div>5. What Information should i provide for...?</div>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, elit & consectetur adipiscing
                    elit. Integer adipiscing erat eget risus sollicitudin
                    pellentes queet non erat. Maecenas nibh dolor, malesuada et
                    bibendum a, sagittis accumsan ipsum. Pellentesque ultrices
                    ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Name ultrices
                    scelerisque tristique dolor vitae tincidunt. Aenean quis
                    massa uada mi elementum elementum. Nec sapien convallis
                    vulputate rhoncus vel dui.
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default HomeQuestionAccordion

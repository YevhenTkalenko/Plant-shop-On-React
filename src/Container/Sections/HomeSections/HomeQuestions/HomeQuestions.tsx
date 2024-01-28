import { Container } from '@mui/material'
import './HomeQuestions.scss'
import HomeQuestionAccordion from './HomeQuestionsAccordion/HomeQuestionAccordion'
import HomeQuestionTitle from './HomeQuestionTitle/HomeQuestionTitle'

interface Props {}
const HomeQuestions = (props: Props) => {
    return (
        <Container>
            <HomeQuestionTitle />
            <HomeQuestionAccordion />
        </Container>
    )
}
export default HomeQuestions

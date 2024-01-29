import { Container } from '@mui/material'
import './HomeQuestions.scss'
import HomeQuestionAccordion from './HomeQuestionsAccordion/HomeQuestionAccordion'
import HomeQuestionTitle from './HomeQuestionTitle/HomeQuestionTitle'
import questionsLogo from 'assets/images/HomeQuestions/pngegg.svg'

interface Props {}
const HomeQuestions = (props: Props) => {
    return (
        <Container className="home-questions-container">
            <div className="home-questions-content">
                <HomeQuestionTitle />
                <HomeQuestionAccordion />
            </div>
            <div className="home-questions-logo">
                <img src={questionsLogo} alt="questionsLogo" />
            </div>
        </Container>
    )
}
export default HomeQuestions

import { Container } from '@mui/material'
import PageNoFoundContent from './PageNoFoundContent/PageNoFoundContent'
import PageNoFoundFooter from './PageNoFoundFooter/PageNoFoundFooter'
import UniversalTitle from 'Container/Components/UniversalComponents/Title/UniversalTitle'

interface Props {}
const PageNotFound = (props: Props) => {
    return (
        <>
            <UniversalTitle>
                <h4>404 Error</h4>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium facilis, asperiores nulla eligendi quas quidem
                    aspernatur atque exercitationem qui unde deleniti ipsam
                    reprehenderit eos laudantium. Nisi, quam rerum! Voluptas,
                    perspiciatis.
                </p>
            </UniversalTitle>
            <Container>
                <PageNoFoundContent />
                <PageNoFoundFooter />
            </Container>
        </>
    )
}
export default PageNotFound

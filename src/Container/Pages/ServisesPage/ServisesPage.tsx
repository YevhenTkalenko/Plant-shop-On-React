import { Container } from '@mui/material'
import UniversalTitle from 'Container/Components/UniversalComponents/Title/UniversalTitle'
import ServisesSection from 'Container/Sections/Servises/ServisesSection'

const ServisesPage = () => {
    return (
        <>
            <UniversalTitle>
                <h4>Servises Page</h4>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium facilis, asperiores nulla eligendi quas quidem
                    aspernatur atque exercitationem qui unde deleniti ipsam
                    reprehenderit eos laudantium. Nisi, quam rerum! Voluptas,
                    perspiciatis.
                </p>
            </UniversalTitle>
            <Container>
                <ServisesSection />
            </Container>
        </>
    )
}
export default ServisesPage

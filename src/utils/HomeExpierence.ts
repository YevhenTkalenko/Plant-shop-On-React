import mission from 'assets/images/HomeExpierenceImage/Phone/Mission.svg'
import vission from 'assets/images/HomeExpierenceImage/Phone/Vision.svg'
import support from 'assets/images/HomeExpierenceImage/Phone/Support.svg'
import trust from 'assets/images/HomeExpierenceImage/Phone/Icon.svg'

interface HomeExpierenceI {
    id: number,
    image: string,
    content: string,
    link: string
}

const HomeExpierence: HomeExpierenceI[] = [
    {
        id: 1,
        image: mission,
        content: 'Our Mision',
        link: ''
    },
    {
        id: 2,
        image: vission,
        content: 'Our Vision',
        link: ''
    },
    {
        id: 3,
        image: support,
        content: 'Support Team',
        link: ''
    },
    {
        id: 4,
        image: trust,
        content: 'Client Trust',
        link: ''
    },
]

export default HomeExpierence;
import comp_1 from './comp_1.png';
import comp_2 from './comp_2.png';
import comp_3 from './comp_3.png';
import comp_4 from './comp_4.png';
import comp_5 from './comp_5.png';
import comp_6 from './comp_6.png';




interface pageNotFoundImagesI {
    id: number,
    image: string
}

const pageNotFoundImages: pageNotFoundImagesI[] = [
    {
        id: 1,
        image: comp_1
    },
    {
        id: 2,
        image: comp_2
    },
    {
        id: 3,
        image: comp_4
    },
    {
        id: 4,
        image: comp_3
    },
    {
        id: 5,
        image: comp_5
    },
    {
        id: 6,
        image: comp_6
    },
]

export default pageNotFoundImages
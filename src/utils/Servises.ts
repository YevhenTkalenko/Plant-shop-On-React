import treePlanting from '../assets/images/ServisesImage/TreePlanting.svg'
import grassCutting from '../assets/images/ServisesImage/GrassCutting.svg'
import gardenDisign from '../assets/images/ServisesImage/GardenDesign.svg'
import plantGrowing from '../assets/images/ServisesImage/PlantGrowing.svg'
import flowerScaping from '../assets/images/ServisesImage/FlowerScaping.svg'
import brancCutting from '../assets/images/ServisesImage/Branchcutting.svg'
import petsControl from '../assets/images/ServisesImage/PestsWeedsControl.svg'
import waterIrrigation from '../assets/images/ServisesImage/WateringIrrigation.svg'

export interface ProductI {
    id: number,
    addId: string,
    image: string,
    title: string,
    shortDescription: string,
    fullDesctiption: string,
    link: string,
    price: number,
    duration: number,
    countOfSpecialists: number
    difficult: string,
    rank: number
}

const PRODUCT: ProductI[] = [
    {
        id: 1,
        addId: 'section1',
        image: treePlanting,
        title: 'Tree Planting',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis',
        fullDesctiption: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendisLorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis',
        link: '/servises#section2',
        price: 150,
        duration: 2,
        countOfSpecialists: 1,
        difficult: 'easy',
        rank: 1
    },
    {
        id: 2,
        addId: 'section2',
        image: grassCutting,
        title: 'Grass Cutting',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis',
        fullDesctiption: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendisLorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis',
        link: '/servises#section2',
        price: 50,
        duration: 1,
        countOfSpecialists: 2,
        difficult: 'medium',
        rank: 2
    },
    {
        id: 3,
        addId: 'section3',
        image: gardenDisign,
        title: 'Garden Design',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis',
        fullDesctiption: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendisLorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis',
        link: '/servises#section3',
        price: 80,
        duration: 3,
        countOfSpecialists: 3,
        difficult: 'hard',
        rank: 3
    },
    {
        id: 4,
        addId: 'section4',
        image: plantGrowing,
        title: 'Plant Growing',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis',
        fullDesctiption: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendisLorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis',
        link: '/servises#section4',
        price: 170,
        duration: 2.30,
        countOfSpecialists: 1,
        difficult: 'easy',
        rank: 1
    },
    {
        id: 5,
        addId: '#section5',
        image: flowerScaping,
        title: 'Flower Scaping',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis',
        fullDesctiption: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendisLorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis',
        link: '/servises#section5',
        price: 30,
        duration: 1.30,
        countOfSpecialists: 2,
        difficult: 'medium',
        rank: 2
    },
    {
        id: 6,
        addId: 'section6',
        image: brancCutting,
        title: 'Branch Cutting',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis',
        fullDesctiption: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendisLorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis',
        link: '/servises#section6',
        price: 170,
        duration: 1,
        countOfSpecialists: 1,
        difficult: 'easy',
        rank: 1
    },
    {
        id: 7,
        addId: 'section7',
        image: petsControl,
        title: 'Pets Control',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis',
        fullDesctiption: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendisLorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis',
        link: '/servises#section7',
        price: 450,
        duration: 2.5,
        countOfSpecialists: 4,
        difficult: 'extra-hard',
        rank: 4
    },
    {
        id: 8,
        addId: 'section8',
        image: waterIrrigation,
        title: 'Water & Irrigation',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis',
        fullDesctiption: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendisLorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis',
        link: `/servises#section8`,
        price: 300,
        duration: 5,
        countOfSpecialists: 2,
        difficult: 'medium',
        rank: 2
    },
]


export const getProductsObject = (array: ProductI[]) => array.reduce((object, product) => ({
    ...object,
    [product.id]: product
}), {})

export default PRODUCT
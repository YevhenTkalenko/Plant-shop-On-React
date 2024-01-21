import treePlanting from '../assets/images/ServisesImage/TreePlanting.svg'
import grassCutting from '../assets/images/ServisesImage/GrassCutting.svg'
import gardenDisign from '../assets/images/ServisesImage/GardenDesign.svg'
import plantGrowing from '../assets/images/ServisesImage/PlantGrowing.svg'
import flowerScaping from '../assets/images/ServisesImage/FlowerScaping.svg'
import brancCutting from '../assets/images/ServisesImage/Branchcutting.svg'
import petsControl from '../assets/images/ServisesImage/PestsWeedsControl.svg'
import waterIrrigation from '../assets/images/ServisesImage/WateringIrrigation.svg'

interface ProductI {
    id: number,
    image: string,
    title: string,
    description: string
    link: string
}

const PRODUCT: ProductI[] = [
    {
        id: 1,
        image: treePlanting,
        title: 'Tree Planting',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis',
        link: ''
    },
    {
        id: 2,
        image: grassCutting,
        title: 'Grass Cutting',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis',
        link: ''
    },
    {
        id: 3,
        image: gardenDisign,
        title: 'Garden Design',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis',
        link: ''
    },
    {
        id: 4,
        image: plantGrowing,
        title: 'Plant Growing',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis',
        link: ''
    },
    {
        id: 5,
        image: flowerScaping,
        title: 'Flower Scaping',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis',
        link: ''
    },
    {
        id: 6,
        image: brancCutting,
        title: 'Branch Cutting',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis',
        link: ''
    },
    {
        id: 7,
        image: petsControl,
        title: 'Pets Control',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis',
        link: ''
    },
    {
        id: 8,
        image: waterIrrigation,
        title: 'Water & Irrigation',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis',
        link: ''
    },
]

export default PRODUCT
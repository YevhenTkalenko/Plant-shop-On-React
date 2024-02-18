import { ReactComponent as Consultation } from 'assets/images/ProductPageImage/Consultation.svg'
import { ReactComponent as DesignWork } from 'assets/images/ProductPageImage/DesignWork.svg'
import { ReactComponent as Maintenance } from 'assets/images/ProductPageImage/Maintenance.svg'
import { ReactComponent as Complete } from 'assets/images/ProductPageImage/Complete.svg'


interface workProcessI {
    id: number,
    Image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    title: string,
    context: string
}

export const workProcess: workProcessI[] = [
    {
        id: 1,
        Image: Consultation,
        title: 'Consultation',
        context: ' Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis'
    },
    {
        id: 2,
        Image: DesignWork,
        title: 'Design & Work',
        context: ' Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis'
    },
    {
        id: 3,
        Image: Maintenance,
        title: 'Maintenance',
        context: ' Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis'
    },
    {
        id: 4,
        Image: Complete,
        title: 'Complete',
        context: ' Autem consequatur cumque pariatur, perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur cumque pariatur, perferendis'
    },
]
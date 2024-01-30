import team_1 from 'assets/images/HomeStaff/team-1.svg'
import team_2 from 'assets/images/HomeStaff/team-2.svg'
import team_3 from 'assets/images/HomeStaff/team-3.svg'
import team_4 from 'assets/images/HomeStaff/team-4.svg'

interface HomeStaffI {
    id: number,
    image: string,
    title: string,
    sub_title: string
}


const HomeStaff: HomeStaffI[] = [
    {
        id: 1,
        image: team_1,
        title: 'Emma Rolles',
        sub_title: 'Florist'
    },
    {
        id: 2,
        image: team_2,
        title: 'Anna Marty',
        sub_title: 'Florist'
    },
    {
        id: 3,
        image: team_3,
        title: 'Dereck Peterson',
        sub_title: 'Florist'
    },
    {
        id: 4,
        image: team_4,
        title: 'Scarlet Magnusson',
        sub_title: 'Florist'
    },
]

export default HomeStaff
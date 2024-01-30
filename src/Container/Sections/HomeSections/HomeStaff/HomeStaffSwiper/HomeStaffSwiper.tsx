import './HomeStaffSwiper.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import HomeStaff from 'utils/HomeStaff'

interface HomeStaffI {
    id: number
    image: string
    title: string
    sub_title: string
}

const HomeStaffSwiper = () => {
    return (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {HomeStaff.map(({ id, image, title, sub_title }: HomeStaffI) => {
                return (
                    <SwiperSlide key={id}>
                        <div className="slide-item">
                            <img src={image} alt={`${image}`} />
                            <div className="slide-item-description">
                                <p>{title}</p>
                                <p>{sub_title}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}
export default HomeStaffSwiper

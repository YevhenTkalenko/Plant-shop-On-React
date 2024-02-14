import { Grid } from '@mui/material'
import pageNotFoundImages from 'assets/images/NotFoundPageImages/PageNoFoundImages'
import pageNotFoundImg from 'assets/images/NotFoundPageImages/family.png'
import './PageNoFoundFooter.scss'

interface Props {}
const PageNoFoundFooter = (props: Props) => {
    return (
        <>
            <div className="page-found-footer-container">
                <div className="page-found-footer-BG">
                    <img src={pageNotFoundImg} alt="" />
                </div>
                <Grid container justifyContent="space-between">
                    {pageNotFoundImages.map((el) => {
                        return (
                            <Grid
                                item
                                key={el.id}
                                className="page-found-footer-item"
                            >
                                <img src={el.image} alt="" />
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        </>
    )
}
export default PageNoFoundFooter

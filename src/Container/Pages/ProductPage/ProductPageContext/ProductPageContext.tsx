import { Card, CardContent, Grid } from '@mui/material'
import { workProcess } from 'utils/WorkProcess'
import './ProductPageContext.scss'

interface Props {}
const ProductPageContext = (props: Props) => {
    return (
        <div className="product-card-how-it-works">
            <div className="how-it-works-title">
                <h4>
                    Working <span>Process</span>
                </h4>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Explicabo, quidem eligendi numquam atque esse dolor
                    repellendus facere, deserunt quod soluta aliquid dolores
                    fugiat voluptatibus aperiam impedit voluptatum eius ducimus
                    ullam.
                </p>
            </div>
            <Grid container spacing={2}>
                {workProcess.map(({ id, Image, title, context }) => {
                    return (
                        <Grid item key={id} lg={3}>
                            <Card className="how-it-works-item">
                                <CardContent>
                                    <div className="how-it-works-card-content">
                                        <div>
                                            <Image className="logo" />
                                        </div>
                                        <div>Step-{id}</div>
                                    </div>
                                    <h4>{title}</h4>
                                    <p>{context}</p>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}
export default ProductPageContext

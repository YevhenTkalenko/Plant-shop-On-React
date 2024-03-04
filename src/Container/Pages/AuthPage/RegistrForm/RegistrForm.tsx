import { Button } from '@mui/material'

interface Props {}
const RegistrForm = (props: Props) => {
    return (
        <div
            style={{
                marginTop: '45px',
            }}
        >
            <h4>
                Don`t have <span>account?</span>
            </h4>
            <Button
                color="warning"
                variant="contained"
                sx={{
                    display: 'block',
                    margin: '0 auto',
                }}
            >
                Registration
            </Button>
        </div>
    )
}
export default RegistrForm

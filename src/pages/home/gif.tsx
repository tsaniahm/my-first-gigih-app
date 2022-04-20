// import styles from '../../styles/style.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';

export interface Props {
    imageUrl: string;
    title: string;
    rating: string;
}

const ratingColor = {
    g: 'primary',
    pg: 'success'
}

const Gif = ({ imageUrl, title, rating }: Props) => {
    return (
        <Card sx={{
            maxWidth: 345,
            borderRadius: '10px',
            backgroundColor: '#311b92',
            color: 'white',

        }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={imageUrl}
                    alt="gif image"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                    >
                        {title}
                    </Typography>
                    <Chip
                        label={'Rating: ' + rating}
                        color={ratingColor[rating] || 'default'}
                    />
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Gif;
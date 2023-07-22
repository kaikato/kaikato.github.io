import React, { useState } from 'react';
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function ItemCard({ item }) {
    const [expanded, setExpanded] = useState(false);
    let cardContentText = expanded ? item.description : item.description.substring(0, 100) + '...';

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className='item' sx={{ height: expanded ? 'auto' : 425 }}>
            <CardMedia sx={{ height: 150 }}
                component="img"
                alt={item.name}
                height="140"
                image={item.imgurl}
            />
            <CardContent>
                <h3>{item.name}</h3>
                <Typography gutterBottom className="card-text">
                    {cardContentText}
                </Typography>
                {cardContentText.length < item.description.length && <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
                }
            </CardContent>
            <CardActions>
                {item.githuburl && (
                    <Button className="github-button" variant="outlined" startIcon={<GitHubIcon />} href={item.githuburl}>
                        View on Github
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}

export default ItemCard;
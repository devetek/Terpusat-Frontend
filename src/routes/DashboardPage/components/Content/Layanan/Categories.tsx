import React from 'react';
import { isMobile } from "react-device-detect";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const data = [
    {
        img: 'https://www.topbrand-award.com/wp-content/uploads/2019/05/top-brand-11rev.jpg',
        title: 'Image',
        author: 'author',
    },
    {
        img: 'https://www.topbrand-award.com/wp-content/uploads/2019/05/top-brand-11rev.jpg',
        title: 'Image',
        author: 'author',
    },
    {
        img: 'https://www.topbrand-award.com/wp-content/uploads/2019/05/top-brand-11rev.jpg',
        title: 'Image',
        author: 'author',
    },
    {
        img: 'https://www.topbrand-award.com/wp-content/uploads/2019/05/top-brand-11rev.jpg',
        title: 'Image',
        author: 'author',
    },
    {
        img: 'https://www.topbrand-award.com/wp-content/uploads/2019/05/top-brand-11rev.jpg',
        title: 'Image',
        author: 'author',
    },
    {
        img: 'https://www.topbrand-award.com/wp-content/uploads/2019/05/top-brand-11rev.jpg',
        title: 'Image',
        author: 'author',
    },
    {
        img: 'https://www.topbrand-award.com/wp-content/uploads/2019/05/top-brand-11rev.jpg',
        title: 'Image',
        author: 'author',
    },
    {
        img: 'https://www.topbrand-award.com/wp-content/uploads/2019/05/top-brand-11rev.jpg',
        title: 'Image',
        author: 'author',
    },
    {
        img: 'https://www.topbrand-award.com/wp-content/uploads/2019/05/top-brand-11rev.jpg',
        title: 'Image',
        author: 'author',
    },
    {
        img: 'https://www.topbrand-award.com/wp-content/uploads/2019/05/top-brand-11rev.jpg',
        title: 'Image',
        author: 'author',
    },
    {
        img: 'https://www.topbrand-award.com/wp-content/uploads/2019/05/top-brand-11rev.jpg',
        title: 'Image',
        author: 'author',
    },
    {
        img: 'https://www.topbrand-award.com/wp-content/uploads/2019/05/top-brand-11rev.jpg',
        title: 'Image',
        author: 'author',
    },
    {
        img: 'https://www.topbrand-award.com/wp-content/uploads/2019/05/top-brand-11rev.jpg',
        title: 'Image',
        author: 'author',
    },
    {
        img: 'https://www.topbrand-award.com/wp-content/uploads/2019/05/top-brand-11rev.jpg',
        title: 'Image',
        author: 'author',
    },
    {
        img: 'https://www.topbrand-award.com/wp-content/uploads/2019/05/top-brand-11rev.jpg',
        title: 'Image',
        author: 'author',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function SingleLineGridList() {
    const classes = useStyles();
    const itemShow = isMobile ? 4 : 8;

    return (
        <Paper className="w-full shadow-none border-1">
            <GridList className={classes.gridList} cols={itemShow}>
                {data.map((tile) => (
                    <GridListTile key={tile.img} rows={0.6} component="div">
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                                <IconButton aria-label={`star ${tile.title}`}>
                                    <StarBorderIcon className={classes.title} />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </Paper>
    );
}
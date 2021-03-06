import {useState, useEffect} from 'react'
import {newsData, } from '../utils/dummyData'
import { uuidv4 as uuid } from '@firebase/util';
import {createStyles, Card, Divider} from '@mantine/core'
// import placeHolder from '../assets/newsimageplaceholder.png'
import NewsCard from './NewsCard';

const useStyles = createStyles((theme) => ({
    body: {
      paddingTop: theme.spacing.sm,
      textAlign: "left"
    },
    postedAt: {
      textAlign: "left"
    },
    container: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : "#f2f2f4",
        margin: "auto",
        padding: 0,
        maxWidth: 820
  
      },
      card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        margin: "auto",
    
      },
    //   badge: {
    //     marginLeft: "auto"
    //   },
  }));

function NewsList(){
    const [newsList, setNewsList] = useState([])
    const { classes } = useStyles();
    useEffect(()=> {
        setNewsList(newsData.articles)
    }, [setNewsList])

    const trendingNews = newsList.map((article) => {
        const {title, content, url, urlToImage,} = article
        // const {title, link, description, image_url,} = article
        // const publishedAt = relativeTime(pubDate)
        // const getImage = ()=> {
        //   return image_url ? image_url : placeHolder
        // }
        return(
            <div  key={uuid()}>
            <Card shadow="xl" withBorder p="xl" radius="sm" className={classes.card}>
                {/* <NewsCard url={link} imgUrl={getImage()} content={description} title={title} /> */}
                <NewsCard url={url} imgUrl={urlToImage} content={content} title={title} />
            </Card>
            <Divider my="sm" />
            </div>
        )
    })

    return(
        <Card shadow="xl" withBorder p="xl" radius="sm" className={classes.container}>
          {trendingNews}
        </Card>
    )
}
export default NewsList
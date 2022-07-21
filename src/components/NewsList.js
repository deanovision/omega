import {useState, useEffect} from 'react'
import {newsData, relativeTime} from '../utils/dummyData'
import { uuidv4 as uuid } from '@firebase/util';
import {createStyles, Group, Text} from '@mantine/core'

const useStyles = createStyles((theme) => ({
    body: {
      paddingTop: theme.spacing.sm,
      textAlign: "left"
    },
    card: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      maxWidth: "820px",
      margin: "auto",
  
    },
    postedAt: {
      textAlign: "left"
    },
    engagement :{
      paddingTop: 10
    },
    icons: {
      color: theme.colorScheme === 'dark' ? "#FFF" : theme.colors.gray[7]    
    },
    liked: {
      color: theme.colors.blue[5]
    },
    visible: {
      display: "block"
    },
    hidden: {
      display: "none"
    }
  }));

function NewsList(){
    const [newsList, setNewsList] = useState([])
    const { classes } = useStyles();
    useEffect(()=> {
        setNewsList(newsData.results)
    }, [setNewsList])

    const trendingNews = newsList.map((article) => {
        const {title, description, pubDate} = article
        const publishedAt = relativeTime(pubDate)
        return(
            <div key={uuid()}>
            <Group>
                {/* <Avatar size="lg" src={author.image} alt={author.name} radius="xl" /> */}
                <div>
                    <Text size="sm">{title}</Text>
                    <Text className={classes.postedAt} size="xs" color="dimmed">
                        {publishedAt}
                    </Text>
                </div>
            </Group>
            <Text className={classes.body} size="sm">
                {description}
            </Text>
            </div>
        )
    })

    return(
      <>
        {trendingNews}
      </>
    )
}
export default NewsList
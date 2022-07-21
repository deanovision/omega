import {useState, useEffect} from 'react'
import {newsData, relativeTime} from '../utils/dummyData'
import { getFullArticle } from '../utils/articleScraper';
import { uuidv4 as uuid } from '@firebase/util';
import {createStyles, Group, Text, Image, Badge, Card, Avatar, Divider} from '@mantine/core'

const useStyles = createStyles((theme) => ({
    body: {
      paddingTop: theme.spacing.sm,
      textAlign: "left"
    },
    container: {
        paddingBottom: 150
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
  }));

function NewsList(){
    const [newsList, setNewsList] = useState([])
    const { classes } = useStyles();
    useEffect(()=> {
        setNewsList(newsData.articles)
        // getFullArticle()
    }, [setNewsList])

    const trendingNews = newsList.map((article) => {
        const {source, title, description, content, url, urlToImage, publishedAt} = article
        // const publishedAt = relativeTime(pubDate)
        return(
            <div  key={uuid()}>
            <Card shadow="xl" withBorder p="xl" radius="sm" className={classes.card}>
            <Card.Section>
                <Image src={urlToImage} height={450} alt={title} />
            </Card.Section>
            <Group mt={10} noWrap>
                <div>
                    <Text mt={20} mb={5} weight={500} size="xl">{title}</Text>
                    <Badge mb={20} size="md" radius="xl">Trending</Badge>
                    {/* <Text className={classes.postedAt} size="xs" color="dimmed">
                        {relativeTime(publishedAt)}
                    </Text> */}
            <Text className={classes.body} size="md">
                {description}
            </Text>
            <Text className={classes.body} size="md">
                {content?.slice(0, 200)}
            </Text>
                </div>
            </Group>
            {/* <Image mt={50} src={urlToImage} alt={title} /> */}
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
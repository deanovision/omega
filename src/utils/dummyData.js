import axios from "axios"
import formatDistance from 'date-fns/formatDistance'

export const fetchUser = async (setUser) =>{
    let response = await axios.get("https://random-data-api.com/api/users/random_user")
    let getAvatar = await axios.get("https://randomuser.me/api/?results=25")
    let newAvatar = getAvatar.data.results[0].picture.large
    let newUser = response.data
    let getImage = await axios.get("https://random-data-api.com/api/lorem_flickr/random_lorem_flickr")
    let newImage = getImage.data.image
    console.log(newUser)
    setUser({
        avatar: newAvatar,
        image: newImage,
        name: `${newUser.first_name} ${newUser.last_name}`,
        job: newUser.employment.title,
        stats: [{label: "followers" , value: "500"}]
    })
}

export const fetchUsers = async (setUsers) =>{
    let response = await axios.get("https://randomuser.me/api/?results=25")
    let newUsers = await response.data.results
    // let getImage = await axios.get("https://random-data-api.com/api/lorem_flickr/random_lorem_flickr")
    // let newImage = getImage.data.image
    // console.log(newUsers)
    setUsers(newUsers)
}

export const relativeTime = (time) => {
    let result = formatDistance(
        new Date(time),
        new Date(),
        { addSuffix: true }
      )
      return result
}

export const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Augue lacus viverra vitae congue eu consequat ac felis donec. Amet tellus cras adipiscing enim. Dui accumsan sit amet nulla facilisi morbi tempus. Venenatis cras sed felis eget."

export const fetchComments = async (setComments) =>{
    let response = await axios.get("https://randomuser.me/api/?results=25")
    let newUser = await response.data.results
    // let getImage = await axios.get("https://random-data-api.com/api/lorem_flickr/random_lorem_flickr")
    // let newImage = getImage.data.image
    // console.log(newUser)
    setComments(newUser)
}

export const newsData = {
    "status": "ok",
    "totalResults": 38,
    "articles": [
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Matthew Cappucci",
            "title": "U.S. heat wave: Over 100 million people under alerts in 28 states - The Washington Post",
            "description": "200 million people will experience temperatures in the 90s or higher for the next three days.",
            "url": "https://www.washingtonpost.com/climate-environment/2022/07/20/heatwave-us-record-oklahoma-texas/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/FNLNSMUSHJCB3CBHPSVZUOZJNU.png&w=1440",
            "publishedAt": "2022-07-20T16:26:20Z",
            "content": "Comment on this story\r\nRecords are crashing as temperatures spike amid a high-end heat wave baking the Great Plains. Temperatures have spiked to 115 degrees in Texas and Oklahoma, with more than 60 m… [+6359 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Kevin Breuninger",
            "title": "Secret Service gave just one text message thread to Jan. 6 probe in response to subpoena - CNBC",
            "description": "The committee issued the subpoena after being told that Secret Service texts from around the time of the riot had been erased.",
            "url": "https://www.cnbc.com/2022/07/20/secret-service-gave-one-text-message-thread-to-jan-6-probe-in-subpoena-response.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107091439-1658324524435-gettyimages-622164342-AFP_HZ910.jpg?v=1658324533&w=1920&h=1080",
            "publishedAt": "2022-07-20T15:22:41Z",
            "content": "The U.S. Secret Service handed over just one text message thread in response to a subpoena issued by the House select committee investigating the Jan. 6, 2021, Capitol riot, according to a letter obt… [+3846 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Dan Mangan",
            "title": "Rudy Giuliani ordered to testify at Georgia grand jury in Trump election meddling case - CNBC",
            "description": "Rudy Giuliani spearheaded legal efforts by the campaign of ex-President Donald Trump seeking to reverse the election win of President Joe Biden.",
            "url": "https://www.cnbc.com/2022/07/20/rudy-giuliani-ordered-to-testify-at-georgia-grand-jury-in-trump-election-meddling-case.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106902244-1624556204873-106902244-16245551822021-06-24t171907z_1422866370_rc257o9srxwc_rtrmadp_0_usa-trump-giuliani.jpg?v=1624556215&w=1920&h=1080",
            "publishedAt": "2022-07-20T15:19:00Z",
            "content": "A New York judge ordered Rudy Giuliani to testify Aug. 9 before the Georgia grand jury that is collecting evidence for a probe of possible criminal meddling in that state's 2020 presidential election… [+2794 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Rob Picheta, CNN",
            "title": "The northern hemisphere is baking in record heat as fires rip through Europe and US, China temperatures soar - CNN",
            "description": "Hundreds of millions of people around the world were sweltering in extreme heat on Wednesday, as record-breaking heat waves set swathes of Europe's countryside on fire, scorched the US and put dozens of Chinese cities under alert.",
            "url": "https://www.cnn.com/2022/07/20/europe/europe-heat-wave-wednesday-wildfires-intl/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220720114329-01-europe-heatwave-super-tease.jpg",
            "publishedAt": "2022-07-20T15:11:00Z",
            "content": "London (CNN)Hundreds of millions of people around the world were sweltering in extreme heat on Wednesday, as record-breaking heat waves set swathes of Europe's countryside on fire, scorched the US an… [+6818 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Karen Gilchrist",
            "title": "Liz Truss and Rishi Sunak will go head-to-head in the race to become the UK's next prime minister - CNBC",
            "description": "The results of the final vote, which falls to Conservative Party members, are set to be announced by Sept. 5 at the latest, with Johnson expected to remain in place as caretaker prime minister until then.",
            "url": "https://www.cnbc.com/2022/07/20/liz-truss-faces-rishi-sunak-in-race-to-be-next-uk-prime-minister.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107089937-1658131464829-gettyimages-1241961135-britainsnextprimeminister-theitvdebate_057.jpeg?v=1658326179&w=1920&h=1080",
            "publishedAt": "2022-07-20T15:04:59Z",
            "content": "Conservative leadership candidates Rishi Sunak and Liz Truss during Britain's Next Prime Minister: The ITV Debate at Riverside Studios on July 17, 2022 in London, England.\r\nLONDON Liz Truss will face… [+3642 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Dakin Andone and Dianne Gallagher, CNN",
            "title": "Alex Murdaugh pleads not guilty to murders of his wife and son - CNN",
            "description": "Disgraced former South Carolina attorney Alex Murdaugh pleaded not guilty Wednesday to the murders of his wife and son, who were found shot to death on the family's property in June 2021.",
            "url": "https://www.cnn.com/2022/07/20/us/alex-murdaugh-pleads-not-guilty/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220720152722-alex-murdaugh-super-tease.jpg",
            "publishedAt": "2022-07-20T15:04:00Z",
            "content": "Walterboro, South Carolina (CNN)Disgraced former South Carolina attorney Alex Murdaugh pleaded not guilty Wednesday to the murders of his wife and son, who were found shot to death on the family's pr… [+4557 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Kotaku"
            },
            "author": "John Walker",
            "title": "Stray Should Have Been A Game Entirely About Kittens, Not Shooting - Kotaku",
            "description": "Also, why am I collecting energy drink cans in this PlayStation Plus hit?",
            "url": "https://kotaku.com/playstation-plus-stray-sony-annapurna-cats-kittens-1849198656",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/1b2ebac1e8ec9bcf6cbefa2492a65ef2.jpg",
            "publishedAt": "2022-07-20T15:00:00Z",
            "content": "Theres a lot of buzz about Stray right now, by dint of its coming out during a pretty dry patch for new releases, and more importantly, how you get to play as an incredibly cute cat. Unfortunately, w… [+6485 chars]"
        },
        {
            "source": {
                "id": "buzzfeed",
                "name": "Buzzfeed"
            },
            "author": "Jenna Guillaume",
            "title": "24 Of The Funniest Reactions To Netflix's \"Persuasion\" - BuzzFeed",
            "description": "\"He's a 10 but he's your cousin.\"",
            "url": "https://www.buzzfeed.com/jennaguillaume/netflix-persuasion-funny-tweets-fan-reactions",
            "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2022-07/20/9/enhanced/77e39756fab1/original-3460-1658308790-15.jpg?crop=625:327;1,69%26downsize=1250:*",
            "publishedAt": "2022-07-20T14:59:45Z",
            "content": null
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "John Wagner, Mariana Alfaro",
            "title": "Post Politics Now: Biden to deliver climate ultimatum; House panel to weigh assault weapons ban - The Washington Post",
            "description": "Ukraine’s first lady, Olena Zelenska, is set to address Congress on Wednesday as part of a high-profile trip to Washington.",
            "url": "https://www.washingtonpost.com/politics/2022/07/20/biden-climate-house-assault-weapons/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/RZNCRPAHRQI63AFWIPZL7TDGMI.jpg&w=1440",
            "publishedAt": "2022-07-20T14:13:00Z",
            "content": "The Senates committee chairwoman overseeing health criticized the nations response to monkeypox on Wednesday and called on the Biden administration to explain its plan to combat the record outbreak.\r… [+1963 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Lori Hinnant, Cara Anna, Vasilisa Stepanenko",
            "title": "'The mouth of a bear': Ukrainian refugees sent to Russia - The Associated Press - en Español",
            "description": "NARVA, Estonia (AP) — For weeks Natalya Zadoyanova had lost contact with her younger brother Dmitriy, who was trapped in the besieged Ukrainian port city of Mariupol.",
            "url": "https://apnews.com/article/Ukraine-Russia-refugees-Mariupol-war-investigation-31880d51ae29818b6c3b04156aae38d5",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/789a86cbaa614acfaac8a6b393424b33/3000.jpeg",
            "publishedAt": "2022-07-20T14:10:15Z",
            "content": "NARVA, Estonia (AP) For weeks Natalya Zadoyanova had lost contact with her younger brother Dmitriy, who was trapped in the besieged Ukrainian port city of Mariupol.\r\nRussian forces had bombed the orp… [+21335 chars]"
        },
        {
            "source": {
                "id": "ign",
                "name": "IGN"
            },
            "author": "Taylor Lyles",
            "title": "Xbox Owners Will Finally Be Able to Connect to Discord Voice Chats from Their Consoles - IGN - IGN",
            "description": "Discord has finally announced that it is adding integration support for Xbox Series X/S and Xbox One consoles.",
            "url": "https://www.ign.com/articles/xbox-discord-voice-integration-announced",
            "urlToImage": "https://assets-prd.ignimgs.com/2022/07/18/discord-blogroll-1658150186285.jpg?width=1280",
            "publishedAt": "2022-07-20T14:08:39Z",
            "content": "Discord announced today that it is finally adding voice chat integration to Xbox consoles. \r\nThe addition means that Xbox Series X/S and Xbox One owners will be able to talk to their friends on Disco… [+1123 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Diana Olick",
            "title": "June home sales fall 5.4% from May, as prices set yet another record - CNBC",
            "description": "The median price of an existing home sold in June set yet another record at $416,000, an increase of 13.4% year over year.",
            "url": "https://www.cnbc.com/2022/07/20/june-home-sales-fall-5point4percent-from-may-as-prices-set-yet-another-record.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107089123-1657834637876-gettyimages-1408750545-0j5a6485_38662a62-934f-4b56-91cb-b04d942fdea8.jpeg?v=1657834752&w=1920&h=1080",
            "publishedAt": "2022-07-20T14:00:03Z",
            "content": "Sales of previously owned homes in June fell 5.4% from May, according to a monthly report from the National Association of Realtors, as prices set records and rates surged.\r\nThe sales count declined … [+2971 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Defector.com"
            },
            "author": null,
            "title": "This All-Star Game Belonged To The Bullpen Hellions - Defector",
            "description": "Basically every team in the majors has at least one guy you've probably never heard of who might as well be Eric Gagne.",
            "url": "https://defector.com/this-all-star-game-belonged-to-the-bullpen-hellions/",
            "urlToImage": "https://lede-admin.defector.com/wp-content/uploads/sites/28/2022/07/GettyImages-1409806601.jpg",
            "publishedAt": "2022-07-20T13:15:00Z",
            "content": "Tuesday nights MLB All-Star Game came and went, as it tends to. Fans who attended the game or watched at home were treated to a close contest, a 3-2 victory for the American League, but not much else… [+3319 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Miriam Jordan",
            "title": "New Findings Detail Trump Plan to Use Census for Partisan Gain - The New York Times",
            "description": "A new trove of memos and emails suggest that the plan to add a citizenship question to the 2020 census aimed to cause an undercount that would favor Republicans.",
            "url": "https://www.nytimes.com/2022/07/20/us/census-citizenship-question-oversight.html",
            "urlToImage": "https://static01.nyt.com/images/2022/07/20/world/20citizenship-question1/20citizenship-question1-facebookJumbo.jpg",
            "publishedAt": "2022-07-20T13:09:10Z",
            "content": "Executive branch officials discussing important issues prior to formulating policy is evidence of good government, a department spokesman, Kevin Manning, said at the time. \r\nThe committee was expecte… [+1154 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Allison Johnson",
            "title": "The OnePlus 10T will launch August 3rd - The Verge",
            "description": "OnePlus confirms that it will launch the 10T on August 3rd, and it will include Qualcomm’s premium Snapdragon 8 Plus Gen 1 chipset. It’s clearly a performance-focused device, but OnePlus isn’t revealing much more than that right now.",
            "url": "https://www.theverge.com/2022/7/20/23270722/oneplus-10t-launch-august-processor-snapdragon-8-gen-1",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/ttSXS9UV6Qo-ZAfk13pH9zbamVo=/0x163:8002x4353/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23887880/OnePlus_10T_launching_August_3.jpg",
            "publishedAt": "2022-07-20T13:00:00Z",
            "content": "The 10T will have a Snapdragon 8 Plus Gen 1 chipset and a sparkly back panel.\r\nImage: OnePlus\r\nPete Lau is throwing a party. As he has just announced in a community forum post, the OnePlus CEO says i… [+1946 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NBCSports.com"
            },
            "author": "Michael David Smith",
            "title": "Giants announce 1980s-1990s uniforms will return for two games this season - ProFootballTalk - NBC Sports",
            "description": "The Giants haven’t given their fans much to celebrate in recent seasons, but this season they’re celebrating some great years of the past.Today the Giants announced that they’ll play two “legacy games” this season, in which they’ll play in the uniforms from t…",
            "url": "https://profootballtalk.nbcsports.com/2022/07/20/giants-announce-1980s-1990s-uniforms-will-return-for-two-games-this-season/",
            "urlToImage": "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2022/07/GettyImages-788474657-e1658321408760.jpg",
            "publishedAt": "2022-07-20T12:56:00Z",
            "content": "The Giants havent given their fans much to celebrate in recent seasons, but this season theyre celebrating some great years of the past.\r\nToday the Giants announced that theyll play two legacy games … [+535 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Tariq Panja",
            "title": "Henrik Stenson Stripped of Ryder Cup Captaincy as LIV Golf Rift Widens - The New York Times",
            "description": "Stenson was removed as he appeared set to join the Saudi-financed series. Former President Trump, whose course will host the next LIV series event, urged players to “take the money.”",
            "url": "https://www.nytimes.com/2022/07/20/sports/golf/ryder-cup-henrik-stenson-liv-golf.html",
            "urlToImage": "https://static01.nyt.com/images/2022/07/20/multimedia/20rydercup/20rydercup-facebookJumbo.jpg",
            "publishedAt": "2022-07-20T12:53:04Z",
            "content": "It is incomprehensible to us that a former president of the United States would cast our loved ones aside for personal financial gain, the letter to Mr. Trump continued. We hope you will reconsider y… [+1458 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BuzzFeed News"
            },
            "author": "Ellen Durney",
            "title": "Khloé Kardashian Subtly Defended Tristan Thompson After He Was Spotted Holding Hands With Another Woman Amid Speculation That Their Baby Is Due To Be Born Any Minute - BuzzFeed News",
            "description": "Last week, Tristan was spotted walking hand in hand with a mystery woman in Greece amid reports that his and Khloé’s new baby may have already been born.",
            "url": "https://www.buzzfeednews.com/article/ellendurney/khloe-kardashian-defended-tristan-thompson-on-instagram",
            "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2022-07/20/12/enhanced/90aeefd83368/original-3366-1658319494-21.jpg?crop=1243:651;0,16%26downsize=1250:*",
            "publishedAt": "2022-07-20T12:52:17Z",
            "content": null
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Leah Dolan, CNN",
            "title": "Look of the week: Brad Pitt's breezy linen skirt - CNN",
            "description": "The movie star turned up to the film premier of \"Bullet Train\" in a chocolate brown linen skirt and jacket -- but this isn't the first time Pitt has gone viral for a leggy look.",
            "url": "https://www.cnn.com/style/article/brad-pitt-skirt-red-carpet-ltw/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220720120927-brad-pitt-skirt-red-carpet-2-super-tease.jpg",
            "publishedAt": "2022-07-20T12:45:00Z",
            "content": "This week, many of us have been dealing with the record-breaking temperatures beating down across Europe and parts of America. While the worrying heat may have you wishing you could draw the blinds, … [+2065 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Georgia prosecutors say 16 fake Trump electors are targets in criminal probe - CNN",
            "description": "The Atlanta-area prosecutors scrutinizing former President Donald Trump's attempts to overturn the 2020 election in Georgia said Tuesday that all 16 of the \"...",
            "url": "https://www.youtube.com/watch?v=kGC1uR2AoMM",
            "urlToImage": "https://i.ytimg.com/vi/kGC1uR2AoMM/hqdefault.jpg",
            "publishedAt": "2022-07-20T12:12:16Z",
            "content": null
        }
    ]
}
export const newsData2 = {
    "status": "success",
    "totalResults": 3719,
    "results": [
        {
            "title": "The White House is getting out ahead of expected dismal economic growth numbers next week and pointing out that the US isn't really in a recession",
            "link": "https://www.businessinsider.com/white-house-biden-recession-gdp-economic-report-2022-7",
            "keywords": null,
            "creator": null,
            "video_url": null,
            "description": "The economy is in good health for now with a strong labor market and low unemployment. But recession fears abound among Americans.",
            "content": null,
            "pubDate": "2022-07-21 19:53:37",
            "image_url": "https://i.insider.com/62c36a5fada84d0019b7f4be?format=jpeg",
            "source_id": "businessinsider_us",
            "country": [
                "united states of america"
            ],
            "category": [
                "top"
            ],
            "language": "english"
        },
        {
            "title": "‘Like a bear trap’: Long Island teen recounts vicious shark attack",
            "link": "https://nypost.com/2022/07/21/long-island-teen-max-haynes-describes-surviving-shark-attack/",
            "keywords": null,
            "creator": [
                "Natalie O'Neill"
            ],
            "video_url": null,
            "description": "Max Haynes was catching waves with his friend, James, roughly 45 feet from the shoreline at Kismet Beach on Fire Island when the shark attacked.",
            "content": "Max Haynes was catching waves with his friend, James, roughly 45 feet from the shoreline at Kismet Beach on Fire Island when the shark attacked.",
            "pubDate": "2022-07-21 19:50:12",
            "image_url": "https://nypost.com/wp-content/uploads/sites/2/2022/07/max-haynes-shark-fire-island-comp.jpg?quality=90&strip=all",
            "source_id": "nypost",
            "country": [
                "united states of america"
            ],
            "category": [
                "top"
            ],
            "language": "english"
        },
        {
            "title": "Sean McVay, wife Veronika Khomyn hit ESPYs after lavish summer wedding",
            "link": "https://nypost.com/2022/07/21/sean-mcvay-hits-2022-espys-with-new-wife-veronika-khomyn/",
            "keywords": null,
            "creator": [
                "Jenna Lemoncelli"
            ],
            "video_url": null,
            "description": "Newlyweds Sean McVay and Veronika Khomyn stepped out in style for the 2022 ESPY Awards on Wednesday.",
            "content": "Newlyweds Sean McVay and Veronika Khomyn stepped out in style for the 2022 ESPY Awards on Wednesday.",
            "pubDate": "2022-07-21 19:49:34",
            "image_url": "https://nypost.com/wp-content/uploads/sites/2/2022/07/newspress-collage-23147065-1658432423148.jpg?quality=90&strip=all&1658418135",
            "source_id": "nypost",
            "country": [
                "united states of america"
            ],
            "category": [
                "top"
            ],
            "language": "english"
        },
        {
            "title": "Here’s how many people use Sacramento County cooling centers, how much they cost",
            "link": "https://www.kcra.com/article/heres-how-many-people-use-sacramento-county-cooling-centers-how-much-they-cost/40680763",
            "keywords": null,
            "creator": null,
            "video_url": null,
            "description": "We’ve been telling viewers about the open locations in Sacramento County and wanted to find out if they’re being used, by whom and at what cost.",
            "content": null,
            "pubDate": "2022-07-21 19:48:00",
            "image_url": "https://kubrick.htvapps.com/vidthumb/e97ea1c7-b079-4796-b5d0-ccf1efc886e2/e97ea1c7-b079-4796-b5d0-ccf1efc886e2_image.jpg",
            "source_id": "kcra",
            "country": [
                "united states of america"
            ],
            "category": [
                "top"
            ],
            "language": "english"
        },
        {
            "title": "European tourist unimpressed with sandwich served on Jet2 flight",
            "link": "https://nypost.com/2022/07/21/european-tourist-unimpressed-with-sandwich-served-on-jet2-flight/",
            "keywords": null,
            "creator": [
                "News.com.au"
            ],
            "video_url": null,
            "description": "Alex Holowko, known for his mountain bike content, took to TikTok to share his “shocking” plane food experience.",
            "content": "Alex Holowko, known for his mountain bike content, took to TikTok to share his “shocking” plane food experience.",
            "pubDate": "2022-07-21 19:46:15",
            "image_url": "https://nypost.com/wp-content/uploads/sites/2/2022/07/tourist-plane-food-99.jpg?quality=90&strip=all",
            "source_id": "nypost",
            "country": [
                "united states of america"
            ],
            "category": [
                "top"
            ],
            "language": "english"
        },
        {
            "title": "British spy chief says Russia is about to 'run out of steam' in Ukraine, opening the door for Ukrainian forces to 'strike back'",
            "link": "https://www.businessinsider.com/british-spy-chief-russia-run-out-of-steam-ukraine-2022-7",
            "keywords": null,
            "creator": null,
            "video_url": null,
            "description": "The British spy chief said that it's important for Ukrainian morale that they \"demonstrate their ability to strike back.\"",
            "content": null,
            "pubDate": "2022-07-21 19:45:09",
            "image_url": "https://i.insider.com/62d99f56d0011000190fdcc4?format=jpeg",
            "source_id": "businessinsider_us",
            "country": [
                "united states of america"
            ],
            "category": [
                "top"
            ],
            "language": "english"
        },
        {
            "title": "Looking for a COVID-19 test in Yolo County? Try checking a nearby vending machine",
            "link": "https://www.kcra.com/article/covid-test-yolo-county-vending-machine/40678668",
            "keywords": null,
            "creator": null,
            "video_url": null,
            "description": "The vending machines are located in West Sacramento, Woodland, Esparto, Winters and Davis.",
            "content": null,
            "pubDate": "2022-07-21 19:44:00",
            "image_url": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/poster-image-2022-07-21t124354-246-1658432655.jpg",
            "source_id": "kcra",
            "country": [
                "united states of america"
            ],
            "category": [
                "top"
            ],
            "language": "english"
        },
        {
            "title": "Android is ready for the Pixel Buds Pro’s AirPods-like audio switching trick",
            "link": "https://www.theverge.com/2022/7/21/23273231/android-pixel-buds-pro-audio-automatic-switching-headphones",
            "keywords": null,
            "creator": [
                "Chris Welch"
            ],
            "video_url": null,
            "description": null,
            "content": "Image: Google Google’s latest and most advanced wireless earbuds yet, the Pixel Buds Pro, won’t be on store shelves for another week. But the company has announced that its Android software is already prepared for one of the earbuds’ most convenient new features: the Pixel Buds Pro will be able to switch between devices automatically — no settings menus necessary. Much like the AirPods can hop between other Apple products (iPhone, iPad, Mac) depending on which one you’re actively using, Google’s flagship earbuds will be able to do the same across Android hardware. “Our audio switching technology builds on top of Fast Pair to use contextual information on what you’re listening to in order to switch the audio based on your actions,” Google’s Angela... Continue reading…",
            "pubDate": "2022-07-21 19:43:10",
            "image_url": null,
            "source_id": "theverge",
            "country": [
                "united states of america"
            ],
            "category": [
                "top"
            ],
            "language": "english"
        },
        {
            "title": "A bride wore a $24 wedding dress that she bought at Goodwill years before she was even engaged",
            "link": "https://www.insider.com/bride-thrifted-goodwill-wedding-dress-tiktok-2022-7",
            "keywords": [
                "Style",
                "Lifestyle",
                "Style",
                "Fashion",
                "Goodwill",
                "Thrift stores",
                "Wedding Dress",
                "Wedding Dresses",
                "TikTok",
                "Viral"
            ],
            "creator": [
                "cfernandez@insider.com (Celia Fernandez)"
            ],
            "video_url": null,
            "description": "Maranda Vandergriff went viral on TikTok for sharing how she transformed the thrifted gown into her dream wedding dress.",
            "content": "The bride found her wedding dress years before she actually got married.Maranda Vandergriff/Within the Pines Photography Maranda Vandergriff got married on November 1, 2020, in a wedding dress she bought at Goodwill. The dress cost $24, and she bought it years before she was even engaged.  In June, she shared a TikTok video that showed how it was altered. It garnered over 200,000 views. Maranda Vandergriff has been thrifting her whole life, but she didn't expect that a random gown she purchased from Goodwill would become her dream wedding dress years later.In June, the 27-year-old creative director shared a TikTok video of the thrifted dress she wore for her November 2020 wedding. The video has over 202,000 views as of Thursday.  @marandavandy Reply to @shaylynnwatkins8 I found my dream dress at a pretty unusual store #weddingdress #vintageweddingdress #goodwillfinds #vintagewedding #weddingtok #thriftedwedding ♬ Enchanted Forest Walk (3 Min) - CrazeMusic Vandergriff told Insider that she and her family have been participating as volunteer models in the Goodwill Vintage Fashion Show in Knoxville, Tennessee, for over a decade now. In 2014, she tried on a '70s-style wedding dress designed with a scalloped trim and a lace applique neckline, but she didn't end up wearing it on the runway. After the fashion show, the dress was put on sale for $30. As a model, she was entitled to a 20% off discount, so she purchased the wedding dress for $24. \"Since I've been thrifting my whole life, I know that when you find something special in the thrift store, you either get it or you may never see it again,\" Vandergriff said. \"I bought it even though I was not planning to get married at any point in time. It was just an option that I had for the future.\"Vandergriff bought the wedding dress at Goodwill.Maranda VandergriffIn 2019, Vandergriff got engaged to the same boyfriend she had been dating when she bought the wedding dress at Goodwill. She told Insider that after having it in her closet for five years, she realized it was her dream dress. \"I've been collecting vintage clothing for years now, so it just felt perfect to wear this vintage dress that I thrifted in my wedding,\" she added. When it came time to alter the dress, Vandergriff turned to her mom and grandmother for help. She used lace fabric her mom had purchased during a 2020 UK trip to create the new sleeves on the dress. Vandergriff also repurposed small beads from her mother's handmade wedding dress to stitch up a couple of pieces of the open scalloped edge on the sleeves. \"It was such a special experience to alter my wedding dress with the help of my mom and grandmother,\" she said. \"My mom made her wedding dress, and my grandmother taught me how to sew, so it felt like we were bringing things full circle and honoring my parents' wedding simultaneously.\"Vandergriff included beads from her mom's wedding dress.Within the Pines Photography\"Including multiple generations of my family in the process was special,\" Vandergriff added. \"It made wearing that dress on my wedding day that much more of a beautiful experience. It was an honor to have my whole family involved from start to finish.\"Vandergriff had help from her mom and grandmother to make her dream wedding look come to life.Within the Pines PhotographyIt took the bride, her mom, and grandmother about six weeks to alter the dress. But Vandergriff said her grandmother died shortly before the wedding and didn't get to see the final version of the dress. To honor her, she had one of her grandmother's scarves tied around her wedding bouquet. Vandergriff also celebrated her family by borrowing her wedding shoes from her sister. When Vandergriff saw the final version of her wedding dress, she said she couldn't have been happier. She told Insider that in 2019, she had sketched what she wanted her wedding look to be, and everything ended up matching the sketch perfectly. \"The wedding dress was almost identical to my original vision. I was thrilled to be able to bring that vision to life,\" she said. Vandergriff's wedding look ended up being an exact version of a sketch she did in 2019.Maranda Vandergriff Read the original article on Insider",
            "pubDate": "2022-07-21 19:42:42",
            "image_url": "https://i.insider.com/62c7210699259b00181e570f?format=jpeg",
            "source_id": "insider",
            "country": [
                "united states of america"
            ],
            "category": [
                "top"
            ],
            "language": "english"
        },
        {
            "title": "Minneapolis council again delays vote on reappointment of city's emergency director",
            "link": "https://www.startribune.com/minneapolis-council-again-delays-vote-on-reappointment-of-citys-emergency-director/600192027/",
            "keywords": null,
            "creator": [
                "Katelyn Vue"
            ],
            "video_url": null,
            "description": null,
            "content": null,
            "pubDate": "2022-07-21 19:42:31",
            "image_url": null,
            "source_id": "startribune",
            "country": [
                "united states of america"
            ],
            "category": [
                "top"
            ],
            "language": "english"
        }
    ],
    "nextPage": 1
}
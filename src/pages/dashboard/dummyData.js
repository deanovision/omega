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
    console.log(newUsers)
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
    console.log(newUser)
    setComments(newUser)
}
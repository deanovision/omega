import { useContext } from 'react';
import AuthorizedUserContext from '../contexts/AuthorizedUserContext';
import { Button, createStyles } from '@mantine/core';
import { followUser } from '../firebase/userModel';
// import UpdateProfile from '../pages/updateprofile/UpdateProfile';
import { UserPlus } from 'tabler-icons-react';
import { useParams } from 'react-router-dom';

const useStyles = createStyles(() => ({
  button: {
    // position: "sticky",
    // bottom: 10,
    // zIndex: 2,
    // borderRadius: 100
  }

}));

function FollowUser({user, align}) {
  const { classes } = useStyles();
  const {uid} = useParams()
  const {authUser} = useContext(AuthorizedUserContext)

  const addFollow = (myUid, userUid) => {
    followUser(myUid, userUid)
  }

  return (
    <>
      <Button 
        size="xs" 
        mt={10}
        uppercase
        leftIcon={<UserPlus size={20} />}
        variant="outline"
        className={classes.button} onClick={() => addFollow(authUser.uid, uid)}>
        Follow
      </Button>
    </>
  );
}
export default FollowUser
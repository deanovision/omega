import { useContext} from 'react';
import NotificationContext from '../contexts/NotificationContext';
import { Notification, createStyles } from '@mantine/core';
import { Check } from 'tabler-icons-react';

const useStyles = createStyles(() => ({
  notification: {
    position: 'sticky',
    bottom: 0,
    marginLeft: "auto",
    maxWidth: "300px"
  },
  hidden: {
    display: 'none'
  }
}));

function SimpleNotification({body}) {
  // const [open, setOpen] = useState(isOpen)
  const {setMessage, setNotificationOpen, notificationOpen} = useContext(NotificationContext)
  const {classes} = useStyles()
  const handleClassName = ()=> {
    return notificationOpen ? classes.notification : classes.hidden
  }
  const handleClose = ()=> {
    setNotificationOpen(false)
    setMessage("")
  }
  return (
    <>
      {/* <Notification title="Default notification">
        This is default notification with title and body
      </Notification> */}

      <Notification onClose={()=> handleClose()} className={handleClassName()} icon={<Check size={18} />} color="teal" title="Success">
        {body}
      </Notification>

      {/* <Notification icon={<IconX size={18} />} color="red">
        Bummer! Notification without title
      </Notification>

      <Notification
        loading
        title="Uploading data to the server"
        disallowClose
      >
        Please wait until data is uploaded, you cannot close this notification yet
      </Notification> */}
    </>
  );
}
export default SimpleNotification
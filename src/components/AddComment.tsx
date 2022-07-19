import { Textarea, Button, Transition} from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';

// const useStyles = createStyles((theme) => ({
//   addComment: {
//     display: "block",
//     // animation: "slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
//     // WebkitAnimation: "slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
//   },
//   removeComment: {
//     display: "none",
//   }
// }));

function AddComment({visible, setVisible}) {
  const clickOutsideRef = useClickOutside(() => setVisible(false));
  // const { classes } = useStyles();
  // const handleStyles = ()=> {
  //   return visible ? classes.addComment : classes.removeComment
  // }
  return (
    <Transition mounted={visible} transition="fade" duration={500} timingFunction="ease">
    {(styles) => 
    <div style={styles}>
      <div ref={clickOutsideRef}>
          <Textarea
          placeholder="Your comment"
          label="Your comment"
          required
          />
          <Button 
          onClick={e => console.log(e)} 
          fullWidth mt="xl" 
          color="dark">
          Submit
          </Button>
      </div>      
    </div>}
  </Transition>

  );
}
export default AddComment
import { Textarea, Button, Transition, createStyles} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  button: {
    maxWidth: "100px",
    marginLeft: "auto",
    borderRadius: "100px"
  },
}));

function AddComment({visible, clickOutsideRef}) {
  const { classes } = useStyles();

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
          className={classes.button}
          onClick={e => console.log(e)} 
          fullWidth mt="xl">
          Submit
          </Button>
      </div>      
    </div>}
  </Transition>

  );
}
export default AddComment
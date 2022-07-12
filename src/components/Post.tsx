import { 
    Textarea,
    // Paper,
    // Container,
    Button,
} from '@mantine/core';

function Post() {
  return (
    <>
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

{/* <Container size={420} my={40}> */}
      {/* <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Welcome back!
      </Title> */}
      {/* <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor<'a'> href="#" size="sm" onClick={(event) => {event.preventDefault(); navigate("../signup", {replace: true})}}>
          Create account
        </Anchor>
      </Text> */}

      {/* <Paper withBorder shadow="md" p={30} mt={30} radius="md"> */}
        {/* {
        error ?
        <Alert icon={<AlertCircle size={16} />} title="Whoops!" color="red">
            {error}
        </Alert>
        :
        null
        } */}
        {/* <Textarea
        placeholder="What do you want to say?"
        label="Your post"
        required
        />
        <Button 
          onClick={e => console.log(e)} 
          fullWidth mt="xl" 
          color="dark">
          Submit
        </Button>
      </Paper>
    </Container> */}
    </>
  );
}
export default Post
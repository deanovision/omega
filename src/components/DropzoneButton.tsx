import React, { useRef } from 'react';
import { Text, Group, createStyles, MantineTheme, useMantineTheme, Progress } from '@mantine/core';
import { Dropzone, DropzoneStatus, MIME_TYPES } from '@mantine/dropzone';
import { CloudUpload } from 'tabler-icons-react';
import { useContext } from "react";
import AuthorizedUserContext from "../contexts/AuthorizedUserContext";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    marginBottom: 30,
    marginTop: 20
  },

  dropzone: {
    borderWidth: 1,
    paddingBottom: 50,
  },

  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
  },

  control: {
    position: 'absolute',
    width: 250,
    left: 'calc(50% - 125px)',
    bottom: -20,
  },
}));

function getActiveColor(status: DropzoneStatus, theme: MantineTheme) {
  return status.accepted
    ? theme.colors[theme.primaryColor][6]
    : status.rejected
    ? theme.colors.red[6]
    : theme.colorScheme === 'dark'
    ? theme.colors.dark[0]
    : theme.black;
}

function DropzoneButton({progress, uploadFile, setUploadUrl, setProgress}) {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const openRef = useRef<() => void>();
  const {authUser} = useContext(AuthorizedUserContext)

  return (
    <div className={classes.wrapper}>
      <Dropzone
        openRef={openRef}
        onDrop={(files) => {uploadFile(files[0], setUploadUrl, setProgress, authUser.uid)}}
        className={classes.dropzone}
        radius="md"
        accept={['image/png', 'image/jpeg']}
        // maxSize={30 * 1024 ** 2}
      >
        {(status) => (
          <div style={{ pointerEvents: 'none' }}>
            <Group position="center">
              <CloudUpload size={50} color={getActiveColor(status, theme)} />
            </Group>
            <Text
              align="center"
              weight={700}
              size="lg"
              mt="xl"
              sx={{ color: getActiveColor(status, theme) }}
            >
              {status.accepted
                ? 'Drop files here'
                : status.rejected
                ? 'Pdf file less than 30mb'
                : 'Click to upload profile picture'}
            </Text>
            <Text align="center" size="sm" mt="xs" color="dimmed">
              Drag&apos;n&apos;drop files here to upload. We can accept only <i>.pdf</i> files that
              are less than 30mb in size.
            </Text>
          </div>
        )}
      </Dropzone>

      {/* <Button className={classes.control} size="md" radius="xl" onClick={() => openRef.current()}>
        Select files
      </Button> */}
      <Progress mt={10} color="green" radius="md" size="xl" value={progress} animate />
    </div>
  );
}
export default DropzoneButton
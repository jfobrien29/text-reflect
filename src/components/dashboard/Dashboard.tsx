import React from 'react';
import {
  Box,
  Button,
  useToast,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react';

import BaseLayout from '@/containers/BaseLayout';
import { Message } from '@/interfaces/message';

import { SAMPLE_MESSAGES } from './sampleData';

const Card: React.FC<any> = ({ title, children }) => {
  return (
    <Box className="flex flex-col w-full md:w-1/2 border borlder-slate py-2 rounded-md h-fit">
      <h2 className="text-lg md:text-xl font-semibold px-2">{title}</h2>
      <hr className="mb-2 mt-1" />
      <div className="px-2">{children}</div>
    </Box>
  );
};

const MessageBlock: React.FC<any> = ({ message }) => {
  return (
    <div className="bg-gray-700 p-2 rounded-t-xl rounded-bl-xl text-left">
      <p className="text-gray-400 text-sm">Sent: {message.date}</p>
      <p className="text-gray-200">{message.text}</p>
    </div>
  );
};

const Dashboard: React.FC<any> = () => {
  const toast = useToast();

  return (
    <BaseLayout>
      <div className="flex flex-col w-full">
        <div className="flex flex-col text-center max-w-4xl px-4 md:px-0 mx-auto w-full items-center">
          <h1 className="text-xl md:text-3xl font-semibold">My Dashboard</h1>
          <hr className="mt-4 border-px border-slate-100 w-full" />

          <div className="mt-12 text-left flex flex-col items-center w-full">
            <div className="flex flex-row-reverse gap-4 text-left flex-wrap md:flex-nowrap w-full justify-center">
              <div className="flex flex-col gap-2 justify-center items-center w-1/2">
                <div className="flex flex-col justify-center">
                  <h2 className="text-lg md:text-xl font-semibold">
                    Last Message
                  </h2>
                </div>
                <MessageBlock message={SAMPLE_MESSAGES[0]} />
              </div>
              <Card title="My Stats">
                <div className="flex gap-4">
                  <div className="w-1/3">
                    <p className="w-full">
                      <span>Days recorded:</span>
                      <span>3</span>
                    </p>
                    <p>
                      <span>Current streak:</span>
                      <span>3</span>
                    </p>
                    <p>
                      <span>Total responses:</span>
                      <span>3</span>
                    </p>
                  </div>
                  <div className="ml-6 flex flex-col justify-center">
                    <p>Next Milestone:</p>
                    <p>5 Days Recorded</p>
                  </div>
                  <CircularProgress value={(3 / 5) * 100} size="70px">
                    <CircularProgressLabel>3/5</CircularProgressLabel>
                  </CircularProgress>
                </div>
              </Card>
            </div>

            <hr className="mt-12 border-px border-slate-100 w-full" />

            <div className="mt-12 flex gap-4 text-left flex-wrap md:flex-nowrap w-full justify-center">
              <Card title="Recent History">
                <div className="flex flex-col gap-2">
                  {SAMPLE_MESSAGES.map((message: Message) => (
                    <MessageBlock message={message} />
                  ))}
                </div>
                <div className="w-full flex justify-center">
                  <Button
                    textColor="gray.800"
                    mt="0.5rem"
                    onClick={() =>
                      toast({
                        title: 'Coming Soon',
                        description: 'This feature is coming soon!',
                        status: 'info',
                        duration: 5000,
                        isClosable: true,
                        position: 'bottom-left',
                      })
                    }
                  >
                    See All
                  </Button>
                </div>
              </Card>
              <Card title="One Month Ago">
                <div className="flex flex-col gap-2">
                  {SAMPLE_MESSAGES.map((message: Message) => (
                    <MessageBlock message={message} />
                  ))}
                </div>
                <div className="w-full flex justify-center">
                  <Button
                    textColor="gray.800"
                    mt="0.5rem"
                    onClick={() =>
                      toast({
                        title: 'Coming Soon',
                        description: 'This feature is coming soon!',
                        status: 'info',
                        duration: 5000,
                        isClosable: true,
                        position: 'bottom-left',
                      })
                    }
                  >
                    See All
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Dashboard;

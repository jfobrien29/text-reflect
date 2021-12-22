import React from 'react';
import {
  Input,
  Textarea,
  InputGroup,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import BaseLayout from '@/containers/BaseLayout';
import { useRouter } from 'next/router';

const Register: React.FC<any> = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <BaseLayout>
      <div className="flex flex-col w-full">
        <div className="flex flex-col items-center text-center max-w-3xl px-4 md:px-1 mx-auto">
          <h1 className="text-xl md:text-3xl font-semibold">
            Welcome to Text Reflect!
          </h1>
          <div className="flex flex-col max-w-lg mt-10">
            <h2 className="text-lg md:text-xl font-semibold">
              Tell us a bit more about yourself to get started:
            </h2>
            <form onSubmit={onSubmit}>
              <div className="flex flex-wrap w-full gap-2 mt-4">
                <FormControl w="49%">
                  <FormLabel>First Name</FormLabel>
                  <InputGroup mt="0.5rem">
                    <Input
                      type="text"
                      placeholder="Jane"
                      w="300px"
                      {...register('firstName')}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl w="49%">
                  <FormLabel>Last Name</FormLabel>
                  <InputGroup mt="0.5rem">
                    <Input
                      type="text"
                      placeholder="Smith"
                      w="300px"
                      {...register('lastName')}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl w="100%">
                  <FormLabel>Goals</FormLabel>
                  <Textarea
                    placeholder="..."
                    type="text"
                    {...register('goals')}
                  />
                </FormControl>
                <FormControl w="49%">
                  <FormLabel>TimeZone</FormLabel>
                  <InputGroup mt="0.5rem">
                    <Input
                      type="text"
                      placeholder="..."
                      {...register('timeZone')}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl w="49%">
                  <FormLabel>Reminder Time</FormLabel>
                  <InputGroup mt="0.5rem">
                    <Input
                      type="text"
                      placeholder="..."
                      {...register('reminderTime')}
                    />
                  </InputGroup>
                </FormControl>
              </div>
              <Button type="submit" textColor="gray.800" mt="1rem">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Register;

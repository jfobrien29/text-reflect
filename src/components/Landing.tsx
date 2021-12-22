import React from 'react';
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';

import BaseLayout from '@/containers/BaseLayout';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

const Landing: React.FC<any> = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    if (data.phoneNumber.length === 10) {
      router.push('/verify');
    }
  });

  return (
    <BaseLayout>
      <div className="flex flex-col w-full">
        <div className="flex flex-col items-center text-center max-w-3xl px-4 md:px-1 mx-auto">
          <h1 className="text-xl leading-7 md:text-5xl font-semibold">
            Remember every experience. Record your memories via SMS.
          </h1>

          <div className="flex flex-col max-w-lg mt-10">
            <h2 className="mt-4 text-lg md:text-xl font-semibold">
              Get started with a phone number
            </h2>
            <form onSubmit={onSubmit}>
              <FormControl>
                <InputGroup mt="0.5rem">
                  <InputLeftAddon children="+1" textColor="gray.800" />
                  <Input
                    type="tel"
                    placeholder="Phone Number (US only)"
                    w="300px"
                    defaultValue=""
                    {...register('phoneNumber')}
                  />
                </InputGroup>
                {errors.phoneNumber && (
                  <FormErrorMessage>
                    {errors.phoneNumber?.message}
                  </FormErrorMessage>
                )}
              </FormControl>
              <Button
                type="submit"
                textColor="gray.800"
                mt="0.5rem"
                isLoading={isSubmitting}
              >
                Get Started
              </Button>
            </form>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Landing;

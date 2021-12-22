import React from 'react';
import { Input, InputGroup, InputLeftAddon, Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import BaseLayout from '@/containers/BaseLayout';
import { useRouter } from 'next/router';

const Verify: React.FC<any> = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    router.push('/register');
  });

  return (
    <BaseLayout>
      <div className="flex flex-col w-full">
        <div className="flex flex-col items-center text-center max-w-3xl px-4 md:px-1 mx-auto">
          <h1 className="text-xl md:text-3xl font-semibold">
            We've sent a code to your phone!
          </h1>
          <div className="flex flex-col max-w-lg mt-10">
            <h2 className="text-lg md:text-xl font-semibold">
              Enter your verification code.
            </h2>
            <form onSubmit={onSubmit}>
              <InputGroup mt="0.5rem">
                <Input
                  type="text"
                  placeholder="Verification Code (6 digits)"
                  w="300px"
                  {...register('verificationCode')}
                />
              </InputGroup>
              <Button type="submit" textColor="gray.800" mt="0.5rem">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Verify;

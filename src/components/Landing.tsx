import React from 'react';
import { Input, InputGroup, InputLeftAddon, Button } from '@chakra-ui/react';

import BaseLayout from '@/containers/BaseLayout';

const Landing: React.FC<any> = () => (
  <BaseLayout>
    <div className="flex flex-col w-full">
      <div className="flex flex-col items-center text-center max-w-3xl px-4 mx-auto">
        <h1 className="text-xl leading-7 md:text-5xl font-semibold">
          Remember every experience with your memory AI assistant.
        </h1>

        <div className="flex flex-col max-w-lg mt-10">
          <h2 className="mt-4 text-lg md:text-xl font-semibold">
            Get started with a phone number.
          </h2>
          <form
            onSubmit={() => {
              console.log('Here');
            }}
          >
            <InputGroup mt="0.5rem">
              <InputLeftAddon children="+1" textColor="gray.800" />
              <Input
                type="tel"
                placeholder="Phone Number (US only)"
                w="300px"
              />
            </InputGroup>
            <Button type="submit" textColor="gray.800" mt="0.5rem">
              Get Started
            </Button>
          </form>
        </div>
      </div>
    </div>
  </BaseLayout>
);

export default Landing;

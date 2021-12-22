import { Message } from '@/interfaces/message';

const MESSAGE_1: Message = {
  id: '3',
  text: 'Today x,y,z ....',
  date: '12/21/2021 at 9:15 PM',
};

const MESSAGE_2: Message = {
  id: '2',
  text: 'Today we had the conversation with out partners ...',
  date: '12/20/2021 at 8:00 PM',
};

const MESSAGE_3: Message = {
  id: '1',
  text: "Today I can't believe that this is ....",
  date: '12/19/2021 at 8:00 PM',
};

export const SAMPLE_MESSAGES: Message[] = [MESSAGE_1, MESSAGE_2, MESSAGE_3];

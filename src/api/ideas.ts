import { IUser } from '@/interfaces/user';
import { IDEAS_COLLECTION } from '@/utils/constants';
import { firebaseAdmin } from '@/utils/firebaseAdmin';

export const IDEA_TEXT = 'IDEA';

const IDEAS_REF = firebaseAdmin.firestore().collection(IDEAS_COLLECTION);

export const handleIdeaText = async (
  message: string,
  user: IUser,
): Promise<void> => {
  const trimmedMessage = message.trim().replace(IDEA_TEXT, '');

  await IDEAS_REF.add({
    value: trimmedMessage,
    fromName: user.name,
    fromId: user.id,
    fromPhoneNumber: user.phoneNumber,
  });
};

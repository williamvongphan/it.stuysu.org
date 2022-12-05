import {SocialType} from './Social';

// Member type:
export type MemberType = {
    name: string;
    image: string;
    title: string;
    roles: string[];
    bio: string;
    socials: SocialType[];
};
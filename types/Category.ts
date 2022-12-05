// Team category type
import {MemberType} from "./Member";

export type CategoryType = {
    name: string;
    description: string;
    members: MemberType[];
}
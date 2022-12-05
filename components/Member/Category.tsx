// Team component
// Contains either a list of members or a list of categories
import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import styles from '../../styles/Team.module.css';
import { MemberType } from '../../types/Member';
import {CategoryType} from '../../types/Category';

import { MemberCard } from './MemberCard';

export const Category = (props: { category: CategoryType }) => {
    return (
        <div className="flex flex-col align-left text-left justify-left w-full h-full xl:p-4 p-2 bg-white mb-8">
            <h2 className="mt-4 text-3xl font-bold text-gray-900">{props.category.name}</h2>
            <h3 className="mt-2 text-xl font-medium text-gray-900">{props.category.description}</h3>
            <div className="flex flex-wrap justify-center mt-4 space-x-4">
                {props.category.members.map((member, key) => (
                    <MemberCard member={member} key={key} />
                ))}
            </div>
        </div>
    );
};
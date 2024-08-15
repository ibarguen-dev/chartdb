import React from 'react';
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/accordion/accordion';
import { RelationshipListItemHeader } from './relationship-list-item-header/relationship-list-item-header';
import { RelationshipListItemContent } from './relationship-list-item-content/relationship-list-item-content';
import { DBRelationship } from '@/lib/domain/db-relationship';

export interface RelationshipListItemProps {
    relationship: DBRelationship;
}

export const RelationshipListItem: React.FC<RelationshipListItemProps> = ({
    relationship,
}) => {
    return (
        <AccordionItem value="item-1" className="rounded-md">
            <AccordionTrigger className="hover:no-underline hover:bg-accent rounded-md px-2 py-0 data-[state=open]:rounded-b-none">
                <RelationshipListItemHeader relationship={relationship} />
            </AccordionTrigger>
            <AccordionContent className="pb-0 p-1">
                <RelationshipListItemContent relationship={relationship} />
            </AccordionContent>
        </AccordionItem>
    );
};
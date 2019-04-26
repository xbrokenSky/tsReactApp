import React from 'react';

export interface ItemProps {
    label: string | null;
    removeItem: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

import React from 'react';

export interface IBadgesProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    backgroundColor?: string;
    color?: string;
}

export const Badges: React.FC<IBadgesProps> = (props) => {
    const { children, style, backgroundColor, color } = props;

    let _style: React.CSSProperties = style || {};

    /** Override Defaults */
    if (backgroundColor) _style.backgroundColor = backgroundColor;
    if (color) _style.color = color;

    return (
        <button style={_style} {...props}>
            {children}
        </button>
    );
};

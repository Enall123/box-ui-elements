// @flow
import * as React from 'react';
import { SEESEE } from '../../common/variables';

import AccessibleSVG from '../accessible-svg';

type Props = {
    className?: string,
    color?: string,
    height?: number,
    /** A text-only string describing the icon if it's not purely decorative for accessibility */
    title?: string | React.Element<any>,
    width?: number,
};

const IconSmallClose = ({ className = '', color = SEESEE, height = 8, title, width = 8 }: Props) => (
    <AccessibleSVG
        className={`icon-close ${className}`}
        height={height}
        title={title}
        viewBox="181 11 8 8"
        width={width}
    >
        <path
            className="fill-color"
            d="M189 11.806l-.806-.806L185 14.194 181.806 11l-.806.806L184.194 15 181 18.194l.806.806L185 15.806 188.194 19l.806-.806L185.806 15"
            fill={color}
        />
    </AccessibleSVG>
);

export default IconSmallClose;

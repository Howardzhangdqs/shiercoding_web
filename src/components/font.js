import React from 'react';

export const Mono = ({ text }) => (
    <span style={{ "font-family": "'Ubuntu Mono', monospace" }}>
        {text}
    </span>
);

export const Badge = ({ text }) => (
    <span style={{
        border: "1px solid var(--ifm-font-color-base)",
        borderRadius: "5px",
    }}>
        {text}
    </span>
);
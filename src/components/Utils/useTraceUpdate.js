import React, { useEffect } from 'react';

function useTraceUpdate(props) {
    const prev = React.useRef(props);
    useEffect(() => {
        const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
            if (prev.current[k] !== v) {
                ps[k] = [prev.current[k], v];
            }
            return ps;
        }, {});
        if (Object.keys(changedProps).length > 0) {
        }
        prev.current = props;
    });
}

export default useTraceUpdate;
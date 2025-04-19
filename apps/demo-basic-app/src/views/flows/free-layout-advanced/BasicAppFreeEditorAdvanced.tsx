import { useEffect, useState } from 'react';
import { Editor } from './editor';

const BasicAppFreeEditorAdvanced: any = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        // only render <Editor /> in browser client
        return null
    }

    return (
        <div>
            <Editor />
        </div>
    );
};


export default BasicAppFreeEditorAdvanced;

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFormat } from '../../reducers/heroPageReducer';
import StandardPost from '../../components/Layouts/StandardPost';
import HeroHeader from '../../components/Headers/HeroHeader';
import Paper from '../../components/Paper';

function HeroPage() {
    const dispatch = useDispatch();
    const contentFormat = useSelector((state) => state.heroPage);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(getFormat());
        setLoading(false);
    }, [dispatch]);

    return loading ? (
        <div>loading</div>
    ) : (
        <StandardPost>
            <HeroHeader contentFormat={contentFormat}/>
            <Paper contentFormat={contentFormat} />
        </StandardPost>
    );
}

export default HeroPage;

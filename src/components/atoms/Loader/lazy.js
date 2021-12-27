import { Suspense } from 'react';
import Loader from 'components/atoms/Loader/Loader';

const Lazy = (ToLoad) => (props) => (
    <Suspense fallback={<Loader />}>
        <ToLoad {...props} />
    </Suspense>
);

export default Lazy;

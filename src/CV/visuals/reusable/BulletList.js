import React from 'react';

const BulletList = ({ data, isOrdered }) => {
    return (
        <div>
            {isOrdered && <ol>
                <Sub data={data} />
            </ol>}

            {!isOrdered && <ul>
                <Sub data={data} />
            </ul>}

        </div>
    );
};

const Sub = ({ data }) => {
    return (
        <React.Fragment>
            {            data.map(item => <li>{item}</li>)}
        </React.Fragment>
    )
}

export default BulletList;
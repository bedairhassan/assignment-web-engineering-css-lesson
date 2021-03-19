import React from 'react';

const Table = ({data}) => {
    return (
        <div>
            <table class="table">
                {data.map(item=><tr>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                </tr>)}
            </table>
        </div>
    );
};

export default Table;
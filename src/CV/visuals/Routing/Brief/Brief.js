import React from 'react';

// reusable
import Table from '../../reusable/Table'

const Brief = () => {

    const data = [

        { 'title': 'Frontend', 'description': 'React JS, Angular' },
        { 'title': 'Backend', 'description': 'Nodejs, Spring Boot' },
        { 'title': 'Future', 'description': 'Interested in Web Security.' },
    ]

    return (
        <div>
            <Table data={data} />
        </div>
    );
};

export default Brief;
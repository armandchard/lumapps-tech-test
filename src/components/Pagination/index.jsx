import React, { useState, useEffect } from 'react';

const Pagination = ({ limit, total, onPageChange }) => {
    const [pages] = useState(Math.round(total / limit));
    const [currentPage, setCurrentPage] = useState(1);
    const [paginationGroup, setPaginationGroup] = useState()

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
        onPageChange(currentPage * limit);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
        onPageChange(currentPage * limit);
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
        onPageChange(pageNumber * limit);
    }

    const getPaginationGroup = () => {
        let start = currentPage > (limit - 1) ? currentPage - (limit - 1) : 0
        const end = Math.round(total / limit) + 1;
        return new Array(limit).fill().map((_, idx) => start + idx + 1).filter(idx => idx < end);
    };

    useEffect(() => {
        const group = getPaginationGroup();
        setPaginationGroup(group);
    }, [currentPage])

    return (
        <div className="pagination">
            <button
                onClick={goToPreviousPage}
                className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
            >
                {'<'}
            </button>

            {paginationGroup ? paginationGroup.map((item, index) => (
                <button
                    key={index}
                    onClick={changePage}
                    className={`paginationItem ${currentPage === item ? 'active' : null}`}
                >
                    <span>{item}</span>
                </button>
            )) : null}

            <button
                onClick={goToNextPage}
                className={`next ${currentPage === pages ? 'disabled' : ''}`}
            >
                {'>'}
            </button>
        </div>
    )
};

export default Pagination;

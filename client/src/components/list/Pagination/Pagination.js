import React from 'react';
import './Pagination.scss'
import Button from 'components/common/Button'

const Pagination = ({page, lastPage, tag}) => {
  const createPagePath = page => (
    tag ? `/tag/${tag}/${page}` : `/page/${page}`
  )
  return (
    <div className='pagination'>
      <Button disabled={page === 1} to={createPagePath(page - 1)}>
        이전 페이지
      </Button>
      <div className='number'>
        페이지 {page}
      </div>
      <Button disabled={page === lastPage} to={createPagePath(page + 1)}>
        다음 페이지
      </Button>
    </div>
  );
};

export default Pagination;
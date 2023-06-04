import css from './StatusFilter.module.css';

import { useSelector } from 'react-redux';
import { statusFilters } from 'redux/constants';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from '../../redux/filter-slice';
import { selectStatusFilter } from 'redux/selectors';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </button>
      <button
        selected={filter === statusFilters.follow}
        onClick={() => handleFilterChange(statusFilters.follow)}
      >
        Follow
      </button>
      <button
        selected={filter === statusFilters.followings}
        onClick={() => handleFilterChange(statusFilters.followings)}
      >
        Followings
      </button>
    </div>
  );
};

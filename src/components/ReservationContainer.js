import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ReservedContainer = () => {
  const dispatch = useDispatch();
  const { reservedItems, total, amount } = useSelector(
    (store) => store.reservation,
  );

  if (amount < 1) {
    return (
      <section className="car">
        <header>
          <h2>Reserved</h2>
          <h4 className="empty-car">No Car Reserved Yet</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="car">
      <header>
        <h2>Reserved Car List</h2>
      </header>
      <div>
        {reservedItems.map((item) => (
          <ReservedItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="car-total">
          <h4>
            total
            {' '}
            <span>
              $
              {total.toFixed(2)}
            </span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          RESERVATIONS
        </button>
      </footer>
    </section>
  );
};
export default ReservedContainer;

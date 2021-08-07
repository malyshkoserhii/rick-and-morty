import s from './WatchList.module.css';

const WatchList = ({ children }) => {
  return <ul className={s.WatchList}>{children}</ul>;
};

export default WatchList;

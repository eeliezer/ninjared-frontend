import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import { LayoutWrapper } from './LayoutStyles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHiddenMenu } from '../../redux/user/userSlice';

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const hiddenMenu = useSelector(state => state.user.hiddenMenu);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!hiddenMenu) {
      dispatch(toggleHiddenMenu());
    }
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [pathname]);

  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;

import Link from '../../components/UI/Link/Link';

import {
  FoundContainerStyled,
  FoundSubtitleStyled,
  FoundTextStyled,
  FoundTitleStyled,
} from './PageNotFoundStyles';

const PageNotFound = () => {
  return (
    <div>
      <FoundContainerStyled>
        <FoundTextStyled>
          <FoundTitleStyled>404 Error</FoundTitleStyled>
          <FoundSubtitleStyled>
            ¡Aqui no está conectada la red!
          </FoundSubtitleStyled>
          <p>¡Los ninjas no encontraron ninguna información aquí!</p>
          <Link />
        </FoundTextStyled>
        <img
          src='https://res.cloudinary.com/divurmndi/image/upload/v1684456582/pngaaa.com-355440_cq7fcc.png'
          alt=''
          className='imgNotFound'
        />
      </FoundContainerStyled>
    </div>
  );
};

export default PageNotFound;

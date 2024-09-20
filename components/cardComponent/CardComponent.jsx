import cardStyles from"./index.module.scss";
import PropTypes from "prop-types";

import { BANNER_LTR } from "../../constants/constImages";
import { BANNER_RTL } from "../../constants/constImages";

const CardComponent = ({ rtl = true , title="" ,  description=""  }) => {
  return (
    <div className={cardStyles.cardSection}>
      {rtl === true ? (
        <div className={cardStyles.rtlSection}>
          <div className={cardStyles.description}>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <div className={cardStyles.bannerImage}>
            <img src={BANNER_LTR} alt="" />
          </div>
        </div>
      ) : (
        <div className={cardStyles.ltrSection}>
         <div className={cardStyles.description}>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <div className={cardStyles.bannerImage}>
            <img src={BANNER_RTL} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

// PropTypes validation
CardComponent.propTypes = {
  rtl: PropTypes.bool, // rtl should be a boolean
  title: PropTypes.string,
  description: PropTypes.string,
};

export default CardComponent;

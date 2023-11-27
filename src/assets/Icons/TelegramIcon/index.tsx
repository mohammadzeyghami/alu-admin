import { IconProps } from "..";

const TelegramIcon = ({
  color = "#000",
  width = "20px",
  height = "20px",
  className,
}: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" version="1.1">
      <g
        className={className}
        id="页面-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="Brand" transform="translate(-672.000000, -0.000000)">
          <g id="telegram_line" transform="translate(672.000000, 0.000000)">
            <path
              d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
              id="MingCute"
              fill-rule="nonzero"
            ></path>
            <path
              d="M21.8394,6.05639 C22.0315,4.8917 20.8652,3.97177 19.7773,4.42984 L2.67703,11.63 C1.48461,12.132 1.42351,13.8558 2.67788,14.3758 C3.60596,14.7605 5.02633,15.3246 6.45085,15.7943 C7.61932,16.1795 8.8931,16.5371 9.91353,16.6383 C10.1929,16.9725 10.5445,17.2935 10.9017,17.5872 C11.4487,18.0371 12.1074,18.5012 12.7873,18.9455 C14.1489,19.8352 15.6597,20.6865 16.678,21.2396 C17.8949,21.9006 19.3517,21.1395 19.5705,19.8131 L21.8394,6.05639 Z M4.59485,12.9925 L19.7186,6.62459 L17.6009,19.4649 C16.6024,18.9219 15.163,18.1087 13.8813,17.2713 C13.2329,16.8475 12.6407,16.4279 12.172,16.0425 C12.0051,15.9052 11.8638,15.7802 11.7461,15.6683 L15.7072,11.7071 C16.0977,11.3166 16.0977,10.6834 15.7072,10.2929 C15.3167,9.90237 14.6835,9.90237 14.293,10.2929 L9.95476,14.6311 C9.22132,14.5373 8.19888,14.2647 7.07709,13.8949 C6.21377,13.6102 5.34574,13.2869 4.59485,12.9925 Z"
              id="形状"
              fill={color}
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default TelegramIcon;
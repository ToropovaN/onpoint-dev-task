import React from "react";

import styles from "./HomeButton.module.css";

const HomeButton = ({ onClick }) => {
  return (
    <div className={styles.HomeButton} onClick={onClick}>
      <svg width="153" height="25.5" viewBox="0 0 300 50">
        <path d="M 90.325705,0.00398254 V 50.000001 h 2.55113 V 0.00398254 Z M 21.496909,2.6489603 0,21.822656 1.6988381,23.724511 21.496909,6.0677042 41.279657,23.724511 42.97658,21.822656 Z M 199.38077,13.845586 c -6.43327,0 -11.67545,5.242183 -11.67545,11.675442 0,6.433259 5.24218,11.675442 11.67545,11.675442 6.43326,0 11.67544,-5.242183 11.67544,-11.675442 0,-6.433259 -5.24218,-11.675442 -11.67544,-11.675442 z m 68.29635,0.0077 c -3.28538,0.101205 -6.4872,1.583007 -8.68954,4.276782 -3.61412,4.420551 -3.49363,10.831192 0.28345,15.113338 3.77709,4.282145 10.12294,5.202019 14.96013,2.168077 l 1.0802,-0.676088 -1.356,-2.160417 -1.0783,0.678004 c -3.79422,2.379787 -8.73189,1.663856 -11.69459,-1.695008 -2.9627,-3.358864 -3.05512,-8.345912 -0.22026,-11.813341 2.83487,-3.467427 7.74115,-4.367755 11.62181,-2.131687 l 1.1032,0.637783 1.27365,-2.210213 -1.1051,-0.635867 c -1.23686,-0.71268 -2.55793,-1.174748 -3.9014,-1.398142 -0.75571,-0.12566 -1.51908,-0.176577 -2.27725,-0.153221 z M 142.6775,13.922236 V 37.208 h 2.54921 v -9.156872 h 5.45467 c 2.09779,0 3.82894,-0.933142 4.91073,-2.290653 1.08181,-1.357512 1.57002,-3.078658 1.56286,-4.780495 -0.007,-1.70184 -0.50928,-3.417551 -1.59157,-4.770921 -1.08231,-1.353368 -2.80359,-2.286823 -4.88202,-2.286823 z m 23.66307,0 V 37.208 h 2.54922 v -9.156872 h 3.2502 l 7.11711,9.158787 h 3.22913 l -7.32588,-9.428837 c 1.26008,-0.367888 2.31143,-1.09011 3.05293,-2.020603 1.0818,-1.357512 1.57193,-3.078658 1.56478,-4.780495 -0.007,-1.70184 -0.51121,-3.417551 -1.5935,-4.770921 -1.08231,-1.353368 -2.80168,-2.286823 -4.8801,-2.286823 z m 69.55276,0 v 23.281935 h 13.39535 v -2.549216 h -10.84614 v -8.360122 h 9.31394 v -2.549228 h -9.31394 v -7.274167 h 10.84998 v -2.549215 z m 43.49754,0 v 2.549215 h 8.33522 v 20.721227 h 2.54922 V 16.471412 h 8.33522 v -2.549215 h -8.33522 z m -57.31807,0.0058 v 18.976325 c 0,0.897124 -0.42724,1.324461 -1.33877,1.595414 -0.91153,0.270953 -2.26307,0.144314 -3.46663,-0.587986 l -1.32535,2.177654 c 1.78856,1.088247 3.80848,1.362891 5.51979,0.854207 1.71129,-0.508685 3.16017,-2.041416 3.16017,-4.039289 V 13.927943 Z m -22.69203,2.466858 c 5.05536,0 9.12622,4.070873 9.12622,9.126227 0,5.055354 -4.07086,9.126228 -9.12622,9.126228 -5.05536,0 -9.12623,-4.070874 -9.12623,-9.126228 0,-5.055354 4.07087,-9.126225 9.12623,-9.126227 z m -54.15406,0.07662 h 5.45467 c 1.36367,0 2.23616,0.513337 2.89014,1.331107 0.65397,0.817771 1.02921,1.995898 1.03423,3.188912 0.005,1.193016 -0.35904,2.367623 -1.00742,3.181252 -0.64838,0.813629 -1.52393,1.327278 -2.91695,1.327278 h -5.45467 z m 23.66308,0 h 4.41467 c 1.36367,0 2.23617,0.513337 2.89014,1.331107 0.65397,0.817771 1.02923,1.995898 1.03425,3.188912 0.005,1.193016 -0.36097,2.367623 -1.00935,3.181252 -0.64839,0.813629 -1.52201,1.327278 -2.91504,1.327278 h -4.41467 z M 5.5197871,21.949063 V 40.14789 H 18.55315 v -9.742942 h 5.872195 V 40.14789 H 37.458708 V 21.949063 H 34.909493 V 37.598674 H 26.97456 V 27.855732 H 16.003935 v 9.742942 H 8.0690019 V 21.949063 Z" />
      </svg>
    </div>
  );
};

export default HomeButton;

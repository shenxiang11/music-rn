/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconPrev = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M508.32046 0C257.247844 0 43.706537 178.025747 0.47994 423.339083a31.996 31.996 0 0 0 26.172728 36.987376 32.315961 32.315961 0 0 0 37.243345-25.980752C101.68329 219.716535 288.603925 63.928009 508.32046 63.928009c248.8009 0 451.175603 200.998875 451.175603 448.103987 0 247.073116-202.374703 448.071991-451.175603 448.071991-219.684539 0-406.605174-155.788526-444.360455-370.417698a32.219973 32.219973 0 0 0-37.243345-25.980752 31.996 31.996 0 0 0-26.172728 36.987376c43.162605 245.313336 256.703912 423.339083 507.776528 423.339083C792.604924 1024.031996 1023.872016 794.364704 1023.872016 512.031996S792.604924 0 508.32046 0z m196.071491 435.881515v152.300962l-152.268966-76.150481 152.268966-76.150481z m-255.712036 152.300962l-152.300962-76.150481 152.300962-76.150481v152.300962z m63.736033-205.030371c-0.063992-2.111736-0.7999-4.15948-1.27984-6.23922s-0.767904-4.223472-1.663792-6.175228c-0.127984-0.255968-0.095988-0.607924-0.255968-0.927884-0.671916-1.407824-1.887764-2.303712-2.783652-3.551556-1.343832-1.951756-2.55968-3.903512-4.287464-5.503312-1.471816-1.343832-3.1996-2.207724-4.863392-3.295588-1.791776-1.087864-3.487564-2.335708-5.503312-3.071616-2.111736-0.767904-4.287464-0.95988-6.527184-1.311836-1.5998-0.255968-2.975628-0.927884-4.63942-0.927884-0.351956 0-0.671916 0.191976-0.991877 0.191976-2.07974 0.031996-4.063492 0.767904-6.175228 1.247844s-4.287464 0.767904-6.207224 1.663792c-0.287964 0.127984-0.63992 0.095988-0.95988 0.255968l-255.712036 127.888014a31.996 31.996 0 0 0 0 57.176852l255.712036 127.888014c0.287964 0.127984 0.607924 0.063992 0.895888 0.223972 4.063492 1.855768 8.47894 3.103612 13.214349 3.135608l0.191976 0.031996h0.063992a32.891889 32.891889 0 0 0 13.790276-3.455568c2.71966-1.343832 5.215348-3.007624 7.51906-5.055368 0.47994-0.47994 1.087864-0.767904 1.535808-1.247844a31.83602 31.83602 0 0 0 5.727284-7.935008c0.15998-0.31996 0.127984-0.671916 0.255968-0.927884 0.895888-1.951756 1.151856-4.063492 1.663792-6.143232 0.47994-2.111736 1.215848-4.15948 1.27984-6.271216 0-0.351956 0.191976-0.63992 0.191976-0.95988v-76.150481l209.477815 104.722909c0.287964 0.127984 0.607924 0.063992 0.863892 0.223972 4.063492 1.855768 8.47894 3.103612 13.214349 3.135608l0.191976 0.031996h0.063992a32.731909 32.731909 0 0 0 13.822272-3.455568c2.71966-1.343832 5.215348-3.007624 7.487064-5.055368 0.511936-0.47994 1.087864-0.767904 1.567804-1.247844a32.635921 32.635921 0 0 0 5.727284-7.935008c0.15998-0.31996 0.127984-0.671916 0.255968-0.927884 0.895888-1.951756 1.151856-4.063492 1.631796-6.143232 0.511936-2.111736 1.215848-4.15948 1.27984-6.271216 0-0.351956 0.191976-0.63992 0.191976-0.95988v-255.776028c0-0.351956-0.191976-0.63992-0.191976-0.991876-0.063992-2.111736-0.767904-4.15948-1.27984-6.23922s-0.735908-4.223472-1.631796-6.175228c-0.127984-0.255968-0.095988-0.607924-0.255968-0.927884-0.703912-1.407824-1.91976-2.271716-2.783652-3.51956-1.343832-1.983752-2.55968-3.935508-4.31946-5.535308-1.471816-1.343832-3.167604-2.207724-4.7994-3.263592-1.823772-1.11986-3.551556-2.367704-5.567304-3.103612-2.07974-0.767904-4.287464-0.95988-6.463192-1.311836-1.5998-0.255968-3.03962-0.927884-4.703412-0.927884-0.31996 0-0.63992 0.191976-0.991877 0.191976-2.07974 0.031996-4.095488 0.767904-6.175228 1.247844s-4.255468 0.767904-6.207224 1.663792c-0.287964 0.127984-0.607924 0.095988-0.927884 0.255968l-209.477815 104.722909v-76.118485c0-0.351956-0.191976-0.63992-0.191976-0.991876z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconPrev.defaultProps = {
  size: 18,
};

export default IconPrev;
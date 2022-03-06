import * as React from "react";
import { SvgXml } from "react-native-svg";

const xml = `
<svg height="100%" style="fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="100%" xmlns:vectornator="http://vectornator.io" version="1.1" viewBox="0 0 1024 1024">
<metadata>
<vectornator:setting key="DimensionsVisible" value="1"/>
<vectornator:setting key="PencilOnly" value="0"/>
<vectornator:setting key="SnapToPoints" value="0"/>
<vectornator:setting key="GuidesVisible" value="1"/>
<vectornator:setting key="OutlineMode" value="0"/>
<vectornator:setting key="RulersVisible" value="1"/>
<vectornator:setting key="SnapToEdges" value="0"/>
<vectornator:setting key="CMYKEnabledKey" value="0"/>
<vectornator:setting key="DisplayWhiteBackground" value="0"/>
<vectornator:setting key="doHistoryDisabled" value="0"/>
<vectornator:setting key="SnapToGuides" value="1"/>
<vectornator:setting key="TimeLapseWatermarkDisabled" value="0"/>
<vectornator:setting key="DynamicGuides" value="0"/>
<vectornator:setting key="SnapToGrid" value="0"/>
<vectornator:setting key="IsolateActiveLayer" value="0"/>
<vectornator:setting key="Units" value="Pixels"/>
</metadata>
<defs/>
<g id="Layer 1" vectornator:layerName="Layer 1">
<path d="M314.838+150.041C314.838+150.041+453.718+110.813+455.876+139.336C455.876+139.336+405.129+201.917+472.963+381.759L528.722+331.32L549.17+418.133L659.826+406.266L638.772+511.411L750.523+539.071L693.577+595.029L756.564+663.104L686.415+699.212L697.27+790.556L636.49+770.846L593.784+877.054L549.809+830.822L511.353+898.971L471.917+846.324L418.963+908.539L389.054+850.008L317.162+892.465L329.245+784.216L253.27+815.627L283.461+743.535L197.9+728.407L250.332+657.61L179.419+633.087L240.739+597.062L183.884+544.888L265.784+521.154L204.797+464.041L277.203+437.12L239.726+377.32L352.34+385.004L317.162+343.743L391.361+372.805L391.917+203.776L314.838+150.041Z" opacity="1" fill="#7bd878"/>
<path d="M393.786+407.288L315.548+407.533L393.786+407.288Z" opacity="1" fill="#e2ffed"/>
<path d="M394.68+415.229L324.734+408.459" opacity="1" fill="#e2ffed"/>
<path d="M163.372-3.96841L305.403+341.781" opacity="1" fill="#feec21"/>
<path vectornator:shadowColor="#fff697" vectornator:shadowOpacity="1" vectornator:shadowRadius="50" d="M432.291+796.833L369.144+626.355L398.329+427.71L445.945+612.134L432.291+796.833Z" vectornator:shadowOffset="6.18744" fill="#feec21" opacity="1" vectornator:shadowAngle="1.5708"/>
</g>
</svg>
`;

export default () => <SvgXml xml={xml} width="100%" height="100%" />;

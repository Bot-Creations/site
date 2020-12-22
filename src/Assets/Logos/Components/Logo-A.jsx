export default function Logo(props) {
    return (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="50px" height="50px" viewBox="0 0 71.000000 71.000000"
            preserveAspectRatio="xMidYMid meet" style={props.style ? props.style : { bottom: -35 + "px", position: "relative" }}>

            <g transform="translate(0.000000,71.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="none">
                <path d="M321 650 c-11 -25 -74 -162 -140 -305 l-120 -260 41 -3 c22 -2 46 -1
52 1 7 3 50 89 97 191 46 102 86 185 89 185 3 0 43 -84 90 -187 l85 -187 53
-3 c28 -2 52 -1 52 1 0 3 -42 96 -94 208 -51 112 -114 249 -139 304 l-46 100
-20 -45z"/>
            </g>
        </svg>
    );
};
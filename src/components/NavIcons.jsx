import React from "react";
import { HeartIcon } from "@heroicons/react/20/solid";

function NavIcons() {
  return (
    <div className="flex w-[104px] items-center justify-end space-x-4">
      <a href="https://cosmicjs.com" target="_blank" className="shrink-0">
         <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 500 500" fill="none">
           <path d="M198.942 172.131C210.987 161.524 222.106 150.916 234.151 141.273C224.885 134.523 216.547 128.737 208.208 122.951C198.016 131.63 187.824 141.273 177.632 150.916C187.824 154.773 195.236 162.488 198.942 172.131Z" fill="#3DBFF5"></path>
           <path d="M169.345 221.419C191.641 221.479 209.763 203.179 209.822 180.545C209.88 157.91 191.853 139.512 169.557 139.452C147.261 139.392 129.139 157.693 129.081 180.327C129.022 202.962 147.049 221.359 169.345 221.419Z" fill="#3DBFF5"></path>
           <path d="M205.035 408.818C147.774 440.607 98.2764 448.555 75.9542 426.699C44.8972 395.903 73.0426 315.436 140.98 233.976C130.304 230.995 121.569 223.048 116.717 213.114C17.7223 326.364 -26.9222 440.607 16.7517 483.324C52.6614 519.087 139.039 495.245 234.151 431.666C224.446 424.712 214.74 416.765 205.035 408.818Z" fill="#3DBFF5"></path>
           <path d="M270.348 137.373C273.251 126.476 280.993 117.56 290.67 112.606C176.481 16.5085 60.3567 -26.0914 16.8101 16.5085C-18.9949 52.1736 4.22997 136.383 69.0661 229.508C76.8077 219.601 84.5493 210.685 92.2909 200.778C60.3567 144.308 51.6474 95.7642 73.9046 72.9782C105.839 42.2666 187.126 70.9968 270.348 137.373Z" fill="#3DBFF5"></path>
           <path d="M352.707 163.934C348.939 173.869 340.461 181.818 331.041 185.792C345.171 200.695 358.358 214.605 369.662 229.508C376.256 220.566 382.85 211.624 387.56 202.682C377.198 189.766 364.952 176.85 352.707 163.934Z" fill="#3DBFF5"></path>
           <path d="M322.966 204.918C345.499 204.918 363.337 186.925 363.337 163.934C363.337 140.944 345.499 122.951 322.966 122.951C300.434 122.951 282.595 140.944 282.595 163.934C282.595 185.926 300.434 204.918 322.966 204.918Z" fill="#3DBFF5"></path>
           <path d="M433.365 73.5376C464.549 104.299 436.288 184.677 368.073 266.047C378.793 269.023 387.563 276.962 392.436 286.885C490.86 173.761 535.687 58.6529 491.835 15.9834C455.778 -18.7476 369.048 5.06793 274.521 68.576C284.266 75.5222 294.011 83.4607 303.756 91.3993C361.252 59.6452 410.951 51.7067 433.365 73.5376Z" fill="#3DBFF5"></path>
           <path d="M316.969 319.672C303.127 333.522 288.363 346.382 274.521 358.254C283.749 365.178 292.054 371.114 301.282 377.049C314.2 366.168 326.196 354.296 339.115 341.436C328.964 337.479 321.582 329.565 316.969 319.672Z" fill="#3DBFF5"></path>
           <path d="M347.411 278.575C325.114 278.512 306.99 296.81 306.929 319.445C306.868 342.079 324.893 360.479 347.189 360.541C369.485 360.604 387.609 342.306 387.671 319.672C387.732 297.037 369.707 278.637 347.411 278.575Z" fill="#3DBFF5"></path>
           <path d="M177.631 314.208C163.502 299.305 150.314 285.395 139.01 270.492C132.416 279.434 125.822 288.376 121.112 297.317C132.416 310.234 143.72 323.15 155.966 336.066C159.734 326.13 167.27 318.182 177.631 314.208Z" fill="#3DBFF5"></path>
           <path d="M439.835 270.492C432.12 280.363 424.404 289.248 416.688 299.119C448.516 355.387 457.196 402.771 434.048 425.476C402.22 456.077 321.203 427.45 238.257 362.297C235.363 373.156 227.647 382.041 218.002 386.976C332.777 482.731 448.516 526.166 491.918 483.718C527.604 447.193 504.456 362.297 439.835 270.492Z" fill="#3DBFF5"></path>
           <path d="M226.182 336.281C226.24 313.647 208.213 295.25 185.917 295.19C163.62 295.13 145.499 313.431 145.441 336.065C145.382 358.7 163.41 377.097 185.706 377.157C208.002 377.216 226.124 358.916 226.182 336.281Z" fill="#3DBFF5"></path>
         </svg>
      </a>
      <HeartIcon width={20} height={20} className="shrink-0 fill-red-500" />
      <a href="https://pexels.com" target="_blank" className="shrink-0">
        <svg className="h-6 w-6" viewBox="0 0 50 50">
          <g transform="translate(-3894 2762)">
            <rect
              width="50"
              height="50"
              rx="8"
              transform="translate(3894 -2762)"
              fill="#07a081"
            ></rect>
            <path
              d="M32.671,44.73h7.091V37.935H41.9a5.657,5.657,0,1,0,0-11.314H32.671Zm10.763,3.622H29V23H41.9a9.271,9.271,0,0,1,1.53,18.435Z"
              transform="translate(3880 -2773)"
              fill="#fff"
            ></path>
          </g>
        </svg>
      </a>
    </div>
  );
}

export default NavIcons;

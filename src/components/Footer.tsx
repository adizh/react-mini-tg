import React from "react";
import '../styles/footer.scss';
import {NavLink} from 'react-router-dom'
import {useState} from 'react';



function Footer() {
    const [activeLink,setActiveLink]=useState('/home');
  return <footer>
    
    <NavLink to='/react-mini-tg/home' className={({ isActive }) => (isActive ? 'active-link' : '')}>


<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_6651_1895)">
{activeLink==='/home' ? <path fillRule="evenodd" clipRule="evenodd" d="M10.6717 2.84331C11.0378 2.51774 11.5107 2.33789 12.0007 2.33789C12.4906 2.33789 12.9635 2.51774 13.3297 2.84331L17.2637 6.34031L17.5137 4.83631C17.5352 4.70676 17.582 4.58273 17.6515 4.47128C17.721 4.35983 17.8117 4.26316 17.9186 4.18679C18.0254 4.11041 18.1462 4.05583 18.2742 4.02615C18.4021 3.99647 18.5346 3.99228 18.6642 4.01381C18.7937 4.03535 18.9177 4.08219 19.0292 4.15167C19.1406 4.22114 19.2373 4.31188 19.3137 4.41872C19.3901 4.52555 19.4446 4.64638 19.4743 4.77431C19.504 4.90224 19.5082 5.03477 19.4867 5.16431L19.0307 7.91031L21.6657 10.2533C21.8538 10.432 21.9651 10.6769 21.976 10.9361C21.987 11.1954 21.8967 11.4488 21.7243 11.6427C21.5519 11.8366 21.3109 11.956 21.0522 11.9755C20.7934 11.995 20.5372 11.9132 20.3377 11.7473L19.8737 11.3353L19.0867 19.1993C19.0373 19.693 18.8062 20.1507 18.4383 20.4835C18.0703 20.8164 17.5918 21.0005 17.0957 21.0003H6.90566C6.40969 21.0003 5.93142 20.816 5.56369 20.4832C5.19596 20.1504 4.96501 19.6928 4.91566 19.1993L4.12966 11.3353L3.66466 11.7473C3.46512 11.9132 3.20891 11.995 2.95016 11.9755C2.69141 11.956 2.45038 11.8366 2.27798 11.6427C2.10559 11.4488 2.01533 11.1954 2.02628 10.9361C2.03723 10.6769 2.14853 10.432 2.33666 10.2533L10.6717 2.84331ZM5.95766 9.71031C5.97666 9.77231 5.98866 9.83531 5.99566 9.90131L6.90566 19.0013H17.0957L18.0057 9.90131C18.0127 9.83531 18.0257 9.77131 18.0437 9.71131L12.0007 4.33731L5.95766 9.71031Z" fill='#4361EE' />
:<path fillRule="evenodd" clipRule="evenodd" d="M10.6717 2.84331C11.0378 2.51774 11.5107 2.33789 12.0007 2.33789C12.4906 2.33789 12.9635 2.51774 13.3297 2.84331L17.2637 6.34031L17.5137 4.83631C17.5352 4.70676 17.582 4.58273 17.6515 4.47128C17.721 4.35983 17.8117 4.26316 17.9186 4.18679C18.0254 4.11041 18.1462 4.05583 18.2742 4.02615C18.4021 3.99647 18.5346 3.99228 18.6642 4.01381C18.7937 4.03535 18.9177 4.08219 19.0292 4.15167C19.1406 4.22114 19.2373 4.31188 19.3137 4.41872C19.3901 4.52555 19.4446 4.64638 19.4743 4.77431C19.504 4.90224 19.5082 5.03477 19.4867 5.16431L19.0307 7.91031L21.6657 10.2533C21.8538 10.432 21.9651 10.6769 21.976 10.9361C21.987 11.1954 21.8967 11.4488 21.7243 11.6427C21.5519 11.8366 21.3109 11.956 21.0522 11.9755C20.7934 11.995 20.5372 11.9132 20.3377 11.7473L19.8737 11.3353L19.0867 19.1993C19.0373 19.693 18.8062 20.1507 18.4383 20.4835C18.0703 20.8164 17.5918 21.0005 17.0957 21.0003H6.90566C6.40969 21.0003 5.93142 20.816 5.56369 20.4832C5.19596 20.1504 4.96501 19.6928 4.91566 19.1993L4.12966 11.3353L3.66466 11.7473C3.46512 11.9132 3.20891 11.995 2.95016 11.9755C2.69141 11.956 2.45038 11.8366 2.27798 11.6427C2.10559 11.4488 2.01533 11.1954 2.02628 10.9361C2.03723 10.6769 2.14853 10.432 2.33666 10.2533L10.6717 2.84331ZM5.95766 9.71031C5.97666 9.77231 5.98866 9.83531 5.99566 9.90131L6.90566 19.0013H17.0957L18.0057 9.90131C18.0127 9.83531 18.0257 9.77131 18.0437 9.71131L12.0007 4.33731L5.95766 9.71031Z" fill='white' />
}
</g>
<defs>
<clipPath id="clip0_6651_1895">
<rect width="24" height="24" fill="none"/>
</clipPath>
</defs>
</svg>
<span>Home</span>
    </NavLink>
    <NavLink to='/react-mini-tg/boost' className={({ isActive }) => (isActive ? 'active-link' : '')}>

        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">

{activeLink==='/boost' ? <path d="M19.899 1.99902H20.9444C21.3568 1.99902 21.7523 2.1628 22.0441 2.45434C22.3358 2.74589 22.4998 3.14134 22.5 3.55377V4.60005C22.5007 7.03663 21.5706 9.38144 19.8999 11.1551L18.8083 12.3142C18.3567 12.7928 17.8833 13.2502 17.3895 13.685V18.1634C17.3895 18.7101 17.1024 19.2159 16.6339 19.4968L12.6213 21.9049C12.5302 21.9597 12.4273 21.9918 12.3213 21.9987C12.2152 22.0056 12.1091 21.9871 12.0117 21.9446C11.9143 21.9022 11.8284 21.837 11.7612 21.7547C11.6941 21.6723 11.6476 21.5751 11.6257 21.4711L10.7696 17.4069C10.7254 17.3718 10.6838 17.3335 10.6452 17.2923L8.98108 15.5197L7.20855 13.8547C7.16733 13.8161 7.129 13.7745 7.09387 13.7303L3.03055 12.8743C2.92643 12.8525 2.82901 12.8062 2.74644 12.7392C2.66386 12.6721 2.59853 12.5863 2.5559 12.4888C2.51326 12.3914 2.49457 12.2851 2.50136 12.179C2.50816 12.0728 2.54026 11.9699 2.59497 11.8786L5.00399 7.86599C5.28489 7.39752 5.79069 7.1104 6.33739 7.1104H10.815C11.2498 6.61721 11.7072 6.14438 12.1857 5.69344L13.3449 4.60005C15.1179 2.92944 17.462 1.99904 19.8981 1.99902H19.899ZM14.2596 5.57076L13.1004 6.66326C12.0096 7.6913 11.0389 8.83973 10.2069 10.0866L8.25749 13.0111L9.91002 14.5614L9.94024 14.5917L11.4897 16.2433L14.4125 14.2948C15.6603 13.4624 16.8097 12.4911 17.8384 11.3995L18.93 10.2412C20.3679 8.71491 21.1682 6.69695 21.1675 4.60005V3.55466C21.1675 3.49572 21.1441 3.43919 21.1024 3.39752C21.0607 3.35584 21.0042 3.33243 20.9453 3.33243H19.899C17.8026 3.33236 15.7853 4.13303 14.2596 5.57076ZM7.61212 20C6.5374 21.0747 4.14439 21.2845 3.3959 21.3245C3.36657 21.3261 3.33722 21.3216 3.30968 21.3114C3.28215 21.3011 3.25703 21.2853 3.2359 21.2649C3.21549 21.2438 3.19966 21.2187 3.18941 21.1911C3.17916 21.1636 3.17471 21.1342 3.17634 21.1049C3.21634 20.3564 3.42613 17.9634 4.50085 16.8887C5.30089 16.0886 6.81208 16.0886 7.61212 16.8887C8.41216 17.6887 8.41216 19.1999 7.61212 20ZM7.08587 12.3658L9.09664 9.34785C9.30169 9.04028 9.51415 8.73893 9.73401 8.4438H6.33739C6.2991 8.44382 6.26147 8.45374 6.22814 8.47258C6.19481 8.49143 6.16691 8.51856 6.14716 8.55136L4.22084 11.7622L7.08587 12.3658ZM16.057 14.7659C15.7607 14.9864 15.459 15.1991 15.1521 15.4042L12.1359 17.4149L12.7386 20.28L15.9494 18.3536C15.9822 18.3339 16.0094 18.306 16.0282 18.2727C16.0471 18.2393 16.057 18.2017 16.057 18.1634V14.7659ZM17.3904 8.4438C17.3903 8.61896 17.3558 8.7924 17.2887 8.95421C17.2216 9.11601 17.1233 9.26302 16.9994 9.38684C16.8755 9.51066 16.7284 9.60886 16.5666 9.67584C16.4047 9.74282 16.2313 9.77726 16.0561 9.7772C15.8809 9.77714 15.7075 9.74259 15.5457 9.6755C15.3839 9.60841 15.2369 9.51011 15.1131 9.38621C14.9893 9.26231 14.8911 9.11524 14.8241 8.95339C14.7571 8.79153 14.7227 8.61807 14.7227 8.44291C14.7228 8.08915 14.8635 7.74993 15.1137 7.49987C15.3639 7.24981 15.7032 7.10939 16.057 7.10951C16.4108 7.10963 16.75 7.25027 17 7.5005C17.2501 7.75073 17.3905 8.09004 17.3904 8.4438Z" fill="#4361EE"/>
 : <path d="M19.899 1.99902H20.9444C21.3568 1.99902 21.7523 2.1628 22.0441 2.45434C22.3358 2.74589 22.4998 3.14134 22.5 3.55377V4.60005C22.5007 7.03663 21.5706 9.38144 19.8999 11.1551L18.8083 12.3142C18.3567 12.7928 17.8833 13.2502 17.3895 13.685V18.1634C17.3895 18.7101 17.1024 19.2159 16.6339 19.4968L12.6213 21.9049C12.5302 21.9597 12.4273 21.9918 12.3213 21.9987C12.2152 22.0056 12.1091 21.9871 12.0117 21.9446C11.9143 21.9022 11.8284 21.837 11.7612 21.7547C11.6941 21.6723 11.6476 21.5751 11.6257 21.4711L10.7696 17.4069C10.7254 17.3718 10.6838 17.3335 10.6452 17.2923L8.98108 15.5197L7.20855 13.8547C7.16733 13.8161 7.129 13.7745 7.09387 13.7303L3.03055 12.8743C2.92643 12.8525 2.82901 12.8062 2.74644 12.7392C2.66386 12.6721 2.59853 12.5863 2.5559 12.4888C2.51326 12.3914 2.49457 12.2851 2.50136 12.179C2.50816 12.0728 2.54026 11.9699 2.59497 11.8786L5.00399 7.86599C5.28489 7.39752 5.79069 7.1104 6.33739 7.1104H10.815C11.2498 6.61721 11.7072 6.14438 12.1857 5.69344L13.3449 4.60005C15.1179 2.92944 17.462 1.99904 19.8981 1.99902H19.899ZM14.2596 5.57076L13.1004 6.66326C12.0096 7.6913 11.0389 8.83973 10.2069 10.0866L8.25749 13.0111L9.91002 14.5614L9.94024 14.5917L11.4897 16.2433L14.4125 14.2948C15.6603 13.4624 16.8097 12.4911 17.8384 11.3995L18.93 10.2412C20.3679 8.71491 21.1682 6.69695 21.1675 4.60005V3.55466C21.1675 3.49572 21.1441 3.43919 21.1024 3.39752C21.0607 3.35584 21.0042 3.33243 20.9453 3.33243H19.899C17.8026 3.33236 15.7853 4.13303 14.2596 5.57076ZM7.61212 20C6.5374 21.0747 4.14439 21.2845 3.3959 21.3245C3.36657 21.3261 3.33722 21.3216 3.30968 21.3114C3.28215 21.3011 3.25703 21.2853 3.2359 21.2649C3.21549 21.2438 3.19966 21.2187 3.18941 21.1911C3.17916 21.1636 3.17471 21.1342 3.17634 21.1049C3.21634 20.3564 3.42613 17.9634 4.50085 16.8887C5.30089 16.0886 6.81208 16.0886 7.61212 16.8887C8.41216 17.6887 8.41216 19.1999 7.61212 20ZM7.08587 12.3658L9.09664 9.34785C9.30169 9.04028 9.51415 8.73893 9.73401 8.4438H6.33739C6.2991 8.44382 6.26147 8.45374 6.22814 8.47258C6.19481 8.49143 6.16691 8.51856 6.14716 8.55136L4.22084 11.7622L7.08587 12.3658ZM16.057 14.7659C15.7607 14.9864 15.459 15.1991 15.1521 15.4042L12.1359 17.4149L12.7386 20.28L15.9494 18.3536C15.9822 18.3339 16.0094 18.306 16.0282 18.2727C16.0471 18.2393 16.057 18.2017 16.057 18.1634V14.7659ZM17.3904 8.4438C17.3903 8.61896 17.3558 8.7924 17.2887 8.95421C17.2216 9.11601 17.1233 9.26302 16.9994 9.38684C16.8755 9.51066 16.7284 9.60886 16.5666 9.67584C16.4047 9.74282 16.2313 9.77726 16.0561 9.7772C15.8809 9.77714 15.7075 9.74259 15.5457 9.6755C15.3839 9.60841 15.2369 9.51011 15.1131 9.38621C14.9893 9.26231 14.8911 9.11524 14.8241 8.95339C14.7571 8.79153 14.7227 8.61807 14.7227 8.44291C14.7228 8.08915 14.8635 7.74993 15.1137 7.49987C15.3639 7.24981 15.7032 7.10939 16.057 7.10951C16.4108 7.10963 16.75 7.25027 17 7.5005C17.2501 7.75073 17.3905 8.09004 17.3904 8.4438Z" fill="white"/>
}

</svg>
<span>Boost</span>
    </NavLink>

    <NavLink to='react-mini-tg/friends'>


        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
{activeLink==='/friends' ? <path fillRule="evenodd" clipRule="evenodd" d="M7.99798 5.12617C6.66324 5.12617 5.5468 6.23857 5.5468 7.65372C5.5468 9.06888 6.66324 10.1813 7.99798 10.1813C9.33273 10.1813 10.4492 9.06888 10.4492 7.65372C10.4492 6.23857 9.33273 5.12617 7.99798 5.12617ZM3.7468 7.65372C3.7468 5.28291 5.63111 3.32617 7.99798 3.32617C10.3649 3.32617 12.2492 5.28291 12.2492 7.65372C12.2492 10.0245 10.3649 11.9813 7.99798 11.9813C5.63111 11.9813 3.7468 10.0245 3.7468 7.65372ZM16.2471 7.98109C15.4813 7.98109 14.8241 8.62296 14.8241 9.46019C14.8241 10.2974 15.4813 10.9393 16.2471 10.9393C17.0129 10.9393 17.6702 10.2974 17.6702 9.46019C17.6702 8.62296 17.0129 7.98109 16.2471 7.98109ZM13.0241 9.46019C13.0241 7.66954 14.447 6.18109 16.2471 6.18109C18.0473 6.18109 19.4702 7.66954 19.4702 9.46019C19.4702 11.2508 18.0473 12.7393 16.2471 12.7393C14.447 12.7393 13.0241 11.2508 13.0241 9.46019ZM3.7597 17.436C2.96128 18.173 2.65942 19.037 2.61025 19.54C2.56188 20.0347 2.12164 20.3965 1.62694 20.3481C1.13224 20.2998 0.770422 19.8595 0.818789 19.3648C0.909245 18.4397 1.40329 17.1615 2.53878 16.1133C3.69408 15.0469 5.45788 14.268 7.99798 14.268C10.5381 14.268 12.3019 15.0469 13.4572 16.1133C14.5927 17.1615 15.0867 18.4397 15.1772 19.3648C15.2255 19.8595 14.8637 20.2998 14.369 20.3481C13.8743 20.3965 13.4341 20.0347 13.3857 19.54C13.3365 19.037 13.0347 18.173 12.2363 17.436C11.4577 16.7172 10.1495 16.068 7.99798 16.068C5.84644 16.068 4.53831 16.7172 3.7597 17.436ZM15.1036 15.168C15.1036 14.6709 15.5065 14.268 16.0036 14.268C18.5437 14.268 20.3075 15.0469 21.4628 16.1133C22.5983 17.1615 23.0923 18.4397 23.1828 19.3648C23.2312 19.8595 22.8693 20.2998 22.3746 20.3481C21.8799 20.3965 21.4397 20.0347 21.3913 19.54C21.3422 19.037 21.0403 18.173 20.2419 17.436C19.4633 16.7172 18.1551 16.068 16.0036 16.068C15.5065 16.068 15.1036 15.665 15.1036 15.168Z" fill="#4361EE"/>
 : <path fillRule="evenodd" clipRule="evenodd" d="M7.99798 5.12617C6.66324 5.12617 5.5468 6.23857 5.5468 7.65372C5.5468 9.06888 6.66324 10.1813 7.99798 10.1813C9.33273 10.1813 10.4492 9.06888 10.4492 7.65372C10.4492 6.23857 9.33273 5.12617 7.99798 5.12617ZM3.7468 7.65372C3.7468 5.28291 5.63111 3.32617 7.99798 3.32617C10.3649 3.32617 12.2492 5.28291 12.2492 7.65372C12.2492 10.0245 10.3649 11.9813 7.99798 11.9813C5.63111 11.9813 3.7468 10.0245 3.7468 7.65372ZM16.2471 7.98109C15.4813 7.98109 14.8241 8.62296 14.8241 9.46019C14.8241 10.2974 15.4813 10.9393 16.2471 10.9393C17.0129 10.9393 17.6702 10.2974 17.6702 9.46019C17.6702 8.62296 17.0129 7.98109 16.2471 7.98109ZM13.0241 9.46019C13.0241 7.66954 14.447 6.18109 16.2471 6.18109C18.0473 6.18109 19.4702 7.66954 19.4702 9.46019C19.4702 11.2508 18.0473 12.7393 16.2471 12.7393C14.447 12.7393 13.0241 11.2508 13.0241 9.46019ZM3.7597 17.436C2.96128 18.173 2.65942 19.037 2.61025 19.54C2.56188 20.0347 2.12164 20.3965 1.62694 20.3481C1.13224 20.2998 0.770422 19.8595 0.818789 19.3648C0.909245 18.4397 1.40329 17.1615 2.53878 16.1133C3.69408 15.0469 5.45788 14.268 7.99798 14.268C10.5381 14.268 12.3019 15.0469 13.4572 16.1133C14.5927 17.1615 15.0867 18.4397 15.1772 19.3648C15.2255 19.8595 14.8637 20.2998 14.369 20.3481C13.8743 20.3965 13.4341 20.0347 13.3857 19.54C13.3365 19.037 13.0347 18.173 12.2363 17.436C11.4577 16.7172 10.1495 16.068 7.99798 16.068C5.84644 16.068 4.53831 16.7172 3.7597 17.436ZM15.1036 15.168C15.1036 14.6709 15.5065 14.268 16.0036 14.268C18.5437 14.268 20.3075 15.0469 21.4628 16.1133C22.5983 17.1615 23.0923 18.4397 23.1828 19.3648C23.2312 19.8595 22.8693 20.2998 22.3746 20.3481C21.8799 20.3965 21.4397 20.0347 21.3913 19.54C21.3422 19.037 21.0403 18.173 20.2419 17.436C19.4633 16.7172 18.1551 16.068 16.0036 16.068C15.5065 16.068 15.1036 15.665 15.1036 15.168Z" fill="white"/>
}

</svg>

<span>Friends</span>
    </NavLink>
  </footer>;
}

export default Footer;

"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CaseFileModal from "../../case-file/page";
import { classifyCase, getCase } from "@/app/apis/case";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import CaseImageModal from "@/app/components/caseImageModal";
import Menu from "@/app/components/caseDetailsMenu";
import { toast } from "react-toastify";

export default function CreateCase() {
  const { id } = useParams();
  const auth = useSelector((state) => state.auth);

  const [menuActive, setMenuActive] = useState(null);
  const [modalStage, setModaleStage] = useState(1);
  const [doc, setDoc] = useState("");
  const [loading, setLoading] = useState(false);
  const mediaRef = useRef(null);
  const [singleCase, setSingleCase] = useState(null);
  const [singleCaseMughsots, setSingleCaseMughsots] = useState([]);
  const [singleCaseAttachment, setSingleCaseAttachment] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);

 

  //...

  console.log("singleCase?.__mugshot__", singleCase?.__mugshot__);
  console.log("singleCaseAttachment", singleCaseAttachment);
  console.log("singleCaseMughsots", singleCaseMughsots);

  const handleModalClose = (e) => {
    if (e.target.classList.contains("case-details__modal")) {
      setModalOpen(false);
    }
  };
  const handleGetCase = async () => {
    const response = await getCase(id, auth?.token);

    console.log("handleGetCase", response);
    setSingleCase(response?.data);
    console.log('finish', response?.data?.__mugshot__?.slice(
      0,
      response?.data?.__mugshot__?.length / 2
    ));
    
    setSingleCaseMughsots(
      response?.data?.__mugshot__?.slice(
        0,
        response?.data?.__mugshot__?.length / 2
      )
    );
    setSingleCaseAttachment(
      response?.data?.__attachment__?.slice(
        0,
        response?.data?.__attachment__?.length / 2
      )
    );
  };

  useEffect(() => {
    handleGetCase();
  }, []);
  const handleUpload = async (item) => {
    setLoading(true);
    setTimeout(() => {
      setDoc(item);
      setLoading(false);
    }, 5000);
  };

  useEffect(() => {
    console.log("loading", loading);
  }, [loading]);

  const handleStage1 = () => {
    if (!!doc) {
      setModaleStage(2);
    } else {
      alert("Please Upload Certified Court Order For Expungement");
    }
  };
  const handleStage2 = () => {
    setModaleStage(3);
  };
  const handleStage3 = () => {
    setModaleStage(4);
  };
  const handleStage4 = () => {
    window.location.href = "/justice/expunge-doc";
  };

  const handleClassifyCase = async (classification) => {
    const response = await classifyCase(singleCase?.id, classification, auth?.token);
    console.log('response from classify', response);
    if(response?.data?.statusCode === 200) {
      toast.success("Case classified");
      setMenuActive(false)
      handleGetCase();
    }else {
      toast.error("Something went wrong")
    }
  }
  return (
    <div className="case-details">
      <div className="case-details__nav">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer"
          onClick={() => (window.location.href = "/justice/dashboard")}
        >
          <path
            d="M10.0211 3.40985L7.14109 1.39485C6.35609 0.844847 5.15109 0.874847 4.39609 1.45985L1.89109 3.41485C1.39109 3.80485 0.996094 4.60485 0.996094 5.23485V8.68485C0.996094 9.95985 2.03109 10.9998 3.30609 10.9998H8.69609C9.97109 10.9998 11.0061 9.96485 11.0061 8.68985V5.29985C11.0061 4.62485 10.5711 3.79485 10.0211 3.40985ZM6.37609 8.99985C6.37609 9.20485 6.20609 9.37485 6.00109 9.37485C5.79609 9.37485 5.62609 9.20485 5.62609 8.99985V7.49985C5.62609 7.29485 5.79609 7.12485 6.00109 7.12485C6.20609 7.12485 6.37609 7.29485 6.37609 7.49985V8.99985Z"
            fill="#99A2BB"
          />
        </svg>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.94661 3.34552C5.01411 3.2781 5.10561 3.24023 5.20101 3.24023C5.29641 3.24023 5.38791 3.2781 5.45541 3.34552L7.85541 5.74552C7.92283 5.81302 7.96069 5.90452 7.96069 5.99992C7.96069 6.09532 7.92283 6.18682 7.85541 6.25432L5.45541 8.65432C5.42245 8.68969 5.38271 8.71806 5.33855 8.73773C5.29439 8.75741 5.24672 8.76799 5.19838 8.76884C5.15004 8.76969 5.10203 8.7608 5.0572 8.7427C5.01238 8.72459 4.97166 8.69764 4.93747 8.66346C4.90329 8.62927 4.87634 8.58855 4.85823 8.54373C4.84013 8.4989 4.83123 8.45088 4.83209 8.40255C4.83294 8.35421 4.84352 8.30654 4.8632 8.26238C4.88287 8.21822 4.91124 8.17848 4.94661 8.14552L7.09221 5.99992L4.94661 3.85432C4.8792 3.78682 4.84133 3.69532 4.84133 3.59992C4.84133 3.50452 4.8792 3.41302 4.94661 3.34552Z"
            fill="#99A2BB"
          />
        </svg>
        <div
          className="pointer"
          onClick={() => (window.location.href = "/justice/admin")}
        >
          Case
        </div>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.94661 3.34552C5.01411 3.2781 5.10561 3.24023 5.20101 3.24023C5.29641 3.24023 5.38791 3.2781 5.45541 3.34552L7.85541 5.74552C7.92283 5.81302 7.96069 5.90452 7.96069 5.99992C7.96069 6.09532 7.92283 6.18682 7.85541 6.25432L5.45541 8.65432C5.42245 8.68969 5.38271 8.71806 5.33855 8.73773C5.29439 8.75741 5.24672 8.76799 5.19838 8.76884C5.15004 8.76969 5.10203 8.7608 5.0572 8.7427C5.01238 8.72459 4.97166 8.69764 4.93747 8.66346C4.90329 8.62927 4.87634 8.58855 4.85823 8.54373C4.84013 8.4989 4.83123 8.45088 4.83209 8.40255C4.83294 8.35421 4.84352 8.30654 4.8632 8.26238C4.88287 8.21822 4.91124 8.17848 4.94661 8.14552L7.09221 5.99992L4.94661 3.85432C4.8792 3.78682 4.84133 3.69532 4.84133 3.59992C4.84133 3.50452 4.8792 3.41302 4.94661 3.34552Z"
            fill="#99A2BB"
          />
        </svg>
        <div>Case Details</div>
      </div>
    
    <div className="case-details__banner">
      <div className="case-details__banner__details">
      {singleCase?.caseClass === "Confidential" ? <svg width="62" height="56" viewBox="0 0 62 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.9091 0L8 10.1818V25.4545C8 39.5818 17.7745 52.7927 30.9091 56C44.0436 52.7927 53.8182 39.5818 53.8182 25.4545V10.1818L30.9091 0Z" fill="#01009A"/>
<g filter="url(#filter0_i_20_193812)">
<path d="M30.8085 4L11 12.9091V26.2727C11 38.6341 19.4516 50.1936 30.8085 53C42.1654 50.1936 50.617 38.6341 50.617 26.2727V12.9091L30.8085 4Z" fill="url(#paint0_linear_20_193812)"/>
</g>
<g clip-path="url(#clip0_20_193812)">
<path d="M26.3244 31.9207L27.5644 26.6077L23.4414 23.0357L28.8724 22.5657L30.9994 17.5547L33.1264 22.5647L38.5564 23.0347L34.4334 26.6067L35.6744 31.9197L30.9994 29.0997L26.3244 31.9207Z" fill="#CCCCFF"/>
</g>
<path d="M0.62325 44.4863C0.306749 43.2237 1.26156 42 2.56323 42H59.4368C60.7384 42 61.6933 43.2237 61.3768 44.4863L58.87 54.4863C58.647 55.376 57.8473 56 56.93 56H5.06997C4.15271 56 3.35302 55.376 3.12999 54.4863L0.62325 44.4863Z" fill="url(#paint1_linear_20_193812)"/>
<path d="M10.2766 48.6914H9.18781C9.16792 48.5505 9.12732 48.4254 9.06601 48.3161C9.00469 48.205 8.92597 48.1106 8.82986 48.0327C8.73374 47.9548 8.62271 47.8951 8.49676 47.8537C8.37247 47.8123 8.23741 47.7915 8.09157 47.7915C7.82808 47.7915 7.59856 47.857 7.40301 47.9879C7.20746 48.1172 7.05583 48.3061 6.94811 48.5547C6.84039 48.8016 6.78653 49.1016 6.78653 49.4545C6.78653 49.8175 6.84039 50.1224 6.94811 50.3693C7.05748 50.6162 7.20995 50.8027 7.4055 50.9286C7.60104 51.0546 7.82725 51.1175 8.08412 51.1175C8.22829 51.1175 8.3617 51.0985 8.48433 51.0604C8.60862 51.0223 8.71882 50.9667 8.81494 50.8938C8.91106 50.8192 8.9906 50.7289 9.05358 50.6229C9.11821 50.5168 9.16295 50.3958 9.18781 50.2599L10.2766 50.2649C10.2484 50.4986 10.178 50.724 10.0653 50.9411C9.95426 51.1565 9.80429 51.3496 9.61537 51.5202C9.4281 51.6893 9.20438 51.8235 8.9442 51.9229C8.68568 52.0207 8.39318 52.0696 8.06672 52.0696C7.61265 52.0696 7.20663 51.9669 6.84868 51.7614C6.49238 51.5559 6.21066 51.2584 6.00351 50.869C5.79801 50.4795 5.69527 50.008 5.69527 49.4545C5.69527 48.8994 5.79967 48.4271 6.00848 48.0376C6.21729 47.6482 6.50067 47.3516 6.85862 47.1477C7.21658 46.9422 7.61927 46.8395 8.06672 46.8395C8.3617 46.8395 8.63514 46.8809 8.88703 46.9638C9.14058 47.0466 9.36513 47.1676 9.56068 47.3267C9.75623 47.4841 9.91532 47.6772 10.038 47.9059C10.1622 48.1346 10.2418 48.3964 10.2766 48.6914ZM15.7267 49.4545C15.7267 50.0097 15.6215 50.482 15.411 50.8714C15.2022 51.2609 14.9172 51.5584 14.5559 51.7638C14.1963 51.9677 13.7919 52.0696 13.3428 52.0696C12.8904 52.0696 12.4844 51.9669 12.1248 51.7614C11.7652 51.5559 11.481 51.2584 11.2722 50.869C11.0633 50.4795 10.9589 50.008 10.9589 49.4545C10.9589 48.8994 11.0633 48.4271 11.2722 48.0376C11.481 47.6482 11.7652 47.3516 12.1248 47.1477C12.4844 46.9422 12.8904 46.8395 13.3428 46.8395C13.7919 46.8395 14.1963 46.9422 14.5559 47.1477C14.9172 47.3516 15.2022 47.6482 15.411 48.0376C15.6215 48.4271 15.7267 48.8994 15.7267 49.4545ZM14.6354 49.4545C14.6354 49.0949 14.5816 48.7917 14.4739 48.5447C14.3678 48.2978 14.2178 48.1106 14.0239 47.983C13.83 47.8554 13.603 47.7915 13.3428 47.7915C13.0826 47.7915 12.8556 47.8554 12.6617 47.983C12.4678 48.1106 12.317 48.2978 12.2093 48.5447C12.1032 48.7917 12.0502 49.0949 12.0502 49.4545C12.0502 49.8142 12.1032 50.1174 12.2093 50.3643C12.317 50.6113 12.4678 50.7985 12.6617 50.9261C12.8556 51.0537 13.0826 51.1175 13.3428 51.1175C13.603 51.1175 13.83 51.0537 14.0239 50.9261C14.2178 50.7985 14.3678 50.6113 14.4739 50.3643C14.5816 50.1174 14.6354 49.8142 14.6354 49.4545ZM20.7822 46.9091V52H19.8525L17.6377 48.7958H17.6004V52H16.524V46.9091H17.4686L19.6661 50.1108H19.7108V46.9091H20.7822ZM21.6715 52V46.9091H25.0422V47.7965H22.7478V49.0096H24.8185V49.897H22.7478V52H21.6715ZM26.8426 46.9091V52H25.7662V46.9091H26.8426ZM29.5328 52H27.7281V46.9091H29.5477C30.0598 46.9091 30.5006 47.011 30.8702 47.2148C31.2397 47.417 31.5239 47.7079 31.7228 48.0874C31.9233 48.4669 32.0236 48.9209 32.0236 49.4496C32.0236 49.9799 31.9233 50.4356 31.7228 50.8168C31.5239 51.1979 31.2381 51.4904 30.8652 51.6942C30.494 51.8981 30.0498 52 29.5328 52ZM28.8045 51.0778H29.4881C29.8062 51.0778 30.0739 51.0214 30.291 50.9087C30.5097 50.7944 30.6738 50.6179 30.7832 50.3793C30.8942 50.139 30.9497 49.8291 30.9497 49.4496C30.9497 49.0734 30.8942 48.766 30.7832 48.5273C30.6738 48.2887 30.5105 48.113 30.2935 48.0004C30.0764 47.8877 29.8087 47.8313 29.4905 47.8313H28.8045V51.0778ZM32.8209 52V46.9091H36.2513V47.7965H33.8972V49.0096H36.0748V49.897H33.8972V51.1126H36.2612V52H32.8209ZM41.3652 46.9091V52H40.4355L38.2207 48.7958H38.1834V52H37.107V46.9091H38.0516L40.2491 50.1108H40.2938V46.9091H41.3652ZM42.0606 47.7965V46.9091H46.2417V47.7965H44.6831V52H43.6192V47.7965H42.0606ZM48.0066 46.9091V52H46.9303V46.9091H48.0066ZM49.7697 52H48.6163L50.3737 46.9091H51.7608L53.5158 52H52.3623L51.0871 48.0724H51.0474L49.7697 52ZM49.6976 49.9989H52.422V50.8391H49.6976V49.9989ZM54.1285 52V46.9091H55.2049V51.1126H57.3874V52H54.1285Z" fill="white"/>
<defs>
<filter id="filter0_i_20_193812" x="11" y="4" width="43.6172" height="53" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="4" dy="4"/>
<feGaussianBlur stdDeviation="5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.57 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_20_193812"/>
</filter>
<linearGradient id="paint0_linear_20_193812" x1="30.8085" y1="4" x2="30.8085" y2="53" gradientUnits="userSpaceOnUse">
<stop stop-color="#01009A"/>
<stop offset="1" stop-color="#000034"/>
</linearGradient>
<linearGradient id="paint1_linear_20_193812" x1="31" y1="42" x2="31" y2="56" gradientUnits="userSpaceOnUse">
<stop stop-color="#01009A"/>
<stop offset="1" stop-color="#000034"/>
</linearGradient>
<clipPath id="clip0_20_193812">
<rect width="16" height="15" fill="white" transform="translate(23 17)"/>
</clipPath>
</defs>
</svg> : singleCase?.caseClass === "Top secret" ? <svg width="101" height="100" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="50.7269" cy="50.4105" r="49.5706" fill="#FFE7EE"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M94.4587 65.5838H90.7676C84.5768 81.7774 68.893 93.2776 50.5233 93.2776C32.1535 93.2776 16.4698 81.7774 10.279 65.5838H6.58789C12.9378 83.729 30.2107 96.7432 50.5233 96.7432C70.8358 96.7432 88.1088 83.729 94.4587 65.5838ZM94.4583 34.8301H90.7671C84.576 18.6371 68.8926 7.13745 50.5233 7.13745C32.154 7.13745 16.4706 18.6371 10.2794 34.8301H6.5883C12.9386 16.6856 30.2112 3.67188 50.5233 3.67188C70.8354 3.67188 88.108 16.6856 94.4583 34.8301Z" fill="#B1241D"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M78.115 65.5883H23.209C28.5555 75.2415 38.8455 81.7767 50.662 81.7767C62.4784 81.7767 72.7685 75.2415 78.115 65.5883ZM77.8845 34.8343H23.4395C28.8477 25.4058 39.0131 19.0547 50.662 19.0547C62.3108 19.0547 72.4763 25.4058 77.8845 34.8343Z" fill="#B1241D"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M88.5473 65.5834H87.2456C81.2388 79.8546 67.1237 89.8743 50.6682 89.8743C34.2128 89.8743 20.0976 79.8546 14.0908 65.5834H12.7892C18.8647 80.5348 33.5354 91.0769 50.6682 91.0769C67.8011 91.0769 82.4718 80.5348 88.5473 65.5834ZM88.5474 34.8296H87.2457C81.239 20.5583 67.1237 10.5385 50.6682 10.5385C34.2127 10.5385 20.0975 20.5583 14.0907 34.8296H12.7891C18.8646 19.8781 33.5353 9.33594 50.6682 9.33594C67.8012 9.33594 82.4719 19.8781 88.5474 34.8296Z" fill="#B1241D"></path><path d="M50.6281 74.8307L52.295 76.0437C52.5593 76.2402 52.9184 75.9759 52.8168 75.6642L52.1798 73.7059L53.8265 72.5336C54.0975 72.3438 53.962 71.9169 53.63 71.9169H51.6106L50.9533 69.8705C50.8517 69.5588 50.4112 69.5588 50.3096 69.8705L49.6455 71.9169H47.6262C47.2942 71.9169 47.1586 72.3438 47.4297 72.5336L49.0763 73.7059L48.4393 75.6642C48.3377 75.9759 48.6968 76.2334 48.9611 76.0437L50.6281 74.8307Z" fill="white"></path><path d="M50.632 29.9088L52.2989 31.1218C52.5632 31.3183 52.9224 31.054 52.8207 30.7423L52.1837 28.784L53.8304 27.6117C54.1014 27.422 53.9659 26.9951 53.6339 26.9951H51.6145L50.9572 24.9486C50.8556 24.6369 50.4151 24.6369 50.3135 24.9486L49.6494 26.9951H47.6301C47.2981 26.9951 47.1625 27.422 47.4336 27.6117L49.0802 28.784L48.4433 30.7423C48.3416 31.054 48.7007 31.3115 48.965 31.1218L50.632 29.9088Z" fill="white"></path><path d="M93.6652 60.042V43.1812H90.4336V40.3711H99.988V43.1812H96.7564V60.042H93.6652Z" fill="#B1241D"></path><path d="M81.041 60.042V40.3711H89.4714V43.1812H84.1322V48.38H88.3754V51.1901H84.1322V57.2318H89.4714V60.042H81.041Z" fill="#B1241D"></path><path d="M69.7051 60.0459V40.375H74.2856C77.4891 40.375 78.8661 41.8644 78.8661 44.8993V46.1077C78.8661 48.1309 78.2198 49.4236 76.8428 49.9856V50.0418C78.3884 50.5196 78.8942 51.9808 78.8942 54.2008V57.6573C78.8942 58.6127 78.9223 59.3152 79.2314 60.0459H76.0841C75.9155 59.5401 75.803 59.2309 75.803 57.6292V54.0322C75.803 52.2056 75.2691 51.6155 73.8641 51.6155H72.7962V60.0459H69.7051ZM72.7962 48.8054H73.9203C75.0724 48.8054 75.7749 48.2996 75.7749 46.7259V45.2084C75.7749 43.8034 75.2972 43.1851 74.2013 43.1851H72.7962V48.8054Z" fill="#B1241D"></path><path d="M63.3044 60.3227C60.3256 60.3227 58.752 58.5243 58.752 55.4893V44.9233C58.752 41.8883 60.3256 40.0898 63.3044 40.0898C66.2831 40.0898 67.8568 41.8883 67.8568 44.9233V47.0028H64.9342V44.7266C64.9342 43.4339 64.316 42.9 63.3887 42.9C62.4613 42.9 61.8431 43.4339 61.8431 44.7266V55.7141C61.8431 57.0068 62.4613 57.5126 63.3887 57.5126C64.316 57.5126 64.9342 57.0068 64.9342 55.7141V52.7073H67.8568V55.4893C67.8568 58.5243 66.2831 60.3227 63.3044 60.3227Z" fill="#B1241D"></path><path d="M48.7402 60.042V40.3711H57.1706V43.1812H51.8314V48.38H56.0747V51.1901H51.8314V57.2318H57.1706V60.042H48.7402Z" fill="#B1241D"></path><path d="M42.3024 60.3227C39.2675 60.3227 37.75 58.5243 37.75 55.3769V54.2529H40.6725V55.6017C40.6725 57.0068 41.2908 57.5126 42.2743 57.5126C43.2578 57.5126 43.8761 57.0068 43.8761 55.5455C43.8761 53.9157 43.2578 52.8759 41.2346 51.1055C38.6492 48.8293 37.8062 47.2276 37.8062 44.9795C37.8062 41.8883 39.408 40.0898 42.4148 40.0898C45.4216 40.0898 46.911 41.8883 46.911 45.0357V45.8506H43.9885V44.839C43.9885 43.4339 43.4265 42.9 42.4429 42.9C41.4594 42.9 40.8973 43.4339 40.8973 44.7828C40.8973 46.2159 41.5437 47.2557 43.567 49.026C46.1523 51.3022 46.9672 52.8759 46.9672 55.3207C46.9672 58.5243 45.3373 60.3227 42.3024 60.3227Z" fill="#B1241D"></path><path d="M22.9434 60.042L22.9434 40.3711H27.4958C30.5869 40.3711 32.1044 42.0853 32.1044 45.2326V47.1716C32.1044 50.3189 30.5869 52.0331 27.4958 52.0331H26.0345L26.0345 60.042H22.9434ZM26.0345 49.223H27.4958C28.4793 49.223 29.0132 48.7734 29.0132 47.3683V45.0359C29.0132 43.6308 28.4793 43.1812 27.4958 43.1812H26.0345V49.223Z" fill="#B1241D"></path><path d="M16.1617 60.3227C13.1267 60.3227 11.4688 58.5243 11.4688 55.3769L11.4688 45.0357C11.4688 41.8883 13.1267 40.0898 16.1617 40.0898C19.1966 40.0898 20.8546 41.8883 20.8546 45.0357V55.3769C20.8546 58.5243 19.1966 60.3227 16.1617 60.3227ZM16.1617 57.5126C17.1452 57.5126 17.7634 56.9787 17.7634 55.5736V44.839C17.7634 43.4339 17.1452 42.9 16.1617 42.9C15.1781 42.9 14.5599 43.4339 14.5599 44.839L14.5599 55.5736C14.5599 56.9787 15.1781 57.5126 16.1617 57.5126Z" fill="#B1241D"></path><path d="M3.98164 60.0459L3.98164 43.1851H0.75L0.75 40.375H10.3044V43.1851H7.07278L7.07278 60.0459H3.98164Z" fill="#B1241D"></path><path d="M30.4716 25.0061C29.6842 25.8005 28.4233 25.7826 27.5934 24.9602C26.7675 24.1416 26.7423 22.8848 27.5297 22.0903C28.2665 21.347 29.3389 21.2561 30.16 21.875L29.5325 22.5082C29.0611 22.1736 28.47 22.2114 28.0724 22.6126C27.593 23.0964 27.6509 23.8009 28.2015 24.3466C28.7561 24.8962 29.465 24.9518 29.9445 24.4681C30.3421 24.0669 30.3669 23.4755 30.0319 23.0033L30.6595 22.3701C31.2936 23.1934 31.2083 24.2627 30.4716 25.0061Z" fill="black"></path><path d="M34.2583 21.8061C33.3198 22.4641 32.0857 22.2473 31.4023 21.2725C30.7188 20.2977 30.9419 19.0727 31.8805 18.4147C32.8235 17.7534 34.0558 17.958 34.7392 18.9328C35.4227 19.9076 35.2014 21.1448 34.2583 21.8061ZM33.826 21.1894C34.4245 20.7698 34.447 20.0304 34.0274 19.4319C33.6078 18.8334 32.9113 18.6117 32.3128 19.0313C31.7188 19.4477 31.6899 20.1781 32.1096 20.7766C32.5292 21.3751 33.2321 21.6059 33.826 21.1894Z" fill="black"></path><path d="M39.3205 18.8654L36.4985 17.1186L37.6687 19.6339L36.9709 19.9586L35.2937 16.3538L36.1171 15.9707L38.8004 17.6294L37.6886 15.2396L38.3915 14.9126L40.0686 18.5174L39.3205 18.8654Z" fill="black"></path><path d="M42.2147 17.8232L41.4064 18.0579L40.2978 14.2398L42.7652 13.5233L42.969 14.2253L41.3099 14.707L41.5894 15.6695L42.9879 15.2634L43.1902 15.9601L41.7916 16.3662L42.2147 17.8232Z" fill="black"></path><path d="M45.9084 16.9668L45.0794 17.1123L44.3921 13.1963L45.2212 13.0508L45.9084 16.9668Z" fill="black"></path><path d="M48.7696 16.6543L47.3592 16.723L47.1659 12.7518L48.5763 12.6832C49.8373 12.6218 50.6399 13.3921 50.6961 14.5481C50.7524 15.704 50.003 16.5943 48.7696 16.6543ZM48.0419 13.4354L48.1646 15.9575L48.6901 15.9319C49.481 15.8934 49.8734 15.4142 49.8333 14.5901C49.7948 13.7992 49.3582 13.3714 48.5673 13.4099L48.0419 13.4354Z" fill="black"></path><path d="M54.7869 16.1825L54.7109 16.9094L52.0509 16.6312L52.4645 12.6769L55.086 12.9511L55.01 13.6781L53.2256 13.4914L53.1386 14.323L54.7577 14.4924L54.6823 15.2139L53.0631 15.0445L52.964 15.9918L54.7869 16.1825Z" fill="black"></path><path d="M58.4222 17.7723L57.3731 14.6235L56.6614 17.3049L55.9175 17.1075L56.9374 13.2647L57.8151 13.4976L58.8142 16.4898L59.4903 13.9422L60.2396 14.1411L59.2197 17.9839L58.4222 17.7723Z" fill="black"></path><path d="M62.1667 19.195L61.3979 18.8523L62.7076 15.9137L61.5645 15.4043L61.8733 14.7114L64.9333 16.0751L64.6245 16.7681L63.4764 16.2564L62.1667 19.195Z" fill="black"></path><path d="M65.0328 20.7331L64.3087 20.3039L66.336 16.8838L67.0601 17.313L65.0328 20.7331Z" fill="black"></path><path d="M68.3923 23.1206L68.679 22.2637L67.4586 21.3163L66.6951 21.8031L66.0259 21.2836L69.645 19.0599L70.3711 19.6236L69.1052 23.6741L68.3923 23.1206ZM69.4269 20.0542L68.0576 20.933L68.9062 21.5918L69.4269 20.0542Z" fill="black"></path><path d="M71.6844 26.34L69.9142 24.4778L72.7957 21.7385L73.3757 22.3485L71.0439 24.5651L72.2342 25.8173L71.6844 26.34Z" fill="black"></path><path d="M70.3663 75.2713C71.1537 74.4768 72.4146 74.4947 73.2445 75.3172C74.0704 76.1358 74.0956 77.3926 73.3082 78.187C72.5714 78.9303 71.499 79.0213 70.6778 78.4023L71.3054 77.7691C71.7768 78.1038 72.3679 78.0659 72.7655 77.6647C73.2449 77.181 73.187 76.4764 72.6364 75.9307C72.0818 75.3811 71.3729 75.3255 70.8934 75.8093C70.4958 76.2104 70.471 76.8018 70.8059 77.2741L70.1784 77.9073C69.5443 77.0839 69.6296 76.0146 70.3663 75.2713Z" fill="black"></path><path d="M66.5795 78.4713C67.5181 77.8132 68.7521 78.03 69.4356 79.0048C70.1191 79.9796 69.896 81.2046 68.9574 81.8627C68.0144 82.5239 66.7821 82.3194 66.0986 81.3446C65.4152 80.3698 65.6365 79.1325 66.5795 78.4713ZM67.0119 79.0879C66.4134 79.5075 66.3908 80.247 66.8105 80.8455C67.2301 81.4439 67.9266 81.6657 68.5251 81.2461C69.119 80.8296 69.148 80.0992 68.7283 79.5007C68.3087 78.9023 67.6058 78.6715 67.0119 79.0879Z" fill="black"></path><path d="M61.5174 81.4119L64.3394 83.1588L63.1692 80.6434L63.867 80.3187L65.5442 83.9235L64.7208 84.3066L62.0375 82.6479L63.1493 85.0377L62.4464 85.3648L60.7693 81.76L61.5174 81.4119Z" fill="black"></path><path d="M58.6232 82.4541L59.4315 82.2194L60.5401 86.0376L58.0727 86.754L57.8689 86.0521L59.528 85.5703L59.2485 84.6078L57.85 85.0139L57.6477 84.3173L59.0463 83.9112L58.6232 82.4541Z" fill="black"></path><path d="M54.9295 83.3105L55.7585 83.165L56.4457 87.081L55.6167 87.2265L54.9295 83.3105Z" fill="black"></path><path d="M52.0683 83.623L53.4787 83.5544L53.672 87.5255L52.2616 87.5942C51.0006 87.6556 50.198 86.8852 50.1418 85.7293C50.0855 84.5733 50.8349 83.6831 52.0683 83.623ZM52.796 86.8419L52.6733 84.3198L52.1478 84.3454C51.3569 84.3839 50.9644 84.8632 51.0046 85.6873C51.0431 86.4782 51.4797 86.906 52.2706 86.8675L52.796 86.8419Z" fill="black"></path><path d="M46.0509 84.0949L46.127 83.3679L48.787 83.6462L48.3734 87.6004L45.7519 87.3262L45.8279 86.5992L47.6123 86.7859L47.6993 85.9543L46.0801 85.7849L46.1556 85.0635L47.7748 85.2328L47.8739 84.2856L46.0509 84.0949Z" fill="black"></path><path d="M42.4157 82.5051L43.4648 85.6538L44.1765 82.9724L44.9204 83.1699L43.9005 87.0127L43.0228 86.7797L42.0237 83.7875L41.3476 86.3351L40.5983 86.1362L41.6182 82.2934L42.4157 82.5051Z" fill="black"></path><path d="M38.6712 81.0824L39.44 81.425L38.1303 84.3636L39.2734 84.873L38.9646 85.566L35.9046 84.2022L36.2134 83.5093L37.3615 84.021L38.6712 81.0824Z" fill="black"></path><path d="M35.8051 79.5442L36.5291 79.9734L34.5019 83.3936L33.7778 82.9644L35.8051 79.5442Z" fill="black"></path><path d="M32.4456 77.1567L32.1589 78.0137L33.3792 78.9611L34.1428 78.4742L34.812 78.9938L31.1929 81.2175L30.4668 80.6538L31.7327 76.6032L32.4456 77.1567ZM31.411 80.2231L32.7803 79.3443L31.9317 78.6855L31.411 80.2231Z" fill="black"></path><path d="M29.1535 73.9374L30.9237 75.7995L28.0421 78.5389L27.4622 77.9288L29.794 75.7122L28.6036 74.46L29.1535 73.9374Z" fill="black"></path></svg> : ""}

<div className="case-details__banner__details__created-by">Case File Created by:</div>
<div className="case-details__banner__details__case-creator">
<Image
                alt=""
                src="/assets/logo.png"
                width={24}
                height={24}
                style={{ borderRadius: "50%" }}
              />
  <div>Ahmed Olaniyi</div>
  <div>Admin</div>
</div>
      </div>
      <div className="case-details__banner__actions">
        <div className="case-details__banner__actions__case-status">
        Status of case:

        <button>{singleCase?.caseStatus}
        {/* <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 4.5L6 7.5L9 4.5" stroke="#9E77ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> */}

        </button>
        </div>

        <button className="case-details__banner__actions__export">
Export <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 7.5L10 12.5L15 7.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


        </button>

        <div className="case-details__banner__actions__more"
        onClick={() => setMenuActive(true)}
        >

        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<rect width="50" height="50" rx="25" fill="#D0FFD3"/>
<path d="M30.5401 21.8106C32.1748 21.8106 33.5001 20.4854 33.5001 18.8506C33.5001 17.2159 32.1748 15.8906 30.5401 15.8906C28.9053 15.8906 27.5801 17.2159 27.5801 18.8506C27.5801 20.4854 28.9053 21.8106 30.5401 21.8106Z" fill="#009B07"/>
<path d="M19.46 21.8106C21.0948 21.8106 22.42 20.4854 22.42 18.8506C22.42 17.2159 21.0948 15.8906 19.46 15.8906C17.8252 15.8906 16.5 17.2159 16.5 18.8506C16.5 20.4854 17.8252 21.8106 19.46 21.8106Z" fill="#009B07"/>
<path d="M30.5401 34.1075C32.1748 34.1075 33.5001 32.7823 33.5001 31.1475C33.5001 29.5127 32.1748 28.1875 30.5401 28.1875C28.9053 28.1875 27.5801 29.5127 27.5801 31.1475C27.5801 32.7823 28.9053 34.1075 30.5401 34.1075Z" fill="#009B07"/>
<path d="M19.46 34.1075C21.0948 34.1075 22.42 32.7823 22.42 31.1475C22.42 29.5127 21.0948 28.1875 19.46 28.1875C17.8252 28.1875 16.5 29.5127 16.5 31.1475C16.5 32.7823 17.8252 34.1075 19.46 34.1075Z" fill="#009B07"/>
</g>
</svg>


        </div>
 <Menu open={menuActive} setOpen={setMenuActive} classifyCaseFunction={handleClassifyCase} caseId={singleCase?.id} caseNumber={singleCase?.caseNumber} />

      </div>
    </div>

      <div className="case-details__grid">
        <div className="case-details__grid__personal-details">
          <div className="case-details__grid__personal-details__copy-details">
            <div>Suspect Bio</div>
            <div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3337 10.7474V14.2474C13.3337 17.1641 12.167 18.3307 9.25033 18.3307H5.75033C2.83366 18.3307 1.66699 17.1641 1.66699 14.2474V10.7474C1.66699 7.83073 2.83366 6.66406 5.75033 6.66406H9.25033C12.167 6.66406 13.3337 7.83073 13.3337 10.7474Z" fill="#667085"/>
<path d="M14.2498 1.66406H10.7498C8.24635 1.66406 7.03822 2.52971 6.74575 4.61314C6.66834 5.16465 7.1298 5.6224 7.68671 5.6224H9.2498C12.7498 5.6224 14.3748 7.2474 14.3748 10.7474V12.3105C14.3748 12.8674 14.8326 13.3289 15.3841 13.2514C17.4675 12.959 18.3331 11.7508 18.3331 9.2474V5.7474C18.3331 2.83073 17.1665 1.66406 14.2498 1.66406Z" fill="#667085"/>
</svg>

Copy
            </div>
          </div>
          {singleCaseMughsots?.length > 0 && (
            <div className="case-details__grid__personal-details__image-preview">
              <Image
                alt=""
                src={`https://${singleCaseMughsots[0]?.url}`}
                layout="fill"
                objectFit="cover"
                style={{ borderRadius: "16px" }}
              />

             
            </div>
          )}

          <div className="case-details__grid__personal-details__image-grid">
            {[...singleCaseMughsots]?.slice(1, 4)?.map((item, index) => (
              <div className="case-details__grid__personal-details__image-grid__image" key={index}>
                <Image
                  alt=""
                  src={`https://${item?.url}`}
                  objectFit="cover"
                  layout="fill"
                  style={{ borderRadius: "8px" }}
                />


                {singleCaseMughsots?.length > 4 && index === 2 ? 
                <div className="case-details__grid__personal-details__image-grid__image__overlay"
                onClick={() => setModalOpen(true)}
                >
                  {singleCaseMughsots?.length - 4}+
                </div>
              : ""}
              </div>
            ))}
          </div>

<div className="case-details__grid__personal-details__accused-details">
<div className="case-details__grid__personal-details__accused-details-grid">
  <div>
    <label>First Name</label>
    <div>
    {singleCase?.accusedFirstName} 
    </div>
  </div>
  <div>
    <label>Middle Name:</label>
    <div>
    {singleCase?.accusedMiddleName} 
    </div>
  </div>
  <div>
    <label>Last Name:</label>
    <div>
    {singleCase?.accusedLastName} 
    </div>
  </div>
  <div>
    <label>Alias:</label>
    <div>
    {singleCase?.accusedAlias} 
    </div>
  </div>
</div>

<label>Email</label>
<div className="case-details__grid__personal-details__accused-details__underline">Frank.A@gmail.com </div>
<label htmlFor="">Status of Suspect:</label>
<button className="case-details__grid__personal-details__accused-details__case-status">{singleCase?.accusedStatus}</button>
<label htmlFor="">Date Initiated:</label>
<div>{singleCase?.dateInitiated}</div>
<label>Known Associates:</label>
{singleCase?.__associate__?.map((item, index) => (
<div className="case-details__grid__personal-details__accused-details__underline" key={index}>{item?.name}</div>
))}
  </div>

        </div>
        <div className="case-details__grid__case-details">
        
          <div className="case-details__grid__case-details__grid">
            <div className="case-details__grid__case-details__grid__input">
              <label htmlFor="">Case Number</label>
              <div className="case-details__grid__case-details__grid__input__filled">
                {singleCase?.caseNumber}
              </div>
            </div>
            <div className="case-details__grid__case-details__grid__input">
              <label htmlFor="">Offence Category:</label>
              <div className="case-details__grid__case-details__grid__input__filled">
                {singleCase?.offenseCategory}
              </div>
            </div>
            <div className="case-details__grid__case-details__grid__input">
              <label htmlFor="">Offence Type:</label>
              <div className="case-details__grid__case-details__grid__input__offense">
                {singleCase?.offenseType}
              </div>
            </div>

            <div className="case-details__grid__case-details__grid__input">
              <label htmlFor="">Assigned Justice Officer:</label>

              <div className="case-details__grid__case-details__grid__input__contact">
                {singleCase?.lawEnforcementOfficer}
               <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="28" height="27" rx="7.5" fill="white"/>
<rect x="0.5" y="0.5" width="28" height="27" rx="7.5" stroke="#334155"/>
<g clip-path="url(#clip0_20_193917)">
<path d="M19.4196 16.1745L17.7263 15.9811C17.5272 15.9578 17.3254 15.9798 17.136 16.0456C16.9466 16.1114 16.7747 16.2193 16.633 16.3611L15.4063 17.5878C13.5138 16.6253 11.9755 15.087 11.013 13.1945L12.2463 11.9611C12.533 11.6745 12.673 11.2745 12.6263 10.8678L12.433 9.18781C12.3952 8.8626 12.2391 8.56264 11.9945 8.34504C11.7498 8.12745 11.4337 8.00742 11.1063 8.00781H9.95297C9.19964 8.00781 8.57297 8.63448 8.61964 9.38781C8.97297 15.0811 13.5263 19.6278 19.213 19.9811C19.9663 20.0278 20.593 19.4011 20.593 18.6478V17.4945C20.5996 16.8211 20.093 16.2545 19.4196 16.1745Z" fill="#334155"/>
</g>
<defs>
<clipPath id="clip0_20_193917">
<rect width="13" height="12" fill="white" transform="translate(8 8)"/>
</clipPath>
</defs>
</svg>

               <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="27" height="27" rx="7.5" fill="white"/>
<rect x="0.5" y="0.5" width="27" height="27" rx="7.5" stroke="#334155"/>
<g clip-path="url(#clip0_20_193920)">
<path d="M13.445 9.26978C13.5971 9.1683 13.7741 9.11044 13.9567 9.1025C14.1394 9.09457 14.3207 9.13686 14.481 9.22478L14.5545 9.26978L18.5545 11.9363C18.6798 12.0198 18.7847 12.1305 18.8612 12.2602C18.9377 12.3899 18.984 12.5352 18.9965 12.6853L19 12.7683V17.5008C19.0001 17.7531 18.9048 17.9961 18.7333 18.1811C18.5617 18.366 18.3266 18.4794 18.075 18.4983L18 18.5008H10C9.74771 18.5009 9.50472 18.4056 9.31973 18.234C9.13474 18.0625 9.02142 17.8274 9.0025 17.5758L9 17.5008V12.7683C9 12.6177 9.034 12.4691 9.09945 12.3336C9.1649 12.198 9.26012 12.0789 9.378 11.9853L9.4455 11.9363L13.445 9.26978ZM14 10.1018L10.4015 12.5008L14 14.8998L17.5985 12.5008L14 10.1018Z" fill="#334155"/>
</g>
<defs>
<clipPath id="clip0_20_193920">
<rect width="12" height="12" fill="white" transform="translate(8 8)"/>
</clipPath>
</defs>
</svg>

               <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="27" height="27" rx="7.5" fill="white"/>
<rect x="0.5" y="0.5" width="27" height="27" rx="7.5" stroke="#334155"/>
<path d="M16.5 9H11.5C10.12 9 9 10.115 9 11.49V14.48V14.98C9 16.355 10.12 17.47 11.5 17.47H12.25C12.385 17.47 12.565 17.56 12.65 17.67L13.4 18.665C13.73 19.105 14.27 19.105 14.6 18.665L15.35 17.67C15.445 17.545 15.595 17.47 15.75 17.47H16.5C17.88 17.47 19 16.355 19 14.98V11.49C19 10.115 17.88 9 16.5 9ZM14.5 14.875H11.5C11.295 14.875 11.125 14.705 11.125 14.5C11.125 14.295 11.295 14.125 11.5 14.125H14.5C14.705 14.125 14.875 14.295 14.875 14.5C14.875 14.705 14.705 14.875 14.5 14.875ZM16.5 12.375H11.5C11.295 12.375 11.125 12.205 11.125 12C11.125 11.795 11.295 11.625 11.5 11.625H16.5C16.705 11.625 16.875 11.795 16.875 12C16.875 12.205 16.705 12.375 16.5 12.375Z" fill="#334155"/>
</svg>

              </div>
            </div>
          </div>

         

          <div className="case-details__grid__case-details__grid">
            <div className="case-details__grid__case-details__grid__input">
              <label htmlFor="">Court Number</label>
              <div className="case-details__grid__case-details__grid__input__contact">
              {singleCase?.courtNumber}
              </div>
             
             
            </div>
            <div className="case-details__grid__case-details__grid__input">
              <label htmlFor="">Court Location:</label>
              <div className="case-details__grid__case-details__grid__input__filled">
              {singleCase?.courtLocation}
              </div>
            </div>
            <div className="case-details__grid__case-details__grid__input">
              <label htmlFor="">Court Clerk:</label>
              <div className="case-details__grid__case-details__grid__input__filled">
              {singleCase?.courtClerk}
              </div>
            </div>

            <div className="case-details__grid__case-details__grid__input">
              <label htmlFor="">Assigned Judge:</label>
              <div className="case-details__grid__case-details__grid__input__contact">
                {singleCase?.assignedJudge}
               <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="28" height="27" rx="7.5" fill="white"/>
<rect x="0.5" y="0.5" width="28" height="27" rx="7.5" stroke="#334155"/>
<g clip-path="url(#clip0_20_193917)">
<path d="M19.4196 16.1745L17.7263 15.9811C17.5272 15.9578 17.3254 15.9798 17.136 16.0456C16.9466 16.1114 16.7747 16.2193 16.633 16.3611L15.4063 17.5878C13.5138 16.6253 11.9755 15.087 11.013 13.1945L12.2463 11.9611C12.533 11.6745 12.673 11.2745 12.6263 10.8678L12.433 9.18781C12.3952 8.8626 12.2391 8.56264 11.9945 8.34504C11.7498 8.12745 11.4337 8.00742 11.1063 8.00781H9.95297C9.19964 8.00781 8.57297 8.63448 8.61964 9.38781C8.97297 15.0811 13.5263 19.6278 19.213 19.9811C19.9663 20.0278 20.593 19.4011 20.593 18.6478V17.4945C20.5996 16.8211 20.093 16.2545 19.4196 16.1745Z" fill="#334155"/>
</g>
<defs>
<clipPath id="clip0_20_193917">
<rect width="13" height="12" fill="white" transform="translate(8 8)"/>
</clipPath>
</defs>
</svg>

               <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="27" height="27" rx="7.5" fill="white"/>
<rect x="0.5" y="0.5" width="27" height="27" rx="7.5" stroke="#334155"/>
<g clip-path="url(#clip0_20_193920)">
<path d="M13.445 9.26978C13.5971 9.1683 13.7741 9.11044 13.9567 9.1025C14.1394 9.09457 14.3207 9.13686 14.481 9.22478L14.5545 9.26978L18.5545 11.9363C18.6798 12.0198 18.7847 12.1305 18.8612 12.2602C18.9377 12.3899 18.984 12.5352 18.9965 12.6853L19 12.7683V17.5008C19.0001 17.7531 18.9048 17.9961 18.7333 18.1811C18.5617 18.366 18.3266 18.4794 18.075 18.4983L18 18.5008H10C9.74771 18.5009 9.50472 18.4056 9.31973 18.234C9.13474 18.0625 9.02142 17.8274 9.0025 17.5758L9 17.5008V12.7683C9 12.6177 9.034 12.4691 9.09945 12.3336C9.1649 12.198 9.26012 12.0789 9.378 11.9853L9.4455 11.9363L13.445 9.26978ZM14 10.1018L10.4015 12.5008L14 14.8998L17.5985 12.5008L14 10.1018Z" fill="#334155"/>
</g>
<defs>
<clipPath id="clip0_20_193920">
<rect width="12" height="12" fill="white" transform="translate(8 8)"/>
</clipPath>
</defs>
</svg>

               <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="27" height="27" rx="7.5" fill="white"/>
<rect x="0.5" y="0.5" width="27" height="27" rx="7.5" stroke="#334155"/>
<path d="M16.5 9H11.5C10.12 9 9 10.115 9 11.49V14.48V14.98C9 16.355 10.12 17.47 11.5 17.47H12.25C12.385 17.47 12.565 17.56 12.65 17.67L13.4 18.665C13.73 19.105 14.27 19.105 14.6 18.665L15.35 17.67C15.445 17.545 15.595 17.47 15.75 17.47H16.5C17.88 17.47 19 16.355 19 14.98V11.49C19 10.115 17.88 9 16.5 9ZM14.5 14.875H11.5C11.295 14.875 11.125 14.705 11.125 14.5C11.125 14.295 11.295 14.125 11.5 14.125H14.5C14.705 14.125 14.875 14.295 14.875 14.5C14.875 14.705 14.705 14.875 14.5 14.875ZM16.5 12.375H11.5C11.295 12.375 11.125 12.205 11.125 12C11.125 11.795 11.295 11.625 11.5 11.625H16.5C16.705 11.625 16.875 11.795 16.875 12C16.875 12.205 16.705 12.375 16.5 12.375Z" fill="#334155"/>
</svg>

              </div>
            </div>
          </div>

      

          <div className="case-details__grid__case-details__grid">
            <div className="case-details__grid__case-details__grid__input">
              <label htmlFor="">Charge Sheet No</label>
              <div className="case-details__grid__case-details__grid__input__filled">
              <span>{singleCase?.chargeSheetNo}</span>
              </div>
            </div>
            <div className="case-details__grid__case-details__grid__input">
              <label htmlFor="">FMoJ Dept:</label>
              <div className="case-details__grid__case-details__grid__input__filled">
              {singleCase?.fmojDept}
              </div>
            </div>
            <div className="case-details__grid__case-details__grid__input">
              <label htmlFor="">Agency:</label>
              <div className="case-details__grid__case-details__grid__input__filled">
              {singleCase?.agency}
              </div>
            </div>

            <div className="case-details__grid__case-details__grid__input">
              <label htmlFor="">Law Enforcement Officer:</label>
              <div className="case-details__grid__case-details__grid__input__contact">
                {singleCase?.lawEnforcementOfficer}
               <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="28" height="27" rx="7.5" fill="white"/>
<rect x="0.5" y="0.5" width="28" height="27" rx="7.5" stroke="#334155"/>
<g clip-path="url(#clip0_20_193917)">
<path d="M19.4196 16.1745L17.7263 15.9811C17.5272 15.9578 17.3254 15.9798 17.136 16.0456C16.9466 16.1114 16.7747 16.2193 16.633 16.3611L15.4063 17.5878C13.5138 16.6253 11.9755 15.087 11.013 13.1945L12.2463 11.9611C12.533 11.6745 12.673 11.2745 12.6263 10.8678L12.433 9.18781C12.3952 8.8626 12.2391 8.56264 11.9945 8.34504C11.7498 8.12745 11.4337 8.00742 11.1063 8.00781H9.95297C9.19964 8.00781 8.57297 8.63448 8.61964 9.38781C8.97297 15.0811 13.5263 19.6278 19.213 19.9811C19.9663 20.0278 20.593 19.4011 20.593 18.6478V17.4945C20.5996 16.8211 20.093 16.2545 19.4196 16.1745Z" fill="#334155"/>
</g>
<defs>
<clipPath id="clip0_20_193917">
<rect width="13" height="12" fill="white" transform="translate(8 8)"/>
</clipPath>
</defs>
</svg>

               <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="27" height="27" rx="7.5" fill="white"/>
<rect x="0.5" y="0.5" width="27" height="27" rx="7.5" stroke="#334155"/>
<g clip-path="url(#clip0_20_193920)">
<path d="M13.445 9.26978C13.5971 9.1683 13.7741 9.11044 13.9567 9.1025C14.1394 9.09457 14.3207 9.13686 14.481 9.22478L14.5545 9.26978L18.5545 11.9363C18.6798 12.0198 18.7847 12.1305 18.8612 12.2602C18.9377 12.3899 18.984 12.5352 18.9965 12.6853L19 12.7683V17.5008C19.0001 17.7531 18.9048 17.9961 18.7333 18.1811C18.5617 18.366 18.3266 18.4794 18.075 18.4983L18 18.5008H10C9.74771 18.5009 9.50472 18.4056 9.31973 18.234C9.13474 18.0625 9.02142 17.8274 9.0025 17.5758L9 17.5008V12.7683C9 12.6177 9.034 12.4691 9.09945 12.3336C9.1649 12.198 9.26012 12.0789 9.378 11.9853L9.4455 11.9363L13.445 9.26978ZM14 10.1018L10.4015 12.5008L14 14.8998L17.5985 12.5008L14 10.1018Z" fill="#334155"/>
</g>
<defs>
<clipPath id="clip0_20_193920">
<rect width="12" height="12" fill="white" transform="translate(8 8)"/>
</clipPath>
</defs>
</svg>

               <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="27" height="27" rx="7.5" fill="white"/>
<rect x="0.5" y="0.5" width="27" height="27" rx="7.5" stroke="#334155"/>
<path d="M16.5 9H11.5C10.12 9 9 10.115 9 11.49V14.48V14.98C9 16.355 10.12 17.47 11.5 17.47H12.25C12.385 17.47 12.565 17.56 12.65 17.67L13.4 18.665C13.73 19.105 14.27 19.105 14.6 18.665L15.35 17.67C15.445 17.545 15.595 17.47 15.75 17.47H16.5C17.88 17.47 19 16.355 19 14.98V11.49C19 10.115 17.88 9 16.5 9ZM14.5 14.875H11.5C11.295 14.875 11.125 14.705 11.125 14.5C11.125 14.295 11.295 14.125 11.5 14.125H14.5C14.705 14.125 14.875 14.295 14.875 14.5C14.875 14.705 14.705 14.875 14.5 14.875ZM16.5 12.375H11.5C11.295 12.375 11.125 12.205 11.125 12C11.125 11.795 11.295 11.625 11.5 11.625H16.5C16.705 11.625 16.875 11.795 16.875 12C16.875 12.205 16.705 12.375 16.5 12.375Z" fill="#334155"/>
</svg>

              </div>
            </div>
          </div>

          <div className="case-details__grid__case-details__grid case-details__grid__case-details__grid-mini">
            <div className="case-details__grid__case-details__grid__input case-details__grid__case-details__grid__assoc">
              <label htmlFor="">Keywords:</label>
             
              
            </div>

            <div className="case-details__grid__case-details__grid__input case-details__grid__case-details__grid__assoc">
              <label htmlFor="">Tags:</label>
              
            </div>
          </div>

          <div className="case-details__grid__case-details__notes">
            <div>
              <label htmlFor="legalBasis">Legal Basis</label>
              <textarea
                name=""
                id=""
                placeholder="Insert the legal basis"
                required
                disabled
                value={singleCase?.legalBasis}
                ></textarea>
            </div>

            <div>
              <label htmlFor="">Particulars of Offence</label>
              <textarea
                name=""
                id=""
                placeholder="Insert the particulars of offence"
                required
                disabled
                value={singleCase?.particularsOfOffense}              ></textarea>
            </div>
            <div>
              <label htmlFor="">Charge Details</label>
              <textarea
                name=""
                id=""
                placeholder="Insert the charge details"
                required
                value={singleCase?.chargeDetails}
                disabled              ></textarea>
            </div>
            <div>
              <label htmlFor="">Legal Brief and Memoranda</label>
              <textarea
                name=""
                id=""
                placeholder="Insert the legal brief and memoranda"
                required
                disabled
                value={singleCase?.legalBriefAndMemoranda}
              ></textarea>
            </div>
          </div>

          <div className="case-details__grid__case-details__attachments">
            <div className="case-details__grid__case-details__title">
              Attachment
            </div>
            <div className="case-details__grid__case-details__subtitle">
              Attach documents, videos and audio relating to this case
            </div>

            

            <div className="case-details__grid__case-details__attachments__uploaded-files-grid">
              {singleCaseAttachment?.map((doc, index) => (
                <div className="case-details__grid__case-details__attachments__uploaded-files-grid__card" key={index}>
                  <div className="case-details__grid__case-details__attachments__uploaded-files-grid__card__card-group">
                    {doc?.url?.includes("pdf") && (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_20_196477)">
                          <path
                            d="M20 22.5H4V1.5H15L20 6.5V22.5Z"
                            fill="#C2F1C4"
                          />
                          <path
                            d="M19.25 7H14.5V2.25L19.25 7Z"
                            fill="#E1F5FE"
                          />
                          <path
                            d="M13.6529 13.9851C13.6529 13.9851 16.0439 13.5516 16.0439 14.3683C16.0439 15.1851 14.5627 14.8528 13.6529 13.9851ZM11.8852 14.0473C11.5052 14.131 11.135 14.254 10.7804 14.4141L11.0804 13.7391C11.3804 13.0641 11.6917 12.1438 11.6917 12.1438C12.0487 12.7469 12.4653 13.3127 12.9352 13.8328C12.5815 13.8855 12.2309 13.9576 11.8852 14.0488V14.0473ZM10.9387 9.17233C10.9387 8.46058 11.1689 8.26633 11.3482 8.26633C11.5274 8.26633 11.7292 8.35258 11.7359 8.97058C11.6774 9.59199 11.5473 10.2046 11.3482 10.7961C11.0744 10.2998 10.9331 9.74134 10.9379 9.17458L10.9387 9.17233ZM7.4519 17.0593C6.7184 16.6206 8.99015 15.2698 9.4019 15.2263C9.39965 15.2271 8.2199 17.5183 7.4519 17.0593ZM16.7422 14.4651C16.7347 14.3901 16.6672 13.5598 15.1897 13.5951C14.5738 13.5843 13.9582 13.6277 13.3499 13.7248C12.7603 13.1314 12.2528 12.4617 11.8409 11.7336C12.1003 10.9831 12.2574 10.201 12.3082 9.40858C12.2864 8.50858 12.0712 7.99258 11.3812 8.00008C10.6912 8.00758 10.5907 8.61133 10.6814 9.50983C10.7702 10.1136 10.9379 10.7032 11.1802 11.2633C11.1802 11.2633 10.8614 12.2556 10.4399 13.2426C10.0184 14.2296 9.7304 14.7471 9.7304 14.7471C8.99734 14.9854 8.3073 15.3399 7.68665 15.7971C7.06865 16.3723 6.8174 16.8141 7.1429 17.2558C7.4234 17.6368 8.40515 17.7231 9.28265 16.5733C9.74809 15.9789 10.174 15.3546 10.5577 14.7043C10.5577 14.7043 11.8957 14.3376 12.3119 14.2371C12.7282 14.1366 13.2314 14.0571 13.2314 14.0571C13.2314 14.0571 14.4532 15.2863 15.6314 15.2428C16.8097 15.1993 16.7527 14.5386 16.7452 14.4666"
                            fill="#009B07"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_20_196477">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    )}

                    {doc?.url?.includes("mp3") || doc?.url?.includes("wav") ? (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_20_196673)">
                          <path
                            d="M20 22.5H4V1.5H15L20 6.5V22.5Z"
                            fill="#C2F1C4"
                          />
                          <path
                            d="M19.25 7H14.5V2.25L19.25 7Z"
                            fill="#E1F5FE"
                          />
                          <path
                            d="M11.5 17C12.6046 17 13.5 16.1046 13.5 15C13.5 13.8954 12.6046 13 11.5 13C10.3954 13 9.5 13.8954 9.5 15C9.5 16.1046 10.3954 17 11.5 17Z"
                            fill="#009B07"
                          />
                          <path
                            d="M15 10.5L12.5 9.5V15H13.5V11.45L15 12V10.5Z"
                            fill="#009B07"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_20_196673">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    ) : (
                      ""
                    )}

                    {doc?.url?.includes("mp4") ||
                    doc?.url?.includes("mov") ||
                    doc?.url?.includes("flac") ||
                    doc?.url?.includes("alac") ||
                    doc?.url?.includes("aiff") ? (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 22.5H4V1.5H15L20 6.5V22.5Z"
                          fill="#C2F1C4"
                        />
                        <path d="M19.25 7H14.5V2.25L19.25 7Z" fill="#E1F5FE" />
                        <path d="M15 14L10 11V17L15 14Z" fill="#009B07" />
                      </svg>
                    ) : (
                      ""
                    )}

                    <div>
                      <div>{doc?.name}</div>
                      <div>{doc?.size}</div>
                    </div>
                  </div>
             
                </div>
              ))}
            </div>
          </div>

          <div className="case-details__grid__case-details__title">
            Asset Siezure
          </div>
          <div className="case-details__grid__case-details__subtitle">
            Link Assets and Evidence relating to this case{" "}
          </div>

          <button className="case-details__grid__case-details__link-asset">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_20_196161)">
                <path
                  d="M8.33326 10.83C8.69113 11.3085 9.14772 11.7044 9.67205 11.9908C10.1964 12.2773 10.7762 12.4476 11.3721 12.4903C11.9681 12.533 12.5662 12.447 13.126 12.2382C13.6858 12.0294 14.1942 11.7026 14.6166 11.28L17.1166 8.78005C17.8756 7.99421 18.2956 6.9417 18.2861 5.84921C18.2766 4.75672 17.8384 3.71167 17.0658 2.93914C16.2933 2.1666 15.2482 1.7284 14.1558 1.71891C13.0633 1.70941 12.0108 2.12939 11.2249 2.88838L9.79159 4.31338M11.6666 9.16338C11.3087 8.68494 10.8521 8.28906 10.3278 8.0026C9.80347 7.71613 9.22367 7.54579 8.62771 7.5031C8.03176 7.46042 7.4336 7.54641 6.8738 7.75523C6.314 7.96405 5.80566 8.29082 5.38326 8.71338L2.88326 11.2134C2.12426 11.9992 1.70429 13.0517 1.71378 14.1442C1.72327 15.2367 2.16148 16.2818 2.93401 17.0543C3.70655 17.8268 4.7516 18.265 5.84408 18.2745C6.93657 18.284 7.98908 17.864 8.77492 17.105L10.1999 15.68"
                  stroke="#009A29"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_20_196161">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Link Asset
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0001 4.16406V15.8307M4.16675 9.9974H15.8334"
                stroke="#009A29"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <div className="case-details__grid__case-details__assets">
            <div className="case-details__grid__case-details__assets__title">
              Link Asset
            </div>

            

            <div className="case-details__grid__case-details__assets__table-header">
              <div></div>
              <div>Asset No</div>
              <div>Description</div>
              <div>Amount</div>
              <div>Status</div>
            </div>

            <div className="case-details__grid__case-details__assets__inner">
            {singleCase?.externalAssets &&
              singleCase?.externalAssets?.map((item, index) => (
              <div className="case-details__grid__case-details__assets__inner__table-body"
              onClick={() =>
                window.open(
                  `https://asmss.netlify.app/dashboard/records/${item?.id}`,
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              key={index}
              >
                <Image
                  alt=""
                  src="/assets/Image (2).png"
                  width={56}
                  height={56}
                  style={{ borderRadius: "6px" }}
                />
                <div>
                  <span>{item?.assetSeizureReference}</span>
                </div>
                <div>
                {item?.assetType}
                </div>
                <div>$ 10,000</div>
                <div>{item?.storageStatus}</div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_574_22588)">
                    <path
                      d="M6.66663 9.9974H13.3333M18.3333 9.9974C18.3333 14.5998 14.6023 18.3307 9.99996 18.3307C5.39759 18.3307 1.66663 14.5998 1.66663 9.9974C1.66663 5.39502 5.39759 1.66406 9.99996 1.66406C14.6023 1.66406 18.3333 5.39502 18.3333 9.9974Z"
                      stroke="#667085"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_574_22588">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              ))}
              
            </div>
          </div>
        </div>
      </div>

      <CaseImageModal open={modalOpen} setOpen={setModalOpen} images={singleCaseMughsots} />
     

     
    </div>
  );
}

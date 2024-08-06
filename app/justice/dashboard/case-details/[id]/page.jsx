"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CaseFileModal from "../../case-file/page";
import { getCase } from "@/app/apis/case";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import CaseImageModal from "@/app/components/caseImageModal";
import Menu from "@/app/components/caseDetailsMenu";

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
      <svg width="62" height="56" viewBox="0 0 62 56" fill="none" xmlns="http://www.w3.org/2000/svg">
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
</svg>

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

        <button>Filed in Court
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 4.5L6 7.5L9 4.5" stroke="#9E77ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

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
 <Menu open={menuActive} setOpen={setMenuActive} />

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
{singleCase?.associate?.map((item, index) => (
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
                {singleCase?.judge}
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
                    {doc?.type?.includes("pdf") && (
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

                    {doc?.type?.includes("mp3") || doc?.type?.includes("wav") ? (
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

                    {doc?.type?.includes("mp4") ||
                    doc?.type?.includes("mov") ||
                    doc?.type?.includes("flac") ||
                    doc?.type?.includes("alac") ||
                    doc?.type?.includes("aiff") ? (
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

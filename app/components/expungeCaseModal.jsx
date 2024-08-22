import { useEffect, useRef, useState } from "react"
import { expungeCase, verifyExpunge } from "../apis/case";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function ExpungeCaseModal({caseDetails, setModalOpen, modalOpen }) {
    const auth = useSelector((state) => state.auth);
    const [modalStage, setModaleStage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [doc, setDoc] = useState("");
    const [otp1, setOtp1] = useState("");
    const [otp2, setOtp2] = useState("");
    const [otp3, setOtp3] = useState("");
    const [otp4, setOtp4] = useState("");
    const mediaRef = useRef(null);

    const handleModalClose = (e) => {
        if (e.target.classList.contains("case-details__modal")) {
          setModalOpen(false);
          setModaleStage(1);
        }
      };


      const handleStage1 = () => {
        if (!!doc) {
          setModaleStage(2);
        } else {
          alert("Please Upload Certified Court Order For Expungement");
        }
      };
      const handleStage2 = async () => {
        const response = await expungeCase(doc, caseDetails?.caseNumber, auth?.userInfo?.officialEmail, auth?.token);
        console.log('expunge response', response);
        if(response?.data?.statusCode === 200) {
          setModaleStage(3);
        }else {
          toast.error("Unable to expunge case. Please try again later")
        }
      };
      const handleStage3 = async(e) => {
        e.preventDefault();
        const otp = `${otp1}${otp2}${otp3}${otp4}`
        const response = await verifyExpunge(otp, doc, caseDetails?.caseNumber, auth?.userInfo?.officialEmail, auth?.token);
        console.log('otp response', response);
        if(response?.data?.statusCode === 200) {
          setModaleStage(4);
        }else {
          toast.error("Unable to expunge case. Please try again later")
        }
      };
      const handleStage4 = () => {
        window.location.href = "/justice/expunge-doc";
      };

      const handleUpload = async (item) => {
        setLoading(true);
        setTimeout(() => {
          setDoc(item);
          setLoading(false);
        }, 5000);
      };
    
      
    

        useEffect(() => {
    const otpInputs = document.querySelectorAll(
      ".case-details__modal__otp__otp-group__otp"
    );

    otpInputs.forEach((input, index) => {
      input.addEventListener("input", (event) => {
        const inputValue = event.target.value;

        if (inputValue && index < otpInputs.length - 1) {
          otpInputs[index + 1].focus();
        }
      });

      input.addEventListener("keydown", (event) => {
        if (event.key === "Backspace" && index > 0 && !input.value) {
          otpInputs[index - 1].focus();
          event.preventDefault();
        }
      });
    });
  }, [modalStage === 3]);

  const handleFileUpload = (e) => {
    setLoading(true);

    let files = e.target.files;

    const fileToUri = (file, cb) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        cb(null, reader.result);
      };
      reader.onerror = function (error) {
        cb(error, null);
      };
    };

    if (files) {
      for (let i = 0; i < files.length; i++) {
        fileToUri(files[0], (err, result) => {
          if (result) {
            console.log("result", result);

            axios
              .post(
                `https://kaxl3c7ehj.execute-api.us-east-1.amazonaws.com/dev/v1/upload`,
                {
                  user: "teddy",
                  media_type: "pdf",
                  contents: result,
                }
              )
              .then((response) => {
                console.log("response file uploaded", response);
                if (response?.status === 200) {
                    setDoc(response?.data?.body?.data);
                }
                setLoading(false);
              })
              .catch((err) => {
                console.log("ERRRR", err);
                setLoading(false);
                alert("Mugshot upload failed. please try again")
              });
          }
        });
      }
    }
  };


      
    return (modalOpen &&
        <div className="case-details__modal" onClick={handleModalClose}>
            {modalStage === 1 || modalStage === 2 ? (
              <div className="case-details__modal__inner">
                <svg
                  className="case-details__modal__inner__icon"
                  width="80"
                  height="81"
                  viewBox="0 0 80 81"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.5"
                    width="80"
                    height="80"
                    rx="40"
                    fill="url(#paint0_linear_7644_138298)"
                  />
                  <path
                    d="M52.0942 31.4727C49.9475 31.2593 47.8009 31.0993 45.6409 30.9793V30.966L45.3475 29.2327C45.1475 28.006 44.8542 26.166 41.7342 26.166H38.2409C35.1342 26.166 34.8409 27.926 34.6275 29.2193L34.3475 30.926C33.1075 31.006 31.8675 31.086 30.6275 31.206L27.9075 31.4727C27.3475 31.526 26.9475 32.0193 27.0009 32.566C27.0542 33.1127 27.5342 33.5127 28.0942 33.4593L30.8142 33.1927C37.8009 32.4993 44.8409 32.766 51.9075 33.4727C51.9475 33.4727 51.9742 33.4727 52.0142 33.4727C52.5209 33.4727 52.9609 33.086 53.0142 32.566C53.0542 32.0193 52.6542 31.526 52.0942 31.4727Z"
                    fill="#ED1651"
                  />
                  <path
                    d="M49.6403 35.354C49.3203 35.0207 48.8803 34.834 48.427 34.834H31.5737C31.1203 34.834 30.667 35.0207 30.3603 35.354C30.0537 35.6873 29.8803 36.1407 29.907 36.6073L30.7337 50.2873C30.8803 52.314 31.067 54.8473 35.7203 54.8473H44.2803C48.9337 54.8473 49.1203 52.3273 49.267 50.2873L50.0937 36.6207C50.1203 36.1407 49.947 35.6873 49.6403 35.354ZM42.2136 48.1673H37.7737C37.227 48.1673 36.7737 47.714 36.7737 47.1673C36.7737 46.6207 37.227 46.1673 37.7737 46.1673H42.2136C42.7603 46.1673 43.2136 46.6207 43.2136 47.1673C43.2136 47.714 42.7603 48.1673 42.2136 48.1673ZM43.3337 42.834H36.667C36.1203 42.834 35.667 42.3807 35.667 41.834C35.667 41.2873 36.1203 40.834 36.667 40.834H43.3337C43.8803 40.834 44.3337 41.2873 44.3337 41.834C44.3337 42.3807 43.8803 42.834 43.3337 42.834Z"
                    fill="#ED1651"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_7644_138298"
                      x1="40"
                      y1="0.5"
                      x2="40"
                      y2="86.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF2B65" stop-opacity="0.2" />
                      <stop offset="1" stop-color="#ED1651" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                {modalStage === 1 && (
                  <div className="case-details__modal__inner__title">
                    to Expunge Case No {caseDetails?.caseNumber}
                  </div>
                )}
                {modalStage === 1 && (
                  <div className="case-details__modal__inner__title">
                    <span>
                      Please upload Certified Court Order for Expungement
                    </span>
                  </div>
                )}

                {modalStage === 1 && (
                  <label>
                    <div className="case-details__modal__inner__upload">
                      <svg
                        width="60"
                        height="61"
                        viewBox="0 0 60 61"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="30" cy="30.5" r="30" fill="#E5FFE7" />
                      </svg>

                      <div className="case-details__modal__inner__upload__title">
                        Drag & drop files or <span>Browse</span>
                      </div>
                      <div className="case-details__modal__inner__upload__subtitle">
                        Supported formates: JPEG, PNG, PDF
                      </div>
                    </div>

                    <input
                      type="file"
                      name=""
                      id=""
                      hidden
                      ref={mediaRef}
                      accept=".pdf"
                      onChange={handleFileUpload}
                    />
                  </label>
                )}

                {modalStage === 1 && (
                  <>
                    {loading && (
                      <div className="case-details__modal__inner__label">
                        Uploading
                      </div>
                    )}
                    {loading && (
                      <div className="case-details__modal__inner__uploading">
                        <div>Court-Order Expungement {caseDetails?.caseNumber}.PDF</div>

                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.5 16.5C6.37833 16.5 4.34331 15.6571 2.84315 14.1568C1.3429 12.6565 0.5 10.6217 0.5 8.5C0.5 6.37833 1.3429 4.34332 2.84315 2.84315C4.34353 1.3429 6.37833 0.5 8.5 0.5C10.6217 0.5 12.6567 1.3429 14.1568 2.84315C15.6571 4.34353 16.5 6.37833 16.5 8.5C16.4974 10.621 15.6538 12.6545 14.154 14.154C12.6543 15.6538 10.6207 16.4974 8.5 16.5ZM11.5851 6.44242V6.4423C11.7254 6.30678 11.8053 6.12063 11.8071 5.92558C11.8088 5.73053 11.7321 5.54292 11.5941 5.40496C11.4562 5.26701 11.2685 5.19031 11.0735 5.19202C10.8784 5.19372 10.6923 5.27371 10.5568 5.41397L8.5 7.47149L6.44323 5.41397C6.25853 5.2356 5.99346 5.16779 5.7457 5.23572C5.49805 5.30366 5.3046 5.49713 5.23665 5.74477C5.16871 5.99254 5.23653 6.2576 5.4149 6.4423L7.47167 8.49983L5.4149 10.5573C5.27464 10.6929 5.19465 10.879 5.19294 11.0741C5.19124 11.2691 5.26794 11.4567 5.40589 11.5947C5.54383 11.7326 5.73145 11.8093 5.9265 11.8076C6.12155 11.8059 6.3077 11.7259 6.44322 11.5857L8.49999 9.52815L10.5568 11.5857C10.6923 11.7259 10.8784 11.8059 11.0735 11.8076C11.2685 11.8093 11.4561 11.7326 11.5941 11.5947C11.7321 11.4567 11.8088 11.2691 11.807 11.0741C11.8053 10.879 11.7253 10.6929 11.5851 10.5573L9.52832 8.49983L11.5851 6.44242Z"
                            fill="#E6E6E6"
                          />
                        </svg>
                      </div>
                    )}
                    {!!doc && (
                      <div className="case-details__modal__inner__label">
                        Uploaded
                      </div>
                    )}
                    {!!doc && (
                      <div className="case-details__modal__inner__uploaded">
                        <div>Court-Order Expungement {caseDetails?.caseNumber}.PDF</div>

                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="pointer"
                          onClick={() => setDoc(null)}
                        >
                          <circle cx="8.5" cy="8.5" r="8" fill="#FFF3F3" />
                          <path
                            d="M11.9769 5.64517H10.9774C10.964 5.64054 10.9501 5.63753 10.936 5.63614H9.87174V4.75348C9.8718 4.68714 9.8458 4.62346 9.79945 4.57608C9.75304 4.52871 9.68995 4.50138 9.62369 4.5H7.10672C7.03948 4.5 6.97501 4.52667 6.92752 4.57422C6.87997 4.62177 6.85324 4.68624 6.85324 4.75348V5.63614H5.79439C5.7803 5.63753 5.7664 5.64054 5.75303 5.64517H4.75347C4.66288 5.64517 4.57921 5.69345 4.53395 5.77188C4.48868 5.85031 4.48868 5.94691 4.53395 6.02535C4.57921 6.10378 4.66288 6.15211 4.75347 6.15211H5.56783L6.22585 12.2735C6.2329 12.3358 6.26263 12.3933 6.3094 12.4351C6.35611 12.4769 6.41661 12.4999 6.47932 12.5H10.2546C10.3167 12.4991 10.3763 12.4756 10.4223 12.4339C10.4683 12.3922 10.4975 12.3352 10.5045 12.2735L11.1625 6.16105H11.9769C12.0675 6.16105 12.1511 6.11277 12.1964 6.03434C12.2417 5.95591 12.2417 5.85924 12.1964 5.78087C12.1511 5.70244 12.0675 5.6541 11.9769 5.6541L11.9769 5.64517ZM7.36566 5.00695H9.36472V5.63614H7.36566V5.00695ZM10.0245 11.9894H6.70582L6.07663 6.16111H10.6537L10.0245 11.9894Z"
                            fill="#E41D1D"
                          />
                          <path
                            d="M8.36675 11.3957C8.43399 11.3957 8.49845 11.369 8.54601 11.3215C8.59356 11.2739 8.62023 11.2095 8.62023 11.1422V7.00742C8.62023 6.91683 8.57195 6.83316 8.49352 6.7879C8.41509 6.74257 8.31842 6.74257 8.23999 6.7879C8.16156 6.83317 8.11328 6.91683 8.11328 7.00742V11.1422C8.11328 11.2095 8.13995 11.2739 8.1875 11.3215C8.23505 11.369 8.29952 11.3957 8.36676 11.3957H8.36675Z"
                            fill="#E41D1D"
                          />
                          <path
                            d="M7.3674 11.3944H7.37817C7.44511 11.3917 7.50819 11.3625 7.5537 11.3133C7.59915 11.2641 7.62334 11.1989 7.62088 11.132L7.46805 6.99719L7.46811 6.99713C7.46672 6.92941 7.43777 6.86512 7.38787 6.81926C7.33791 6.77345 7.27146 6.75004 7.2038 6.75443C7.13687 6.75726 7.07379 6.78645 7.02834 6.83563C6.98283 6.88481 6.95869 6.95 6.9611 7.01694L7.11393 11.1517C7.11712 11.2169 7.14517 11.2784 7.19236 11.3236C7.23949 11.3687 7.30215 11.3941 7.3674 11.3944L7.3674 11.3944Z"
                            fill="#E41D1D"
                          />
                          <path
                            d="M9.35421 11.3931H9.36318C9.42999 11.3946 9.4947 11.3698 9.54345 11.3241C9.59215 11.2784 9.62104 11.2154 9.62387 11.1486L9.7767 7.01379H9.77664C9.77911 6.94686 9.75491 6.88167 9.70946 6.83249C9.66396 6.78331 9.60088 6.75412 9.53394 6.75129C9.4655 6.74424 9.39724 6.76633 9.34589 6.8122C9.29455 6.85801 9.26493 6.92338 9.26427 6.99224L9.10964 11.127H9.1097C9.10627 11.1949 9.13022 11.2613 9.17621 11.3113C9.22214 11.3613 9.2863 11.3908 9.35421 11.3931L9.35421 11.3931Z"
                            fill="#E41D1D"
                          />
                        </svg>
                      </div>
                    )}
                  </>
                )}

                {modalStage === 1 && (
                  <button
                    className="case-details__modal__inner__button"
                    onClick={handleStage1}
                  >
                    Yes
                  </button>
                )}

                {modalStage === 2 && (
                  <>
                    <div className="case-details__modal__inner__title">
                      <span>expungement Review</span>
                    </div>
                    <div className="case-details__modal__inner__subtitle">
                      Expungement by: <span>Alaba Adenuga(FM56898324)</span>
                    </div>
                    <div className="case-details__modal__inner__subtitle">
                      Title: <span>Director of Legal Records</span>
                    </div>
                    <div className="case-details__modal__inner__subtitle">
                      Date: <span>06-06-2024</span>
                    </div>
                    <div className="case-details__modal__inner__subtitle">
                      Agency: <span>Federal Ministry of Justice HQ Abuja</span>
                    </div>
                    <div className="case-details__modal__inner__file-name">
                      Expunge case file: <span>{caseDetails?.caseNumber}</span>
                    </div>

                    <div className="case-details__modal__inner__question">
                      Are you sure you want to <br /> proceed?
                    </div>

                    <div className="case-details__modal__inner__label">
                      Uploaded
                    </div>
                    <div className="case-details__modal__inner__uploaded">
                      <div>Court-Order Expungement {caseDetails?.caseNumber}.PDF</div>

                      <div className="pointer"
                      onClick={() => window.location.href =`https://${doc}`}
                      >View</div>
                    </div>

                    <button
                      className="case-details__modal__inner__button"
                      onClick={handleStage2}
                    >
                      Yes
                    </button>
                  </>
                )}
              </div>
            ) : (
              ""
            )}

            {modalStage === 3 && (
              <form
                className="case-details__modal__otp"
                onSubmit={handleStage3}
              >
                <div className="case-details__modal__otp__title">OTP</div>
                <div className="case-details__modal__otp__subtitle">
                  Enter the OTP sent to Alaba.Adenuga@fmoj.gov.ng
                </div>
                <div className="case-details__modal__otp__otp-group">
                  <input
                    className="case-details__modal__otp__otp-group__otp"
                    type="text"
                    required
                    maxLength={1}
                    value={otp1}
                    onChange={(e) => setOtp1(e.target.value)}
                  />
                  <input
                    className="case-details__modal__otp__otp-group__otp"
                    type="text"
                    required
                    maxLength={1}
                    value={otp2}
                    onChange={(e) => setOtp2(e.target.value)}
                  />
                  <input
                    className="case-details__modal__otp__otp-group__otp"
                    type="text"
                    required
                    maxLength={1}
                    value={otp3}
                    onChange={(e) => setOtp3(e.target.value)}
                  />
                  <input
                    className="case-details__modal__otp__otp-group__otp"
                    type="text"
                    required
                    maxLength={1}
                    value={otp4}
                    onChange={(e) => setOtp4(e.target.value)}
                  />
                </div>
                <div className="case-details__modal__otp__request">
                  Request a new code
                </div>

                <button
                  className="case-details__modal__otp__button"
                  type="submit"
                >
                  Proceed
                </button>
              </form>
            )}

            {modalStage === 4 && (
              <div
                className="case-details__modal__exp-notif pointer"
                onClick={handleStage4}
              >
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="21" cy="21" r="21" fill="#FFC6D6" />
                  <path
                    d="M30.0697 14.23C28.4597 14.07 26.8497 13.95 25.2297 13.86V13.85L25.0097 12.55C24.8597 11.63 24.6397 10.25 22.2997 10.25H19.6797C17.3497 10.25 17.1297 11.57 16.9697 12.54L16.7597 13.82C15.8297 13.88 14.8997 13.94 13.9697 14.03L11.9297 14.23C11.5097 14.27 11.2097 14.64 11.2497 15.05C11.2897 15.46 11.6497 15.76 12.0697 15.72L14.1097 15.52C19.3497 15 24.6297 15.2 29.9297 15.73C29.9597 15.73 29.9797 15.73 30.0097 15.73C30.3897 15.73 30.7197 15.44 30.7597 15.05C30.7897 14.64 30.4897 14.27 30.0697 14.23Z"
                    fill="#ED1651"
                  />
                  <path
                    d="M28.2297 17.14C27.9897 16.89 27.6597 16.75 27.3197 16.75H14.6797C14.3397 16.75 13.9997 16.89 13.7697 17.14C13.5397 17.39 13.4097 17.73 13.4297 18.08L14.0497 28.34C14.1597 29.86 14.2997 31.76 17.7897 31.76H24.2097C27.6997 31.76 27.8398 29.87 27.9497 28.34L28.5697 18.09C28.5897 17.73 28.4597 17.39 28.2297 17.14ZM22.6597 26.75H19.3297C18.9197 26.75 18.5797 26.41 18.5797 26C18.5797 25.59 18.9197 25.25 19.3297 25.25H22.6597C23.0697 25.25 23.4097 25.59 23.4097 26C23.4097 26.41 23.0697 26.75 22.6597 26.75ZM23.4997 22.75H18.4997C18.0897 22.75 17.7497 22.41 17.7497 22C17.7497 21.59 18.0897 21.25 18.4997 21.25H23.4997C23.9097 21.25 24.2497 21.59 24.2497 22C24.2497 22.41 23.9097 22.75 23.4997 22.75Z"
                    fill="#ED1651"
                  />
                </svg>

                <div>
                  Case File <span>{caseDetails?.caseNumber} Expunged</span>
                </div>
              </div>
            )}
          </div>
    )
}
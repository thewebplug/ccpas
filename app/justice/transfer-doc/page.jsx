import Image from "next/image";

export default function ExpungeDoc() {
  return (
    <div className="expunge-doc">
      <div className="expunge-doc__inner">
        <div className="expunge-doc__inner__options">
          <div>Print</div>
          <div>Email</div>
        </div>
        <Image
          className="expunge-doc__inner__logo"
          src="/assets/Logo.png"
          width={110}
          height={110}
        />

        <div className="expunge-doc__inner__title">
          Centralised Criminal Public Prosecution Administrative System CCPPAS
        </div>
        <div className="expunge-doc__inner__subtitle">
          Administered by Federal Ministry of Justice Department of Public
          Prosecution
        </div>
        <div className="expunge-doc__inner__cert-title">
          Transfer certificate
        </div>
        <div className="expunge-doc__inner__cert-subtitle">
          This is to certify that <span>case file PF00458</span> has been
          transferred
        </div>
        <div className="expunge-doc__inner__cert-subsubtitle">
          <div>
            Account Name: <span>Frank Ammadou</span>
          </div>
          <div>
            Transfer by: <span>Alaba Adenuga(FM56898324)</span>
          </div>
          <div>
            Agency:<span>Federal Ministry of Justice HQ Abuja</span>
          </div>
          <div>
            Date:<span>JUN-06-2024</span>
          </div>
          <div>
            Time:<span>17:25:34</span>
          </div>
        </div>

        <div className="expunge-doc__inner__file-no">
            Transferred case file: <span>PF00458</span>
        </div>
      </div>
    </div>
  );
}

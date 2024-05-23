import Image from "next/image";

export default function Auth() {
  return (
    <main className="auth">
      <div className="auth__header">
        <Image alt="" src="/assets/logo.png" width={66.089} height={66.089} />
        <div className="auth__header__inner">
          <div className="auth__header__inner__title">
            Centralised Criminal Public Prosecution Administrative System CCPPAS
          </div>
          <div className="auth__header__inner__subtitle">
            Administered by Federal Ministry of Justice Department of Public
            Prosecution
          </div>
        </div>
      </div>

      <div className="auth__unauth">
      <svg width="232" height="231" viewBox="0 0 232 231" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="116" cy="115.5" r="115.5" fill="#ED1651"/>
<g clip-path="url(#clip0_4553_11163)">
<mask id="mask0_4553_11163" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="84" y="81" width="64" height="57">
<path fill-rule="evenodd" clip-rule="evenodd" d="M116.001 85.3574L88.1387 133.482H143.862L116.001 85.3574Z" fill="white" stroke="white" stroke-width="8.10526" stroke-linejoin="round"/>
<path d="M116.001 123.351V124.617M116.001 103.088L116.012 115.752" stroke="black" stroke-width="8.10526" stroke-linecap="round"/>
</mask>
<g mask="url(#mask0_4553_11163)">
<path d="M85.605 79.0254H146.394V139.815H85.605V79.0254Z" fill="white"/>
</g>
</g>
<defs>
<clipPath id="clip0_4553_11163">
<rect width="60.7895" height="60.7895" fill="white" transform="translate(85.6055 79.0254)"/>
</clipPath>
</defs>
</svg>

<h1 className="auth__unauth__title">Unauthorised request detected</h1>
<h2 className="auth__unauth__subtitle">Law enforcement agencies have been notified</h2>
      </div>
    </main>
  );
}

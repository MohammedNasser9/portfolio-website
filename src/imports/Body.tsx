import clsx from "clsx";
import svgPaths from "./svg-38jan5k44n";
import imgProject2 from "../assets/efaa74af87883b2eaba1ff92ec9b35c650f077f5.png";
import imgProject1 from "../assets/f59160046c9a3c3fa995737bb0b2575d8aed1b9c.png";
import imgProject3 from "../assets/2bab7aad8c11833074284f10e41a681c0c475a86.png";
import imgProject4 from "../assets/7cccfc9599446311cfe5742fb9fc40899cd864ce.png";
import imgProject5 from "../assets/ccdd9b608cd2ffb9214744c9d2b72e49782389f0.png";
import imgProject6 from "../assets/9ff2c675faaca6f42d4a63937a4dd7f4dbbdce29.png";
import imgMohammedNasserPortrait from "../assets/03208ad9c3409339842b580fadc1f63a56a65ebe.png";
import imgBackground from "../assets/39aab73a45c612abf014cd8387797410e717c3ab.png";
import imgBackground1 from "../assets/b16211a9f9fd8fb82e6483328535ecd458530f46.png";
import imgBackground2 from "../assets/d1de8b14dcdb224d3238629ee05b2850c42f6549.png";

function BackgroundBorderShadow({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px] self-stretch">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[41px] relative size-full">{children}</div>
    </div>
  );
}

function Background({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[48px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
        {children}
      </div>
    </div>
  );
}

function Container4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center pt-[8px] relative w-full">{children}</div>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={clsx("bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative", additionalClassNames)}>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[28px] not-italic relative shrink-0 text-[#475569] text-[18px] w-full">{children}</div>
    </div>
  );
}

function Container3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] px-[48px] relative w-full">{children}</div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[18px] w-full">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[rgba(19,91,236,0.1)] relative rounded-[4px] self-stretch shrink-0">
      <div className="content-stretch flex flex-col h-full items-start px-[8px] py-[2px] relative">{children}</div>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[128.45px]">
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}
type HeadingText1Props = {
  text: string;
};

function HeadingText1({ text }: HeadingText1Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] w-[89.67px]">
        <p className="leading-[24px]">{text}</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative w-full">
        <Container2 />
        <Container2 />
        <Container2 />
        <Container2 />
        <Container2 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[19px] relative shrink-0 w-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
        <g id="Container">
          <path d={svgPaths.p3e30af00} fill="var(--fill-0, #FACC15)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}
type BackgroundBorderProps = {
  additionalClassNames?: string;
};

function BackgroundBorder({ additionalClassNames = "" }: BackgroundBorderProps) {
  return (
    <div className={clsx("relative rounded-[9999px] shrink-0 size-[40px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 size-[10.667px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
        <g id="Container">
          <path d={svgPaths.p2b41a9d0} fill="var(--fill-0, #135BEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}
type HeadingTextProps = {
  text: string;
};

function HeadingText({ text }: HeadingTextProps) {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[55px]">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">{text}</p>
      </div>
    </div>
  );
}
type OverlayText1Props = {
  text: string;
};

function OverlayText1({ text }: OverlayText1Props) {
  return (
    <Wrapper>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#135bec] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">{text}</p>
      </div>
    </Wrapper>
  );
}
type OverlayTextProps = {
  text: string;
};

function OverlayText({ text }: OverlayTextProps) {
  return (
    <Wrapper>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#135bec] text-[10px] tracking-[1px] uppercase w-[44.19px]">
        <p className="leading-[15px]">{text}</p>
      </div>
    </Wrapper>
  );
}
type ItemTextProps = {
  text: string;
};

function ItemText({ text }: ItemTextProps) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="bg-[#135bec] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">{text}</p>
      </div>
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#f6f6f8] content-stretch flex flex-col items-start relative size-full" data-name="Body">
      <div className="h-[4937px] min-h-[4937px] relative shrink-0 w-full" data-name="Container">
        <div className="absolute h-[4743px] left-0 right-0 top-[73px]" data-name="Main">
          <div className="absolute bg-white content-stretch flex flex-col items-start left-0 px-[48px] py-[96px] right-0 top-[720px]" data-name="Section">
            <div className="content-stretch flex gap-[32px] h-[229px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex flex-col gap-[16px] items-start relative self-stretch shrink-0 w-[200px]" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[30px] tracking-[-0.75px] w-full">
                    <p className="leading-[36px]">About Me</p>
                  </div>
                </div>
                <div className="bg-[#135bec] h-[6px] rounded-[9999px] shrink-0 w-[48px]" data-name="Background" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Container">
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
                  <Wrapper1>
                    <p className="mb-0">
                      <span className="leading-[29.25px]">{`I am a dedicated `}</span>
                      <span className="font-['Inter:Bold',sans-serif] font-bold leading-[29.25px] not-italic text-[#135bec]">UX/UI Designer</span>
                      <span className="leading-[29.25px]">{` with a strong foundation in creating functional and`}</span>
                    </p>
                    <p className="leading-[29.25px] mb-0">beautiful digital products. With a deep understanding of user psychology and a keen eye</p>
                    <p className="leading-[29.25px]">for detail, I specialize in end-to-end design processes from discovery to final handoff.</p>
                  </Wrapper1>
                  <Wrapper1>
                    <p className="mb-0">
                      <span className="leading-[29.25px]">{`My background includes a strong awareness of front-end technologies like `}</span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29.25px] not-italic text-[#135bec]">React and</span>
                    </p>
                    <p className="mb-0">
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29.25px] not-italic text-[#135bec]">Next.js,</span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29.25px] not-italic text-[#135bec]">{` `}</span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29.25px] not-italic text-[#135bec]">T</span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29.25px] not-italic text-[#135bec]">a</span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29.25px] not-italic text-[#135bec]">i</span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29.25px] not-italic text-[#135bec]">l</span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29.25px] not-italic text-[#135bec]">w</span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29.25px] not-italic text-[#135bec]">i</span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29.25px] not-italic text-[#135bec]">n</span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29.25px] not-italic text-[#135bec]">d</span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29.25px] not-italic text-[#135bec]">,</span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29.25px] not-italic text-[#135bec]">{` `}</span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29.25px] not-italic text-[#135bec]">T</span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29.25px] not-italic text-[#135bec]">y</span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29.25px] not-italic text-[#135bec]">p</span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29.25px] not-italic text-[#135bec]">e</span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29.25px] not-italic text-[#135bec]">s</span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29.25px] not-italic text-[#135bec]">c</span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29.25px] not-italic text-[#135bec]">r</span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29.25px] not-italic text-[#135bec]">i</span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29.25px] not-italic text-[#135bec]">p</span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29.25px] not-italic text-[#135bec]">t,</span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29.25px] not-italic text-[#135bec]">{` `}</span>
                      <span className="leading-[29.25px]">allowing me to design with technical feasibility in mind and collaborate effectively</span>
                    </p>
                    <p className="leading-[29.25px] mb-0">with development teams. I believe that great design is not just about how it looks, but how</p>
                    <p className="leading-[29.25px]">it works and solves real problems for real people.</p>
                  </Wrapper1>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[64px] items-start left-0 max-w-[1280px] px-[48px] right-0 top-[1236.75px]" data-name="Section">
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[30px] text-center w-[192.42px]">
                <p className="leading-[36px]">My Expertise</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[32px] h-[314px] items-start justify-center relative shrink-0 w-full" data-name="Container">
              <div className="bg-white relative rounded-[16px] self-stretch shrink-0 w-[373.33px]" data-name="Background+Border">
                <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <div className="absolute bg-[rgba(19,91,236,0.1)] content-stretch flex items-center justify-center left-[33px] rounded-[12px] size-[48px] top-[33px]" data-name="Overlay">
                  <Wrapper2>
                    <g id="Container">
                      <path d={svgPaths.pa50fd00} fill="var(--fill-0, #135BEC)" id="Icon" />
                    </g>
                  </Wrapper2>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[33px] top-[105px]" data-name="Heading 3">
                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] w-[130.23px]">
                    <p className="leading-[28px]">UX/UI Design</p>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[33px] right-[33px] top-[149px]" data-name="List">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
                    <div className="bg-[#135bec] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] w-[110.88px]">
                      <p className="leading-[24px]">User Research</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
                    <div className="bg-[#135bec] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] w-[136.7px]">
                      <p className="leading-[24px]">{`User Flow & Logic`}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
                    <div className="bg-[#135bec] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] w-[92.81px]">
                      <p className="leading-[24px]">Wireframing</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
                    <div className="bg-[#135bec] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] w-[112.69px]">
                      <p className="leading-[24px]">High-Fi Design</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white relative rounded-[16px] self-stretch shrink-0 w-[373.33px]" data-name="Background+Border">
                <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <div className="absolute bg-[rgba(19,91,236,0.1)] content-stretch flex items-center justify-center left-[33px] rounded-[12px] size-[48px] top-[33px]" data-name="Overlay">
                  <div className="h-[18px] relative shrink-0 w-[11px]" data-name="Container">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 18">
                      <g id="Container">
                        <path d={svgPaths.p34c7c000} fill="var(--fill-0, #135BEC)" id="Icon" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[33px] top-[105px]" data-name="Heading 3">
                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] w-[52.95px]">
                    <p className="leading-[28px]">Tools</p>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[33px] right-[33px] top-[149px]" data-name="List">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
                    <div className="bg-[#135bec] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] w-[46.14px]">
                      <p className="leading-[24px]">Figma</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
                    <div className="bg-[#135bec] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] w-[159.59px]">
                      <p className="leading-[24px]" dir="auto">
                        Adobe XD
                      </p>
                    </div>
                  </div>
                  <ItemText text="Photoshop" />
                  <ItemText text="illustrator" />
                </div>
              </div>
              <div className="bg-white relative rounded-[16px] self-stretch shrink-0 w-[373.34px]" data-name="Background+Border">
                <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <div className="absolute bg-[rgba(19,91,236,0.1)] content-stretch flex items-center justify-center left-[33px] rounded-[12px] size-[48px] top-[33px]" data-name="Overlay">
                  <div className="h-[12px] relative shrink-0 w-[20px]" data-name="Container">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 12">
                      <g id="Container">
                        <path d={svgPaths.p24c05900} fill="var(--fill-0, #135BEC)" id="Icon" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[33px] top-[105px]" data-name="Heading 3">
                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] w-[151.2px]">
                    <p className="leading-[28px]">Dev Awareness</p>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[33px] right-[33px] top-[149px]" data-name="List">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
                    <div className="bg-[#135bec] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] w-[109.91px]">
                      <p className="leading-[24px]">React / Next.js</p>
                    </div>
                  </div>
                  <ItemText text="CSS (tailwind-bootstrap)" />
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
                    <div className="bg-[#135bec] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] w-[176px]">
                      <p className="leading-[24px]" dir="auto">{`Javascipt & Typescript`}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
                    <div className="bg-[#135bec] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] w-[153.86px]">
                      <p className="leading-[24px]">{`Git & Github`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-white content-stretch flex flex-col items-start left-0 py-[96px] right-0 top-[1746.75px]" data-name="Section">
            <Container3>
              <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[369.3px]" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[36px] tracking-[-0.9px] w-[294.19px]">
                      <p className="leading-[40px]">Featured Projects</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] w-[369.3px]">
                      <p className="leading-[24px]">A selection of my recent works and experiments.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[998px] relative shrink-0 w-full" data-name="Container">
                <div className="absolute bg-white content-stretch flex flex-col items-start left-[405.33px] overflow-clip right-[405.34px] rounded-[16px] shadow-[0px_0px_0px_1px_#e2e8f0,0px_1px_2px_0px_rgba(0,0,0,0.05)] top-0" data-name="Background+Shadow">
                  <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Background">
                    <div className="h-[279.98px] relative shrink-0 w-full" data-name="Project 2">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[133.34%] left-[-0.14%] max-w-none top-[0.26%] w-full" src={imgProject2} />
                      </div>
                    </div>
                  </div>
                  <div className="h-[203px] relative shrink-0 w-full" data-name="Container">
                    <div className="absolute content-stretch flex gap-[8px] h-[19px] items-start left-[24px] right-[24px] top-[24px]" data-name="Container">
                      <OverlayText text="Mobile" />
                      <OverlayText1 text="Food" />
                    </div>
                    <HeadingText text="Otlob App" />
                    <div className="absolute content-stretch flex flex-col items-start left-[24px] overflow-clip right-[24px] top-[91px]" data-name="Container">
                      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[308.36px]">
                        <p className="leading-[20px]">Otlob is a modern and intuitive food delivery mobile app designed for the Egyptian market</p>
                      </div>
                    </div>
                    <div className="absolute content-stretch flex gap-[8px] items-center left-[24px] top-[155px]" data-name="Button">
                      <a className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#135bec] text-[14px] text-center whitespace-nowrap" href="https://www.behance.net/gallery/244985217/Otlob-Food-Delivery-Mobile-App-UIUX-Case-Study">
                        <p className="cursor-pointer leading-[20px]">View Case Study</p>
                      </a>
                      <Container />
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white content-stretch flex flex-col items-start left-0 overflow-clip right-[810.67px] rounded-[16px] shadow-[0px_0px_0px_1px_#e2e8f0,0px_1px_2px_0px_rgba(0,0,0,0.05)] top-0" data-name="Background+Shadow">
                  <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Background">
                    <div className="h-[279.98px] relative shrink-0 w-full" data-name="Project 1">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[133.34%] left-[0.09%] max-w-none top-[0.18%] w-full" src={imgProject1} />
                      </div>
                    </div>
                  </div>
                  <div className="h-[203px] relative shrink-0 w-full" data-name="Container">
                    <div className="absolute content-stretch flex gap-[4px] h-[19px] items-start left-[24px] right-[24px] top-[24px]" data-name="Container">
                      <OverlayText1 text="Dashboard" />
                      <Wrapper>
                        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#135bec] text-[10px] tracking-[1px] uppercase w-[31.88px]">
                          <p className="leading-[15px]">SaaS</p>
                        </div>
                      </Wrapper>
                      <OverlayText1 text="web" />
                    </div>
                    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[55px]" data-name="Heading 3">
                      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] w-[161.95px]">
                        <p className="leading-[28px]">Nova Dashboard</p>
                      </div>
                    </div>
                    <div className="absolute content-stretch flex flex-col items-start left-[24px] overflow-clip right-[24px] top-[91px]" data-name="Container">
                      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[40px] justify-center leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[275.09px]">
                        <p className="mb-0">A comprehensive analytics dashboard for</p>
                        <p>financial monitoring and forecasting.</p>
                      </div>
                    </div>
                    <div className="absolute content-stretch flex gap-[8px] items-center left-[24px] top-[155px]" data-name="Button">
                      <a className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#135bec] text-[14px] text-center whitespace-nowrap" href="https://www.behance.net/gallery/245347709/Admin-Dashboard">
                        <p className="cursor-pointer decoration-solid leading-[20px] underline">View Case Study</p>
                      </a>
                      <Container />
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white content-stretch flex flex-col items-start left-[810.66px] overflow-clip right-0 rounded-[16px] shadow-[0px_0px_0px_1px_#e2e8f0,0px_1px_2px_0px_rgba(0,0,0,0.05)] top-0" data-name="Background+Shadow">
                  <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Background">
                    <div className="h-[280px] relative shrink-0 w-full" data-name="Project 3">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[133.34%] left-[0.05%] max-w-none top-[0.1%] w-full" src={imgProject3} />
                      </div>
                    </div>
                  </div>
                  <div className="h-[203px] relative shrink-0 w-full" data-name="Container">
                    <div className="absolute content-stretch flex gap-[7.99px] h-[19px] items-start left-[24px] right-[24px] top-[24px]" data-name="Container">
                      <Wrapper>
                        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#135bec] text-[10px] tracking-[1px] uppercase w-[26.08px]">
                          <p className="leading-[15px]">Web</p>
                        </div>
                      </Wrapper>
                      <Wrapper>
                        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#135bec] text-[10px] tracking-[1px] uppercase w-[80.61px]">
                          <p className="leading-[15px]">E-commerce</p>
                        </div>
                      </Wrapper>
                    </div>
                    <HeadingText text="Bazzarna" />
                    <div className="absolute content-stretch flex flex-col items-start left-[24px] overflow-clip right-[24px] top-[91px]" data-name="Container">
                      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[40px] justify-center leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[313.9px]">
                        <p className="mb-0">A high-end marketplace for lifestyle goods with</p>
                        <p>focus on visual storytelling.</p>
                      </div>
                    </div>
                    <div className="absolute content-stretch flex gap-[8px] items-center left-[24px] top-[155px]" data-name="Button">
                      <a className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#135bec] text-[14px] text-center whitespace-nowrap" href="https://www.behance.net/gallery/245347953/E-commerce-Website-UIUX-Design">
                        <p className="cursor-pointer leading-[20px]">View Case Study</p>
                      </a>
                      <Container />
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white content-stretch flex flex-col items-start left-0 overflow-clip right-[810.67px] rounded-[16px] shadow-[0px_0px_0px_1px_#e2e8f0,0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[515px]" data-name="Background+Shadow">
                  <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Background">
                    <div className="h-[279.98px] relative shrink-0 w-full" data-name="Project 4">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[133.34%] left-[0.16%] max-w-none top-[-16.53%] w-full" src={imgProject4} />
                      </div>
                    </div>
                  </div>
                  <div className="h-[203px] relative shrink-0 w-full" data-name="Container">
                    <div className="absolute content-stretch flex h-[19px] items-start left-[24px] right-[24px] top-[24px]" data-name="Container">
                      <Wrapper>
                        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#135bec] text-[10px] tracking-[1px] uppercase w-[88.53px]">
                          <p className="leading-[15px]" dir="auto">
                            Productivity
                          </p>
                        </div>
                      </Wrapper>
                    </div>
                    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[55px]" data-name="Heading 3">
                      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] w-[144.08px]">
                        <p className="leading-[28px]">Synergy Tasks</p>
                      </div>
                    </div>
                    <div className="absolute content-stretch flex flex-col items-start left-[24px] overflow-clip right-[24px] top-[91px]" data-name="Container">
                      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-full">
                        <p className="leading-[20px]">Luminal leverages enterprise-grade AI to automate workflows and surface insights.</p>
                      </div>
                    </div>
                    <div className="absolute content-stretch flex gap-[8px] items-center left-[24px] top-[155px]" data-name="Button">
                      <a className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#135bec] text-[14px] text-center whitespace-nowrap" href="https://www.behance.net/gallery/245440295/Luminal-Landing-Page">
                        <p className="cursor-pointer leading-[20px]">View Case Study</p>
                      </a>
                      <Container />
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white content-stretch flex flex-col items-start left-[405.33px] overflow-clip right-[405.34px] rounded-[16px] shadow-[0px_0px_0px_1px_#e2e8f0,0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[515px]" data-name="Background+Shadow">
                  <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Background">
                    <div className="h-[279.98px] relative shrink-0 w-full" data-name="Project 5">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[133.34%] left-[0.11%] max-w-none top-[-33.39%] w-full" src={imgProject5} />
                      </div>
                    </div>
                  </div>
                  <div className="h-[203px] relative shrink-0 w-full" data-name="Container">
                    <div className="absolute content-stretch flex gap-[7.99px] h-[19px] items-start left-[24px] right-[24px] top-[24px]" data-name="Container">
                      <OverlayText1 text="Store" />
                      <OverlayText text="Mobile" />
                    </div>
                    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[55px]" data-name="Heading 3">
                      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] w-[129.56px]">
                        <p className="leading-[28px]">Aura Luxe</p>
                      </div>
                    </div>
                    <div className="absolute content-stretch flex flex-col items-start left-[24px] overflow-clip right-[24px] top-[91px]" data-name="Container">
                      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[40px] justify-center leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[323.83px]">
                        <p className="mb-0">A seamless interface for managing diverse smart</p>
                        <p>home ecosystems.</p>
                      </div>
                    </div>
                    <div className="absolute content-stretch flex gap-[8px] items-center left-[24px] top-[155px]" data-name="Button">
                      <a className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#135bec] text-[14px] text-center whitespace-nowrap" href="https://www.behance.net/gallery/245212775/Aura-Curated-Luxury-Fashion-App-UI-Design">
                        <p className="cursor-pointer leading-[20px]">View Case Study</p>
                      </a>
                      <Container />
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white content-stretch flex flex-col items-start left-[810.66px] overflow-clip right-0 rounded-[16px] shadow-[0px_0px_0px_1px_#e2e8f0,0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[515px]" data-name="Background+Shadow">
                  <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Background">
                    <div className="h-[280px] relative shrink-0 w-full" data-name="Project 6">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[133.34%] left-0 max-w-none top-[-16.67%] w-full" src={imgProject6} />
                      </div>
                    </div>
                  </div>
                  <div className="h-[203px] relative shrink-0 w-full" data-name="Container">
                    <div className="absolute content-stretch flex h-[19px] items-start left-[24px] right-[24px] top-[24px]" data-name="Container">
                      <Wrapper>
                        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#135bec] text-[10px] tracking-[1px] uppercase w-[99.39px]">
                          <p className="leading-[15px]">Entertainment</p>
                        </div>
                      </Wrapper>
                    </div>
                    <HeadingText text="MediCare Clinic" />
                    <div className="absolute content-stretch flex flex-col items-start left-[24px] overflow-clip right-[24px] top-[91px]" data-name="Container">
                      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[259.45px]">
                        <p className="leading-[20px]">A modern medical website designed to simplify the process of exploring healthcare services</p>
                      </div>
                    </div>
                    <div className="absolute content-stretch flex gap-[8px] items-center left-[24px] top-[155px]" data-name="Button">
                      <a className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#135bec] text-[14px] text-center whitespace-nowrap" href="https://www.behance.net/gallery/245011631/MedCare-Medical-Clinic-Booking-Website-UIUX">
                        <p className="cursor-pointer leading-[20px]">View Case Study</p>
                      </a>
                      <Container />
                    </div>
                  </div>
                </div>
              </div>
            </Container3>
          </div>
          <div className="absolute bg-[#0f172a] content-stretch flex flex-col gap-[24px] items-start left-[240px] p-[48px] right-[240px] rounded-[40px] top-[4290.75px]" data-name="Section">
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-center text-white w-[688.2px]">
                <p className="leading-[48px]">{`Let's create something great.`}</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[20px] text-center w-[499.16px]">
                <p className="leading-[28px]">Currently accepting new projects and collaborations.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[32px] items-center pt-[24px] relative shrink-0 w-full" data-name="Container">
              <div className="bg-[#2b8cee] content-stretch flex gap-[12px] items-center px-[40px] py-[20px] relative rounded-[9999px] shrink-0" data-name="Link">
                <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.02px_0_0] rounded-[9999px] shadow-[0px_20px_25px_-5px_rgba(43,140,238,0.2),0px_8px_10px_-6px_rgba(43,140,238,0.2)]" data-name="Link:shadow" />
                <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                    <g id="Container">
                      <path d={svgPaths.p13e73800} fill="var(--fill-0, white)" id="Icon" />
                    </g>
                  </svg>
                </div>
                <a className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white w-[90.14px]" href="mailto:mhmdnasser912@gmail.com">
                  <p className="cursor-pointer decoration-solid leading-[28px] underline">Email Me</p>
                </a>
              </div>
              <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Container">
                <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Link">
                  <Wrapper2>
                    <g clipPath="url(#clip0_1_430)" id="SVG">
                      <path d={svgPaths.pbb77300} fill="var(--fill-0, white)" id="Vector" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_430">
                        <rect fill="white" height="20" width="20" />
                      </clipPath>
                    </defs>
                  </Wrapper2>
                </div>
                <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Link">
                  <Wrapper2>
                    <g clipPath="url(#clip0_1_427)" id="SVG">
                      <path d={svgPaths.p35a23d00} fill="var(--fill-0, white)" id="Vector" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_427">
                        <rect fill="white" height="20" width="20" />
                      </clipPath>
                    </defs>
                  </Wrapper2>
                </div>
                <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Link">
                  <Wrapper2>
                    <g id="SVG">
                      <path d={svgPaths.p1671000} fill="var(--fill-0, white)" id="Vector" />
                    </g>
                  </Wrapper2>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col h-[704px] items-start left-0 overflow-clip px-[48px] py-[128px] right-0 top-0" data-name="Section">
            <div className="content-stretch flex gap-[48px] items-start justify-center relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start max-w-[672px] min-h-px min-w-px relative" data-name="Container">
                <div className="bg-[rgba(19,91,236,0.1)] content-stretch flex items-start px-[16px] py-[6px] relative rounded-[9999px] shrink-0" data-name="Overlay">
                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#135bec] text-[12px] tracking-[0.6px] uppercase w-[180.33px]">
                    <p className="leading-[16px]">Available for freelance</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
                  <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[72px] not-italic relative shrink-0 text-[#0f172a] text-[72px] tracking-[-1.8px] w-full">
                    <p className="mb-0">Mohammed</p>
                    <p>Nasser</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[20px] w-full">
                    <p className="leading-[28px]">{`UX/UI Designer crafting intuitive web & mobile experiences`}</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[18px] w-full">
                    <p className="leading-[28px]">I design interfaces that blend user needs with business goals, delivering clean, responsive, and engaging digital experiences.</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-start pt-[24px] relative shrink-0 w-full" data-name="Container">
                  <div className="bg-[#135bec] content-stretch flex h-[56px] items-center justify-center px-[32px] relative rounded-[12px] shrink-0" data-name="Link">
                    <div className="absolute bg-[rgba(255,255,255,0)] h-[56px] left-0 right-0 rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(19,91,236,0.25),0px_8px_10px_-6px_rgba(19,91,236,0.25)] top-0" data-name="Link:shadow" />
                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[107.28px]">
                      <p className="leading-[24px]">View Projects</p>
                    </div>
                  </div>
                  <div className="bg-white content-stretch flex h-[56px] items-center justify-center px-[33px] py-px relative rounded-[12px] shrink-0" data-name="Link">
                    <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] text-center w-[90.34px]">
                      <p className="leading-[24px]">Contact Me</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
                <div className="content-stretch flex flex-col items-start px-[60px] relative w-full">
                  <div className="aspect-square max-h-[448px] max-w-[448px] relative rounded-[24px] shrink-0 w-full" data-name="Background">
                    <div className="flex flex-col justify-center max-h-[inherit] max-w-[inherit] size-full">
                      <div className="content-stretch flex flex-col items-start justify-center max-h-[inherit] max-w-[inherit] p-[16px] relative size-full">
                        <div className="bg-[#e2e8f0] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[496px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Background+Shadow">
                          <div className="h-[416px] relative shrink-0 w-full" data-name="Mohammed Nasser Portrait">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMohammedNasserPortrait} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-white bottom-[-24px] content-stretch flex flex-col items-start left-[-24px] p-[25px] rounded-[16px]" data-name="Background+Border">
                    <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[16px]" />
                    <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
                    <div className="relative shrink-0" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
                        <div className="content-stretch flex items-start pr-[12px] relative shrink-0" data-name="Container">
                          <BackgroundBorder additionalClassNames="bg-[#cbd5e1] mr-[-12px]" />
                          <div className="content-stretch flex flex-col items-start mr-[-12px] relative shrink-0 size-[40px]" data-name="Margin">
                            <BackgroundBorder additionalClassNames="bg-[#94a3b8]" />
                          </div>
                          <div className="content-stretch flex flex-col items-start mr-[-12px] relative shrink-0 size-[40px]" data-name="Margin">
                            <BackgroundBorder additionalClassNames="bg-[#135bec]" />
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[118.19px]" data-name="Container">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                            <div className="flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
                              <p className="leading-[20px]">8ِ+ Projects</p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[118.19px]">
                              <p className="leading-[20px]">Delivered globally</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 max-w-[1280px] px-[48px] right-0 top-[3176.75px]" data-name="Section">
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[30px] text-center w-[227.66px]">
                <p className="leading-[36px]">Design Process</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] text-center w-[339.06px]">
                <p className="leading-[24px]">Structured approach to delivering excellence</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[32px] h-[216px] items-start justify-center pt-[48px] relative shrink-0 w-full" data-name="Container">
              <div className="relative self-stretch shrink-0 w-[211.19px]" data-name="Container">
                <div className="-translate-x-1/2 absolute bg-[rgba(19,91,236,0.1)] content-stretch flex items-center justify-center left-[calc(50%-0.01px)] rounded-[9999px] size-[80px] top-0" data-name="Overlay+Shadow">
                  <div className="relative shrink-0 size-[22.5px]" data-name="Container">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 22.5">
                      <g id="Container">
                        <path d={svgPaths.p2ea6a400} fill="var(--fill-0, #135BEC)" id="Icon" />
                      </g>
                    </svg>
                  </div>
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
                </div>
                <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[104px]" data-name="Heading 4">
                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] text-center w-[73.3px]">
                    <p className="leading-[24px]">Research</p>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[136px]" data-name="Container">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[16px] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center w-[203.86px]">
                    <p className="mb-0">{`Understanding user needs & market`}</p>
                    <p>gaps.</p>
                  </div>
                </div>
              </div>
              <div className="relative self-stretch shrink-0 w-[211.2px]" data-name="Container">
                <div className="-translate-x-1/2 absolute bg-[rgba(19,91,236,0.1)] content-stretch flex items-center justify-center left-[calc(50%-0.01px)] rounded-[9999px] size-[80px] top-0" data-name="Overlay+Shadow">
                  <div className="h-[25px] relative shrink-0 w-[22.5px]" data-name="Container">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 25">
                      <g id="Container">
                        <path d={svgPaths.p2fcfe480} fill="var(--fill-0, #135BEC)" id="Icon" />
                      </g>
                    </svg>
                  </div>
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
                </div>
                <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[104px]" data-name="Heading 4">
                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] text-center w-[82.69px]">
                    <p className="leading-[24px]">Wireframe</p>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[136px]" data-name="Container">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[32px] justify-center leading-[16px] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center w-[181.36px]">
                    <p className="mb-0">Building the logical architectural</p>
                    <p>bones.</p>
                  </div>
                </div>
              </div>
              <div className="relative self-stretch shrink-0 w-[211.2px]" data-name="Container">
                <div className="-translate-x-1/2 absolute bg-[rgba(19,91,236,0.1)] content-stretch flex items-center justify-center left-[calc(50%-0.01px)] rounded-[9999px] size-[80px] top-0" data-name="Overlay+Shadow">
                  <div className="relative shrink-0 size-[25px]" data-name="Container">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
                      <g id="Container">
                        <path d={svgPaths.p20b63b00} fill="var(--fill-0, #135BEC)" id="Icon" />
                      </g>
                    </svg>
                  </div>
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
                </div>
                <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[104px]" data-name="Heading 4">
                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] text-center w-[74.45px]">
                    <p className="leading-[24px]">UI Design</p>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[136px]" data-name="Container">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center w-[204.92px]">
                    <p className="leading-[16px]">{`Applying visual systems & branding.`}</p>
                  </div>
                </div>
              </div>
              <div className="relative self-stretch shrink-0 w-[211.2px]" data-name="Container">
                <div className="-translate-x-1/2 absolute bg-[rgba(19,91,236,0.1)] content-stretch flex items-center justify-center left-1/2 rounded-[9999px] size-[80px] top-0" data-name="Overlay+Shadow">
                  <div className="h-[23.813px] relative shrink-0 w-[22.5px]" data-name="Container">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 23.8125">
                      <g id="Container">
                        <path d={svgPaths.p3eeb2280} fill="var(--fill-0, #135BEC)" id="Icon" />
                      </g>
                    </svg>
                  </div>
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
                </div>
                <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[104px]" data-name="Heading 4">
                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] text-center w-[77.3px]">
                    <p className="leading-[24px]">Prototype</p>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[136px]" data-name="Container">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center w-[179.22px]">
                    <p className="leading-[16px]">Interactive simulations of flows.</p>
                  </div>
                </div>
              </div>
              <div className="relative self-stretch shrink-0 w-[211.19px]" data-name="Container">
                <div className="-translate-x-1/2 absolute bg-[rgba(19,91,236,0.1)] content-stretch flex items-center justify-center left-[calc(50%-0.01px)] rounded-[9999px] size-[80px] top-0" data-name="Overlay+Shadow">
                  <div className="h-[18.844px] relative shrink-0 w-[25px]" data-name="Container">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 18.8438">
                      <g id="Container">
                        <path d={svgPaths.p3f8d6580} fill="var(--fill-0, #135BEC)" id="Icon" />
                      </g>
                    </svg>
                  </div>
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
                </div>
                <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[104px]" data-name="Heading 4">
                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] text-center w-[58.19px]">
                    <p className="leading-[24px]">Testing</p>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[136px]" data-name="Container">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center w-[193.02px]">
                    <p className="leading-[16px]">Validating designs with real users.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-[rgba(19,91,236,0.05)] content-stretch flex flex-col items-start left-0 py-[96px] right-0 top-[3580.75px]" data-name="Section">
            <Container3>
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
                <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[30px] text-center w-[169.86px]">
                  <p className="leading-[36px]">Kind Words</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Container">
                <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="Background+Border+Shadow">
                  <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
                  <div className="content-stretch flex flex-col gap-[20px] items-start p-[41px] relative w-full">
                    <Container1 />
                    <div className="relative shrink-0 w-full" data-name="Container">
                      <Wrapper3 additionalClassNames="w-full">
                        <p className="mb-0">{`"Mohammed has an exceptional ability to take complex`}</p>
                        <p className="mb-0">requirements and transform them into intuitive, beautiful</p>
                        <p className="mb-0">interfaces. His technical understanding makes handovers</p>
                        <p>{`seamless."`}</p>
                      </Wrapper3>
                    </div>
                    <Container4>
                      <Background>
                        <div className="absolute bg-[#e2e8f0] inset-0 rounded-[9999px]" />
                        <img alt="" className="absolute max-w-none object-cover rounded-[9999px] size-full" src={imgBackground} />
                      </Background>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[185.14px]" data-name="Container">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
                          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] w-[116.92px]">
                            <p className="leading-[24px]">Sarah Johnson</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[185.14px]">
                            <p className="leading-[20px]">Product Manager, TechFlow</p>
                          </div>
                        </div>
                      </div>
                    </Container4>
                  </div>
                </div>
                <BackgroundBorderShadow>
                  <Container1 />
                  <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
                    <Wrapper3 additionalClassNames="size-full">
                      <p className="mb-0">{`"Working with Mohammed was a game-changer for our`}</p>
                      <p className="mb-0">app. He truly listens to user feedback and translates it</p>
                      <p>{`into design decisions that drive engagement."`}</p>
                    </Wrapper3>
                  </div>
                  <Container4>
                    <Background>
                      <div className="absolute bg-[#e2e8f0] inset-0 rounded-[9999px]" />
                      <img alt="" className="absolute max-w-none object-cover rounded-[9999px] size-full" src={imgBackground1} />
                    </Background>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[128.45px]" data-name="Container">
                      <HeadingText1 text="David Chen" />
                      <ContainerText text="Founder, Aura Luxe" />
                    </div>
                  </Container4>
                </BackgroundBorderShadow>
                <BackgroundBorderShadow>
                  <Container1 />
                  <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[18px] w-full">
                        <p className="leading-[28px]">{`"I am lucky to work with Mohammed Nasser, he is really wonderful person and very hardworking. I hope to work with him again."`}</p>
                      </div>
                    </div>
                  </div>
                  <Container4>
                    <Background>
                      <div className="absolute bg-[#e2e8f0] inset-0 rounded-[9999px]" />
                      <img alt="" className="absolute max-w-none object-cover rounded-[9999px] size-full" src={imgBackground2} />
                    </Background>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[128.45px]" data-name="Container">
                      <HeadingText1 text="Ali Saad" />
                      <ContainerText text="Doctor, MediCare" />
                    </div>
                  </Container4>
                </BackgroundBorderShadow>
              </div>
            </Container3>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col items-start left-0 pb-[48px] pt-[49px] px-[48px] right-0 top-[4816px]" data-name="Footer">
          <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
          <div className="relative shrink-0 w-full" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
                <div className="bg-[#e2e8f0] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[24px]" data-name="Background">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[10px] w-[17.27px]">
                      <p className="leading-[15px]">MN</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[187.33px]">
                    <p className="leading-[20px]">Mohammed Nasser © 2024</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[32px] h-[20px] items-start relative shrink-0" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[55.34px]">
                    <p className="leading-[20px]">Portfolio</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[53.06px]">
                    <p className="leading-[20px]">Resume</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[49px]">
                    <p className="leading-[20px]">Privacy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col items-start left-0 pb-px right-0 top-0" data-name="Header">
          <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.6)] border-b border-solid inset-0 pointer-events-none" />
          <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
            <div className="flex flex-row items-center max-w-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] pl-[48px] pr-[48.01px] py-[16px] relative w-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
                  <div className="bg-[#135bec] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Background">
                    <div className="h-[15px] relative shrink-0 w-[14.25px]" data-name="Container">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.25 15">
                        <g id="Container">
                          <path d={svgPaths.p22052780} fill="var(--fill-0, white)" id="Icon" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] tracking-[-0.5px] w-[32.89px]">
                      <p className="leading-[28px]">MN</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="Nav">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
                    <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[35.86px]">
                      <p className="leading-[20px]">Work</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
                    <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[40.97px]">
                      <p className="leading-[20px]">About</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
                    <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[35.77px]">
                      <p className="leading-[20px]">Skills</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
                    <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[54.63px]">
                      <p className="leading-[20px]">Process</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
                    <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[53.56px]">
                      <p className="leading-[20px]">Contact</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#135bec] content-stretch flex flex-col items-center justify-center px-[24px] py-[10px] relative rounded-[9999px] shrink-0" data-name="Button">
                  <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(19,91,236,0.2),0px_4px_6px_-4px_rgba(19,91,236,0.2)]" data-name="Button:shadow" />
                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[52.66px]">
                    <p className="leading-[20px]">Hire Me</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
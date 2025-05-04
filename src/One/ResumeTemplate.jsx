// import React, { useRef } from "react";
// import html2pdf from "html2pdf.js";
// import styles from "./ResumeTemplate.module.css";

// export default function ResumeTemplate() {
//   const resumeRef = useRef();

//   const handleExportPDF = () => {
//     const element = resumeRef.current;
//     const opt = {
//       margin: 0,
//       filename: "resume.pdf",
//       image: { type: "jpeg", quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: "px", format: "a4", orientation: "portrait" },
//     };
//     html2pdf().set(opt).from(element).save();
//   };
//   return (
//     <>
//       <div className="container bg-slate-400 py-20">
//         <div
//           className="p-8 bg-white w-[595px] h-[760px] mx-auto space-y-6"
//           ref={resumeRef}
//         >
//           {/* Header */}
//           <div className="cv__header flex items-center">
//             <div className="user__avatar">
//               <img
//                 src="https://placewaifu.com/image/100"
//                 alt="Waifu Placeholder"
//                 className="rounded-full"
//               />
//             </div>
//             <div className="user__name ml-4">
//               <h1
//                 className="text-black text-[min(32px,24px)] font-bold mb-1 max-w-xs h-9  overflow-hidden "
//                 contentEditable="true"
//               >
//                 Percy Walder
//               </h1>
//               <h3
//                 className="text-black text-lg font-normal"
//                 contentEditable="true"
//               >
//                 EXPERT ICE DIVER
//               </h3>
//             </div>
//             <div className="user__info text-right flex-grow text-[10px]">
//               <p>+(123) 456-7890</p>
//               <p>p.waddle@example.com</p>
//               <p>linkedin.com/in/percywaddle</p>
//               <p>www.percywaddle.com</p>
//             </div>
//           </div>

//           {/* Summary */}
//           <div className="cv__summary">
//             <p className="text-[10px]">
//               He is a seasoned professional in the Antarctic realm, with a
//               background in marine biology and a passion for environmental
//               conservation. With extensive experience in ice diving, fish
//               catching, and iceberg surveying, Percy brings a wealth of
//               knowledge and skills to any team...
//             </p>
//           </div>

//           {/* Main Section */}
//           <div className="cv__main">
//             <div className="grid grid-cols-12 gap-6">
//               {/* Left Column */}
//               <div className="col-span-4 space-y-6">
//                 <div className="skills">
//                   <h1 className={styles.skills__title}>Skills</h1>
//                   <div className="skills__contents space-y-4">
//                     <div className="content">
//                       <h2 className={styles.content__subheading}>
//                         Industry Knowledge
//                       </h2>
//                       <ul className={styles.content__details}>
//                         <li className={styles.content__detail}>
//                           Swimming: Expert
//                         </li>
//                         <li className={styles.content__detail}>
//                           Fishing: Advanced
//                         </li>
//                         <li className={styles.content__detail}>
//                           Adaptability to Cold
//                         </li>
//                         <li className={styles.content__detail}>
//                           Team Leadership: Strong
//                         </li>
//                         <li className={styles.content__detail}>
//                           Communication: Excellent
//                         </li>
//                         <li className={styles.content__detail}>
//                           Problem-Solving: Skilled
//                         </li>
//                       </ul>
//                     </div>

//                     <div className="content">
//                       <h2 className={styles.content__subheading}>
//                         Certifications
//                       </h2>
//                       <ul className={styles.content__details}>
//                         <li className={styles.content__detail}>
//                           Advanced Ice Diving Certification
//                         </li>
//                         <li className={styles.content__detail}>
//                           First Aid and CPR
//                         </li>
//                       </ul>
//                     </div>

//                     <div className="content">
//                       <h2 className={styles.content__subheading}>Interests</h2>
//                       <ul className={styles.content__details}>
//                         <li className={styles.content__detail}>
//                           Ice sculpting
//                         </li>
//                         <li className={styles.content__detail}>Fish tasting</li>
//                         <li className={styles.content__detail}>
//                           Snowball fights
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="education">
//                   <h1 className={styles.education__title}>EDUCATION</h1>
//                   <div className="education__contents">
//                     <h2 className={styles.content__subheading}>
//                       Bachelor of Science in Marine Biology
//                     </h2>
//                     <p className={styles.content__detail}>
//                       Antarctic University, Antarctica
//                     </p>
//                     <p className={styles.content__detail}>
//                       Graduated: May 2015
//                     </p>
//                   </div>
//                 </div>

//                 <div className="languages">
//                   <h1 className={styles.languages__title}>LANGUAGE</h1>
//                   <div className="languages__contents">
//                     <ul className={styles.content__details}>
//                       <li className={styles.content__detail}>
//                         Penguinese (Fluent)
//                       </li>
//                       <li className={styles.content__detail}>
//                         English (Basic)
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Column */}
//               <div className="col-span-8">
//                 <div className={styles.experience}>
//                   <h1 className={styles.experience__title}>Experience</h1>
//                   <div className="experience__jobs-list space-y-4">
//                     <div className={styles.job}>
//                       <div className={styles.job__details}>
//                         <h3 className={styles.job__timeline}>
//                           Jan 2016 - Jun 2015, Antarctica
//                         </h3>
//                         <h2 className={styles.job__role}>Fish Catcher</h2>
//                         <h3 className={styles.job__company}>
//                           Ocean's Bounty Fisheries
//                         </h3>
//                       </div>

//                       <p className={styles.job__description}>
//                         Efficiently caught and gathered fish for processing,
//                         meeting daily quotas consistently. Maintained equipment
//                         and ensured safety protocols during fishing operations.
//                         Trained new team members on fishing techniques and
//                         safety measures.
//                       </p>
//                     </div>

//                     <div className={styles.job}>
//                       <div className={styles.job__details}>
//                         <h3 className={styles.job__timeline}>
//                           July 2018 - Present, Antarctica
//                         </h3>
//                         <h2 className={styles.job__role}>Senior Ice Diver</h2>
//                         <h3 className={styles.job__company}>
//                           Iceberg Exploration Inc
//                         </h3>
//                       </div>

//                       <p className={styles.job__description}>
//                         Led teams of penguin divers in exploring underwater
//                         habitats and discovering new species. Conducted research
//                         on climate change impact on marine life and presented
//                         findings to scientific communities. Collaborated with
//                         environmental organizations on conservation projects.
//                       </p>
//                     </div>

//                     <div className={styles.job}>
//                       <div className={styles.job__details}>
//                         <h3 className={styles.job__timeline}>
//                           Sep 2012 - Jul 2014, Antarctica
//                         </h3>
//                         <h2 className={styles.job__role}>
//                           Fishery Research Assistant
//                         </h2>
//                         <h3 className={styles.job__company}>
//                           Antarctic Marine Institute
//                         </h3>
//                       </div>

//                       <p className={styles.job__description}>
//                         Assisted marine biologists in studying fish populations
//                         and behaviors. Collected and analyzed water samples for
//                         environmental impact assessments. Prepared reports and
//                         presentations on research findings for scientific
//                         conferences.
//                       </p>
//                     </div>

//                     <div className={styles.job}>
//                       <div className={styles.job__details}>
//                         <h3 className={styles.job__timeline}>
//                           Aug 2014 - Dec 2015, Antarctica
//                         </h3>
//                         <h2 className={styles.job__role}>Iceberg Surveyor</h2>
//                         <h3 className={styles.job__company}>
//                           Frozen Horizon Expeditions
//                         </h3>
//                       </div>

//                       <p className={styles.job__description}>
//                         Conducted surveys of icebergs for navigation and safety
//                         purposes. Recorded data on iceberg size, shape, and
//                         drift patterns. Collaborated with ship captains to plan
//                         safe routes through icy waters.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-center mb-4">
//         <button
//           onClick={handleExportPDF}
//           className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           Xuất PDF
//         </button>
//       </div>
//     </>
//   );
// }
import React, { forwardRef, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import styles from "./ResumeTemplate.module.css";

const ResumeTemplate = () => {
  const resumeRef = useRef(null);
  //  const printRef = useRef < HTMLDivElement > null;
  const handlePrint = useReactToPrint({
    content: () => {
      if (!resumeRef.current) {
        console.error("⛔ resumeRef is null!");
        alert("Không tìm thấy nội dung để in. Vui lòng thử lại sau.");
        return null;
      }

      return resumeRef.current;
    },
    contentRef: resumeRef,
    documentTitle: "Cv",
  });
  return (
    <div>
      <button
        onClick={handlePrint}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Print / Save PDF
      </button>
      <div className="container bg-slate-400  py-20 flex justify-center">
        <div
          id="resume"
          ref={resumeRef}
          className="bg-white w-[794px] h-[1123px] max-w-full p-8 space-y-6"
        >
          <div className="cv__header flex items-center">
            <div className="flex items-center w-[60%]">
              <div className="user__avatar w-[100px] h-[100px] overflow-hidden rounded-full">
                <img
                  src="https://i.imgur.com/0y8Ftya.jpg"
                  alt="Waifu Placeholder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="user__name ml-4">
                <h1 className="text-black text-[max(32px,24px)] font-bold mb-1 max-w-xs h-9 ">
                  Percy Walder
                </h1>
                <h3 className="text-black text-lg font-normal">
                  EXPERT ICE DIVER
                </h3>
              </div>
            </div>
            <div className="user__info text-right flex-grow text-[10px] w-[40%]">
              <p>+(123) 456-7890</p>
              <p>p.waddle@example.com</p>
              <p>linkedin.com/in/percywaddle</p>
              <p>www.percywaddle.com</p>
            </div>
          </div>

          {/* Summary */}
          <div className="cv__summary">
            <p className="text-[10px]">
              He is a seasoned professional in the Antarctic realm, with a
              background in marine biology and a passion for environmental
              conservation. With extensive experience in ice diving, fish
              catching, and iceberg surveying, Percy brings a wealth of
              knowledge and skills to any team...
            </p>
          </div>

          {/* Main Section */}
          <div className="cv__main">
            <div className="grid grid-cols-12 gap-6">
              {/* Left Column */}
              <div className="col-span-4 space-y-6">
                <div className="skills">
                  <h1 className={styles.skills__title}>Skills</h1>
                  <div className="skills__contents space-y-4">
                    <div className="content">
                      <h2 className={styles.content__subheading}>
                        Industry Knowledge
                      </h2>
                      <ul className={styles.content__details}>
                        <li className={styles.content__detail}>
                          Swimming: Expert
                        </li>
                        <li className={styles.content__detail}>
                          Fishing: Advanced
                        </li>
                        <li className={styles.content__detail}>
                          Adaptability to Cold
                        </li>
                        <li className={styles.content__detail}>
                          Team Leadership: Strong
                        </li>
                        <li className={styles.content__detail}>
                          Communication: Excellent
                        </li>
                        <li className={styles.content__detail}>
                          Problem-Solving: Skilled
                        </li>
                      </ul>
                    </div>

                    <div className="content">
                      <h2 className={styles.content__subheading}>
                        Certifications
                      </h2>
                      <ul className={styles.content__details}>
                        <li className={styles.content__detail}>
                          Advanced Ice Diving Certification
                        </li>
                        <li className={styles.content__detail}>
                          First Aid and CPR
                        </li>
                      </ul>
                    </div>

                    <div className="content">
                      <h2 className={styles.content__subheading}>Interests</h2>
                      <ul className={styles.content__details}>
                        <li className={styles.content__detail}>
                          Ice sculpting
                        </li>
                        <li className={styles.content__detail}>Fish tasting</li>
                        <li className={styles.content__detail}>
                          Snowball fights
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="education">
                  <h1 className={styles.education__title}>EDUCATION</h1>
                  <div className="education__contents">
                    <h2 className={styles.content__subheading}>
                      Bachelor of Science in Marine Biology
                    </h2>
                    <p className={styles.content__detail}>
                      Antarctic University, Antarctica
                    </p>
                    <p className={styles.content__detail}>
                      Graduated: May 2015
                    </p>
                  </div>
                </div>

                <div className="languages">
                  <h1 className={styles.languages__title}>LANGUAGE</h1>
                  <div className="languages__contents">
                    <ul className={styles.content__details}>
                      <li className={styles.content__detail}>
                        Penguinese (Fluent)
                      </li>
                      <li className={styles.content__detail}>
                        English (Basic)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-span-8">
                <div className={styles.experience}>
                  <h1 className={styles.experience__title}>Experience</h1>
                  <div className="experience__jobs-list space-y-4">
                    <div className={styles.job}>
                      <div className={styles.job__details}>
                        <h3 className={styles.job__timeline}>
                          Jan 2016 - Jun 2015, Antarctica
                        </h3>
                        <h2 className={styles.job__role}>Fish Catcher</h2>
                        <h3 className={styles.job__company}>
                          Ocean's Bounty Fisheries
                        </h3>
                      </div>

                      <p className={styles.job__description}>
                        Efficiently caught and gathered fish for processing,
                        meeting daily quotas consistently. Maintained equipment
                        and ensured safety protocols during fishing operations.
                        Trained new team members on fishing techniques and
                        safety measures.
                      </p>
                    </div>

                    <div className={styles.job}>
                      <div className={styles.job__details}>
                        <h3 className={styles.job__timeline}>
                          July 2018 - Present, Antarctica
                        </h3>
                        <h2 className={styles.job__role}>Senior Ice Diver</h2>
                        <h3 className={styles.job__company}>
                          Iceberg Exploration Inc
                        </h3>
                      </div>

                      <p className={styles.job__description}>
                        Led teams of penguin divers in exploring underwater
                        habitats and discovering new species. Conducted research
                        on climate change impact on marine life and presented
                        findings to scientific communities. Collaborated with
                        environmental organizations on conservation projects.
                      </p>
                    </div>

                    <div className={styles.job}>
                      <div className={styles.job__details}>
                        <h3 className={styles.job__timeline}>
                          Sep 2012 - Jul 2014, Antarctica
                        </h3>
                        <h2 className={styles.job__role}>
                          Fishery Research Assistant
                        </h2>
                        <h3 className={styles.job__company}>
                          Antarctic Marine Institute
                        </h3>
                      </div>

                      <p className={styles.job__description}>
                        Assisted marine biologists in studying fish populations
                        and behaviors. Collected and analyzed water samples for
                        environmental impact assessments. Prepared reports and
                        presentations on research findings for scientific
                        conferences.
                      </p>
                    </div>

                    <div className={styles.job}>
                      <div className={styles.job__details}>
                        <h3 className={styles.job__timeline}>
                          Aug 2014 - Dec 2015, Antarctica
                        </h3>
                        <h2 className={styles.job__role}>Iceberg Surveyor</h2>
                        <h3 className={styles.job__company}>
                          Frozen Horizon Expeditions
                        </h3>
                      </div>

                      <p className={styles.job__description}>
                        Conducted surveys of icebergs for navigation and safety
                        purposes. Recorded data on iceberg size, shape, and
                        drift patterns. Collaborated with ship captains to plan
                        safe routes through icy waters.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResumeTemplate;

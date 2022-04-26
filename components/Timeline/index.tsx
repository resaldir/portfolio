import { useState } from "react";
import { ChildrenStringProps } from "lib/types";

import { DividerBorder, StepLi, MoreButton } from "components/Timeline/styles";

const Divider = () => <DividerBorder />;

const Year = ({ children }: ChildrenStringProps) => <h4>{children}</h4>;

export const Timeline = () => {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  const Step = ({ title, children }: ChildrenStringProps) => (
    <StepLi>
      <div>
        <h5>{title}</h5>
      </div>
      <p>{children}</p>
    </StepLi>
  );

  const FullTimeline = () => (
    <>
      <Divider />
      <Year>2014</Year>
      <ul>
        <Step title="Started at University">
          I started studying Business Administration at The Agricultural
          University of Georgia.
        </Step>
      </ul>
      <Divider />
    </>
  );

  return (
    <>
      <Divider />
      <h3>Resume</h3>
      <Year>Work Experience</Year>
      <ul>
        <Step title="Protonema | Information Technology Operations Analyst Lead (Jan 2022 - Present)">
          <ul>
            - Support IT Charging Platform and Integration, Telkomsel on Project
            L2 OCS TC to analyze, prevent and predictive the issue based on the
            data provided via ELK and other analytics tools (Grafana, webapp,
            weblogic, etc)
          </ul>
          <ul>
            - Analyze manual task that can be automate for more efficiency
          </ul>
          <ul>
            - Manage Monica & Marcela App Development to help Telkomsel employee
            day to day task
          </ul>
        </Step>
      </ul>
      <ul>
        <Step title="Protonema | Information Technology Infrastructure Team Lead (Jul 2017 – Jan 2022)">
          <ul>
            - Support Infrastructure Telkomsel Department (OSPLA, DBA, and SBM)
          </ul>
          <ul>
            - Manage all activities completed within SLA and all process
            implemented correctly
          </ul>
          <ul>
            - Conduct meeting regularly with customers to keep the project on
            track, discuss any issues, changes, risks, and follow up them
          </ul>
          <ul>
            - Manage, monitor and control project team members working according
            to quality standard based on SOP
          </ul>
          <ul>
            - Perform a task to collect status and summary of the project and
            present it to project manager or customers
          </ul>
          <ul>
            - Planning a schedule of resources to maintain the quality of the
            projects and to meet the project objectives
          </ul>
        </Step>
      </ul>
      <ul>
        <Step title="Protonema | UI/UX Designer (Sep 2019 – Dec 2021)">
          <ul>
            - Create UI/UX for Monica (Monitoring Charging Application) Mobile
            App
          </ul>
          <ul>- Create Web for protonema.co.id</ul>
          <ul>- Create UI/UX for MyProtonema Mobile App</ul>
        </Step>
      </ul>
      <ul>
        <Step title="Protonema | Information Technology Technical Support (Sep 2015 – Jun 2017)">
          <ul>
            - Support IT Consumer Billing Management Department, Telkomsel
          </ul>
          <ul>
            - Manage 1st level Billing/Invoicing operation related to Online
            Charging System
          </ul>
          <ul>
            - Create reports for Billing/Invoicing operation problems for
            further action to L2 Team
          </ul>
        </Step>
      </ul>
      <Divider />
      <Year>Education</Year>
      <ul>
        <Step title="STMIK Jakarta STI & K (2016 - 2022)">
          Bachelor of Information System - GPA 3.4
        </Step>
      </ul>
      <Divider />
      <Year>Certifications</Year>
      <ul>
        - Indonesia Android Kejar 3.0, Beginner, Granted 2017, Google Developers
      </ul>
      <ul>- Flutter Basic, Granted 2019, IMA Studio</ul>
      <ul>
        - Introduction to Data Studio, Granted 2022, Google Analytics Academy
      </ul>
      <ul>- Data Analytics, Granted 2022, RevoU</ul>
      <ul>- Product Management, Granted 2022, RevoU</ul>
      <ul>
        - English Certificate 70/100 (C1 Advanced), EF Standard English Test
      </ul>
      <Divider />
      <Year>Skills</Year>
      <ul>- Java, C/C++, Shell script, Phyton (OOP)</ul>
      <ul>- SQL (Oracle, MySQL)</ul>
      <ul>- Project Management</ul>
      <ul>- Data Analyst</ul>
      <ul>
        - System Administrator (UNIX based OS like RedHat, CentOS, ubuntu, etc))
      </ul>
      <ul>- Storage and Backup Administrator</ul>
      <ul>- Database Administrator</ul>
      <ul>- UI/UX Designer</ul>
      <ul>- Android/Flutter Developer</ul>
      <ul>- DevSecOps</ul>
      <ul>- Microsoft Office</ul>
      <Divider />
    </>
  );
};

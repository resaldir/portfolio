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
        <Step title="LinkAja | Database Administrator (Sep 2022 – Present)">
          <ul>
            - As a DBA within the SRE Team, I am entrusted with the critical responsibility of ensuring optimal performance of databases. My key duties include safeguarding data integrity, making informed decisions regarding backup and restoration methods, fine-tuning performance, managing access controls, overseeing version upgrades and updates, executing seamless database migrations, and utilizing Terraform for efficient database management, primarily in the AWS cloud environment.
          </ul>
          <ul>
            - Streamline operations by leveraging crontab and Rundeck to automate manual tasks, empowering users to engage in self-service. This automation eliminates the need for manual intervention, resulting in increased efficiency and improved user experience.
          </ul>
          <ul>
            - Accomplished seamless migration of Oracle database to PostgreSQL using DMS AWS, ensuring timely completion before End of Life (EOL). Implemented strategic cost reduction measures, including database consolidation and elasticache, EC2 and RDS DB resizing, resulting in nearly 50% reduction in overall database expenses. These optimizations have enabled LinkAja to achieve significant cost savings in database management.
          </ul>
        </Step>
      </ul>
      <ul>
        <Step title="Protonema | Information Technology Operations Analyst Lead (Jan 2022 – Sep 2022)">
          <ul>
            - In the capacity of supporting the IT Charging Platform and Integration for Telkomsel's Project L2 OCS TC, I analyze, prevent, and predict issues using data derived from ELK and various analytics tools such as Grafana, webapp, and weblogic. This comprehensive approach enables me to proactively address challenges and ensure seamless operations.
          </ul>
          <ul>
            - Conduct thorough analysis of manual tasks to identify opportunities for automation, thereby enhancing overall efficiency. By streamlining processes through automation, I contribute to improved productivity and streamlined operations.
          </ul>
          <ul>
            - Oversee the development of the Monica & Marcela App, aimed at supporting Telkomsel employees in their day-to-day tasks. By managing the app's development, I ensure its smooth operation, enabling employees to enhance their efficiency and productivity. 
          </ul>
        </Step>
      </ul>
      <ul>
        <Step title="Protonema | Information Technology Infrastructure Team Lead (Jul 2017 – Jan 2022)">
          <ul>
            - Provide support to the Infrastructure Department at Telkomsel, specifically in the areas of OSPLA, DBA, and SBM. In this role, I assist in maintaining and optimizing the infrastructure to ensure smooth operations and efficient performance.
          </ul>
          <ul>
            - Ensure that all activities are managed within the Service Level Agreement (SLA) and diligently implement processes to maintain accuracy and compliance. By overseeing these tasks, I uphold high standards and facilitate smooth operations.
          </ul>
          <ul>
            - Regularly conduct meetings with customers to ensure project progress, address any issues or changes, mitigate risks, and follow up on action items. By maintaining open communication, I keep projects on track and foster successful collaborations.
          </ul>
          <ul>
            - Effectively manage project team members to ensure adherence to quality standards as outlined in the Standard Operating Procedures (SOP). By providing guidance and oversight, I ensure consistent and high-quality work from the team.
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
            - Provide support to the IT Consumer Billing Management Department at Telkomsel. In this role, I assist in various aspects of IT operations to ensure smooth functioning and efficient management.
          </ul>
          <ul>
            - Oversee the 1st level Billing/Invoicing operations specifically related to the Online Charging System. By managing these operations, I ensure accurate and timely billing and invoicing processes.
          </ul>
          <ul>
            - Generate reports highlighting billing/invoicing operation issues, providing actionable insights for the L2 Team to take necessary actions. By creating these reports, I contribute to the resolution of problems and the continuous improvement of billing and invoicing processes.
          </ul>
        </Step>
      </ul>
      <Divider />
      <Year>Education</Year>
      <ul>
        <Step title="STMIK Jakarta STI & K (2016 - 2022)">
          Bachelor of Information System - GPA 3.46
        </Step>
      </ul>
      <Divider />
      <Year>Certifications</Year>
      <ul>
        - English Certificate 70/100 (C1 Advanced), granted 2022, EF Standard English Test
      </ul>
      <ul>- Red Hat Certified System Administrator (RHCSA), granted July 2022, Red Hat</ul>
      <ul>
        - Fundamentals of Database Engineering, granted Feb 2023, Udemy
      </ul>
      <ul>- Database MySQL: Pemula sampai Mahir, granted Feb 2023, Udemy</ul>
      <ul>- AWS Cloud Practitioner Essentials, granted February 2023, AWS</ul>
      <ul>
        - Introduction to Data Studio, granted 2022, Google Analytics Academy 
      </ul>
      <ul>- Git: Pemula sampai Mahir, granted Feb 2023, Udemy </ul>
      <ul>- Modern Redis Unleashed, granted 2023, Udemy</ul>
      <ul>- Kibana Fundamentals, granted July 2022, Elastic</ul>
      <ul>- Product Management, granted 2022, RevoU</ul>
      <ul>- Data Analytics, granted 2022, RevoU</ul>
      <ul>- Python, granted June 2022, Kaggle</ul>
      <Divider />
      <Year>Skills</Year>
      <ul>- SQL (Oracle, MySQL, PostgreSQL)</ul>
      <ul>- NoSQL (MongoDB)</ul>
      <ul>- Caching System (redis, memcache)</ul>
      <ul>- AWS (RDS, DMS, DocumentDB, Elasticache, EC2, Route53)</ul>
      <ul>
        - 	Data Analyst (ELK, Google Data Studio, Grafana, PMM)
      </ul>
      <ul>- bash, docker, python, java, web programming</ul>
      <ul>- Infrastructure as Code (Terraform, Ansible) </ul>
      <ul>- VS Code, DBeaver, MongoDB Compass, Red, Postman</ul>
      <ul>- System Administrator (UNIX based OS like RedHat, CentOS, ubuntu)</ul>
      <ul>- Storage and Backup Administrator</ul>
      <ul>- Project Management, DevSecOps</ul>
      <ul>- Collaboration Tools (Microsoft 365, Jira, Confluence, Figma) </ul>
      <Divider />
    </>
  );
};

import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <div className={styles.experienceContainer} id="experience">
      <div className={styles.sectionTitle}>
        <h1>Experience</h1>
        <ion-icon class={styles.workIcon} name="briefcase-outline"></ion-icon>
      </div>

      <div className={styles.experienceList}>
        <p className={styles.year}>Jun &apos;19 &mdash; Present</p>
        <div className={styles.workExperience}>
          <h1>Scotiabank</h1>
          <hr color="#000" className={styles.lineDivider} noshade></hr>
          <p className={styles.workDescription}>
            As a part of the Foreign Exchange eFX development team, I maintain
            and implement back-end microservice apps that communicate to the WSS
            API. Additionally I also work on the front-end application which
            displays FX trades, prices, and configurable database entities for
            business users at the bank.
          </p>
          <p className={styles.technologies}>
            <strong>Technologies: </strong>Angular, Java Spring API, Jenkins,
            Redis, Kafka, IBMMQ, Azure CDP, Ag-Grid, Grafana, Prometheus,
            Cucumber, Jest
          </p>
        </div>

        {/* <p className={styles.year}>May &mdash; Aug &apos;18</p> */}
        <div className={styles.workExperienceEven}>
          <h1>CIBC</h1>
          <hr color="#fff" className={styles.lineDivider} noshade></hr>
          <p className={styles.workDescription}>
            Exploring the interest of Jenkins from my previous internship, I
            spent my last work term on the Software Configuration Management
            team. I migrated one of the old Jenkins build jobs to Blue Ocean
            using Groovy to script up a Jenkinsfile configuration.
          </p>
          <p className={styles.workDescription}>
            With Grafana and Prometheus, I created custom Python exporters to
            help retrieve data on the eBanking back-end application packages.
            This helped the SCM team to have a visual on which packages were
            outdated and notified on failing health checks.
          </p>
          <p className={styles.technologies}>
            <strong>Technologies: </strong>Jenkins/Jenkins Blue Ocean, Python,
            Grafana, Prometheus, Bash
          </p>
        </div>
        <p className={styles.yearRight}>May &mdash; Aug &apos;18</p>

        <p className={styles.year}>May &apos;16 &mdash; Apr &apos;18</p>
        <div className={styles.workExperience}>
          <h1>PAR Technology Canada</h1>
          <hr color="#000" className={styles.lineDivider} noshade></hr>
          <p className={styles.workDescription}>
            My very first internship within my career. I collaborated with a
            team of interns to work on a project for the PixelPoint POS reports
            & dashboard web application. This site allowed POS owners to see
            reports on their sales, and configure their own dashboard of widgets
            to get a visual representation of their data. I was able to learn
            the ropes on the CICD deployment by writing Jenkinsfiles and
            updating AWS configurations.
          </p>
          <p className={styles.technologies}>
            <strong>Technologies: </strong>AngularJS, Java RESTful APIs with
            Dropwizard.io, Wijmo, Jenkins, MySQL, AWS
          </p>
        </div>
      </div>
    </div>
  );
}

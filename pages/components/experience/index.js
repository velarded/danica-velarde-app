import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <div class={styles.experienceContainer} id="experience">
      <div class={styles.sectionTitle}>
        <h1>Experience</h1>
        <ion-icon class={styles.workIcon} name="briefcase-outline"></ion-icon>
      </div>

      <div class={styles.experienceList}>
        <p class={styles.year}>Jun '19 &mdash; Present</p>
        <div class={styles.workExperience}>
          <h1>Scotiabank</h1>
          <p class={styles.workDescription}>
            As a part of the Foreign Exchange eFX development team, I maintain
            and implement back-end microservice apps that communicate to the WSS
            API. Additionally I also work on the front-end application which
            displays FX trades, prices, and configurable database entities for
            business users at the bank.
          </p>
          <p class={styles.technologies}>
            <strong>Technologies: </strong>Angular, Java Spring API, Jenkins,
            Redis, Kafka, IBMMQ, Azure CDP, Ag-Grid, Grafana, Prometheus,
            Cucumber, Jest
          </p>
        </div>

        <p class={styles.year}>May &mdash; Aug '18</p>
        <div class={styles.workExperience}>
          <h1>CIBC</h1>
          <p class={styles.workDescription}>
            Exploring the interest of Jenkins from my previous internship, I
            spent my last work term on the Software Configuration Management
            team. I migrated one of the old Jenkins build jobs to Blue Ocean
            using Groovy to script up a Jenkinsfile configuration.
          </p>
          <p class={styles.workDescription}>
            With Grafana and Prometheus, I created custom Python exporters to
            help retrieve data on the eBanking back-end application packages.
            This helped the SCM team to have a visual on which packages were
            outdated and notified on failing health checks.
          </p>
          <p class={styles.technologies}>
            <strong>Technologies: </strong>Jenkins/Jenkins Blue Ocean, Python,
            Grafana, Prometheus, Bash
          </p>
        </div>
        <p class={styles.year}>May '16 &mdash; Apr '18</p>
        <div class={styles.workExperience}>
          <h1>PAR Technology Canada</h1>
          <p class={styles.workDescription}>
            My very first internship within my career. I collaborated with a
            team of interns to work on a project for the PixelPoint POS reports
            & dashboard web application. This site allowed POS owners to see
            reports on their sales, and configure their own dashboard of widgets
            to get a visual representation of their data. I was able to learn
            the ropes on the CICD deployment by writing Jenkinsfiles and
            updating AWS configurations.
          </p>
          <p class={styles.technologies}>
            <strong>Technologies: </strong>AngularJS, Java RESTful APIs with
            Dropwizard.io, Wijmo, Jenkins, MySQL, AWS
          </p>
        </div>
      </div>
    </div>
  );
}

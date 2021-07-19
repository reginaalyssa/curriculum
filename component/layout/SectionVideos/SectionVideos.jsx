import styles from "./SectionVideos.module.scss";
import Fade from "react-reveal/Fade";
import Image from "next/image";

export default function SectionVideos() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Fade cascade>
          <div className={styles.videoList}>
            <div className={styles.videoItem}>
              <figure>
                <Image
                  src="/images/temp/video1.png"
                  alt="Video1"
                  width={432}
                  height={586}
                  layout="responsive"
                />
                <a href="/" className={styles.play}>
                  <svg
                    width="151"
                    height="104"
                    viewBox="0 0 151 104"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M68.765 76.031a2.944 2.944 0 01-2.942-2.943V30.913a2.943 2.943 0 014.827-2.261l25.306 21.088a2.942 2.942 0 010 4.522L70.65 75.349a2.942 2.942 0 01-1.885.682zm2.944-38.837v29.612L89.476 52 71.71 37.194z"
                      fill="#fff"
                    />
                    <path
                      className={styles.circleWhite}
                      d="M75.913 102a49.727 49.727 0 01-24.437-6.386 2.942 2.942 0 112.888-5.128c17.168 9.664 38.9 6.676 52.846-7.276 17.21-17.21 17.21-45.21 0-62.419-17.21-17.212-45.212-17.21-62.42 0-17.21 17.21-17.21 45.21 0 62.42a2.943 2.943 0 01-4.161 4.162c-19.504-19.505-19.504-51.24 0-70.745 19.504-19.502 51.237-19.503 70.744 0 19.504 19.506 19.504 51.24 0 70.745C101.765 96.98 88.897 102 75.913 102z"
                      fill="#fff"
                    />
                    <path
                      className={styles.circleYellow}
                      d="M75.913 102a49.727 49.727 0 01-24.437-6.386 2.942 2.942 0 112.888-5.128c17.168 9.664 38.9 6.676 52.846-7.276 17.21-17.21 17.21-45.21 0-62.419-17.21-17.212-45.212-17.21-62.42 0-17.21 17.21-17.21 45.21 0 62.42a2.944 2.944 0 01-4.161 4.162c-19.504-19.505-19.504-51.24 0-70.745 19.504-19.502 51.237-19.503 70.744 0 19.504 19.506 19.504 51.24 0 70.745C101.765 96.98 88.897 102 75.913 102z"
                      fill="#FDB500"
                    />
                  </svg>
                </a>
                <figcaption>
                  <h3>
                    <a href="/">All you need to know about Supabase</a>
                  </h3>
                </figcaption>
              </figure>
            </div>

            <div className={styles.videoItem}>
              <figure>
                <Image
                  src="/images/temp/video2.png"
                  alt="Video2"
                  width={432}
                  height={586}
                  layout="responsive"
                />
                <a href="/" className={styles.play}>
                  <svg
                    width="151"
                    height="104"
                    viewBox="0 0 151 104"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M68.765 76.031a2.944 2.944 0 01-2.942-2.943V30.913a2.943 2.943 0 014.827-2.261l25.306 21.088a2.942 2.942 0 010 4.522L70.65 75.349a2.942 2.942 0 01-1.885.682zm2.944-38.837v29.612L89.476 52 71.71 37.194z"
                      fill="#fff"
                    />
                    <path
                      className={styles.circleWhite}
                      d="M75.913 102a49.727 49.727 0 01-24.437-6.386 2.942 2.942 0 112.888-5.128c17.168 9.664 38.9 6.676 52.846-7.276 17.21-17.21 17.21-45.21 0-62.419-17.21-17.212-45.212-17.21-62.42 0-17.21 17.21-17.21 45.21 0 62.42a2.943 2.943 0 01-4.161 4.162c-19.504-19.505-19.504-51.24 0-70.745 19.504-19.502 51.237-19.503 70.744 0 19.504 19.506 19.504 51.24 0 70.745C101.765 96.98 88.897 102 75.913 102z"
                      fill="#fff"
                    />
                    <path
                      className={styles.circleYellow}
                      d="M75.913 102a49.727 49.727 0 01-24.437-6.386 2.942 2.942 0 112.888-5.128c17.168 9.664 38.9 6.676 52.846-7.276 17.21-17.21 17.21-45.21 0-62.419-17.21-17.212-45.212-17.21-62.42 0-17.21 17.21-17.21 45.21 0 62.42a2.944 2.944 0 01-4.161 4.162c-19.504-19.505-19.504-51.24 0-70.745 19.504-19.502 51.237-19.503 70.744 0 19.504 19.506 19.504 51.24 0 70.745C101.765 96.98 88.897 102 75.913 102z"
                      fill="#FDB500"
                    />
                  </svg>
                </a>
                <figcaption>
                  <h3>All you need to know about Supabase</h3>
                </figcaption>
              </figure>
            </div>

            <div className={styles.videoItem}>
              <figure>
                <Image
                  src="/images/temp/video3.png"
                  alt="Video3"
                  width={432}
                  height={586}
                  layout="responsive"
                />
                <a href="/" className={styles.play}>
                  <svg
                    width="151"
                    height="104"
                    viewBox="0 0 151 104"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M68.765 76.031a2.944 2.944 0 01-2.942-2.943V30.913a2.943 2.943 0 014.827-2.261l25.306 21.088a2.942 2.942 0 010 4.522L70.65 75.349a2.942 2.942 0 01-1.885.682zm2.944-38.837v29.612L89.476 52 71.71 37.194z"
                      fill="#fff"
                    />
                    <path
                      className={styles.circleWhite}
                      d="M75.913 102a49.727 49.727 0 01-24.437-6.386 2.942 2.942 0 112.888-5.128c17.168 9.664 38.9 6.676 52.846-7.276 17.21-17.21 17.21-45.21 0-62.419-17.21-17.212-45.212-17.21-62.42 0-17.21 17.21-17.21 45.21 0 62.42a2.943 2.943 0 01-4.161 4.162c-19.504-19.505-19.504-51.24 0-70.745 19.504-19.502 51.237-19.503 70.744 0 19.504 19.506 19.504 51.24 0 70.745C101.765 96.98 88.897 102 75.913 102z"
                      fill="#fff"
                    />
                    <path
                      className={styles.circleYellow}
                      d="M75.913 102a49.727 49.727 0 01-24.437-6.386 2.942 2.942 0 112.888-5.128c17.168 9.664 38.9 6.676 52.846-7.276 17.21-17.21 17.21-45.21 0-62.419-17.21-17.212-45.212-17.21-62.42 0-17.21 17.21-17.21 45.21 0 62.42a2.944 2.944 0 01-4.161 4.162c-19.504-19.505-19.504-51.24 0-70.745 19.504-19.502 51.237-19.503 70.744 0 19.504 19.506 19.504 51.24 0 70.745C101.765 96.98 88.897 102 75.913 102z"
                      fill="#FDB500"
                    />
                  </svg>
                </a>
                <figcaption>
                  <h3>All you need to know about Supabase</h3>
                </figcaption>
              </figure>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

import Link from "next/link";
import Container from "../Layout/Container";
import { Button } from "../ui/button";

const homeRef = "/";

export const Navigation = () => {
  return (
    <div className="bg-secondary py-3 h-[60px]">
    <Container>
      <div className="grid grid-cols-5">
        <Button className="bg-transparent text-grey-300 hover:bg-blue-300 hover:text-primary">MUSIC</Button>
        <Button className="bg-transparent text-grey-300 hover:bg-blue-300 hover:text-primary">VIDEOS</Button>
        <Link className="flex items-center justify-center relative top-[-40px] cursor-pointer" href={homeRef}>
          <svg
            width="102"
            height="116"
            viewBox="0 0 102 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M49.5 2.02073C50.4282 1.48483 51.5718 1.48483 52.5 2.02073L98.7295 28.7113C99.6577 29.2472 100.229 30.2376 100.229 31.3094V84.6906C100.229 85.7624 99.6577 86.7528 98.7295 87.2887L52.5 113.979C51.5718 114.515 50.4282 114.515 49.5 113.979L3.27053 87.2887C2.34233 86.7528 1.77053 85.7624 1.77053 84.6906V31.3094C1.77053 30.2376 2.34232 29.2472 3.27053 28.7113L49.5 2.02073Z"
              fill="white"
              stroke="#0ABFAC"
              stroke-width="2"
            />
            <path
              d="M22.016 63.336H27.536V66H18.656V49.248H22.016V63.336ZM37.4476 66.168C35.8796 66.168 34.4396 65.8 33.1276 65.064C31.8156 64.328 30.7756 63.312 30.0076 62.016C29.2396 60.704 28.8556 59.224 28.8556 57.576C28.8556 55.944 29.2396 54.48 30.0076 53.184C30.7756 51.872 31.8156 50.848 33.1276 50.112C34.4396 49.376 35.8796 49.008 37.4476 49.008C39.0316 49.008 40.4716 49.376 41.7676 50.112C43.0796 50.848 44.1116 51.872 44.8636 53.184C45.6316 54.48 46.0156 55.944 46.0156 57.576C46.0156 59.224 45.6316 60.704 44.8636 62.016C44.1116 63.312 43.0796 64.328 41.7676 65.064C40.4556 65.8 39.0156 66.168 37.4476 66.168ZM37.4476 63.168C38.4556 63.168 39.3436 62.944 40.1116 62.496C40.8796 62.032 41.4796 61.376 41.9116 60.528C42.3436 59.68 42.5596 58.696 42.5596 57.576C42.5596 56.456 42.3436 55.48 41.9116 54.648C41.4796 53.8 40.8796 53.152 40.1116 52.704C39.3436 52.256 38.4556 52.032 37.4476 52.032C36.4396 52.032 35.5436 52.256 34.7596 52.704C33.9916 53.152 33.3916 53.8 32.9596 54.648C32.5276 55.48 32.3116 56.456 32.3116 57.576C32.3116 58.696 32.5276 59.68 32.9596 60.528C33.3916 61.376 33.9916 62.032 34.7596 62.496C35.5436 62.944 36.4396 63.168 37.4476 63.168ZM60.1794 54.288C59.7954 53.584 59.2674 53.048 58.5954 52.68C57.9234 52.312 57.1394 52.128 56.2434 52.128C55.2514 52.128 54.3714 52.352 53.6034 52.8C52.8354 53.248 52.2354 53.888 51.8034 54.72C51.3714 55.552 51.1554 56.512 51.1554 57.6C51.1554 58.72 51.3714 59.696 51.8034 60.528C52.2514 61.36 52.8674 62 53.6514 62.448C54.4354 62.896 55.3474 63.12 56.3874 63.12C57.6674 63.12 58.7154 62.784 59.5314 62.112C60.3474 61.424 60.8834 60.472 61.1394 59.256H55.3794V56.688H64.4514V59.616C64.2274 60.784 63.7474 61.864 63.0114 62.856C62.2754 63.848 61.3234 64.648 60.1554 65.256C59.0034 65.848 57.7074 66.144 56.2674 66.144C54.6514 66.144 53.1874 65.784 51.8754 65.064C50.5794 64.328 49.5554 63.312 48.8034 62.016C48.0674 60.72 47.6994 59.248 47.6994 57.6C47.6994 55.952 48.0674 54.48 48.8034 53.184C49.5554 51.872 50.5794 50.856 51.8754 50.136C53.1874 49.4 54.6434 49.032 56.2434 49.032C58.1314 49.032 59.7714 49.496 61.1634 50.424C62.5554 51.336 63.5154 52.624 64.0434 54.288H60.1794ZM74.7133 66.168C73.1453 66.168 71.7053 65.8 70.3933 65.064C69.0813 64.328 68.0413 63.312 67.2733 62.016C66.5053 60.704 66.1213 59.224 66.1213 57.576C66.1213 55.944 66.5053 54.48 67.2733 53.184C68.0413 51.872 69.0813 50.848 70.3933 50.112C71.7053 49.376 73.1453 49.008 74.7133 49.008C76.2973 49.008 77.7373 49.376 79.0333 50.112C80.3453 50.848 81.3773 51.872 82.1293 53.184C82.8973 54.48 83.2813 55.944 83.2813 57.576C83.2813 59.224 82.8973 60.704 82.1293 62.016C81.3773 63.312 80.3453 64.328 79.0333 65.064C77.7213 65.8 76.2813 66.168 74.7133 66.168ZM74.7133 63.168C75.7213 63.168 76.6093 62.944 77.3773 62.496C78.1453 62.032 78.7453 61.376 79.1773 60.528C79.6093 59.68 79.8253 58.696 79.8253 57.576C79.8253 56.456 79.6093 55.48 79.1773 54.648C78.7453 53.8 78.1453 53.152 77.3773 52.704C76.6093 52.256 75.7213 52.032 74.7133 52.032C73.7053 52.032 72.8093 52.256 72.0253 52.704C71.2573 53.152 70.6573 53.8 70.2253 54.648C69.7933 55.48 69.5773 56.456 69.5773 57.576C69.5773 58.696 69.7933 59.68 70.2253 60.528C70.6573 61.376 71.2573 62.032 72.0253 62.496C72.8093 62.944 73.7053 63.168 74.7133 63.168Z"
              fill="#0ABFAC"
            />
          </svg>
        </Link>

        <Button className="bg-transparent text-grey-300 hover:bg-blue-300 hover:text-primary">MARKETPLACE</Button>
        <Button className="bg-transparent text-grey-300 hover:bg-blue-300 hover:text-primary">VOTING</Button>
      </div>
    </Container>
    </div>
  );
};
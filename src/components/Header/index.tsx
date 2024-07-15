import Container from "../Layout/Container";
import { Search } from "./InputSearch";
import { Button } from "../ui/button";
import { Navigation } from "./Navigation";
export const Header = ({ isOnboardScreen }: { isOnboardScreen?: boolean }) => {
  return (
    <header className="sticky top-0 z-10 border-b bg-background" style={{boxShadow: '0px 2px 20px 0px rgba(0, 0, 0, 0.08)'}}>
      <div className="bg-primary py-3">
        <Container>
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 7H21"
                  stroke="#52616B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M3 12H21"
                  stroke="#52616B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M3 17H21"
                  stroke="#52616B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
              <Search />
            </div>
            <div className="flex gap-3 items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.4405 8.90039C20.0405 9.21039 21.5105 11.0604 21.5105 15.1104V15.2404C21.5105 19.7104 19.7205 21.5004 15.2505 21.5004H8.74047C4.27047 21.5004 2.48047 19.7104 2.48047 15.2404V15.1104C2.48047 11.0904 3.93047 9.24039 7.47047 8.91039"
                  stroke="#52616B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 15.0001V3.62012"
                  stroke="#52616B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.3504 5.85L12.0004 2.5L8.65039 5.85"
                  stroke="#52616B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <Button
                variant="outline"
                className="bg-green rounded-xl text-primary"
              >
                Sign in
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <Navigation />
    </header>
  );
};

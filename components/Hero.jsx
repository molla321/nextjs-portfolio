import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

// components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1">Hello, my name is Muhammad Rabbi</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Lorem ipsum dolor sit amet adipisicing elit. Nemo aspernatur
              debitis voluptate est architecto necessitatibus.
            </p>

            {/* button */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                DownloadCV <Download size={18} />
              </Button>
            </div>
            {/* scoiale */}
            <Socials
              containerStyle="flex gap-x-6 mx-auto xl:mx-0"
              iconStyle="text-foreground text-[22px] hover:text-primary transsition-all"
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            {/* badge 1*/}

            <Badge
              icon={<RiBriefcase4Fill />}
              containerStyle="absolute top-[24%] -left-[5rem]"
              endCountNum={3}
              badgeText="Years Of Expreience"
            />

             {/* badge 1*/}
             <Badge
              icon={<RiTodoFill />}
              containerStyle="absolute top-[80%] -left-[1rem]"
              endCountNum={6}
              endCountext='k'
              badgeText="Finished Projects"
            />
            
             {/* badge 3*/}
             <Badge
              icon={<RiTeamFill />}
              containerStyle="absolute top-[55%] -right-8"
              endCountNum={9}
              endCountext='k'
              badgeText="Happy Clients"
            />

            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dar w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg containerStyle="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom" imgSrc={'/hero/32_n.jpg'}/>
          </div>
          {/* icons */}
          <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
            <RiArrowDownSLine className="text-3xl text-primariy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

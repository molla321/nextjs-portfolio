"use client";

import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const reviewsData = [
  {
    avate: "/reviews/avatar-1.png",
    name: "Humira Hasan",
    job: "Chet",
    reveiws:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi dolor soluta voluptas? Assumenda, commodi provident.",
  },
  {
    avate: "/reviews/avatar-2.png",
    name: "Humira Hasan",
    job: "Chet",
    reveiws:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi dolor soluta voluptas? Assumenda, commodi provident.",
  },
  {
    avate: "/reviews/avatar-3.png",
    name: "Humira Hasan",
    job: "Chet",
    reveiws:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi dolor soluta voluptas? Assumenda, commodi provident.",
  },
  {
    avate: "/reviews/avatar-4.png",
    name: "Humira Hasan",
    job: "Chet",
    reveiws:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi dolor soluta voluptas? Assumenda, commodi provident.",
  },
  {
    avate: "/reviews/avatar-5.png",
    name: "Humira Hasan",
    job: "Chet",
    reveiws:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi dolor soluta voluptas? Assumenda, commodi provident.",
  },
  {
    avate: "/reviews/avatar-6.png",
    name: "Humira Hasan",
    job: "Chet",
    reveiws:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi dolor soluta voluptas? Assumenda, commodi provident.",
  },
];
const Reviews = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>

        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex gap-x-4 items-center">
                      {/* image */}
                      <Image
                        src={person.avate}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />

                      {/* name */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.reveiws}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
